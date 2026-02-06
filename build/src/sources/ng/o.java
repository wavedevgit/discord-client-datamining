package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends hf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f40131d;

    /* renamed from: e  reason: collision with root package name */
    public int f40132e;

    /* renamed from: i  reason: collision with root package name */
    public int f40133i;

    /* renamed from: o  reason: collision with root package name */
    public long f40134o;

    /* renamed from: p  reason: collision with root package name */
    public int f40135p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f40131d = i10;
        this.f40132e = i11;
        this.f40133i = i12;
        this.f40134o = j10;
        this.f40135p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f40131d);
        hf.c.l(parcel, 3, this.f40132e);
        hf.c.l(parcel, 4, this.f40133i);
        hf.c.o(parcel, 5, this.f40134o);
        hf.c.l(parcel, 6, this.f40135p);
        hf.c.b(parcel, a10);
    }
}
