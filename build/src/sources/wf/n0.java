package wf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 extends hf.a {
    public static final Parcelable.Creator<n0> CREATOR = new o0();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f52089d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f52090e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f52091i;

    /* renamed from: o  reason: collision with root package name */
    private final int f52092o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(v4 v4Var, v4 v4Var2, v4 v4Var3, int i10) {
        this.f52089d = v4Var;
        this.f52090e = v4Var2;
        this.f52091i = v4Var3;
        this.f52092o = i10;
    }

    public final byte[] b() {
        v4 v4Var = this.f52089d;
        if (v4Var == null) {
            return null;
        }
        return v4Var.n();
    }

    public final byte[] c() {
        v4 v4Var = this.f52091i;
        if (v4Var == null) {
            return null;
        }
        return v4Var.n();
    }

    public final byte[] d() {
        v4 v4Var = this.f52090e;
        if (v4Var == null) {
            return null;
        }
        return v4Var.n();
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof n0)) {
            return false;
        }
        n0 n0Var = (n0) obj;
        if (!gf.o.a(this.f52089d, n0Var.f52089d) || !gf.o.a(this.f52090e, n0Var.f52090e) || !gf.o.a(this.f52091i, n0Var.f52091i) || this.f52092o != n0Var.f52092o) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(this.f52089d, this.f52090e, this.f52091i, Integer.valueOf(this.f52092o));
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(b());
        String b11 = com.google.android.gms.common.util.c.b(d());
        String b12 = com.google.android.gms.common.util.c.b(c());
        return "HmacSecretExtension{coseKeyAgreement=" + b10 + ", saltEnc=" + b11 + ", saltAuth=" + b12 + ", getPinUvAuthProtocol=" + this.f52092o + "}";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 1, b(), false);
        hf.c.f(parcel, 2, d(), false);
        hf.c.f(parcel, 3, c(), false);
        hf.c.l(parcel, 4, this.f52092o);
        hf.c.b(parcel, a10);
    }
}
