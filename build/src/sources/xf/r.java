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
    private final u f54972d;

    /* renamed from: e  reason: collision with root package name */
    private final w f54973e;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f54974i;

    /* renamed from: o  reason: collision with root package name */
    private final List f54975o;

    /* renamed from: p  reason: collision with root package name */
    private final Double f54976p;

    /* renamed from: q  reason: collision with root package name */
    private final List f54977q;

    /* renamed from: r  reason: collision with root package name */
    private final j f54978r;

    /* renamed from: s  reason: collision with root package name */
    private final Integer f54979s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.gms.fido.fido2.api.common.a f54980t;

    /* renamed from: u  reason: collision with root package name */
    private final c f54981u;

    /* renamed from: v  reason: collision with root package name */
    private final AuthenticationExtensions f54982v;

    /* renamed from: w  reason: collision with root package name */
    private final String f54983w;

    /* renamed from: x  reason: collision with root package name */
    private ResultReceiver f54984x;

    /* renamed from: y  reason: collision with root package name */
    private final List f54985y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private u f54986a;

        /* renamed from: b  reason: collision with root package name */
        private w f54987b;

        /* renamed from: c  reason: collision with root package name */
        private byte[] f54988c;

        /* renamed from: d  reason: collision with root package name */
        private List f54989d;

        /* renamed from: e  reason: collision with root package name */
        private Double f54990e;

        /* renamed from: f  reason: collision with root package name */
        private List f54991f;

        /* renamed from: g  reason: collision with root package name */
        private j f54992g;

        /* renamed from: h  reason: collision with root package name */
        private Integer f54993h;

        /* renamed from: i  reason: collision with root package name */
        private com.google.android.gms.fido.fido2.api.common.a f54994i;

        /* renamed from: j  reason: collision with root package name */
        private c f54995j;

        /* renamed from: k  reason: collision with root package name */
        private AuthenticationExtensions f54996k;

        /* renamed from: l  reason: collision with root package name */
        private List f54997l;

        public r a() {
            String cVar;
            u uVar = this.f54986a;
            w wVar = this.f54987b;
            byte[] bArr = this.f54988c;
            List list = this.f54989d;
            Double d10 = this.f54990e;
            List list2 = this.f54991f;
            j jVar = this.f54992g;
            Integer num = this.f54993h;
            com.google.android.gms.fido.fido2.api.common.a aVar = this.f54994i;
            c cVar2 = this.f54995j;
            if (cVar2 == null) {
                cVar = null;
            } else {
                cVar = cVar2.toString();
            }
            return new r(uVar, wVar, bArr, list, d10, list2, jVar, num, aVar, cVar, this.f54996k, null, null, this.f54997l);
        }

        public a b(c cVar) {
            this.f54995j = cVar;
            return this;
        }

        public a c(List list) {
            this.f54997l = list;
            return this;
        }

        public a d(AuthenticationExtensions authenticationExtensions) {
            this.f54996k = authenticationExtensions;
            return this;
        }

        public a e(j jVar) {
            this.f54992g = jVar;
            return this;
        }

        public a f(byte[] bArr) {
            this.f54988c = (byte[]) hf.q.l(bArr);
            return this;
        }

        public a g(List list) {
            this.f54991f = list;
            return this;
        }

        public a h(List list) {
            this.f54989d = (List) hf.q.l(list);
            return this;
        }

        public a i(u uVar) {
            this.f54986a = (u) hf.q.l(uVar);
            return this;
        }

        public a j(Double d10) {
            this.f54990e = d10;
            return this;
        }

        public a k(w wVar) {
            this.f54987b = (w) hf.q.l(wVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(u uVar, w wVar, byte[] bArr, List list, Double d10, List list2, j jVar, Integer num, com.google.android.gms.fido.fido2.api.common.a aVar, String str, AuthenticationExtensions authenticationExtensions, String str2, ResultReceiver resultReceiver, List list3) {
        this.f54984x = resultReceiver;
        if (str2 != null) {
            try {
                r t10 = t(new JSONObject(str2));
                this.f54972d = t10.f54972d;
                this.f54973e = t10.f54973e;
                this.f54974i = t10.f54974i;
                this.f54975o = t10.f54975o;
                this.f54976p = t10.f54976p;
                this.f54977q = t10.f54977q;
                this.f54978r = t10.f54978r;
                this.f54979s = t10.f54979s;
                this.f54980t = t10.f54980t;
                this.f54981u = t10.f54981u;
                this.f54982v = t10.f54982v;
                this.f54985y = t10.f54985y;
                this.f54983w = str2;
                return;
            } catch (JSONException e10) {
                throw new IllegalArgumentException(e10);
            }
        }
        this.f54972d = (u) hf.q.l(uVar);
        this.f54973e = (w) hf.q.l(wVar);
        this.f54974i = (byte[]) hf.q.l(bArr);
        this.f54975o = (List) hf.q.l(list);
        this.f54976p = d10;
        this.f54977q = list2;
        this.f54978r = jVar;
        this.f54979s = num;
        this.f54980t = aVar;
        if (str != null) {
            try {
                this.f54981u = c.a(str);
            } catch (c.a e11) {
                throw new IllegalArgumentException(e11);
            }
        } else {
            this.f54981u = null;
        }
        this.f54982v = authenticationExtensions;
        this.f54983w = null;
        this.f54985y = list3;
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
        c cVar = this.f54981u;
        if (cVar == null) {
            return null;
        }
        return cVar.toString();
    }

    public List c() {
        return this.f54985y;
    }

    public AuthenticationExtensions d() {
        return this.f54982v;
    }

    public j e() {
        return this.f54978r;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        List list3;
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (hf.o.a(this.f54972d, rVar.f54972d) && hf.o.a(this.f54973e, rVar.f54973e) && Arrays.equals(this.f54974i, rVar.f54974i) && hf.o.a(this.f54976p, rVar.f54976p) && this.f54975o.containsAll(rVar.f54975o) && rVar.f54975o.containsAll(this.f54975o) && ((((list = this.f54977q) == null && rVar.f54977q == null) || (list != null && (list2 = rVar.f54977q) != null && list.containsAll(list2) && rVar.f54977q.containsAll(this.f54977q))) && hf.o.a(this.f54978r, rVar.f54978r) && hf.o.a(this.f54979s, rVar.f54979s) && hf.o.a(this.f54980t, rVar.f54980t) && hf.o.a(this.f54981u, rVar.f54981u) && hf.o.a(this.f54982v, rVar.f54982v) && hf.o.a(this.f54983w, rVar.f54983w))) {
            List list4 = this.f54985y;
            if (list4 == null && rVar.f54985y == null) {
                return true;
            }
            if (list4 == null || (list3 = rVar.f54985y) == null || !list4.containsAll(list3) || !rVar.f54985y.containsAll(this.f54985y)) {
                return false;
            }
            return true;
        }
        return false;
    }

    public byte[] f() {
        return this.f54974i;
    }

    public List h() {
        return this.f54977q;
    }

    public int hashCode() {
        return hf.o.b(this.f54972d, this.f54973e, Integer.valueOf(Arrays.hashCode(this.f54974i)), this.f54975o, this.f54976p, this.f54977q, this.f54978r, this.f54979s, this.f54980t, this.f54981u, this.f54982v, this.f54983w, this.f54985y);
    }

    public String i() {
        return this.f54983w;
    }

    public List j() {
        return this.f54975o;
    }

    public Integer l() {
        return this.f54979s;
    }

    public u o() {
        return this.f54972d;
    }

    public Double p() {
        return this.f54976p;
    }

    public com.google.android.gms.fido.fido2.api.common.a q() {
        return this.f54980t;
    }

    public w r() {
        return this.f54973e;
    }

    public final String toString() {
        List list = this.f54985y;
        AuthenticationExtensions authenticationExtensions = this.f54982v;
        c cVar = this.f54981u;
        com.google.android.gms.fido.fido2.api.common.a aVar = this.f54980t;
        j jVar = this.f54978r;
        List list2 = this.f54977q;
        List list3 = this.f54975o;
        byte[] bArr = this.f54974i;
        w wVar = this.f54973e;
        String valueOf = String.valueOf(this.f54972d);
        String valueOf2 = String.valueOf(wVar);
        String b10 = com.google.android.gms.common.util.c.b(bArr);
        String valueOf3 = String.valueOf(list3);
        String valueOf4 = String.valueOf(list2);
        String valueOf5 = String.valueOf(jVar);
        String valueOf6 = String.valueOf(aVar);
        String valueOf7 = String.valueOf(cVar);
        String valueOf8 = String.valueOf(authenticationExtensions);
        String valueOf9 = String.valueOf(list);
        return "PublicKeyCredentialCreationOptions{\n rp=" + valueOf + ", \n user=" + valueOf2 + ", \n challenge=" + b10 + ", \n parameters=" + valueOf3 + ", \n timeoutSeconds=" + this.f54976p + ", \n excludeList=" + valueOf4 + ", \n authenticatorSelection=" + valueOf5 + ", \n requestId=" + this.f54979s + ", \n tokenBinding=" + valueOf6 + ", \n attestationConveyancePreference=" + valueOf7 + ", \n authenticationExtensions=" + valueOf8 + ", \n attestationFormats=" + valueOf9 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 2, o(), i10, false);
        jf.c.q(parcel, 3, r(), i10, false);
        jf.c.f(parcel, 4, f(), false);
        jf.c.w(parcel, 5, j(), false);
        jf.c.i(parcel, 6, p(), false);
        jf.c.w(parcel, 7, h(), false);
        jf.c.q(parcel, 8, e(), i10, false);
        jf.c.n(parcel, 9, l(), false);
        jf.c.q(parcel, 10, q(), i10, false);
        jf.c.s(parcel, 11, b(), false);
        jf.c.q(parcel, 12, d(), i10, false);
        jf.c.s(parcel, 13, i(), false);
        jf.c.q(parcel, 14, this.f54984x, i10, false);
        jf.c.u(parcel, 15, c(), false);
        jf.c.b(parcel, a10);
    }

    public r(String str) {
        try {
            r t10 = t(new JSONObject(str));
            this.f54972d = t10.f54972d;
            this.f54973e = t10.f54973e;
            this.f54974i = t10.f54974i;
            this.f54975o = t10.f54975o;
            this.f54976p = t10.f54976p;
            this.f54977q = t10.f54977q;
            this.f54978r = t10.f54978r;
            this.f54979s = t10.f54979s;
            this.f54980t = t10.f54980t;
            this.f54981u = t10.f54981u;
            this.f54982v = t10.f54982v;
            this.f54985y = t10.f54985y;
            this.f54983w = str;
        } catch (JSONException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
