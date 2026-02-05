package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o2 {

    /* renamed from: a */
    private ca f43196a;

    /* renamed from: b */
    private Boolean f43197b;

    /* renamed from: c */
    private n9 f43198c;

    /* renamed from: d */
    private Integer f43199d;

    /* renamed from: e */
    private Integer f43200e;

    public final o2 a(Integer num) {
        this.f43199d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final o2 b(n9 n9Var) {
        this.f43198c = n9Var;
        return this;
    }

    public final o2 c(ca caVar) {
        this.f43196a = caVar;
        return this;
    }

    public final o2 d(Boolean bool) {
        this.f43197b = bool;
        return this;
    }

    public final o2 e(Integer num) {
        this.f43200e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final q2 f() {
        return new q2(this, null);
    }
}
