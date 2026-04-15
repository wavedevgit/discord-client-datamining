/** chunk id: 107854 params = (module,exports,require) **/
n.d(t, {
    getApplicationPaymentSteps: () => m
});
var i = n(627968);
n(64700);
var l = n(166532),
    r = n(735305),
    a = n(721252),
    s = n(924076),
    o = n(984742),
    d = n(155301),
    c = n(758655),
    u = n(985018);

function m(e) {
    let {
        guildId: t,
        showBenefitsFirst: n
    } = e;
    return [{
        key: null,
        renderStep: e => (0, i.jsx)(d.A, {
            initialStep: n ? l.pn.BENEFITS : l.pn.REVIEW,
            guildId: t,
            ...e
        })
    }, {
        key: l.pn.BENEFITS,
        renderStep: e => (0, i.jsx)(s.A, {
            ...e
        }),
        options: {
            useBreadcrumbLabel: () => u.intl.string(u.t["5LD2+B"])
        }
    }, {
        key: l.pn.ADD_PAYMENT_STEPS,
        renderStep: e => (0, i.jsx)(r.x, {
            ...e,
            breadcrumbSteps: [l.pn.ADD_PAYMENT_STEPS, l.pn.REVIEW, l.pn.CONFIRM]
        }),
        options: {
            renderHeader: !0
        }
    }, ...a.hh, {
        key: l.pn.REVIEW,
        renderStep: e => (0, i.jsx)(c.A, {
            backButtonEligible: !!n || void 0,
            prevStep: n ? l.pn.BENEFITS : void 0,
            ...e
        }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHq)
        }
    }, {
        key: l.pn.CONFIRM,
        renderStep: e => (0, i.jsx)(o.A, {
            showBenefits: !n,
            ...e
        })
    }]
}