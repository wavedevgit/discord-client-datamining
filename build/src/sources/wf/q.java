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
    private final String f53798d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53799e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f53800i;

    /* renamed from: o  reason: collision with root package name */
    private final g f53801o;

    /* renamed from: p  reason: collision with root package name */
    private final f f53802p;

    /* renamed from: q  reason: collision with root package name */
    private final h f53803q;

    /* renamed from: r  reason: collision with root package name */
    private final d f53804r;

    /* renamed from: s  reason: collision with root package name */
    private final String f53805s;

    /* renamed from: t  reason: collision with root package name */
    private String f53806t;

    private q(String str, String str2, v4 v4Var, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        boolean z10 = false;
        gf.q.b((gVar != null && fVar == null && hVar == null) || (gVar == null && fVar != null && hVar == null) || (gVar == null && fVar == null && hVar != null), "Must provide a response object.");
        if (hVar != null || (str != null && v4Var != null)) {
            z10 = true;
        }
        gf.q.b(z10, "Must provide id and rawId if not an error response.");
        this.f53798d = str;
        this.f53799e = str2;
        this.f53800i = v4Var;
        this.f53801o = gVar;
        this.f53802p = fVar;
        this.f53803q = hVar;
        this.f53804r = dVar;
        this.f53805s = str3;
        this.f53806t = null;
    }

    public static q b(byte[] bArr) {
        return (q) hf.e.a(bArr, CREATOR);
    }

    public String c() {
        return this.f53805s;
    }

    public d d() {
        return this.f53804r;
    }

    public String e() {
        return this.f53798d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (!gf.o.a(this.f53798d, qVar.f53798d) || !gf.o.a(this.f53799e, qVar.f53799e) || !gf.o.a(this.f53800i, qVar.f53800i) || !gf.o.a(this.f53801o, qVar.f53801o) || !gf.o.a(this.f53802p, qVar.f53802p) || !gf.o.a(this.f53803q, qVar.f53803q) || !gf.o.a(this.f53804r, qVar.f53804r) || !gf.o.a(this.f53805s, qVar.f53805s)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f53800i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public i h() {
        g gVar = this.f53801o;
        if (gVar != null) {
            return gVar;
        }
        f fVar = this.f53802p;
        if (fVar != null) {
            return fVar;
        }
        h hVar = this.f53803q;
        if (hVar != null) {
            return hVar;
        }
        throw new IllegalStateException("No response set.");
    }

    public int hashCode() {
        return gf.o.b(this.f53798d, this.f53799e, this.f53800i, this.f53802p, this.f53801o, this.f53803q, this.f53804r, this.f53805s);
    }

    public String i() {
        return this.f53799e;
    }

    public String j() {
        return l().toString();
    }

    public final JSONObject l() {
        JSONObject jSONObject;
        try {
            JSONObject jSONObject2 = new JSONObject();
            v4 v4Var = this.f53800i;
            if (v4Var != null && v4Var.p().length > 0) {
                jSONObject2.put("rawId", com.google.android.gms.common.util.c.b(this.f53800i.p()));
            }
            String str = this.f53805s;
            if (str != null) {
                jSONObject2.put("authenticatorAttachment", str);
            }
            String str2 = this.f53799e;
            if (str2 != null && this.f53803q == null) {
                jSONObject2.put("type", str2);
            }
            String str3 = this.f53798d;
            if (str3 != null) {
                jSONObject2.put(StackTraceHelper.ID_KEY, str3);
            }
            String str4 = "response";
            f fVar = this.f53802p;
            boolean z10 = true;
            if (fVar != null) {
                jSONObject = fVar.h();
            } else {
                g gVar = this.f53801o;
                if (gVar != null) {
                    jSONObject = gVar.f();
                } else {
                    h hVar = this.f53803q;
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
            d dVar = this.f53804r;
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
        v4 v4Var = this.f53800i;
        if (v4Var == null) {
            p10 = null;
        } else {
            p10 = v4Var.p();
        }
        String str = this.f53799e;
        String str2 = this.f53798d;
        g gVar = this.f53801o;
        f fVar = this.f53802p;
        h hVar = this.f53803q;
        d dVar = this.f53804r;
        String str3 = this.f53805s;
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
            this.f53806t = l().toString();
        }
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, i(), false);
        hf.c.f(parcel, 3, f(), false);
        hf.c.q(parcel, 4, this.f53801o, i10, false);
        hf.c.q(parcel, 5, this.f53802p, i10, false);
        hf.c.q(parcel, 6, this.f53803q, i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.s(parcel, 8, c(), false);
        hf.c.s(parcel, 9, this.f53806t, false);
        hf.c.b(parcel, a10);
        this.f53806t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, String str2, byte[] bArr, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        this(str, str2, bArr == null ? null : v4.o(bArr, 0, bArr.length), gVar, fVar, hVar, dVar, str3, str4);
    }
}
