package cp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f19995a;

    public n(g gVar) {
        this.f19995a = gVar;
    }

    public static n a(g gVar) {
        return new n(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) br.g.d(gVar.c());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f19995a);
    }
}
