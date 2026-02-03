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
    private final u f52106d;

    /* renamed from: e  reason: collision with root package name */
    private final w f52107e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f52108i;

    /* renamed from: o  reason: collision with root package name */
    private final List f52109o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f52110p;

    /* renamed from: q  reason: collision with root package name */
    private final List f52111q;

    /* renamed from: r  reason: collision with root package name */
    private final j f52112r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f52113s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f52114t;

    /* renamed from: u  reason: collision with root package name */
    private final c f52115u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f52116v;

    /* renamed from: w  reason: collision with root package name */
    private final String f52117w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f52118x;

    /* renamed from: y  reason: collision with root package name */
    private final List f52119y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f52120a;

        /* renamed from: b  reason: collision with root package name */
        private w f52121b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f52122c;

        /* renamed from: d  reason: collision with root package name */
        private List f52123d;

        /* renamed from: e  reason: collision with root package name */
        private Double f52124e;

        /* renamed from: f  reason: collision with root package name */
        private List f52125f;

        /* renamed from: g  reason: collision with root package name */
        private j f52126g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f52127h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f52128i;

        /* renamed from: j  reason: collision with root package name */
        private c f52129j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f52130k;

        /* renamed from: l  reason: collision with root package name */
        private List f52131l;

        public r a() {
            String cVar;
            u uVar = this.f52120a;
            w wVar = this.f52121b;
            byte[] bArr = this.f52122c;
            List list = this.f52123d;
            Double d10 = this.f52124e;
            List list2 = this.f52125f;
            j jVar = this.f52126g;
            Integer num = this.f52127h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f52128i;
            c cVar2 = this.f52129j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f52130k, null, null, this.f52131l);
        }

        public a b(c cVar) {
            this.f52129j = cVar;
            return this;
        }

        public a c(List list) {
            this.f52131l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f52130k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f52126g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f52122c = (byte[]) gf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f52125f = list;
            return this;
        }

        public a h(List list) {
            this.f52123d = (List) gf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f52120a = (u) gf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f52124e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f52121b = (w) gf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f52118x = resultReceiver;
        if (str2 != null) {
            try {
                r q10 = q(new JSONObject(str2));
                this.f52106d = q10.f52106d;
                this.f52107e = q10.f52107e;
                this.f52108i = q10.f52108i;
                this.f52109o = q10.f52109o;
                this.f52110p = q10.f52110p;
                this.f52111q = q10.f52111q;
                this.f52112r = q10.f52112r;
                this.f52113s = q10.f52113s;
                this.f52114t = q10.f52114t;
                this.f52115u = q10.f52115u;
                this.f52116v = q10.f52116v;
                this.f52119y = q10.f52119y;
                this.f52117w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f52106d = (u) gf.q.l(uVar);
        this.f52107e = (w) gf.q.l(wVar);
        this.f52108i = (byte[]) gf.q.l(bArr);
        this.f52109o = (List) gf.q.l(list);
        this.f52110p = d10;
        this.f52111q = list2;
        this.f52112r = jVar;
        this.f52113s = num;
        this.f52114t = aVar;
        if (str != null) {
            try {
                this.f52115u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f52115u = null;
        }
        this.f52116v = authenticationExtensions;
        this.f52117w = null;
        this.f52119y = list3;
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
        c cVar = this.f52115u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f52119y;
    }

    public AuthenticationExtensions d() {
        return this.f52116v;
    }

    public j e() {
        return this.f52112r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (gf.o.a(this.f52106d, rVar.f52106d) && gf.o.a(this.f52107e, rVar.f52107e) && Arrays.equals(this.f52108i, rVar.f52108i) && gf.o.a(this.f52110p, rVar.f52110p) && this.f52109o.containsAll(rVar.f52109o) && rVar.f52109o.containsAll(this.f52109o) && ((((list = this.f52111q) == null && rVar.f52111q == null) || (list != null && (list2 = rVar.f52111q) != null && list.containsAll(list2) && rVar.f52111q.containsAll(this.f52111q))) && gf.o.a(this.f52112r, rVar.f52112r) && gf.o.a(this.f52113s, rVar.f52113s) && gf.o.a(this.f52114t, rVar.f52114t) && gf.o.a(this.f52115u, rVar.f52115u) && gf.o.a(this.f52116v, rVar.f52116v) && gf.o.a(this.f52117w, rVar.f52117w))) {
            List list4 = this.f52119y;
            if (list4 == null && rVar.f52119y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f52119y) == null || !list4.containsAll(list3) || !rVar.f52119y.containsAll(this.f52119y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f52108i;
    }

    public List g() {
        return this.f52111q;
    }

    public int hashCode() {
        return gf.o.b(this.f52106d, this.f52107e, Integer.valueOf(Arrays.hashCode(this.f52108i)), this.f52109o, this.f52110p, this.f52111q, this.f52112r, this.f52113s, this.f52114t, this.f52115u, this.f52116v, this.f52117w, this.f52119y);
    }

    public String i() {
        return this.f52117w;
    }

    public List j() {
        return this.f52109o;
    }

    public Integer k() {
        return this.f52113s;
    }

    public u m() {
        return this.f52106d;
    }

    public Double n() {
        return this.f52110p;
    }

    public com.google.android.gms.fido.fido2.api.common.a o() {
        return this.f52114t;
    }

    public w p() {
        return this.f52107e;
    }

    public final String toString() {
        List list = this.f52119y;
        AuthenticationExtensions authenticationExtensions = this.f52116v;
        c cVar = this.f52115u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f52114t;
        j jVar = this.f52112r;
        List list2 = this.f52111q;
        List list3 = this.f52109o;
        byte[] bArr = this.f52108i;
        w wVar = this.f52107e;
        String valueOf = String.valueOf(this.f52106d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f52110p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f52113s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
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
        hf.c.q(parcel, 14, this.f52118x, i10, false);
        hf.c.u(parcel, 15, c(), false);
        hf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r q10 = q(new JSONObject(str));
            this.f52106d = q10.f52106d;
            this.f52107e = q10.f52107e;
            this.f52108i = q10.f52108i;
            this.f52109o = q10.f52109o;
            this.f52110p = q10.f52110p;
            this.f52111q = q10.f52111q;
            this.f52112r = q10.f52112r;
            this.f52113s = q10.f52113s;
            this.f52114t = q10.f52114t;
            this.f52115u = q10.f52115u;
            this.f52116v = q10.f52116v;
            this.f52119y = q10.f52119y;
            this.f52117w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
