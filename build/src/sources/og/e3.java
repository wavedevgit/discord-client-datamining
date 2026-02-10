package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f40852a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f40854c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f40856e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f40857f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f40858g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f40853b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f40855d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f40852a = c3.i(c3Var);
        this.f40854c = c3.k(c3Var);
        this.f40856e = c3.j(c3Var);
        this.f40857f = c3.a(c3Var);
        this.f40858g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f40857f;
    }

    public final i1 b() {
        return this.f40858g;
    }

    public final xe c() {
        return this.f40852a;
    }

    public final wj d() {
        return this.f40856e;
    }

    public final Boolean e() {
        return this.f40854c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (hf.o.a(this.f40852a, e3Var.f40852a) && hf.o.a(null, null) && hf.o.a(this.f40854c, e3Var.f40854c) && hf.o.a(null, null) && hf.o.a(this.f40856e, e3Var.f40856e) && hf.o.a(this.f40857f, e3Var.f40857f) && hf.o.a(this.f40858g, e3Var.f40858g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f40852a, null, this.f40854c, null, this.f40856e, this.f40857f, this.f40858g);
    }
}
