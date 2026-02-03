package wf;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.Base64;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.gms.internal.fido.v4;
import java.util.Arrays;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k1 extends hf.a {
    public static final Parcelable.Creator<k1> CREATOR = new l1();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52284d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f52285e;

    public k1(boolean z10, v4 v4Var) {
        this.f52284d = z10;
        this.f52285e = v4Var;
    }

    public final JSONObject b() {
        try {
            JSONObject jSONObject = new JSONObject();
            if (this.f52284d) {
                jSONObject.put(ViewProps.ENABLED, true);
            }
            byte[] c10 = c();
            if (c10 != null) {
                JSONObject jSONObject2 = new JSONObject();
                jSONObject2.put("first", Base64.encodeToString(Arrays.copyOf(c10, 32), 11));
                if (c10.length == 64) {
                    jSONObject2.put("second", Base64.encodeToString(Arrays.copyOfRange(c10, 32, 64), 11));
                }
                jSONObject.put("results", jSONObject2);
            }
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticationExtensionsPrfOutputs to JSON object", e10);
        }
    }

    public final byte[] c() {
        v4 v4Var = this.f52285e;
        if (v4Var == null) {
            return null;
        }
        return v4Var.n();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof k1)) {
            return false;
        }
        k1 k1Var = (k1) obj;
        if (this.f52284d != k1Var.f52284d || !gf.o.a(this.f52285e, k1Var.f52285e)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f52284d), this.f52285e);
    }

    public final String toString() {
        boolean z10;
        byte[] c10 = c();
        StringBuilder sb2 = new StringBuilder();
        sb2.append("AuthenticationExtensionsPrfOutputs{enabled:");
        sb2.append(this.f52284d);
        sb2.append("outputs:");
        if (c10 != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append("}");
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        boolean z10 = this.f52284d;
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, z10);
        hf.c.f(parcel, 2, c(), false);
        hf.c.b(parcel, a10);
    }
}
