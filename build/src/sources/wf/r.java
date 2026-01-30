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
    private final u f52539d;

    /* renamed from: e  reason: collision with root package name */
    private final w f52540e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f52541i;

    /* renamed from: o  reason: collision with root package name */
    private final List f52542o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f52543p;

    /* renamed from: q  reason: collision with root package name */
    private final List f52544q;

    /* renamed from: r  reason: collision with root package name */
    private final j f52545r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f52546s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f52547t;

    /* renamed from: u  reason: collision with root package name */
    private final c f52548u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f52549v;

    /* renamed from: w  reason: collision with root package name */
    private final String f52550w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f52551x;

    /* renamed from: y  reason: collision with root package name */
    private final List f52552y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f52553a;

        /* renamed from: b  reason: collision with root package name */
        private w f52554b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f52555c;

        /* renamed from: d  reason: collision with root package name */
        private List f52556d;

        /* renamed from: e  reason: collision with root package name */
        private Double f52557e;

        /* renamed from: f  reason: collision with root package name */
        private List f52558f;

        /* renamed from: g  reason: collision with root package name */
        private j f52559g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f52560h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f52561i;

        /* renamed from: j  reason: collision with root package name */
        private c f52562j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f52563k;

        /* renamed from: l  reason: collision with root package name */
        private List f52564l;

        public r a() {
            String cVar;
            u uVar = this.f52553a;
            w wVar = this.f52554b;
            byte[] bArr = this.f52555c;
            List list = this.f52556d;
            Double d10 = this.f52557e;
            List list2 = this.f52558f;
            j jVar = this.f52559g;
            Integer num = this.f52560h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f52561i;
            c cVar2 = this.f52562j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f52563k, null, null, this.f52564l);
        }

        public a b(c cVar) {
            this.f52562j = cVar;
            return this;
        }

        public a c(List list) {
            this.f52564l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f52563k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f52559g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f52555c = (byte[]) gf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f52558f = list;
            return this;
        }

        public a h(List list) {
            this.f52556d = (List) gf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f52553a = (u) gf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f52557e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f52554b = (w) gf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f52551x = resultReceiver;
        if (str2 != null) {
            try {
                r q10 = q(new JSONObject(str2));
                this.f52539d = q10.f52539d;
                this.f52540e = q10.f52540e;
                this.f52541i = q10.f52541i;
                this.f52542o = q10.f52542o;
                this.f52543p = q10.f52543p;
                this.f52544q = q10.f52544q;
                this.f52545r = q10.f52545r;
                this.f52546s = q10.f52546s;
                this.f52547t = q10.f52547t;
                this.f52548u = q10.f52548u;
                this.f52549v = q10.f52549v;
                this.f52552y = q10.f52552y;
                this.f52550w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f52539d = (u) gf.q.l(uVar);
        this.f52540e = (w) gf.q.l(wVar);
        this.f52541i = (byte[]) gf.q.l(bArr);
        this.f52542o = (List) gf.q.l(list);
        this.f52543p = d10;
        this.f52544q = list2;
        this.f52545r = jVar;
        this.f52546s = num;
        this.f52547t = aVar;
        if (str != null) {
            try {
                this.f52548u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f52548u = null;
        }
        this.f52549v = authenticationExtensions;
        this.f52550w = null;
        this.f52552y = list3;
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
        c cVar = this.f52548u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f52552y;
    }

    public AuthenticationExtensions d() {
        return this.f52549v;
    }

    public j e() {
        return this.f52545r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (gf.o.a(this.f52539d, rVar.f52539d) && gf.o.a(this.f52540e, rVar.f52540e) && Arrays.equals(this.f52541i, rVar.f52541i) && gf.o.a(this.f52543p, rVar.f52543p) && this.f52542o.containsAll(rVar.f52542o) && rVar.f52542o.containsAll(this.f52542o) && ((((list = this.f52544q) == null && rVar.f52544q == null) || (list != null && (list2 = rVar.f52544q) != null && list.containsAll(list2) && rVar.f52544q.containsAll(this.f52544q))) && gf.o.a(this.f52545r, rVar.f52545r) && gf.o.a(this.f52546s, rVar.f52546s) && gf.o.a(this.f52547t, rVar.f52547t) && gf.o.a(this.f52548u, rVar.f52548u) && gf.o.a(this.f52549v, rVar.f52549v) && gf.o.a(this.f52550w, rVar.f52550w))) {
            List list4 = this.f52552y;
            if (list4 == null && rVar.f52552y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f52552y) == null || !list4.containsAll(list3) || !rVar.f52552y.containsAll(this.f52552y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f52541i;
    }

    public List g() {
        return this.f52544q;
    }

    public int hashCode() {
        return gf.o.b(this.f52539d, this.f52540e, Integer.valueOf(Arrays.hashCode(this.f52541i)), this.f52542o, this.f52543p, this.f52544q, this.f52545r, this.f52546s, this.f52547t, this.f52548u, this.f52549v, this.f52550w, this.f52552y);
    }

    public String i() {
        return this.f52550w;
    }

    public List j() {
        return this.f52542o;
    }

    public Integer k() {
        return this.f52546s;
    }

    public u m() {
        return this.f52539d;
    }

    public Double n() {
        return this.f52543p;
    }

    public com.google.android.gms.fido.fido2.api.common.a o() {
        return this.f52547t;
    }

    public w p() {
        return this.f52540e;
    }

    public final String toString() {
        List list = this.f52552y;
        AuthenticationExtensions authenticationExtensions = this.f52549v;
        c cVar = this.f52548u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f52547t;
        j jVar = this.f52545r;
        List list2 = this.f52544q;
        List list3 = this.f52542o;
        byte[] bArr = this.f52541i;
        w wVar = this.f52540e;
        String valueOf = String.valueOf(this.f52539d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f52543p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f52546s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
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
        hf.c.q(parcel, 14, this.f52551x, i10, false);
        hf.c.u(parcel, 15, c(), false);
        hf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r q10 = q(new JSONObject(str));
            this.f52539d = q10.f52539d;
            this.f52540e = q10.f52540e;
            this.f52541i = q10.f52541i;
            this.f52542o = q10.f52542o;
            this.f52543p = q10.f52543p;
            this.f52544q = q10.f52544q;
            this.f52545r = q10.f52545r;
            this.f52546s = q10.f52546s;
            this.f52547t = q10.f52547t;
            this.f52548u = q10.f52548u;
            this.f52549v = q10.f52549v;
            this.f52552y = q10.f52552y;
            this.f52550w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
