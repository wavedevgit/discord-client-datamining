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
    private final m f54914d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54915e;

    /* renamed from: i  reason: collision with root package name */
    private final int f54916i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(int i10, String str, int i11) {
        try {
            this.f54914d = m.d(i10);
            this.f54915e = str;
            this.f54916i = i11;
        } catch (m.a e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public m b() {
        return this.f54914d;
    }

    public int c() {
        return this.f54914d.a();
    }

    public String d() {
        return this.f54915e;
    }

    public final JSONObject e() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("code", this.f54914d.a());
            String str = this.f54915e;
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
        if (!hf.o.a(this.f54914d, hVar.f54914d) || !hf.o.a(this.f54915e, hVar.f54915e) || !hf.o.a(Integer.valueOf(this.f54916i), Integer.valueOf(hVar.f54916i))) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f54914d, this.f54915e, Integer.valueOf(this.f54916i));
    }

    public String toString() {
        com.google.android.gms.internal.fido.f0 a10 = com.google.android.gms.internal.fido.h0.a(this);
        a10.a("errorCode", this.f54914d.a());
        String str = this.f54915e;
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
        jf.c.l(parcel, 4, this.f54916i);
        jf.c.b(parcel, a10);
    }
}
