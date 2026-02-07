package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends hf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final s f25097d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25098e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f25099i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f25100o;

    /* renamed from: p  reason: collision with root package name */
    private final int f25101p;

    /* renamed from: q  reason: collision with root package name */
    private final int[] f25102q;

    public e(s sVar, boolean z10, boolean z11, int[] iArr, int i10, int[] iArr2) {
        this.f25097d = sVar;
        this.f25098e = z10;
        this.f25099i = z11;
        this.f25100o = iArr;
        this.f25101p = i10;
        this.f25102q = iArr2;
    }

    public int b() {
        return this.f25101p;
    }

    public int[] c() {
        return this.f25100o;
    }

    public int[] d() {
        return this.f25102q;
    }

    public boolean e() {
        return this.f25098e;
    }

    public boolean f() {
        return this.f25099i;
    }

    public final s h() {
        return this.f25097d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, this.f25097d, i10, false);
        hf.c.c(parcel, 2, e());
        hf.c.c(parcel, 3, f());
        hf.c.m(parcel, 4, c(), false);
        hf.c.l(parcel, 5, b());
        hf.c.m(parcel, 6, d(), false);
        hf.c.b(parcel, a10);
    }
}
