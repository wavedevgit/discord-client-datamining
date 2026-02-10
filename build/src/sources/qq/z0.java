package qq;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f47180a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f47181b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f47182c;

    public z0(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f47180a = hVar;
        this.f47181b = hVar2;
        this.f47182c = hVar3;
    }

    public static z0 a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new z0(hVar, hVar2, hVar3);
    }

    public static y0 c(sq.b bVar, eo.a aVar, ActivityResultLauncher activityResultLauncher, String str, String str2, String str3, String str4) {
        return new y0(bVar, aVar, activityResultLauncher, str, str2, str3, str4);
    }

    public y0 b(String str, String str2, String str3, String str4) {
        return c((sq.b) this.f47180a.get(), (eo.a) this.f47181b.get(), (ActivityResultLauncher) this.f47182c.get(), str, str2, str3, str4);
    }
}
