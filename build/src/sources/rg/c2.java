package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c2 extends jf.a {
    public static final Parcelable.Creator<c2> CREATOR = new d3();

    /* renamed from: d  reason: collision with root package name */
    public int f46602d;

    /* renamed from: e  reason: collision with root package name */
    public int f46603e;

    /* renamed from: i  reason: collision with root package name */
    public int f46604i;

    /* renamed from: o  reason: collision with root package name */
    public long f46605o;

    /* renamed from: p  reason: collision with root package name */
    public int f46606p;

    public c2(int i10, int i11, int i12, long j10, int i13) {
        this.f46602d = i10;
        this.f46603e = i11;
        this.f46604i = i12;
        this.f46605o = j10;
        this.f46606p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f46602d);
        jf.c.l(parcel, 3, this.f46603e);
        jf.c.l(parcel, 4, this.f46604i);
        jf.c.o(parcel, 5, this.f46605o);
        jf.c.l(parcel, 6, this.f46606p);
        jf.c.b(parcel, a10);
    }
}
