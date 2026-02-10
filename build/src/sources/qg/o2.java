package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o2 {

    /* renamed from: a */
    private ca f46100a;

    /* renamed from: b */
    private Boolean f46101b;

    /* renamed from: c */
    private n9 f46102c;

    /* renamed from: d */
    private Integer f46103d;

    /* renamed from: e */
    private Integer f46104e;

    public final o2 a(Integer num) {
        this.f46103d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final o2 b(n9 n9Var) {
        this.f46102c = n9Var;
        return this;
    }

    public final o2 c(ca caVar) {
        this.f46100a = caVar;
        return this;
    }

    public final o2 d(Boolean bool) {
        this.f46101b = bool;
        return this;
    }

    public final o2 e(Integer num) {
        this.f46104e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final q2 f() {
        return new q2(this, null);
    }
}
