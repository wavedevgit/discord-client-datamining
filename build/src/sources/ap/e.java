package ap;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final b f5929a;

    public e(b bVar) {
        this.f5929a = bVar;
    }

    public static e a(b bVar) {
        return new e(bVar);
    }

    public static ActivityResultLauncher b(b bVar) {
        return (ActivityResultLauncher) zq.g.d(bVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ActivityResultLauncher get() {
        return b(this.f5929a);
    }
}
