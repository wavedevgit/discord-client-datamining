package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kk extends jf.a {
    public static final Parcelable.Creator<kk> CREATOR = new lk();

    /* renamed from: d  reason: collision with root package name */
    private final int f47536d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47537e;

    /* renamed from: i  reason: collision with root package name */
    private final int f47538i;

    /* renamed from: o  reason: collision with root package name */
    private final int f47539o;

    /* renamed from: p  reason: collision with root package name */
    private final long f47540p;

    public kk(int i10, int i11, int i12, int i13, long j10) {
        this.f47536d = i10;
        this.f47537e = i11;
        this.f47538i = i12;
        this.f47539o = i13;
        this.f47540p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f47536d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f47537e);
        jf.c.l(parcel, 3, this.f47538i);
        jf.c.l(parcel, 4, this.f47539o);
        jf.c.o(parcel, 5, this.f47540p);
        jf.c.b(parcel, a10);
    }
}
