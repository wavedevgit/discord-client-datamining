package xo;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f53525a;

    public l(g gVar) {
        this.f53525a = gVar;
    }

    public static l a(g gVar) {
        return new l(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) wq.g.d(gVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f53525a);
    }
}
