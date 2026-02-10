package qq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f46684a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f46685b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f46686c;

    public a5(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f46684a = hVar;
        this.f46685b = hVar2;
        this.f46686c = hVar3;
    }

    public static a5 a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, sq.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f46684a.get(), (sq.b) this.f46685b.get(), (com.squareup.moshi.w) this.f46686c.get(), str, str2, str3, str4, map);
    }
}
