package vo;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final b f51473a;

    public e(b bVar) {
        this.f51473a = bVar;
    }

    public static e a(b bVar) {
        return new e(bVar);
    }

    public static ActivityResultLauncher b(b bVar) {
        return (ActivityResultLauncher) uq.g.d(bVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ActivityResultLauncher get() {
        return b(this.f51473a);
    }
}
