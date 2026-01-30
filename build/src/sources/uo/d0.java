package uo;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final a0 f50516a;

    public d0(a0 a0Var) {
        this.f50516a = a0Var;
    }

    public static d0 a(a0 a0Var) {
        return new d0(a0Var);
    }

    public static ActivityResultLauncher c(a0 a0Var) {
        return (ActivityResultLauncher) tq.g.d(a0Var.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f50516a);
    }
}
