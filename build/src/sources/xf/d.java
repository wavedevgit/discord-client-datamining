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
    private final c0 f54895d;

    /* renamed from: e  reason: collision with root package name */
    private final i1 f54896e;

    /* renamed from: i  reason: collision with root package name */
    private final e f54897i;

    /* renamed from: o  reason: collision with root package name */
    private final k1 f54898o;

    /* renamed from: p  reason: collision with root package name */
    private final String f54899p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(c0 c0Var, i1 i1Var, e eVar, k1 k1Var, String str) {
        this.f54895d = c0Var;
        this.f54896e = i1Var;
        this.f54897i = eVar;
        this.f54898o = k1Var;
        this.f54899p = str;
    }

    public e b() {
        return this.f54897i;
    }

    public c0 c() {
        return this.f54895d;
    }

    public final JSONObject d() {
        try {
            JSONObject jSONObject = new JSONObject();
            e eVar = this.f54897i;
            if (eVar != null) {
                jSONObject.put("credProps", eVar.c());
            }
            c0 c0Var = this.f54895d;
            if (c0Var != null) {
                jSONObject.put("uvm", c0Var.c());
            }
            k1 k1Var = this.f54898o;
            if (k1Var != null) {
                jSONObject.put("prf", k1Var.b());
            }
            String str = this.f54899p;
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
        if (!hf.o.a(this.f54895d, dVar.f54895d) || !hf.o.a(this.f54896e, dVar.f54896e) || !hf.o.a(this.f54897i, dVar.f54897i) || !hf.o.a(this.f54898o, dVar.f54898o) || !hf.o.a(this.f54899p, dVar.f54899p)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f54895d, this.f54896e, this.f54897i, this.f54898o, this.f54899p);
    }

    public final String toString() {
        String obj = d().toString();
        return "AuthenticationExtensionsClientOutputs{" + obj + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, c(), i10, false);
        jf.c.q(parcel, 2, this.f54896e, i10, false);
        jf.c.q(parcel, 3, b(), i10, false);
        jf.c.q(parcel, 4, this.f54898o, i10, false);
        jf.c.s(parcel, 5, this.f54899p, false);
        jf.c.b(parcel, a10);
    }
}
