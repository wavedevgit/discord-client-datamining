package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n2 {

    /* renamed from: a  reason: collision with root package name */
    private q2 f44499a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f44500b;

    /* renamed from: c  reason: collision with root package name */
    private e9 f44501c;

    public final n2 a(Integer num) {
        this.f44500b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final n2 b(e9 e9Var) {
        this.f44501c = e9Var;
        return this;
    }

    public final n2 c(q2 q2Var) {
        this.f44499a = q2Var;
        return this;
    }

    public final s2 e() {
        return new s2(this, null);
    }
}
