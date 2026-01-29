package zo;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f55989a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f55990b;

    public n(tq.h hVar, tq.h hVar2) {
        this.f55989a = hVar;
        this.f55990b = hVar2;
    }

    public static n a(tq.h hVar, tq.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f55989a.get(), (Context) this.f55990b.get());
    }
}
