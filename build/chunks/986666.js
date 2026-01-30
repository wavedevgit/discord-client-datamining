/** chunk id: 986666, original params: e,t,n (module,exports,require) **/
n.d(t, {
    z: () => p
});
var r = n(627968);
n(64700);
var i = n(780964),
    l = n(358776),
    s = n(782844),
    a = n(840065),
    o = n(871930),
    c = n(355097),
    d = n(531525),
    u = n(652215),
    _ = n(985018);

function p() {
    return (0, r.jsx)(o.h, {
        setting: d.H.PRIVACY_DATA_BASIC_SERVICE_V2,
        children: (0, r.jsx)(o._, {
            header: _.intl.string(_.t.D60Gfj),
            description: _.intl.format(_.t.R5N31P, {
                onClick: () => {
                    let e = (0, l.WJ)("DataUsageDisclaimer");
                    (0, a.openUserSettings)(e ? i.X.ACCOUNT_REMOVAL_SETTING : i.X.ACCOUNT_PANEL, {
                        section: u.nc_.ACCOUNT,
                        subsection: s.D.SECURITY,
                        scrollPosition: e ? void 0 : c.Ew.AccountScrollPositions.DISABLE_ACCOUNT
                    })
                }
            })
        })
    })
}