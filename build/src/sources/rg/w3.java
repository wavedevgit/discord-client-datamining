package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f47231a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47232b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f47233c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f47234d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f47235e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f47178a;
        this.f47231a = ieVar;
        this.f47232b = null;
        bool = u3Var.f47179b;
        this.f47233c = bool;
        this.f47234d = null;
        whVar = u3Var.f47180c;
        this.f47235e = whVar;
    }

    public final ie a() {
        return this.f47231a;
    }

    public final wh b() {
        return this.f47235e;
    }

    public final Boolean c() {
        return this.f47233c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (hf.o.a(this.f47231a, w3Var.f47231a) && hf.o.a(null, null) && hf.o.a(this.f47233c, w3Var.f47233c) && hf.o.a(null, null) && hf.o.a(this.f47235e, w3Var.f47235e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47231a, null, this.f47233c, null, this.f47235e);
    }
}
