package vo;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f51487a;

    public m(g gVar) {
        this.f51487a = gVar;
    }

    public static m a(g gVar) {
        return new m(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) uq.g.d(gVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f51487a);
    }
}
