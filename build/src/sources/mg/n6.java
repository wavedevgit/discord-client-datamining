package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends hf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f37940d;

    /* renamed from: e  reason: collision with root package name */
    public int f37941e;

    /* renamed from: i  reason: collision with root package name */
    public int f37942i;

    /* renamed from: o  reason: collision with root package name */
    public int f37943o;

    /* renamed from: p  reason: collision with root package name */
    public int f37944p;

    /* renamed from: q  reason: collision with root package name */
    public int f37945q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f37946r;

    /* renamed from: s  reason: collision with root package name */
    public String f37947s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f37940d = i10;
        this.f37941e = i11;
        this.f37942i = i12;
        this.f37943o = i13;
        this.f37944p = i14;
        this.f37945q = i15;
        this.f37946r = z10;
        this.f37947s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f37940d);
        hf.c.l(parcel, 3, this.f37941e);
        hf.c.l(parcel, 4, this.f37942i);
        hf.c.l(parcel, 5, this.f37943o);
        hf.c.l(parcel, 6, this.f37944p);
        hf.c.l(parcel, 7, this.f37945q);
        hf.c.c(parcel, 8, this.f37946r);
        hf.c.s(parcel, 9, this.f37947s, false);
        hf.c.b(parcel, a10);
    }
}
