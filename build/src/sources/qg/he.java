package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends jf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f45108d;

    /* renamed from: e  reason: collision with root package name */
    private final int f45109e;

    /* renamed from: i  reason: collision with root package name */
    private final int f45110i;

    /* renamed from: o  reason: collision with root package name */
    private final int f45111o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f45112p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45113q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f45108d = i10;
        this.f45109e = i11;
        this.f45110i = i12;
        this.f45111o = i13;
        this.f45112p = z10;
        this.f45113q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f45108d);
        jf.c.l(parcel, 2, this.f45109e);
        jf.c.l(parcel, 3, this.f45110i);
        jf.c.l(parcel, 4, this.f45111o);
        jf.c.c(parcel, 5, this.f45112p);
        jf.c.j(parcel, 6, this.f45113q);
        jf.c.b(parcel, a10);
    }
}
