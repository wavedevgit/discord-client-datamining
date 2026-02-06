package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c2 extends hf.a {
    public static final Parcelable.Creator<c2> CREATOR = new d3();

    /* renamed from: d  reason: collision with root package name */
    public int f46981d;

    /* renamed from: e  reason: collision with root package name */
    public int f46982e;

    /* renamed from: i  reason: collision with root package name */
    public int f46983i;

    /* renamed from: o  reason: collision with root package name */
    public long f46984o;

    /* renamed from: p  reason: collision with root package name */
    public int f46985p;

    public c2(int i10, int i11, int i12, long j10, int i13) {
        this.f46981d = i10;
        this.f46982e = i11;
        this.f46983i = i12;
        this.f46984o = j10;
        this.f46985p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f46981d);
        hf.c.l(parcel, 3, this.f46982e);
        hf.c.l(parcel, 4, this.f46983i);
        hf.c.o(parcel, 5, this.f46984o);
        hf.c.l(parcel, 6, this.f46985p);
        hf.c.b(parcel, a10);
    }
}
