/** chunk id: 518530 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(554146),
    a = n(397927),
    r = n(367513),
    o = n(738876),
    c = n(698718),
    d = n(812771),
    u = n(355622),
    h = n(826673),
    A = n(58736),
    m = n(31717),
    _ = n(203982),
    p = n(43189),
    g = n(652215),
    f = n(49999),
    x = n(985018),
    E = n(336858);
let C = function(e) {
    let {
        channel: t,
        guild: n,
        maxWidth: C
    } = e;
    s.useEffect(() => {
        (0, h.Dr)(l.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
            dismissAction: f.i.AUTO
        })
    }, []);
    let I = s.useCallback(() => {
            r.A.updateChatOpen(t.id, !1, "close button"), _._.safeDispatch(g.jej.FOCUS_CHAT_BUTTON)
        }, [t.id]),
        N = (0, i.jsx)(A.Ay.Icon, {
            icon: a.PGe,
            tooltip: x.intl.string(x.t.cpT0Cq),
            onClick: I
        });
    return (0, i.jsxs)(d.A, {
        sidebarType: d.X.CallChatSidebar,
        maxWidth: C,
        floatingLayer: p.Ay,
        children: [(0, i.jsx)(o.A, {
            channel: t,
            draftType: m.C.ChannelMessage
        }), (0, i.jsxs)(A.Ay, {
            toolbar: N,
            "aria-label": x.intl.string(x.t.BIYAqa),
            children: [(0, i.jsx)(A.Ay.ChannelIcon, {
                icon: a.oyn,
                "aria-label": x.intl.string(x.t.Kx5kCN)
            }), (0, i.jsx)(A.Ay.Title, {
                children: t.name
            })]
        }), (0, i.jsx)("div", {
            className: E.T,
            children: (0, i.jsx)(c.A, {
                channel: t,
                guild: n,
                chatInputType: u.oU.SIDEBAR
            }, t.id)
        })]
    })
}