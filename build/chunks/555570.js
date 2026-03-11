/** chunk id: 555570 params = (module,exports,require) **/
r.d(t, {
    default: () => y
});
var n = r(627968),
    l = r(64700),
    s = r(158954),
    i = r(311907),
    a = r(397927),
    c = r(298990),
    u = r(966327),
    d = r(629357),
    o = r(47167),
    h = r(598104),
    m = r(255266),
    _ = r(72563),
    x = r(921955),
    g = r(71393),
    f = r(994500),
    j = r(203982),
    A = r(427262),
    p = r(652215),
    N = r(985018),
    v = r(129348);
let S = e => {
        let {
            channel: t,
            guildName: r
        } = e, l = (0, i.bG)([g.A], () => g.A.getGuild(t.guild_id)), s = (0, o.Ay)(t);
        return (0, n.jsxs)("div", {
            className: v.Ke,
            children: [(0, n.jsx)(m.A, {
                size: m.q.SMALL_32,
                guild: l,
                channel: t
            }), (0, n.jsxs)("div", {
                className: v.D6,
                children: [(0, n.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: s
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
        } = e, r = (0, o.Ay)(t), l = (0, _.i)(t);
        return (0, n.jsxs)("div", {
            className: v.Ke,
            children: [(0, n.jsx)(h.A, {
                "aria-hidden": !0,
                size: a._3J.SIZE_32,
                channel: t
            }), (0, n.jsxs)("div", {
                className: v.D6,
                children: [(0, n.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: r
                }), (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: l
                })]
            })]
        })
    },
    b = e => {
        let {
            user: t,
            status: r
        } = e, l = (0, i.bG)([f.A], () => f.A.getNickname(t.id)), s = A.Ay.useName(t), c = A.Ay.useUserTag(t);
        return (0, n.jsxs)("div", {
            className: v.Ke,
            children: [(0, n.jsx)(u.A, {
                "aria-hidden": !0,
                size: a._3J.SIZE_32,
                user: t,
                status: r
            }), (0, n.jsxs)("div", {
                className: v.D6,
                children: [(0, n.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: l ?? s
                }), (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: c
                })]
            })]
        })
    };
class L extends l.Component {
    handleClick = () => {
        let {
            onInvite: e,
            row: t
        } = this.props;
        e(t)
    };
    render() {
        let e, t, {
            result: r,
            sending: l
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
                    guildName: l
                } = r;
                e = (0, n.jsx)(S, {
                    channel: r.data.record,
                    categoryName: t,
                    guildName: l
                });
                break
            }
            case d.rD.USER: {
                let {
                    data: {
                        comparator: t,
                        record: l
                    },
                    status: s
                } = r;
                e = (0, n.jsx)(b, {
                    comparator: t,
                    user: l,
                    status: s
                })
            }
        }
        return t = r.sent ? (0, n.jsx)(a.Button, {
            variant: "secondary",
            text: N.intl.string(N.t.i6A1Xw),
            size: "sm",
            disabled: !0
        }) : (0, n.jsx)(a.Button, {
            variant: "secondary",
            text: N.intl.string(N.t["6F9ivu"]),
            size: "sm",
            loading: l
        }), (0, n.jsxs)(a.DUT, {
            className: v.Nn,
            onClick: this.handleClick,
            children: [e, t]
        })
    }
}

function y(e) {
    let {
        transitionState: t,
        onClose: r
    } = e, {
        results: u,
        query: o,
        activity: h
    } = (0, i.cf)([x.A], () => ({
        results: x.A.getResults(),
        query: x.A.getQuery(),
        activity: x.A.getActivity()
    }), []), [m, _] = l.useState(o), [g, f] = l.useState([]), [A, S] = l.useState(!1), T = l.useRef(null), b = l.useCallback(() => {
        T.current?.scrollPageUp({
            animate: !0
        })
    }, [T]), y = l.useCallback(() => {
        T.current?.scrollPageDown({
            animate: !0
        })
    }, [T]);
    l.useEffect(() => (j._.subscribe(p.jej.SCROLL_PAGE_UP, b), () => {
        j._.unsubscribe(p.jej.SCROLL_PAGE_UP, b)
    }), [b]), l.useEffect(() => (j._.subscribe(p.jej.SCROLL_PAGE_DOWN, y), () => {
        j._.unsubscribe(p.jej.SCROLL_PAGE_DOWN, y)
    }), [y]), l.useEffect(() => {
        null == h && r()
    }, [r, h]), l.useEffect(() => {
        T.current?.scrollToTop()
    }, [T, u]);
    let C = l.useCallback(e => {
            let {
                data: t,
                data: {
                    record: {
                        id: r
                    }
                }
            } = u[e];
            if (!(null == r || g.includes(r))) switch (f([...g, r]), t.type) {
                case d.rD.GROUP_DM:
                case d.rD.TEXT_CHANNEL:
                    (0, c.b4)(t.record.id);
                    break;
                case d.rD.USER:
                    (0, c.Jb)(t.record.id)
            }
        }, [u, g]),
        P = e => {
            _(e), (0, c.oR)(e)
        };
    return null == h ? null : (0, n.jsx)(s.Modal, {
        transitionState: t,
        title: N.intl.formatToPlainString(N.t["2tN7ih"], {
            name: h.name
        }),
        onClose: r,
        actions: [],
        input: (0, n.jsx)(a.IWV, {
            query: m,
            onChange: P,
            placeholder: N.intl.string(N.t["5h0QOP"]),
            autoFocus: !0,
            onClear: () => {
                P("")
            }
        }),
        size: "md",
        "aria-label": N.intl.formatToPlainString(N.t["2tN7ih"], {
            name: h.name
        }),
        listProps: u.length > 0 ? {
            ref: T,
            paddingBottom: 12,
            sections: [u.length],
            sectionHeight: 0,
            renderSection: p.FXj,
            rowHeight: (e, t) => e > 0 ? 0 : 48 * (null != u[t]),
            renderRow: e => {
                let {
                    section: t,
                    row: r
                } = e;
                if (t > 0) return null;
                let l = u[r];
                return null == l ? null : (0, n.jsx)(L, {
                    row: r,
                    result: l,
                    sending: null != l.data.record.id && g.includes(l.data.record.id),
                    onInvite: C
                }, l.data.record.id)
            },
            onScroll: e => {
                let t = e.currentTarget.scrollTop > 0;
                A !== t && S(t)
            }
        } : void 0,
        children: 0 === u.length && (0, n.jsx)("div", {
            className: v.wV
        })
    })
}