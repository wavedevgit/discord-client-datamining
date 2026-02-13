package xf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 extends jf.a {
    public static final Parcelable.Creator<n0> CREATOR = new o0();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f55256d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f55257e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f55258i;

    /* renamed from: o  reason: collision with root package name */
    private final int f55259o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(v4 v4Var, v4 v4Var2, v4 v4Var3, int i10) {
        this.f55256d = v4Var;
        this.f55257e = v4Var2;
        this.f55258i = v4Var3;
        this.f55259o = i10;
    }

    public final byte[] b() {
        v4 v4Var = this.f55256d;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public final byte[] c() {
        v4 v4Var = this.f55258i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public final byte[] d() {
        v4 v4Var = this.f55257e;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof n0)) {
            return false;
        }
        n0 n0Var = (n0) obj;
        if (!hf.o.a(this.f55256d, n0Var.f55256d) || !hf.o.a(this.f55257e, n0Var.f55257e) || !hf.o.a(this.f55258i, n0Var.f55258i) || this.f55259o != n0Var.f55259o) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(this.f55256d, this.f55257e, this.f55258i, Integer.valueOf(this.f55259o));
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(b());
        String b11 = com.google.android.gms.common.util.c.b(d());
        String b12 = com.google.android.gms.common.util.c.b(c());
        return "HmacSecretExtension{coseKeyAgreement=" + b10 + ", saltEnc=" + b11 + ", saltAuth=" + b12 + ", getPinUvAuthProtocol=" + this.f55259o + "}";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.f(parcel, 1, b(), false);
        jf.c.f(parcel, 2, d(), false);
        jf.c.f(parcel, 3, c(), false);
        jf.c.l(parcel, 4, this.f55259o);
        jf.c.b(parcel, a10);
    }
}
