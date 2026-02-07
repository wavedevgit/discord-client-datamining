package pq;

import androidx.activity.result.ActivityResultLauncher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f45666a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f45667b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f45668c;

    public z0(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f45666a = hVar;
        this.f45667b = hVar2;
        this.f45668c = hVar3;
    }

    public static z0 a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new z0(hVar, hVar2, hVar3);
    }

    public static y0 c(rq.b bVar, co.a aVar, ActivityResultLauncher activityResultLauncher, String str, String str2, String str3, String str4) {
        return new y0(bVar, aVar, activityResultLauncher, str, str2, str3, str4);
    }

    public y0 b(String str, String str2, String str3, String str4) {
        return c((rq.b) this.f45666a.get(), (co.a) this.f45667b.get(), (ActivityResultLauncher) this.f45668c.get(), str, str2, str3, str4);
    }
}
