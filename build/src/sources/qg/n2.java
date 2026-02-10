package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n2 {

    /* renamed from: a  reason: collision with root package name */
    private q2 f46061a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f46062b;

    /* renamed from: c  reason: collision with root package name */
    private e9 f46063c;

    public final n2 a(Integer num) {
        this.f46062b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final n2 b(e9 e9Var) {
        this.f46063c = e9Var;
        return this;
    }

    public final n2 c(q2 q2Var) {
        this.f46061a = q2Var;
        return this;
    }

    public final s2 e() {
        return new s2(this, null);
    }
}
