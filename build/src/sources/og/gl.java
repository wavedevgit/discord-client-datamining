package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gl extends jf.a {
    public static final Parcelable.Creator<gl> CREATOR = new wl();

    /* renamed from: d  reason: collision with root package name */
    private final int f40915d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40916e;

    /* renamed from: i  reason: collision with root package name */
    private final int f40917i;

    /* renamed from: o  reason: collision with root package name */
    private final int f40918o;

    /* renamed from: p  reason: collision with root package name */
    private final int f40919p;

    /* renamed from: q  reason: collision with root package name */
    private final int f40920q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f40921r;

    /* renamed from: s  reason: collision with root package name */
    private final String f40922s;

    public gl(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f40915d = i10;
        this.f40916e = i11;
        this.f40917i = i12;
        this.f40918o = i13;
        this.f40919p = i14;
        this.f40920q = i15;
        this.f40921r = z10;
        this.f40922s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f40915d);
        jf.c.l(parcel, 2, this.f40916e);
        jf.c.l(parcel, 3, this.f40917i);
        jf.c.l(parcel, 4, this.f40918o);
        jf.c.l(parcel, 5, this.f40919p);
        jf.c.l(parcel, 6, this.f40920q);
        jf.c.c(parcel, 7, this.f40921r);
        jf.c.s(parcel, 8, this.f40922s, false);
        jf.c.b(parcel, a10);
    }
}
