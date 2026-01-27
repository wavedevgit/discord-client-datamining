/** Chunk was on 60667 **/
/** chunk id: 586068, original params: e,t,n (module,exports,require) **/
n.d(t, {
    KJ: () => v,
    N_: () => P,
    OS: () => T,
    Y9: () => y,
    c3: () => S,
    lg: () => N,
    nG: () => j,
    vw: () => R
}), n(896048), n(747238);
var r, i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(329308),
    o = n(571694),
    c = n(47167),
    d = n(713654),
    u = n(523728),
    _ = n(200470),
    p = n(769015),
    m = n(263063),
    g = n(376943),
    A = n(636585),
    f = n(71393),
    h = n(994500),
    b = n(287809),
    E = n(427262),
    x = n(985018),
    O = n(649134);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class I extends l.PureComponent {
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
            node: r
        } = this;
        null != r && t && !e.focused && n(r)
    }
    render() {
        let {
            focused: e,
            children: t,
            score: n,
            onContextMenu: r,
            id: l,
            "aria-label": a
        } = this.props;
        return (0, i.jsxs)(s.DUT, {
            role: "option",
            id: l,
            "aria-label": a,
            "aria-selected": e,
            focusProps: {
                enabled: !1
            },
            tabIndex: -1,
            innerRef: this.setRef,
            className: O.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", {
                className: O.fN,
                children: 0 | n
            }) : null]
        })
    }
    constructor(...e) {
        super(...e), C(this, "node", void 0), C(this, "handleClick", e => {
            e.preventDefault();
            let {
                onClick: t
            } = this.props, {
                node: n
            } = this;
            null != n && t(e, n)
        }), C(this, "handleMouseEnter", e => {
            let {
                onMouseEnter: t
            } = this.props, {
                node: n
            } = this;
            null != n && t(e, n)
        }), C(this, "setRef", e => {
            this.node = e
        })
    }
}
class T extends l.Component {
    renderIcon() {
        let {
            guild: e
        } = this.props;
        return (0, i.jsx)("div", {
            className: O._C,
            children: (0, i.jsx)(m.A, {
                tabIndex: -1,
                guild: e,
                size: m.A.Sizes.MINI,
                className: O.$f
            })
        })
    }
    renderName() {
        let {
            guild: e
        } = this.props;
        return (0, i.jsx)("div", {
            className: O.UU,
            children: (0, i.jsx)("span", {
                className: O.YW,
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
            className: e ? O.XB : O.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: O.Lr,
                children: t
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            guild: e
        } = this.props;
        return x.intl.formatToPlainString(x.t.WVq3Lr, {
            name: e.name
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            id: a
        } = this.props;
        return (0, i.jsx)(I, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            children: this.renderContent()
        })
    }
}
class S extends(r = l.Component) {
    renderIcon() {
        var e;
        let {
            channel: t
        } = this.props, n = (0, d.gU)(t);
        if (null == n) return null;
        let r = null != (e = (0, u.A)(t)) ? e : "";
        return (0, i.jsx)("div", {
            className: O.zc,
            role: "img",
            "aria-label": r,
            children: (0, i.jsx)(n, {
                className: O.Kk,
                size: "xs",
                color: "currentColor"
            })
        })
    }
    renderName() {
        let e, t, {
            mentions: n,
            category: r,
            channel: l,
            isMentionLowImportance: s
        } = this.props;
        return null != n && n > 0 && (e = (0, i.jsx)(_.A, {
            className: O.qS,
            value: n,
            lowImportance: s
        })), null != r && (t = (0, i.jsx)("span", {
            className: O.N4,
            children: (0, c.m1)(r, b.default, h.A)
        })), (0, i.jsxs)("div", {
            className: O.UU,
            children: [(0, i.jsx)("span", {
                className: O.YW,
                children: (0, c.m1)(l, b.default, h.A)
            }), e, this.renderVoiceStates(), t]
        })
    }
    renderVoiceStates() {
        let {
            voiceStates: e,
            channel: t
        } = this.props;
        return null == e ? null : (0, i.jsx)(A.A, {
            className: O.x7,
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
            className: e || null != t && t > 0 ? O.XB : O.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: O.Lr,
                children: n
            })]
        })
    }
    getAccessibilityLabel() {
        var e;
        let {
            channel: t
        } = this.props, n = null == (e = f.A.getGuild(this.props.channel.guild_id)) ? void 0 : e.name, r = (0, c.m1)(t, b.default, h.A), i = (0, u.A)(t);
        return x.intl.formatToPlainString(x.t["Vw/da+"], {
            name: r,
            type: i,
            guild: n
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            id: a
        } = this.props;
        return (0, i.jsx)(I, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            children: this.renderContent()
        })
    }
}
C(S, "defaultProps", {
    unread: !1
});
class j extends l.Component {
    renderIcon() {
        let {
            channel: e,
            status: t
        } = this.props;
        return (0, i.jsx)("div", {
            className: O.IU,
            children: (0, i.jsx)(s.euF, {
                src: (0, o.Y)(e),
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
            className: O.qS,
            value: t
        })), (0, i.jsxs)("div", {
            className: O.UU,
            children: [(0, i.jsx)("span", {
                className: O.YW,
                children: (0, c.m1)(n, b.default, h.A)
            }), e]
        })
    }
    renderContent() {
        let {
            mentions: e,
            children: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? O.XB : O.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: O.Lr,
                children: t
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            channel: e,
            mentions: t
        } = this.props, n = (0, c.m1)(e, b.default, h.A);
        return null != t && t > 0 ? x.intl.formatToPlainString(x.t.LYdVfN, {
            name: n,
            mentions: t
        }) : x.intl.formatToPlainString(x.t.lLSbno, {
            name: n
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            id: a
        } = this.props;
        return (0, i.jsx)(I, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            children: this.renderContent()
        })
    }
}
class v extends l.Component {
    renderIcon() {
        let {
            user: e,
            status: t,
            isMobile: n
        } = this.props;
        return (0, i.jsx)("div", {
            className: O.zc,
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
            r = h.A.getNickname(t.id);
        return ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) && (e = null != r ? r : E.Ay.getName(t)), e
    }
    renderName() {
        let e, {
                user: t,
                mentions: n
            } = this.props,
            r = this.getDisplayNickname();
        return null != n && n > 0 && (e = (0, i.jsx)(_.A, {
            className: O.qS,
            value: n
        })), (0, i.jsxs)("div", {
            className: O.UU,
            children: [(0, i.jsx)("span", {
                className: O.YW,
                children: r
            }), e, (0, i.jsx)("span", {
                className: O.Xh,
                children: E.Ay.getUserTag(t)
            })]
        })
    }
    renderContent() {
        let {
            children: e,
            mentions: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? O.XB : O.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
                className: O.Lr,
                children: e
            })]
        })
    }
    getAccessibilityLabel() {
        let {
            mentions: e,
            user: t
        } = this.props, n = this.getDisplayNickname(), r = E.Ay.getUserTag(t);
        return null != e && e > 0 ? x.intl.formatToPlainString(x.t["6b9UrR"], {
            name: n,
            id: r,
            mentions: e
        }) : x.intl.formatToPlainString(x.t.GWYOAY, {
            name: n,
            id: r
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            id: a
        } = this.props;
        return (0, i.jsx)(I, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            children: this.renderContent()
        })
    }
}
class N extends l.Component {
    renderContent() {
        let {
            children: e,
            application: t
        } = this.props;
        return (0, i.jsxs)("div", {
            className: O.xr,
            children: [(0, i.jsx)("div", {
                className: O.zc,
                children: (0, i.jsx)(p.A, {
                    tabIndex: -1,
                    className: O.Gt,
                    game: t,
                    size: O.D0
                })
            }), t.name, (0, i.jsx)("div", {
                className: O.Lr,
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
            id: l
        } = this.props;
        return (0, i.jsx)(I, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent()
        })
    }
}
class y extends l.Component {
    render() {
        return (0, i.jsx)("div", {
            className: O.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: O.xr,
                children: (0, i.jsx)("div", {
                    className: O.wx,
                    children: this.props.children
                })
            })
        })
    }
}
class P extends l.Component {
    renderContent() {
        let e, t, {
                link: n,
                children: r
            } = this.props,
            l = (0, g.vu)(n.path);
        return null == l || void 0 === l.messageId ? (e = x.intl.string(x.t.qbSCqj), t = (0, i.jsx)(s.qYV, {
            size: "xs",
            color: "currentColor"
        })) : (0, g.r9)(l) ? (e = x.intl.string(x.t["6Fd/j1"]), t = (0, i.jsx)(s.txs, {
            size: "xs",
            color: "currentColor"
        })) : (e = x.intl.string(x.t.jQRwp4), t = (0, i.jsx)(s.XAi, {
            size: "xs",
            color: "currentColor"
        })), (0, i.jsxs)("div", {
            className: O.xr,
            children: [(0, i.jsx)("div", {
                className: O.zc,
                children: t
            }), e, (0, i.jsx)("div", {
                className: O.Lr,
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
            focused: l,
            score: s,
            id: a
        } = this.props;
        return (0, i.jsx)(I, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            children: this.renderContent()
        })
    }
}
class R extends l.Component {
    renderContent() {
        var e, t;
        let n, r, {
            navigationRecord: l,
            children: o
        } = this.props;
        switch (l.type) {
            case a.t1.SHOP:
                n = x.intl.string(x.t.pWG4ze), r = (0, i.jsx)(s.U1X, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.SHOP_ORBS_TAB:
                n = x.intl.string(x.t.EBYkzk), r = (0, i.jsx)(s.U1X, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.QUEST_ORBS:
                n = "".concat(x.intl.string(x.t.ElYQFS), " ").concat(x.intl.string(x.t.JALI2K)), r = (0, i.jsx)(s.r2v, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.NITRO_HOME:
                n = x.intl.string(x.t.Ipxkog), r = (0, i.jsx)(s.tvc, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.QUEST_HOME:
                n = x.intl.string(x.t.JALI2K), r = (0, i.jsx)(s.r2v, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.APPS_HOME:
                n = x.intl.string(x.t.PHjkRE), r = (0, i.jsx)(s.k9F, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.SETTINGS:
                n = null != (e = l.label) ? e : x.intl.string(x.t["3D5yo/"]), r = (0, i.jsx)(s.Zes, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            case a.t1.PLAYGROUND:
                if (n = null != (t = l.label) ? t : "".concat(l.collectionId, " Playground"), null != l.IconComponent) {
                    let e = l.IconComponent;
                    r = (0, i.jsx)(e, {
                        size: "xs",
                        color: "currentColor"
                    })
                } else r = (0, i.jsx)(s.HUC, {
                    size: "xs",
                    color: "currentColor"
                });
                break;
            default:
                n = l.id, r = (0, i.jsx)(s.qYV, {
                    size: "xs",
                    color: "currentColor"
                })
        }
        return (0, i.jsxs)("div", {
            className: O.xr,
            children: [(0, i.jsx)("div", {
                className: O.zc,
                children: r
            }), (0, i.jsx)("div", {
                className: O.UU,
                children: n
            }), (0, i.jsx)("div", {
                className: O.Lr,
                children: o
            })]
        })
    }
    render() {
        let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            id: a
        } = this.props;
        return (0, i.jsx)(I, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: s,
            children: this.renderContent()
        })
    }
}