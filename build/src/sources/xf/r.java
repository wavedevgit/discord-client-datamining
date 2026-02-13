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
    private final u f55273d;

    /* renamed from: e  reason: collision with root package name */
    private final w f55274e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f55275i;

    /* renamed from: o  reason: collision with root package name */
    private final List f55276o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f55277p;

    /* renamed from: q  reason: collision with root package name */
    private final List f55278q;

    /* renamed from: r  reason: collision with root package name */
    private final j f55279r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f55280s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f55281t;

    /* renamed from: u  reason: collision with root package name */
    private final c f55282u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f55283v;

    /* renamed from: w  reason: collision with root package name */
    private final String f55284w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f55285x;

    /* renamed from: y  reason: collision with root package name */
    private final List f55286y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f55287a;

        /* renamed from: b  reason: collision with root package name */
        private w f55288b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f55289c;

        /* renamed from: d  reason: collision with root package name */
        private List f55290d;

        /* renamed from: e  reason: collision with root package name */
        private Double f55291e;

        /* renamed from: f  reason: collision with root package name */
        private List f55292f;

        /* renamed from: g  reason: collision with root package name */
        private j f55293g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f55294h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f55295i;

        /* renamed from: j  reason: collision with root package name */
        private c f55296j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f55297k;

        /* renamed from: l  reason: collision with root package name */
        private List f55298l;

        public r a() {
            String cVar;
            u uVar = this.f55287a;
            w wVar = this.f55288b;
            byte[] bArr = this.f55289c;
            List list = this.f55290d;
            Double d10 = this.f55291e;
            List list2 = this.f55292f;
            j jVar = this.f55293g;
            Integer num = this.f55294h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f55295i;
            c cVar2 = this.f55296j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f55297k, null, null, this.f55298l);
        }

        public a b(c cVar) {
            this.f55296j = cVar;
            return this;
        }

        public a c(List list) {
            this.f55298l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f55297k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f55293g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f55289c = (byte[]) hf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f55292f = list;
            return this;
        }

        public a h(List list) {
            this.f55290d = (List) hf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f55287a = (u) hf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f55291e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f55288b = (w) hf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f55285x = resultReceiver;
        if (str2 != null) {
            try {
                r r10 = r(new JSONObject(str2));
                this.f55273d = r10.f55273d;
                this.f55274e = r10.f55274e;
                this.f55275i = r10.f55275i;
                this.f55276o = r10.f55276o;
                this.f55277p = r10.f55277p;
                this.f55278q = r10.f55278q;
                this.f55279r = r10.f55279r;
                this.f55280s = r10.f55280s;
                this.f55281t = r10.f55281t;
                this.f55282u = r10.f55282u;
                this.f55283v = r10.f55283v;
                this.f55286y = r10.f55286y;
                this.f55284w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f55273d = (u) hf.q.l(uVar);
        this.f55274e = (w) hf.q.l(wVar);
        this.f55275i = (byte[]) hf.q.l(bArr);
        this.f55276o = (List) hf.q.l(list);
        this.f55277p = d10;
        this.f55278q = list2;
        this.f55279r = jVar;
        this.f55280s = num;
        this.f55281t = aVar;
        if (str != null) {
            try {
                this.f55282u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f55282u = null;
        }
        this.f55283v = authenticationExtensions;
        this.f55284w = null;
        this.f55286y = list3;
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
        c cVar = this.f55282u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f55286y;
    }

    public AuthenticationExtensions d() {
        return this.f55283v;
    }

    public j e() {
        return this.f55279r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (hf.o.a(this.f55273d, rVar.f55273d) && hf.o.a(this.f55274e, rVar.f55274e) && Arrays.equals(this.f55275i, rVar.f55275i) && hf.o.a(this.f55277p, rVar.f55277p) && this.f55276o.containsAll(rVar.f55276o) && rVar.f55276o.containsAll(this.f55276o) && ((((list = this.f55278q) == null && rVar.f55278q == null) || (list != null && (list2 = rVar.f55278q) != null && list.containsAll(list2) && rVar.f55278q.containsAll(this.f55278q))) && hf.o.a(this.f55279r, rVar.f55279r) && hf.o.a(this.f55280s, rVar.f55280s) && hf.o.a(this.f55281t, rVar.f55281t) && hf.o.a(this.f55282u, rVar.f55282u) && hf.o.a(this.f55283v, rVar.f55283v) && hf.o.a(this.f55284w, rVar.f55284w))) {
            List list4 = this.f55286y;
            if (list4 == null && rVar.f55286y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f55286y) == null || !list4.containsAll(list3) || !rVar.f55286y.containsAll(this.f55286y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f55275i;
    }

    public List g() {
        return this.f55278q;
    }

    public int hashCode() {
        return hf.o.b(this.f55273d, this.f55274e, Integer.valueOf(Arrays.hashCode(this.f55275i)), this.f55276o, this.f55277p, this.f55278q, this.f55279r, this.f55280s, this.f55281t, this.f55282u, this.f55283v, this.f55284w, this.f55286y);
    }

    public String i() {
        return this.f55284w;
    }

    public List j() {
        return this.f55276o;
    }

    public Integer k() {
        return this.f55280s;
    }

    public u l() {
        return this.f55273d;
    }

    public Double o() {
        return this.f55277p;
    }

    public com.google.android.gms.fido.fido2.api.common.a p() {
        return this.f55281t;
    }

    public w q() {
        return this.f55274e;
    }

    public final String toString() {
        List list = this.f55286y;
        AuthenticationExtensions authenticationExtensions = this.f55283v;
        c cVar = this.f55282u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f55281t;
        j jVar = this.f55279r;
        List list2 = this.f55278q;
        List list3 = this.f55276o;
        byte[] bArr = this.f55275i;
        w wVar = this.f55274e;
        String valueOf = String.valueOf(this.f55273d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f55277p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f55280s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
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
        jf.c.q(parcel, 14, this.f55285x, i10, false);
        jf.c.u(parcel, 15, c(), false);
        jf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r r10 = r(new JSONObject(str));
            this.f55273d = r10.f55273d;
            this.f55274e = r10.f55274e;
            this.f55275i = r10.f55275i;
            this.f55276o = r10.f55276o;
            this.f55277p = r10.f55277p;
            this.f55278q = r10.f55278q;
            this.f55279r = r10.f55279r;
            this.f55280s = r10.f55280s;
            this.f55281t = r10.f55281t;
            this.f55282u = r10.f55282u;
            this.f55283v = r10.f55283v;
            this.f55286y = r10.f55286y;
            this.f55284w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
