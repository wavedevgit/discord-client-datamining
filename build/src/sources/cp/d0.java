package cp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final a0 f19979a;

    public d0(a0 a0Var) {
        this.f19979a = a0Var;
    }

    public static d0 a(a0 a0Var) {
        return new d0(a0Var);
    }

    public static ActivityResultLauncher c(a0 a0Var) {
        return (ActivityResultLauncher) br.g.d(a0Var.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f19979a);
    }
}
