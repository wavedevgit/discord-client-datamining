/** chunk id: 615310, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
}), n(896048), n(638769);
var r = n(64700);

function i(e) {
    var t;
    let {
        stepConfigs: n,
        breadcrumbs: i
    } = e, [a, o] = r.useState(null == (t = n[0]) ? void 0 : t.key), s = r.useRef(null);
    return r.useEffect(() => {
        s.current = a
    }, [s, a]), {
        steps: n.map(e => e.key).filter(e => null != e),
        step: a,
        setStep: o,
        breadcrumbsData: n.filter(e => {
            var t;
            return null != e.key && (null == e || null == (t = e.options) ? void 0 : t.useBreadcrumbLabel) != null
        }).map(e => ({
            id: e.key,
            useBreadcrumbLabel: e.options.useBreadcrumbLabel,
            sectionHeaderText: e.options.sectionHeaderText
        })).sort((e, t) => null != i ? i.indexOf(e.id) - i.indexOf(t.id) : 0),
        previousStepRef: s
    }
}