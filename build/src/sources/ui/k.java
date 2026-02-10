package ui;

import android.content.Context;
import android.text.TextUtils;
import com.google.android.gms.common.util.m;
import hf.o;
import hf.q;
import hf.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final String f50767a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50768b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50769c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50770d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50771e;

    /* renamed from: f  reason: collision with root package name */
    private final String f50772f;

    /* renamed from: g  reason: collision with root package name */
    private final String f50773g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f50768b = str;
        this.f50767a = str2;
        this.f50769c = str3;
        this.f50770d = str4;
        this.f50771e = str5;
        this.f50772f = str6;
        this.f50773g = str7;
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
        return this.f50767a;
    }

    public String c() {
        return this.f50768b;
    }

    public String d() {
        return this.f50771e;
    }

    public String e() {
        return this.f50773g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f50768b, kVar.f50768b) || !o.a(this.f50767a, kVar.f50767a) || !o.a(this.f50769c, kVar.f50769c) || !o.a(this.f50770d, kVar.f50770d) || !o.a(this.f50771e, kVar.f50771e) || !o.a(this.f50772f, kVar.f50772f) || !o.a(this.f50773g, kVar.f50773g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f50768b, this.f50767a, this.f50769c, this.f50770d, this.f50771e, this.f50772f, this.f50773g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f50768b).a("apiKey", this.f50767a).a("databaseUrl", this.f50769c).a("gcmSenderId", this.f50771e).a("storageBucket", this.f50772f).a("projectId", this.f50773g).toString();
    }
}
