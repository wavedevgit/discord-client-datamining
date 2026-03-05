/** chunk id: 412484, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => T,
    NH: () => j,
    T: () => y
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(481613),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(73153),
    A = n(964486),
    m = n(775602),
    p = n(928039),
    g = n(954571),
    _ = n(203982),
    f = n(723702),
    x = n(157296),
    C = n(963702),
    E = n(792967),
    I = n(712209),
    N = n(652215),
    b = n(985018),
    S = n(852570);

function T(e) {
    var t, n, l, r, x, T;
    let {
        onJump: y,
        showTutorial: j,
        setSeenTutorial: R,
        closePopout: O
    } = e, L = s.useRef(null), [M, D] = (0, I.Ay)(L), {
        loadState: G,
        channels: U
    } = M, {
        maybeLoadMore: P
    } = D, w = (0, d.bG)([m.A], () => m.A.messageGroupSpacing);
    t = L, n = M, l = D, s.useLayoutEffect(() => {
        let {
            scrollToChannelIndex: e
        } = n;
        l.clearScrollToChannelIndex();
        let {
            current: i
        } = t;
        if (null == i || null == e) return;
        let s = i.getScrollerNode()?.children;
        if (null == s) return;
        let a = s[e];
        if (null == a) return;
        let {
            scrollTop: r,
            offsetHeight: o
        } = i.getScrollerState();
        (a.offsetTop < r || a.offsetTop > r + o) && i.scrollTo({
            to: a.offsetTop
        })
    }), r = M, x = D, s.useEffect(() => {
        let e = () => {
            let e = r.channels.find(e => !e.collapsed);
            null != e && x.markChannelRead(e)
        };
        return _._.subscribe(N.jej.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
            _._.unsubscribe(N.jej.MARK_TOP_INBOX_CHANNEL_READ, e)
        }
    }, [x, r.channels]), T = D, s.useEffect(() => {
        let e = e => {
            ((0, f.isMac)() || (0, f.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && "z" === e.key && T.undoMarkChannelRead()
        };
        return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
        }
    }, [T]), s.useEffect(() => {
        g.default.track(N.HAw.OPEN_POPOUT, {
            type: "Inbox"
        })
    }, []), s.useEffect(() => (h.h.subscribe("CONNECTION_OPEN", O), () => {
        h.h.unsubscribe("CONNECTION_OPEN", O)
    }), [O]), (0, A.Ay)(() => (_._.subscribe(N.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead), () => {
        _._.unsubscribe(N.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead)
    }));
    let k = (0, p.A)("unreads", L);
    return 0 === U.length ? (0, i.jsx)(C.A, {
        Icon: u.K$s,
        header: b.intl.string(b.t["6XMM+D"]),
        tip: o().os?.family === "OS X" ? b.intl.string(b.t.w9uDOW) : b.intl.string(b.t.BiUJC6)
    }) : (0, i.jsx)(c.hD, {
        navigator: k,
        children: (0, i.jsx)(c.PR, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, i.jsxs)(u.ChK, {
                    ref: e => {
                        L.current = e, t.current = e?.getScrollerNode() ?? null
                    },
                    ...n,
                    onScroll: G === I.mJ.Done ? void 0 : P,
                    className: a()(S.XG, `group-spacing-${w}`),
                    children: [j ? (0, i.jsx)(v, {
                        setSeenTutorial: R
                    }) : null, (0, E.A)(U, D, y), G === I.mJ.Done ? null : (0, i.jsx)(u.y$y, {
                        className: S.u1
                    })]
                })
            }
        })
    })
}

function v(e) {
    let {
        setSeenTutorial: t
    } = e;
    return (0, i.jsxs)("div", {
        className: S.d$,
        children: [(0, i.jsx)("div", {
            className: S.cm,
            children: (0, i.jsx)(u.K$s, {
                size: "md",
                color: "currentColor"
            })
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Heading, {
                className: S.__invalid_tutorialHeader,
                variant: "heading-md/semibold",
                children: b.intl.string(b.t.vZPktJ)
            }), (0, i.jsx)(u.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: b.intl.string(b.t.vWkIII)
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: S.dh,
                children: (0, i.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    text: b.intl.string(b.t["+IrDzN"]),
                    onClick: t
                })
            })]
        })]
    })
}

function y() {
    return (0, i.jsx)(C.A, {
        Icon: u.K$s,
        disableStars: !0,
        header: b.intl.string(b.t["KG/ynf"]),
        tip: b.intl.string(b.t.cvcKzX)
    })
}
let j = () => (0, i.jsx)(x.A, {
    onClick: () => _._.dispatch(N.jej.INBOX_MARK_ALL_UNREADS_READ)
})