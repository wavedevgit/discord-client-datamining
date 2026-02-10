package xf;

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
    private final v4 f54904d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f54905e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f54906i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f54907o;

    /* renamed from: p  reason: collision with root package name */
    private final v4 f54908p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(byte[] bArr, byte[] bArr2, byte[] bArr3, byte[] bArr4, byte[] bArr5) {
        v4 o10;
        byte[] bArr6 = (byte[]) hf.q.l(bArr);
        v4 v4Var = v4.f14239e;
        v4 o11 = v4.o(bArr6, 0, bArr6.length);
        byte[] bArr7 = (byte[]) hf.q.l(bArr2);
        v4 o12 = v4.o(bArr7, 0, bArr7.length);
        byte[] bArr8 = (byte[]) hf.q.l(bArr3);
        v4 o13 = v4.o(bArr8, 0, bArr8.length);
        byte[] bArr9 = (byte[]) hf.q.l(bArr4);
        v4 o14 = v4.o(bArr9, 0, bArr9.length);
        if (bArr5 == null) {
            o10 = null;
        } else {
            o10 = v4.o(bArr5, 0, bArr5.length);
        }
        this.f54904d = (v4) hf.q.l(o11);
        this.f54905e = (v4) hf.q.l(o12);
        this.f54906i = (v4) hf.q.l(o13);
        this.f54907o = (v4) hf.q.l(o14);
        this.f54908p = o10;
    }

    public byte[] b() {
        return this.f54906i.p();
    }

    public byte[] c() {
        return this.f54905e.p();
    }

    public byte[] d() {
        return this.f54904d.p();
    }

    public byte[] e() {
        return this.f54907o.p();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!hf.o.a(this.f54904d, fVar.f54904d) || !hf.o.a(this.f54905e, fVar.f54905e) || !hf.o.a(this.f54906i, fVar.f54906i) || !hf.o.a(this.f54907o, fVar.f54907o) || !hf.o.a(this.f54908p, fVar.f54908p)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f54908p;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public final JSONObject h() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("clientDataJSON", com.google.android.gms.common.util.c.b(c()));
            jSONObject.put("authenticatorData", com.google.android.gms.common.util.c.b(b()));
            jSONObject.put("signature", com.google.android.gms.common.util.c.b(e()));
            if (this.f54908p != null) {
                jSONObject.put("userHandle", com.google.android.gms.common.util.c.b(f()));
                return jSONObject;
            }
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticatorAssertionResponse to JSON object", e10);
        }
    }

    public int hashCode() {
        return hf.o.b(Integer.valueOf(hf.o.b(this.f54904d)), Integer.valueOf(hf.o.b(this.f54905e)), Integer.valueOf(hf.o.b(this.f54906i)), Integer.valueOf(hf.o.b(this.f54907o)), Integer.valueOf(hf.o.b(this.f54908p)));
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
        int a10 = jf.c.a(parcel);
        jf.c.f(parcel, 2, d(), false);
        jf.c.f(parcel, 3, c(), false);
        jf.c.f(parcel, 4, b(), false);
        jf.c.f(parcel, 5, e(), false);
        jf.c.f(parcel, 6, f(), false);
        jf.c.b(parcel, a10);
    }
}
