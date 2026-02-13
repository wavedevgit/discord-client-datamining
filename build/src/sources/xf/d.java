package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new g1();

    /* renamed from: d  reason: collision with root package name */
    private final c0 f55196d;

    /* renamed from: e  reason: collision with root package name */
    private final i1 f55197e;

    /* renamed from: i  reason: collision with root package name */
    private final e f55198i;

    /* renamed from: o  reason: collision with root package name */
    private final k1 f55199o;

    /* renamed from: p  reason: collision with root package name */
    private final String f55200p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(c0 c0Var, i1 i1Var, e eVar, k1 k1Var, String str) {
        this.f55196d = c0Var;
        this.f55197e = i1Var;
        this.f55198i = eVar;
        this.f55199o = k1Var;
        this.f55200p = str;
    }

    public e b() {
        return this.f55198i;
    }

    public c0 c() {
        return this.f55196d;
    }

    public final JSONObject d() {
        try {
            JSONObject jSONObject = new JSONObject();
            e eVar = this.f55198i;
            if (eVar != null) {
                jSONObject.put("credProps", eVar.c());
            }
            c0 c0Var = this.f55196d;
            if (c0Var != null) {
                jSONObject.put("uvm", c0Var.c());
            }
            k1 k1Var = this.f55199o;
            if (k1Var != null) {
                jSONObject.put("prf", k1Var.b());
            }
            String str = this.f55200p;
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
        if (!hf.o.a(this.f55196d, dVar.f55196d) || !hf.o.a(this.f55197e, dVar.f55197e) || !hf.o.a(this.f55198i, dVar.f55198i) || !hf.o.a(this.f55199o, dVar.f55199o) || !hf.o.a(this.f55200p, dVar.f55200p)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f55196d, this.f55197e, this.f55198i, this.f55199o, this.f55200p);
    }

    public final String toString() {
        String obj = d().toString();
        return "AuthenticationExtensionsClientOutputs{" + obj + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, c(), i10, false);
        jf.c.q(parcel, 2, this.f55197e, i10, false);
        jf.c.q(parcel, 3, b(), i10, false);
        jf.c.q(parcel, 4, this.f55199o, i10, false);
        jf.c.s(parcel, 5, this.f55200p, false);
        jf.c.b(parcel, a10);
    }
}
