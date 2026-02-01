/** chunk id: 518530, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var r = n(627968),
    l = n(64700),
    i = n(554146),
    s = n(397927),
    a = n(367513),
    o = n(738876),
    c = n(698718),
    u = n(812771),
    d = n(355622),
    p = n(826673),
    h = n(58736),
    g = n(31717),
    f = n(203982),
    m = n(43189),
    b = n(652215),
    A = n(49999),
    y = n(985018),
    O = n(266920);
let j = function(e) {
    let {
        channel: t,
        guild: n,
        maxWidth: j
    } = e;
    l.useEffect(() => {
        (0, p.Dr)(i.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
            dismissAction: A.i.AUTO
        })
    }, []);
    let x = l.useCallback(() => {
            a.A.updateChatOpen(t.id, !1, "close button"), f._.safeDispatch(b.jej.FOCUS_CHAT_BUTTON)
        }, [t.id]),
        _ = (0, r.jsx)(h.Ay.Icon, {
            icon: s.PGe,
            tooltip: y.intl.string(y.t.cpT0Cq),
            onClick: x
        });
    return (0, r.jsxs)(u.A, {
        sidebarType: u.X.CallChatSidebar,
        maxWidth: j,
        floatingLayer: m.Ay,
        children: [(0, r.jsx)(o.A, {
            channel: t,
            draftType: g.C.ChannelMessage
        }), (0, r.jsxs)(h.Ay, {
            toolbar: _,
            "aria-label": y.intl.string(y.t.BIYAqa),
            children: [(0, r.jsx)(h.Ay.ChannelIcon, {
                icon: s.oyn,
                "aria-label": y.intl.string(y.t.Kx5kCN)
            }), (0, r.jsx)(h.Ay.Title, {
                children: t.name
            })]
        }), (0, r.jsx)("div", {
            className: O.T,
            children: (0, r.jsx)(c.A, {
                channel: t,
                guild: n,
                chatInputType: d.oU.SIDEBAR
            }, t.id)
        })]
    })
}