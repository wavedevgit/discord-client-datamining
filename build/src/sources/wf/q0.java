package wf;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.Base64;
import com.google.android.gms.internal.fido.k2;
import com.google.android.gms.internal.fido.m2;
import com.google.android.gms.internal.fido.y2;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 extends hf.a {
    public static final Parcelable.Creator<q0> CREATOR = new r0();

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f52326e = "WebAuthn PRF\u0000".getBytes(StandardCharsets.UTF_8);

    /* renamed from: d  reason: collision with root package name */
    private final byte[][] f52327d;

    public q0(byte[][] bArr) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        if (bArr != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.a(z10);
        if (1 != ((bArr.length & 1) ^ 1)) {
            z11 = false;
        } else {
            z11 = true;
        }
        gf.q.a(z11);
        for (int i10 = 0; i10 < bArr.length; i10 += 2) {
            if (i10 == 0 || bArr[i10] != null) {
                z12 = true;
            } else {
                z12 = false;
            }
            gf.q.a(z12);
            int i11 = i10 + 1;
            if (bArr[i11] != null) {
                z13 = true;
            } else {
                z13 = false;
            }
            gf.q.a(z13);
            int length = bArr[i11].length;
            if (length == 32 || length == 64) {
                z14 = true;
            } else {
                z14 = false;
            }
            gf.q.a(z14);
        }
        this.f52327d = bArr;
    }

    public static q0 b(JSONObject jSONObject, boolean z10) {
        ArrayList arrayList = new ArrayList();
        try {
            if (jSONObject.has("eval")) {
                arrayList.add(null);
                if (z10) {
                    arrayList.add(e(jSONObject.getJSONObject("eval")));
                } else {
                    arrayList.add(f(jSONObject.getJSONObject("eval")));
                }
            }
            if (jSONObject.has("evalByCredential")) {
                JSONObject jSONObject2 = jSONObject.getJSONObject("evalByCredential");
                Iterator<String> keys = jSONObject2.keys();
                while (keys.hasNext()) {
                    String next = keys.next();
                    arrayList.add(com.google.android.gms.common.util.c.a(next));
                    if (z10) {
                        arrayList.add(e(jSONObject2.getJSONObject(next)));
                    } else {
                        arrayList.add(f(jSONObject2.getJSONObject(next)));
                    }
                }
            }
            return new q0((byte[][]) arrayList.toArray(new byte[0]));
        } catch (IllegalArgumentException unused) {
            throw new JSONException("invalid base64url value");
        }
    }

    private static JSONObject c(byte[] bArr) {
        JSONObject jSONObject = new JSONObject();
        if (bArr.length == 32) {
            jSONObject.put("first", com.google.android.gms.common.util.c.b(bArr));
            return jSONObject;
        }
        jSONObject.put("first", Base64.encodeToString(bArr, 0, 32, 11));
        jSONObject.put("second", Base64.encodeToString(bArr, 32, 32, 11));
        return jSONObject;
    }

    private static byte[] d(byte[] bArr) {
        k2 zza = m2.a().zza();
        zza.b(f52326e);
        zza.b(bArr);
        return zza.a().d();
    }

    private static byte[] e(JSONObject jSONObject) {
        byte[] a10 = com.google.android.gms.common.util.c.a(jSONObject.getString("first"));
        if (a10.length == 32) {
            if (!jSONObject.has("second")) {
                return a10;
            }
            byte[] a11 = com.google.android.gms.common.util.c.a(jSONObject.getString("second"));
            if (a11.length == 32) {
                return y2.a(a10, a11);
            }
            throw new JSONException("hashed PRF value with wrong length");
        }
        throw new JSONException("hashed PRF value with wrong length");
    }

    private static byte[] f(JSONObject jSONObject) {
        byte[] d10 = d(com.google.android.gms.common.util.c.a(jSONObject.getString("first")));
        if (!jSONObject.has("second")) {
            return d10;
        }
        return y2.a(d10, d(com.google.android.gms.common.util.c.a(jSONObject.getString("second"))));
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof q0)) {
            return false;
        }
        return Arrays.deepEquals(this.f52327d, ((q0) obj).f52327d);
    }

    public final int hashCode() {
        byte[][] bArr;
        int i10 = 0;
        for (byte[] bArr2 : this.f52327d) {
            if (bArr2 != null) {
                i10 ^= gf.o.b(bArr2);
            }
        }
        return i10;
    }

    public final String toString() {
        try {
            JSONObject jSONObject = new JSONObject();
            int i10 = 0;
            JSONObject jSONObject2 = null;
            while (true) {
                byte[][] bArr = this.f52327d;
                if (i10 < bArr.length) {
                    if (bArr[i10] == null) {
                        jSONObject.put("eval", c(bArr[i10 + 1]));
                    } else {
                        if (jSONObject2 == null) {
                            jSONObject2 = new JSONObject();
                            jSONObject.put("evalByCredential", jSONObject2);
                        }
                        jSONObject2.put(com.google.android.gms.common.util.c.b(this.f52327d[i10]), c(this.f52327d[i10 + 1]));
                    }
                    i10 += 2;
                } else {
                    String obj = jSONObject.toString();
                    return "PrfExtension{" + obj + "}";
                }
            }
        } catch (JSONException e10) {
            String message = e10.getMessage();
            return "PrfExtension{Exception:" + message + "}";
        }
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        byte[][] bArr = this.f52327d;
        int a10 = hf.c.a(parcel);
        hf.c.g(parcel, 1, bArr, false);
        hf.c.b(parcel, a10);
    }
}
