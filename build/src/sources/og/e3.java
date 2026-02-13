package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f39747a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f39749c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f39751e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f39752f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f39753g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f39748b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f39750d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f39747a = c3.i(c3Var);
        this.f39749c = c3.k(c3Var);
        this.f39751e = c3.j(c3Var);
        this.f39752f = c3.a(c3Var);
        this.f39753g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f39752f;
    }

    public final i1 b() {
        return this.f39753g;
    }

    public final xe c() {
        return this.f39747a;
    }

    public final wj d() {
        return this.f39751e;
    }

    public final Boolean e() {
        return this.f39749c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (hf.o.a(this.f39747a, e3Var.f39747a) && hf.o.a(null, null) && hf.o.a(this.f39749c, e3Var.f39749c) && hf.o.a(null, null) && hf.o.a(this.f39751e, e3Var.f39751e) && hf.o.a(this.f39752f, e3Var.f39752f) && hf.o.a(this.f39753g, e3Var.f39753g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f39747a, null, this.f39749c, null, this.f39751e, this.f39752f, this.f39753g);
    }
}
