package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f43274a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f43275b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f43276c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f43277d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f43278e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f43279f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f43274a = o2.h(o2Var);
        this.f43275b = o2.i(o2Var);
        this.f43277d = o2.g(o2Var);
        this.f43278e = o2.j(o2Var);
        this.f43279f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f43277d;
    }

    public final ca b() {
        return this.f43274a;
    }

    public final Boolean c() {
        return this.f43275b;
    }

    public final Integer d() {
        return this.f43278e;
    }

    public final Integer e() {
        return this.f43279f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (gf.o.a(this.f43274a, q2Var.f43274a) && gf.o.a(this.f43275b, q2Var.f43275b) && gf.o.a(null, null) && gf.o.a(this.f43277d, q2Var.f43277d) && gf.o.a(this.f43278e, q2Var.f43278e) && gf.o.a(this.f43279f, q2Var.f43279f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43274a, this.f43275b, null, this.f43277d, this.f43278e, this.f43279f);
    }
}
