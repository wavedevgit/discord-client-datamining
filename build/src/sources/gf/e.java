package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends hf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new h1();

    /* renamed from: d  reason: collision with root package name */
    private final s f26884d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26885e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f26886i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f26887o;

    /* renamed from: p  reason: collision with root package name */
    private final int f26888p;

    /* renamed from: q  reason: collision with root package name */
    private final int[] f26889q;

    public e(s sVar, boolean z10, boolean z11, int[] iArr, int i10, int[] iArr2) {
        this.f26884d = sVar;
        this.f26885e = z10;
        this.f26886i = z11;
        this.f26887o = iArr;
        this.f26888p = i10;
        this.f26889q = iArr2;
    }

    public int b() {
        return this.f26888p;
    }

    public int[] c() {
        return this.f26887o;
    }

    public int[] d() {
        return this.f26889q;
    }

    public boolean e() {
        return this.f26885e;
    }

    public boolean f() {
        return this.f26886i;
    }

    public final s g() {
        return this.f26884d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, this.f26884d, i10, false);
        hf.c.c(parcel, 2, e());
        hf.c.c(parcel, 3, f());
        hf.c.m(parcel, 4, c(), false);
        hf.c.l(parcel, 5, b());
        hf.c.m(parcel, 6, d(), false);
        hf.c.b(parcel, a10);
    }
}
