/** chunk id: 574475 params = (module,exports,require) **/
a.d(e, {
    A: () => u
});
var i = a(627968),
    n = a(64700),
    s = a(158954),
    l = a(397927),
    r = a(817281),
    c = a(954571),
    o = a(652215),
    _ = a(985018),
    C = a(644494);
let A = [{
    value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
    nameGetter: () => _.intl.string(_.t["+RZgNV"])
}, {
    value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
    nameGetter: () => _.intl.string(_.t.kgPXgv)
}, {
    value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
    nameGetter: () => _.intl.string(_.t.vujsUK)
}, {
    value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
    nameGetter: () => _.intl.string(_.t.AYAOLF)
}, {
    value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
    nameGetter: () => _.intl.string(_.t.wZLu3Y)
}];

function u(t) {
    let {
        application: e,
        subscriptionId: a,
        onClose: u,
        transitionState: d
    } = t, [N, I] = n.useState(!1), [p, S] = n.useState(null), [E, O] = n.useState(""), m = n.useCallback(() => {
        null != p && (c.default.track(o.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
            answer: p,
            application_id: e.id,
            reason: E,
            subscription_id: a
        }), u())
    }, [e.id, a, p, u, E]);
    return n.useEffect(() => {
        r.Ay.updatedUnsyncedSettings({
            disableApplicationSubscriptionCancellationSurvey: N
        })
    }, [N]), (0, i.jsxs)(s.Modal, {
        title: _.intl.string(_.t.zPxMdQ),
        subtitle: _.intl.string(_.t["QJGdB+"]),
        actions: [{
            variant: "primary",
            text: _.intl.string(_.t.geKm7t),
            onClick: m,
            disabled: null == p
        }],
        onClose: u,
        transitionState: d,
        children: [(0, i.jsx)("div", {
            className: C.U7,
            children: (0, i.jsx)(l.z6M, {
                value: p,
                options: A.map(t => {
                    let {
                        nameGetter: e,
                        value: a
                    } = t;
                    return {
                        name: e(),
                        value: a
                    }
                }),
                onChange: t => S(t)
            })
        }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === p && (0, i.jsx)("div", {
            className: C.Xo,
            children: (0, i.jsx)(l.ksK, {
                autoFocus: !0,
                placeholder: _.intl.string(_.t.s6tM8c),
                value: E,
                onChange: O
            })
        }), (0, i.jsx)(l.Checkbox, {
            checked: N,
            onChange: t => I(t),
            label: _.intl.string(_.t["3vPFQi"]),
            labelType: "secondary"
        })]
    })
}