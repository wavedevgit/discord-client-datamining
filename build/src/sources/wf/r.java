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
    private final u f52982d;

    /* renamed from: e  reason: collision with root package name */
    private final w f52983e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f52984i;

    /* renamed from: o  reason: collision with root package name */
    private final List f52985o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f52986p;

    /* renamed from: q  reason: collision with root package name */
    private final List f52987q;

    /* renamed from: r  reason: collision with root package name */
    private final j f52988r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f52989s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f52990t;

    /* renamed from: u  reason: collision with root package name */
    private final c f52991u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f52992v;

    /* renamed from: w  reason: collision with root package name */
    private final String f52993w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f52994x;

    /* renamed from: y  reason: collision with root package name */
    private final List f52995y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f52996a;

        /* renamed from: b  reason: collision with root package name */
        private w f52997b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f52998c;

        /* renamed from: d  reason: collision with root package name */
        private List f52999d;

        /* renamed from: e  reason: collision with root package name */
        private Double f53000e;

        /* renamed from: f  reason: collision with root package name */
        private List f53001f;

        /* renamed from: g  reason: collision with root package name */
        private j f53002g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f53003h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f53004i;

        /* renamed from: j  reason: collision with root package name */
        private c f53005j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f53006k;

        /* renamed from: l  reason: collision with root package name */
        private List f53007l;

        public r a() {
            String cVar;
            u uVar = this.f52996a;
            w wVar = this.f52997b;
            byte[] bArr = this.f52998c;
            List list = this.f52999d;
            Double d10 = this.f53000e;
            List list2 = this.f53001f;
            j jVar = this.f53002g;
            Integer num = this.f53003h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f53004i;
            c cVar2 = this.f53005j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f53006k, null, null, this.f53007l);
        }

        public a b(c cVar) {
            this.f53005j = cVar;
            return this;
        }

        public a c(List list) {
            this.f53007l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f53006k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f53002g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f52998c = (byte[]) gf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f53001f = list;
            return this;
        }

        public a h(List list) {
            this.f52999d = (List) gf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f52996a = (u) gf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f53000e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f52997b = (w) gf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f52994x = resultReceiver;
        if (str2 != null) {
            try {
                r r10 = r(new JSONObject(str2));
                this.f52982d = r10.f52982d;
                this.f52983e = r10.f52983e;
                this.f52984i = r10.f52984i;
                this.f52985o = r10.f52985o;
                this.f52986p = r10.f52986p;
                this.f52987q = r10.f52987q;
                this.f52988r = r10.f52988r;
                this.f52989s = r10.f52989s;
                this.f52990t = r10.f52990t;
                this.f52991u = r10.f52991u;
                this.f52992v = r10.f52992v;
                this.f52995y = r10.f52995y;
                this.f52993w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f52982d = (u) gf.q.l(uVar);
        this.f52983e = (w) gf.q.l(wVar);
        this.f52984i = (byte[]) gf.q.l(bArr);
        this.f52985o = (List) gf.q.l(list);
        this.f52986p = d10;
        this.f52987q = list2;
        this.f52988r = jVar;
        this.f52989s = num;
        this.f52990t = aVar;
        if (str != null) {
            try {
                this.f52991u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f52991u = null;
        }
        this.f52992v = authenticationExtensions;
        this.f52993w = null;
        this.f52995y = list3;
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
        c cVar = this.f52991u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f52995y;
    }

    public AuthenticationExtensions d() {
        return this.f52992v;
    }

    public j e() {
        return this.f52988r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (gf.o.a(this.f52982d, rVar.f52982d) && gf.o.a(this.f52983e, rVar.f52983e) && Arrays.equals(this.f52984i, rVar.f52984i) && gf.o.a(this.f52986p, rVar.f52986p) && this.f52985o.containsAll(rVar.f52985o) && rVar.f52985o.containsAll(this.f52985o) && ((((list = this.f52987q) == null && rVar.f52987q == null) || (list != null && (list2 = rVar.f52987q) != null && list.containsAll(list2) && rVar.f52987q.containsAll(this.f52987q))) && gf.o.a(this.f52988r, rVar.f52988r) && gf.o.a(this.f52989s, rVar.f52989s) && gf.o.a(this.f52990t, rVar.f52990t) && gf.o.a(this.f52991u, rVar.f52991u) && gf.o.a(this.f52992v, rVar.f52992v) && gf.o.a(this.f52993w, rVar.f52993w))) {
            List list4 = this.f52995y;
            if (list4 == null && rVar.f52995y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f52995y) == null || !list4.containsAll(list3) || !rVar.f52995y.containsAll(this.f52995y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f52984i;
    }

    public List g() {
        return this.f52987q;
    }

    public int hashCode() {
        return gf.o.b(this.f52982d, this.f52983e, Integer.valueOf(Arrays.hashCode(this.f52984i)), this.f52985o, this.f52986p, this.f52987q, this.f52988r, this.f52989s, this.f52990t, this.f52991u, this.f52992v, this.f52993w, this.f52995y);
    }

    public String i() {
        return this.f52993w;
    }

    public List j() {
        return this.f52985o;
    }

    public Integer l() {
        return this.f52989s;
    }

    public u n() {
        return this.f52982d;
    }

    public Double o() {
        return this.f52986p;
    }

    public com.google.android.gms.fido.fido2.api.common.a p() {
        return this.f52990t;
    }

    public w q() {
        return this.f52983e;
    }

    public final String toString() {
        List list = this.f52995y;
        AuthenticationExtensions authenticationExtensions = this.f52992v;
        c cVar = this.f52991u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f52990t;
        j jVar = this.f52988r;
        List list2 = this.f52987q;
        List list3 = this.f52985o;
        byte[] bArr = this.f52984i;
        w wVar = this.f52983e;
        String valueOf = String.valueOf(this.f52982d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f52986p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f52989s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 2, n(), i10, false);
        hf.c.q(parcel, 3, q(), i10, false);
        hf.c.f(parcel, 4, f(), false);
        hf.c.w(parcel, 5, j(), false);
        hf.c.i(parcel, 6, o(), false);
        hf.c.w(parcel, 7, g(), false);
        hf.c.q(parcel, 8, e(), i10, false);
        hf.c.n(parcel, 9, l(), false);
        hf.c.q(parcel, 10, p(), i10, false);
        hf.c.s(parcel, 11, b(), false);
        hf.c.q(parcel, 12, d(), i10, false);
        hf.c.s(parcel, 13, i(), false);
        hf.c.q(parcel, 14, this.f52994x, i10, false);
        hf.c.u(parcel, 15, c(), false);
        hf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r r10 = r(new JSONObject(str));
            this.f52982d = r10.f52982d;
            this.f52983e = r10.f52983e;
            this.f52984i = r10.f52984i;
            this.f52985o = r10.f52985o;
            this.f52986p = r10.f52986p;
            this.f52987q = r10.f52987q;
            this.f52988r = r10.f52988r;
            this.f52989s = r10.f52989s;
            this.f52990t = r10.f52990t;
            this.f52991u = r10.f52991u;
            this.f52992v = r10.f52992v;
            this.f52995y = r10.f52995y;
            this.f52993w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
