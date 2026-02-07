package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o2 {

    /* renamed from: a */
    private ca f44586a;

    /* renamed from: b */
    private Boolean f44587b;

    /* renamed from: c */
    private n9 f44588c;

    /* renamed from: d */
    private Integer f44589d;

    /* renamed from: e */
    private Integer f44590e;

    public final o2 a(Integer num) {
        this.f44589d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final o2 b(n9 n9Var) {
        this.f44588c = n9Var;
        return this;
    }

    public final o2 c(ca caVar) {
        this.f44586a = caVar;
        return this;
    }

    public final o2 d(Boolean bool) {
        this.f44587b = bool;
        return this;
    }

    public final o2 e(Integer num) {
        this.f44590e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final q2 f() {
        return new q2(this, null);
    }
}
