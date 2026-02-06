package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f44616a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f44617b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f44618c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f44619d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f44620e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f44621f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f44616a = o2.h(o2Var);
        this.f44617b = o2.i(o2Var);
        this.f44619d = o2.g(o2Var);
        this.f44620e = o2.j(o2Var);
        this.f44621f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f44619d;
    }

    public final ca b() {
        return this.f44616a;
    }

    public final Boolean c() {
        return this.f44617b;
    }

    public final Integer d() {
        return this.f44620e;
    }

    public final Integer e() {
        return this.f44621f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (gf.o.a(this.f44616a, q2Var.f44616a) && gf.o.a(this.f44617b, q2Var.f44617b) && gf.o.a(null, null) && gf.o.a(this.f44619d, q2Var.f44619d) && gf.o.a(this.f44620e, q2Var.f44620e) && gf.o.a(this.f44621f, q2Var.f44621f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f44616a, this.f44617b, null, this.f44619d, this.f44620e, this.f44621f);
    }
}
