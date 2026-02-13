package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends jf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new h1();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55204d;

    public e(boolean z10) {
        this.f55204d = z10;
    }

    public boolean b() {
        return this.f55204d;
    }

    public final JSONObject c() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("rk", this.f55204d);
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticationExtensionsCredPropsOutputs to JSON object", e10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof e) || this.f55204d != ((e) obj).f55204d) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f55204d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, b());
        jf.c.b(parcel, a10);
    }
}
