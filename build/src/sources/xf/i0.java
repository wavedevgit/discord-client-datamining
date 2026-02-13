package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 extends jf.a {
    public static final Parcelable.Creator<i0> CREATOR = new j0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55218d;

    public i0(boolean z10) {
        this.f55218d = ((Boolean) hf.q.l(Boolean.valueOf(z10))).booleanValue();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof i0) || this.f55218d != ((i0) obj).f55218d) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f55218d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        boolean z10 = this.f55218d;
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, z10);
        jf.c.b(parcel, a10);
    }
}
