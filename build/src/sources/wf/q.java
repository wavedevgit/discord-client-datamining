package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.internal.fido.q5;
import com.google.android.gms.internal.fido.v4;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q extends hf.a {
    @NonNull
    public static final Parcelable.Creator<q> CREATOR = new t0();

    /* renamed from: d  reason: collision with root package name */
    private final String f52971d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52972e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f52973i;

    /* renamed from: o  reason: collision with root package name */
    private final g f52974o;

    /* renamed from: p  reason: collision with root package name */
    private final f f52975p;

    /* renamed from: q  reason: collision with root package name */
    private final h f52976q;

    /* renamed from: r  reason: collision with root package name */
    private final d f52977r;

    /* renamed from: s  reason: collision with root package name */
    private final String f52978s;

    /* renamed from: t  reason: collision with root package name */
    private String f52979t;

    private q(String str, String str2, v4 v4Var, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        boolean z10 = false;
        gf.q.b((gVar != null && fVar == null && hVar == null) || (gVar == null && fVar != null && hVar == null) || (gVar == null && fVar == null && hVar != null), "Must provide a response object.");
        if (hVar != null || (str != null && v4Var != null)) {
            z10 = true;
        }
        gf.q.b(z10, "Must provide id and rawId if not an error response.");
        this.f52971d = str;
        this.f52972e = str2;
        this.f52973i = v4Var;
        this.f52974o = gVar;
        this.f52975p = fVar;
        this.f52976q = hVar;
        this.f52977r = dVar;
        this.f52978s = str3;
        this.f52979t = null;
    }

    public static q b(byte[] bArr) {
        return (q) hf.e.a(bArr, CREATOR);
    }

    public String c() {
        return this.f52978s;
    }

    public d d() {
        return this.f52977r;
    }

    public String e() {
        return this.f52971d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (!gf.o.a(this.f52971d, qVar.f52971d) || !gf.o.a(this.f52972e, qVar.f52972e) || !gf.o.a(this.f52973i, qVar.f52973i) || !gf.o.a(this.f52974o, qVar.f52974o) || !gf.o.a(this.f52975p, qVar.f52975p) || !gf.o.a(this.f52976q, qVar.f52976q) || !gf.o.a(this.f52977r, qVar.f52977r) || !gf.o.a(this.f52978s, qVar.f52978s)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f52973i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.o();
    }

    public i g() {
        g gVar = this.f52974o;
        if (gVar != null) {
            return gVar;
        }
        f fVar = this.f52975p;
        if (fVar != null) {
            return fVar;
        }
        h hVar = this.f52976q;
        if (hVar != null) {
            return hVar;
        }
        throw new IllegalStateException("No response set.");
    }

    public int hashCode() {
        return gf.o.b(this.f52971d, this.f52972e, this.f52973i, this.f52975p, this.f52974o, this.f52976q, this.f52977r, this.f52978s);
    }

    public String i() {
        return this.f52972e;
    }

    public String j() {
        return l().toString();
    }

    public final JSONObject l() {
        JSONObject jSONObject;
        try {
            JSONObject jSONObject2 = new JSONObject();
            v4 v4Var = this.f52973i;
            if (v4Var != null && v4Var.o().length > 0) {
                jSONObject2.put("rawId", com.google.android.gms.common.util.c.b(this.f52973i.o()));
            }
            String str = this.f52978s;
            if (str != null) {
                jSONObject2.put("authenticatorAttachment", str);
            }
            String str2 = this.f52972e;
            if (str2 != null && this.f52976q == null) {
                jSONObject2.put("type", str2);
            }
            String str3 = this.f52971d;
            if (str3 != null) {
                jSONObject2.put(StackTraceHelper.ID_KEY, str3);
            }
            String str4 = "response";
            f fVar = this.f52975p;
            boolean z10 = true;
            if (fVar != null) {
                jSONObject = fVar.g();
            } else {
                g gVar = this.f52974o;
                if (gVar != null) {
                    jSONObject = gVar.f();
                } else {
                    h hVar = this.f52976q;
                    z10 = false;
                    if (hVar != null) {
                        jSONObject = hVar.e();
                        str4 = "error";
                    } else {
                        jSONObject = null;
                    }
                }
            }
            if (jSONObject != null) {
                jSONObject2.put(str4, jSONObject);
            }
            d dVar = this.f52977r;
            if (dVar != null) {
                jSONObject2.put("clientExtensionResults", dVar.d());
                return jSONObject2;
            }
            if (z10) {
                jSONObject2.put("clientExtensionResults", new JSONObject());
            }
            return jSONObject2;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding PublicKeyCredential to JSON object", e10);
        }
    }

    public final String toString() {
        byte[] o10;
        v4 v4Var = this.f52973i;
        if (v4Var == null) {
            o10 = null;
        } else {
            o10 = v4Var.o();
        }
        String str = this.f52972e;
        String str2 = this.f52971d;
        g gVar = this.f52974o;
        f fVar = this.f52975p;
        h hVar = this.f52976q;
        d dVar = this.f52977r;
        String str3 = this.f52978s;
        String b10 = com.google.android.gms.common.util.c.b(o10);
        String valueOf = String.valueOf(gVar);
        String valueOf2 = String.valueOf(fVar);
        String valueOf3 = String.valueOf(hVar);
        String valueOf4 = String.valueOf(dVar);
        return "PublicKeyCredential{\n id='" + str2 + "', \n type='" + str + "', \n rawId=" + b10 + ", \n registerResponse=" + valueOf + ", \n signResponse=" + valueOf2 + ", \n errorResponse=" + valueOf3 + ", \n extensionsClientOutputs=" + valueOf4 + ", \n authenticatorAttachment='" + str3 + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        if (q5.b()) {
            this.f52979t = l().toString();
        }
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, i(), false);
        hf.c.f(parcel, 3, f(), false);
        hf.c.q(parcel, 4, this.f52974o, i10, false);
        hf.c.q(parcel, 5, this.f52975p, i10, false);
        hf.c.q(parcel, 6, this.f52976q, i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.s(parcel, 8, c(), false);
        hf.c.s(parcel, 9, this.f52979t, false);
        hf.c.b(parcel, a10);
        this.f52979t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, String str2, byte[] bArr, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        this(str, str2, bArr == null ? null : v4.n(bArr, 0, bArr.length), gVar, fVar, hVar, dVar, str3, str4);
    }
}
