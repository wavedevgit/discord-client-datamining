package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ne extends jf.a {
    public static final Parcelable.Creator<ne> CREATOR = new se();

    /* renamed from: d  reason: collision with root package name */
    public int f46091d;

    /* renamed from: e  reason: collision with root package name */
    public int f46092e;

    /* renamed from: i  reason: collision with root package name */
    public int f46093i;

    /* renamed from: o  reason: collision with root package name */
    public long f46094o;

    /* renamed from: p  reason: collision with root package name */
    public int f46095p;

    public ne(int i10, int i11, int i12, long j10, int i13) {
        this.f46091d = i10;
        this.f46092e = i11;
        this.f46093i = i12;
        this.f46094o = j10;
        this.f46095p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f46091d);
        jf.c.l(parcel, 3, this.f46092e);
        jf.c.l(parcel, 4, this.f46093i);
        jf.c.o(parcel, 5, this.f46094o);
        jf.c.l(parcel, 6, this.f46095p);
        jf.c.b(parcel, a10);
    }
}
