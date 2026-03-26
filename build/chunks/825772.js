/** chunk id: 825772 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(315069),
    a = n(427157);
class l extends i.A {
    user;
    member_type;
    accepted_at;
    static createFromServer(e) {
        return new l(e)
    }
    constructor(e) {
        super(), this.user = new a.A(e.user), this.member_type = e.member_type, this.accepted_at = e.accepted_at
    }
    isPrimary() {
        return 1 === this.member_type
    }
    isMember() {
        return 2 === this.member_type && null != this.accepted_at
    }
    isInvited() {
        return 2 === this.member_type && null == this.accepted_at
    }
}