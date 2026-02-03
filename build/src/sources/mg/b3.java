package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b3 {

    /* renamed from: a  reason: collision with root package name */
    private e3 f38089a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f38090b;

    /* renamed from: c  reason: collision with root package name */
    private yd f38091c;

    public final b3 a(Integer num) {
        this.f38090b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final b3 b(yd ydVar) {
        this.f38091c = ydVar;
        return this;
    }

    public final b3 c(e3 e3Var) {
        this.f38089a = e3Var;
        return this;
    }

    public final g3 e() {
        return new g3(this, null);
    }
}
