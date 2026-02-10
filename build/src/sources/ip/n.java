package ip;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f29564a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f29565b;

    public n(cr.h hVar, cr.h hVar2) {
        this.f29564a = hVar;
        this.f29565b = hVar2;
    }

    public static n a(cr.h hVar, cr.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f29564a.get(), (Context) this.f29565b.get());
    }
}
