package pq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f45122a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f45123b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f45124c;

    public a5(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f45122a = hVar;
        this.f45123b = hVar2;
        this.f45124c = hVar3;
    }

    public static a5 a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, rq.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f45122a.get(), (rq.b) this.f45123b.get(), (com.squareup.moshi.w) this.f45124c.get(), str, str2, str3, str4, map);
    }
}
