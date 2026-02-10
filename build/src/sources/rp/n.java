package rp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f47670a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f47671b;

    public n(lr.h hVar, lr.h hVar2) {
        this.f47670a = hVar;
        this.f47671b = hVar2;
    }

    public static n a(lr.h hVar, lr.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f47670a.get(), (Context) this.f47671b.get());
    }
}
