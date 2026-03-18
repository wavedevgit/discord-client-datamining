/** chunk id: 843401 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    I: () => h
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
    m = n(652215),
    g = n(985018),
    A = n(726097);

function x(e) {
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

function h(e) {
    let t = (0, a.bG)([c.Ay], () => c.Ay.getMode()),
        {
            runningGame: n,
            runningGameApplication: i
        } = (0, o.A)();
    null == n || n.elevated || (n = void 0, i = void 0);
    let s = (0, _.NP)(),
        l = s && null != n && t === m.TBI.PUSH_TO_TALK;
    return {
        canPrompt: "voice" === e ? l : s,
        runningGame: n,
        runningGameApplication: i
    }
}

function p(e) {
    let {
        className: t,
        sourcePage: n
    } = e, {
        canPrompt: s,
        runningGame: a,
        runningGameApplication: o
    } = h(n);
    return s ? (0, i.jsxs)("div", {
        className: l()(A.kL, t),
        children: [(0, i.jsx)(x, {
            game: a,
            application: o
        }), (0, i.jsxs)("div", {
            className: A.FS,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: "voice" === n ? g.intl.string(g.t.vxfv7v) : null != a ? g.intl.string(g.t.fAYU2G) : g.intl.string(g.t["9V4X/c"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: g.intl.format(g.t["/y6htt"], {
                    helpCenterLink: u.A.getArticleURL(m.MVz.SYSTEM_SERVICE)
                })
            })]
        }), (0, i.jsx)(r.Button, {
            variant: "secondary",
            size: "sm",
            text: g.intl.string(g.t["1iI46O"]),
            onClick: function() {
                (0, _.sL)(n + (null != a ? "-with-game" : "-no-game"))
            }
        })]
    }) : null
}