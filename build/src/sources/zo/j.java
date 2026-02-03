package zo;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f55956a;

    public j(g gVar) {
        this.f55956a = gVar;
    }

    public static j a(g gVar) {
        return new j(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) uq.g.d(gVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f55956a);
    }
}
