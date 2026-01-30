package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gl extends hf.a {
    public static final Parcelable.Creator<gl> CREATOR = new wl();

    /* renamed from: d  reason: collision with root package name */
    private final int f38240d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38241e;

    /* renamed from: i  reason: collision with root package name */
    private final int f38242i;

    /* renamed from: o  reason: collision with root package name */
    private final int f38243o;

    /* renamed from: p  reason: collision with root package name */
    private final int f38244p;

    /* renamed from: q  reason: collision with root package name */
    private final int f38245q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f38246r;

    /* renamed from: s  reason: collision with root package name */
    private final String f38247s;

    public gl(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f38240d = i10;
        this.f38241e = i11;
        this.f38242i = i12;
        this.f38243o = i13;
        this.f38244p = i14;
        this.f38245q = i15;
        this.f38246r = z10;
        this.f38247s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38240d);
        hf.c.l(parcel, 2, this.f38241e);
        hf.c.l(parcel, 3, this.f38242i);
        hf.c.l(parcel, 4, this.f38243o);
        hf.c.l(parcel, 5, this.f38244p);
        hf.c.l(parcel, 6, this.f38245q);
        hf.c.c(parcel, 7, this.f38246r);
        hf.c.s(parcel, 8, this.f38247s, false);
        hf.c.b(parcel, a10);
    }
}
