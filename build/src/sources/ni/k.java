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
    private final String f41958a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41959b;

    /* renamed from: c  reason: collision with root package name */
    private final String f41960c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41961d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41962e;

    /* renamed from: f  reason: collision with root package name */
    private final String f41963f;

    /* renamed from: g  reason: collision with root package name */
    private final String f41964g;

    private k(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        q.o(!m.a(str), "ApplicationId must be set.");
        this.f41959b = str;
        this.f41958a = str2;
        this.f41960c = str3;
        this.f41961d = str4;
        this.f41962e = str5;
        this.f41963f = str6;
        this.f41964g = str7;
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
        return this.f41958a;
    }

    public String c() {
        return this.f41959b;
    }

    public String d() {
        return this.f41962e;
    }

    public String e() {
        return this.f41964g;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (!o.a(this.f41959b, kVar.f41959b) || !o.a(this.f41958a, kVar.f41958a) || !o.a(this.f41960c, kVar.f41960c) || !o.a(this.f41961d, kVar.f41961d) || !o.a(this.f41962e, kVar.f41962e) || !o.a(this.f41963f, kVar.f41963f) || !o.a(this.f41964g, kVar.f41964g)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return o.b(this.f41959b, this.f41958a, this.f41960c, this.f41961d, this.f41962e, this.f41963f, this.f41964g);
    }

    public String toString() {
        return o.c(this).a("applicationId", this.f41959b).a("apiKey", this.f41958a).a("databaseUrl", this.f41960c).a("gcmSenderId", this.f41962e).a("storageBucket", this.f41963f).a("projectId", this.f41964g).toString();
    }
}
