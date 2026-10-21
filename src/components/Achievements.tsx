import { useEffect, useRef, useState } from "react";
import "./styles/Achievements.css";
import { config } from "../config";

type Stat = (typeof config.achievements.stats)[number];

const CountUp = ({ stat, start }: { stat: Stat; start: boolean }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setValue(stat.value);
      return;
    }
    const duration = 1600;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(stat.value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, stat.value]);

  return (
    <span className="ach-stat-value">
      {value.toFixed(stat.decimals)}
      {stat.suffix}
    </span>
  );
};

const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { stats, items } = config.achievements;

  return (
    <div
      className={`ach-section section-container${visible ? " ach-visible" : ""}`}
      id="achievements"
      ref={ref}
    >
      <h2>
        Awards <span>&</span> publications
      </h2>
      <div className="ach-stats">
        {stats.map((stat, i) => (
          <div
            className="ach-stat"
            key={stat.label}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <CountUp stat={stat} start={visible} />
            <span className="ach-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="ach-items">
        {items.map((item, i) => (
          <div
            className="ach-item"
            key={item.title}
            style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
          >
            <span className="ach-tag">{item.tag}</span>
            <div className="ach-item-text">
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
            <span className="ach-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
