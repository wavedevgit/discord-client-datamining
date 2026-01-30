package hq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f27668a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f27669b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f27670c;

    public a5(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f27668a = hVar;
        this.f27669b = hVar2;
        this.f27670c = hVar3;
    }

    public static a5 a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, jq.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f27668a.get(), (jq.b) this.f27669b.get(), (com.squareup.moshi.w) this.f27670c.get(), str, str2, str3, str4, map);
    }
}
