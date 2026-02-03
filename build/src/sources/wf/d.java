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
    private final c0 f52029d;

    /* renamed from: e  reason: collision with root package name */
    private final i1 f52030e;

    /* renamed from: i  reason: collision with root package name */
    private final e f52031i;

    /* renamed from: o  reason: collision with root package name */
    private final k1 f52032o;

    /* renamed from: p  reason: collision with root package name */
    private final String f52033p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(c0 c0Var, i1 i1Var, e eVar, k1 k1Var, String str) {
        this.f52029d = c0Var;
        this.f52030e = i1Var;
        this.f52031i = eVar;
        this.f52032o = k1Var;
        this.f52033p = str;
    }

    public e b() {
        return this.f52031i;
    }

    public c0 c() {
        return this.f52029d;
    }

    public final JSONObject d() {
        try {
            JSONObject jSONObject = new JSONObject();
            e eVar = this.f52031i;
            if (eVar != null) {
                jSONObject.put("credProps", eVar.c());
            }
            c0 c0Var = this.f52029d;
            if (c0Var != null) {
                jSONObject.put("uvm", c0Var.c());
            }
            k1 k1Var = this.f52032o;
            if (k1Var != null) {
                jSONObject.put("prf", k1Var.b());
            }
            String str = this.f52033p;
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
        if (!gf.o.a(this.f52029d, dVar.f52029d) || !gf.o.a(this.f52030e, dVar.f52030e) || !gf.o.a(this.f52031i, dVar.f52031i) || !gf.o.a(this.f52032o, dVar.f52032o) || !gf.o.a(this.f52033p, dVar.f52033p)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52029d, this.f52030e, this.f52031i, this.f52032o, this.f52033p);
    }

    public final String toString() {
        String obj = d().toString();
        return "AuthenticationExtensionsClientOutputs{" + obj + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, c(), i10, false);
        hf.c.q(parcel, 2, this.f52030e, i10, false);
        hf.c.q(parcel, 3, b(), i10, false);
        hf.c.q(parcel, 4, this.f52032o, i10, false);
        hf.c.s(parcel, 5, this.f52033p, false);
        hf.c.b(parcel, a10);
    }
}
