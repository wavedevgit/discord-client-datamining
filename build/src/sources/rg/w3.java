package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f47232a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47233b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f47234c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f47235d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f47236e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f47179a;
        this.f47232a = ieVar;
        this.f47233b = null;
        bool = u3Var.f47180b;
        this.f47234c = bool;
        this.f47235d = null;
        whVar = u3Var.f47181c;
        this.f47236e = whVar;
    }

    public final ie a() {
        return this.f47232a;
    }

    public final wh b() {
        return this.f47236e;
    }

    public final Boolean c() {
        return this.f47234c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (hf.o.a(this.f47232a, w3Var.f47232a) && hf.o.a(null, null) && hf.o.a(this.f47234c, w3Var.f47234c) && hf.o.a(null, null) && hf.o.a(this.f47236e, w3Var.f47236e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47232a, null, this.f47234c, null, this.f47236e);
    }
}
