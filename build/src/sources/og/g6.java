package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends hf.a {
    public static final Parcelable.Creator<g6> CREATOR = new h7();

    /* renamed from: d  reason: collision with root package name */
    public int f43070d;

    /* renamed from: e  reason: collision with root package name */
    public int f43071e;

    /* renamed from: i  reason: collision with root package name */
    public int f43072i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f43073o;

    /* renamed from: p  reason: collision with root package name */
    public boolean f43074p;

    /* renamed from: q  reason: collision with root package name */
    public float f43075q;

    public g6(int i10, int i11, int i12, boolean z10, boolean z11, float f10) {
        this.f43070d = i10;
        this.f43071e = i11;
        this.f43072i = i12;
        this.f43073o = z10;
        this.f43074p = z11;
        this.f43075q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f43070d);
        hf.c.l(parcel, 3, this.f43071e);
        hf.c.l(parcel, 4, this.f43072i);
        hf.c.c(parcel, 5, this.f43073o);
        hf.c.c(parcel, 6, this.f43074p);
        hf.c.j(parcel, 7, this.f43075q);
        hf.c.b(parcel, a10);
    }
}
