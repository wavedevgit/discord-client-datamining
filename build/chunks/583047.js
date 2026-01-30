/** chunk id: 583047, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(513461),
    a = n(786180),
    o = n(892921),
    c = n(596484),
    d = n(322388),
    u = n(564864),
    g = n(260197),
    m = n(985018),
    p = n(35407);

function f(e) {
    var t;
    let {
        guild: n,
        formFields: c
    } = e, [f, b] = i.useState(c);
    i.useEffect(() => b(c), [c]);
    let x = null != (t = (0, a.H)({
            guildId: n.id
        })) ? t : 0,
        [j, _] = i.useState(null),
        O = i.useMemo(() => null == f ? void 0 : f.some(e => (0, s.i7)(e)), [f]),
        v = i.useMemo(() => f.length === g.OK, [f]),
        y = i.useCallback(e => {
            u.A.setPendingMemberVerificationRules(n.id, e), b(e), null != j && _(null)
        }, [j, n.id]),
        A = i.useCallback(e => {
            y([...f, e])
        }, [f, y]),
        E = i.useCallback(e => {
            y([...f.slice(0, e), ...f.slice(e + 1)])
        }, [f, y]),
        N = i.useCallback((e, t) => {
            if (f[e] === t) return;
            let n = [...f];
            n[e] = t, y(n)
        }, [f, y]),
        S = i.useCallback((e, t, n) => {
            let r = f.indexOf(e),
                i = [...f];
            null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), b(i)), n ? (y(i), null !== j && _(null)) : j !== t && _(t)
        }, [j, f, y]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.DZT, {
            variant: "text-xs/bold",
            color: "text-muted",
            className: p.DD,
            children: m.intl.format(m.t["sm+75n"], {
                currentCount: f.length,
                maxCount: g.OK
            })
        }), f.map(e => (0, d.Td)({
            dropHoveredIndex: j,
            formField: e,
            guild: n,
            index: f.indexOf(e),
            isDragEnabled: f.length > 1,
            submittedGuildJoinRequestsCount: x,
            removeFormField: E,
            updateFormField: N,
            updateFormFieldOrder: S,
            canRemove: f.length > 1,
            actionsLocation: "side",
            fieldStyle: s.Vf.COMPACT
        })), !v && (0, r.jsx)("div", {
            className: p.At,
            children: (0, r.jsx)(o.A, {
                addFormField: A,
                guild: n,
                allowTerms: !O
            })
        }), !v && (0, r.jsx)(h, {
            addFormField: A
        })]
    })
}

function h(e) {
    let {
        addFormField: t
    } = e, n = i.useMemo(() => [{
        text: m.intl.string(m.t.EOwiEk),
        onClick: () => {
            t({
                field_type: s.rX.TEXT_INPUT,
                label: m.intl.string(m.t.EOwiEk),
                required: !0
            })
        }
    }, {
        text: m.intl.string(m.t.jqrNDh),
        onClick: () => {
            t({
                field_type: s.rX.TEXT_INPUT,
                label: m.intl.string(m.t.jqrNDh),
                required: !0
            })
        }
    }, {
        text: m.intl.string(m.t.I5q8vp),
        onClick: () => {
            t({
                field_type: s.rX.TEXT_INPUT,
                label: m.intl.string(m.t.I5q8vp),
                required: !0
            })
        }
    }], [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.DZT, {
            variant: "text-xs/bold",
            color: "text-muted",
            className: p.hD,
            children: m.intl.string(m.t.ID04cA)
        }), (0, r.jsx)(c.z, {
            pills: n
        })]
    })
}