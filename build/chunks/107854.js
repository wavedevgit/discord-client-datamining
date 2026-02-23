/** chunk id: 107854, original params: t,e,n (module,exports,require) **/
n.d(e, {
    getApplicationPaymentSteps: () => m
});
var i = n(627968);
n(64700);
var r = n(166532),
    l = n(735305),
    a = n(721252),
    s = n(924076),
    o = n(984742),
    d = n(155301),
    c = n(758655),
    u = n(985018);

function m(t) {
    let {
        guildId: e,
        showBenefitsFirst: n
    } = t;
    return [{
        key: null,
        renderStep: t => (0, i.jsx)(d.A, {
            initialStep: n ? r.pn.BENEFITS : r.pn.REVIEW,
            guildId: e,
            ...t
        })
    }, {
        key: r.pn.BENEFITS,
        renderStep: t => (0, i.jsx)(s.A, {
            ...t
        }),
        options: {
            useBreadcrumbLabel: () => u.intl.string(u.t["5LD2+B"])
        }
    }, {
        key: r.pn.ADD_PAYMENT_STEPS,
        renderStep: t => (0, i.jsx)(l.x, {
            ...t,
            breadcrumbSteps: [r.pn.ADD_PAYMENT_STEPS, r.pn.REVIEW, r.pn.CONFIRM]
        }),
        options: {
            renderHeader: !0
        }
    }, ...a.hh, {
        key: r.pn.REVIEW,
        renderStep: t => (0, i.jsx)(c.A, {
            backButtonEligible: !!n || void 0,
            prevStep: n ? r.pn.BENEFITS : void 0,
            ...t
        }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHq)
        }
    }, {
        key: r.pn.CONFIRM,
        renderStep: t => (0, i.jsx)(o.A, {
            showBenefits: !n,
            ...t
        })
    }]
}