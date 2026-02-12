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
    private final v4 f54637d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f54638e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f54639i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f54640o;

    /* renamed from: p  reason: collision with root package name */
    private final v4 f54641p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(byte[] bArr, byte[] bArr2, byte[] bArr3, byte[] bArr4, byte[] bArr5) {
        v4 o10;
        byte[] bArr6 = (byte[]) hf.q.l(bArr);
        v4 v4Var = v4.f14817e;
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
        this.f54637d = (v4) hf.q.l(o11);
        this.f54638e = (v4) hf.q.l(o12);
        this.f54639i = (v4) hf.q.l(o13);
        this.f54640o = (v4) hf.q.l(o14);
        this.f54641p = o10;
    }

    public byte[] b() {
        return this.f54639i.p();
    }

    public byte[] c() {
        return this.f54638e.p();
    }

    public byte[] d() {
        return this.f54637d.p();
    }

    public byte[] e() {
        return this.f54640o.p();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!hf.o.a(this.f54637d, fVar.f54637d) || !hf.o.a(this.f54638e, fVar.f54638e) || !hf.o.a(this.f54639i, fVar.f54639i) || !hf.o.a(this.f54640o, fVar.f54640o) || !hf.o.a(this.f54641p, fVar.f54641p)) {
            return false;
        }
        return true;
    }

    public byte[] f() {
        v4 v4Var = this.f54641p;
        if (v4Var == null) {
            return null;
        }
        return v4Var.p();
    }

    public final JSONObject g() {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("clientDataJSON", com.google.android.gms.common.util.c.b(c()));
            jSONObject.put("authenticatorData", com.google.android.gms.common.util.c.b(b()));
            jSONObject.put("signature", com.google.android.gms.common.util.c.b(e()));
            if (this.f54641p != null) {
                jSONObject.put("userHandle", com.google.android.gms.common.util.c.b(f()));
                return jSONObject;
            }
            return jSONObject;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding AuthenticatorAssertionResponse to JSON object", e10);
        }
    }

    public int hashCode() {
        return hf.o.b(Integer.valueOf(hf.o.b(this.f54637d)), Integer.valueOf(hf.o.b(this.f54638e)), Integer.valueOf(hf.o.b(this.f54639i)), Integer.valueOf(hf.o.b(this.f54640o)), Integer.valueOf(hf.o.b(this.f54641p)));
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
