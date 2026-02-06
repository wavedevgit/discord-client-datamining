package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.internal.fido.u2;
import com.google.android.gms.internal.fido.v4;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends i {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new n1();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f53698d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f53699e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f53700i;

    /* renamed from: o  reason: collision with root package name */
    private final String[] f53701o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(byte[] bArr, byte[] bArr2, byte[] bArr3, String[] strArr) {
        byte[] bArr4 = (byte[]) gf.q.l(bArr);
        v4 v4Var = v4.f14099e;
        v4 o10 = v4.o(bArr4, 0, bArr4.length);
        byte[] bArr5 = (byte[]) gf.q.l(bArr2);
        v4 o11 = v4.o(bArr5, 0, bArr5.length);
        byte[] bArr6 = (byte[]) gf.q.l(bArr3);
        v4 o12 = v4.o(bArr6, 0, bArr6.length);
        this.f53698d = (v4) gf.q.l(o10);
        this.f53699e = (v4) gf.q.l(o11);
        this.f53700i = (v4) gf.q.l(o12);
        this.f53701o = (String[]) gf.q.l(strArr);
    }

    public byte[] b() {
        return this.f53700i.p();
    }

    public byte[] c() {
        return this.f53699e.p();
    }

    public byte[] d() {
        return this.f53698d.p();
    }

    public String[] e() {
        return this.f53701o;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (!gf.o.a(this.f53698d, gVar.f53698d) || !gf.o.a(this.f53699e, gVar.f53699e) || !gf.o.a(this.f53700i, gVar.f53700i)) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:75:0x01f8 A[Catch: JSONException -> 0x0019, TRY_LEAVE, TryCatch #4 {JSONException -> 0x0019, blocks: (B:3:0x0002, B:5:0x000b, B:8:0x001c, B:10:0x0020, B:11:0x002d, B:12:0x0034, B:14:0x0039, B:16:0x0047, B:18:0x0054, B:17:0x004d, B:19:0x0057, B:20:0x0060, B:21:0x0068, B:23:0x007a, B:24:0x0082, B:25:0x0086, B:27:0x0098, B:28:0x00b6, B:29:0x00ce, B:33:0x00f4, B:73:0x01e4, B:75:0x01f8, B:39:0x0113, B:41:0x0125, B:46:0x0139, B:49:0x015b, B:51:0x0171, B:53:0x0177, B:56:0x0191, B:57:0x0196, B:58:0x0197, B:59:0x019c, B:64:0x01a7, B:66:0x01b7, B:68:0x01c5, B:69:0x01d8, B:70:0x01dd, B:71:0x01de, B:72:0x01e3, B:77:0x0202, B:78:0x0207, B:79:0x0208, B:80:0x020f, B:81:0x0210, B:82:0x0215, B:86:0x0219, B:87:0x0220, B:90:0x0223, B:91:0x022a, B:92:0x022b, B:93:0x0232, B:96:0x0235, B:97:0x023c, B:98:0x023d, B:99:0x0244, B:103:0x0248, B:104:0x024f), top: B:109:0x0002, inners: #2, #3, #7 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final org.json.JSONObject f() {
        /*
            Method dump skipped, instructions count: 600
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: wf.g.f():org.json.JSONObject");
    }

    public int hashCode() {
        return gf.o.b(Integer.valueOf(gf.o.b(this.f53698d)), Integer.valueOf(gf.o.b(this.f53699e)), Integer.valueOf(gf.o.b(this.f53700i)));
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
        a10.b("attestationObject", d13.e(b10, 0, b10.length));
        a10.b("transports", Arrays.toString(this.f53701o));
        return a10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 2, d(), false);
        hf.c.f(parcel, 3, c(), false);
        hf.c.f(parcel, 4, b(), false);
        hf.c.t(parcel, 5, e(), false);
        hf.c.b(parcel, a10);
    }
}
