package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.internal.fido.u2;
import com.google.android.gms.internal.fido.v4;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends i {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new m1();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f52455d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f52456e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f52457i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f52458o;

    /* renamed from: p  reason: collision with root package name */
    private final v4 f52459p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(byte[] bArr, byte[] bArr2, byte[] bArr3, byte[] bArr4, byte[] bArr5) {
        v4 m10;
        byte[] bArr6 = (byte[]) gf.q.l(bArr);
        v4 v4Var = v4.f15145e;
        v4 m11 = v4.m(bArr6, 0, bArr6.length);
        byte[] bArr7 = (byte[]) gf.q.l(bArr2);
        v4 m12 = v4.m(bArr7, 0, bArr7.length);
        byte[] bArr8 = (byte[]) gf.q.l(bArr3);
        v4 m13 = v4.m(bArr8, 0, bArr8.length);
        byte[] bArr9 = (byte[]) gf.q.l(bArr4);
        v4 m14 = v4.m(bArr9, 0, bArr9.length);
        if (bArr5 == null) {
            m10 = null;
        } else {
            m10 = v4.m(bArr5, 0, bArr5.length);
        }
        this.f52455d = (v4) gf.q.l(m11);
        this.f52456e = (v4) gf.q.l(m12);
        this.f52457i = (v4) gf.q.l(m13);
        this.f52458o = (v4) gf.q.l(m14);
        this.f52459p = m10;
    }

    public byte[] b() {
        return this.f52457i.n();
    }

    public byte[] c() {
        return this.f52456e.n();
    }

    public byte[] d() {
        return this.f52455d.n();
    }

    public byte[] e() {
        return this.f52458o.n();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!gf.o.a(this.f52455d, fVar.f52455d) || !gf.o.a(this.f52456e, fVar.f52456e) || !gf.o.a(this.f52457i, fVar.f52457i) || !gf.o.a(this.f52458o, fVar.f52458o) || !gf.o.a(this.f52459p, fVar.f52459p)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f52459p;
        if (v4Var == null) {
            return null;
        }
        return v4Var.n();
    }

    public final JSONObject g() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("clientDataJSON", com.google.android.gms.common.util.c.b(c()));
            jSONObject.put("authenticatorData", com.google.android.gms.common.util.c.b(b()));
            jSONObject.put("signature", com.google.android.gms.common.util.c.b(e()));
            if (this.f52459p != null) {
                jSONObject.put("userHandle", com.google.android.gms.common.util.c.b(f()));
                return jSONObject;
            }
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticatorAssertionResponse to JSON object", e10);
        }
    }

    public int hashCode() {
        return gf.o.b(Integer.valueOf(gf.o.b(this.f52455d)), Integer.valueOf(gf.o.b(this.f52456e)), Integer.valueOf(gf.o.b(this.f52457i)), Integer.valueOf(gf.o.b(this.f52458o)), Integer.valueOf(gf.o.b(this.f52459p)));
    }

    public String toString() {
        com.google.android.gms.internal.fido.f0 a10 = com.google.android.gms.internal.fido.h0.a(this);
        u2 d10 = u2.d();
        byte[] d11 = d();
        a10.b("keyHandle", d10.e(d11, 0, d11.length));
        u2 d12 = u2.d();
        byte[] c10 = c();
        a10.b("clientDataJSON", d12.e(c10, 0, c10.length));
        u2 d13 = u2.d();
        byte[] b10 = b();
        a10.b("authenticatorData", d13.e(b10, 0, b10.length));
        u2 d14 = u2.d();
        byte[] e10 = e();
        a10.b("signature", d14.e(e10, 0, e10.length));
        byte[] f10 = f();
        if (f10 != null) {
            a10.b("userHandle", u2.d().e(f10, 0, f10.length));
        }
        return a10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 2, d(), false);
        hf.c.f(parcel, 3, c(), false);
        hf.c.f(parcel, 4, b(), false);
        hf.c.f(parcel, 5, e(), false);
        hf.c.f(parcel, 6, f(), false);
        hf.c.b(parcel, a10);
    }
}
