package nq;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f41930a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f41931b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f41932c;

    public z0(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f41930a = hVar;
        this.f41931b = hVar2;
        this.f41932c = hVar3;
    }

    public static z0 a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new z0(hVar, hVar2, hVar3);
    }

    public static y0 c(pq.b bVar, ao.a aVar, ActivityResultLauncher activityResultLauncher, String str, String str2, String str3, String str4) {
        return new y0(bVar, aVar, activityResultLauncher, str, str2, str3, str4);
    }

    public y0 b(String str, String str2, String str3, String str4) {
        return c((pq.b) this.f41930a.get(), (ao.a) this.f41931b.get(), (ActivityResultLauncher) this.f41932c.get(), str, str2, str3, str4);
    }
}
