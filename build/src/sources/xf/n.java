package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends jf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new w1();

    /* renamed from: d  reason: collision with root package name */
    private final String f54954d;

    public n(String str) {
        this.f54954d = (String) hf.q.l(str);
    }

    public String b() {
        return this.f54954d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof n)) {
            return false;
        }
        return this.f54954d.equals(((n) obj).f54954d);
    }

    public int hashCode() {
        return hf.o.b(this.f54954d);
    }

    public final String toString() {
        return "FidoAppIdExtension{appid='" + this.f54954d + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, b(), false);
        jf.c.b(parcel, a10);
    }
}
