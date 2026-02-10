package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends jf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f45871d;

    /* renamed from: e  reason: collision with root package name */
    private final int f45872e;

    /* renamed from: i  reason: collision with root package name */
    private final int f45873i;

    /* renamed from: o  reason: collision with root package name */
    private final int f45874o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f45875p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45876q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f45871d = i10;
        this.f45872e = i11;
        this.f45873i = i12;
        this.f45874o = i13;
        this.f45875p = z10;
        this.f45876q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f45871d);
        jf.c.l(parcel, 2, this.f45872e);
        jf.c.l(parcel, 3, this.f45873i);
        jf.c.l(parcel, 4, this.f45874o);
        jf.c.c(parcel, 5, this.f45875p);
        jf.c.j(parcel, 6, this.f45876q);
        jf.c.b(parcel, a10);
    }
}
