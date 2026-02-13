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
    private final String f55262d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55263e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f55264i;

    /* renamed from: o  reason: collision with root package name */
    private final g f55265o;

    /* renamed from: p  reason: collision with root package name */
    private final f f55266p;

    /* renamed from: q  reason: collision with root package name */
    private final h f55267q;

    /* renamed from: r  reason: collision with root package name */
    private final d f55268r;

    /* renamed from: s  reason: collision with root package name */
    private final String f55269s;

    /* renamed from: t  reason: collision with root package name */
    private String f55270t;

    private q(String str, String str2, v4 v4Var, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        boolean z10 = false;
        hf.q.b((gVar != null && fVar == null && hVar == null) || (gVar == null && fVar != null && hVar == null) || (gVar == null && fVar == null && hVar != null), "Must provide a response object.");
        if (hVar != null || (str != null && v4Var != null)) {
            z10 = true;
        }
        hf.q.b(z10, "Must provide id and rawId if not an error response.");
        this.f55262d = str;
        this.f55263e = str2;
        this.f55264i = v4Var;
        this.f55265o = gVar;
        this.f55266p = fVar;
        this.f55267q = hVar;
        this.f55268r = dVar;
        this.f55269s = str3;
        this.f55270t = null;
    }

    public static q b(byte[] bArr) {
        return (q) jf.e.a(bArr, CREATOR);
    }

    public String c() {
        return this.f55269s;
    }

    public d d() {
        return this.f55268r;
    }

    public String e() {
        return this.f55262d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (!hf.o.a(this.f55262d, qVar.f55262d) || !hf.o.a(this.f55263e, qVar.f55263e) || !hf.o.a(this.f55264i, qVar.f55264i) || !hf.o.a(this.f55265o, qVar.f55265o) || !hf.o.a(this.f55266p, qVar.f55266p) || !hf.o.a(this.f55267q, qVar.f55267q) || !hf.o.a(this.f55268r, qVar.f55268r) || !hf.o.a(this.f55269s, qVar.f55269s)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f55264i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public i g() {
        g gVar = this.f55265o;
        if (gVar != null) {
            return gVar;
        }
        f fVar = this.f55266p;
        if (fVar != null) {
            return fVar;
        }
        h hVar = this.f55267q;
        if (hVar != null) {
            return hVar;
        }
        throw new IllegalStateException("No response set.");
    }

    public int hashCode() {
        return hf.o.b(this.f55262d, this.f55263e, this.f55264i, this.f55266p, this.f55265o, this.f55267q, this.f55268r, this.f55269s);
    }

    public String i() {
        return this.f55263e;
    }

    public String j() {
        return k().toString();
    }

    public final JSONObject k() {
        JSONObject jSONObject;
        try {
            JSONObject jSONObject2 = new JSONObject();
            v4 v4Var = this.f55264i;
            if (v4Var != null && v4Var.p().length > 0) {
                jSONObject2.put("rawId", com.google.android.gms.common.util.c.b(this.f55264i.p()));
            }
            String str = this.f55269s;
            if (str != null) {
                jSONObject2.put("authenticatorAttachment", str);
            }
            String str2 = this.f55263e;
            if (str2 != null && this.f55267q == null) {
                jSONObject2.put("type", str2);
            }
            String str3 = this.f55262d;
            if (str3 != null) {
                jSONObject2.put(StackTraceHelper.ID_KEY, str3);
            }
            String str4 = "response";
            f fVar = this.f55266p;
            boolean z10 = true;
            if (fVar != null) {
                jSONObject = fVar.g();
            } else {
                g gVar = this.f55265o;
                if (gVar != null) {
                    jSONObject = gVar.f();
                } else {
                    h hVar = this.f55267q;
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
            d dVar = this.f55268r;
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
        v4 v4Var = this.f55264i;
        if (v4Var == null) {
            p10 = null;
        } else {
            p10 = v4Var.p();
        }
        String str = this.f55263e;
        String str2 = this.f55262d;
        g gVar = this.f55265o;
        f fVar = this.f55266p;
        h hVar = this.f55267q;
        d dVar = this.f55268r;
        String str3 = this.f55269s;
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
            this.f55270t = k().toString();
        }
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, e(), false);
        jf.c.s(parcel, 2, i(), false);
        jf.c.f(parcel, 3, f(), false);
        jf.c.q(parcel, 4, this.f55265o, i10, false);
        jf.c.q(parcel, 5, this.f55266p, i10, false);
        jf.c.q(parcel, 6, this.f55267q, i10, false);
        jf.c.q(parcel, 7, d(), i10, false);
        jf.c.s(parcel, 8, c(), false);
        jf.c.s(parcel, 9, this.f55270t, false);
        jf.c.b(parcel, a10);
        this.f55270t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, String str2, byte[] bArr, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        this(str, str2, bArr == null ? null : v4.o(bArr, 0, bArr.length), gVar, fVar, hVar, dVar, str3, str4);
    }
}
