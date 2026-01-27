/** Chunk was on web.js **/
/** chunk id: 839256, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => O
});
var r = n(974111),
    i = n(294819),
    a = n(376472),
    o = n(99478),
    s = n(408713),
    l = n(400606),
    c = n(150047),
    u = n(248215),
    d = n(3388),
    f = n(723906),
    p = n(48284),
    _ = n(803082),
    h = n(318192),
    m = n(64700),
    g = n(853590),
    E = n(849352),
    y = n(670184),
    b = n(73733);

function O(e, t, n) {
    let O = (0, m.useRef)(""),
        {
            locale: A,
            direction: I
        } = (0, g.Y)(),
        S = (0, i.k)(),
        {
            ariaLabel: T,
            ariaLabelledBy: C,
            ariaDescribedBy: N,
            focusManager: w
        } = r.OX.get(t),
        R = e.isPlaceholder ? "" : e.text,
        P = (0, m.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
        D = (0, E.i)({
            month: "long",
            timeZone: P.timeZone
        }),
        L = (0, E.i)({
            hour: "numeric",
            hour12: P.hour12,
            timeZone: P.timeZone
        });
    if ("month" !== e.type || e.isPlaceholder) "hour" !== e.type || e.isPlaceholder || (R = L.format(t.dateValue));
    else {
        let e = D.format(t.dateValue);
        R = e !== R ? `${R} \u{2013} ${e}` : e
    }
    let {
        spinButtonProps: x
    } = (0, b.y)({
        value: e.value,
        textValue: R,
        minValue: e.minValue,
        maxValue: e.maxValue,
        isDisabled: t.isDisabled,
        isReadOnly: t.isReadOnly || !e.isEditable,
        isRequired: t.isRequired,
        onIncrement: () => {
            O.current = "", t.increment(e.type)
        },
        onDecrement: () => {
            O.current = "", t.decrement(e.type)
        },
        onIncrementPage: () => {
            O.current = "", t.incrementPage(e.type)
        },
        onDecrementPage: () => {
            O.current = "", t.decrementPage(e.type)
        },
        onIncrementToMax: () => {
            O.current = "", void 0 !== e.maxValue && t.setSegment(e.type, e.maxValue)
        },
        onDecrementToMin: () => {
            O.current = "", void 0 !== e.minValue && t.setSegment(e.type, e.minValue)
        }
    }), M = (0, m.useMemo)(() => new(0, h.d)(A, {
        maximumFractionDigits: 0
    }), [A]), j = () => {
        if (e.text === e.placeholder && w.focusPrevious(), !M.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) "dayPeriod" === e.type && t.clearSegment(e.type);
        else {
            let n = e.text.slice(0, -1),
                r = M.parse(n);
            0 === (n = 0 === r ? "" : n).length || 0 === r ? t.clearSegment(e.type) : t.setSegment(e.type, r), O.current = n
        }
    }, k = e => {
        if ("a" === e.key && ((0, s.cX)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) switch (e.key) {
            case "Backspace":
            case "Delete":
                e.preventDefault(), e.stopPropagation(), j()
        }
    }, {
        startsWith: U
    } = (0, y.U)({
        sensitivity: "base"
    }), G = (0, E.i)({
        hour: "numeric",
        hour12: !0
    }), F = (0, m.useMemo)(() => {
        let e = new Date;
        return e.setHours(0), G.formatToParts(e).find(e => "dayPeriod" === e.type).value
    }, [G]), V = (0, m.useMemo)(() => {
        let e = new Date;
        return e.setHours(12), G.formatToParts(e).find(e => "dayPeriod" === e.type).value
    }, [G]), B = (0, E.i)({
        year: "numeric",
        era: "narrow",
        timeZone: "UTC"
    }), H = (0, m.useMemo)(() => {
        if ("era" !== e.type) return [];
        let n = (0, a.yP)(new(0, o.ng)(1, 1, 1), t.calendar),
            r = t.calendar.getEras().map(e => {
                let t = n.set({
                    year: 1,
                    month: 1,
                    day: 1,
                    era: e
                }).toDate("UTC");
                return {
                    era: e,
                    formatted: B.formatToParts(t).find(e => "era" === e.type).value
                }
            }),
            i = v(r.map(e => e.formatted));
        if (i)
            for (let e of r) e.formatted = e.formatted.slice(i);
        return r
    }, [B, t.calendar, e.type]), Y = n => {
        if (t.isDisabled || t.isReadOnly) return;
        let r = O.current + n;
        switch (e.type) {
            case "dayPeriod":
                if (U(F, n)) t.setSegment("dayPeriod", 0);
                else if (U(V, n)) t.setSegment("dayPeriod", 12);
                else break;
                w.focusNext();
                break;
            case "era": {
                let e = H.find(e => U(e.formatted, n));
                e && (t.setSegment("era", e.era), w.focusNext());
                break
            }
            case "day":
            case "hour":
            case "minute":
            case "second":
            case "month":
            case "year": {
                if (!M.isValidPartialNumber(r)) return;
                let i = M.parse(r),
                    a = i,
                    o = 0 === e.minValue;
                if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                    switch (t.dateFormatter.resolvedOptions().hourCycle) {
                        case "h11":
                            i > 11 && (a = M.parse(n));
                            break;
                        case "h12":
                            o = !1, i > 12 && (a = M.parse(n))
                    }
                    void 0 !== e.value && e.value >= 12 && i > 1 && (i += 12)
                } else void 0 !== e.maxValue && i > e.maxValue && (a = M.parse(n));
                if (isNaN(i)) return;
                let s = 0 !== a || o;
                s && t.setSegment(e.type, a), void 0 !== e.maxValue && (Number(i + "0") > e.maxValue || r.length >= String(e.maxValue).length) ? (O.current = "", s && w.focusNext()) : O.current = r
            }
        }
    }, W = () => {
        O.current = "", n.current && (0, l.o)(n.current, {
            containingElement: (0, c.m)(n.current)
        });
        let e = window.getSelection();
        null == e || e.collapse(n.current)
    }, K = (0, m.useRef)("u" > typeof document ? document : null);
    (0, u._)(K, "selectionchange", () => {
        var e;
        let t = window.getSelection();
        (null == t ? void 0 : t.anchorNode) && (null == (e = n.current) ? void 0 : e.contains(null == t ? void 0 : t.anchorNode)) && t.collapse(n.current)
    });
    let z = (0, m.useRef)("");
    (0, u._)(n, "beforeinput", r => {
        if (n.current) switch (r.preventDefault(), r.inputType) {
            case "deleteContentBackward":
            case "deleteContentForward":
                M.isValidPartialNumber(e.text) && !t.isReadOnly && j();
                break;
            case "insertCompositionText":
                z.current = n.current.textContent, n.current.textContent = n.current.textContent;
                break;
            default:
                null != r.data && Y(r.data)
        }
    }), (0, u._)(n, "input", e => {
        let {
            inputType: t,
            data: r
        } = e;
        "insertCompositionText" === t && (n.current && (n.current.textContent = z.current), null != r && (U(F, r) || U(V, r)) && Y(r))
    }), (0, d.N)(() => {
        let e = n.current;
        return () => {
            document.activeElement === e && (w.focusPrevious() || w.focusNext())
        }
    }, [n, w]);
    let q = (0, s.un)() || "timeZoneName" === e.type ? {
        role: "textbox",
        "aria-valuemax": null,
        "aria-valuemin": null,
        "aria-valuetext": null,
        "aria-valuenow": null
    } : {};
    e === (0, m.useMemo)(() => t.segments.find(e => e.isEditable), [t.segments]) || t.isInvalid || (N = void 0);
    let Z = (0, f.Bi)(),
        Q = !t.isDisabled && !t.isReadOnly && e.isEditable,
        X = "literal" === e.type ? "" : S.of(e.type),
        J = (0, p.b)({
            "aria-label": `${X}${T?`, ${T}`:""}${C?", ":""}`,
            "aria-labelledby": C
        });
    if ("literal" === e.type) return {
        segmentProps: {
            "aria-hidden": !0
        }
    };
    let $ = {
        caretColor: "transparent"
    };
    if ("rtl" === I) {
        $.unicodeBidi = "embed";
        let t = P[e.type];
        ("numeric" === t || "2-digit" === t) && ($.direction = "ltr")
    }
    return {
        segmentProps: (0, _.v)(x, J, {
            id: Z,
            ...q,
            "aria-invalid": t.isInvalid ? "true" : void 0,
            "aria-describedby": N,
            "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
            "data-placeholder": e.isPlaceholder || void 0,
            contentEditable: Q,
            suppressContentEditableWarning: Q,
            spellCheck: Q ? "false" : void 0,
            autoCorrect: Q ? "off" : void 0,
            [parseInt(m.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: Q ? "next" : void 0,
            inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !Q ? void 0 : "numeric",
            tabIndex: t.isDisabled ? void 0 : 0,
            onKeyDown: k,
            onFocus: W,
            style: $,
            onPointerDown(e) {
                e.stopPropagation()
            },
            onMouseDown(e) {
                e.stopPropagation()
            }
        })
    }
}

function v(e) {
    e.sort();
    let t = e[0],
        n = e[e.length - 1];
    for (let e = 0; e < t.length; e++)
        if (t[e] !== n[e]) return e;
    return 0
}