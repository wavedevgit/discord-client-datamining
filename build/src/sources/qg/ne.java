package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ne extends jf.a {
    public static final Parcelable.Creator<ne> CREATOR = new se();

    /* renamed from: d  reason: collision with root package name */
    public int f44760d;

    /* renamed from: e  reason: collision with root package name */
    public int f44761e;

    /* renamed from: i  reason: collision with root package name */
    public int f44762i;

    /* renamed from: o  reason: collision with root package name */
    public long f44763o;

    /* renamed from: p  reason: collision with root package name */
    public int f44764p;

    public ne(int i10, int i11, int i12, long j10, int i13) {
        this.f44760d = i10;
        this.f44761e = i11;
        this.f44762i = i12;
        this.f44763o = j10;
        this.f44764p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f44760d);
        jf.c.l(parcel, 3, this.f44761e);
        jf.c.l(parcel, 4, this.f44762i);
        jf.c.o(parcel, 5, this.f44763o);
        jf.c.l(parcel, 6, this.f44764p);
        jf.c.b(parcel, a10);
    }
}
