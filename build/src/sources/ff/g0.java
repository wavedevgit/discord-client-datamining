package ff;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f24316a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.d f24317b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ g0(b bVar, com.google.android.gms.common.d dVar, f0 f0Var) {
        this.f24316a = bVar;
        this.f24317b = dVar;
    }

    public final boolean equals(Object obj) {
        if (obj != null && (obj instanceof g0)) {
            g0 g0Var = (g0) obj;
            if (gf.o.a(this.f24316a, g0Var.f24316a) && gf.o.a(this.f24317b, g0Var.f24317b)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f24316a, this.f24317b);
    }

    public final String toString() {
        return gf.o.c(this).a("key", this.f24316a).a("feature", this.f24317b).toString();
    }
}
