package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f44571a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f44572b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f44573c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f44574d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f44575e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f44576f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f44304a;
        this.f44571a = k9Var;
        h9Var = g9Var.f44305b;
        this.f44572b = h9Var;
        l9Var = g9Var.f44306c;
        this.f44573c = l9Var;
        i9Var = g9Var.f44307d;
        this.f44574d = i9Var;
        bool = g9Var.f44308e;
        this.f44575e = bool;
        f10 = g9Var.f44309f;
        this.f44576f = f10;
    }

    public final h9 a() {
        return this.f44572b;
    }

    public final i9 b() {
        return this.f44574d;
    }

    public final k9 c() {
        return this.f44571a;
    }

    public final l9 d() {
        return this.f44573c;
    }

    public final Boolean e() {
        return this.f44575e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (gf.o.a(this.f44571a, n9Var.f44571a) && gf.o.a(this.f44572b, n9Var.f44572b) && gf.o.a(this.f44573c, n9Var.f44573c) && gf.o.a(this.f44574d, n9Var.f44574d) && gf.o.a(this.f44575e, n9Var.f44575e) && gf.o.a(this.f44576f, n9Var.f44576f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f44576f;
    }

    public final int hashCode() {
        return gf.o.b(this.f44571a, this.f44572b, this.f44573c, this.f44574d, this.f44575e, this.f44576f);
    }
}
