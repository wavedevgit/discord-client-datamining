package cp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final o f19997a;

    public r(o oVar) {
        this.f19997a = oVar;
    }

    public static r a(o oVar) {
        return new r(oVar);
    }

    public static ActivityResultLauncher c(o oVar) {
        return (ActivityResultLauncher) br.g.d(oVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f19997a);
    }
}
