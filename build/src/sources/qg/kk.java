package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kk extends hf.a {
    public static final Parcelable.Creator<kk> CREATOR = new lk();

    /* renamed from: d  reason: collision with root package name */
    private final int f47347d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47348e;

    /* renamed from: i  reason: collision with root package name */
    private final int f47349i;

    /* renamed from: o  reason: collision with root package name */
    private final int f47350o;

    /* renamed from: p  reason: collision with root package name */
    private final long f47351p;

    public kk(int i10, int i11, int i12, int i13, long j10) {
        this.f47347d = i10;
        this.f47348e = i11;
        this.f47349i = i12;
        this.f47350o = i13;
        this.f47351p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f47347d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f47348e);
        hf.c.l(parcel, 3, this.f47349i);
        hf.c.l(parcel, 4, this.f47350o);
        hf.c.o(parcel, 5, this.f47351p);
        hf.c.b(parcel, a10);
    }
}
