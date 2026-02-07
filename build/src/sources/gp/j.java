package gp;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final g f25499a;

    public j(g gVar) {
        this.f25499a = gVar;
    }

    public static j a(g gVar) {
        return new j(gVar);
    }

    public static ActivityResultLauncher c(g gVar) {
        return (ActivityResultLauncher) br.g.d(gVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public ActivityResultLauncher get() {
        return c(this.f25499a);
    }
}
