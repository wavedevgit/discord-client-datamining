package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f44754a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f44755b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f44756c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f44757d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f44758e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f44759f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f44487a;
        this.f44754a = k9Var;
        h9Var = g9Var.f44488b;
        this.f44755b = h9Var;
        l9Var = g9Var.f44489c;
        this.f44756c = l9Var;
        i9Var = g9Var.f44490d;
        this.f44757d = i9Var;
        bool = g9Var.f44491e;
        this.f44758e = bool;
        f10 = g9Var.f44492f;
        this.f44759f = f10;
    }

    public final h9 a() {
        return this.f44755b;
    }

    public final i9 b() {
        return this.f44757d;
    }

    public final k9 c() {
        return this.f44754a;
    }

    public final l9 d() {
        return this.f44756c;
    }

    public final Boolean e() {
        return this.f44758e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (hf.o.a(this.f44754a, n9Var.f44754a) && hf.o.a(this.f44755b, n9Var.f44755b) && hf.o.a(this.f44756c, n9Var.f44756c) && hf.o.a(this.f44757d, n9Var.f44757d) && hf.o.a(this.f44758e, n9Var.f44758e) && hf.o.a(this.f44759f, n9Var.f44759f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f44759f;
    }

    public final int hashCode() {
        return hf.o.b(this.f44754a, this.f44755b, this.f44756c, this.f44757d, this.f44758e, this.f44759f);
    }
}
