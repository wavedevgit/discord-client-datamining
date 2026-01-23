/** Chunk was on 20601 **/
/** chunk id: 338724, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $x: () => j,
    Qg: () => v,
    dy: () => p,
    he: () => _,
    x$: () => b
}), n(896048), n(492834), n(733351), n(228524);
var l, r = n(64700),
    i = n(311907),
    s = n(555337),
    a = n(306846),
    o = n(894222),
    c = n(71393),
    u = n(860689),
    d = n(408213),
    m = n(60175),
    f = n(513461),
    x = n(709977),
    h = n(890620),
    g = n(985018),
    v = ((l = {})[l.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", l[l.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", l[l.VERIFICATION_FORM = 2] = "VERIFICATION_FORM", l);

function j(e, t, n) {
    let [l, s] = r.useState(!1), c = (0, i.bG)([m.A], () => m.A.get(e)), u = (0, i.bG)([a.A], () => a.A.pendingState);
    r.useEffect(() => {
        t || d.Ay.fetchVerificationForm(e, n).finally(() => s(!0))
    }, [e, n, t]);
    let x = r.useMemo(() => {
        var e, n;
        let l;
        if (!t || null == u) return null;
        if (u.joinType === o.J.APPLY) l = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : void 0;
        else if (null != u.termRules) {
            let e = u.termRules.map(e => e.value.trim()).filter(e => "" !== e);
            l = [{
                field_type: f.rX.TERMS,
                label: g.intl.string(g.t["9suSIA"]),
                values: e,
                required: !0
            }]
        }
        return null == l ? null : {
            version: null != (e = null == c ? void 0 : c.version) ? e : "",
            description: null != (n = null == c ? void 0 : c.description) ? n : "",
            formFields: l,
            guild: null == c ? void 0 : c.guild
        }
    }, [t, u, c]);
    return {
        hasFetched: l,
        verificationForm: null != x ? x : c
    }
}

function b(e, t, n) {
    let l = (0, i.bG)([c.A], () => c.A.getGuild(e)),
        a = (0, i.bG)([s.A], () => s.A.getGuild());
    return r.useMemo(() => n && (null == a ? void 0 : a.id) === e ? a : null != l ? l : null != t ? (0, u.Yh)(t) : null, [n, a, e, l, t])
}

function p(e) {
    let t = !(null == e ? void 0 : e.isClaimed()),
        n = null == e ? void 0 : e.verified,
        [l, i] = r.useState(2 * !t);
    return r.useEffect(() => {
        null != e && e.isClaimed() && i(2)
    }, [e]), r.useEffect(() => {
        1 === l && n && i(2)
    }, [l, n]), {
        currentStep: l,
        setCurrentStep: i
    }
}

function _(e) {
    let t = (0, h.YN)(e => e.hasUnsubmittedChanges);
    r.useEffect(() => ((0, h.Yb)(!1), () => {
        (0, h.Yb)(!1)
    }), []), r.useEffect(() => {
        let n = e.some(e => e.field_type !== f.rX.TERMS && (0, x.Ge)(e));
        n && !t ? (0, h.Yb)(!0) : !n && t && (0, h.Yb)(!1)
    }, [e, t])
}