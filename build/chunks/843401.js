/** chunk id: 843401, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x,
    I: () => p
});
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    o = n(286237),
    d = n(769015),
    c = n(430452),
    u = n(975571),
    _ = n(942405),
    g = n(652215),
    m = n(985018),
    A = n(802871);

function h(e) {
    let {
        game: t,
        application: n
    } = e;
    return null == t || null == n ? (0, i.jsx)("div", {
        className: A.zc,
        children: (0, i.jsx)(r.EpV, {
            size: "sm",
            color: r.LU0.colors.TEXT_FEEDBACK_WARNING
        })
    }) : (0, i.jsxs)("div", {
        className: A.nt,
        children: [(0, i.jsx)(d.A, {
            game: n,
            pid: t.pid,
            size: d.M.MEDIUM
        }), (0, i.jsx)("div", {
            className: A.Am,
            children: (0, i.jsx)(r.EpV, {
                size: "sm",
                color: r.LU0.colors.TEXT_FEEDBACK_WARNING
            })
        })]
    })
}

function p(e) {
    let t = (0, a.bG)([c.Ay], () => c.Ay.getMode()),
        {
            runningGame: n,
            runningGameApplication: i
        } = (0, o.A)();
    null == n || n.elevated || (n = void 0, i = void 0);
    let s = (0, _.NP)(),
        l = s && null != n && t === g.TBI.PUSH_TO_TALK;
    return {
        canPrompt: "voice" === e ? l : s,
        runningGame: n,
        runningGameApplication: i
    }
}

function x(e) {
    let {
        className: t,
        sourcePage: n
    } = e, {
        canPrompt: s,
        runningGame: a,
        runningGameApplication: o
    } = p(n);
    return s ? (0, i.jsxs)("div", {
        className: l()(A.kL, t),
        children: [(0, i.jsx)(h, {
            game: a,
            application: o
        }), (0, i.jsxs)("div", {
            className: A.FS,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: "voice" === n ? m.intl.string(m.t.vxfv7v) : null != a ? m.intl.string(m.t.fAYU2G) : m.intl.string(m.t["9V4X/c"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: m.intl.format(m.t["/y6htt"], {
                    helpCenterLink: u.A.getArticleURL(g.MVz.SYSTEM_SERVICE)
                })
            })]
        }), (0, i.jsx)(r.Button, {
            variant: "secondary",
            size: "sm",
            text: m.intl.string(m.t["1iI46O"]),
            onClick: function() {
                (0, _.sL)(n + (null != a ? "-with-game" : "-no-game"))
            }
        })]
    }) : null
}