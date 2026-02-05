package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.internal.fido.q5;
import gf.o;
import gf.q;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import wf.b0;
import wf.d1;
import wf.s;
import wf.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PublicKeyCredentialRequestOptions extends y {
    @NonNull
    public static final Parcelable.Creator<PublicKeyCredentialRequestOptions> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f13919d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f13920e;

    /* renamed from: i  reason: collision with root package name */
    private final String f13921i;

    /* renamed from: o  reason: collision with root package name */
    private final List f13922o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f13923p;

    /* renamed from: q  reason: collision with root package name */
    private final a f13924q;

    /* renamed from: r  reason: collision with root package name */
    private final b0 f13925r;

    /* renamed from: s  reason: collision with root package name */
    private final AuthenticationExtensions f13926s;

    /* renamed from: t  reason: collision with root package name */
    private final Long f13927t;

    /* renamed from: u  reason: collision with root package name */
    private ResultReceiver f13928u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f13929a;

        /* renamed from: b  reason: collision with root package name */
        private Double f13930b;

        /* renamed from: c  reason: collision with root package name */
        private String f13931c;

        /* renamed from: d  reason: collision with root package name */
        private List f13932d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f13933e;

        /* renamed from: f  reason: collision with root package name */
        private a f13934f;

        /* renamed from: g  reason: collision with root package name */
        private b0 f13935g;

        /* renamed from: h  reason: collision with root package name */
        private AuthenticationExtensions f13936h;

        /* renamed from: i  reason: collision with root package name */
        private Long f13937i;

        /* renamed from: j  reason: collision with root package name */
        private ResultReceiver f13938j;

        public PublicKeyCredentialRequestOptions a() {
            String b0Var;
            byte[] bArr = this.f13929a;
            Double d10 = this.f13930b;
            String str = this.f13931c;
            List list = this.f13932d;
            Integer num = this.f13933e;
            a aVar = this.f13934f;
            b0 b0Var2 = this.f13935g;
            if (b0Var2 == null) {
                b0Var = null;
            } else {
                b0Var = b0Var2.toString();
            }
            return new PublicKeyCredentialRequestOptions(bArr, d10, str, list, num, aVar, b0Var, this.f13936h, this.f13937i, null, this.f13938j);
        }

        public Builder b(List list) {
            this.f13932d = list;
            return this;
        }

        public Builder c(AuthenticationExtensions authenticationExtensions) {
            this.f13936h = authenticationExtensions;
            return this;
        }

        public Builder d(byte[] bArr) {
            this.f13929a = (byte[]) q.l(bArr);
            return this;
        }

        public Builder e(Integer num) {
            this.f13933e = num;
            return this;
        }

        public Builder f(String str) {
            this.f13931c = (String) q.l(str);
            return this;
        }

        public Builder g(Double d10) {
            this.f13930b = d10;
            return this;
        }

        public Builder h(a aVar) {
            this.f13934f = aVar;
            return this;
        }

        public final Builder i(Long l10) {
            this.f13937i = l10;
            return this;
        }

        public final Builder j(b0 b0Var) {
            this.f13935g = b0Var;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PublicKeyCredentialRequestOptions(byte[] bArr, Double d10, String str, List list, Integer num, a aVar, String str2, AuthenticationExtensions authenticationExtensions, Long l10, String str3, ResultReceiver resultReceiver) {
        JSONArray jSONArray;
        this.f13928u = resultReceiver;
        if (str3 != null && q5.b()) {
            try {
                JSONObject jSONObject = new JSONObject(str3);
                Builder builder = new Builder();
                builder.d(com.google.android.gms.common.util.c.a(jSONObject.getString("challenge")));
                if (jSONObject.has("timeout")) {
                    builder.g(Double.valueOf(jSONObject.getDouble("timeout") / 1000.0d));
                } else if (jSONObject.has("timeoutSeconds")) {
                    builder.g(Double.valueOf(jSONObject.getDouble("timeoutSeconds")));
                }
                builder.f(jSONObject.getString("rpId"));
                if (jSONObject.has("allowList")) {
                    jSONArray = jSONObject.getJSONArray("allowList");
                } else if (jSONObject.has("allowCredentials")) {
                    jSONArray = jSONObject.getJSONArray("allowCredentials");
                } else {
                    jSONArray = null;
                }
                if (jSONArray != null) {
                    ArrayList arrayList = new ArrayList();
                    for (int i10 = 0; i10 < jSONArray.length(); i10++) {
                        arrayList.add(s.e(jSONArray.getJSONObject(i10)));
                    }
                    builder.b(arrayList);
                }
                if (jSONObject.has("requestId")) {
                    builder.e(Integer.valueOf(jSONObject.getInt("requestId")));
                }
                if (jSONObject.has("tokenBinding")) {
                    JSONObject jSONObject2 = jSONObject.getJSONObject("tokenBinding");
                    builder.h(new a(jSONObject2.getString("status"), jSONObject2.has(StackTraceHelper.ID_KEY) ? jSONObject2.getString(StackTraceHelper.ID_KEY) : null));
                }
                if (jSONObject.has("userVerification")) {
                    builder.j(b0.a(jSONObject.getString("userVerification")));
                }
                if (jSONObject.has("authenticationExtensions")) {
                    builder.c(AuthenticationExtensions.d(jSONObject.getJSONObject("authenticationExtensions")));
                } else if (jSONObject.has("extensions")) {
                    builder.c(AuthenticationExtensions.d(jSONObject.getJSONObject("extensions")));
                }
                if (jSONObject.has("longRequestId")) {
                    builder.i(Long.valueOf(jSONObject.getLong("longRequestId")));
                }
                PublicKeyCredentialRequestOptions a10 = builder.a();
                this.f13919d = a10.f13919d;
                this.f13920e = a10.f13920e;
                this.f13921i = a10.f13921i;
                this.f13922o = a10.f13922o;
                this.f13923p = a10.f13923p;
                this.f13924q = a10.f13924q;
                this.f13925r = a10.f13925r;
                this.f13926s = a10.f13926s;
                this.f13927t = a10.f13927t;
                return;
            } catch (JSONException e10) {
                e = e10;
                throw new IllegalArgumentException(e);
            } catch (d1 e11) {
                e = e11;
                throw new IllegalArgumentException(e);
            }
        }
        this.f13919d = (byte[]) q.l(bArr);
        this.f13920e = d10;
        this.f13921i = (String) q.l(str);
        this.f13922o = list;
        this.f13923p = num;
        this.f13924q = aVar;
        this.f13927t = l10;
        if (str2 != null) {
            try {
                this.f13925r = b0.a(str2);
            } catch (d1 e12) {
                throw new IllegalArgumentException(e12);
            }
        } else {
            this.f13925r = null;
        }
        this.f13926s = authenticationExtensions;
    }

    public List b() {
        return this.f13922o;
    }

    public AuthenticationExtensions c() {
        return this.f13926s;
    }

    public byte[] d() {
        return this.f13919d;
    }

    public Integer e() {
        return this.f13923p;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        if (!(obj instanceof PublicKeyCredentialRequestOptions)) {
            return false;
        }
        PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions = (PublicKeyCredentialRequestOptions) obj;
        if (!Arrays.equals(this.f13919d, publicKeyCredentialRequestOptions.f13919d) || !o.a(this.f13920e, publicKeyCredentialRequestOptions.f13920e) || !o.a(this.f13921i, publicKeyCredentialRequestOptions.f13921i) || ((((list = this.f13922o) != null || publicKeyCredentialRequestOptions.f13922o != null) && (list == null || (list2 = publicKeyCredentialRequestOptions.f13922o) == null || !list.containsAll(list2) || !publicKeyCredentialRequestOptions.f13922o.containsAll(this.f13922o))) || !o.a(this.f13923p, publicKeyCredentialRequestOptions.f13923p) || !o.a(this.f13924q, publicKeyCredentialRequestOptions.f13924q) || !o.a(this.f13925r, publicKeyCredentialRequestOptions.f13925r) || !o.a(this.f13926s, publicKeyCredentialRequestOptions.f13926s) || !o.a(this.f13927t, publicKeyCredentialRequestOptions.f13927t))) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f13921i;
    }

    public Double g() {
        return this.f13920e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Arrays.hashCode(this.f13919d)), this.f13920e, this.f13921i, this.f13922o, this.f13923p, this.f13924q, this.f13925r, this.f13926s, this.f13927t);
    }

    public a i() {
        return this.f13924q;
    }

    public final String toString() {
        AuthenticationExtensions authenticationExtensions = this.f13926s;
        b0 b0Var = this.f13925r;
        a aVar = this.f13924q;
        List list = this.f13922o;
        String b10 = com.google.android.gms.common.util.c.b(this.f13919d);
        String valueOf = String.valueOf(list);
        String valueOf2 = String.valueOf(aVar);
        String valueOf3 = String.valueOf(b0Var);
        String valueOf4 = String.valueOf(authenticationExtensions);
        return "PublicKeyCredentialRequestOptions{\n challenge=" + b10 + ", \n timeoutSeconds=" + this.f13920e + ", \n rpId='" + this.f13921i + "', \n allowList=" + valueOf + ", \n requestId=" + this.f13923p + ", \n tokenBinding=" + valueOf2 + ", \n userVerification=" + valueOf3 + ", \n authenticationExtensions=" + valueOf4 + ", \n longRequestId=" + this.f13927t + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 2, d(), false);
        hf.c.i(parcel, 3, g(), false);
        hf.c.s(parcel, 4, f(), false);
        hf.c.w(parcel, 5, b(), false);
        hf.c.n(parcel, 6, e(), false);
        hf.c.q(parcel, 7, i(), i10, false);
        b0 b0Var2 = this.f13925r;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        hf.c.s(parcel, 8, b0Var, false);
        hf.c.q(parcel, 9, c(), i10, false);
        hf.c.p(parcel, 10, this.f13927t, false);
        hf.c.s(parcel, 11, null, false);
        hf.c.q(parcel, 12, this.f13928u, i10, false);
        hf.c.b(parcel, a10);
    }
}
