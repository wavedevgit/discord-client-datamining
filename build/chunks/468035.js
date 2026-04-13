/** chunk id: 468035 params = (module,exports,require) **/
"use strict";

function i(e, t) {
    let {
        Operator: n,
        QuestionID: i,
        ChoiceLocator: r,
        LeftOperand: s,
        RightOperand: a
    } = e;
    if (null == i) return !0;
    let l = t[i];
    if (null == l || "" === l) return !1;
    let o = r?.match(/SelectableChoice\/(\d+)/),
        c = o?.[1];
    switch (n) {
        case "Selected":
            return null != c && l.split(",").includes(c);
        case "NotSelected":
            return null != c && !l.split(",").includes(c);
        case "EqualTo":
            return l === (a ?? s);
        case "NotEqualTo":
            return l !== (a ?? s);
        case "GreaterThan":
            return Number(l) > Number(a ?? s ?? 0);
        case "LessThan":
            return Number(l) < Number(a ?? s ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(l) >= Number(a ?? s ?? 0);
        case "LessThanOrEqualTo":
            return Number(l) <= Number(a ?? s ?? 0);
        case "Contains":
            return l.includes(a ?? s ?? "");
        case "DoesNotContain":
            return !l.includes(a ?? s ?? "");
        default:
            return !0
    }
}

function r(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow)("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t
}

function s(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements) "Page Break" === i.Type ? n.length > 0 && (t.push(n), n = []) : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t
}

function a(e) {
    for (let t of r(e)) {
        let n = s(e.Blocks[t]);
        if (n.length > 0 && n[0].length > 0) return {
            blockId: t,
            pageIndex: 0,
            questionIds: n[0],
            isComplete: !1
        }
    }
    return {
        blockId: null,
        pageIndex: 0,
        questionIds: [],
        isComplete: !0
    }
}

function l(e, t) {
    let {
        blockId: n,
        pageIndex: r,
        responses: a
    } = t, l = e.Blocks[n];
    if (null == l) return [];
    let o = s(l);
    return r >= o.length ? [] : o[r].filter(t => (function(e, t) {
        if (null == e.DisplayLogic) return !0;
        let {
            DisplayLogic: n
        } = e;
        for (let e in n)
            if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
                let r = n[e];
                if ("If" === r.Type || "ElseIf" === r.Type) {
                    if (function(e, t) {
                            let n = [];
                            for (let t in e) "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
                            if (0 === n.length) return !0;
                            let r = i(n[0], t);
                            for (let e = 1; e < n.length; e++) {
                                let s = n[e],
                                    a = i(s, t);
                                r = "Or" === (s.Conjuction ?? s.Conjunction ?? "And") ? r || a : r && a
                            }
                            return r
                        }(r, t)) return !0
                } else if ("Else" === r.Type) return !0
            } return !1
    })(e.Questions[t], a))
}

function o(e, t) {
    let {
        blockId: n,
        pageIndex: i,
        responses: a
    } = t, l = r(e), o = e.Blocks[n];
    if (null == o) return {
        blockId: null,
        pageIndex: 0,
        questionIds: [],
        isComplete: !0
    };
    let c = s(o),
        u = c[i];
    if (null != u && u.length > 0)
        for (let t = u.length - 1; t >= 0; t--) {
            let n = u[t];
            if (null != e.Questions[n] && null != a[n]) {
                let t = o.BlockElements.find(e => e.QuestionID === n);
                if (null != t) {
                    let n = function(e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let n of e.SkipLogic) {
                            let {
                                QuestionID: e,
                                Condition: i,
                                Value: r,
                                SkipToDestination: s,
                                ChoiceLocator: a
                            } = n, l = t[e];
                            if (null == l || "" === l) continue;
                            let o = a?.match(/SelectableChoice\/(\d+)/),
                                c = o?.[1],
                                u = !1;
                            switch (i) {
                                case "Selected":
                                    u = null != c && l.split(",").includes(c);
                                    break;
                                case "NotSelected":
                                    u = null != c && !l.split(",").includes(c);
                                    break;
                                case "EqualTo":
                                    u = l === r?.toString();
                                    break;
                                case "NotEqualTo":
                                    u = l !== r?.toString();
                                    break;
                                case "GreaterThan":
                                    u = Number(l) > Number(r ?? 0);
                                    break;
                                case "LessThan":
                                    u = Number(l) < Number(r ?? 0);
                                    break;
                                case "GreaterThanOrEqualTo":
                                    u = Number(l) >= Number(r ?? 0);
                                    break;
                                case "LessThanOrEqualTo":
                                    u = Number(l) <= Number(r ?? 0);
                                    break;
                                case "Contains":
                                    u = l.includes(r?.toString() ?? "");
                                    break;
                                case "DoesNotContain":
                                    u = !l.includes(r?.toString() ?? "")
                            }
                            if (u) {
                                if ("ENDOFSURVEY" === s?.trim().toUpperCase()) return "ENDOFSURVEY";
                                return s
                            }
                        }
                        return null
                    }(t, a);
                    if ("ENDOFSURVEY" === n) return {
                        blockId: null,
                        pageIndex: 0,
                        questionIds: [],
                        isComplete: !0
                    };
                    if (null != n)
                        for (let t of l) {
                            let i = s(e.Blocks[t]);
                            for (let e = 0; e < i.length; e++)
                                if (i[e].includes(n)) return {
                                    blockId: t,
                                    pageIndex: e,
                                    questionIds: i[e],
                                    isComplete: !1
                                }
                        }
                }
            }
        }
    if (i + 1 < c.length) return {
        blockId: n,
        pageIndex: i + 1,
        questionIds: c[i + 1],
        isComplete: !1
    };
    let d = l.indexOf(n);
    for (let t = d + 1; t < l.length; t++) {
        let n = l[t],
            i = s(e.Blocks[n]);
        if (i.length > 0 && i[0].length > 0) return {
            blockId: n,
            pageIndex: 0,
            questionIds: i[0],
            isComplete: !1
        }
    }
    return {
        blockId: null,
        pageIndex: 0,
        questionIds: [],
        isComplete: !0
    }
}
n.d(t, {
    i: () => a,
    uy: () => l,
    vt: () => o
}), n(321073)