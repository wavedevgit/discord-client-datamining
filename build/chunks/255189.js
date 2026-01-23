/** Chunk was on 94759 **/
/** chunk id: 255189, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => m
});
var n = r(627968),
    o = r(64700),
    l = r(397927),
    c = r(930932),
    a = r(612479),
    _ = r(954571),
    i = r(773822),
    u = r(507887),
    b = r(652215),
    p = r(670455),
    f = r(985018);

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}
let d = [i.G.OTHER];

function m(e) {
    let {
        reportId: t,
        reportType: m
    } = e, y = function(e, t) {
        if (null == e) return {};
        var r, n, o, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    l = Object.getOwnPropertyNames(e);
                for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
    }(e, ["reportId", "reportType"]);
    return o.useEffect(() => {
        _.default.track(b.HAw.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: m
        })
    }, [t, m]), (0, n.jsx)(a.A, s({
        modalType: "in_app_report",
        header: f.intl.string(f.t.MP5lDj),
        body: f.intl.string(f.t["7Ct0Dj"]),
        problemTitle: f.intl.string(f.t.FJmoxF),
        problems: (0, i.A)(),
        freeformNeededProblems: d,
        onSubmit: function(e) {
            var o;
            let {
                rating: a,
                problem: _,
                dontShowAgain: i,
                feedback: b
            } = e;
            i && (0, c.n3)({
                feedbackType: p.MW.IN_APP_REPORTS,
                location: "InAppReportsFeedbackModal"
            }), (0, u.A)({
                rating: a,
                problem: null != (o = null == _ ? void 0 : _.value) ? o : null,
                feedback: b,
                reportId: t,
                reportType: m,
                dontShowAgain: i
            }), null != a && null != _ && (0, l.mMO)(async () => {
                let {
                    default: e
                } = await r.e("37836").then(r.bind(r, 845671));
                return t => (0, n.jsx)(e, s({
                    body: f.intl.string(f.t["d9+vQ8"])
                }, t))
            })
        },
        otherKey: i.G.OTHER
    }, y))
}