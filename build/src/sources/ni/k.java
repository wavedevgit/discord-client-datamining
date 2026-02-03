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
    private final String f41837a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41838b;

    /* renamed from: c  reason: collision with root package name */
    private final String f41839c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41840d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41841e;

    /* renamed from: f  reason: collision with root package name */
    private final String f41842f;

    /* renamed from: g  reason: collision with root package name */
    private final String f41843g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f41838b = str;
        this.f41837a = str2;
        this.f41839c = str3;
        this.f41840d = str4;
        this.f41841e = str5;
        this.f41842f = str6;
        this.f41843g = str7;
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
        return this.f41837a;
    }

    public String c() {
        return this.f41838b;
    }

    public String d() {
        return this.f41841e;
    }

    public String e() {
        return this.f41843g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f41838b, kVar.f41838b) || !o.a(this.f41837a, kVar.f41837a) || !o.a(this.f41839c, kVar.f41839c) || !o.a(this.f41840d, kVar.f41840d) || !o.a(this.f41841e, kVar.f41841e) || !o.a(this.f41842f, kVar.f41842f) || !o.a(this.f41843g, kVar.f41843g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f41838b, this.f41837a, this.f41839c, this.f41840d, this.f41841e, this.f41842f, this.f41843g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f41838b).a("apiKey", this.f41837a).a("databaseUrl", this.f41839c).a("gcmSenderId", this.f41841e).a("storageBucket", this.f41842f).a("projectId", this.f41843g).toString();
    }
}
