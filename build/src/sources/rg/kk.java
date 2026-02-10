package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kk extends jf.a {
    public static final Parcelable.Creator<kk> CREATOR = new lk();

    /* renamed from: d  reason: collision with root package name */
    private final int f48513d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48514e;

    /* renamed from: i  reason: collision with root package name */
    private final int f48515i;

    /* renamed from: o  reason: collision with root package name */
    private final int f48516o;

    /* renamed from: p  reason: collision with root package name */
    private final long f48517p;

    public kk(int i10, int i11, int i12, int i13, long j10) {
        this.f48513d = i10;
        this.f48514e = i11;
        this.f48515i = i12;
        this.f48516o = i13;
        this.f48517p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f48513d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f48514e);
        jf.c.l(parcel, 3, this.f48515i);
        jf.c.l(parcel, 4, this.f48516o);
        jf.c.o(parcel, 5, this.f48517p);
        jf.c.b(parcel, a10);
    }
}
