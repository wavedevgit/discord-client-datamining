package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gl extends hf.a {
    public static final Parcelable.Creator<gl> CREATOR = new wl();

    /* renamed from: d  reason: collision with root package name */
    private final int f39842d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39843e;

    /* renamed from: i  reason: collision with root package name */
    private final int f39844i;

    /* renamed from: o  reason: collision with root package name */
    private final int f39845o;

    /* renamed from: p  reason: collision with root package name */
    private final int f39846p;

    /* renamed from: q  reason: collision with root package name */
    private final int f39847q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f39848r;

    /* renamed from: s  reason: collision with root package name */
    private final String f39849s;

    public gl(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f39842d = i10;
        this.f39843e = i11;
        this.f39844i = i12;
        this.f39845o = i13;
        this.f39846p = i14;
        this.f39847q = i15;
        this.f39848r = z10;
        this.f39849s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f39842d);
        hf.c.l(parcel, 2, this.f39843e);
        hf.c.l(parcel, 3, this.f39844i);
        hf.c.l(parcel, 4, this.f39845o);
        hf.c.l(parcel, 5, this.f39846p);
        hf.c.l(parcel, 6, this.f39847q);
        hf.c.c(parcel, 7, this.f39848r);
        hf.c.s(parcel, 8, this.f39849s, false);
        hf.c.b(parcel, a10);
    }
}
