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
    private final c0 f53684d;

    /* renamed from: e  reason: collision with root package name */
    private final i1 f53685e;

    /* renamed from: i  reason: collision with root package name */
    private final e f53686i;

    /* renamed from: o  reason: collision with root package name */
    private final k1 f53687o;

    /* renamed from: p  reason: collision with root package name */
    private final String f53688p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(c0 c0Var, i1 i1Var, e eVar, k1 k1Var, String str) {
        this.f53684d = c0Var;
        this.f53685e = i1Var;
        this.f53686i = eVar;
        this.f53687o = k1Var;
        this.f53688p = str;
    }

    public e b() {
        return this.f53686i;
    }

    public c0 c() {
        return this.f53684d;
    }

    public final JSONObject d() {
        try {
            JSONObject jSONObject = new JSONObject();
            e eVar = this.f53686i;
            if (eVar != null) {
                jSONObject.put("credProps", eVar.c());
            }
            c0 c0Var = this.f53684d;
            if (c0Var != null) {
                jSONObject.put("uvm", c0Var.c());
            }
            k1 k1Var = this.f53687o;
            if (k1Var != null) {
                jSONObject.put("prf", k1Var.b());
            }
            String str = this.f53688p;
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
        if (!gf.o.a(this.f53684d, dVar.f53684d) || !gf.o.a(this.f53685e, dVar.f53685e) || !gf.o.a(this.f53686i, dVar.f53686i) || !gf.o.a(this.f53687o, dVar.f53687o) || !gf.o.a(this.f53688p, dVar.f53688p)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f53684d, this.f53685e, this.f53686i, this.f53687o, this.f53688p);
    }

    public final String toString() {
        String obj = d().toString();
        return "AuthenticationExtensionsClientOutputs{" + obj + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, c(), i10, false);
        hf.c.q(parcel, 2, this.f53685e, i10, false);
        hf.c.q(parcel, 3, b(), i10, false);
        hf.c.q(parcel, 4, this.f53687o, i10, false);
        hf.c.s(parcel, 5, this.f53688p, false);
        hf.c.b(parcel, a10);
    }
}
