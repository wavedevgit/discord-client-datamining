package zq;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f57652a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f57653b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f57654c;

    public z0(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f57652a = hVar;
        this.f57653b = hVar2;
        this.f57654c = hVar3;
    }

    public static z0 a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new z0(hVar, hVar2, hVar3);
    }

    public static y0 c(br.b bVar, no.a aVar, ActivityResultLauncher activityResultLauncher, String str, String str2, String str3, String str4) {
        return new y0(bVar, aVar, activityResultLauncher, str, str2, str3, str4);
    }

    public y0 b(String str, String str2, String str3, String str4) {
        return c((br.b) this.f57652a.get(), (no.a) this.f57653b.get(), (ActivityResultLauncher) this.f57654c.get(), str, str2, str3, str4);
    }
}
