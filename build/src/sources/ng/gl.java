package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gl extends hf.a {
    public static final Parcelable.Creator<gl> CREATOR = new wl();

    /* renamed from: d  reason: collision with root package name */
    private final int f39890d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39891e;

    /* renamed from: i  reason: collision with root package name */
    private final int f39892i;

    /* renamed from: o  reason: collision with root package name */
    private final int f39893o;

    /* renamed from: p  reason: collision with root package name */
    private final int f39894p;

    /* renamed from: q  reason: collision with root package name */
    private final int f39895q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f39896r;

    /* renamed from: s  reason: collision with root package name */
    private final String f39897s;

    public gl(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f39890d = i10;
        this.f39891e = i11;
        this.f39892i = i12;
        this.f39893o = i13;
        this.f39894p = i14;
        this.f39895q = i15;
        this.f39896r = z10;
        this.f39897s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f39890d);
        hf.c.l(parcel, 2, this.f39891e);
        hf.c.l(parcel, 3, this.f39892i);
        hf.c.l(parcel, 4, this.f39893o);
        hf.c.l(parcel, 5, this.f39894p);
        hf.c.l(parcel, 6, this.f39895q);
        hf.c.c(parcel, 7, this.f39896r);
        hf.c.s(parcel, 8, this.f39897s, false);
        hf.c.b(parcel, a10);
    }
}
