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
    private final String f52528d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52529e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f52530i;

    /* renamed from: o  reason: collision with root package name */
    private final g f52531o;

    /* renamed from: p  reason: collision with root package name */
    private final f f52532p;

    /* renamed from: q  reason: collision with root package name */
    private final h f52533q;

    /* renamed from: r  reason: collision with root package name */
    private final d f52534r;

    /* renamed from: s  reason: collision with root package name */
    private final String f52535s;

    /* renamed from: t  reason: collision with root package name */
    private String f52536t;

    private q(String str, String str2, v4 v4Var, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        boolean z10 = false;
        gf.q.b((gVar != null && fVar == null && hVar == null) || (gVar == null && fVar != null && hVar == null) || (gVar == null && fVar == null && hVar != null), "Must provide a response object.");
        if (hVar != null || (str != null && v4Var != null)) {
            z10 = true;
        }
        gf.q.b(z10, "Must provide id and rawId if not an error response.");
        this.f52528d = str;
        this.f52529e = str2;
        this.f52530i = v4Var;
        this.f52531o = gVar;
        this.f52532p = fVar;
        this.f52533q = hVar;
        this.f52534r = dVar;
        this.f52535s = str3;
        this.f52536t = null;
    }

    public static q b(byte[] bArr) {
        return (q) hf.e.a(bArr, CREATOR);
    }

    public String c() {
        return this.f52535s;
    }

    public d d() {
        return this.f52534r;
    }

    public String e() {
        return this.f52528d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (!gf.o.a(this.f52528d, qVar.f52528d) || !gf.o.a(this.f52529e, qVar.f52529e) || !gf.o.a(this.f52530i, qVar.f52530i) || !gf.o.a(this.f52531o, qVar.f52531o) || !gf.o.a(this.f52532p, qVar.f52532p) || !gf.o.a(this.f52533q, qVar.f52533q) || !gf.o.a(this.f52534r, qVar.f52534r) || !gf.o.a(this.f52535s, qVar.f52535s)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f52530i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.n();
    }

    public i g() {
        g gVar = this.f52531o;
        if (gVar != null) {
            return gVar;
        }
        f fVar = this.f52532p;
        if (fVar != null) {
            return fVar;
        }
        h hVar = this.f52533q;
        if (hVar != null) {
            return hVar;
        }
        throw new IllegalStateException("No response set.");
    }

    public int hashCode() {
        return gf.o.b(this.f52528d, this.f52529e, this.f52530i, this.f52532p, this.f52531o, this.f52533q, this.f52534r, this.f52535s);
    }

    public String i() {
        return this.f52529e;
    }

    public String j() {
        return k().toString();
    }

    public final JSONObject k() {
        JSONObject jSONObject;
        try {
            JSONObject jSONObject2 = new JSONObject();
            v4 v4Var = this.f52530i;
            if (v4Var != null && v4Var.n().length > 0) {
                jSONObject2.put("rawId", com.google.android.gms.common.util.c.b(this.f52530i.n()));
            }
            String str = this.f52535s;
            if (str != null) {
                jSONObject2.put("authenticatorAttachment", str);
            }
            String str2 = this.f52529e;
            if (str2 != null && this.f52533q == null) {
                jSONObject2.put("type", str2);
            }
            String str3 = this.f52528d;
            if (str3 != null) {
                jSONObject2.put(StackTraceHelper.ID_KEY, str3);
            }
            String str4 = "response";
            f fVar = this.f52532p;
            boolean z10 = true;
            if (fVar != null) {
                jSONObject = fVar.g();
            } else {
                g gVar = this.f52531o;
                if (gVar != null) {
                    jSONObject = gVar.f();
                } else {
                    h hVar = this.f52533q;
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
            d dVar = this.f52534r;
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
        byte[] n10;
        v4 v4Var = this.f52530i;
        if (v4Var == null) {
            n10 = null;
        } else {
            n10 = v4Var.n();
        }
        String str = this.f52529e;
        String str2 = this.f52528d;
        g gVar = this.f52531o;
        f fVar = this.f52532p;
        h hVar = this.f52533q;
        d dVar = this.f52534r;
        String str3 = this.f52535s;
        String b10 = com.google.android.gms.common.util.c.b(n10);
        String valueOf = String.valueOf(gVar);
        String valueOf2 = String.valueOf(fVar);
        String valueOf3 = String.valueOf(hVar);
        String valueOf4 = String.valueOf(dVar);
        return "PublicKeyCredential{\n id='" + str2 + "', \n type='" + str + "', \n rawId=" + b10 + ", \n registerResponse=" + valueOf + ", \n signResponse=" + valueOf2 + ", \n errorResponse=" + valueOf3 + ", \n extensionsClientOutputs=" + valueOf4 + ", \n authenticatorAttachment='" + str3 + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        if (q5.b()) {
            this.f52536t = k().toString();
        }
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, i(), false);
        hf.c.f(parcel, 3, f(), false);
        hf.c.q(parcel, 4, this.f52531o, i10, false);
        hf.c.q(parcel, 5, this.f52532p, i10, false);
        hf.c.q(parcel, 6, this.f52533q, i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.s(parcel, 8, c(), false);
        hf.c.s(parcel, 9, this.f52536t, false);
        hf.c.b(parcel, a10);
        this.f52536t = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, String str2, byte[] bArr, g gVar, f fVar, h hVar, d dVar, String str3, String str4) {
        this(str, str2, bArr == null ? null : v4.m(bArr, 0, bArr.length), gVar, fVar, hVar, dVar, str3, str4);
    }
}
