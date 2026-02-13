package mp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final o f37152a;

    public r(o oVar) {
        this.f37152a = oVar;
    }

    public static r a(o oVar) {
        return new r(oVar);
    }

    public static ActivityResultLauncher c(o oVar) {
        return (ActivityResultLauncher) lr.g.d(oVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f37152a);
    }
}
