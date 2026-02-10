package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x1 extends jf.a {
    public static final Parcelable.Creator<x1> CREATOR = new f0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55024d;

    public x1(boolean z10) {
        this.f55024d = ((Boolean) hf.q.l(Boolean.valueOf(z10))).booleanValue();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof x1) || this.f55024d != ((x1) obj).f55024d) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f55024d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        boolean z10 = this.f55024d;
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, z10);
        jf.c.b(parcel, a10);
    }
}
