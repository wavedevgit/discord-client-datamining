package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ne extends jf.a {
    public static final Parcelable.Creator<ne> CREATOR = new se();

    /* renamed from: d  reason: collision with root package name */
    public int f44759d;

    /* renamed from: e  reason: collision with root package name */
    public int f44760e;

    /* renamed from: i  reason: collision with root package name */
    public int f44761i;

    /* renamed from: o  reason: collision with root package name */
    public long f44762o;

    /* renamed from: p  reason: collision with root package name */
    public int f44763p;

    public ne(int i10, int i11, int i12, long j10, int i13) {
        this.f44759d = i10;
        this.f44760e = i11;
        this.f44761i = i12;
        this.f44762o = j10;
        this.f44763p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f44759d);
        jf.c.l(parcel, 3, this.f44760e);
        jf.c.l(parcel, 4, this.f44761i);
        jf.c.o(parcel, 5, this.f44762o);
        jf.c.l(parcel, 6, this.f44763p);
        jf.c.b(parcel, a10);
    }
}
