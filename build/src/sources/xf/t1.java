package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t1 extends jf.a {
    public static final Parcelable.Creator<t1> CREATOR = new u1();

    public t1(boolean z10) {
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof t1)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(Boolean.FALSE);
    }

    public final String toString() {
        return "DevicePublicKeyExtension{devicePublicKey=false}";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, false);
        jf.c.b(parcel, a10);
    }
}
