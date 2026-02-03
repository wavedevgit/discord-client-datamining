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
    private final u f52328d;

    /* renamed from: e  reason: collision with root package name */
    private final w f52329e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f52330i;

    /* renamed from: o  reason: collision with root package name */
    private final List f52331o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f52332p;

    /* renamed from: q  reason: collision with root package name */
    private final List f52333q;

    /* renamed from: r  reason: collision with root package name */
    private final j f52334r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f52335s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f52336t;

    /* renamed from: u  reason: collision with root package name */
    private final c f52337u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f52338v;

    /* renamed from: w  reason: collision with root package name */
    private final String f52339w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f52340x;

    /* renamed from: y  reason: collision with root package name */
    private final List f52341y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f52342a;

        /* renamed from: b  reason: collision with root package name */
        private w f52343b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f52344c;

        /* renamed from: d  reason: collision with root package name */
        private List f52345d;

        /* renamed from: e  reason: collision with root package name */
        private Double f52346e;

        /* renamed from: f  reason: collision with root package name */
        private List f52347f;

        /* renamed from: g  reason: collision with root package name */
        private j f52348g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f52349h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f52350i;

        /* renamed from: j  reason: collision with root package name */
        private c f52351j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f52352k;

        /* renamed from: l  reason: collision with root package name */
        private List f52353l;

        public r a() {
            String cVar;
            u uVar = this.f52342a;
            w wVar = this.f52343b;
            byte[] bArr = this.f52344c;
            List list = this.f52345d;
            Double d10 = this.f52346e;
            List list2 = this.f52347f;
            j jVar = this.f52348g;
            Integer num = this.f52349h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f52350i;
            c cVar2 = this.f52351j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f52352k, null, null, this.f52353l);
        }

        public a b(c cVar) {
            this.f52351j = cVar;
            return this;
        }

        public a c(List list) {
            this.f52353l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f52352k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f52348g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f52344c = (byte[]) gf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f52347f = list;
            return this;
        }

        public a h(List list) {
            this.f52345d = (List) gf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f52342a = (u) gf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f52346e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f52343b = (w) gf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f52340x = resultReceiver;
        if (str2 != null) {
            try {
                r q10 = q(new JSONObject(str2));
                this.f52328d = q10.f52328d;
                this.f52329e = q10.f52329e;
                this.f52330i = q10.f52330i;
                this.f52331o = q10.f52331o;
                this.f52332p = q10.f52332p;
                this.f52333q = q10.f52333q;
                this.f52334r = q10.f52334r;
                this.f52335s = q10.f52335s;
                this.f52336t = q10.f52336t;
                this.f52337u = q10.f52337u;
                this.f52338v = q10.f52338v;
                this.f52341y = q10.f52341y;
                this.f52339w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f52328d = (u) gf.q.l(uVar);
        this.f52329e = (w) gf.q.l(wVar);
        this.f52330i = (byte[]) gf.q.l(bArr);
        this.f52331o = (List) gf.q.l(list);
        this.f52332p = d10;
        this.f52333q = list2;
        this.f52334r = jVar;
        this.f52335s = num;
        this.f52336t = aVar;
        if (str != null) {
            try {
                this.f52337u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f52337u = null;
        }
        this.f52338v = authenticationExtensions;
        this.f52339w = null;
        this.f52341y = list3;
    }

    public static r q(JSONObject jSONObject) {
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
        c cVar = this.f52337u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f52341y;
    }

    public AuthenticationExtensions d() {
        return this.f52338v;
    }

    public j e() {
        return this.f52334r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (gf.o.a(this.f52328d, rVar.f52328d) && gf.o.a(this.f52329e, rVar.f52329e) && Arrays.equals(this.f52330i, rVar.f52330i) && gf.o.a(this.f52332p, rVar.f52332p) && this.f52331o.containsAll(rVar.f52331o) && rVar.f52331o.containsAll(this.f52331o) && ((((list = this.f52333q) == null && rVar.f52333q == null) || (list != null && (list2 = rVar.f52333q) != null && list.containsAll(list2) && rVar.f52333q.containsAll(this.f52333q))) && gf.o.a(this.f52334r, rVar.f52334r) && gf.o.a(this.f52335s, rVar.f52335s) && gf.o.a(this.f52336t, rVar.f52336t) && gf.o.a(this.f52337u, rVar.f52337u) && gf.o.a(this.f52338v, rVar.f52338v) && gf.o.a(this.f52339w, rVar.f52339w))) {
            List list4 = this.f52341y;
            if (list4 == null && rVar.f52341y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f52341y) == null || !list4.containsAll(list3) || !rVar.f52341y.containsAll(this.f52341y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f52330i;
    }

    public List g() {
        return this.f52333q;
    }

    public int hashCode() {
        return gf.o.b(this.f52328d, this.f52329e, Integer.valueOf(Arrays.hashCode(this.f52330i)), this.f52331o, this.f52332p, this.f52333q, this.f52334r, this.f52335s, this.f52336t, this.f52337u, this.f52338v, this.f52339w, this.f52341y);
    }

    public String i() {
        return this.f52339w;
    }

    public List j() {
        return this.f52331o;
    }

    public Integer k() {
        return this.f52335s;
    }

    public u m() {
        return this.f52328d;
    }

    public Double n() {
        return this.f52332p;
    }

    public com.google.android.gms.fido.fido2.api.common.a o() {
        return this.f52336t;
    }

    public w p() {
        return this.f52329e;
    }

    public final String toString() {
        List list = this.f52341y;
        AuthenticationExtensions authenticationExtensions = this.f52338v;
        c cVar = this.f52337u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f52336t;
        j jVar = this.f52334r;
        List list2 = this.f52333q;
        List list3 = this.f52331o;
        byte[] bArr = this.f52330i;
        w wVar = this.f52329e;
        String valueOf = String.valueOf(this.f52328d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f52332p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f52335s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 2, m(), i10, false);
        hf.c.q(parcel, 3, p(), i10, false);
        hf.c.f(parcel, 4, f(), false);
        hf.c.w(parcel, 5, j(), false);
        hf.c.i(parcel, 6, n(), false);
        hf.c.w(parcel, 7, g(), false);
        hf.c.q(parcel, 8, e(), i10, false);
        hf.c.n(parcel, 9, k(), false);
        hf.c.q(parcel, 10, o(), i10, false);
        hf.c.s(parcel, 11, b(), false);
        hf.c.q(parcel, 12, d(), i10, false);
        hf.c.s(parcel, 13, i(), false);
        hf.c.q(parcel, 14, this.f52340x, i10, false);
        hf.c.u(parcel, 15, c(), false);
        hf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r q10 = q(new JSONObject(str));
            this.f52328d = q10.f52328d;
            this.f52329e = q10.f52329e;
            this.f52330i = q10.f52330i;
            this.f52331o = q10.f52331o;
            this.f52332p = q10.f52332p;
            this.f52333q = q10.f52333q;
            this.f52334r = q10.f52334r;
            this.f52335s = q10.f52335s;
            this.f52336t = q10.f52336t;
            this.f52337u = q10.f52337u;
            this.f52338v = q10.f52338v;
            this.f52341y = q10.f52341y;
            this.f52339w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
