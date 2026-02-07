package pq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f45170a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f45171b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f45172c;

    public a5(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f45170a = hVar;
        this.f45171b = hVar2;
        this.f45172c = hVar3;
    }

    public static a5 a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, rq.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f45170a.get(), (rq.b) this.f45171b.get(), (com.squareup.moshi.w) this.f45172c.get(), str, str2, str3, str4, map);
    }
}
