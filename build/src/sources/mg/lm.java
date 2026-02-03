package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lm extends hf.a {
    public static final Parcelable.Creator<lm> CREATOR = new mm();

    /* renamed from: d  reason: collision with root package name */
    private final int f38453d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38454e;

    /* renamed from: i  reason: collision with root package name */
    private final int f38455i;

    /* renamed from: o  reason: collision with root package name */
    private final int f38456o;

    /* renamed from: p  reason: collision with root package name */
    private final long f38457p;

    public lm(int i10, int i11, int i12, int i13, long j10) {
        this.f38453d = i10;
        this.f38454e = i11;
        this.f38455i = i12;
        this.f38456o = i13;
        this.f38457p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f38453d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f38454e);
        hf.c.l(parcel, 3, this.f38455i);
        hf.c.l(parcel, 4, this.f38456o);
        hf.c.o(parcel, 5, this.f38457p);
        hf.c.b(parcel, a10);
    }
}
