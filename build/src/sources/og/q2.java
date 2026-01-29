package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f43424a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f43425b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f43426c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f43427d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f43428e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f43429f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f43424a = o2.h(o2Var);
        this.f43425b = o2.i(o2Var);
        this.f43427d = o2.g(o2Var);
        this.f43428e = o2.j(o2Var);
        this.f43429f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f43427d;
    }

    public final ca b() {
        return this.f43424a;
    }

    public final Boolean c() {
        return this.f43425b;
    }

    public final Integer d() {
        return this.f43428e;
    }

    public final Integer e() {
        return this.f43429f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (gf.o.a(this.f43424a, q2Var.f43424a) && gf.o.a(this.f43425b, q2Var.f43425b) && gf.o.a(null, null) && gf.o.a(this.f43427d, q2Var.f43427d) && gf.o.a(this.f43428e, q2Var.f43428e) && gf.o.a(this.f43429f, q2Var.f43429f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43424a, this.f43425b, null, this.f43427d, this.f43428e, this.f43429f);
    }
}
