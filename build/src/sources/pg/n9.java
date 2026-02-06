package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f44523a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f44524b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f44525c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f44526d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f44527e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f44528f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f44256a;
        this.f44523a = k9Var;
        h9Var = g9Var.f44257b;
        this.f44524b = h9Var;
        l9Var = g9Var.f44258c;
        this.f44525c = l9Var;
        i9Var = g9Var.f44259d;
        this.f44526d = i9Var;
        bool = g9Var.f44260e;
        this.f44527e = bool;
        f10 = g9Var.f44261f;
        this.f44528f = f10;
    }

    public final h9 a() {
        return this.f44524b;
    }

    public final i9 b() {
        return this.f44526d;
    }

    public final k9 c() {
        return this.f44523a;
    }

    public final l9 d() {
        return this.f44525c;
    }

    public final Boolean e() {
        return this.f44527e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (gf.o.a(this.f44523a, n9Var.f44523a) && gf.o.a(this.f44524b, n9Var.f44524b) && gf.o.a(this.f44525c, n9Var.f44525c) && gf.o.a(this.f44526d, n9Var.f44526d) && gf.o.a(this.f44527e, n9Var.f44527e) && gf.o.a(this.f44528f, n9Var.f44528f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f44528f;
    }

    public final int hashCode() {
        return gf.o.b(this.f44523a, this.f44524b, this.f44525c, this.f44526d, this.f44527e, this.f44528f);
    }
}
