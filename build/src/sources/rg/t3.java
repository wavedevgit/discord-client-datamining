package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t3 {

    /* renamed from: a  reason: collision with root package name */
    private w3 f48700a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f48701b;

    /* renamed from: c  reason: collision with root package name */
    private jd f48702c;

    public final t3 a(Integer num) {
        this.f48701b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final t3 b(jd jdVar) {
        this.f48702c = jdVar;
        return this;
    }

    public final t3 c(w3 w3Var) {
        this.f48700a = w3Var;
        return this;
    }

    public final y3 e() {
        return new y3(this, null);
    }
}
