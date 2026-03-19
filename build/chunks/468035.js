/** chunk id: 468035 params = (module,exports,require) **/
function i(e, t) {
    let {
        Operator: n,
        QuestionID: i,
        ChoiceLocator: a,
        LeftOperand: l,
        RightOperand: r
    } = e;
    if (null == i) return !0;
    let s = t[i];
    if (null == s || "" === s) return !1;
    let o = a?.match(/SelectableChoice\/(\d+)/),
        c = o?.[1];
    switch (n) {
        case "Selected":
            return null != c && s.split(",").includes(c);
        case "NotSelected":
            return null != c && !s.split(",").includes(c);
        case "EqualTo":
            return s === (r ?? l);
        case "NotEqualTo":
            return s !== (r ?? l);
        case "GreaterThan":
            return Number(s) > Number(r ?? l ?? 0);
        case "LessThan":
            return Number(s) < Number(r ?? l ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(s) >= Number(r ?? l ?? 0);
        case "LessThanOrEqualTo":
            return Number(s) <= Number(r ?? l ?? 0);
        case "Contains":
            return s.includes(r ?? l ?? "");
        case "DoesNotContain":
            return !s.includes(r ?? l ?? "");
        default:
            return !0
    }
}

function a(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow)("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t
}

function l(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements) "Page Break" === i.Type ? n.length > 0 && (t.push(n), n = []) : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t
}

function r(e) {
    for (let t of a(e)) {
        let n = l(e.Blocks[t]);
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

function s(e, t) {
    let {
        blockId: n,
        pageIndex: a,
        responses: r
    } = t, s = e.Blocks[n];
    if (null == s) return [];
    let o = l(s);
    return a >= o.length ? [] : o[a].filter(t => (function(e, t) {
        if (null == e.DisplayLogic) return !0;
        let {
            DisplayLogic: n
        } = e;
        for (let e in n)
            if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
                let a = n[e];
                if ("If" === a.Type || "ElseIf" === a.Type) {
                    if (function(e, t) {
                            let n = [];
                            for (let t in e) "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
                            if (0 === n.length) return !0;
                            let a = i(n[0], t);
                            for (let e = 1; e < n.length; e++) {
                                let l = n[e],
                                    r = i(l, t);
                                a = "Or" === (l.Conjuction ?? l.Conjunction ?? "And") ? a || r : a && r
                            }
                            return a
                        }(a, t)) return !0
                } else if ("Else" === a.Type) return !0
            } return !1
    })(e.Questions[t], r))
}

function o(e, t) {
    let {
        blockId: n,
        pageIndex: i,
        responses: r
    } = t, s = a(e), o = e.Blocks[n];
    if (null == o) return {
        blockId: null,
        pageIndex: 0,
        questionIds: [],
        isComplete: !0
    };
    let c = l(o),
        d = c[i];
    if (null != d && d.length > 0)
        for (let t = d.length - 1; t >= 0; t--) {
            let n = d[t];
            if (null != e.Questions[n] && null != r[n]) {
                let t = o.BlockElements.find(e => e.QuestionID === n);
                if (null != t) {
                    let n = function(e, t) {
                        if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                        for (let n of e.SkipLogic) {
                            let {
                                QuestionID: e,
                                Condition: i,
                                Value: a,
                                SkipToDestination: l,
                                ChoiceLocator: r
                            } = n, s = t[e];
                            if (null == s || "" === s) continue;
                            let o = r?.match(/SelectableChoice\/(\d+)/),
                                c = o?.[1],
                                d = !1;
                            switch (i) {
                                case "Selected":
                                    d = null != c && s.split(",").includes(c);
                                    break;
                                case "NotSelected":
                                    d = null != c && !s.split(",").includes(c);
                                    break;
                                case "EqualTo":
                                    d = s === a?.toString();
                                    break;
                                case "NotEqualTo":
                                    d = s !== a?.toString();
                                    break;
                                case "GreaterThan":
                                    d = Number(s) > Number(a ?? 0);
                                    break;
                                case "LessThan":
                                    d = Number(s) < Number(a ?? 0);
                                    break;
                                case "GreaterThanOrEqualTo":
                                    d = Number(s) >= Number(a ?? 0);
                                    break;
                                case "LessThanOrEqualTo":
                                    d = Number(s) <= Number(a ?? 0);
                                    break;
                                case "Contains":
                                    d = s.includes(a?.toString() ?? "");
                                    break;
                                case "DoesNotContain":
                                    d = !s.includes(a?.toString() ?? "")
                            }
                            if (d) {
                                if ("ENDOFSURVEY" === l?.trim().toUpperCase()) return "ENDOFSURVEY";
                                return l
                            }
                        }
                        return null
                    }(t, r);
                    if ("ENDOFSURVEY" === n) return {
                        blockId: null,
                        pageIndex: 0,
                        questionIds: [],
                        isComplete: !0
                    };
                    if (null != n)
                        for (let t of s) {
                            let i = l(e.Blocks[t]);
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
    let u = s.indexOf(n);
    for (let t = u + 1; t < s.length; t++) {
        let n = s[t],
            i = l(e.Blocks[n]);
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
    i: () => r,
    uy: () => s,
    vt: () => o
}), n(321073)