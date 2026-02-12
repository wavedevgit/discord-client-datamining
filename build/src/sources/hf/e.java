package hf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends jf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final s f27227d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f27228e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f27229i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f27230o;

    /* renamed from: p  reason: collision with root package name */
    private final int f27231p;

    /* renamed from: q  reason: collision with root package name */
    private final int[] f27232q;

    public e(s sVar, boolean z10, boolean z11, int[] iArr, int i10, int[] iArr2) {
        this.f27227d = sVar;
        this.f27228e = z10;
        this.f27229i = z11;
        this.f27230o = iArr;
        this.f27231p = i10;
        this.f27232q = iArr2;
    }

    public int b() {
        return this.f27231p;
    }

    public int[] c() {
        return this.f27230o;
    }

    public int[] d() {
        return this.f27232q;
    }

    public boolean e() {
        return this.f27228e;
    }

    public boolean f() {
        return this.f27229i;
    }

    public final s g() {
        return this.f27227d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f27227d, i10, false);
        jf.c.c(parcel, 2, e());
        jf.c.c(parcel, 3, f());
        jf.c.m(parcel, 4, c(), false);
        jf.c.l(parcel, 5, b());
        jf.c.m(parcel, 6, d(), false);
        jf.c.b(parcel, a10);
    }
}
