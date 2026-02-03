package ap;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f5967a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f5968b;

    public n(uq.h hVar, uq.h hVar2) {
        this.f5967a = hVar;
        this.f5968b = hVar2;
    }

    public static n a(uq.h hVar, uq.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f5967a.get(), (Context) this.f5968b.get());
    }
}
