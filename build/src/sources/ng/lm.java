package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lm extends hf.a {
    public static final Parcelable.Creator<lm> CREATOR = new mm();

    /* renamed from: d  reason: collision with root package name */
    private final int f40075d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40076e;

    /* renamed from: i  reason: collision with root package name */
    private final int f40077i;

    /* renamed from: o  reason: collision with root package name */
    private final int f40078o;

    /* renamed from: p  reason: collision with root package name */
    private final long f40079p;

    public lm(int i10, int i11, int i12, int i13, long j10) {
        this.f40075d = i10;
        this.f40076e = i11;
        this.f40077i = i12;
        this.f40078o = i13;
        this.f40079p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f40075d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f40076e);
        hf.c.l(parcel, 3, this.f40077i);
        hf.c.l(parcel, 4, this.f40078o);
        hf.c.o(parcel, 5, this.f40079p);
        hf.c.b(parcel, a10);
    }
}
