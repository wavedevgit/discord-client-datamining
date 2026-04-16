/** chunk id: 835835 params = (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    Y9: () => j,
    u9: () => R
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(843472),
    m = n(928039),
    A = n(12351),
    g = n(976860),
    _ = n(734057),
    p = n(320501),
    f = n(576705),
    E = n(519057),
    C = n(531685),
    x = n(954571),
    S = n(203982),
    I = n(81437),
    T = n(636922),
    v = n(652215),
    N = n(985018),
    y = n(251066);

function b(e) {
    e.stopPropagation()
}
let j = e => {
        let {
            title: t,
            icon: n,
            children: l,
            className: a
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(a, y.wx),
            children: [(0, i.jsxs)("div", {
                className: y.gn,
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
            className: y.zC,
            children: [(0, i.jsx)("div", {
                className: y.Sl,
                style: {
                    backgroundImage: `url(${n})`
                }
            }), (0, i.jsx)("div", {
                className: y.rf,
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
            className: y.UD,
            children: (0, i.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: N.intl.string(N.t.k5WiPf),
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
            closeAriaLabel: a
        } = this.props;
        return null != e && (t || n || null != l && l.isPrivate()) ? (0, i.jsx)("div", {
            className: y.UD,
            children: (0, i.jsx)(u.K0, {
                icon: u.PGe,
                size: "sm",
                variant: "secondary",
                "aria-label": a ?? N.intl.string(N.t.cpT0Cq),
                onClick: this.handleClickClose
            })
        }) : null
    }
    render() {
        return (0, i.jsxs)("div", {
            className: y.uu,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        })
    }
}
let L = d.Ay.connectStores([f.A], e => {
    let {
        channel: t
    } = e;
    return {
        canManageMessages: null != t && f.A.can(v.xBc.MANAGE_MESSAGES, t)
    }
})(M);

function O(e) {
    let {
        analyticsName: t,
        items: n,
        hasMore: a,
        loading: r,
        loadMore: h,
        renderHeader: g,
        renderEmptyState: _,
        renderItem: p,
        getProTip: f,
        scrollerClassName: I,
        className: T,
        listName: j
    } = e, R = l.useRef(null), M = (0, m.A)(j, R), L = (0, d.bG)([E.Ay], () => E.Ay.hasNotice()), O = (0, d.bG)([C.A], () => C.A.windowSize());
    l.useEffect(() => {
        x.default.track(v.HAw.OPEN_POPOUT, {
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
        return S._.subscribe(v.jej.SCROLL_PAGE_DOWN, t), S._.subscribe(v.jej.SCROLL_PAGE_UP, e), () => {
            S._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, t), S._.unsubscribe(v.jej.SCROLL_PAGE_UP, e)
        }
    }, []);
    let D = l.useCallback(() => {
            let e = R.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && a && !r && h?.()
        }, [a, h, r]),
        P = [],
        k = !0;
    null == n || r && 0 === n.length ? P = [(0, i.jsx)("div", {
        className: s()(y.zC, y.k$),
        children: (0, i.jsx)(u.y$y, {})
    }, "spinner")] : 0 === n.length ? P.push((0, i.jsx)(l.Fragment, {
        children: _()
    }, "empty-state")) : (k = !1, P = [], o().each(n, e => {
        P.push(...p(e))
    }));
    let w = null;
    null != n && n.length > 0 && null != h && (w = r ? (0, i.jsx)("div", {
        className: y.sw,
        children: (0, i.jsx)(u.y$y, {})
    }, "loading-more-after") : a ? (0, i.jsx)("div", {
        className: y.u9,
        children: (0, i.jsx)(u.Button, {
            variant: "secondary",
            size: "sm",
            fullWidth: !0,
            text: N.intl.string(N.t.XBlaiC),
            onClick: h
        })
    }) : (0, i.jsx)("div", {
        className: y.lJ,
        children: _()
    }));
    let U = f?.(),
        G = k && null != U ? (0, i.jsx)("div", {
            className: y.qr,
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
    L && (F.maxHeight -= 40);
    let H = null != h && a;
    return (0, i.jsx)("div", {
        className: s()(y.KQ, T ?? y.G6),
        style: F,
        onClick: b,
        onDoubleClick: b,
        "aria-label": e["aria-label"],
        children: (0, i.jsxs)(u.Fmo, {
            component: g(),
            children: [(0, i.jsxs)(u.T7Y, {
                className: I ?? y.m4,
                onScroll: H ? D : void 0,
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
                }), w]
            }), G]
        })
    })
}

function D(e) {
    let {
        analyticsName: t,
        onFetch: n,
        channel: a,
        messages: s,
        hasMore: r,
        loading: o,
        loadMore: c,
        onJump: u,
        canCloseAllMessages: m = !1,
        renderHeader: A,
        renderEmptyState: f,
        renderMessage: E,
        getProTip: C,
        scrollerClassName: x,
        className: S,
        onCloseMessage: N,
        listName: b,
        closeAriaLabel: j
    } = e, R = (0, d.bG)([p.A], () => {
        let e = null != a ? p.A.getMessages(a.id) : null;
        return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
    });

    function M(e, n) {
        let i = () => {
            let {
                id: i,
                channel_id: l
            } = e, a = _.A.getChannel(l);
            null != a && (h.A.trackJump(l, i, t), (0, g.pX)(v.BVt.CHANNEL(a.getGuildId(), l, i))), u?.(n)
        };
        (0, I.A)(e, i) && !R && i()
    }
    l.useEffect(() => {
        n(a)
    }, [a, n]);
    let D = l.useMemo(() => s?.map(e => ({
        message: e,
        channel: a
    })), [s, a]);
    return (0, i.jsx)(O, {
        className: S,
        scrollerClassName: x,
        items: D,
        loading: o,
        analyticsName: t,
        renderEmptyState: f,
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
                className: y.Uc,
                children: [(0, i.jsx)(T.A, {
                    className: y.i0,
                    message: t,
                    channel: n
                }), (0, i.jsx)(L, {
                    channel: a,
                    message: t,
                    jumping: R,
                    canCloseAllMessages: m,
                    jumpTo: M,
                    onCloseMessage: N,
                    closeAriaLabel: j
                })]
            }, t.id)), l)
        },
        listName: b,
        "aria-label": e["aria-label"]
    })
}