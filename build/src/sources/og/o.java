package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends jf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f41204d;

    /* renamed from: e  reason: collision with root package name */
    public int f41205e;

    /* renamed from: i  reason: collision with root package name */
    public int f41206i;

    /* renamed from: o  reason: collision with root package name */
    public long f41207o;

    /* renamed from: p  reason: collision with root package name */
    public int f41208p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f41204d = i10;
        this.f41205e = i11;
        this.f41206i = i12;
        this.f41207o = j10;
        this.f41208p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f41204d);
        jf.c.l(parcel, 3, this.f41205e);
        jf.c.l(parcel, 4, this.f41206i);
        jf.c.o(parcel, 5, this.f41207o);
        jf.c.l(parcel, 6, this.f41208p);
        jf.c.b(parcel, a10);
    }
}
