package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gl extends hf.a {
    public static final Parcelable.Creator<gl> CREATOR = new wl();

    /* renamed from: d  reason: collision with root package name */
    private final int f37679d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37680e;

    /* renamed from: i  reason: collision with root package name */
    private final int f37681i;

    /* renamed from: o  reason: collision with root package name */
    private final int f37682o;

    /* renamed from: p  reason: collision with root package name */
    private final int f37683p;

    /* renamed from: q  reason: collision with root package name */
    private final int f37684q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f37685r;

    /* renamed from: s  reason: collision with root package name */
    private final String f37686s;

    public gl(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f37679d = i10;
        this.f37680e = i11;
        this.f37681i = i12;
        this.f37682o = i13;
        this.f37683p = i14;
        this.f37684q = i15;
        this.f37685r = z10;
        this.f37686s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f37679d);
        hf.c.l(parcel, 2, this.f37680e);
        hf.c.l(parcel, 3, this.f37681i);
        hf.c.l(parcel, 4, this.f37682o);
        hf.c.l(parcel, 5, this.f37683p);
        hf.c.l(parcel, 6, this.f37684q);
        hf.c.c(parcel, 7, this.f37685r);
        hf.c.s(parcel, 8, this.f37686s, false);
        hf.c.b(parcel, a10);
    }
}
