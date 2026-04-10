/** chunk id: 767916 params = (module,exports,require) **/
n.d(t, {
    B: () => u
});
var i = n(158954),
    s = n(419954),
    l = n(933297),
    r = n(665671),
    a = n(87707),
    o = n(780964),
    d = n(264717),
    c = n(985018);
let u = (0, s.zZ)(o.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => c.intl.string(c.t.IBq4Y3),
        useSubtitle: () => c.intl.string(c.t.yK9edS),
        useHeaderDecoration: function() {
            if ((0, a.dI)() === a.gW.AVAILABLE) return {
                type: l.WX.BUTTON_GROUP,
                buttons: [{
                    type: l.UV.BUTTON,
                    id: "add-security-key-button",
                    text: c.intl.string(c.t["Tzs/fw"]),
                    icon: i.j96,
                    onClick: r.A
                }]
            }
        },
        useInlineNotice: () => (function() {
            switch ((0, a.dI)()) {
                case a.gW.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: l.lT.INLINE_NOTICE, noticeType: "info", useText: () => c.intl.string(c.t.bWCGI9)
                    };
                case a.gW.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: l.lT.INLINE_NOTICE, noticeType: "warning", useText: () => c.intl.string(c.t.uggF7o)
                    };
                case a.gW.AVAILABLE:
                    return
            }
        })(),
        buildLayout: () => [m]
    }),
    m = (0, s.E2)(o.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [c.intl.string(c.t.y7SXYX)],
        Component: d.A
    })