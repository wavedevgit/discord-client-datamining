package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o2 {

    /* renamed from: a */
    private ca f43290a;

    /* renamed from: b */
    private Boolean f43291b;

    /* renamed from: c */
    private n9 f43292c;

    /* renamed from: d */
    private Integer f43293d;

    /* renamed from: e */
    private Integer f43294e;

    public final o2 a(Integer num) {
        this.f43293d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final o2 b(n9 n9Var) {
        this.f43292c = n9Var;
        return this;
    }

    public final o2 c(ca caVar) {
        this.f43290a = caVar;
        return this;
    }

    public final o2 d(Boolean bool) {
        this.f43291b = bool;
        return this;
    }

    public final o2 e(Integer num) {
        this.f43294e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final q2 f() {
        return new q2(this, null);
    }
}
