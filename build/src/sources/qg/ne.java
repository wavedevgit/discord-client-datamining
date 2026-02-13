package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ne extends jf.a {
    public static final Parcelable.Creator<ne> CREATOR = new se();

    /* renamed from: d  reason: collision with root package name */
    public int f45328d;

    /* renamed from: e  reason: collision with root package name */
    public int f45329e;

    /* renamed from: i  reason: collision with root package name */
    public int f45330i;

    /* renamed from: o  reason: collision with root package name */
    public long f45331o;

    /* renamed from: p  reason: collision with root package name */
    public int f45332p;

    public ne(int i10, int i11, int i12, long j10, int i13) {
        this.f45328d = i10;
        this.f45329e = i11;
        this.f45330i = i12;
        this.f45331o = j10;
        this.f45332p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f45328d);
        jf.c.l(parcel, 3, this.f45329e);
        jf.c.l(parcel, 4, this.f45330i);
        jf.c.o(parcel, 5, this.f45331o);
        jf.c.l(parcel, 6, this.f45332p);
        jf.c.b(parcel, a10);
    }
}
