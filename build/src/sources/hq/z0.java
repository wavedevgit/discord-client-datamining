package hq;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f28148a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f28149b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f28150c;

    public z0(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f28148a = hVar;
        this.f28149b = hVar2;
        this.f28150c = hVar3;
    }

    public static z0 a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new z0(hVar, hVar2, hVar3);
    }

    public static y0 c(jq.b bVar, un.a aVar, ActivityResultLauncher activityResultLauncher, String str, String str2, String str3, String str4) {
        return new y0(bVar, aVar, activityResultLauncher, str, str2, str3, str4);
    }

    public y0 b(String str, String str2, String str3, String str4) {
        return c((jq.b) this.f28148a.get(), (un.a) this.f28149b.get(), (ActivityResultLauncher) this.f28150c.get(), str, str2, str3, str4);
    }
}
