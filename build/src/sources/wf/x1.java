package wf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x1 extends hf.a {
    public static final Parcelable.Creator<x1> CREATOR = new f0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52377d;

    public x1(boolean z10) {
        this.f52377d = ((Boolean) gf.q.l(Boolean.valueOf(z10))).booleanValue();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof x1) || this.f52377d != ((x1) obj).f52377d) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f52377d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        boolean z10 = this.f52377d;
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, z10);
        hf.c.b(parcel, a10);
    }
}
