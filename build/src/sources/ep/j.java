package ep;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f21696a;

    public j(g gVar) {
        this.f21696a = gVar;
    }

    public static j a(g gVar) {
        return new j(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) zq.g.d(gVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f21696a);
    }
}
