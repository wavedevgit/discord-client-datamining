/** chunk id: 333074, original params: e,t,n (module,exports,require) **/
n.d(t, {
    E: () => i
}), n(896048), n(114821), n(339614);
var l = n(64700),
    s = n(96337),
    a = n(518977);

function i() {
    return l.useMemo(() => {
        let e = new Map(s.A.flatMap(e => {
                let {
                    alpha2: t,
                    phoneCountryCodes: n
                } = e, l = (0, a.Gw)(t);
                return n.map(e => ["".concat(t, "-").concat(e), {
                    code: e,
                    alpha2: t,
                    name: l
                }])
            })),
            t = Array.from(e.entries()).map(e => {
                let [t, {
                    name: n,
                    alpha2: l
                }] = e;
                return {
                    value: t,
                    label: n,
                    alpha2: l
                }
            });
        return {
            countriesMap: e,
            countryCodeOptions: t
        }
    }, [])
}