/** chunk id: 843401 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    I: () => A
});
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(286237),
    d = n(769015),
    c = n(430452),
    u = n(975571),
    m = n(942405),
    g = n(652215),
    _ = n(985018),
    x = n(933230);

function h(e) {
    let {
        game: t,
        application: n
    } = e;
    return null == t || null == n ? (0, i.jsx)("div", {
        className: x.zc,
        children: (0, i.jsx)(a.EpV, {
            size: "sm",
            color: a.LU0.colors.TEXT_FEEDBACK_WARNING
        })
    }) : (0, i.jsxs)("div", {
        className: x.nt,
        children: [(0, i.jsx)(d.A, {
            game: n,
            pid: t.pid,
            size: d.M.MEDIUM
        }), (0, i.jsx)("div", {
            className: x.Am,
            children: (0, i.jsx)(a.EpV, {
                size: "sm",
                color: a.LU0.colors.TEXT_FEEDBACK_WARNING
            })
        })]
    })
}

function A(e) {
    let t = (0, r.bG)([c.Ay], () => c.Ay.getMode()),
        {
            runningGame: n,
            runningGameApplication: i
        } = (0, o.A)();
    null == n || n.elevated || (n = void 0, i = void 0);
    let s = (0, m.NP)(),
        l = s && null != n && t === g.TBI.PUSH_TO_TALK;
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
        runningGame: r,
        runningGameApplication: o
    } = A(n);
    return s ? (0, i.jsxs)("div", {
        className: l()(x.kL, t),
        children: [(0, i.jsx)(h, {
            game: r,
            application: o
        }), (0, i.jsxs)("div", {
            className: x.FS,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: "voice" === n ? _.intl.string(_.t.vxfv7v) : null != r ? _.intl.string(_.t.fAYU2G) : _.intl.string(_.t["9V4X/c"])
            }), (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: _.intl.format(_.t["/y6htt"], {
                    helpCenterLink: u.A.getArticleURL(g.MVz.SYSTEM_SERVICE)
                })
            })]
        }), (0, i.jsx)(a.Button, {
            variant: "secondary",
            size: "sm",
            text: _.intl.string(_.t["1iI46O"]),
            onClick: function() {
                (0, m.sL)(n + (null != r ? "-with-game" : "-no-game"))
            }
        })]
    }) : null
}