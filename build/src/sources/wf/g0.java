package wf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 extends hf.a {
    public static final Parcelable.Creator<g0> CREATOR = new h0();

    /* renamed from: d  reason: collision with root package name */
    private final long f52269d;

    public g0(long j10) {
        this.f52269d = ((Long) gf.q.l(Long.valueOf(j10))).longValue();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof g0) || this.f52269d != ((g0) obj).f52269d) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(Long.valueOf(this.f52269d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f52269d;
        int a10 = hf.c.a(parcel);
        hf.c.o(parcel, 1, j10);
        hf.c.b(parcel, a10);
    }
}
