package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d0 extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d0> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final int f55201d;

    /* renamed from: e  reason: collision with root package name */
    private final short f55202e;

    /* renamed from: i  reason: collision with root package name */
    private final short f55203i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(int i10, short s10, short s11) {
        this.f55201d = i10;
        this.f55202e = s10;
        this.f55203i = s11;
    }

    public short b() {
        return this.f55202e;
    }

    public short c() {
        return this.f55203i;
    }

    public int d() {
        return this.f55201d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d0)) {
            return false;
        }
        d0 d0Var = (d0) obj;
        if (this.f55201d != d0Var.f55201d || this.f55202e != d0Var.f55202e || this.f55203i != d0Var.f55203i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(Integer.valueOf(this.f55201d), Short.valueOf(this.f55202e), Short.valueOf(this.f55203i));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, d());
        jf.c.r(parcel, 2, b());
        jf.c.r(parcel, 3, c());
        jf.c.b(parcel, a10);
    }
}
