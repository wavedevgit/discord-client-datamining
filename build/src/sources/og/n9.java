package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f43181a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f43182b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f43183c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f43184d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f43185e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f43186f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f42914a;
        this.f43181a = k9Var;
        h9Var = g9Var.f42915b;
        this.f43182b = h9Var;
        l9Var = g9Var.f42916c;
        this.f43183c = l9Var;
        i9Var = g9Var.f42917d;
        this.f43184d = i9Var;
        bool = g9Var.f42918e;
        this.f43185e = bool;
        f10 = g9Var.f42919f;
        this.f43186f = f10;
    }

    public final h9 a() {
        return this.f43182b;
    }

    public final i9 b() {
        return this.f43184d;
    }

    public final k9 c() {
        return this.f43181a;
    }

    public final l9 d() {
        return this.f43183c;
    }

    public final Boolean e() {
        return this.f43185e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (gf.o.a(this.f43181a, n9Var.f43181a) && gf.o.a(this.f43182b, n9Var.f43182b) && gf.o.a(this.f43183c, n9Var.f43183c) && gf.o.a(this.f43184d, n9Var.f43184d) && gf.o.a(this.f43185e, n9Var.f43185e) && gf.o.a(this.f43186f, n9Var.f43186f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f43186f;
    }

    public final int hashCode() {
        return gf.o.b(this.f43181a, this.f43182b, this.f43183c, this.f43184d, this.f43185e, this.f43186f);
    }
}
