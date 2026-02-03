package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends hf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f38306d;

    /* renamed from: e  reason: collision with root package name */
    public int f38307e;

    /* renamed from: i  reason: collision with root package name */
    public int f38308i;

    /* renamed from: o  reason: collision with root package name */
    public long f38309o;

    /* renamed from: p  reason: collision with root package name */
    public int f38310p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f38306d = i10;
        this.f38307e = i11;
        this.f38308i = i12;
        this.f38309o = j10;
        this.f38310p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38306d);
        hf.c.l(parcel, 3, this.f38307e);
        hf.c.l(parcel, 4, this.f38308i);
        hf.c.o(parcel, 5, this.f38309o);
        hf.c.l(parcel, 6, this.f38310p);
        hf.c.b(parcel, a10);
    }
}
