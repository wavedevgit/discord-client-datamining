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
    private final String f50768a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50769b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50770c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50771d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50772e;

    /* renamed from: f  reason: collision with root package name */
    private final String f50773f;

    /* renamed from: g  reason: collision with root package name */
    private final String f50774g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f50769b = str;
        this.f50768a = str2;
        this.f50770c = str3;
        this.f50771d = str4;
        this.f50772e = str5;
        this.f50773f = str6;
        this.f50774g = str7;
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
        return this.f50768a;
    }

    public String c() {
        return this.f50769b;
    }

    public String d() {
        return this.f50772e;
    }

    public String e() {
        return this.f50774g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f50769b, kVar.f50769b) || !o.a(this.f50768a, kVar.f50768a) || !o.a(this.f50770c, kVar.f50770c) || !o.a(this.f50771d, kVar.f50771d) || !o.a(this.f50772e, kVar.f50772e) || !o.a(this.f50773f, kVar.f50773f) || !o.a(this.f50774g, kVar.f50774g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f50769b, this.f50768a, this.f50770c, this.f50771d, this.f50772e, this.f50773f, this.f50774g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f50769b).a("apiKey", this.f50768a).a("databaseUrl", this.f50770c).a("gcmSenderId", this.f50772e).a("storageBucket", this.f50773f).a("projectId", this.f50774g).toString();
    }
}
