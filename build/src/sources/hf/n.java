package hf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends jf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f27291d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27292e;

    /* renamed from: i  reason: collision with root package name */
    private final int f27293i;

    /* renamed from: o  reason: collision with root package name */
    private final long f27294o;

    /* renamed from: p  reason: collision with root package name */
    private final long f27295p;

    /* renamed from: q  reason: collision with root package name */
    private final String f27296q;

    /* renamed from: r  reason: collision with root package name */
    private final String f27297r;

    /* renamed from: s  reason: collision with root package name */
    private final int f27298s;

    /* renamed from: t  reason: collision with root package name */
    private final int f27299t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f27291d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f27292e);
        jf.c.l(parcel, 3, this.f27293i);
        jf.c.o(parcel, 4, this.f27294o);
        jf.c.o(parcel, 5, this.f27295p);
        jf.c.s(parcel, 6, this.f27296q, false);
        jf.c.s(parcel, 7, this.f27297r, false);
        jf.c.l(parcel, 8, this.f27298s);
        jf.c.l(parcel, 9, this.f27299t);
        jf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f27291d = i10;
        this.f27292e = i11;
        this.f27293i = i12;
        this.f27294o = j10;
        this.f27295p = j11;
        this.f27296q = str;
        this.f27297r = str2;
        this.f27298s = i13;
        this.f27299t = i14;
    }
}
