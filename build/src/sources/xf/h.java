package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import org.json.JSONException;
import org.json.JSONObject;
import xf.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends i {
    @NonNull
    public static final Parcelable.Creator<h> CREATOR = new o1();

    /* renamed from: d  reason: collision with root package name */
    private final m f54646d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54647e;

    /* renamed from: i  reason: collision with root package name */
    private final int f54648i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(int i10, String str, int i11) {
        try {
            this.f54646d = m.d(i10);
            this.f54647e = str;
            this.f54648i = i11;
        } catch (m.a e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public m b() {
        return this.f54646d;
    }

    public int c() {
        return this.f54646d.a();
    }

    public String d() {
        return this.f54647e;
    }

    public final JSONObject e() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("code", this.f54646d.a());
            String str = this.f54647e;
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
        if (!hf.o.a(this.f54646d, hVar.f54646d) || !hf.o.a(this.f54647e, hVar.f54647e) || !hf.o.a(Integer.valueOf(this.f54648i), Integer.valueOf(hVar.f54648i))) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f54646d, this.f54647e, Integer.valueOf(this.f54648i));
    }

    public String toString() {
        com.google.android.gms.internal.fido.f0 a10 = com.google.android.gms.internal.fido.h0.a(this);
        a10.a("errorCode", this.f54646d.a());
        String str = this.f54647e;
        if (str != null) {
            a10.b("errorMessage", str);
        }
        return a10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, c());
        jf.c.s(parcel, 3, d(), false);
        jf.c.l(parcel, 4, this.f54648i);
        jf.c.b(parcel, a10);
    }
}
