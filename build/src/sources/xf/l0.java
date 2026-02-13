package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends jf.a {
    public static final Parcelable.Creator<l0> CREATOR = new m0();

    /* renamed from: d  reason: collision with root package name */
    private final String f55240d;

    public l0(String str) {
        this.f55240d = (String) hf.q.l(str);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof l0)) {
            return false;
        }
        return this.f55240d.equals(((l0) obj).f55240d);
    }

    public final int hashCode() {
        return hf.o.b(this.f55240d);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f55240d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.b(parcel, a10);
    }
}
