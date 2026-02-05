package ap;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final u f5954a;

    public x(u uVar) {
        this.f5954a = uVar;
    }

    public static x a(u uVar) {
        return new x(uVar);
    }

    public static ActivityResultLauncher c(u uVar) {
        return (ActivityResultLauncher) zq.g.d(uVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f5954a);
    }
}
