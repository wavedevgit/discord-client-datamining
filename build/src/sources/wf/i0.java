package wf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 extends hf.a {
    public static final Parcelable.Creator<i0> CREATOR = new j0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f53706d;

    public i0(boolean z10) {
        this.f53706d = ((Boolean) gf.q.l(Boolean.valueOf(z10))).booleanValue();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof i0) || this.f53706d != ((i0) obj).f53706d) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f53706d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        boolean z10 = this.f53706d;
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, z10);
        hf.c.b(parcel, a10);
    }
}
