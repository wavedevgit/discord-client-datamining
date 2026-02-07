package ri;

import android.content.Context;
import android.text.TextUtils;
import com.google.android.gms.common.util.m;
import gf.o;
import gf.q;
import gf.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final String f49007a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49008b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49009c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49010d;

    /* renamed from: e  reason: collision with root package name */
    private final String f49011e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49012f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49013g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f49008b = str;
        this.f49007a = str2;
        this.f49009c = str3;
        this.f49010d = str4;
        this.f49011e = str5;
        this.f49012f = str6;
        this.f49013g = str7;
    }

    public static k a(Context context) {
        t tVar = new t(context);
        String a10 = tVar.a("google_app_id");
        if (TextUtils.isEmpty(a10)) {
            return null;
        }
        return new k(a10, tVar.a("google_api_key"), tVar.a("firebase_database_url"), tVar.a("ga_trackingId"), tVar.a("gcm_defaultSenderId"), tVar.a("google_storage_bucket"), tVar.a("project_id"));
    }

    public String b() {
        return this.f49007a;
    }

    public String c() {
        return this.f49008b;
    }

    public String d() {
        return this.f49011e;
    }

    public String e() {
        return this.f49013g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f49008b, kVar.f49008b) || !o.a(this.f49007a, kVar.f49007a) || !o.a(this.f49009c, kVar.f49009c) || !o.a(this.f49010d, kVar.f49010d) || !o.a(this.f49011e, kVar.f49011e) || !o.a(this.f49012f, kVar.f49012f) || !o.a(this.f49013g, kVar.f49013g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f49008b, this.f49007a, this.f49009c, this.f49010d, this.f49011e, this.f49012f, this.f49013g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f49008b).a("apiKey", this.f49007a).a("databaseUrl", this.f49009c).a("gcmSenderId", this.f49011e).a("storageBucket", this.f49012f).a("projectId", this.f49013g).toString();
    }
}
