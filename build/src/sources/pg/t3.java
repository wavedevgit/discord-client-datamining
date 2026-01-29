package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t3 {

    /* renamed from: a  reason: collision with root package name */
    private w3 f45726a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f45727b;

    /* renamed from: c  reason: collision with root package name */
    private jd f45728c;

    public final t3 a(Integer num) {
        this.f45727b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final t3 b(jd jdVar) {
        this.f45728c = jdVar;
        return this;
    }

    public final t3 c(w3 w3Var) {
        this.f45726a = w3Var;
        return this;
    }

    public final y3 e() {
        return new y3(this, null);
    }
}
