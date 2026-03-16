/** chunk id: 986789 params = (module,exports,require) **/
n.d(t, {
    A: () => p
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
    h = n(566381);

function p() {
    let e = (0, l.bG)([m.A], () => m.A.getGuildId()),
        t = (0, l.bG)([u.A], () => u.A.getGuild(e)?.name),
        n = (0, l.bG)([c.A], () => c.A.getStateForGuild(e)?.instances),
        p = i.useMemo(() => Object.values(n ?? {})[0], [n]),
        x = i.useCallback(t => {
            null != p && null != e && o.h.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: {
                    ...p,
                    status: t
                }
            })
        }, [p, e]),
        g = i.useMemo(() => Object.values(s.M).map(e => (0, a.jsx)(r.Button, {
            variant: "primary",
            text: e,
            onClick: () => {
                x(e)
            }
        }, e)), [x]),
        _ = i.useCallback(() => {
            null != p && null != e && o.h.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: {
                    ...p,
                    serverIP: void 0,
                    port: void 0,
                    gameServerPanelUrl: void 0
                }
            })
        }, [p, e]);
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
                children: `Set server state for first server: ${p?.name}`
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
                    onClick: _
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