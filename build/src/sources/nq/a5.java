package nq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f41434a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f41435b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f41436c;

    public a5(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f41434a = hVar;
        this.f41435b = hVar2;
        this.f41436c = hVar3;
    }

    public static a5 a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, pq.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f41434a.get(), (pq.b) this.f41435b.get(), (com.squareup.moshi.w) this.f41436c.get(), str, str2, str3, str4, map);
    }
}
