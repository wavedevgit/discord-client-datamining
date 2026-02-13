package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends jf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f40099d;

    /* renamed from: e  reason: collision with root package name */
    public int f40100e;

    /* renamed from: i  reason: collision with root package name */
    public int f40101i;

    /* renamed from: o  reason: collision with root package name */
    public long f40102o;

    /* renamed from: p  reason: collision with root package name */
    public int f40103p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f40099d = i10;
        this.f40100e = i11;
        this.f40101i = i12;
        this.f40102o = j10;
        this.f40103p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f40099d);
        jf.c.l(parcel, 3, this.f40100e);
        jf.c.l(parcel, 4, this.f40101i);
        jf.c.o(parcel, 5, this.f40102o);
        jf.c.l(parcel, 6, this.f40103p);
        jf.c.b(parcel, a10);
    }
}
