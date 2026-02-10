package hf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends jf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f26072d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26073e;

    /* renamed from: i  reason: collision with root package name */
    private final int f26074i;

    /* renamed from: o  reason: collision with root package name */
    private final long f26075o;

    /* renamed from: p  reason: collision with root package name */
    private final long f26076p;

    /* renamed from: q  reason: collision with root package name */
    private final String f26077q;

    /* renamed from: r  reason: collision with root package name */
    private final String f26078r;

    /* renamed from: s  reason: collision with root package name */
    private final int f26079s;

    /* renamed from: t  reason: collision with root package name */
    private final int f26080t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f26072d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f26073e);
        jf.c.l(parcel, 3, this.f26074i);
        jf.c.o(parcel, 4, this.f26075o);
        jf.c.o(parcel, 5, this.f26076p);
        jf.c.s(parcel, 6, this.f26077q, false);
        jf.c.s(parcel, 7, this.f26078r, false);
        jf.c.l(parcel, 8, this.f26079s);
        jf.c.l(parcel, 9, this.f26080t);
        jf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f26072d = i10;
        this.f26073e = i11;
        this.f26074i = i12;
        this.f26075o = j10;
        this.f26076p = j11;
        this.f26077q = str;
        this.f26078r = str2;
        this.f26079s = i13;
        this.f26080t = i14;
    }
}
