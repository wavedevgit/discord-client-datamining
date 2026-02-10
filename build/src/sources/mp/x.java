package mp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final u f36591a;

    public x(u uVar) {
        this.f36591a = uVar;
    }

    public static x a(u uVar) {
        return new x(uVar);
    }

    public static ActivityResultLauncher c(u uVar) {
        return (ActivityResultLauncher) lr.g.d(uVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f36591a);
    }
}
