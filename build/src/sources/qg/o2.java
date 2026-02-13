package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o2 {

    /* renamed from: a */
    private ca f45337a;

    /* renamed from: b */
    private Boolean f45338b;

    /* renamed from: c */
    private n9 f45339c;

    /* renamed from: d */
    private Integer f45340d;

    /* renamed from: e */
    private Integer f45341e;

    public final o2 a(Integer num) {
        this.f45340d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final o2 b(n9 n9Var) {
        this.f45339c = n9Var;
        return this;
    }

    public final o2 c(ca caVar) {
        this.f45337a = caVar;
        return this;
    }

    public final o2 d(Boolean bool) {
        this.f45338b = bool;
        return this;
    }

    public final o2 e(Integer num) {
        this.f45341e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final q2 f() {
        return new q2(this, null);
    }
}
