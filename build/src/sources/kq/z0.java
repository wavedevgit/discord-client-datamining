package kq;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f36125a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f36126b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f36127c;

    public z0(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f36125a = hVar;
        this.f36126b = hVar2;
        this.f36127c = hVar3;
    }

    public static z0 a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new z0(hVar, hVar2, hVar3);
    }

    public static y0 c(mq.b bVar, xn.a aVar, ActivityResultLauncher activityResultLauncher, String str, String str2, String str3, String str4) {
        return new y0(bVar, aVar, activityResultLauncher, str, str2, str3, str4);
    }

    public y0 b(String str, String str2, String str3, String str4) {
        return c((mq.b) this.f36125a.get(), (xn.a) this.f36126b.get(), (ActivityResultLauncher) this.f36127c.get(), str, str2, str3, str4);
    }
}
