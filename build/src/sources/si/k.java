package si;

import android.content.Context;
import android.text.TextUtils;
import com.google.android.gms.common.util.m;
import hf.o;
import hf.q;
import hf.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final String f49832a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49833b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49834c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49835d;

    /* renamed from: e  reason: collision with root package name */
    private final String f49836e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49837f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49838g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f49833b = str;
        this.f49832a = str2;
        this.f49834c = str3;
        this.f49835d = str4;
        this.f49836e = str5;
        this.f49837f = str6;
        this.f49838g = str7;
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
        return this.f49832a;
    }

    public String c() {
        return this.f49833b;
    }

    public String d() {
        return this.f49836e;
    }

    public String e() {
        return this.f49838g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f49833b, kVar.f49833b) || !o.a(this.f49832a, kVar.f49832a) || !o.a(this.f49834c, kVar.f49834c) || !o.a(this.f49835d, kVar.f49835d) || !o.a(this.f49836e, kVar.f49836e) || !o.a(this.f49837f, kVar.f49837f) || !o.a(this.f49838g, kVar.f49838g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f49833b, this.f49832a, this.f49834c, this.f49835d, this.f49836e, this.f49837f, this.f49838g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f49833b).a("apiKey", this.f49832a).a("databaseUrl", this.f49834c).a("gcmSenderId", this.f49836e).a("storageBucket", this.f49837f).a("projectId", this.f49838g).toString();
    }
}
