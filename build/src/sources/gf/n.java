package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends hf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f26943d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26944e;

    /* renamed from: i  reason: collision with root package name */
    private final int f26945i;

    /* renamed from: o  reason: collision with root package name */
    private final long f26946o;

    /* renamed from: p  reason: collision with root package name */
    private final long f26947p;

    /* renamed from: q  reason: collision with root package name */
    private final String f26948q;

    /* renamed from: r  reason: collision with root package name */
    private final String f26949r;

    /* renamed from: s  reason: collision with root package name */
    private final int f26950s;

    /* renamed from: t  reason: collision with root package name */
    private final int f26951t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f26943d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f26944e);
        hf.c.l(parcel, 3, this.f26945i);
        hf.c.o(parcel, 4, this.f26946o);
        hf.c.o(parcel, 5, this.f26947p);
        hf.c.s(parcel, 6, this.f26948q, false);
        hf.c.s(parcel, 7, this.f26949r, false);
        hf.c.l(parcel, 8, this.f26950s);
        hf.c.l(parcel, 9, this.f26951t);
        hf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f26943d = i10;
        this.f26944e = i11;
        this.f26945i = i12;
        this.f26946o = j10;
        this.f26947p = j11;
        this.f26948q = str;
        this.f26949r = str2;
        this.f26950s = i13;
        this.f26951t = i14;
    }
}
