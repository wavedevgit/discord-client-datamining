package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.internal.fido.q5;
import com.google.android.gms.internal.fido.v4;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q extends jf.a {
    @NonNull
    public static final Parcelable.Creator<q> CREATOR = new t0();

    /* renamed from: d  reason: collision with root package name */
    private final String f54693d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54694e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f54695i;

    /* renamed from: o  reason: collision with root package name */
    private final g f54696o;

    /* renamed from: p  reason: collision with root package name */
    private final f f54697p;

    /* renamed from: q  reason: collision with root package name */
    private final h f54698q;

    /* renamed from: r  reason: collision with root package name */
    private final d f54699r;

    /* renamed from: s  reason: collision with root package name */
    private final String f54700s;

    /* renamed from: t  reason: collision with root package name */
    private String f54701t;

    private q(String str, String str2, v4 v4Var, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        boolean z10 = false;
        hf.q.b((gVar != null && fVar == null && hVar == null) || (gVar == null && fVar != null && hVar == null) || (gVar == null && fVar == null && hVar != null), "Must provide a response object.");
        if (hVar != null || (str != null && v4Var != null)) {
            z10 = true;
        }
        hf.q.b(z10, "Must provide id and rawId if not an error response.");
        this.f54693d = str;
        this.f54694e = str2;
        this.f54695i = v4Var;
        this.f54696o = gVar;
        this.f54697p = fVar;
        this.f54698q = hVar;
        this.f54699r = dVar;
        this.f54700s = str3;
        this.f54701t = null;
    }

    public static q b(byte[] bArr) {
        return (q) jf.e.a(bArr, CREATOR);
    }

    public String c() {
        return this.f54700s;
    }

    public d d() {
        return this.f54699r;
    }

    public String e() {
        return this.f54693d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (!hf.o.a(this.f54693d, qVar.f54693d) || !hf.o.a(this.f54694e, qVar.f54694e) || !hf.o.a(this.f54695i, qVar.f54695i) || !hf.o.a(this.f54696o, qVar.f54696o) || !hf.o.a(this.f54697p, qVar.f54697p) || !hf.o.a(this.f54698q, qVar.f54698q) || !hf.o.a(this.f54699r, qVar.f54699r) || !hf.o.a(this.f54700s, qVar.f54700s)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f54695i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public i g() {
        g gVar = this.f54696o;
        if (gVar != null) {
            return gVar;
        }
        f fVar = this.f54697p;
        if (fVar != null) {
            return fVar;
        }
        h hVar = this.f54698q;
        if (hVar != null) {
            return hVar;
        }
        throw new IllegalStateException("No response set.");
    }

    public int hashCode() {
        return hf.o.b(this.f54693d, this.f54694e, this.f54695i, this.f54697p, this.f54696o, this.f54698q, this.f54699r, this.f54700s);
    }

    public String i() {
        return this.f54694e;
    }

    public String j() {
        return k().toString();
    }

    public final JSONObject k() {
        JSONObject jSONObject;
        try {
            JSONObject jSONObject2 = new JSONObject();
            v4 v4Var = this.f54695i;
            if (v4Var != null && v4Var.p().length > 0) {
                jSONObject2.put("rawId", com.google.android.gms.common.util.c.b(this.f54695i.p()));
            }
            String str = this.f54700s;
            if (str != null) {
                jSONObject2.put("authenticatorAttachment", str);
            }
            String str2 = this.f54694e;
            if (str2 != null && this.f54698q == null) {
                jSONObject2.put("type", str2);
            }
            String str3 = this.f54693d;
            if (str3 != null) {
                jSONObject2.put(StackTraceHelper.ID_KEY, str3);
            }
            String str4 = "response";
            f fVar = this.f54697p;
            boolean z10 = true;
            if (fVar != null) {
                jSONObject = fVar.g();
            } else {
                g gVar = this.f54696o;
                if (gVar != null) {
                    jSONObject = gVar.f();
                } else {
                    h hVar = this.f54698q;
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
            d dVar = this.f54699r;
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
        byte[] p10;
        v4 v4Var = this.f54695i;
        if (v4Var == null) {
            p10 = null;
        } else {
            p10 = v4Var.p();
        }
        String str = this.f54694e;
        String str2 = this.f54693d;
        g gVar = this.f54696o;
        f fVar = this.f54697p;
        h hVar = this.f54698q;
        d dVar = this.f54699r;
        String str3 = this.f54700s;
        String b10 = com.google.android.gms.common.util.c.b(p10);
        String valueOf = String.valueOf(gVar);
        String valueOf2 = String.valueOf(fVar);
        String valueOf3 = String.valueOf(hVar);
        String valueOf4 = String.valueOf(dVar);
        return "PublicKeyCredential{\n id='" + str2 + "', \n type='" + str + "', \n rawId=" + b10 + ", \n registerResponse=" + valueOf + ", \n signResponse=" + valueOf2 + ", \n errorResponse=" + valueOf3 + ", \n extensionsClientOutputs=" + valueOf4 + ", \n authenticatorAttachment='" + str3 + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        if (q5.b()) {
            this.f54701t = k().toString();
        }
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, e(), false);
        jf.c.s(parcel, 2, i(), false);
        jf.c.f(parcel, 3, f(), false);
        jf.c.q(parcel, 4, this.f54696o, i10, false);
        jf.c.q(parcel, 5, this.f54697p, i10, false);
        jf.c.q(parcel, 6, this.f54698q, i10, false);
        jf.c.q(parcel, 7, d(), i10, false);
        jf.c.s(parcel, 8, c(), false);
        jf.c.s(parcel, 9, this.f54701t, false);
        jf.c.b(parcel, a10);
        this.f54701t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, String str2, byte[] bArr, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        this(str, str2, bArr == null ? null : v4.o(bArr, 0, bArr.length), gVar, fVar, hVar, dVar, str3, str4);
    }
}
