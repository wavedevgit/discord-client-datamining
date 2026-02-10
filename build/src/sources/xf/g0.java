package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 extends jf.a {
    public static final Parcelable.Creator<g0> CREATOR = new h0();

    /* renamed from: d  reason: collision with root package name */
    private final long f54645d;

    public g0(long j10) {
        this.f54645d = ((Long) hf.q.l(Long.valueOf(j10))).longValue();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof g0) || this.f54645d != ((g0) obj).f54645d) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(Long.valueOf(this.f54645d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f54645d;
        int a10 = jf.c.a(parcel);
        jf.c.o(parcel, 1, j10);
        jf.c.b(parcel, a10);
    }
}
