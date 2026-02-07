package hp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f26424a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f26425b;

    public n(br.h hVar, br.h hVar2) {
        this.f26424a = hVar;
        this.f26425b = hVar2;
    }

    public static n a(br.h hVar, br.h hVar2) {
        return new n(hVar, hVar2);
    }

    public static m c(ActivityResultLauncher activityResultLauncher, Context context) {
        return new m(activityResultLauncher, context);
    }

    public m b() {
        return c((ActivityResultLauncher) this.f26424a.get(), (Context) this.f26425b.get());
    }
}
