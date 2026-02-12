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
    private final m f54647d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54648e;

    /* renamed from: i  reason: collision with root package name */
    private final int f54649i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(int i10, String str, int i11) {
        try {
            this.f54647d = m.d(i10);
            this.f54648e = str;
            this.f54649i = i11;
        } catch (m.a e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public m b() {
        return this.f54647d;
    }

    public int c() {
        return this.f54647d.a();
    }

    public String d() {
        return this.f54648e;
    }

    public final JSONObject e() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("code", this.f54647d.a());
            String str = this.f54648e;
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
        if (!hf.o.a(this.f54647d, hVar.f54647d) || !hf.o.a(this.f54648e, hVar.f54648e) || !hf.o.a(Integer.valueOf(this.f54649i), Integer.valueOf(hVar.f54649i))) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f54647d, this.f54648e, Integer.valueOf(this.f54649i));
    }

    public String toString() {
        com.google.android.gms.internal.fido.f0 a10 = com.google.android.gms.internal.fido.h0.a(this);
        a10.a("errorCode", this.f54647d.a());
        String str = this.f54648e;
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
        jf.c.l(parcel, 4, this.f54649i);
        jf.c.b(parcel, a10);
    }
}
