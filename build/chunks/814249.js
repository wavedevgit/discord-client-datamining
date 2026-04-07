/** chunk id: 814249 params = (module,exports,require) **/
n.d(t, {
    K: () => p,
    default: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(236698),
    d = n(668131),
    c = n(797632),
    u = n(468035),
    h = n(304937),
    A = n(985018),
    _ = n(740234);

function m(e) {
    let {
        surveyId: t,
        survey: n,
        onClose: a,
        transitionState: c
    } = e, {
        getSurveyResponses: m,
        setResponse: p,
        trackDisplayedQuestions: g
    } = (0, d.i)(), f = m(t), x = (0, u.i)(n), [E, I] = l.useState(x.blockId), [C, N] = l.useState(x.pageIndex), [T, S] = l.useState(!1), b = (e, n) => {
        p(t, e, n)
    }, v = l.useCallback(() => (T ? a() : (0, r.qfG)(e => (0, i.jsx)(s.Modal, {
        title: A.intl.string(A.t.T9Sx3z),
        actions: [{
            variant: "secondary",
            text: A.intl.string(A.t.oEAioF),
            onClick: e.onClose
        }, {
            variant: "critical-primary",
            text: A.intl.string(A.t.p89ACt),
            onClick: () => {
                e.onClose(), a()
            }
        }],
        ...e,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            children: A.intl.string(A.t.iCK6G0)
        })
    })), Promise.resolve()), [a, T]), y = l.useMemo(() => null == E ? [] : (0, u.uy)(n, {
        blockId: E,
        pageIndex: C,
        responses: f
    }), [n, E, C, f]), j = l.useCallback(() => {
        if (null == n || null == E) return;
        let e = (0, u.vt)(n, {
            blockId: E,
            pageIndex: C,
            responses: f
        });
        g(t, y), e.isComplete && o.Ay.submitSurveyResponse(t, f), I(e.blockId), N(e.pageIndex), S(e.isComplete)
    }, [n, E, C, f, t, y, g]);
    l.useEffect(() => {
        0 === y.length && j()
    }, [y, j]);
    let R = l.useMemo(() => {
        if (T) return !1;
        for (let e of y) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = f[e];
                if (null == t || "" === t.trim()) return !1
            }
        }
        return !0
    }, [T, y, n, f]);
    return T ? (0, i.jsxs)(s.Modal, {
        transitionState: c,
        onClose: a,
        size: "md",
        title: A.intl.string(A.t.OSqLUF),
        actions: [{
            variant: "primary",
            text: A.intl.string(A.t.i4jeWR),
            onClick: a
        }],
        children: [(0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            children: A.intl.string(A.t["2scvdw"])
        }), (0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            children: A.intl.string(A.t.chZxOD)
        })]
    }) : (0, i.jsx)(s.Modal, {
        transitionState: c,
        onClose: v,
        title: A.intl.string(A.t.OSqLUF),
        size: "md",
        actions: [{
            variant: "primary",
            text: A.intl.string(A.t.PDTjLN),
            onClick: j,
            disabled: !R
        }],
        children: (0, i.jsx)("div", {
            style: {
                width: "100%"
            },
            children: 0 === y.length ? null : (0, i.jsx)("div", {
                className: _.Qs,
                children: y.map(e => {
                    let t = n.Questions[e];
                    return null == t ? null : (0, i.jsx)(h.A, {
                        question: t,
                        questionId: e,
                        responses: f,
                        onResponseChange: b
                    }, e)
                })
            })
        })
    })
}
async function p(e) {
    null != await o.Ay.fetchSurveyDetails(e) && (d.i.getState().clearSurveyResponses(e), (0, r.mMO)(async () => {
        let {
            default: t
        } = await Promise.resolve().then(n.bind(n, 814249));
        return n => (0, i.jsx)(t, {
            ...n,
            surveyId: e
        })
    }, {
        onCloseRequest: () => {}
    }))
}

function g(e) {
    let {
        surveyId: t,
        onClose: n,
        transitionState: l
    } = e, s = (0, a.bG)([c.A], () => c.A.getSurvey(t));
    return null == s ? (0, i.jsx)(r.Text, {
        variant: "text-md/medium",
        className: _.Lq,
        children: A.intl.string(A.t.MKDeyL)
    }) : (0, i.jsx)(m, {
        surveyId: t,
        survey: s,
        onClose: n,
        transitionState: l
    })
}