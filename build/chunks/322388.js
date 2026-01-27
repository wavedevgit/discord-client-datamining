/** Chunk was on 11810 **/
/** chunk id: 322388, original params: e,t,n (module,exports,require) **/
n.d(t, {
    PV: () => b,
    Td: () => p
});
var r = n(627968);
n(64700);
var i = n(735438),
    l = n(397927),
    o = n(513461),
    c = n(910919),
    s = n(286056),
    a = n(645745),
    d = n(468287),
    u = n(985018);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function j(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function p(e) {
    let {
        dropHoveredIndex: t,
        formField: p,
        guild: b,
        index: m,
        isDragEnabled: O,
        submittedGuildJoinRequestsCount: v,
        removeFormField: x,
        updateFormField: h,
        updateFormFieldOrder: g,
        canRemove: P,
        actionsLocation: w,
        fieldStyle: E
    } = e, A = async () => {
        await x(m)
    }, D = async e => {
        await h(m, e)
    }, T = async (e, t, n) => {
        await g(e, t, n)
    }, C = (0, i.uniqueId)(), S = t === m, R = {
        key: C,
        index: m,
        isDragEnabled: O,
        isDropHovered: S,
        onEdit: () => {
            0 === v ? y(p, D, b) : (0, l.mMO)(async () => {
                let {
                    default: e
                } = await n.e("5705").then(n.bind(n, 83024));
                return t => (0, r.jsx)(e, j(f({}, t), {
                    guildId: b.id,
                    submittedGuildJoinRequestsCount: v,
                    onConfirm: () => y(p, D, b)
                }))
            })
        },
        onRemove: A,
        onDrop: T,
        canRemove: P,
        actionsLocation: w,
        fieldStyle: E
    };
    switch (p.field_type) {
        case o.rX.TERMS:
            return (0, r.jsx)(a.A, f({
                channelId: b.rulesChannelId,
                title: E === o.Vf.COMPACT ? u.intl.string(u.t["55+gic"]) : u.intl.string(u.t["53vNcB"]),
                formField: p
            }, R));
        case o.rX.PARAGRAPH:
            return (0, r.jsx)(s.A, f({
                formField: p
            }, R));
        case o.rX.TEXT_INPUT:
            return (0, r.jsx)(d.A, f({
                formField: p
            }, R));
        case o.rX.MULTIPLE_CHOICE:
            return (0, r.jsx)(c.A, f({
                formField: p
            }, R));
        default:
            return null
    }
}

function b(e, t, i) {
    switch (e) {
        case o.rX.TERMS:
            return (0, l.mMO)(async () => {
                let {
                    default: e
                } = await n.e("32435").then(n.bind(n, 24094));
                return n => (0, r.jsx)(e, j(f({}, n), {
                    field: void 0,
                    onSave: t,
                    guild: i
                }))
            });
        case o.rX.PARAGRAPH:
            return (0, l.mMO)(async () => {
                let {
                    ParagraphFormFieldModal: e
                } = await n.e("26510").then(n.bind(n, 542717));
                return n => (0, r.jsx)(e, j(f({}, n), {
                    field: void 0,
                    onSave: t
                }))
            });
        case o.rX.TEXT_INPUT:
            return (0, l.mMO)(async () => {
                let {
                    TextInputFormFieldModal: e
                } = await n.e("26510").then(n.bind(n, 542717));
                return n => (0, r.jsx)(e, j(f({}, n), {
                    field: void 0,
                    onSave: t
                }))
            });
        case o.rX.MULTIPLE_CHOICE:
            return (0, l.mMO)(async () => {
                let {
                    default: e
                } = await n.e("52981").then(n.bind(n, 520660));
                return n => (0, r.jsx)(e, j(f({}, n), {
                    field: void 0,
                    onSave: t
                }))
            })
    }
}

function y(e, t, i) {
    switch (e.field_type) {
        case o.rX.TERMS:
            return (0, l.mMO)(async () => {
                let {
                    default: l
                } = await n.e("32435").then(n.bind(n, 24094));
                return n => (0, r.jsx)(l, j(f({}, n), {
                    field: e,
                    onSave: t,
                    guild: i
                }))
            });
        case o.rX.PARAGRAPH:
            return (0, l.mMO)(async () => {
                let {
                    ParagraphFormFieldModal: i
                } = await n.e("26510").then(n.bind(n, 542717));
                return n => (0, r.jsx)(i, j(f({}, n), {
                    field: e,
                    onSave: t
                }))
            });
        case o.rX.TEXT_INPUT:
            return (0, l.mMO)(async () => {
                let {
                    TextInputFormFieldModal: i
                } = await n.e("26510").then(n.bind(n, 542717));
                return n => (0, r.jsx)(i, j(f({}, n), {
                    field: e,
                    onSave: t
                }))
            });
        case o.rX.MULTIPLE_CHOICE:
            return (0, l.mMO)(async () => {
                let {
                    default: i
                } = await n.e("52981").then(n.bind(n, 520660));
                return n => (0, r.jsx)(i, j(f({}, n), {
                    field: e,
                    onSave: t
                }))
            })
    }
}