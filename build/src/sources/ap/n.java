package ap;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f5944a;

    public n(g gVar) {
        this.f5944a = gVar;
    }

    public static n a(g gVar) {
        return new n(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) zq.g.d(gVar.c());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f5944a);
    }
}
