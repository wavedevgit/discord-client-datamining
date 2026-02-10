package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends jf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f39530d;

    /* renamed from: e  reason: collision with root package name */
    public int f39531e;

    /* renamed from: i  reason: collision with root package name */
    public int f39532i;

    /* renamed from: o  reason: collision with root package name */
    public long f39533o;

    /* renamed from: p  reason: collision with root package name */
    public int f39534p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f39530d = i10;
        this.f39531e = i11;
        this.f39532i = i12;
        this.f39533o = j10;
        this.f39534p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f39530d);
        jf.c.l(parcel, 3, this.f39531e);
        jf.c.l(parcel, 4, this.f39532i);
        jf.c.o(parcel, 5, this.f39533o);
        jf.c.l(parcel, 6, this.f39534p);
        jf.c.b(parcel, a10);
    }
}
