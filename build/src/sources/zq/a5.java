package zq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f57156a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f57157b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f57158c;

    public a5(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f57156a = hVar;
        this.f57157b = hVar2;
        this.f57158c = hVar3;
    }

    public static a5 a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, br.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f57156a.get(), (br.b) this.f57157b.get(), (com.squareup.moshi.w) this.f57158c.get(), str, str2, str3, str4, map);
    }
}
