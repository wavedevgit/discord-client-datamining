/** chunk id: 586068, original params: e,t,n (module,exports,require) **/
n.d(t, {
    KJ: () => N,
    N_: () => G,
    OS: () => f,
    Y9: () => y,
    c3: () => T,
    lg: () => O,
    nG: () => L,
    vw: () => R
});
var i = n(627968),
    r = n(64700),
    a = n(397927),
    s = n(329308),
    l = n(571694),
    o = n(47167),
    d = n(713654),
    _ = n(523728),
    c = n(200470),
    u = n(769015),
    A = n(263063),
    g = n(376943),
    E = n(636585),
    I = n(71393),
    h = n(994500),
    p = n(287809),
    C = n(427262),
    m = n(985018),
    b = n(649134);
class S extends r.PureComponent {
    node;
    componentDidMount() {
        let {
            focused: e,
            onFocus: t
        } = this.props, {
            node: n
        } = this;
        e && null != n && t(n)
    }
    componentDidUpdate(e) {
        let {
            focused: t,
            onFocus: n
        } = this.props, {
            node: i
        } = this;
        null != i && t && !e.focused && n(i)
    }
    handleClick = e => {
        e.preventDefault();
        let {
            onClick: t
        } = this.props, {
            node: n
        } = this;
        null != n && t(e, n)
    };
    handleMouseEnter = e => {
        let {
            onMouseEnter: t
        } = this.props, {
            node: n
        } = this;
        null != n && t(e, n)
    };
    setRef = e => {
        this.node = e
    };
    render() {
        let {
            focused: e,
            children: t,
            score: n,
            onContextMenu: r,
            id: s,
            "aria-label": l
        } = this.props;
        return (0, i.jsxs)(a.DUT, {
            role: "option",
            id: s,
            "aria-label": l,
            "aria-selected": e,
            focusProps: {
                enabled: !1
            },
            tabIndex: -1,
            innerRef: this.setRef,
            className: b.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", {
                className: b.fN,
                children: 0 | n
            }) : null]
        })
    }
}
class f extends r.Component {
    renderIcon() {
        let {
            guild: e
        } = this.props;
        return (0, i.jsx)("div", {
            className: b._C,
            children: (0, i.jsx)(A.A, {
                tabIndex: -1,
                guild: e,
                size: A.A.Sizes.MINI,
                className: b.$f
            })
        })
    }
    renderName() {
        let {
            guild: e
        } = this.props;
        return (0, i.jsx)("div", {
            className: b.UU,
            children: (0, i.jsx)("span", {
                className: b.YW,
                children: e.name
            })
        })
    }
    renderContent() {
        let {
            unread: e,
            children: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? b.XB : b.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: b.Lr,
                children: t
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            guild: e
        } = this.props;
        return m.intl.formatToPlainString(m.t.WVq3Lr, {
            name: e.name
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            id: l
        } = this.props;
        return (0, i.jsx)(S, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent()
        })
    }
}
class T extends r.Component {
    static defaultProps = {
        unread: !1
    };
    renderIcon() {
        let {
            channel: e
        } = this.props, t = (0, d.gU)(e);
        if (null == t) return null;
        let n = (0, _.A)(e) ?? "";
        return (0, i.jsx)("div", {
            className: b.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, {
                className: b.Kk,
                size: "xs",
                color: "currentColor"
            })
        })
    }
    renderName() {
        let e, t, {
            mentions: n,
            category: r,
            channel: a,
            isMentionLowImportance: s
        } = this.props;
        return null != n && n > 0 && (e = (0, i.jsx)(c.A, {
            className: b.qS,
            value: n,
            lowImportance: s
        })), null != r && (t = (0, i.jsx)("span", {
            className: b.N4,
            children: (0, o.m1)(r, p.default, h.A)
        })), (0, i.jsxs)("div", {
            className: b.UU,
            children: [(0, i.jsx)("span", {
                className: b.YW,
                children: (0, o.m1)(a, p.default, h.A)
            }), e, this.renderVoiceStates(), t]
        })
    }
    renderVoiceStates() {
        let {
            voiceStates: e,
            channel: t
        } = this.props;
        return null == e ? null : (0, i.jsx)(E.A, {
            className: b.x7,
            guildId: t.guild_id,
            users: e.map(e => {
                let {
                    user: t
                } = e;
                return {
                    user: t
                }
            }),
            max: 4
        })
    }
    renderContent() {
        let {
            unread: e,
            mentions: t,
            children: n
        } = this.props;
        return (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: e || null != t && t > 0 ? b.XB : b.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: b.Lr,
                children: n
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            channel: e
        } = this.props, t = I.A.getGuild(this.props.channel.guild_id)?.name, n = (0, o.m1)(e, p.default, h.A), i = (0, _.A)(e);
        return m.intl.formatToPlainString(m.t["Vw/da+"], {
            name: n,
            type: i,
            guild: t
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            id: l
        } = this.props;
        return (0, i.jsx)(S, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent()
        })
    }
}
class L extends r.Component {
    renderIcon() {
        let {
            channel: e,
            status: t
        } = this.props;
        return (0, i.jsx)("div", {
            className: b.IU,
            children: (0, i.jsx)(a.euF, {
                src: (0, l.Y)(e),
                size: a._3J.SIZE_20,
                "aria-hidden": !0,
                status: t
            })
        })
    }
    renderName() {
        let e, {
            mentions: t,
            channel: n
        } = this.props;
        return null != t && t > 0 && (e = (0, i.jsx)(c.A, {
            className: b.qS,
            value: t
        })), (0, i.jsxs)("div", {
            className: b.UU,
            children: [(0, i.jsx)("span", {
                className: b.YW,
                children: (0, o.m1)(n, p.default, h.A)
            }), e]
        })
    }
    renderContent() {
        let {
            mentions: e,
            children: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? b.XB : b.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: b.Lr,
                children: t
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            channel: e,
            mentions: t
        } = this.props, n = (0, o.m1)(e, p.default, h.A);
        return null != t && t > 0 ? m.intl.formatToPlainString(m.t.LYdVfN, {
            name: n,
            mentions: t
        }) : m.intl.formatToPlainString(m.t.lLSbno, {
            name: n
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            id: l
        } = this.props;
        return (0, i.jsx)(S, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent()
        })
    }
}
class N extends r.Component {
    renderIcon() {
        let {
            user: e,
            status: t,
            isMobile: n
        } = this.props;
        return (0, i.jsx)("div", {
            className: b.zc,
            children: (0, i.jsx)(a.euF, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: a._3J.SIZE_20,
                status: t,
                isMobile: n
            })
        })
    }
    getDisplayNickname() {
        let e, {
                user: t,
                comparator: n
            } = this.props,
            i = h.A.getNickname(t.id);
        return ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) && (e = i ?? C.Ay.getName(t)), e
    }
    renderName() {
        let e, {
                user: t,
                mentions: n
            } = this.props,
            r = this.getDisplayNickname();
        return null != n && n > 0 && (e = (0, i.jsx)(c.A, {
            className: b.qS,
            value: n
        })), (0, i.jsxs)("div", {
            className: b.UU,
            children: [(0, i.jsx)("span", {
                className: b.YW,
                children: r
            }), e, (0, i.jsx)("span", {
                className: b.Xh,
                children: C.Ay.getUserTag(t)
            })]
        })
    }
    renderContent() {
        let {
            children: e,
            mentions: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? b.XB : b.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: b.Lr,
                children: e
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            mentions: e,
            user: t
        } = this.props, n = this.getDisplayNickname(), i = C.Ay.getUserTag(t);
        return null != e && e > 0 ? m.intl.formatToPlainString(m.t["6b9UrR"], {
            name: n,
            id: i,
            mentions: e
        }) : m.intl.formatToPlainString(m.t.GWYOAY, {
            name: n,
            id: i
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            id: l
        } = this.props;
        return (0, i.jsx)(S, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent()
        })
    }
}
class O extends r.Component {
    renderContent() {
        let {
            children: e,
            application: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: b.xr,
            children: [(0, i.jsx)("div", {
                className: b.zc,
                children: (0, i.jsx)(u.A, {
                    tabIndex: -1,
                    className: b.Gt,
                    game: t,
                    size: b.D0
                })
            }), t.name, (0, i.jsx)("div", {
                className: b.Lr,
                children: e
            })]
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            id: a
        } = this.props;
        return (0, i.jsx)(S, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent()
        })
    }
}
class y extends r.Component {
    render() {
        return (0, i.jsx)("div", {
            className: b.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: b.xr,
                children: (0, i.jsx)("div", {
                    className: b.wx,
                    children: this.props.children
                })
            })
        })
    }
}
class G extends r.Component {
    renderContent() {
        let e, t, {
                link: n,
                children: r
            } = this.props,
            s = (0, g.vu)(n.path);
        return null == s || void 0 === s.messageId ? (e = m.intl.string(m.t.qbSCqj), t = (0, i.jsx)(a.qYV, {
            size: "xs",
            color: "currentColor"
        })) : (0, g.r9)(s) ? (e = m.intl.string(m.t["6Fd/j1"]), t = (0, i.jsx)(a.txs, {
            size: "xs",
            color: "currentColor"
        })) : (e = m.intl.string(m.t.jQRwp4), t = (0, i.jsx)(a.XAi, {
            size: "xs",
            color: "currentColor"
        })), (0, i.jsxs)("div", {
            className: b.xr,
            children: [(0, i.jsx)("div", {
                className: b.zc,
                children: t
            }), e, (0, i.jsx)("div", {
                className: b.Lr,
                children: r
            })]
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            id: l
        } = this.props;
        return (0, i.jsx)(S, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent()
        })
    }
}
class R extends r.Component {
    renderContent() {
        let e, t, {
            navigationRecord: n,
            children: r
        } = this.props;
        switch (n.type) {
            case s.t1.SHOP:
                e = m.intl.string(m.t.pWG4ze), t = (0, i.jsx)(a.U1X, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case s.t1.SHOP_ORBS_TAB:
                e = m.intl.string(m.t.EBYkzk), t = (0, i.jsx)(a.U1X, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case s.t1.QUEST_ORBS:
                e = `${m.intl.string(m.t.ElYQFS)} ${m.intl.string(m.t.JALI2K)}`, t = (0, i.jsx)(a.r2v, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case s.t1.NITRO_HOME:
                e = m.intl.string(m.t.Ipxkog), t = (0, i.jsx)(a.tvc, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case s.t1.QUEST_HOME:
                e = m.intl.string(m.t.JALI2K), t = (0, i.jsx)(a.r2v, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case s.t1.APPS_HOME:
                e = m.intl.string(m.t.PHjkRE), t = (0, i.jsx)(a.k9F, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case s.t1.SETTINGS:
                e = n.label ?? m.intl.string(m.t["3D5yo/"]), t = (0, i.jsx)(a.Zes, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case s.t1.PLAYGROUND:
                if (e = n.label ?? `${n.collectionId} Playground`, null != n.IconComponent) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, {
                        size: "xs",
                        color: "currentColor"
                    })
                } else t = (0, i.jsx)(a.HUC, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            default:
                e = n.id, t = (0, i.jsx)(a.qYV, {
                    size: "xs",
                    color: "currentColor"
                })
        }
        return (0, i.jsxs)("div", {
            className: b.xr,
            children: [(0, i.jsx)("div", {
                className: b.zc,
                children: t
            }), (0, i.jsx)("div", {
                className: b.UU,
                children: e
            }), (0, i.jsx)("div", {
                className: b.Lr,
                children: r
            })]
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            id: l
        } = this.props;
        return (0, i.jsx)(S, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent()
        })
    }
}