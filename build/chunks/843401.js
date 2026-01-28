/** Chunk was on 60449 **/
/** chunk id: 843401, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j,
    I: () => m
});
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(286237),
    c = n(769015),
    d = n(430452),
    u = n(975571),
    g = n(942405),
    h = n(652215),
    x = n(985018),
    A = n(726097);

function p(e) {
    let {
        game: t,
        application: n
    } = e;
    return null == t || null == n ? (0, i.jsx)("div", {
        className: A.zc,
        children: (0, i.jsx)(a.EpV, {
            size: "sm",
            color: a.LU0.colors.TEXT_FEEDBACK_WARNING
        })
    }) : (0, i.jsxs)("div", {
        className: A.nt,
        children: [(0, i.jsx)(c.A, {
            game: n,
            pid: t.pid,
            size: c.M.MEDIUM
        }), (0, i.jsx)("div", {
            className: A.Am,
            children: (0, i.jsx)(a.EpV, {
                size: "sm",
                color: a.LU0.colors.TEXT_FEEDBACK_WARNING
            })
        })]
    })
}

function m(e) {
    let t = (0, r.bG)([d.A], () => d.A.getMode()),
        {
            runningGame: n,
            runningGameApplication: i
        } = (0, o.A)();
    null == n || n.elevated || (n = void 0, i = void 0);
    let s = (0, g.NP)(),
        l = s && null != n && t === h.TBI.PUSH_TO_TALK;
    return {
        canPrompt: "voice" === e ? l : s,
        runningGame: n,
        runningGameApplication: i
    }
}

function j(e) {
    let {
        className: t,
        sourcePage: n
    } = e, {
        canPrompt: s,
        runningGame: r,
        runningGameApplication: o
    } = m(n);
    return s ? (0, i.jsxs)("div", {
        className: l()(A.kL, t),
        children: [(0, i.jsx)(p, {
            game: r,
            application: o
        }), (0, i.jsxs)("div", {
            className: A.FS,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: "voice" === n ? x.intl.string(x.t.vxfv7v) : null != r ? x.intl.string(x.t.fAYU2G) : x.intl.string(x.t["9V4X/c"])
            }), (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: x.intl.format(x.t["/y6htt"], {
                    helpCenterLink: u.A.getArticleURL(h.MVz.SYSTEM_SERVICE)
                })
            })]
        }), (0, i.jsx)(a.Button, {
            variant: "secondary",
            size: "sm",
            text: x.intl.string(x.t["1iI46O"]),
            onClick: function() {
                (0, g.sL)(n + (null != r ? "-with-game" : "-no-game"))
            }
        })]
    }) : null
}