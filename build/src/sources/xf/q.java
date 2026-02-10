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
    private final String f54961d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54962e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f54963i;

    /* renamed from: o  reason: collision with root package name */
    private final g f54964o;

    /* renamed from: p  reason: collision with root package name */
    private final f f54965p;

    /* renamed from: q  reason: collision with root package name */
    private final h f54966q;

    /* renamed from: r  reason: collision with root package name */
    private final d f54967r;

    /* renamed from: s  reason: collision with root package name */
    private final String f54968s;

    /* renamed from: t  reason: collision with root package name */
    private String f54969t;

    private q(String str, String str2, v4 v4Var, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        boolean z10 = false;
        hf.q.b((gVar != null && fVar == null && hVar == null) || (gVar == null && fVar != null && hVar == null) || (gVar == null && fVar == null && hVar != null), "Must provide a response object.");
        if (hVar != null || (str != null && v4Var != null)) {
            z10 = true;
        }
        hf.q.b(z10, "Must provide id and rawId if not an error response.");
        this.f54961d = str;
        this.f54962e = str2;
        this.f54963i = v4Var;
        this.f54964o = gVar;
        this.f54965p = fVar;
        this.f54966q = hVar;
        this.f54967r = dVar;
        this.f54968s = str3;
        this.f54969t = null;
    }

    public static q b(byte[] bArr) {
        return (q) jf.e.a(bArr, CREATOR);
    }

    public String c() {
        return this.f54968s;
    }

    public d d() {
        return this.f54967r;
    }

    public String e() {
        return this.f54961d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (!hf.o.a(this.f54961d, qVar.f54961d) || !hf.o.a(this.f54962e, qVar.f54962e) || !hf.o.a(this.f54963i, qVar.f54963i) || !hf.o.a(this.f54964o, qVar.f54964o) || !hf.o.a(this.f54965p, qVar.f54965p) || !hf.o.a(this.f54966q, qVar.f54966q) || !hf.o.a(this.f54967r, qVar.f54967r) || !hf.o.a(this.f54968s, qVar.f54968s)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f54963i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public i h() {
        g gVar = this.f54964o;
        if (gVar != null) {
            return gVar;
        }
        f fVar = this.f54965p;
        if (fVar != null) {
            return fVar;
        }
        h hVar = this.f54966q;
        if (hVar != null) {
            return hVar;
        }
        throw new IllegalStateException("No response set.");
    }

    public int hashCode() {
        return hf.o.b(this.f54961d, this.f54962e, this.f54963i, this.f54965p, this.f54964o, this.f54966q, this.f54967r, this.f54968s);
    }

    public String i() {
        return this.f54962e;
    }

    public String j() {
        return l().toString();
    }

    public final JSONObject l() {
        JSONObject jSONObject;
        try {
            JSONObject jSONObject2 = new JSONObject();
            v4 v4Var = this.f54963i;
            if (v4Var != null && v4Var.p().length > 0) {
                jSONObject2.put("rawId", com.google.android.gms.common.util.c.b(this.f54963i.p()));
            }
            String str = this.f54968s;
            if (str != null) {
                jSONObject2.put("authenticatorAttachment", str);
            }
            String str2 = this.f54962e;
            if (str2 != null && this.f54966q == null) {
                jSONObject2.put("type", str2);
            }
            String str3 = this.f54961d;
            if (str3 != null) {
                jSONObject2.put(StackTraceHelper.ID_KEY, str3);
            }
            String str4 = "response";
            f fVar = this.f54965p;
            boolean z10 = true;
            if (fVar != null) {
                jSONObject = fVar.h();
            } else {
                g gVar = this.f54964o;
                if (gVar != null) {
                    jSONObject = gVar.f();
                } else {
                    h hVar = this.f54966q;
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
            d dVar = this.f54967r;
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
        v4 v4Var = this.f54963i;
        if (v4Var == null) {
            p10 = null;
        } else {
            p10 = v4Var.p();
        }
        String str = this.f54962e;
        String str2 = this.f54961d;
        g gVar = this.f54964o;
        f fVar = this.f54965p;
        h hVar = this.f54966q;
        d dVar = this.f54967r;
        String str3 = this.f54968s;
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
            this.f54969t = l().toString();
        }
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, e(), false);
        jf.c.s(parcel, 2, i(), false);
        jf.c.f(parcel, 3, f(), false);
        jf.c.q(parcel, 4, this.f54964o, i10, false);
        jf.c.q(parcel, 5, this.f54965p, i10, false);
        jf.c.q(parcel, 6, this.f54966q, i10, false);
        jf.c.q(parcel, 7, d(), i10, false);
        jf.c.s(parcel, 8, c(), false);
        jf.c.s(parcel, 9, this.f54969t, false);
        jf.c.b(parcel, a10);
        this.f54969t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, String str2, byte[] bArr, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        this(str, str2, bArr == null ? null : v4.o(bArr, 0, bArr.length), gVar, fVar, hVar, dVar, str3, str4);
    }
}
