package ff;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f25105a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.d f25106b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ g0(b bVar, com.google.android.gms.common.d dVar, f0 f0Var) {
        this.f25105a = bVar;
        this.f25106b = dVar;
    }

    public final boolean equals(Object obj) {
        if (obj != null && (obj instanceof g0)) {
            g0 g0Var = (g0) obj;
            if (gf.o.a(this.f25105a, g0Var.f25105a) && gf.o.a(this.f25106b, g0Var.f25106b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f25105a, this.f25106b);
    }

    public final String toString() {
        return gf.o.c(this).a("key", this.f25105a).a("feature", this.f25106b).toString();
    }
}
