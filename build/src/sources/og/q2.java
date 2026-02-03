package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f43568a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f43569b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f43570c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f43571d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f43572e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f43573f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f43568a = o2.h(o2Var);
        this.f43569b = o2.i(o2Var);
        this.f43571d = o2.g(o2Var);
        this.f43572e = o2.j(o2Var);
        this.f43573f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f43571d;
    }

    public final ca b() {
        return this.f43568a;
    }

    public final Boolean c() {
        return this.f43569b;
    }

    public final Integer d() {
        return this.f43572e;
    }

    public final Integer e() {
        return this.f43573f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (gf.o.a(this.f43568a, q2Var.f43568a) && gf.o.a(this.f43569b, q2Var.f43569b) && gf.o.a(null, null) && gf.o.a(this.f43571d, q2Var.f43571d) && gf.o.a(this.f43572e, q2Var.f43572e) && gf.o.a(this.f43573f, q2Var.f43573f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43568a, this.f43569b, null, this.f43571d, this.f43572e, this.f43573f);
    }
}
