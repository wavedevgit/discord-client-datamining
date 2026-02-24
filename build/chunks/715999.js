/** chunk id: 715999, original params: t,e,i (module,exports,require) **/
i.d(e, {
    q: () => A
});
var n = i(627968),
    l = i(64700),
    s = i(732955),
    r = i(156186),
    a = i(602450),
    u = i(557571),
    o = i(985018),
    d = i(215765);
let A = () => {
    let {
        isWeb: t,
        installationStatus: e,
        connectionStatus: i,
        perkAvailableToUser: A
    } = (0, u.lV)(), T = (0, l.useMemo)(() => {
        switch (i) {
            case a.l7.CONNECTED:
                return o.intl.format(d.default.EVQZqy, {
                    helpdeskArticle: r.V
                });
            case a.l7.DISCONNECTED:
                return o.intl.format(d.default.zOCRv9, {
                    helpdeskArticle: r.V
                });
            case a.l7.ERROR:
                return o.intl.format(d.default.e9MkUw, {
                    helpdeskArticle: r.V
                });
            default:
                return o.intl.format(d.default.yL6mvx, {
                    helpdeskArticle: r.V
                })
        }
    }, [i]), S = (0, l.useMemo)(() => {
        if (t) return o.intl.format(d.default.z6v0w5, {
            helpdeskArticle: r.V
        });
        if (!A) return o.intl.format(d.default.yL6mvx, {
            helpdeskArticle: r.V
        });
        switch (e) {
            case a.Lk.ERROR:
                return o.intl.format(d.default.vjIpaK, {
                    helpdeskArticle: r.V
                });
            case a.Lk.INSTALLING_TIMEOUT:
                return o.intl.format(d.default.QWyvkt, {
                    helpdeskArticle: r.V
                });
            case a.Lk.INSTALLING:
                return o.intl.format(d.default.ZLrDvb, {
                    helpdeskArticle: r.V
                });
            case a.Lk.WAITING_FOR_TERMS:
            case a.Lk.READY_FOR_LICENSE:
                return o.intl.format(d.default.rX9Z5g, {
                    helpdeskArticle: r.V
                });
            case a.Lk.EXISTING_INSTALLATION:
                return o.intl.format(d.default.gOBU3K, {
                    helpdeskArticle: r.V
                });
            case a.Lk.ZERO_TRUST:
                return o.intl.string(d.default.KVSUDs);
            case a.Lk.INSTALLED:
                return T;
            case a.Lk.NOT_INSTALLED:
            case a.Lk.UNKNOWN:
            default:
                return o.intl.format(d.default.yL6mvx, {
                    helpdeskArticle: r.V
                })
        }
    }, [t, e, T, A]);
    return (0, n.jsx)(s.EYj, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: S
    })
}