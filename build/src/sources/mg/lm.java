package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lm extends hf.a {
    public static final Parcelable.Creator<lm> CREATOR = new mm();

    /* renamed from: d  reason: collision with root package name */
    private final int f37912d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37913e;

    /* renamed from: i  reason: collision with root package name */
    private final int f37914i;

    /* renamed from: o  reason: collision with root package name */
    private final int f37915o;

    /* renamed from: p  reason: collision with root package name */
    private final long f37916p;

    public lm(int i10, int i11, int i12, int i13, long j10) {
        this.f37912d = i10;
        this.f37913e = i11;
        this.f37914i = i12;
        this.f37915o = i13;
        this.f37916p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f37912d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f37913e);
        hf.c.l(parcel, 3, this.f37914i);
        hf.c.l(parcel, 4, this.f37915o);
        hf.c.o(parcel, 5, this.f37916p);
        hf.c.b(parcel, a10);
    }
}
