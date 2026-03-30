/** chunk id: 412484 params = (module,exports,require) **/
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
    _ = n(928039),
    g = n(954571),
    p = n(203982),
    f = n(723702),
    x = n(157296),
    E = n(963702),
    C = n(792967),
    I = n(712209),
    N = n(652215),
    S = n(985018),
    b = n(996863);

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
        return p._.subscribe(N.jej.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
            p._.unsubscribe(N.jej.MARK_TOP_INBOX_CHANNEL_READ, e)
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
    }), [O]), (0, A.Ay)(() => (p._.subscribe(N.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead), () => {
        p._.unsubscribe(N.jej.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead)
    }));
    let k = (0, _.A)("unreads", L);
    return 0 === U.length ? (0, i.jsx)(E.A, {
        Icon: u.K$s,
        header: S.intl.string(S.t["6XMM+D"]),
        tip: o().os?.family === "OS X" ? S.intl.string(S.t.w9uDOW) : S.intl.string(S.t.BiUJC6)
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
                    className: a()(b.XG, `group-spacing-${w}`),
                    children: [j ? (0, i.jsx)(v, {
                        setSeenTutorial: R
                    }) : null, (0, C.A)(U, D, y), G === I.mJ.Done ? null : (0, i.jsx)(u.y$y, {
                        className: b.u1
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
        className: b.d$,
        children: [(0, i.jsx)("div", {
            className: b.cm,
            children: (0, i.jsx)(u.K$s, {
                size: "md",
                color: "currentColor"
            })
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Heading, {
                className: b.__invalid_tutorialHeader,
                variant: "heading-md/semibold",
                children: S.intl.string(S.t.vZPktJ)
            }), (0, i.jsx)(u.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: S.intl.string(S.t.vWkIII)
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: b.dh,
                children: (0, i.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    text: S.intl.string(S.t["+IrDzN"]),
                    onClick: t
                })
            })]
        })]
    })
}

function y() {
    return (0, i.jsx)(E.A, {
        Icon: u.K$s,
        disableStars: !0,
        header: S.intl.string(S.t["KG/ynf"]),
        tip: S.intl.string(S.t.cvcKzX)
    })
}
let j = () => (0, i.jsx)(x.A, {
    onClick: () => p._.dispatch(N.jej.INBOX_MARK_ALL_UNREADS_READ)
})