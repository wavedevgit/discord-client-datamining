package wf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 extends hf.a {
    public static final Parcelable.Creator<n0> CREATOR = new o0();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f52965d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f52966e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f52967i;

    /* renamed from: o  reason: collision with root package name */
    private final int f52968o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(v4 v4Var, v4 v4Var2, v4 v4Var3, int i10) {
        this.f52965d = v4Var;
        this.f52966e = v4Var2;
        this.f52967i = v4Var3;
        this.f52968o = i10;
    }

    public final byte[] b() {
        v4 v4Var = this.f52965d;
        if (v4Var == null) {
            return null;
        }
        return v4Var.o();
    }

    public final byte[] c() {
        v4 v4Var = this.f52967i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.o();
    }

    public final byte[] d() {
        v4 v4Var = this.f52966e;
        if (v4Var == null) {
            return null;
        }
        return v4Var.o();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof n0)) {
            return false;
        }
        n0 n0Var = (n0) obj;
        if (!gf.o.a(this.f52965d, n0Var.f52965d) || !gf.o.a(this.f52966e, n0Var.f52966e) || !gf.o.a(this.f52967i, n0Var.f52967i) || this.f52968o != n0Var.f52968o) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(this.f52965d, this.f52966e, this.f52967i, Integer.valueOf(this.f52968o));
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(b());
        String b11 = com.google.android.gms.common.util.c.b(d());
        String b12 = com.google.android.gms.common.util.c.b(c());
        return "HmacSecretExtension{coseKeyAgreement=" + b10 + ", saltEnc=" + b11 + ", saltAuth=" + b12 + ", getPinUvAuthProtocol=" + this.f52968o + "}";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 1, b(), false);
        hf.c.f(parcel, 2, d(), false);
        hf.c.f(parcel, 3, c(), false);
        hf.c.l(parcel, 4, this.f52968o);
        hf.c.b(parcel, a10);
    }
}
