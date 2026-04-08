/** chunk id: 814249 params = (module,exports,require) **/
n.d(e, {
    K: () => I,
    default: () => N
});
var i = n(627968),
    l = n(64700),
    r = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(236698),
    c = n(668131),
    d = n(797632),
    u = n(468035),
    _ = n(304937),
    E = n(985018),
    T = n(266983);

function A(t) {
    let {
        surveyId: e,
        survey: n,
        onClose: s,
        transitionState: d
    } = t, {
        getSurveyResponses: A,
        setResponse: I,
        trackDisplayedQuestions: N
    } = (0, c.i)(), R = A(e), p = (0, u.i)(n), [h, C] = l.useState(p.blockId), [m, O] = l.useState(p.pageIndex), [g, S] = l.useState(!1), y = (t, n) => {
        I(e, t, n)
    }, x = l.useCallback(() => (g ? s() : (0, a.qfG)(t => (0, i.jsx)(r.Modal, {
        title: E.intl.string(E.t.T9Sx3z),
        actions: [{
            variant: "secondary",
            text: E.intl.string(E.t.oEAioF),
            onClick: t.onClose
        }, {
            variant: "critical-primary",
            text: E.intl.string(E.t.p89ACt),
            onClick: () => {
                t.onClose(), s()
            }
        }],
        ...t,
        children: (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: E.intl.string(E.t.iCK6G0)
        })
    })), Promise.resolve()), [s, g]), M = l.useMemo(() => null == h ? [] : (0, u.uy)(n, {
        blockId: h,
        pageIndex: m,
        responses: R
    }), [n, h, m, R]), P = l.useCallback(() => {
        if (null == n || null == h) return;
        let t = (0, u.vt)(n, {
            blockId: h,
            pageIndex: m,
            responses: R
        });
        N(e, M), t.isComplete && o.Ay.submitSurveyResponse(e, R), C(t.blockId), O(t.pageIndex), S(t.isComplete)
    }, [n, h, m, R, e, M, N]);
    l.useEffect(() => {
        0 === M.length && P()
    }, [M, P]);
    let U = l.useMemo(() => {
        if (g) return !1;
        for (let t of M) {
            let e = n.Questions[t];
            if (e?.Validation?.Settings?.ForceResponse === "ON") {
                let e = R[t];
                if (null == e || "" === e.trim()) return !1
            }
        }
        return !0
    }, [g, M, n, R]);
    return g ? (0, i.jsxs)(r.Modal, {
        transitionState: d,
        onClose: s,
        size: "md",
        title: E.intl.string(E.t.OSqLUF),
        actions: [{
            variant: "primary",
            text: E.intl.string(E.t.i4jeWR),
            onClick: s
        }],
        children: [(0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: E.intl.string(E.t["2scvdw"])
        }), (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: E.intl.string(E.t.chZxOD)
        })]
    }) : (0, i.jsx)(r.Modal, {
        transitionState: d,
        onClose: x,
        title: E.intl.string(E.t.OSqLUF),
        size: "md",
        actions: [{
            variant: "primary",
            text: E.intl.string(E.t.PDTjLN),
            onClick: P,
            disabled: !U
        }],
        children: (0, i.jsx)("div", {
            style: {
                width: "100%"
            },
            children: 0 === M.length ? null : (0, i.jsx)("div", {
                className: T.Qs,
                children: M.map(t => {
                    let e = n.Questions[t];
                    return null == e ? null : (0, i.jsx)(_.A, {
                        question: e,
                        questionId: t,
                        responses: R,
                        onResponseChange: y
                    }, t)
                })
            })
        })
    })
}
async function I(t) {
    null != await o.Ay.fetchSurveyDetails(t) && (c.i.getState().clearSurveyResponses(t), (0, a.mMO)(async () => {
        let {
            default: e
        } = await Promise.resolve().then(n.bind(n, 814249));
        return n => (0, i.jsx)(e, {
            ...n,
            surveyId: t
        })
    }, {
        onCloseRequest: () => {}
    }))
}

function N(t) {
    let {
        surveyId: e,
        onClose: n,
        transitionState: l
    } = t, r = (0, s.bG)([d.A], () => d.A.getSurvey(e));
    return null == r ? (0, i.jsx)(a.Text, {
        variant: "text-md/medium",
        className: T.Lq,
        children: E.intl.string(E.t.MKDeyL)
    }) : (0, i.jsx)(A, {
        surveyId: e,
        survey: r,
        onClose: n,
        transitionState: l
    })
}