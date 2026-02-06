package cp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final u f20005a;

    public x(u uVar) {
        this.f20005a = uVar;
    }

    public static x a(u uVar) {
        return new x(uVar);
    }

    public static ActivityResultLauncher c(u uVar) {
        return (ActivityResultLauncher) br.g.d(uVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f20005a);
    }
}
