package hf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends jf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final s f26008d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26009e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f26010i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f26011o;

    /* renamed from: p  reason: collision with root package name */
    private final int f26012p;

    /* renamed from: q  reason: collision with root package name */
    private final int[] f26013q;

    public e(s sVar, boolean z10, boolean z11, int[] iArr, int i10, int[] iArr2) {
        this.f26008d = sVar;
        this.f26009e = z10;
        this.f26010i = z11;
        this.f26011o = iArr;
        this.f26012p = i10;
        this.f26013q = iArr2;
    }

    public int b() {
        return this.f26012p;
    }

    public int[] c() {
        return this.f26011o;
    }

    public int[] d() {
        return this.f26013q;
    }

    public boolean e() {
        return this.f26009e;
    }

    public boolean f() {
        return this.f26010i;
    }

    public final s h() {
        return this.f26008d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f26008d, i10, false);
        jf.c.c(parcel, 2, e());
        jf.c.c(parcel, 3, f());
        jf.c.m(parcel, 4, c(), false);
        jf.c.l(parcel, 5, b());
        jf.c.m(parcel, 6, d(), false);
        jf.c.b(parcel, a10);
    }
}
