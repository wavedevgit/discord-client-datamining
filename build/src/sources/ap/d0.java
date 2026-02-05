package ap;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final a0 f5928a;

    public d0(a0 a0Var) {
        this.f5928a = a0Var;
    }

    public static d0 a(a0 a0Var) {
        return new d0(a0Var);
    }

    public static ActivityResultLauncher c(a0 a0Var) {
        return (ActivityResultLauncher) zq.g.d(a0Var.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f5928a);
    }
}
