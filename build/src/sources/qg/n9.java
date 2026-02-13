package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f45322a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f45323b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f45324c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f45325d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f45326e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f45327f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f45055a;
        this.f45322a = k9Var;
        h9Var = g9Var.f45056b;
        this.f45323b = h9Var;
        l9Var = g9Var.f45057c;
        this.f45324c = l9Var;
        i9Var = g9Var.f45058d;
        this.f45325d = i9Var;
        bool = g9Var.f45059e;
        this.f45326e = bool;
        f10 = g9Var.f45060f;
        this.f45327f = f10;
    }

    public final h9 a() {
        return this.f45323b;
    }

    public final i9 b() {
        return this.f45325d;
    }

    public final k9 c() {
        return this.f45322a;
    }

    public final l9 d() {
        return this.f45324c;
    }

    public final Boolean e() {
        return this.f45326e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (hf.o.a(this.f45322a, n9Var.f45322a) && hf.o.a(this.f45323b, n9Var.f45323b) && hf.o.a(this.f45324c, n9Var.f45324c) && hf.o.a(this.f45325d, n9Var.f45325d) && hf.o.a(this.f45326e, n9Var.f45326e) && hf.o.a(this.f45327f, n9Var.f45327f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f45327f;
    }

    public final int hashCode() {
        return hf.o.b(this.f45322a, this.f45323b, this.f45324c, this.f45325d, this.f45326e, this.f45327f);
    }
}
