/** chunk id: 338724, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $x: () => p,
    Qg: () => v,
    dy: () => b,
    he: () => _,
    x$: () => j
}), n(896048), n(492834), n(733351), n(228524);
var r, l = n(64700),
    i = n(311907),
    s = n(555337),
    a = n(306846),
    o = n(894222),
    c = n(71393),
    u = n(860689),
    d = n(408213),
    m = n(60175),
    f = n(513461),
    h = n(709977),
    x = n(890620),
    g = n(985018),
    v = ((r = {})[r.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", r[r.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", r[r.VERIFICATION_FORM = 2] = "VERIFICATION_FORM", r);

function p(e, t, n) {
    let [r, s] = l.useState(!1), c = (0, i.bG)([m.A], () => m.A.get(e)), u = (0, i.bG)([a.A], () => a.A.pendingState);
    l.useEffect(() => {
        t || d.Ay.fetchVerificationForm(e, n).finally(() => s(!0))
    }, [e, n, t]);
    let h = l.useMemo(() => {
        var e, n;
        let r;
        if (!t || null == u) return null;
        if (u.joinType === o.J.APPLY) r = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : void 0;
        else if (null != u.termRules) {
            let e = u.termRules.map(e => e.value.trim()).filter(e => "" !== e);
            r = [{
                field_type: f.rX.TERMS,
                label: g.intl.string(g.t["9suSIA"]),
                values: e,
                required: !0
            }]
        }
        return null == r ? null : {
            version: null != (e = null == c ? void 0 : c.version) ? e : "",
            description: null != (n = null == c ? void 0 : c.description) ? n : "",
            formFields: r,
            guild: null == c ? void 0 : c.guild
        }
    }, [t, u, c]);
    return {
        hasFetched: r,
        verificationForm: null != h ? h : c
    }
}

function j(e, t, n) {
    let r = (0, i.bG)([c.A], () => c.A.getGuild(e)),
        a = (0, i.bG)([s.A], () => s.A.getGuild());
    return l.useMemo(() => n && (null == a ? void 0 : a.id) === e ? a : null != r ? r : null != t ? (0, u.Yh)(t) : null, [n, a, e, r, t])
}

function b(e) {
    let t = !(null == e ? void 0 : e.isClaimed()),
        n = null == e ? void 0 : e.verified,
        [r, i] = l.useState(2 * !t);
    return l.useEffect(() => {
        null != e && e.isClaimed() && i(2)
    }, [e]), l.useEffect(() => {
        1 === r && n && i(2)
    }, [r, n]), {
        currentStep: r,
        setCurrentStep: i
    }
}

function _(e) {
    let t = (0, x.YN)(e => e.hasUnsubmittedChanges);
    l.useEffect(() => ((0, x.Yb)(!1), () => {
        (0, x.Yb)(!1)
    }), []), l.useEffect(() => {
        let n = e.some(e => e.field_type !== f.rX.TERMS && (0, h.Ge)(e));
        n && !t ? (0, x.Yb)(!0) : !n && t && (0, x.Yb)(!1)
    }, [e, t])
}