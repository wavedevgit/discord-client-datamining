package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f37954a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f37956c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f37958e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f37959f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f37960g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f37955b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f37957d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f37954a = c3.i(c3Var);
        this.f37956c = c3.k(c3Var);
        this.f37958e = c3.j(c3Var);
        this.f37959f = c3.a(c3Var);
        this.f37960g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f37959f;
    }

    public final i1 b() {
        return this.f37960g;
    }

    public final xe c() {
        return this.f37954a;
    }

    public final wj d() {
        return this.f37958e;
    }

    public final Boolean e() {
        return this.f37956c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (gf.o.a(this.f37954a, e3Var.f37954a) && gf.o.a(null, null) && gf.o.a(this.f37956c, e3Var.f37956c) && gf.o.a(null, null) && gf.o.a(this.f37958e, e3Var.f37958e) && gf.o.a(this.f37959f, e3Var.f37959f) && gf.o.a(this.f37960g, e3Var.f37960g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f37954a, null, this.f37956c, null, this.f37958e, this.f37959f, this.f37960g);
    }
}
