/** chunk id: 986789 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(64700),
    s = n(390544),
    l = n(311907),
    r = n(397927),
    o = n(73153),
    d = n(665171),
    c = n(522055),
    u = n(71393),
    m = n(967198),
    h = n(645899);

function x() {
    let e = (0, l.bG)([m.A], () => m.A.getGuildId()),
        t = (0, l.bG)([u.A], () => u.A.getGuild(e)?.name),
        n = (0, l.bG)([c.A], () => c.A.getStateForGuild(e)?.instances),
        x = i.useMemo(() => Object.values(n ?? {})[0], [n]),
        p = i.useCallback(t => {
            null != x && null != e && o.h.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: {
                    ...x,
                    status: t
                }
            })
        }, [x, e]),
        g = i.useMemo(() => Object.values(s.M).map(e => (0, a.jsx)(r.Button, {
            variant: "primary",
            text: e,
            onClick: () => {
                p(e)
            }
        }, e)), [p]),
        f = i.useCallback(() => {
            null != x && null != e && o.h.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: {
                    ...x,
                    serverIP: void 0,
                    port: void 0,
                    gameServerPanelUrl: void 0
                }
            })
        }, [x, e]);
    return null == e ? null : (0, a.jsxs)(r.IpV, {
        className: h.kL,
        children: [(0, a.jsx)("div", {
            className: h.uW,
            children: (0, a.jsx)(r.Heading, {
                variant: "heading-md/normal",
                children: `Current guild: ${t}`
            })
        }), (0, a.jsxs)("div", {
            className: h.uW,
            children: [(0, a.jsx)(r.Text, {
                variant: "eyebrow",
                children: `Set server state for first server: ${x?.name}`
            }), (0, a.jsx)("div", {
                className: h.UD,
                children: g
            }), (0, a.jsx)(r.Text, {
                variant: "eyebrow",
                children: "Remove Server Info"
            }), (0, a.jsx)("div", {
                className: h.UD,
                children: (0, a.jsx)(r.Button, {
                    variant: "primary",
                    text: "Remove IP Address & Game Server Panel URL",
                    onClick: f
                })
            }), (0, a.jsx)(r.Text, {
                variant: "eyebrow",
                children: "Reset server"
            }), (0, a.jsx)(r.Button, {
                variant: "primary",
                text: "Reset",
                onClick: () => {
                    (0, d.cq)(e)
                }
            })]
        })]
    })
}