package hf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s extends jf.a {
    @NonNull
    public static final Parcelable.Creator<s> CREATOR = new v0();

    /* renamed from: d  reason: collision with root package name */
    private final int f27886d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f27887e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f27888i;

    /* renamed from: o  reason: collision with root package name */
    private final int f27889o;

    /* renamed from: p  reason: collision with root package name */
    private final int f27890p;

    public s(int i10, boolean z10, boolean z11, int i11, int i12) {
        this.f27886d = i10;
        this.f27887e = z10;
        this.f27888i = z11;
        this.f27889o = i11;
        this.f27890p = i12;
    }

    public int b() {
        return this.f27889o;
    }

    public int c() {
        return this.f27890p;
    }

    public boolean d() {
        return this.f27887e;
    }

    public boolean e() {
        return this.f27888i;
    }

    public int f() {
        return this.f27886d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, f());
        jf.c.c(parcel, 2, d());
        jf.c.c(parcel, 3, e());
        jf.c.l(parcel, 4, b());
        jf.c.l(parcel, 5, c());
        jf.c.b(parcel, a10);
    }
}
