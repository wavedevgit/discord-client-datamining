package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o2 {

    /* renamed from: a */
    private ca f44538a;

    /* renamed from: b */
    private Boolean f44539b;

    /* renamed from: c */
    private n9 f44540c;

    /* renamed from: d */
    private Integer f44541d;

    /* renamed from: e */
    private Integer f44542e;

    public final o2 a(Integer num) {
        this.f44541d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final o2 b(n9 n9Var) {
        this.f44540c = n9Var;
        return this;
    }

    public final o2 c(ca caVar) {
        this.f44538a = caVar;
        return this;
    }

    public final o2 d(Boolean bool) {
        this.f44539b = bool;
        return this;
    }

    public final o2 e(Integer num) {
        this.f44542e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final q2 f() {
        return new q2(this, null);
    }
}
