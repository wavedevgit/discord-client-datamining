/** chunk id: 586068 params = (module,exports,require) **/
n.d(t, {
    KJ: () => L,
    N_: () => G,
    OS: () => b,
    Y9: () => y,
    c3: () => f,
    lg: () => O,
    nG: () => N,
    vw: () => R
});
var i = n(627968),
    r = n(64700),
    s = n(397927),
    a = n(329308),
    l = n(571694),
    o = n(47167),
    d = n(713654),
    c = n(523728),
    _ = n(200470),
    u = n(769015),
    A = n(263063),
    E = n(376943),
    g = n(636585),
    I = n(71393),
    h = n(994500),
    C = n(287809),
    p = n(427262),
    m = n(985018),
    S = n(762032);
class T extends r.PureComponent {
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
            id: a,
            "aria-label": l
        } = this.props;
        return (0, i.jsxs)(s.DUT, {
            role: "option",
            id: a,
            "aria-label": l,
            "aria-selected": e,
            focusProps: {
                enabled: !1
            },
            tabIndex: -1,
            innerRef: this.setRef,
            className: S.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", {
                className: S.fN,
                children: 0 | n
            }) : null]
        })
    }
}
class b extends r.Component {
    renderIcon() {
        let {
            guild: e
        } = this.props;
        return (0, i.jsx)("div", {
            className: S._C,
            children: (0, i.jsx)(A.Ay, {
                tabIndex: -1,
                guild: e,
                size: A.Ay.Sizes.MINI,
                className: S.$f
            })
        })
    }
    renderName() {
        let {
            guild: e
        } = this.props;
        return (0, i.jsx)("div", {
            className: S.UU,
            children: (0, i.jsx)("span", {
                className: S.YW,
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
            className: e ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: S.Lr,
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
            focused: s,
            score: a,
            id: l
        } = this.props;
        return (0, i.jsx)(T, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        })
    }
}
class f extends r.Component {
    static defaultProps = {
        unread: !1
    };
    renderIcon() {
        let {
            channel: e
        } = this.props, t = (0, d.gU)(e);
        if (null == t) return null;
        let n = (0, c.A)(e) ?? "";
        return (0, i.jsx)("div", {
            className: S.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, {
                className: S.Kk,
                size: "xs",
                color: "currentColor"
            })
        })
    }
    renderName() {
        let e, t, {
            mentions: n,
            category: r,
            channel: s,
            isMentionLowImportance: a
        } = this.props;
        return null != n && n > 0 && (e = (0, i.jsx)(_.A, {
            className: S.qS,
            value: n,
            lowImportance: a
        })), null != r && (t = (0, i.jsx)("span", {
            className: S.N4,
            children: (0, o.m1)(r, C.default, h.A)
        })), (0, i.jsxs)("div", {
            className: S.UU,
            children: [(0, i.jsx)("span", {
                className: S.YW,
                children: (0, o.m1)(s, C.default, h.A)
            }), e, this.renderVoiceStates(), t]
        })
    }
    renderVoiceStates() {
        let {
            voiceStates: e,
            channel: t
        } = this.props;
        return null == e ? null : (0, i.jsx)(g.A, {
            className: S.x7,
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
            className: e || null != t && t > 0 ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: S.Lr,
                children: n
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            channel: e
        } = this.props, t = I.A.getGuild(this.props.channel.guild_id)?.name, n = (0, o.m1)(e, C.default, h.A), i = (0, c.A)(e);
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
            focused: s,
            score: a,
            id: l
        } = this.props;
        return (0, i.jsx)(T, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        })
    }
}
class N extends r.Component {
    renderIcon() {
        let {
            channel: e,
            status: t
        } = this.props;
        return (0, i.jsx)("div", {
            className: S.IU,
            children: (0, i.jsx)(s.euF, {
                src: (0, l.Y)(e),
                size: s._3J.SIZE_20,
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
        return null != t && t > 0 && (e = (0, i.jsx)(_.A, {
            className: S.qS,
            value: t
        })), (0, i.jsxs)("div", {
            className: S.UU,
            children: [(0, i.jsx)("span", {
                className: S.YW,
                children: (0, o.m1)(n, C.default, h.A)
            }), e]
        })
    }
    renderContent() {
        let {
            mentions: e,
            children: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: S.Lr,
                children: t
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            channel: e,
            mentions: t
        } = this.props, n = (0, o.m1)(e, C.default, h.A);
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
            focused: s,
            score: a,
            id: l
        } = this.props;
        return (0, i.jsx)(T, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        })
    }
}
class L extends r.Component {
    renderIcon() {
        let {
            user: e,
            status: t,
            isMobile: n
        } = this.props;
        return (0, i.jsx)("div", {
            className: S.zc,
            children: (0, i.jsx)(s.euF, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: s._3J.SIZE_20,
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
        return ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) && (e = i ?? p.Ay.getName(t)), e
    }
    renderName() {
        let e, {
                user: t,
                mentions: n
            } = this.props,
            r = this.getDisplayNickname();
        return null != n && n > 0 && (e = (0, i.jsx)(_.A, {
            className: S.qS,
            value: n
        })), (0, i.jsxs)("div", {
            className: S.UU,
            children: [(0, i.jsx)("span", {
                className: S.YW,
                children: r
            }), e, (0, i.jsx)("span", {
                className: S.Xh,
                children: p.Ay.getUserTag(t)
            })]
        })
    }
    renderContent() {
        let {
            children: e,
            mentions: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: S.Lr,
                children: e
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            mentions: e,
            user: t
        } = this.props, n = this.getDisplayNickname(), i = p.Ay.getUserTag(t);
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
            focused: s,
            score: a,
            id: l
        } = this.props;
        return (0, i.jsx)(T, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
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
            className: S.xr,
            children: [(0, i.jsx)("div", {
                className: S.zc,
                children: (0, i.jsx)(u.A, {
                    tabIndex: -1,
                    className: S.Gt,
                    game: t,
                    size: S.D0
                })
            }), t.name, (0, i.jsx)("div", {
                className: S.Lr,
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
            id: s
        } = this.props;
        return (0, i.jsx)(T, {
            id: s,
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
            className: S.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: S.xr,
                children: (0, i.jsx)("div", {
                    className: S.wx,
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
            a = (0, E.vu)(n.path);
        return null == a || void 0 === a.messageId ? (e = m.intl.string(m.t.qbSCqj), t = (0, i.jsx)(s.qYV, {
            size: "xs",
            color: "currentColor"
        })) : (0, E.r9)(a) ? (e = m.intl.string(m.t["6Fd/j1"]), t = (0, i.jsx)(s.txs, {
            size: "xs",
            color: "currentColor"
        })) : (e = m.intl.string(m.t.jQRwp4), t = (0, i.jsx)(s.XAi, {
            size: "xs",
            color: "currentColor"
        })), (0, i.jsxs)("div", {
            className: S.xr,
            children: [(0, i.jsx)("div", {
                className: S.zc,
                children: t
            }), e, (0, i.jsx)("div", {
                className: S.Lr,
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
            focused: s,
            score: a,
            id: l
        } = this.props;
        return (0, i.jsx)(T, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
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
            case a.t1.SHOP:
                e = m.intl.string(m.t.pWG4ze), t = (0, i.jsx)(s.U1X, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.SHOP_ORBS_TAB:
                e = m.intl.string(m.t.EBYkzk), t = (0, i.jsx)(s.U1X, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.QUEST_ORBS:
                e = `${m.intl.string(m.t.ElYQFS)} ${m.intl.string(m.t.JALI2K)}`, t = (0, i.jsx)(s.r2v, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.NITRO_HOME:
                e = m.intl.string(m.t.Ipxkog), t = (0, i.jsx)(s.tvc, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.QUEST_HOME:
                e = m.intl.string(m.t.JALI2K), t = (0, i.jsx)(s.r2v, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.APPS_HOME:
                e = m.intl.string(m.t.PHjkRE), t = (0, i.jsx)(s.k9F, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.SETTINGS:
                e = n.label ?? m.intl.string(m.t["3D5yo/"]), t = (0, i.jsx)(s.Zes, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.PLAYGROUND:
                if (e = n.label ?? `${n.collectionId} Playground`, null != n.IconComponent) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, {
                        size: "xs",
                        color: "currentColor"
                    })
                } else t = (0, i.jsx)(s.HUC, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            default:
                e = n.id, t = (0, i.jsx)(s.qYV, {
                    size: "xs",
                    color: "currentColor"
                })
        }
        return (0, i.jsxs)("div", {
            className: S.xr,
            children: [(0, i.jsx)("div", {
                className: S.zc,
                children: t
            }), (0, i.jsx)("div", {
                className: S.UU,
                children: e
            }), (0, i.jsx)("div", {
                className: S.Lr,
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
            focused: s,
            score: a,
            id: l
        } = this.props;
        return (0, i.jsx)(T, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        })
    }
}