package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d0 extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d0> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final int f53689d;

    /* renamed from: e  reason: collision with root package name */
    private final short f53690e;

    /* renamed from: i  reason: collision with root package name */
    private final short f53691i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(int i10, short s10, short s11) {
        this.f53689d = i10;
        this.f53690e = s10;
        this.f53691i = s11;
    }

    public short b() {
        return this.f53690e;
    }

    public short c() {
        return this.f53691i;
    }

    public int d() {
        return this.f53689d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d0)) {
            return false;
        }
        d0 d0Var = (d0) obj;
        if (this.f53689d != d0Var.f53689d || this.f53690e != d0Var.f53690e || this.f53691i != d0Var.f53691i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(Integer.valueOf(this.f53689d), Short.valueOf(this.f53690e), Short.valueOf(this.f53691i));
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
