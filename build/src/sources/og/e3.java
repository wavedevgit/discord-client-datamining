package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f39179a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f39181c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f39183e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f39184f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f39185g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f39180b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f39182d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f39179a = c3.i(c3Var);
        this.f39181c = c3.k(c3Var);
        this.f39183e = c3.j(c3Var);
        this.f39184f = c3.a(c3Var);
        this.f39185g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f39184f;
    }

    public final i1 b() {
        return this.f39185g;
    }

    public final xe c() {
        return this.f39179a;
    }

    public final wj d() {
        return this.f39183e;
    }

    public final Boolean e() {
        return this.f39181c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (hf.o.a(this.f39179a, e3Var.f39179a) && hf.o.a(null, null) && hf.o.a(this.f39181c, e3Var.f39181c) && hf.o.a(null, null) && hf.o.a(this.f39183e, e3Var.f39183e) && hf.o.a(this.f39184f, e3Var.f39184f) && hf.o.a(this.f39185g, e3Var.f39185g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f39179a, null, this.f39181c, null, this.f39183e, this.f39184f, this.f39185g);
    }
}
