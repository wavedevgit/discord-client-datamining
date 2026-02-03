package cp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f19740a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f19741b;

    public n(wq.h hVar, wq.h hVar2) {
        this.f19740a = hVar;
        this.f19741b = hVar2;
    }

    public static n a(wq.h hVar, wq.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f19740a.get(), (Context) this.f19741b.get());
    }
}
