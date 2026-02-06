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
    private final String f53750d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53751e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f53752i;

    /* renamed from: o  reason: collision with root package name */
    private final g f53753o;

    /* renamed from: p  reason: collision with root package name */
    private final f f53754p;

    /* renamed from: q  reason: collision with root package name */
    private final h f53755q;

    /* renamed from: r  reason: collision with root package name */
    private final d f53756r;

    /* renamed from: s  reason: collision with root package name */
    private final String f53757s;

    /* renamed from: t  reason: collision with root package name */
    private String f53758t;

    private q(String str, String str2, v4 v4Var, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        boolean z10 = false;
        gf.q.b((gVar != null && fVar == null && hVar == null) || (gVar == null && fVar != null && hVar == null) || (gVar == null && fVar == null && hVar != null), "Must provide a response object.");
        if (hVar != null || (str != null && v4Var != null)) {
            z10 = true;
        }
        gf.q.b(z10, "Must provide id and rawId if not an error response.");
        this.f53750d = str;
        this.f53751e = str2;
        this.f53752i = v4Var;
        this.f53753o = gVar;
        this.f53754p = fVar;
        this.f53755q = hVar;
        this.f53756r = dVar;
        this.f53757s = str3;
        this.f53758t = null;
    }

    public static q b(byte[] bArr) {
        return (q) hf.e.a(bArr, CREATOR);
    }

    public String c() {
        return this.f53757s;
    }

    public d d() {
        return this.f53756r;
    }

    public String e() {
        return this.f53750d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (!gf.o.a(this.f53750d, qVar.f53750d) || !gf.o.a(this.f53751e, qVar.f53751e) || !gf.o.a(this.f53752i, qVar.f53752i) || !gf.o.a(this.f53753o, qVar.f53753o) || !gf.o.a(this.f53754p, qVar.f53754p) || !gf.o.a(this.f53755q, qVar.f53755q) || !gf.o.a(this.f53756r, qVar.f53756r) || !gf.o.a(this.f53757s, qVar.f53757s)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f53752i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public i h() {
        g gVar = this.f53753o;
        if (gVar != null) {
            return gVar;
        }
        f fVar = this.f53754p;
        if (fVar != null) {
            return fVar;
        }
        h hVar = this.f53755q;
        if (hVar != null) {
            return hVar;
        }
        throw new IllegalStateException("No response set.");
    }

    public int hashCode() {
        return gf.o.b(this.f53750d, this.f53751e, this.f53752i, this.f53754p, this.f53753o, this.f53755q, this.f53756r, this.f53757s);
    }

    public String i() {
        return this.f53751e;
    }

    public String j() {
        return l().toString();
    }

    public final JSONObject l() {
        JSONObject jSONObject;
        try {
            JSONObject jSONObject2 = new JSONObject();
            v4 v4Var = this.f53752i;
            if (v4Var != null && v4Var.p().length > 0) {
                jSONObject2.put("rawId", com.google.android.gms.common.util.c.b(this.f53752i.p()));
            }
            String str = this.f53757s;
            if (str != null) {
                jSONObject2.put("authenticatorAttachment", str);
            }
            String str2 = this.f53751e;
            if (str2 != null && this.f53755q == null) {
                jSONObject2.put("type", str2);
            }
            String str3 = this.f53750d;
            if (str3 != null) {
                jSONObject2.put(StackTraceHelper.ID_KEY, str3);
            }
            String str4 = "response";
            f fVar = this.f53754p;
            boolean z10 = true;
            if (fVar != null) {
                jSONObject = fVar.h();
            } else {
                g gVar = this.f53753o;
                if (gVar != null) {
                    jSONObject = gVar.f();
                } else {
                    h hVar = this.f53755q;
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
            d dVar = this.f53756r;
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
        v4 v4Var = this.f53752i;
        if (v4Var == null) {
            p10 = null;
        } else {
            p10 = v4Var.p();
        }
        String str = this.f53751e;
        String str2 = this.f53750d;
        g gVar = this.f53753o;
        f fVar = this.f53754p;
        h hVar = this.f53755q;
        d dVar = this.f53756r;
        String str3 = this.f53757s;
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
            this.f53758t = l().toString();
        }
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, i(), false);
        hf.c.f(parcel, 3, f(), false);
        hf.c.q(parcel, 4, this.f53753o, i10, false);
        hf.c.q(parcel, 5, this.f53754p, i10, false);
        hf.c.q(parcel, 6, this.f53755q, i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.s(parcel, 8, c(), false);
        hf.c.s(parcel, 9, this.f53758t, false);
        hf.c.b(parcel, a10);
        this.f53758t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, String str2, byte[] bArr, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        this(str, str2, bArr == null ? null : v4.o(bArr, 0, bArr.length), gVar, fVar, hVar, dVar, str3, str4);
    }
}
