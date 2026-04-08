/** chunk id: 415350 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(735438),
    l = n.n(i),
    s = n(223637),
    r = n(542664),
    a = n(46054);
let o = l().omit(r.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...s.A,
        parse: function(e, t, n) {
            let i = s.A.parse(e, t, n),
                l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return {
                ...i,
                level: l
            }
        }
    },
    c = a.A.combineAndInjectMentionRule(o, [a.A.createReactRules(a.A.defaultReactRuleOptions), {
        header: d
    }]),
    u = a.A.reactParserFor(c)