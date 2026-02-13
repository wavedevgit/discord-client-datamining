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
    private final String f51336a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51337b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51338c;

    /* renamed from: d  reason: collision with root package name */
    private final String f51339d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51340e;

    /* renamed from: f  reason: collision with root package name */
    private final String f51341f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51342g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f51337b = str;
        this.f51336a = str2;
        this.f51338c = str3;
        this.f51339d = str4;
        this.f51340e = str5;
        this.f51341f = str6;
        this.f51342g = str7;
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
        return this.f51336a;
    }

    public String c() {
        return this.f51337b;
    }

    public String d() {
        return this.f51340e;
    }

    public String e() {
        return this.f51342g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f51337b, kVar.f51337b) || !o.a(this.f51336a, kVar.f51336a) || !o.a(this.f51338c, kVar.f51338c) || !o.a(this.f51339d, kVar.f51339d) || !o.a(this.f51340e, kVar.f51340e) || !o.a(this.f51341f, kVar.f51341f) || !o.a(this.f51342g, kVar.f51342g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f51337b, this.f51336a, this.f51338c, this.f51339d, this.f51340e, this.f51341f, this.f51342g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f51337b).a("apiKey", this.f51336a).a("databaseUrl", this.f51338c).a("gcmSenderId", this.f51340e).a("storageBucket", this.f51341f).a("projectId", this.f51342g).toString();
    }
}
