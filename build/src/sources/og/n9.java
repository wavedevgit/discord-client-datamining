package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f43331a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f43332b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f43333c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f43334d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f43335e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f43336f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f43064a;
        this.f43331a = k9Var;
        h9Var = g9Var.f43065b;
        this.f43332b = h9Var;
        l9Var = g9Var.f43066c;
        this.f43333c = l9Var;
        i9Var = g9Var.f43067d;
        this.f43334d = i9Var;
        bool = g9Var.f43068e;
        this.f43335e = bool;
        f10 = g9Var.f43069f;
        this.f43336f = f10;
    }

    public final h9 a() {
        return this.f43332b;
    }

    public final i9 b() {
        return this.f43334d;
    }

    public final k9 c() {
        return this.f43331a;
    }

    public final l9 d() {
        return this.f43333c;
    }

    public final Boolean e() {
        return this.f43335e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (gf.o.a(this.f43331a, n9Var.f43331a) && gf.o.a(this.f43332b, n9Var.f43332b) && gf.o.a(this.f43333c, n9Var.f43333c) && gf.o.a(this.f43334d, n9Var.f43334d) && gf.o.a(this.f43335e, n9Var.f43335e) && gf.o.a(this.f43336f, n9Var.f43336f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f43336f;
    }

    public final int hashCode() {
        return gf.o.b(this.f43331a, this.f43332b, this.f43333c, this.f43334d, this.f43335e, this.f43336f);
    }
}
