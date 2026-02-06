package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends hf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new w1();

    /* renamed from: d  reason: collision with root package name */
    private final String f53743d;

    public n(String str) {
        this.f53743d = (String) gf.q.l(str);
    }

    public String b() {
        return this.f53743d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof n)) {
            return false;
        }
        return this.f53743d.equals(((n) obj).f53743d);
    }

    public int hashCode() {
        return gf.o.b(this.f53743d);
    }

    public final String toString() {
        return "FidoAppIdExtension{appid='" + this.f53743d + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, b(), false);
        hf.c.b(parcel, a10);
    }
}
