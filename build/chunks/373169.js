/** Chunk was on 60667 **/
/** chunk id: 373169, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(817281),
    o = n(773669),
    c = n(780964),
    d = n(840065),
    u = n(652215),
    _ = n(985018),
    p = n(58477),
    m = n(72290);

function g() {
    let e = (0, l.bG)([o.default], () => o.default.locale),
        [t, g] = i.useState(e),
        A = i.useMemo(() => (0, _.getAvailableLocales)().map(e => {
            let t;
            try {
                t = n(579832)("./".concat(e.value, ".png"))
            } catch (e) {
                t = n(432706)
            }
            return {
                id: e.value,
                value: e.value,
                label: e.name,
                leading: (0, r.jsx)("div", {
                    className: p.Jt,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: p.Eb
                    })
                }),
                trailing: (0, r.jsx)("span", {
                    className: p.hI,
                    children: _.intl.string(e.localizedName)
                })
            }
        }), []),
        f = i.useCallback(e => {
            g(e), m.nextTick(() => {
                a.Ay.updateLocale(e), (0, s.OoC)(d.USER_SETTINGS_MODAL_KEY) && (0, d.openUserSettings)(c.X.LANGUAGE_AND_TIME_PANEL, {
                    section: u.nc_.LANGUAGE
                })
            })
        }, []);
    return (0, r.jsx)(s.ZiE, {
        selectionMode: "single",
        label: _.intl.string(_.t["mx+sp7"]),
        description: _.intl.string(_.t.rTPlcq),
        value: t,
        options: A,
        onSelectionChange: f
    })
}