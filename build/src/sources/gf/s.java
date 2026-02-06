package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s extends hf.a {
    @NonNull
    public static final Parcelable.Creator<s> CREATOR = new v0();

    /* renamed from: d  reason: collision with root package name */
    private final int f25140d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25141e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f25142i;

    /* renamed from: o  reason: collision with root package name */
    private final int f25143o;

    /* renamed from: p  reason: collision with root package name */
    private final int f25144p;

    public s(int i10, boolean z10, boolean z11, int i11, int i12) {
        this.f25140d = i10;
        this.f25141e = z10;
        this.f25142i = z11;
        this.f25143o = i11;
        this.f25144p = i12;
    }

    public int b() {
        return this.f25143o;
    }

    public int c() {
        return this.f25144p;
    }

    public boolean d() {
        return this.f25141e;
    }

    public boolean e() {
        return this.f25142i;
    }

    public int f() {
        return this.f25140d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, f());
        hf.c.c(parcel, 2, d());
        hf.c.c(parcel, 3, e());
        hf.c.l(parcel, 4, b());
        hf.c.l(parcel, 5, c());
        hf.c.b(parcel, a10);
    }
}
