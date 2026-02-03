package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d0 extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d0> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final int f52256d;

    /* renamed from: e  reason: collision with root package name */
    private final short f52257e;

    /* renamed from: i  reason: collision with root package name */
    private final short f52258i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(int i10, short s10, short s11) {
        this.f52256d = i10;
        this.f52257e = s10;
        this.f52258i = s11;
    }

    public short b() {
        return this.f52257e;
    }

    public short c() {
        return this.f52258i;
    }

    public int d() {
        return this.f52256d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d0)) {
            return false;
        }
        d0 d0Var = (d0) obj;
        if (this.f52256d != d0Var.f52256d || this.f52257e != d0Var.f52257e || this.f52258i != d0Var.f52258i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(Integer.valueOf(this.f52256d), Short.valueOf(this.f52257e), Short.valueOf(this.f52258i));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, d());
        hf.c.r(parcel, 2, b());
        hf.c.r(parcel, 3, c());
        hf.c.b(parcel, a10);
    }
}
