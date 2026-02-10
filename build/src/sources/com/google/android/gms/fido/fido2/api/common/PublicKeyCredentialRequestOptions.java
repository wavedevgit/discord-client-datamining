package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.internal.fido.q5;
import hf.o;
import hf.q;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import xf.b0;
import xf.d1;
import xf.s;
import xf.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PublicKeyCredentialRequestOptions extends y {
    @NonNull
    public static final Parcelable.Creator<PublicKeyCredentialRequestOptions> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f14599d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f14600e;

    /* renamed from: i  reason: collision with root package name */
    private final String f14601i;

    /* renamed from: o  reason: collision with root package name */
    private final List f14602o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f14603p;

    /* renamed from: q  reason: collision with root package name */
    private final a f14604q;

    /* renamed from: r  reason: collision with root package name */
    private final b0 f14605r;

    /* renamed from: s  reason: collision with root package name */
    private final AuthenticationExtensions f14606s;

    /* renamed from: t  reason: collision with root package name */
    private final Long f14607t;

    /* renamed from: u  reason: collision with root package name */
    private ResultReceiver f14608u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f14609a;

        /* renamed from: b  reason: collision with root package name */
        private Double f14610b;

        /* renamed from: c  reason: collision with root package name */
        private String f14611c;

        /* renamed from: d  reason: collision with root package name */
        private List f14612d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f14613e;

        /* renamed from: f  reason: collision with root package name */
        private a f14614f;

        /* renamed from: g  reason: collision with root package name */
        private b0 f14615g;

        /* renamed from: h  reason: collision with root package name */
        private AuthenticationExtensions f14616h;

        /* renamed from: i  reason: collision with root package name */
        private Long f14617i;

        /* renamed from: j  reason: collision with root package name */
        private ResultReceiver f14618j;

        public PublicKeyCredentialRequestOptions a() {
            String b0Var;
            byte[] bArr = this.f14609a;
            Double d10 = this.f14610b;
            String str = this.f14611c;
            List list = this.f14612d;
            Integer num = this.f14613e;
            a aVar = this.f14614f;
            b0 b0Var2 = this.f14615g;
            if (b0Var2 == null) {
                b0Var = null;
            } else {
                b0Var = b0Var2.toString();
            }
            return new PublicKeyCredentialRequestOptions(bArr, d10, str, list, num, aVar, b0Var, this.f14616h, this.f14617i, null, this.f14618j);
        }

        public Builder b(List list) {
            this.f14612d = list;
            return this;
        }

        public Builder c(AuthenticationExtensions authenticationExtensions) {
            this.f14616h = authenticationExtensions;
            return this;
        }

        public Builder d(byte[] bArr) {
            this.f14609a = (byte[]) q.l(bArr);
            return this;
        }

        public Builder e(Integer num) {
            this.f14613e = num;
            return this;
        }

        public Builder f(String str) {
            this.f14611c = (String) q.l(str);
            return this;
        }

        public Builder g(Double d10) {
            this.f14610b = d10;
            return this;
        }

        public Builder h(a aVar) {
            this.f14614f = aVar;
            return this;
        }

        public final Builder i(Long l10) {
            this.f14617i = l10;
            return this;
        }

        public final Builder j(b0 b0Var) {
            this.f14615g = b0Var;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PublicKeyCredentialRequestOptions(byte[] bArr, Double d10, String str, List list, Integer num, a aVar, String str2, AuthenticationExtensions authenticationExtensions, Long l10, String str3, ResultReceiver resultReceiver) {
        JSONArray jSONArray;
        this.f14608u = resultReceiver;
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
                this.f14599d = a10.f14599d;
                this.f14600e = a10.f14600e;
                this.f14601i = a10.f14601i;
                this.f14602o = a10.f14602o;
                this.f14603p = a10.f14603p;
                this.f14604q = a10.f14604q;
                this.f14605r = a10.f14605r;
                this.f14606s = a10.f14606s;
                this.f14607t = a10.f14607t;
                return;
            } catch (JSONException e10) {
                e = e10;
                throw new IllegalArgumentException(e);
            } catch (d1 e11) {
                e = e11;
                throw new IllegalArgumentException(e);
            }
        }
        this.f14599d = (byte[]) q.l(bArr);
        this.f14600e = d10;
        this.f14601i = (String) q.l(str);
        this.f14602o = list;
        this.f14603p = num;
        this.f14604q = aVar;
        this.f14607t = l10;
        if (str2 != null) {
            try {
                this.f14605r = b0.a(str2);
            } catch (d1 e12) {
                throw new IllegalArgumentException(e12);
            }
        } else {
            this.f14605r = null;
        }
        this.f14606s = authenticationExtensions;
    }

    public List b() {
        return this.f14602o;
    }

    public AuthenticationExtensions c() {
        return this.f14606s;
    }

    public byte[] d() {
        return this.f14599d;
    }

    public Integer e() {
        return this.f14603p;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        if (!(obj instanceof PublicKeyCredentialRequestOptions)) {
            return false;
        }
        PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions = (PublicKeyCredentialRequestOptions) obj;
        if (!Arrays.equals(this.f14599d, publicKeyCredentialRequestOptions.f14599d) || !o.a(this.f14600e, publicKeyCredentialRequestOptions.f14600e) || !o.a(this.f14601i, publicKeyCredentialRequestOptions.f14601i) || ((((list = this.f14602o) != null || publicKeyCredentialRequestOptions.f14602o != null) && (list == null || (list2 = publicKeyCredentialRequestOptions.f14602o) == null || !list.containsAll(list2) || !publicKeyCredentialRequestOptions.f14602o.containsAll(this.f14602o))) || !o.a(this.f14603p, publicKeyCredentialRequestOptions.f14603p) || !o.a(this.f14604q, publicKeyCredentialRequestOptions.f14604q) || !o.a(this.f14605r, publicKeyCredentialRequestOptions.f14605r) || !o.a(this.f14606s, publicKeyCredentialRequestOptions.f14606s) || !o.a(this.f14607t, publicKeyCredentialRequestOptions.f14607t))) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f14601i;
    }

    public Double g() {
        return this.f14600e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Arrays.hashCode(this.f14599d)), this.f14600e, this.f14601i, this.f14602o, this.f14603p, this.f14604q, this.f14605r, this.f14606s, this.f14607t);
    }

    public a i() {
        return this.f14604q;
    }

    public final String toString() {
        AuthenticationExtensions authenticationExtensions = this.f14606s;
        b0 b0Var = this.f14605r;
        a aVar = this.f14604q;
        List list = this.f14602o;
        String b10 = com.google.android.gms.common.util.c.b(this.f14599d);
        String valueOf = String.valueOf(list);
        String valueOf2 = String.valueOf(aVar);
        String valueOf3 = String.valueOf(b0Var);
        String valueOf4 = String.valueOf(authenticationExtensions);
        return "PublicKeyCredentialRequestOptions{\n challenge=" + b10 + ", \n timeoutSeconds=" + this.f14600e + ", \n rpId='" + this.f14601i + "', \n allowList=" + valueOf + ", \n requestId=" + this.f14603p + ", \n tokenBinding=" + valueOf2 + ", \n userVerification=" + valueOf3 + ", \n authenticationExtensions=" + valueOf4 + ", \n longRequestId=" + this.f14607t + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = jf.c.a(parcel);
        jf.c.f(parcel, 2, d(), false);
        jf.c.i(parcel, 3, g(), false);
        jf.c.s(parcel, 4, f(), false);
        jf.c.w(parcel, 5, b(), false);
        jf.c.n(parcel, 6, e(), false);
        jf.c.q(parcel, 7, i(), i10, false);
        b0 b0Var2 = this.f14605r;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        jf.c.s(parcel, 8, b0Var, false);
        jf.c.q(parcel, 9, c(), i10, false);
        jf.c.p(parcel, 10, this.f14607t, false);
        jf.c.s(parcel, 11, null, false);
        jf.c.q(parcel, 12, this.f14608u, i10, false);
        jf.c.b(parcel, a10);
    }
}
