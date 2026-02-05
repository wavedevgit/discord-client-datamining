package ff;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f22933a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.d f22934b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ g0(b bVar, com.google.android.gms.common.d dVar, f0 f0Var) {
        this.f22933a = bVar;
        this.f22934b = dVar;
    }

    public final boolean equals(Object obj) {
        if (obj != null && (obj instanceof g0)) {
            g0 g0Var = (g0) obj;
            if (gf.o.a(this.f22933a, g0Var.f22933a) && gf.o.a(this.f22934b, g0Var.f22934b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f22933a, this.f22934b);
    }

    public final String toString() {
        return gf.o.c(this).a("key", this.f22933a).a("feature", this.f22934b).toString();
    }
}
