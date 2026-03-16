/** chunk id: 623049 params = (module,exports,require) **/
n.d(t, {
    T: () => u
});
var i = n(627968),
    s = n(397927),
    l = n(419954),
    a = n(780964),
    r = n(840065),
    o = n(652215),
    d = n(985018);
let c = (0, l.E2)(a.X.APPEARANCE_REDIRECT, {
        useSearchTerms: () => [],
        Component: () => (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: d.intl.format(d.t.DHpTjT, {
                onAppearanceClick() {
                    (0, r.openUserSettings)(a.X.APPEARANCE_PANEL, {
                        section: o.nc_.APPEARANCE
                    })
                }
            })
        })
    }),
    u = (0, l.zZ)(a.X.APPEARANCE_REDIRECT_CATEGORY, {
        buildLayout: () => [c]
    })