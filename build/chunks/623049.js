/** chunk id: 623049, original params: t,e,i (module,exports,require) **/
i.d(e, {
    T: () => A
});
var n = i(627968),
    l = i(397927),
    s = i(419954),
    a = i(780964),
    r = i(840065),
    u = i(652215),
    o = i(985018);
let d = (0, s.E2)(a.X.APPEARANCE_REDIRECT, {
        useSearchTerms: () => [],
        Component: () => (0, n.jsx)(l.Text, {
            variant: "text-md/normal",
            children: o.intl.format(o.t.DHpTjT, {
                onAppearanceClick() {
                    (0, r.openUserSettings)(a.X.APPEARANCE_PANEL, {
                        section: u.nc_.APPEARANCE
                    })
                }
            })
        })
    }),
    A = (0, s.zZ)(a.X.APPEARANCE_REDIRECT_CATEGORY, {
        buildLayout: () => [d]
    })