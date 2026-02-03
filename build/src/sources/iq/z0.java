package iq;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f31127a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f31128b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f31129c;

    public z0(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f31127a = hVar;
        this.f31128b = hVar2;
        this.f31129c = hVar3;
    }

    public static z0 a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new z0(hVar, hVar2, hVar3);
    }

    public static y0 c(kq.b bVar, vn.a aVar, ActivityResultLauncher activityResultLauncher, String str, String str2, String str3, String str4) {
        return new y0(bVar, aVar, activityResultLauncher, str, str2, str3, str4);
    }

    public y0 b(String str, String str2, String str3, String str4) {
        return c((kq.b) this.f31127a.get(), (vn.a) this.f31128b.get(), (ActivityResultLauncher) this.f31129c.get(), str, str2, str3, str4);
    }
}
