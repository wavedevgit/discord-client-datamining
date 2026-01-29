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
    private final c0 f52446d;

    /* renamed from: e  reason: collision with root package name */
    private final i1 f52447e;

    /* renamed from: i  reason: collision with root package name */
    private final e f52448i;

    /* renamed from: o  reason: collision with root package name */
    private final k1 f52449o;

    /* renamed from: p  reason: collision with root package name */
    private final String f52450p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(c0 c0Var, i1 i1Var, e eVar, k1 k1Var, String str) {
        this.f52446d = c0Var;
        this.f52447e = i1Var;
        this.f52448i = eVar;
        this.f52449o = k1Var;
        this.f52450p = str;
    }

    public e b() {
        return this.f52448i;
    }

    public c0 c() {
        return this.f52446d;
    }

    public final JSONObject d() {
        try {
            JSONObject jSONObject = new JSONObject();
            e eVar = this.f52448i;
            if (eVar != null) {
                jSONObject.put("credProps", eVar.c());
            }
            c0 c0Var = this.f52446d;
            if (c0Var != null) {
                jSONObject.put("uvm", c0Var.c());
            }
            k1 k1Var = this.f52449o;
            if (k1Var != null) {
                jSONObject.put("prf", k1Var.b());
            }
            String str = this.f52450p;
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
        if (!gf.o.a(this.f52446d, dVar.f52446d) || !gf.o.a(this.f52447e, dVar.f52447e) || !gf.o.a(this.f52448i, dVar.f52448i) || !gf.o.a(this.f52449o, dVar.f52449o) || !gf.o.a(this.f52450p, dVar.f52450p)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52446d, this.f52447e, this.f52448i, this.f52449o, this.f52450p);
    }

    public final String toString() {
        String obj = d().toString();
        return "AuthenticationExtensionsClientOutputs{" + obj + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, c(), i10, false);
        hf.c.q(parcel, 2, this.f52447e, i10, false);
        hf.c.q(parcel, 3, b(), i10, false);
        hf.c.q(parcel, 4, this.f52449o, i10, false);
        hf.c.s(parcel, 5, this.f52450p, false);
        hf.c.b(parcel, a10);
    }
}
