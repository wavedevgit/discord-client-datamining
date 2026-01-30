package uo;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final u f50542a;

    public x(u uVar) {
        this.f50542a = uVar;
    }

    public static x a(u uVar) {
        return new x(uVar);
    }

    public static ActivityResultLauncher c(u uVar) {
        return (ActivityResultLauncher) tq.g.d(uVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f50542a);
    }
}
