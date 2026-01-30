package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ne extends hf.a {
    public static final Parcelable.Creator<ne> CREATOR = new se();

    /* renamed from: d  reason: collision with root package name */
    public int f43353d;

    /* renamed from: e  reason: collision with root package name */
    public int f43354e;

    /* renamed from: i  reason: collision with root package name */
    public int f43355i;

    /* renamed from: o  reason: collision with root package name */
    public long f43356o;

    /* renamed from: p  reason: collision with root package name */
    public int f43357p;

    public ne(int i10, int i11, int i12, long j10, int i13) {
        this.f43353d = i10;
        this.f43354e = i11;
        this.f43355i = i12;
        this.f43356o = j10;
        this.f43357p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f43353d);
        hf.c.l(parcel, 3, this.f43354e);
        hf.c.l(parcel, 4, this.f43355i);
        hf.c.o(parcel, 5, this.f43356o);
        hf.c.l(parcel, 6, this.f43357p);
        hf.c.b(parcel, a10);
    }
}
