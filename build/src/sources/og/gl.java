package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gl extends jf.a {
    public static final Parcelable.Creator<gl> CREATOR = new wl();

    /* renamed from: d  reason: collision with root package name */
    private final int f39810d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39811e;

    /* renamed from: i  reason: collision with root package name */
    private final int f39812i;

    /* renamed from: o  reason: collision with root package name */
    private final int f39813o;

    /* renamed from: p  reason: collision with root package name */
    private final int f39814p;

    /* renamed from: q  reason: collision with root package name */
    private final int f39815q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f39816r;

    /* renamed from: s  reason: collision with root package name */
    private final String f39817s;

    public gl(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f39810d = i10;
        this.f39811e = i11;
        this.f39812i = i12;
        this.f39813o = i13;
        this.f39814p = i14;
        this.f39815q = i15;
        this.f39816r = z10;
        this.f39817s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f39810d);
        jf.c.l(parcel, 2, this.f39811e);
        jf.c.l(parcel, 3, this.f39812i);
        jf.c.l(parcel, 4, this.f39813o);
        jf.c.l(parcel, 5, this.f39814p);
        jf.c.l(parcel, 6, this.f39815q);
        jf.c.c(parcel, 7, this.f39816r);
        jf.c.s(parcel, 8, this.f39817s, false);
        jf.c.b(parcel, a10);
    }
}
