package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kk extends hf.a {
    public static final Parcelable.Creator<kk> CREATOR = new lk();

    /* renamed from: d  reason: collision with root package name */
    private final int f47395d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47396e;

    /* renamed from: i  reason: collision with root package name */
    private final int f47397i;

    /* renamed from: o  reason: collision with root package name */
    private final int f47398o;

    /* renamed from: p  reason: collision with root package name */
    private final long f47399p;

    public kk(int i10, int i11, int i12, int i13, long j10) {
        this.f47395d = i10;
        this.f47396e = i11;
        this.f47397i = i12;
        this.f47398o = i13;
        this.f47399p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f47395d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f47396e);
        hf.c.l(parcel, 3, this.f47397i);
        hf.c.l(parcel, 4, this.f47398o);
        hf.c.o(parcel, 5, this.f47399p);
        hf.c.b(parcel, a10);
    }
}
