package xf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i1 extends jf.a {
    public static final Parcelable.Creator<i1> CREATOR = new j1();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f54650d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f54651e;

    public i1(v4 v4Var, v4 v4Var2) {
        this.f54650d = v4Var;
        this.f54651e = v4Var2;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof i1)) {
            return false;
        }
        i1 i1Var = (i1) obj;
        if (!hf.o.a(this.f54650d, i1Var.f54650d) || !hf.o.a(this.f54651e, i1Var.f54651e)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(this.f54650d, this.f54651e);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        byte[] p10;
        v4 v4Var = this.f54650d;
        int a10 = jf.c.a(parcel);
        byte[] bArr = null;
        if (v4Var == null) {
            p10 = null;
        } else {
            p10 = v4Var.p();
        }
        jf.c.f(parcel, 1, p10, false);
        v4 v4Var2 = this.f54651e;
        if (v4Var2 != null) {
            bArr = v4Var2.p();
        }
        jf.c.f(parcel, 2, bArr, false);
        jf.c.b(parcel, a10);
    }
}
