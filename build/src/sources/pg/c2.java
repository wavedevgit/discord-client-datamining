package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c2 extends hf.a {
    public static final Parcelable.Creator<c2> CREATOR = new d3();

    /* renamed from: d  reason: collision with root package name */
    public int f45263d;

    /* renamed from: e  reason: collision with root package name */
    public int f45264e;

    /* renamed from: i  reason: collision with root package name */
    public int f45265i;

    /* renamed from: o  reason: collision with root package name */
    public long f45266o;

    /* renamed from: p  reason: collision with root package name */
    public int f45267p;

    public c2(int i10, int i11, int i12, long j10, int i13) {
        this.f45263d = i10;
        this.f45264e = i11;
        this.f45265i = i12;
        this.f45266o = j10;
        this.f45267p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f45263d);
        hf.c.l(parcel, 3, this.f45264e);
        hf.c.l(parcel, 4, this.f45265i);
        hf.c.o(parcel, 5, this.f45266o);
        hf.c.l(parcel, 6, this.f45267p);
        hf.c.b(parcel, a10);
    }
}
