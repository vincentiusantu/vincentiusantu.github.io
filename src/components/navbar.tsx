"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", text: "HOME", icon: "/home-icon.png" },
    { href: "/about", text: "ABOUT", icon: "/about-icon.png" },
    { href: "/coverage", text: "SKILLS", icon: "/skill-icon.png" },
    { href: "/projects", text: "PROJECTS", icon: "/project-icon.png" },
    { href: "/contacts", text: "CONTACT", icon: "/contact-icon.png" },
]

// Converts black icon → white (dim) or cyan (active)
const filterDim  = 'brightness(0) invert(1) opacity(0.35)';
const filterActive = 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(155deg)';

export default function Navbar() {
    const path = usePathname();

    return (
        <>
            {/* ── Desktop: sticky top bar ── */}
            <nav style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                background: 'rgba(13, 17, 23, 0.92)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(0, 217, 224, 0.12)',
            }}
            className="hidden sm:block"
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 32px' }}>
                    <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--accent-cyan)',
                        letterSpacing: '0.1em',
                    }}>
                        &lt;CEN /&gt;
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {links.map((link) => {
                            const isActive = link.href === path;
                            return (
                                <Link key={link.href} href={link.href} style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.7rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.1em',
                                    padding: '6px 14px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                                    background: isActive ? 'rgba(0, 217, 224, 0.1)' : 'transparent',
                                    border: isActive ? '1px solid rgba(0, 217, 224, 0.3)' : '1px solid transparent',
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                    }
                                }}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* ── Mobile: fixed bottom bar ── */}
            <nav style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                background: 'rgba(13, 17, 23, 0.97)',
                backdropFilter: 'blur(16px)',
                borderTop: '1px solid rgba(0, 217, 224, 0.12)',
                paddingBottom: 'env(safe-area-inset-bottom)',
            }}
            className="block sm:hidden"
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '8px 0',
                }}>
                    {links.map((link) => {
                        const isActive = link.href === path;
                        return (
                            <Link key={link.href} href={link.href} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '4px',
                                padding: '6px 12px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                background: isActive ? 'rgba(0, 217, 224, 0.08)' : 'transparent',
                                minWidth: '56px',
                            }}>
                                {/* Active indicator dot */}
                                <div style={{
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    background: isActive ? 'var(--accent-cyan)' : 'transparent',
                                    marginBottom: '2px',
                                    transition: 'background 0.2s',
                                    boxShadow: isActive ? '0 0 6px var(--accent-cyan)' : 'none',
                                }} />
                                <Image
                                    src={link.icon}
                                    width={22}
                                    height={22}
                                    alt={link.text}
                                    style={{
                                        filter: isActive ? filterActive : filterDim,
                                        transition: 'filter 0.2s',
                                    }}
                                />
                                <span style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.55rem',
                                    letterSpacing: '0.08em',
                                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                                    transition: 'color 0.2s',
                                }}>
                                    {link.text}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Spacer so content isn't hidden behind bottom nav */}
            <div className="block sm:hidden" style={{ height: '72px' }} />
        </>
    );
}