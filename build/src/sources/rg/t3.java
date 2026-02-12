package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t3 {

    /* renamed from: a  reason: collision with root package name */
    private w3 f47155a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f47156b;

    /* renamed from: c  reason: collision with root package name */
    private jd f47157c;

    public final t3 a(Integer num) {
        this.f47156b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final t3 b(jd jdVar) {
        this.f47157c = jdVar;
        return this;
    }

    public final t3 c(w3 w3Var) {
        this.f47155a = w3Var;
        return this;
    }

    public final y3 e() {
        return new y3(this, null);
    }
}
