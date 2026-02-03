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
    private final String f41876a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41877b;

    /* renamed from: c  reason: collision with root package name */
    private final String f41878c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41879d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41880e;

    /* renamed from: f  reason: collision with root package name */
    private final String f41881f;

    /* renamed from: g  reason: collision with root package name */
    private final String f41882g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f41877b = str;
        this.f41876a = str2;
        this.f41878c = str3;
        this.f41879d = str4;
        this.f41880e = str5;
        this.f41881f = str6;
        this.f41882g = str7;
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
        return this.f41876a;
    }

    public String c() {
        return this.f41877b;
    }

    public String d() {
        return this.f41880e;
    }

    public String e() {
        return this.f41882g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f41877b, kVar.f41877b) || !o.a(this.f41876a, kVar.f41876a) || !o.a(this.f41878c, kVar.f41878c) || !o.a(this.f41879d, kVar.f41879d) || !o.a(this.f41880e, kVar.f41880e) || !o.a(this.f41881f, kVar.f41881f) || !o.a(this.f41882g, kVar.f41882g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f41877b, this.f41876a, this.f41878c, this.f41879d, this.f41880e, this.f41881f, this.f41882g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f41877b).a("apiKey", this.f41876a).a("databaseUrl", this.f41878c).a("gcmSenderId", this.f41880e).a("storageBucket", this.f41881f).a("projectId", this.f41882g).toString();
    }
}
