package hf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends jf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f27859d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27860e;

    /* renamed from: i  reason: collision with root package name */
    private final int f27861i;

    /* renamed from: o  reason: collision with root package name */
    private final long f27862o;

    /* renamed from: p  reason: collision with root package name */
    private final long f27863p;

    /* renamed from: q  reason: collision with root package name */
    private final String f27864q;

    /* renamed from: r  reason: collision with root package name */
    private final String f27865r;

    /* renamed from: s  reason: collision with root package name */
    private final int f27866s;

    /* renamed from: t  reason: collision with root package name */
    private final int f27867t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f27859d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f27860e);
        jf.c.l(parcel, 3, this.f27861i);
        jf.c.o(parcel, 4, this.f27862o);
        jf.c.o(parcel, 5, this.f27863p);
        jf.c.s(parcel, 6, this.f27864q, false);
        jf.c.s(parcel, 7, this.f27865r, false);
        jf.c.l(parcel, 8, this.f27866s);
        jf.c.l(parcel, 9, this.f27867t);
        jf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f27859d = i10;
        this.f27860e = i11;
        this.f27861i = i12;
        this.f27862o = j10;
        this.f27863p = j11;
        this.f27864q = str;
        this.f27865r = str2;
        this.f27866s = i13;
        this.f27867t = i14;
    }
}
