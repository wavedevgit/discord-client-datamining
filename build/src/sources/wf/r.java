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
    private final u f53809d;

    /* renamed from: e  reason: collision with root package name */
    private final w f53810e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f53811i;

    /* renamed from: o  reason: collision with root package name */
    private final List f53812o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f53813p;

    /* renamed from: q  reason: collision with root package name */
    private final List f53814q;

    /* renamed from: r  reason: collision with root package name */
    private final j f53815r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f53816s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f53817t;

    /* renamed from: u  reason: collision with root package name */
    private final c f53818u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f53819v;

    /* renamed from: w  reason: collision with root package name */
    private final String f53820w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f53821x;

    /* renamed from: y  reason: collision with root package name */
    private final List f53822y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f53823a;

        /* renamed from: b  reason: collision with root package name */
        private w f53824b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f53825c;

        /* renamed from: d  reason: collision with root package name */
        private List f53826d;

        /* renamed from: e  reason: collision with root package name */
        private Double f53827e;

        /* renamed from: f  reason: collision with root package name */
        private List f53828f;

        /* renamed from: g  reason: collision with root package name */
        private j f53829g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f53830h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f53831i;

        /* renamed from: j  reason: collision with root package name */
        private c f53832j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f53833k;

        /* renamed from: l  reason: collision with root package name */
        private List f53834l;

        public r a() {
            String cVar;
            u uVar = this.f53823a;
            w wVar = this.f53824b;
            byte[] bArr = this.f53825c;
            List list = this.f53826d;
            Double d10 = this.f53827e;
            List list2 = this.f53828f;
            j jVar = this.f53829g;
            Integer num = this.f53830h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f53831i;
            c cVar2 = this.f53832j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f53833k, null, null, this.f53834l);
        }

        public a b(c cVar) {
            this.f53832j = cVar;
            return this;
        }

        public a c(List list) {
            this.f53834l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f53833k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f53829g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f53825c = (byte[]) gf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f53828f = list;
            return this;
        }

        public a h(List list) {
            this.f53826d = (List) gf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f53823a = (u) gf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f53827e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f53824b = (w) gf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f53821x = resultReceiver;
        if (str2 != null) {
            try {
                r t10 = t(new JSONObject(str2));
                this.f53809d = t10.f53809d;
                this.f53810e = t10.f53810e;
                this.f53811i = t10.f53811i;
                this.f53812o = t10.f53812o;
                this.f53813p = t10.f53813p;
                this.f53814q = t10.f53814q;
                this.f53815r = t10.f53815r;
                this.f53816s = t10.f53816s;
                this.f53817t = t10.f53817t;
                this.f53818u = t10.f53818u;
                this.f53819v = t10.f53819v;
                this.f53822y = t10.f53822y;
                this.f53820w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f53809d = (u) gf.q.l(uVar);
        this.f53810e = (w) gf.q.l(wVar);
        this.f53811i = (byte[]) gf.q.l(bArr);
        this.f53812o = (List) gf.q.l(list);
        this.f53813p = d10;
        this.f53814q = list2;
        this.f53815r = jVar;
        this.f53816s = num;
        this.f53817t = aVar;
        if (str != null) {
            try {
                this.f53818u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f53818u = null;
        }
        this.f53819v = authenticationExtensions;
        this.f53820w = null;
        this.f53822y = list3;
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
        c cVar = this.f53818u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f53822y;
    }

    public AuthenticationExtensions d() {
        return this.f53819v;
    }

    public j e() {
        return this.f53815r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (gf.o.a(this.f53809d, rVar.f53809d) && gf.o.a(this.f53810e, rVar.f53810e) && Arrays.equals(this.f53811i, rVar.f53811i) && gf.o.a(this.f53813p, rVar.f53813p) && this.f53812o.containsAll(rVar.f53812o) && rVar.f53812o.containsAll(this.f53812o) && ((((list = this.f53814q) == null && rVar.f53814q == null) || (list != null && (list2 = rVar.f53814q) != null && list.containsAll(list2) && rVar.f53814q.containsAll(this.f53814q))) && gf.o.a(this.f53815r, rVar.f53815r) && gf.o.a(this.f53816s, rVar.f53816s) && gf.o.a(this.f53817t, rVar.f53817t) && gf.o.a(this.f53818u, rVar.f53818u) && gf.o.a(this.f53819v, rVar.f53819v) && gf.o.a(this.f53820w, rVar.f53820w))) {
            List list4 = this.f53822y;
            if (list4 == null && rVar.f53822y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f53822y) == null || !list4.containsAll(list3) || !rVar.f53822y.containsAll(this.f53822y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f53811i;
    }

    public List h() {
        return this.f53814q;
    }

    public int hashCode() {
        return gf.o.b(this.f53809d, this.f53810e, Integer.valueOf(Arrays.hashCode(this.f53811i)), this.f53812o, this.f53813p, this.f53814q, this.f53815r, this.f53816s, this.f53817t, this.f53818u, this.f53819v, this.f53820w, this.f53822y);
    }

    public String i() {
        return this.f53820w;
    }

    public List j() {
        return this.f53812o;
    }

    public Integer l() {
        return this.f53816s;
    }

    public u o() {
        return this.f53809d;
    }

    public Double p() {
        return this.f53813p;
    }

    public com.google.android.gms.fido.fido2.api.common.a q() {
        return this.f53817t;
    }

    public w r() {
        return this.f53810e;
    }

    public final String toString() {
        List list = this.f53822y;
        AuthenticationExtensions authenticationExtensions = this.f53819v;
        c cVar = this.f53818u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f53817t;
        j jVar = this.f53815r;
        List list2 = this.f53814q;
        List list3 = this.f53812o;
        byte[] bArr = this.f53811i;
        w wVar = this.f53810e;
        String valueOf = String.valueOf(this.f53809d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f53813p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f53816s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
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
        hf.c.q(parcel, 14, this.f53821x, i10, false);
        hf.c.u(parcel, 15, c(), false);
        hf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r t10 = t(new JSONObject(str));
            this.f53809d = t10.f53809d;
            this.f53810e = t10.f53810e;
            this.f53811i = t10.f53811i;
            this.f53812o = t10.f53812o;
            this.f53813p = t10.f53813p;
            this.f53814q = t10.f53814q;
            this.f53815r = t10.f53815r;
            this.f53816s = t10.f53816s;
            this.f53817t = t10.f53817t;
            this.f53818u = t10.f53818u;
            this.f53819v = t10.f53819v;
            this.f53822y = t10.f53822y;
            this.f53820w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
