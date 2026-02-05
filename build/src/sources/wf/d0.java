package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d0 extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d0> CREATOR = new f1();

    /* renamed from: d  reason: collision with root package name */
    private final int f52910d;

    /* renamed from: e  reason: collision with root package name */
    private final short f52911e;

    /* renamed from: i  reason: collision with root package name */
    private final short f52912i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(int i10, short s10, short s11) {
        this.f52910d = i10;
        this.f52911e = s10;
        this.f52912i = s11;
    }

    public short b() {
        return this.f52911e;
    }

    public short c() {
        return this.f52912i;
    }

    public int d() {
        return this.f52910d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d0)) {
            return false;
        }
        d0 d0Var = (d0) obj;
        if (this.f52910d != d0Var.f52910d || this.f52911e != d0Var.f52911e || this.f52912i != d0Var.f52912i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(Integer.valueOf(this.f52910d), Short.valueOf(this.f52911e), Short.valueOf(this.f52912i));
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
