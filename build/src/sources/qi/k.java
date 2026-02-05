package qi;

import android.content.Context;
import android.text.TextUtils;
import com.google.android.gms.common.util.m;
import gf.o;
import gf.q;
import gf.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final String f47936a;

    /* renamed from: b  reason: collision with root package name */
    private final String f47937b;

    /* renamed from: c  reason: collision with root package name */
    private final String f47938c;

    /* renamed from: d  reason: collision with root package name */
    private final String f47939d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47940e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47941f;

    /* renamed from: g  reason: collision with root package name */
    private final String f47942g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f47937b = str;
        this.f47936a = str2;
        this.f47938c = str3;
        this.f47939d = str4;
        this.f47940e = str5;
        this.f47941f = str6;
        this.f47942g = str7;
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
        return this.f47936a;
    }

    public String c() {
        return this.f47937b;
    }

    public String d() {
        return this.f47940e;
    }

    public String e() {
        return this.f47942g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f47937b, kVar.f47937b) || !o.a(this.f47936a, kVar.f47936a) || !o.a(this.f47938c, kVar.f47938c) || !o.a(this.f47939d, kVar.f47939d) || !o.a(this.f47940e, kVar.f47940e) || !o.a(this.f47941f, kVar.f47941f) || !o.a(this.f47942g, kVar.f47942g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f47937b, this.f47936a, this.f47938c, this.f47939d, this.f47940e, this.f47941f, this.f47942g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f47937b).a("apiKey", this.f47936a).a("databaseUrl", this.f47938c).a("gcmSenderId", this.f47940e).a("storageBucket", this.f47941f).a("projectId", this.f47942g).toString();
    }
}
