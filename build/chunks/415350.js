/** chunk id: 415350, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    l = n.n(i),
    r = n(223637),
    a = n(542664),
    s = n(46054);
let o = l().omit(a.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...r.A,
        parse: function(e, t, n) {
            let i = r.A.parse(e, t, n),
                l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return {
                ...i,
                level: l
            }
        }
    },
    c = s.A.combineAndInjectMentionRule(o, [s.A.createReactRules(s.A.defaultReactRuleOptions), {
        header: d
    }]),
    u = s.A.reactParserFor(c)