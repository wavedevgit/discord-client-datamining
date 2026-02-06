package wf;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import android.util.Log;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.fido.fido2.api.common.AuthenticationExtensions;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import wf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r extends y {
    @NonNull
    public static final Parcelable.Creator<r> CREATOR = new s0();

    /* renamed from: d  reason: collision with root package name */
    private final u f53761d;

    /* renamed from: e  reason: collision with root package name */
    private final w f53762e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f53763i;

    /* renamed from: o  reason: collision with root package name */
    private final List f53764o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f53765p;

    /* renamed from: q  reason: collision with root package name */
    private final List f53766q;

    /* renamed from: r  reason: collision with root package name */
    private final j f53767r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f53768s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f53769t;

    /* renamed from: u  reason: collision with root package name */
    private final c f53770u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f53771v;

    /* renamed from: w  reason: collision with root package name */
    private final String f53772w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f53773x;

    /* renamed from: y  reason: collision with root package name */
    private final List f53774y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f53775a;

        /* renamed from: b  reason: collision with root package name */
        private w f53776b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f53777c;

        /* renamed from: d  reason: collision with root package name */
        private List f53778d;

        /* renamed from: e  reason: collision with root package name */
        private Double f53779e;

        /* renamed from: f  reason: collision with root package name */
        private List f53780f;

        /* renamed from: g  reason: collision with root package name */
        private j f53781g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f53782h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f53783i;

        /* renamed from: j  reason: collision with root package name */
        private c f53784j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f53785k;

        /* renamed from: l  reason: collision with root package name */
        private List f53786l;

        public r a() {
            String cVar;
            u uVar = this.f53775a;
            w wVar = this.f53776b;
            byte[] bArr = this.f53777c;
            List list = this.f53778d;
            Double d10 = this.f53779e;
            List list2 = this.f53780f;
            j jVar = this.f53781g;
            Integer num = this.f53782h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f53783i;
            c cVar2 = this.f53784j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f53785k, null, null, this.f53786l);
        }

        public a b(c cVar) {
            this.f53784j = cVar;
            return this;
        }

        public a c(List list) {
            this.f53786l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f53785k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f53781g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f53777c = (byte[]) gf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f53780f = list;
            return this;
        }

        public a h(List list) {
            this.f53778d = (List) gf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f53775a = (u) gf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f53779e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f53776b = (w) gf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f53773x = resultReceiver;
        if (str2 != null) {
            try {
                r t10 = t(new JSONObject(str2));
                this.f53761d = t10.f53761d;
                this.f53762e = t10.f53762e;
                this.f53763i = t10.f53763i;
                this.f53764o = t10.f53764o;
                this.f53765p = t10.f53765p;
                this.f53766q = t10.f53766q;
                this.f53767r = t10.f53767r;
                this.f53768s = t10.f53768s;
                this.f53769t = t10.f53769t;
                this.f53770u = t10.f53770u;
                this.f53771v = t10.f53771v;
                this.f53774y = t10.f53774y;
                this.f53772w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f53761d = (u) gf.q.l(uVar);
        this.f53762e = (w) gf.q.l(wVar);
        this.f53763i = (byte[]) gf.q.l(bArr);
        this.f53764o = (List) gf.q.l(list);
        this.f53765p = d10;
        this.f53766q = list2;
        this.f53767r = jVar;
        this.f53768s = num;
        this.f53769t = aVar;
        if (str != null) {
            try {
                this.f53770u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f53770u = null;
        }
        this.f53771v = authenticationExtensions;
        this.f53772w = null;
        this.f53774y = list3;
    }

    public static r t(JSONObject jSONObject) {
        String str;
        String str2;
        String str3;
        String str4;
        Boolean bool;
        com.google.android.gms.internal.fido.j0 c10;
        a aVar = new a();
        JSONObject jSONObject2 = jSONObject.getJSONObject("rp");
        Parcelable.Creator<u> creator = u.CREATOR;
        String string = jSONObject2.getString(StackTraceHelper.ID_KEY);
        String string2 = jSONObject2.getString(StackTraceHelper.NAME_KEY);
        String str5 = null;
        if (jSONObject2.has("icon")) {
            str = jSONObject2.optString("icon");
        } else {
            str = null;
        }
        aVar.i(new u(string, string2, str));
        JSONObject jSONObject3 = jSONObject.getJSONObject("user");
        Parcelable.Creator<w> creator2 = w.CREATOR;
        byte[] a10 = com.google.android.gms.common.util.c.a(jSONObject3.getString(StackTraceHelper.ID_KEY));
        String string3 = jSONObject3.getString(StackTraceHelper.NAME_KEY);
        String optString = jSONObject3.optString("displayName");
        if (jSONObject3.has("icon")) {
            str2 = jSONObject3.optString("icon");
        } else {
            str2 = null;
        }
        aVar.k(new w(a10, string3, str2, optString));
        aVar.f(com.google.android.gms.common.util.c.a(jSONObject.getString("challenge")));
        JSONArray jSONArray = jSONObject.getJSONArray("pubKeyCredParams");
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < jSONArray.length(); i10++) {
            JSONObject jSONObject4 = jSONArray.getJSONObject(i10);
            try {
                c10 = com.google.android.gms.internal.fido.j0.d(new t(jSONObject4.getString("type"), jSONObject4.getInt("alg")));
            } catch (IllegalArgumentException unused) {
                c10 = com.google.android.gms.internal.fido.j0.c();
            }
            if (c10.b()) {
                arrayList.add((t) c10.a());
            }
        }
        aVar.h(arrayList);
        if (jSONObject.has("timeout")) {
            aVar.j(Double.valueOf(jSONObject.getDouble("timeout") / 1000.0d));
        }
        if (jSONObject.has("excludeCredentials")) {
            JSONArray jSONArray2 = jSONObject.getJSONArray("excludeCredentials");
            ArrayList arrayList2 = new ArrayList();
            for (int i11 = 0; i11 < jSONArray2.length(); i11++) {
                arrayList2.add(s.e(jSONArray2.getJSONObject(i11)));
            }
            aVar.g(arrayList2);
        }
        if (jSONObject.has("authenticatorSelection")) {
            JSONObject jSONObject5 = jSONObject.getJSONObject("authenticatorSelection");
            Parcelable.Creator<j> creator3 = j.CREATOR;
            if (jSONObject5.has("authenticatorAttachment")) {
                str3 = jSONObject5.optString("authenticatorAttachment");
            } else {
                str3 = null;
            }
            if (jSONObject5.has("residentKey")) {
                str4 = jSONObject5.optString("residentKey");
            } else {
                str4 = null;
            }
            if (jSONObject5.has("requireResidentKey")) {
                bool = Boolean.valueOf(jSONObject5.optBoolean("requireResidentKey"));
            } else {
                bool = null;
            }
            if (jSONObject5.has("userVerification")) {
                str5 = jSONObject5.optString("userVerification");
            }
            aVar.e(new j(str3, bool, str5, str4));
        }
        if (jSONObject.has("extensions")) {
            aVar.d(AuthenticationExtensions.d(jSONObject.getJSONObject("extensions")));
        }
        if (jSONObject.has("attestation")) {
            try {
                aVar.b(c.a(jSONObject.getString("attestation")));
            } catch (c.a e10) {
                Log.w("PKCCreationOptions", "Invalid AttestationConveyancePreference", e10);
                aVar.b(c.NONE);
            }
        }
        if (jSONObject.has("attestationFormats")) {
            JSONArray jSONArray3 = jSONObject.getJSONArray("attestationFormats");
            ArrayList arrayList3 = new ArrayList();
            for (int i12 = 0; i12 < jSONArray3.length(); i12++) {
                arrayList3.add(jSONArray3.getString(i12));
            }
            aVar.c(arrayList3);
        }
        return aVar.a();
    }

    public String b() {
        c cVar = this.f53770u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f53774y;
    }

    public AuthenticationExtensions d() {
        return this.f53771v;
    }

    public j e() {
        return this.f53767r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (gf.o.a(this.f53761d, rVar.f53761d) && gf.o.a(this.f53762e, rVar.f53762e) && Arrays.equals(this.f53763i, rVar.f53763i) && gf.o.a(this.f53765p, rVar.f53765p) && this.f53764o.containsAll(rVar.f53764o) && rVar.f53764o.containsAll(this.f53764o) && ((((list = this.f53766q) == null && rVar.f53766q == null) || (list != null && (list2 = rVar.f53766q) != null && list.containsAll(list2) && rVar.f53766q.containsAll(this.f53766q))) && gf.o.a(this.f53767r, rVar.f53767r) && gf.o.a(this.f53768s, rVar.f53768s) && gf.o.a(this.f53769t, rVar.f53769t) && gf.o.a(this.f53770u, rVar.f53770u) && gf.o.a(this.f53771v, rVar.f53771v) && gf.o.a(this.f53772w, rVar.f53772w))) {
            List list4 = this.f53774y;
            if (list4 == null && rVar.f53774y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f53774y) == null || !list4.containsAll(list3) || !rVar.f53774y.containsAll(this.f53774y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f53763i;
    }

    public List h() {
        return this.f53766q;
    }

    public int hashCode() {
        return gf.o.b(this.f53761d, this.f53762e, Integer.valueOf(Arrays.hashCode(this.f53763i)), this.f53764o, this.f53765p, this.f53766q, this.f53767r, this.f53768s, this.f53769t, this.f53770u, this.f53771v, this.f53772w, this.f53774y);
    }

    public String i() {
        return this.f53772w;
    }

    public List j() {
        return this.f53764o;
    }

    public Integer l() {
        return this.f53768s;
    }

    public u o() {
        return this.f53761d;
    }

    public Double p() {
        return this.f53765p;
    }

    public com.google.android.gms.fido.fido2.api.common.a q() {
        return this.f53769t;
    }

    public w r() {
        return this.f53762e;
    }

    public final String toString() {
        List list = this.f53774y;
        AuthenticationExtensions authenticationExtensions = this.f53771v;
        c cVar = this.f53770u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f53769t;
        j jVar = this.f53767r;
        List list2 = this.f53766q;
        List list3 = this.f53764o;
        byte[] bArr = this.f53763i;
        w wVar = this.f53762e;
        String valueOf = String.valueOf(this.f53761d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f53765p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f53768s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 2, o(), i10, false);
        hf.c.q(parcel, 3, r(), i10, false);
        hf.c.f(parcel, 4, f(), false);
        hf.c.w(parcel, 5, j(), false);
        hf.c.i(parcel, 6, p(), false);
        hf.c.w(parcel, 7, h(), false);
        hf.c.q(parcel, 8, e(), i10, false);
        hf.c.n(parcel, 9, l(), false);
        hf.c.q(parcel, 10, q(), i10, false);
        hf.c.s(parcel, 11, b(), false);
        hf.c.q(parcel, 12, d(), i10, false);
        hf.c.s(parcel, 13, i(), false);
        hf.c.q(parcel, 14, this.f53773x, i10, false);
        hf.c.u(parcel, 15, c(), false);
        hf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r t10 = t(new JSONObject(str));
            this.f53761d = t10.f53761d;
            this.f53762e = t10.f53762e;
            this.f53763i = t10.f53763i;
            this.f53764o = t10.f53764o;
            this.f53765p = t10.f53765p;
            this.f53766q = t10.f53766q;
            this.f53767r = t10.f53767r;
            this.f53768s = t10.f53768s;
            this.f53769t = t10.f53769t;
            this.f53770u = t10.f53770u;
            this.f53771v = t10.f53771v;
            this.f53774y = t10.f53774y;
            this.f53772w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
