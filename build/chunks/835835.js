/** chunk id: 835835 params = (module,exports,require) **/
n.d(t, {
    Ay: () => W,
    Y9: () => P,
    u9: () => O
}), n(321073);
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(735438),
    c = n.n(r),
    d = n(837381),
    o = n(311907),
    u = n(397927),
    A = n(843472),
    h = n(928039),
    _ = n(12351),
    m = n(976860),
    I = n(734057),
    N = n(320501),
    E = n(576705),
    L = n(519057),
    g = n(531685),
    C = n(954571),
    p = n(203982),
    x = n(81437),
    f = n(636922),
    v = n(652215),
    j = n(985018),
    T = n(726195);

function y(e) {
    e.stopPropagation()
}
let P = e => {
        let {
            title: t,
            icon: n,
            children: a,
            className: s
        } = e;
        return (0, l.jsxs)("div", {
            className: i()(s, T.wx),
            children: [(0, l.jsxs)("div", {
                className: T.gn,
                children: [null != n ? (0, l.jsx)(n, {
                    color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                }) : null, null == t ? null : (0, l.jsx)(u.Text, {
                    variant: "text-lg/semibold",
                    color: "interactive-text-active",
                    children: t
                })]
            }), a]
        })
    },
    O = e => {
        let {
            msg: t,
            image: n
        } = e;
        return (0, l.jsxs)("div", {
            className: T.zC,
            children: [(0, l.jsx)("div", {
                className: T.Sl,
                style: {
                    backgroundImage: `url(${n})`
                }
            }), (0, l.jsx)("div", {
                className: T.rf,
                children: t
            })]
        })
    };
class G extends a.PureComponent {
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
        return (0, l.jsx)("div", {
            className: T.UD,
            children: (0, l.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: j.intl.string(j.t.k5WiPf),
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
            channel: a,
            closeAriaLabel: s
        } = this.props;
        return null != e && (t || n || null != a && a.isPrivate()) ? (0, l.jsx)("div", {
            className: T.UD,
            children: (0, l.jsx)(u.K0, {
                icon: u.PGe,
                size: "sm",
                variant: "secondary",
                "aria-label": s ?? j.intl.string(j.t.cpT0Cq),
                onClick: this.handleClickClose
            })
        }) : null
    }
    render() {
        return (0, l.jsxs)("div", {
            className: T.uu,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        })
    }
}
let b = o.Ay.connectStores([E.A], e => {
    let {
        channel: t
    } = e;
    return {
        canManageMessages: null != t && E.A.can(v.xBc.MANAGE_MESSAGES, t)
    }
})(G);

function S(e) {
    let {
        analyticsName: t,
        items: n,
        hasMore: s,
        loading: r,
        loadMore: A,
        renderHeader: m,
        renderEmptyState: I,
        renderItem: N,
        getProTip: E,
        scrollerClassName: x,
        className: f,
        listName: P
    } = e, O = a.useRef(null), G = (0, h.A)(P, O), b = (0, o.bG)([L.Ay], () => L.Ay.hasNotice()), S = (0, o.bG)([g.A], () => g.A.windowSize());
    a.useEffect(() => {
        C.default.track(v.HAw.OPEN_POPOUT, {
            type: t
        })
    }, [t]), a.useEffect(() => {
        function e() {
            O.current?.scrollPageUp({
                animate: !0
            })
        }

        function t() {
            O.current?.scrollPageDown({
                animate: !0
            })
        }
        return p._.subscribe(v.jej.SCROLL_PAGE_DOWN, t), p._.subscribe(v.jej.SCROLL_PAGE_UP, e), () => {
            p._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, t), p._.unsubscribe(v.jej.SCROLL_PAGE_UP, e)
        }
    }, []);
    let W = a.useCallback(() => {
            let e = O.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && s && !r && A?.()
        }, [s, A, r]),
        F = [],
        D = !0;
    null == n || r && 0 === n.length ? F = [(0, l.jsx)("div", {
        className: i()(T.zC, T.k$),
        children: (0, l.jsx)(u.y$y, {})
    }, "spinner")] : 0 === n.length ? F.push((0, l.jsx)(a.Fragment, {
        children: I()
    }, "empty-state")) : (D = !1, F = [], c().each(n, e => {
        F.push(...N(e))
    }));
    let w = null;
    null != n && n.length > 0 && null != A && (w = r ? (0, l.jsx)("div", {
        className: T.sw,
        children: (0, l.jsx)(u.y$y, {})
    }, "loading-more-after") : s ? (0, l.jsx)("div", {
        className: T.u9,
        children: (0, l.jsx)(u.Button, {
            variant: "secondary",
            size: "sm",
            fullWidth: !0,
            text: j.intl.string(j.t.XBlaiC),
            onClick: A
        })
    }) : (0, l.jsx)("div", {
        className: T.lJ,
        children: I()
    }));
    let k = E?.(),
        R = D && null != k ? (0, l.jsx)("div", {
            className: T.qr,
            children: (0, l.jsx)(_.A, {
                style: {
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10
                },
                children: k
            })
        }) : null,
        z = {
            maxHeight: S.height - 43 - 25 - 48
        };
    b && (z.maxHeight -= 40);
    let B = null != A && s;
    return (0, l.jsx)("div", {
        className: i()(f, T.KQ),
        style: z,
        onClick: y,
        onDoubleClick: y,
        "aria-label": e["aria-label"],
        children: (0, l.jsxs)(u.Fmo, {
            component: m(),
            children: [(0, l.jsxs)(u.T7Y, {
                className: i()(T.m4, x),
                onScroll: B ? W : void 0,
                ref: O,
                children: [(0, l.jsx)(d.hD, {
                    navigator: G,
                    children: (0, l.jsx)(d.PR, {
                        children: e => {
                            let {
                                ref: t,
                                ...n
                            } = e;
                            return (0, l.jsx)("div", {
                                ref: t,
                                ...n,
                                children: F
                            })
                        }
                    })
                }), w]
            }), R]
        })
    })
}

function W(e) {
    let {
        analyticsName: t,
        onFetch: n,
        channel: s,
        messages: i,
        hasMore: r,
        loading: c,
        loadMore: d,
        onJump: u,
        canCloseAllMessages: h = !1,
        renderHeader: _,
        renderEmptyState: E,
        renderMessage: L,
        getProTip: g,
        scrollerClassName: C,
        className: p,
        onCloseMessage: j,
        listName: y,
        closeAriaLabel: P
    } = e, O = (0, o.bG)([N.A], () => {
        let e = null != s ? N.A.getMessages(s.id) : null;
        return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
    });

    function G(e, n) {
        let l = () => {
            let {
                id: l,
                channel_id: a
            } = e, s = I.A.getChannel(a);
            null != s && (A.A.trackJump(a, l, t), (0, m.pX)(v.BVt.CHANNEL(s.getGuildId(), a, l))), u?.(n)
        };
        (0, x.A)(e, l) && !O && l()
    }
    a.useEffect(() => {
        n(s)
    }, [s, n]);
    let W = a.useMemo(() => i?.map(e => ({
        message: e,
        channel: s
    })), [i, s]);
    return (0, l.jsx)(S, {
        className: p,
        scrollerClassName: C,
        items: W,
        loading: c,
        analyticsName: t,
        renderEmptyState: E,
        renderHeader: _,
        hasMore: r,
        loadMore: d,
        getProTip: g,
        renderItem: function(e) {
            let {
                message: t,
                channel: n
            } = e;
            if (null == t) return [];
            if (null != L) return L(t, e => G(t, e));
            let a = [];
            return null == n ? [] : (a.push((0, l.jsxs)("div", {
                className: T.Uc,
                children: [(0, l.jsx)(f.A, {
                    className: T.i0,
                    message: t,
                    channel: n
                }), (0, l.jsx)(b, {
                    channel: s,
                    message: t,
                    jumping: O,
                    canCloseAllMessages: h,
                    jumpTo: G,
                    onCloseMessage: j,
                    closeAriaLabel: P
                })]
            }, t.id)), a)
        },
        listName: y,
        "aria-label": e["aria-label"]
    })
}