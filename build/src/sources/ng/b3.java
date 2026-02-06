package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b3 {

    /* renamed from: a  reason: collision with root package name */
    private e3 f39711a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f39712b;

    /* renamed from: c  reason: collision with root package name */
    private yd f39713c;

    public final b3 a(Integer num) {
        this.f39712b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final b3 b(yd ydVar) {
        this.f39713c = ydVar;
        return this;
    }

    public final b3 c(e3 e3Var) {
        this.f39711a = e3Var;
        return this;
    }

    public final g3 e() {
        return new g3(this, null);
    }
}
