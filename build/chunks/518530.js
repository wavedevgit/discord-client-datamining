/** chunk id: 518530, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(554146),
    r = n(397927),
    a = n(367513),
    o = n(738876),
    c = n(698718),
    d = n(812771),
    u = n(355622),
    h = n(826673),
    A = n(58736),
    m = n(31717),
    p = n(203982),
    g = n(43189),
    _ = n(652215),
    f = n(49999),
    x = n(985018),
    C = n(163818);
let E = function(e) {
    let {
        channel: t,
        guild: n,
        maxWidth: E
    } = e;
    s.useEffect(() => {
        (0, h.Dr)(l.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
            dismissAction: f.i.AUTO
        })
    }, []);
    let I = s.useCallback(() => {
            a.A.updateChatOpen(t.id, !1, "close button"), p._.safeDispatch(_.jej.FOCUS_CHAT_BUTTON)
        }, [t.id]),
        N = (0, i.jsx)(A.Ay.Icon, {
            icon: r.PGe,
            tooltip: x.intl.string(x.t.cpT0Cq),
            onClick: I
        });
    return (0, i.jsxs)(d.A, {
        sidebarType: d.X.CallChatSidebar,
        maxWidth: E,
        floatingLayer: g.Ay,
        children: [(0, i.jsx)(o.A, {
            channel: t,
            draftType: m.C.ChannelMessage
        }), (0, i.jsxs)(A.Ay, {
            toolbar: N,
            "aria-label": x.intl.string(x.t.BIYAqa),
            children: [(0, i.jsx)(A.Ay.ChannelIcon, {
                icon: r.oyn,
                "aria-label": x.intl.string(x.t.Kx5kCN)
            }), (0, i.jsx)(A.Ay.Title, {
                children: t.name
            })]
        }), (0, i.jsx)("div", {
            className: C.T,
            children: (0, i.jsx)(c.A, {
                channel: t,
                guild: n,
                chatInputType: u.oU.SIDEBAR
            }, t.id)
        })]
    })
}