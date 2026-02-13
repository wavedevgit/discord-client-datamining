package mp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f37149a;

    public m(g gVar) {
        this.f37149a = gVar;
    }

    public static m a(g gVar) {
        return new m(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) lr.g.d(gVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f37149a);
    }
}
