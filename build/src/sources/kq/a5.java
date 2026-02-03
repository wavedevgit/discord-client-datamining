package kq;

import androidx.activity.result.ActivityResultLauncher;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a5 {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f35629a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f35630b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f35631c;

    public a5(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f35629a = hVar;
        this.f35630b = hVar2;
        this.f35631c = hVar3;
    }

    public static a5 a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new a5(hVar, hVar2, hVar3);
    }

    public static z4 c(ActivityResultLauncher activityResultLauncher, mq.b bVar, com.squareup.moshi.w wVar, String str, String str2, String str3, String str4, Map map) {
        return new z4(activityResultLauncher, bVar, wVar, str, str2, str3, str4, map);
    }

    public z4 b(String str, String str2, String str3, String str4, Map map) {
        return c((ActivityResultLauncher) this.f35629a.get(), (mq.b) this.f35630b.get(), (com.squareup.moshi.w) this.f35631c.get(), str, str2, str3, str4, map);
    }
}
