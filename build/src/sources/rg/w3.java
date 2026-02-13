package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f47800a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47801b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f47802c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f47803d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f47804e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f47747a;
        this.f47800a = ieVar;
        this.f47801b = null;
        bool = u3Var.f47748b;
        this.f47802c = bool;
        this.f47803d = null;
        whVar = u3Var.f47749c;
        this.f47804e = whVar;
    }

    public final ie a() {
        return this.f47800a;
    }

    public final wh b() {
        return this.f47804e;
    }

    public final Boolean c() {
        return this.f47802c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (hf.o.a(this.f47800a, w3Var.f47800a) && hf.o.a(null, null) && hf.o.a(this.f47802c, w3Var.f47802c) && hf.o.a(null, null) && hf.o.a(this.f47804e, w3Var.f47804e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47800a, null, this.f47802c, null, this.f47804e);
    }
}
