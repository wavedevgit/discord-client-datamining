package wf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 extends hf.a {
    public static final Parcelable.Creator<n0> CREATOR = new o0();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f53744d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f53745e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f53746i;

    /* renamed from: o  reason: collision with root package name */
    private final int f53747o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(v4 v4Var, v4 v4Var2, v4 v4Var3, int i10) {
        this.f53744d = v4Var;
        this.f53745e = v4Var2;
        this.f53746i = v4Var3;
        this.f53747o = i10;
    }

    public final byte[] b() {
        v4 v4Var = this.f53744d;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public final byte[] c() {
        v4 v4Var = this.f53746i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public final byte[] d() {
        v4 v4Var = this.f53745e;
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
        if (!gf.o.a(this.f53744d, n0Var.f53744d) || !gf.o.a(this.f53745e, n0Var.f53745e) || !gf.o.a(this.f53746i, n0Var.f53746i) || this.f53747o != n0Var.f53747o) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(this.f53744d, this.f53745e, this.f53746i, Integer.valueOf(this.f53747o));
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(b());
        String b11 = com.google.android.gms.common.util.c.b(d());
        String b12 = com.google.android.gms.common.util.c.b(c());
        return "HmacSecretExtension{coseKeyAgreement=" + b10 + ", saltEnc=" + b11 + ", saltAuth=" + b12 + ", getPinUvAuthProtocol=" + this.f53747o + "}";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 1, b(), false);
        hf.c.f(parcel, 2, d(), false);
        hf.c.f(parcel, 3, c(), false);
        hf.c.l(parcel, 4, this.f53747o);
        hf.c.b(parcel, a10);
    }
}
