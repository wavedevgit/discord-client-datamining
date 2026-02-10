package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends jf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f44539d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44540e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44541i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44542o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f44543p;

    /* renamed from: q  reason: collision with root package name */
    private final float f44544q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f44539d = i10;
        this.f44540e = i11;
        this.f44541i = i12;
        this.f44542o = i13;
        this.f44543p = z10;
        this.f44544q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f44539d);
        jf.c.l(parcel, 2, this.f44540e);
        jf.c.l(parcel, 3, this.f44541i);
        jf.c.l(parcel, 4, this.f44542o);
        jf.c.c(parcel, 5, this.f44543p);
        jf.c.j(parcel, 6, this.f44544q);
        jf.c.b(parcel, a10);
    }
}
