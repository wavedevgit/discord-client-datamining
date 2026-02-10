package mp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f36579a;

    public l(g gVar) {
        this.f36579a = gVar;
    }

    public static l a(g gVar) {
        return new l(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) lr.g.d(gVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f36579a);
    }
}
