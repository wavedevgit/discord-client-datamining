package xf;

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
import xf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r extends y {
    @NonNull
    public static final Parcelable.Creator<r> CREATOR = new s0();

    /* renamed from: d  reason: collision with root package name */
    private final u f54704d;

    /* renamed from: e  reason: collision with root package name */
    private final w f54705e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f54706i;

    /* renamed from: o  reason: collision with root package name */
    private final List f54707o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f54708p;

    /* renamed from: q  reason: collision with root package name */
    private final List f54709q;

    /* renamed from: r  reason: collision with root package name */
    private final j f54710r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f54711s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f54712t;

    /* renamed from: u  reason: collision with root package name */
    private final c f54713u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f54714v;

    /* renamed from: w  reason: collision with root package name */
    private final String f54715w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f54716x;

    /* renamed from: y  reason: collision with root package name */
    private final List f54717y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f54718a;

        /* renamed from: b  reason: collision with root package name */
        private w f54719b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f54720c;

        /* renamed from: d  reason: collision with root package name */
        private List f54721d;

        /* renamed from: e  reason: collision with root package name */
        private Double f54722e;

        /* renamed from: f  reason: collision with root package name */
        private List f54723f;

        /* renamed from: g  reason: collision with root package name */
        private j f54724g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f54725h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f54726i;

        /* renamed from: j  reason: collision with root package name */
        private c f54727j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f54728k;

        /* renamed from: l  reason: collision with root package name */
        private List f54729l;

        public r a() {
            String cVar;
            u uVar = this.f54718a;
            w wVar = this.f54719b;
            byte[] bArr = this.f54720c;
            List list = this.f54721d;
            Double d10 = this.f54722e;
            List list2 = this.f54723f;
            j jVar = this.f54724g;
            Integer num = this.f54725h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f54726i;
            c cVar2 = this.f54727j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f54728k, null, null, this.f54729l);
        }

        public a b(c cVar) {
            this.f54727j = cVar;
            return this;
        }

        public a c(List list) {
            this.f54729l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f54728k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f54724g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f54720c = (byte[]) hf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f54723f = list;
            return this;
        }

        public a h(List list) {
            this.f54721d = (List) hf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f54718a = (u) hf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f54722e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f54719b = (w) hf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f54716x = resultReceiver;
        if (str2 != null) {
            try {
                r r10 = r(new JSONObject(str2));
                this.f54704d = r10.f54704d;
                this.f54705e = r10.f54705e;
                this.f54706i = r10.f54706i;
                this.f54707o = r10.f54707o;
                this.f54708p = r10.f54708p;
                this.f54709q = r10.f54709q;
                this.f54710r = r10.f54710r;
                this.f54711s = r10.f54711s;
                this.f54712t = r10.f54712t;
                this.f54713u = r10.f54713u;
                this.f54714v = r10.f54714v;
                this.f54717y = r10.f54717y;
                this.f54715w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f54704d = (u) hf.q.l(uVar);
        this.f54705e = (w) hf.q.l(wVar);
        this.f54706i = (byte[]) hf.q.l(bArr);
        this.f54707o = (List) hf.q.l(list);
        this.f54708p = d10;
        this.f54709q = list2;
        this.f54710r = jVar;
        this.f54711s = num;
        this.f54712t = aVar;
        if (str != null) {
            try {
                this.f54713u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f54713u = null;
        }
        this.f54714v = authenticationExtensions;
        this.f54715w = null;
        this.f54717y = list3;
    }

    public static r r(JSONObject jSONObject) {
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
        c cVar = this.f54713u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f54717y;
    }

    public AuthenticationExtensions d() {
        return this.f54714v;
    }

    public j e() {
        return this.f54710r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (hf.o.a(this.f54704d, rVar.f54704d) && hf.o.a(this.f54705e, rVar.f54705e) && Arrays.equals(this.f54706i, rVar.f54706i) && hf.o.a(this.f54708p, rVar.f54708p) && this.f54707o.containsAll(rVar.f54707o) && rVar.f54707o.containsAll(this.f54707o) && ((((list = this.f54709q) == null && rVar.f54709q == null) || (list != null && (list2 = rVar.f54709q) != null && list.containsAll(list2) && rVar.f54709q.containsAll(this.f54709q))) && hf.o.a(this.f54710r, rVar.f54710r) && hf.o.a(this.f54711s, rVar.f54711s) && hf.o.a(this.f54712t, rVar.f54712t) && hf.o.a(this.f54713u, rVar.f54713u) && hf.o.a(this.f54714v, rVar.f54714v) && hf.o.a(this.f54715w, rVar.f54715w))) {
            List list4 = this.f54717y;
            if (list4 == null && rVar.f54717y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f54717y) == null || !list4.containsAll(list3) || !rVar.f54717y.containsAll(this.f54717y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f54706i;
    }

    public List g() {
        return this.f54709q;
    }

    public int hashCode() {
        return hf.o.b(this.f54704d, this.f54705e, Integer.valueOf(Arrays.hashCode(this.f54706i)), this.f54707o, this.f54708p, this.f54709q, this.f54710r, this.f54711s, this.f54712t, this.f54713u, this.f54714v, this.f54715w, this.f54717y);
    }

    public String i() {
        return this.f54715w;
    }

    public List j() {
        return this.f54707o;
    }

    public Integer k() {
        return this.f54711s;
    }

    public u l() {
        return this.f54704d;
    }

    public Double o() {
        return this.f54708p;
    }

    public com.google.android.gms.fido.fido2.api.common.a p() {
        return this.f54712t;
    }

    public w q() {
        return this.f54705e;
    }

    public final String toString() {
        List list = this.f54717y;
        AuthenticationExtensions authenticationExtensions = this.f54714v;
        c cVar = this.f54713u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f54712t;
        j jVar = this.f54710r;
        List list2 = this.f54709q;
        List list3 = this.f54707o;
        byte[] bArr = this.f54706i;
        w wVar = this.f54705e;
        String valueOf = String.valueOf(this.f54704d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f54708p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f54711s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 2, l(), i10, false);
        jf.c.q(parcel, 3, q(), i10, false);
        jf.c.f(parcel, 4, f(), false);
        jf.c.w(parcel, 5, j(), false);
        jf.c.i(parcel, 6, o(), false);
        jf.c.w(parcel, 7, g(), false);
        jf.c.q(parcel, 8, e(), i10, false);
        jf.c.n(parcel, 9, k(), false);
        jf.c.q(parcel, 10, p(), i10, false);
        jf.c.s(parcel, 11, b(), false);
        jf.c.q(parcel, 12, d(), i10, false);
        jf.c.s(parcel, 13, i(), false);
        jf.c.q(parcel, 14, this.f54716x, i10, false);
        jf.c.u(parcel, 15, c(), false);
        jf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r r10 = r(new JSONObject(str));
            this.f54704d = r10.f54704d;
            this.f54705e = r10.f54705e;
            this.f54706i = r10.f54706i;
            this.f54707o = r10.f54707o;
            this.f54708p = r10.f54708p;
            this.f54709q = r10.f54709q;
            this.f54710r = r10.f54710r;
            this.f54711s = r10.f54711s;
            this.f54712t = r10.f54712t;
            this.f54713u = r10.f54713u;
            this.f54714v = r10.f54714v;
            this.f54717y = r10.f54717y;
            this.f54715w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
