package wf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i1 extends hf.a {
    public static final Parcelable.Creator<i1> CREATOR = new j1();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f52928d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f52929e;

    public i1(v4 v4Var, v4 v4Var2) {
        this.f52928d = v4Var;
        this.f52929e = v4Var2;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof i1)) {
            return false;
        }
        i1 i1Var = (i1) obj;
        if (!gf.o.a(this.f52928d, i1Var.f52928d) || !gf.o.a(this.f52929e, i1Var.f52929e)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(this.f52928d, this.f52929e);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        byte[] o10;
        v4 v4Var = this.f52928d;
        int a10 = hf.c.a(parcel);
        byte[] bArr = null;
        if (v4Var == null) {
            o10 = null;
        } else {
            o10 = v4Var.o();
        }
        hf.c.f(parcel, 1, o10, false);
        v4 v4Var2 = this.f52929e;
        if (v4Var2 != null) {
            bArr = v4Var2.o();
        }
        hf.c.f(parcel, 2, bArr, false);
        hf.c.b(parcel, a10);
    }
}
