package iq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f30631a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f30632b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f30633c;

    public a5(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f30631a = hVar;
        this.f30632b = hVar2;
        this.f30633c = hVar3;
    }

    public static a5 a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, kq.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f30631a.get(), (kq.b) this.f30632b.get(), (com.squareup.moshi.w) this.f30633c.get(), str, str2, str3, str4, map);
    }
}
