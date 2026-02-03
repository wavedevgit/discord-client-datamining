package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kk extends hf.a {
    public static final Parcelable.Creator<kk> CREATOR = new lk();

    /* renamed from: d  reason: collision with root package name */
    private final int f45629d;

    /* renamed from: e  reason: collision with root package name */
    private final int f45630e;

    /* renamed from: i  reason: collision with root package name */
    private final int f45631i;

    /* renamed from: o  reason: collision with root package name */
    private final int f45632o;

    /* renamed from: p  reason: collision with root package name */
    private final long f45633p;

    public kk(int i10, int i11, int i12, int i13, long j10) {
        this.f45629d = i10;
        this.f45630e = i11;
        this.f45631i = i12;
        this.f45632o = i13;
        this.f45633p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f45629d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f45630e);
        hf.c.l(parcel, 3, this.f45631i);
        hf.c.l(parcel, 4, this.f45632o);
        hf.c.o(parcel, 5, this.f45633p);
        hf.c.b(parcel, a10);
    }
}
