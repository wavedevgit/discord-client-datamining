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
    private final String f48959a;

    /* renamed from: b  reason: collision with root package name */
    private final String f48960b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48961c;

    /* renamed from: d  reason: collision with root package name */
    private final String f48962d;

    /* renamed from: e  reason: collision with root package name */
    private final String f48963e;

    /* renamed from: f  reason: collision with root package name */
    private final String f48964f;

    /* renamed from: g  reason: collision with root package name */
    private final String f48965g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f48960b = str;
        this.f48959a = str2;
        this.f48961c = str3;
        this.f48962d = str4;
        this.f48963e = str5;
        this.f48964f = str6;
        this.f48965g = str7;
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
        return this.f48959a;
    }

    public String c() {
        return this.f48960b;
    }

    public String d() {
        return this.f48963e;
    }

    public String e() {
        return this.f48965g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f48960b, kVar.f48960b) || !o.a(this.f48959a, kVar.f48959a) || !o.a(this.f48961c, kVar.f48961c) || !o.a(this.f48962d, kVar.f48962d) || !o.a(this.f48963e, kVar.f48963e) || !o.a(this.f48964f, kVar.f48964f) || !o.a(this.f48965g, kVar.f48965g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f48960b, this.f48959a, this.f48961c, this.f48962d, this.f48963e, this.f48964f, this.f48965g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f48960b).a("apiKey", this.f48959a).a("databaseUrl", this.f48961c).a("gcmSenderId", this.f48963e).a("storageBucket", this.f48964f).a("projectId", this.f48965g).toString();
    }
}
