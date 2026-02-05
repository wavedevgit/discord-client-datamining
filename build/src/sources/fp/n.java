package fp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f23351a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f23352b;

    public n(zq.h hVar, zq.h hVar2) {
        this.f23351a = hVar;
        this.f23352b = hVar2;
    }

    public static n a(zq.h hVar, zq.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f23351a.get(), (Context) this.f23352b.get());
    }
}
