package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends hf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f40179d;

    /* renamed from: e  reason: collision with root package name */
    public int f40180e;

    /* renamed from: i  reason: collision with root package name */
    public int f40181i;

    /* renamed from: o  reason: collision with root package name */
    public long f40182o;

    /* renamed from: p  reason: collision with root package name */
    public int f40183p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f40179d = i10;
        this.f40180e = i11;
        this.f40181i = i12;
        this.f40182o = j10;
        this.f40183p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f40179d);
        hf.c.l(parcel, 3, this.f40180e);
        hf.c.l(parcel, 4, this.f40181i);
        hf.c.o(parcel, 5, this.f40182o);
        hf.c.l(parcel, 6, this.f40183p);
        hf.c.b(parcel, a10);
    }
}
