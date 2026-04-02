/** chunk id: 835835 params = (module,exports,require) **/
n.d(t, {
    Ay: () => L,
    Y9: () => j,
    u9: () => R
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(843472),
    m = n(928039),
    A = n(12351),
    g = n(976860),
    p = n(734057),
    f = n(320501),
    _ = n(576705),
    E = n(519057),
    C = n(531685),
    x = n(954571),
    S = n(203982),
    I = n(81437),
    T = n(636922),
    N = n(652215),
    b = n(985018),
    v = n(284362);

function y(e) {
    e.stopPropagation()
}
let j = e => {
        let {
            title: t,
            icon: n,
            children: l,
            className: s
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(s, v.wx),
            children: [(0, i.jsxs)("div", {
                className: v.gn,
                children: [null != n ? (0, i.jsx)(n, {
                    color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                }) : null, null != t ? (0, i.jsx)(u.Text, {
                    variant: "text-lg/semibold",
                    color: "interactive-text-active",
                    children: t
                }) : null]
            }), l]
        })
    },
    R = e => {
        let {
            msg: t,
            image: n
        } = e;
        return (0, i.jsxs)("div", {
            className: v.zC,
            children: [(0, i.jsx)("div", {
                className: v.Sl,
                style: {
                    backgroundImage: `url(${n})`
                }
            }), (0, i.jsx)("div", {
                className: v.rf,
                children: t
            })]
        })
    };
class M extends l.PureComponent {
    handleClickJump = e => {
        let {
            jumpTo: t,
            message: n
        } = this.props;
        t(n, e)
    };
    handleClickClose = e => {
        let {
            onCloseMessage: t,
            message: n
        } = this.props;
        null != t && t(n, e)
    };
    renderJumpButton() {
        let {
            jumping: e
        } = this.props;
        return (0, i.jsx)("div", {
            className: v.UD,
            children: (0, i.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: b.intl.string(b.t.k5WiPf),
                onClick: this.handleClickJump,
                loading: e
            })
        })
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: t,
            canManageMessages: n,
            channel: l,
            closeAriaLabel: s
        } = this.props;
        return null != e && (t || n || null != l && l.isPrivate()) ? (0, i.jsx)("div", {
            className: v.UD,
            children: (0, i.jsx)(u.K0, {
                icon: u.PGe,
                size: "sm",
                variant: "secondary",
                "aria-label": s ?? b.intl.string(b.t.cpT0Cq),
                onClick: this.handleClickClose
            })
        }) : null
    }
    render() {
        return (0, i.jsxs)("div", {
            className: v.uu,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        })
    }
}
let D = d.Ay.connectStores([_.A], e => {
    let {
        channel: t
    } = e;
    return {
        canManageMessages: null != t && _.A.can(N.xBc.MANAGE_MESSAGES, t)
    }
})(M);

function O(e) {
    let {
        analyticsName: t,
        items: n,
        hasMore: s,
        loading: r,
        loadMore: h,
        renderHeader: g,
        renderEmptyState: p,
        renderItem: f,
        getProTip: _,
        scrollerClassName: I,
        className: T,
        listName: j
    } = e, R = l.useRef(null), M = (0, m.A)(j, R), D = (0, d.bG)([E.Ay], () => E.Ay.hasNotice()), O = (0, d.bG)([C.A], () => C.A.windowSize());
    l.useEffect(() => {
        x.default.track(N.HAw.OPEN_POPOUT, {
            type: t
        })
    }, [t]), l.useEffect(() => {
        function e() {
            R.current?.scrollPageUp({
                animate: !0
            })
        }

        function t() {
            R.current?.scrollPageDown({
                animate: !0
            })
        }
        return S._.subscribe(N.jej.SCROLL_PAGE_DOWN, t), S._.subscribe(N.jej.SCROLL_PAGE_UP, e), () => {
            S._.unsubscribe(N.jej.SCROLL_PAGE_DOWN, t), S._.unsubscribe(N.jej.SCROLL_PAGE_UP, e)
        }
    }, []);
    let L = l.useCallback(() => {
            let e = R.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && s && !r && h?.()
        }, [s, h, r]),
        P = [],
        w = !0;
    null == n || r && 0 === n.length ? P = [(0, i.jsx)("div", {
        className: a()(v.zC, v.k$),
        children: (0, i.jsx)(u.y$y, {})
    }, "spinner")] : 0 === n.length ? P.push((0, i.jsx)(l.Fragment, {
        children: p()
    }, "empty-state")) : (w = !1, P = [], o().each(n, e => {
        P.push(...f(e))
    }));
    let k = null;
    null != n && n.length > 0 && null != h && (k = r ? (0, i.jsx)("div", {
        className: v.sw,
        children: (0, i.jsx)(u.y$y, {})
    }, "loading-more-after") : s ? (0, i.jsx)("div", {
        className: v.u9,
        children: (0, i.jsx)(u.Button, {
            variant: "secondary",
            size: "sm",
            fullWidth: !0,
            text: b.intl.string(b.t.XBlaiC),
            onClick: h
        })
    }) : (0, i.jsx)("div", {
        className: v.lJ,
        children: p()
    }));
    let U = _?.(),
        G = w && null != U ? (0, i.jsx)("div", {
            className: v.qr,
            children: (0, i.jsx)(A.A, {
                style: {
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10
                },
                children: U
            })
        }) : null,
        F = {
            maxHeight: O.height - 43 - 25 - 48
        };
    D && (F.maxHeight -= 40);
    let H = null != h && s;
    return (0, i.jsx)("div", {
        className: a()(v.KQ, T ?? v.G6),
        style: F,
        onClick: y,
        onDoubleClick: y,
        "aria-label": e["aria-label"],
        children: (0, i.jsxs)(u.Fmo, {
            component: g(),
            children: [(0, i.jsxs)(u.T7Y, {
                className: I ?? v.m4,
                onScroll: H ? L : void 0,
                ref: R,
                children: [(0, i.jsx)(c.hD, {
                    navigator: M,
                    children: (0, i.jsx)(c.PR, {
                        children: e => {
                            let {
                                ref: t,
                                ...n
                            } = e;
                            return (0, i.jsx)("div", {
                                ref: t,
                                ...n,
                                children: P
                            })
                        }
                    })
                }), k]
            }), G]
        })
    })
}

function L(e) {
    let {
        analyticsName: t,
        onFetch: n,
        channel: s,
        messages: a,
        hasMore: r,
        loading: o,
        loadMore: c,
        onJump: u,
        canCloseAllMessages: m = !1,
        renderHeader: A,
        renderEmptyState: _,
        renderMessage: E,
        getProTip: C,
        scrollerClassName: x,
        className: S,
        onCloseMessage: b,
        listName: y,
        closeAriaLabel: j
    } = e, R = (0, d.bG)([f.A], () => {
        let e = null != s ? f.A.getMessages(s.id) : null;
        return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
    });

    function M(e, n) {
        let i = () => {
            let {
                id: i,
                channel_id: l
            } = e, s = p.A.getChannel(l);
            null != s && (h.A.trackJump(l, i, t), (0, g.pX)(N.BVt.CHANNEL(s.getGuildId(), l, i))), u?.(n)
        };
        (0, I.A)(e, i) && !R && i()
    }
    l.useEffect(() => {
        n(s)
    }, [s, n]);
    let L = l.useMemo(() => a?.map(e => ({
        message: e,
        channel: s
    })), [a, s]);
    return (0, i.jsx)(O, {
        className: S,
        scrollerClassName: x,
        items: L,
        loading: o,
        analyticsName: t,
        renderEmptyState: _,
        renderHeader: A,
        hasMore: r,
        loadMore: c,
        getProTip: C,
        renderItem: function(e) {
            let {
                message: t,
                channel: n
            } = e;
            if (null == t) return [];
            if (null != E) return E(t, e => M(t, e));
            let l = [];
            return null == n ? [] : (l.push((0, i.jsxs)("div", {
                className: v.Uc,
                children: [(0, i.jsx)(T.A, {
                    className: v.i0,
                    message: t,
                    channel: n
                }), (0, i.jsx)(D, {
                    channel: s,
                    message: t,
                    jumping: R,
                    canCloseAllMessages: m,
                    jumpTo: M,
                    onCloseMessage: b,
                    closeAriaLabel: j
                })]
            }, t.id)), l)
        },
        listName: y,
        "aria-label": e["aria-label"]
    })
}