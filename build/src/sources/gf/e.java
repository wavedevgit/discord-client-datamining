package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends hf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final s f24796d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24797e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f24798i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f24799o;

    /* renamed from: p  reason: collision with root package name */
    private final int f24800p;

    /* renamed from: q  reason: collision with root package name */
    private final int[] f24801q;

    public e(s sVar, boolean z10, boolean z11, int[] iArr, int i10, int[] iArr2) {
        this.f24796d = sVar;
        this.f24797e = z10;
        this.f24798i = z11;
        this.f24799o = iArr;
        this.f24800p = i10;
        this.f24801q = iArr2;
    }

    public int b() {
        return this.f24800p;
    }

    public int[] c() {
        return this.f24799o;
    }

    public int[] d() {
        return this.f24801q;
    }

    public boolean e() {
        return this.f24797e;
    }

    public boolean f() {
        return this.f24798i;
    }

    public final s g() {
        return this.f24796d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, this.f24796d, i10, false);
        hf.c.c(parcel, 2, e());
        hf.c.c(parcel, 3, f());
        hf.c.m(parcel, 4, c(), false);
        hf.c.l(parcel, 5, b());
        hf.c.m(parcel, 6, d(), false);
        hf.c.b(parcel, a10);
    }
}
