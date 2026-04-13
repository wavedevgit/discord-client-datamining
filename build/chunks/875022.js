/** chunk id: 875022 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var a = n(627968),
    c = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    d = n(397927),
    l = n(775602),
    o = n(607470),
    b = n(175487),
    u = n(891260),
    p = n(950158);

function f(e) {
    let {
        mediaUrls: t,
        isSuccess: n,
        transitionState: i,
        onClose: f,
        children: m
    } = e, y = (0, s.bG)([l.A], () => l.A.useReducedMotion), [E, R] = (0, c.useState)("entry"), [A, h] = (0, c.useState)("entry"), v = (0, c.useRef)(null), I = (0, c.useCallback)(() => {
        "entry" === E && (R("idle"), h("idle"), v.current?.play())
    }, [E]), x = (0, c.useCallback)(async () => {
        "exit" !== E && (R("exit"), await new Promise(e => setTimeout(e, 175)), await f())
    }, [E, f]), S = i === d.ip4.EXITING;
    if (!y && n && null != t.activationEntry && null != t.activationIdle && null != t.celebrationEntry && null != t.celebrationIdle) {
        let e = "idle" === A ? {
                type: "video",
                src: t.activationIdle,
                fallbackImageSrc: u.A,
                loop: !0
            } : {
                type: "video",
                src: t.activationEntry,
                fallbackImageSrc: u.A,
                loop: !1
            },
            n = "exit" === E || S;
        return (0, a.jsxs)("div", {
            children: [(0, a.jsxs)("div", {
                className: r()(b.j, {
                    [b.Xn]: n
                }),
                children: [(0, a.jsx)(o.A, {
                    playsInline: !0,
                    muted: !0,
                    autoPlay: !0,
                    onEnded: I,
                    className: r()(b.Ki, "entry" === E ? b.RK : b.R),
                    children: (0, a.jsx)("source", {
                        src: t.celebrationEntry
                    })
                }), (0, a.jsx)(o.A, {
                    ref: v,
                    playsInline: !0,
                    muted: !0,
                    loop: !0,
                    className: r()(b.Ki, "idle" === E ? b.RK : b.R),
                    children: (0, a.jsx)("source", {
                        src: t.celebrationIdle
                    })
                })]
            }), (0, a.jsx)("div", {
                className: n ? b.aO : b.ws,
                children: m(e, x)
            })]
        })
    }
    let j = {
        type: "image",
        src: u.A,
        aspectRatio: "16/9"
    };
    return (0, a.jsxs)(a.Fragment, {
        children: [!y && !S && (0, a.jsx)("img", {
            src: p.A,
            alt: "",
            className: b.hK
        }), m(j, f)]
    })
}