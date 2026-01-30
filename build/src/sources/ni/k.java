package ni;

import android.content.Context;
import android.text.TextUtils;
import com.google.android.gms.common.util.m;
import gf.o;
import gf.q;
import gf.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final String f41974a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41975b;

    /* renamed from: c  reason: collision with root package name */
    private final String f41976c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41977d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41978e;

    /* renamed from: f  reason: collision with root package name */
    private final String f41979f;

    /* renamed from: g  reason: collision with root package name */
    private final String f41980g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f41975b = str;
        this.f41974a = str2;
        this.f41976c = str3;
        this.f41977d = str4;
        this.f41978e = str5;
        this.f41979f = str6;
        this.f41980g = str7;
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
        return this.f41974a;
    }

    public String c() {
        return this.f41975b;
    }

    public String d() {
        return this.f41978e;
    }

    public String e() {
        return this.f41980g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f41975b, kVar.f41975b) || !o.a(this.f41974a, kVar.f41974a) || !o.a(this.f41976c, kVar.f41976c) || !o.a(this.f41977d, kVar.f41977d) || !o.a(this.f41978e, kVar.f41978e) || !o.a(this.f41979f, kVar.f41979f) || !o.a(this.f41980g, kVar.f41980g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f41975b, this.f41974a, this.f41976c, this.f41977d, this.f41978e, this.f41979f, this.f41980g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f41975b).a("apiKey", this.f41974a).a("databaseUrl", this.f41976c).a("gcmSenderId", this.f41978e).a("storageBucket", this.f41979f).a("projectId", this.f41980g).toString();
    }
}
