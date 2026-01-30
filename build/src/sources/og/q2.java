package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f43440a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f43441b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f43442c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f43443d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f43444e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f43445f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f43440a = o2.h(o2Var);
        this.f43441b = o2.i(o2Var);
        this.f43443d = o2.g(o2Var);
        this.f43444e = o2.j(o2Var);
        this.f43445f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f43443d;
    }

    public final ca b() {
        return this.f43440a;
    }

    public final Boolean c() {
        return this.f43441b;
    }

    public final Integer d() {
        return this.f43444e;
    }

    public final Integer e() {
        return this.f43445f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (gf.o.a(this.f43440a, q2Var.f43440a) && gf.o.a(this.f43441b, q2Var.f43441b) && gf.o.a(null, null) && gf.o.a(this.f43443d, q2Var.f43443d) && gf.o.a(this.f43444e, q2Var.f43444e) && gf.o.a(this.f43445f, q2Var.f43445f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43440a, this.f43441b, null, this.f43443d, this.f43444e, this.f43445f);
    }
}
