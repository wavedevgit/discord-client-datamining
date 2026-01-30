/** chunk id: 555570, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => y
}), r(896048);
var n = r(627968),
    s = r(64700),
    l = r(158954),
    i = r(311907),
    a = r(397927),
    u = r(298990),
    c = r(966327),
    d = r(629357),
    o = r(47167),
    h = r(598104),
    m = r(255266),
    f = r(72563),
    x = r(921955),
    g = r(71393),
    _ = r(994500),
    j = r(203982),
    p = r(427262),
    v = r(652215),
    b = r(985018),
    A = r(129348);
let N = e => {
        let {
            channel: t,
            guildName: r
        } = e, s = (0, i.bG)([g.A], () => g.A.getGuild(t.guild_id)), l = (0, o.Ay)(t);
        return (0, n.jsxs)("div", {
            className: A.Ke,
            children: [(0, n.jsx)(m.A, {
                size: m.q.SMALL_32,
                guild: s,
                channel: t
            }), (0, n.jsxs)("div", {
                className: A.D6,
                children: [(0, n.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: l
                }), (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: r
                })]
            })]
        })
    },
    T = e => {
        let {
            channel: t
        } = e, r = (0, o.Ay)(t), s = (0, f.i)(t);
        return (0, n.jsxs)("div", {
            className: A.Ke,
            children: [(0, n.jsx)(h.A, {
                "aria-hidden": !0,
                size: a._3J.SIZE_32,
                channel: t
            }), (0, n.jsxs)("div", {
                className: A.D6,
                children: [(0, n.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: r
                }), (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: s
                })]
            })]
        })
    },
    S = e => {
        let {
            user: t,
            status: r
        } = e, s = (0, i.bG)([_.A], () => _.A.getNickname(t.id)), l = p.Ay.useName(t), u = p.Ay.useUserTag(t);
        return (0, n.jsxs)("div", {
            className: A.Ke,
            children: [(0, n.jsx)(c.A, {
                "aria-hidden": !0,
                size: a._3J.SIZE_32,
                user: t,
                status: r
            }), (0, n.jsxs)("div", {
                className: A.D6,
                children: [(0, n.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: null != s ? s : l
                }), (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: u
                })]
            })]
        })
    };
class P extends s.Component {
    render() {
        let e, t, {
            result: r,
            sending: s
        } = this.props;
        switch (r.type) {
            case d.rD.GROUP_DM:
                e = (0, n.jsx)(T, {
                    channel: r.data.record
                });
                break;
            case d.rD.TEXT_CHANNEL: {
                let {
                    categoryName: t,
                    guildName: s
                } = r;
                e = (0, n.jsx)(N, {
                    channel: r.data.record,
                    categoryName: t,
                    guildName: s
                });
                break
            }
            case d.rD.USER: {
                let {
                    data: {
                        comparator: t,
                        record: s
                    },
                    status: l
                } = r;
                e = (0, n.jsx)(S, {
                    comparator: t,
                    user: s,
                    status: l
                })
            }
        }
        return t = r.sent ? (0, n.jsx)(a.Button, {
            variant: "secondary",
            text: b.intl.string(b.t.i6A1Xw),
            size: "sm",
            disabled: !0
        }) : (0, n.jsx)(a.Button, {
            variant: "secondary",
            text: b.intl.string(b.t["6F9ivu"]),
            size: "sm",
            loading: s
        }), (0, n.jsxs)(a.DUT, {
            className: A.Nn,
            onClick: this.handleClick,
            children: [e, t]
        })
    }
    constructor(...e) {
        super(...e),
            function(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            }(this, "handleClick", () => {
                let {
                    onInvite: e,
                    row: t
                } = this.props;
                e(t)
            })
    }
}

function y(e) {
    let {
        transitionState: t,
        onClose: r
    } = e, {
        results: c,
        query: o,
        activity: h
    } = (0, i.cf)([x.A], () => ({
        results: x.A.getResults(),
        query: x.A.getQuery(),
        activity: x.A.getActivity()
    }), []), [m, f] = s.useState(o), [g, _] = s.useState([]), [p, N] = s.useState(!1), T = s.useRef(null), S = s.useCallback(() => {
        var e;
        null == (e = T.current) || e.scrollPageUp({
            animate: !0
        })
    }, [T]), y = s.useCallback(() => {
        var e;
        null == (e = T.current) || e.scrollPageDown({
            animate: !0
        })
    }, [T]);
    s.useEffect(() => (j._.subscribe(v.jej.SCROLL_PAGE_UP, S), () => {
        j._.unsubscribe(v.jej.SCROLL_PAGE_UP, S)
    }), [S]), s.useEffect(() => (j._.subscribe(v.jej.SCROLL_PAGE_DOWN, y), () => {
        j._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, y)
    }), [y]), s.useEffect(() => {
        null == h && r()
    }, [r, h]), s.useEffect(() => {
        var e;
        null == (e = T.current) || e.scrollToTop()
    }, [T, c]);
    let C = s.useCallback(e => {
            let {
                data: t,
                data: {
                    record: {
                        id: r
                    }
                }
            } = c[e];
            if (!(null == r || g.includes(r))) switch (_([...g, r]), t.type) {
                case d.rD.GROUP_DM:
                case d.rD.TEXT_CHANNEL:
                    (0, u.b4)(t.record.id);
                    break;
                case d.rD.USER:
                    (0, u.Jb)(t.record.id)
            }
        }, [c, g]),
        D = e => {
            f(e), (0, u.oR)(e)
        };
    return null == h ? null : (0, n.jsx)(l.Modal, {
        transitionState: t,
        title: b.intl.formatToPlainString(b.t["2tN7ih"], {
            name: h.name
        }),
        onClose: r,
        actions: [],
        input: (0, n.jsx)(a.IWV, {
            query: m,
            onChange: D,
            placeholder: b.intl.string(b.t["5h0QOP"]),
            autoFocus: !0,
            onClear: () => {
                D("")
            }
        }),
        size: "md",
        "aria-label": b.intl.formatToPlainString(b.t["2tN7ih"], {
            name: h.name
        }),
        listProps: c.length > 0 ? {
            ref: T,
            paddingBottom: 12,
            sections: [c.length],
            sectionHeight: 0,
            renderSection: v.FXj,
            rowHeight: (e, t) => e > 0 ? 0 : 48 * (null != c[t]),
            renderRow: e => {
                let {
                    section: t,
                    row: r
                } = e;
                if (t > 0) return null;
                let s = c[r];
                return null == s ? null : (0, n.jsx)(P, {
                    row: r,
                    result: s,
                    sending: null != s.data.record.id && g.includes(s.data.record.id),
                    onInvite: C
                }, s.data.record.id)
            },
            onScroll: e => {
                let t = e.currentTarget.scrollTop > 0;
                p !== t && N(t)
            }
        } : void 0,
        children: 0 === c.length && (0, n.jsx)("div", {
            className: A.wV
        })
    })
}