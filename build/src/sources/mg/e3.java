package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f38161a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f38163c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f38165e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f38166f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f38167g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f38162b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f38164d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f38161a = c3.i(c3Var);
        this.f38163c = c3.k(c3Var);
        this.f38165e = c3.j(c3Var);
        this.f38166f = c3.a(c3Var);
        this.f38167g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f38166f;
    }

    public final i1 b() {
        return this.f38167g;
    }

    public final xe c() {
        return this.f38161a;
    }

    public final wj d() {
        return this.f38165e;
    }

    public final Boolean e() {
        return this.f38163c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (gf.o.a(this.f38161a, e3Var.f38161a) && gf.o.a(null, null) && gf.o.a(this.f38163c, e3Var.f38163c) && gf.o.a(null, null) && gf.o.a(this.f38165e, e3Var.f38165e) && gf.o.a(this.f38166f, e3Var.f38166f) && gf.o.a(this.f38167g, e3Var.f38167g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f38161a, null, this.f38163c, null, this.f38165e, this.f38166f, this.f38167g);
    }
}
