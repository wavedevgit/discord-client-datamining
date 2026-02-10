package gf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f24319a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.d f24320b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ g0(b bVar, com.google.android.gms.common.d dVar, f0 f0Var) {
        this.f24319a = bVar;
        this.f24320b = dVar;
    }

    public final boolean equals(Object obj) {
        if (obj != null && (obj instanceof g0)) {
            g0 g0Var = (g0) obj;
            if (hf.o.a(this.f24319a, g0Var.f24319a) && hf.o.a(this.f24320b, g0Var.f24320b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f24319a, this.f24320b);
    }

    public final String toString() {
        return hf.o.c(this).a("key", this.f24319a).a("feature", this.f24320b).toString();
    }
}
