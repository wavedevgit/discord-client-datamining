package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import org.json.JSONException;
import org.json.JSONObject;
import wf.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends i {
    @NonNull
    public static final Parcelable.Creator<h> CREATOR = new o1();

    /* renamed from: d  reason: collision with root package name */
    private final m f52481d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52482e;

    /* renamed from: i  reason: collision with root package name */
    private final int f52483i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(int i10, String str, int i11) {
        try {
            this.f52481d = m.d(i10);
            this.f52482e = str;
            this.f52483i = i11;
        } catch (m.a e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public m b() {
        return this.f52481d;
    }

    public int c() {
        return this.f52481d.a();
    }

    public String d() {
        return this.f52482e;
    }

    public final JSONObject e() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("code", this.f52481d.a());
            String str = this.f52482e;
            if (str != null) {
                jSONObject.put("message", str);
                return jSONObject;
            }
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticatorErrorResponse to JSON object", e10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (!gf.o.a(this.f52481d, hVar.f52481d) || !gf.o.a(this.f52482e, hVar.f52482e) || !gf.o.a(Integer.valueOf(this.f52483i), Integer.valueOf(hVar.f52483i))) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52481d, this.f52482e, Integer.valueOf(this.f52483i));
    }

    public String toString() {
        com.google.android.gms.internal.fido.f0 a10 = com.google.android.gms.internal.fido.h0.a(this);
        a10.a("errorCode", this.f52481d.a());
        String str = this.f52482e;
        if (str != null) {
            a10.b("errorMessage", str);
        }
        return a10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, c());
        hf.c.s(parcel, 3, d(), false);
        hf.c.l(parcel, 4, this.f52483i);
        hf.c.b(parcel, a10);
    }
}
