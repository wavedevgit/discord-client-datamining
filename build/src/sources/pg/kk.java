package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kk extends hf.a {
    public static final Parcelable.Creator<kk> CREATOR = new lk();

    /* renamed from: d  reason: collision with root package name */
    private final int f45539d;

    /* renamed from: e  reason: collision with root package name */
    private final int f45540e;

    /* renamed from: i  reason: collision with root package name */
    private final int f45541i;

    /* renamed from: o  reason: collision with root package name */
    private final int f45542o;

    /* renamed from: p  reason: collision with root package name */
    private final long f45543p;

    public kk(int i10, int i11, int i12, int i13, long j10) {
        this.f45539d = i10;
        this.f45540e = i11;
        this.f45541i = i12;
        this.f45542o = i13;
        this.f45543p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f45539d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f45540e);
        hf.c.l(parcel, 3, this.f45541i);
        hf.c.l(parcel, 4, this.f45542o);
        hf.c.o(parcel, 5, this.f45543p);
        hf.c.b(parcel, a10);
    }
}
