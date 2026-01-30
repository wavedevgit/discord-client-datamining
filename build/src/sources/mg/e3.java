package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f38177a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f38179c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f38181e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f38182f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f38183g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f38178b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f38180d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f38177a = c3.i(c3Var);
        this.f38179c = c3.k(c3Var);
        this.f38181e = c3.j(c3Var);
        this.f38182f = c3.a(c3Var);
        this.f38183g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f38182f;
    }

    public final i1 b() {
        return this.f38183g;
    }

    public final xe c() {
        return this.f38177a;
    }

    public final wj d() {
        return this.f38181e;
    }

    public final Boolean e() {
        return this.f38179c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (gf.o.a(this.f38177a, e3Var.f38177a) && gf.o.a(null, null) && gf.o.a(this.f38179c, e3Var.f38179c) && gf.o.a(null, null) && gf.o.a(this.f38181e, e3Var.f38181e) && gf.o.a(this.f38182f, e3Var.f38182f) && gf.o.a(this.f38183g, e3Var.f38183g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f38177a, null, this.f38179c, null, this.f38181e, this.f38182f, this.f38183g);
    }
}
