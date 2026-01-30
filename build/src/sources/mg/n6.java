package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends hf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f38501d;

    /* renamed from: e  reason: collision with root package name */
    public int f38502e;

    /* renamed from: i  reason: collision with root package name */
    public int f38503i;

    /* renamed from: o  reason: collision with root package name */
    public int f38504o;

    /* renamed from: p  reason: collision with root package name */
    public int f38505p;

    /* renamed from: q  reason: collision with root package name */
    public int f38506q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f38507r;

    /* renamed from: s  reason: collision with root package name */
    public String f38508s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f38501d = i10;
        this.f38502e = i11;
        this.f38503i = i12;
        this.f38504o = i13;
        this.f38505p = i14;
        this.f38506q = i15;
        this.f38507r = z10;
        this.f38508s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38501d);
        hf.c.l(parcel, 3, this.f38502e);
        hf.c.l(parcel, 4, this.f38503i);
        hf.c.l(parcel, 5, this.f38504o);
        hf.c.l(parcel, 6, this.f38505p);
        hf.c.l(parcel, 7, this.f38506q);
        hf.c.c(parcel, 8, this.f38507r);
        hf.c.s(parcel, 9, this.f38508s, false);
        hf.c.b(parcel, a10);
    }
}
