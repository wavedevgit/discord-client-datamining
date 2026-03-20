/** chunk id: 713842 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(442433),
    r = n(738876),
    o = n(47167),
    c = n(698718),
    d = n(355622),
    u = n(58736),
    h = n(353428),
    A = n(976860),
    m = n(823471),
    _ = n(734057),
    p = n(31717),
    g = n(71393),
    f = n(853742),
    x = n(985018),
    C = n(694954);

function E(e) {
    let {
        channelId: t
    } = e, E = (0, l.bG)([_.A], () => _.A.getChannel(t)), I = (0, l.bG)([_.A], () => _.A.getChannel(E?.parent_id)), N = (0, l.bG)([g.A], () => g.A.getGuild(E?.getGuildId())), b = (0, o.Ay)(E), S = s.useRef(!1);
    if (s.useEffect(() => {
            null == E || S.current || (S.current = !0, (0, f.rH)(E))
        }, [E]), null == E || null == N) return null;
    let T = (0, i.jsx)(m.A, {
        channel: E
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.A, {
            channel: E,
            draftType: p.C.ChannelMessage
        }), (0, i.jsx)(u.Ay, {
            toolbar: T,
            "aria-label": x.intl.string(x.t.Pwe8tN),
            children: (0, h.zF)({
                channel: E,
                parentChannel: I,
                channelName: b,
                guild: N,
                inSidebar: !0,
                handleContextMenu: function(e) {
                    (0, a.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("33").then(n.bind(n, 44536));
                        return t => (0, i.jsx)(e, {
                            ...t,
                            channel: E
                        })
                    })
                },
                handleClick: function() {
                    null != E && (0, A.uh)(E.guild_id, E.id)
                }
            })
        }), (0, i.jsx)("div", {
            className: C.T,
            children: (0, i.jsx)(c.A, {
                channel: E,
                guild: N,
                chatInputType: d.oU.SIDEBAR
            }, t)
        })]
    })
}