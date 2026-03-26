/** chunk id: 713842 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(442433),
    a = n(738876),
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
    E = n(136917);

function C(e) {
    let {
        channelId: t
    } = e, C = (0, l.bG)([_.A], () => _.A.getChannel(t)), I = (0, l.bG)([_.A], () => _.A.getChannel(C?.parent_id)), N = (0, l.bG)([g.A], () => g.A.getGuild(C?.getGuildId())), b = (0, o.Ay)(C), S = s.useRef(!1);
    if (s.useEffect(() => {
            null == C || S.current || (S.current = !0, (0, f.rH)(C))
        }, [C]), null == C || null == N) return null;
    let T = (0, i.jsx)(m.A, {
        channel: C
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.A, {
            channel: C,
            draftType: p.C.ChannelMessage
        }), (0, i.jsx)(u.Ay, {
            toolbar: T,
            "aria-label": x.intl.string(x.t.Pwe8tN),
            children: (0, h.zF)({
                channel: C,
                parentChannel: I,
                channelName: b,
                guild: N,
                inSidebar: !0,
                handleContextMenu: function(e) {
                    (0, r.L3)(e, async () => {
                        let {
                            default: e
                        } = await n.e("33").then(n.bind(n, 44536));
                        return t => (0, i.jsx)(e, {
                            ...t,
                            channel: C
                        })
                    })
                },
                handleClick: function() {
                    null != C && (0, A.uh)(C.guild_id, C.id)
                }
            })
        }), (0, i.jsx)("div", {
            className: E.T,
            children: (0, i.jsx)(c.A, {
                channel: C,
                guild: N,
                chatInputType: d.oU.SIDEBAR
            }, t)
        })]
    })
}