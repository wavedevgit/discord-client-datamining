package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends hf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new h1();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52470d;

    public e(boolean z10) {
        this.f52470d = z10;
    }

    public boolean b() {
        return this.f52470d;
    }

    public final JSONObject c() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("rk", this.f52470d);
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticationExtensionsCredPropsOutputs to JSON object", e10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof e) || this.f52470d != ((e) obj).f52470d) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f52470d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, b());
        hf.c.b(parcel, a10);
    }
}
