package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new g1();

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53732d;

    /* renamed from: e  reason: collision with root package name */
    private final i1 f53733e;

    /* renamed from: i  reason: collision with root package name */
    private final e f53734i;

    /* renamed from: o  reason: collision with root package name */
    private final k1 f53735o;

    /* renamed from: p  reason: collision with root package name */
    private final String f53736p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(c0 c0Var, i1 i1Var, e eVar, k1 k1Var, String str) {
        this.f53732d = c0Var;
        this.f53733e = i1Var;
        this.f53734i = eVar;
        this.f53735o = k1Var;
        this.f53736p = str;
    }

    public e b() {
        return this.f53734i;
    }

    public c0 c() {
        return this.f53732d;
    }

    public final JSONObject d() {
        try {
            JSONObject jSONObject = new JSONObject();
            e eVar = this.f53734i;
            if (eVar != null) {
                jSONObject.put("credProps", eVar.c());
            }
            c0 c0Var = this.f53732d;
            if (c0Var != null) {
                jSONObject.put("uvm", c0Var.c());
            }
            k1 k1Var = this.f53735o;
            if (k1Var != null) {
                jSONObject.put("prf", k1Var.b());
            }
            String str = this.f53736p;
            if (str != null) {
                jSONObject.put("txAuthSimple", str);
            }
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticationExtensionsClientOutputs to JSON object", e10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f53732d, dVar.f53732d) || !gf.o.a(this.f53733e, dVar.f53733e) || !gf.o.a(this.f53734i, dVar.f53734i) || !gf.o.a(this.f53735o, dVar.f53735o) || !gf.o.a(this.f53736p, dVar.f53736p)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f53732d, this.f53733e, this.f53734i, this.f53735o, this.f53736p);
    }

    public final String toString() {
        String obj = d().toString();
        return "AuthenticationExtensionsClientOutputs{" + obj + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, c(), i10, false);
        hf.c.q(parcel, 2, this.f53733e, i10, false);
        hf.c.q(parcel, 3, b(), i10, false);
        hf.c.q(parcel, 4, this.f53735o, i10, false);
        hf.c.s(parcel, 5, this.f53736p, false);
        hf.c.b(parcel, a10);
    }
}
