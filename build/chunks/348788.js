/** Chunk was on web.js **/
/** chunk id: 348788, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => E
});
var r = n(457312),
    i = n(701366),
    a = n(352404),
    o = n(7521),
    s = n(807177),
    l = n(401705),
    c = n(400606),
    u = n(150047),
    d = n(803082),
    f = n(8321),
    p = n(885714),
    _ = n(47276),
    h = n(849352),
    m = n(64700);

function g(e) {
    return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
    let E, {
            date: y,
            isDisabled: b
        } = e,
        {
            errorMessageId: O,
            selectedDateDescription: v
        } = r.OX.get(t),
        A = (0, _.o)(g(i.A), "@react-aria/calendar"),
        I = (0, h.i)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, r.cf)(y),
            timeZone: t.timeZone
        }),
        S = t.isSelected(y),
        T = t.isCellFocused(y) && !e.isOutsideMonth;
    b = b || t.isCellDisabled(y);
    let C = t.isCellUnavailable(y),
        N = !b && !C,
        w = t.isValueInvalid && !!("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && y.compare(t.highlightedRange.start) >= 0 && 0 >= y.compare(t.highlightedRange.end) : t.value && (0, a.ro)(t.value, y));
    w && (S = !0), y = (0, o.k)(y, a.NV);
    let R = (0, m.useMemo)(() => y.toDate(t.timeZone), [y, t.timeZone]),
        P = (0, a.cK)(y, t.timeZone),
        D = (0, m.useMemo)(() => {
            let e = "";
            return "highlightedRange" in t && t.value && !t.anchorDate && ((0, a.ro)(y, t.value.start) || (0, a.ro)(y, t.value.end)) && (e = v + ", "), e += I.format(R), P ? e = A.format(S ? "todayDateSelected" : "todayDate", {
                date: e
            }) : S && (e = A.format("dateSelected", {
                date: e
            })), t.minValue && (0, a.ro)(y, t.minValue) ? e += ", " + A.format("minimumDate") : t.maxValue && (0, a.ro)(y, t.maxValue) && (e += ", " + A.format("maximumDate")), e
        }, [I, R, A, S, P, y, t, v]),
        L = "";
    "anchorDate" in t && T && !t.isReadOnly && N && (L = t.anchorDate ? A.format("finishRangeSelectionPrompt") : A.format("startRangeSelectionPrompt"));
    let x = (0, s.I)(L),
        M = (0, m.useRef)(!1),
        j = (0, m.useRef)(!1),
        k = (0, m.useRef)(void 0),
        {
            pressProps: U,
            isPressed: G
        } = (0, f.d)({
            shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !N || t.isReadOnly,
            onPressStart(e) {
                if (t.isReadOnly) return void t.setFocusedDate(y);
                if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
                    if (t.highlightedRange && !w) {
                        if ((0, a.ro)(y, t.highlightedRange.start)) {
                            t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(y), t.setDragging(!0), j.current = !0;
                            return
                        } else if ((0, a.ro)(y, t.highlightedRange.end)) {
                            t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(y), t.setDragging(!0), j.current = !0;
                            return
                        }
                    }
                    let n = () => {
                        t.setDragging(!0), k.current = void 0, t.selectDate(y), t.setFocusedDate(y), M.current = !0
                    };
                    "touch" === e.pointerType ? k.current = setTimeout(n, 200) : n()
                }
            },
            onPressEnd() {
                j.current = !1, M.current = !1, clearTimeout(k.current), k.current = void 0
            },
            onPress() {
                "anchorDate" in t || t.isReadOnly || (t.selectDate(y), t.setFocusedDate(y))
            },
            onPressUp(e) {
                if (!t.isReadOnly && ("anchorDate" in t && k.current && (t.selectDate(y), t.setFocusedDate(y)), "anchorDate" in t))
                    if (j.current) t.setAnchorDate(y);
                    else if (t.anchorDate && !M.current) t.selectDate(y), t.setFocusedDate(y);
                else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(y), t.setFocusedDate(y));
                else {
                    t.selectDate(y);
                    let e = y.add({
                        days: 1
                    });
                    t.isInvalid(e) && (e = y.subtract({
                        days: 1
                    })), t.isInvalid(e) || t.setFocusedDate(e)
                }
            }
        });
    b || (E = (0, a.ro)(y, t.focusedDate) ? 0 : -1), (0, m.useEffect)(() => {
        T && n.current && ((0, l.e)(n.current), "pointer" !== (0, p.ME)() && document.activeElement === n.current && (0, c.o)(n.current, {
            containingElement: (0, u.m)(n.current)
        }))
    }, [T, n]);
    let F = (0, h.i)({
            day: "numeric",
            timeZone: t.timeZone,
            calendar: y.calendar.identifier
        }),
        V = (0, m.useMemo)(() => F.formatToParts(R).find(e => "day" === e.type).value, [F, R]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !N || void 0,
            "aria-selected": S || void 0,
            "aria-invalid": w || void 0
        },
        buttonProps: (0, d.v)(U, {
            onFocus() {
                b || t.setFocusedDate(y)
            },
            tabIndex: E,
            role: "button",
            "aria-disabled": !N || void 0,
            "aria-label": D,
            "aria-invalid": w || void 0,
            "aria-describedby": [w ? O : void 0, x["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            onPointerEnter(e) {
                "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && N && t.highlightDate(y)
            },
            onPointerDown(e) {
                "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
            },
            onContextMenu(e) {
                e.preventDefault()
            }
        }),
        isPressed: G,
        isFocused: T,
        isSelected: S,
        isDisabled: b,
        isUnavailable: C,
        isOutsideVisibleRange: 0 > y.compare(t.visibleRange.start) || y.compare(t.visibleRange.end) > 0,
        isInvalid: w,
        formattedDate: V
    }
}