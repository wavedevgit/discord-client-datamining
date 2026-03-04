/** chunk id: 165279, original params: t,e,i (module,exports,require) **/
i.d(e, {
    z: () => A
});
var n = i(419954),
    l = i(780964),
    s = i(358776),
    a = i(782844),
    r = i(840065),
    u = i(355097),
    o = i(652215),
    d = i(985018);
let A = (0, n.v_)(l.X.DATA_USAGE_DISCLAIMER_SETTING, {
    useTitle: () => d.intl.string(d.t.D60Gfj),
    useSubtitle: () => d.intl.format(d.t.R5N31P, {
        onClick: () => {
            let t = (0, s.WJ)("DataUsageDisclaimerSetting");
            (0, r.openUserSettings)(t ? l.X.ACCOUNT_REMOVAL_SETTING : l.X.ACCOUNT_PANEL, {
                section: o.nc_.ACCOUNT,
                subsection: a.D.SECURITY,
                scrollPosition: t ? void 0 : u.Ew.AccountScrollPositions.DISABLE_ACCOUNT
            })
        }
    })
})