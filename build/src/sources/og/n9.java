package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f43347a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f43348b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f43349c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f43350d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f43351e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f43352f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f43080a;
        this.f43347a = k9Var;
        h9Var = g9Var.f43081b;
        this.f43348b = h9Var;
        l9Var = g9Var.f43082c;
        this.f43349c = l9Var;
        i9Var = g9Var.f43083d;
        this.f43350d = i9Var;
        bool = g9Var.f43084e;
        this.f43351e = bool;
        f10 = g9Var.f43085f;
        this.f43352f = f10;
    }

    public final h9 a() {
        return this.f43348b;
    }

    public final i9 b() {
        return this.f43350d;
    }

    public final k9 c() {
        return this.f43347a;
    }

    public final l9 d() {
        return this.f43349c;
    }

    public final Boolean e() {
        return this.f43351e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (gf.o.a(this.f43347a, n9Var.f43347a) && gf.o.a(this.f43348b, n9Var.f43348b) && gf.o.a(this.f43349c, n9Var.f43349c) && gf.o.a(this.f43350d, n9Var.f43350d) && gf.o.a(this.f43351e, n9Var.f43351e) && gf.o.a(this.f43352f, n9Var.f43352f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f43352f;
    }

    public final int hashCode() {
        return gf.o.b(this.f43347a, this.f43348b, this.f43349c, this.f43350d, this.f43351e, this.f43352f);
    }
}
