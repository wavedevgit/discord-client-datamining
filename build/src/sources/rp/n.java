package rp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f48239a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f48240b;

    public n(lr.h hVar, lr.h hVar2) {
        this.f48239a = hVar;
        this.f48240b = hVar2;
    }

    public static n a(lr.h hVar, lr.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f48239a.get(), (Context) this.f48240b.get());
    }
}
