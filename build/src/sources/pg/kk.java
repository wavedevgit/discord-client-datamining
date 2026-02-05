package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kk extends hf.a {
    public static final Parcelable.Creator<kk> CREATOR = new lk();

    /* renamed from: d  reason: collision with root package name */
    private final int f45517d;

    /* renamed from: e  reason: collision with root package name */
    private final int f45518e;

    /* renamed from: i  reason: collision with root package name */
    private final int f45519i;

    /* renamed from: o  reason: collision with root package name */
    private final int f45520o;

    /* renamed from: p  reason: collision with root package name */
    private final long f45521p;

    public kk(int i10, int i11, int i12, int i13, long j10) {
        this.f45517d = i10;
        this.f45518e = i11;
        this.f45519i = i12;
        this.f45520o = i13;
        this.f45521p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f45517d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f45518e);
        hf.c.l(parcel, 3, this.f45519i);
        hf.c.l(parcel, 4, this.f45520o);
        hf.c.o(parcel, 5, this.f45521p);
        hf.c.b(parcel, a10);
    }
}
