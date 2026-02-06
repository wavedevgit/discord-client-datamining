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
    private final byte[] f13882d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f13883e;

    /* renamed from: i  reason: collision with root package name */
    private final String f13884i;

    /* renamed from: o  reason: collision with root package name */
    private final List f13885o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f13886p;

    /* renamed from: q  reason: collision with root package name */
    private final a f13887q;

    /* renamed from: r  reason: collision with root package name */
    private final b0 f13888r;

    /* renamed from: s  reason: collision with root package name */
    private final AuthenticationExtensions f13889s;

    /* renamed from: t  reason: collision with root package name */
    private final Long f13890t;

    /* renamed from: u  reason: collision with root package name */
    private ResultReceiver f13891u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f13892a;

        /* renamed from: b  reason: collision with root package name */
        private Double f13893b;

        /* renamed from: c  reason: collision with root package name */
        private String f13894c;

        /* renamed from: d  reason: collision with root package name */
        private List f13895d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f13896e;

        /* renamed from: f  reason: collision with root package name */
        private a f13897f;

        /* renamed from: g  reason: collision with root package name */
        private b0 f13898g;

        /* renamed from: h  reason: collision with root package name */
        private AuthenticationExtensions f13899h;

        /* renamed from: i  reason: collision with root package name */
        private Long f13900i;

        /* renamed from: j  reason: collision with root package name */
        private ResultReceiver f13901j;

        public PublicKeyCredentialRequestOptions a() {
            String b0Var;
            byte[] bArr = this.f13892a;
            Double d10 = this.f13893b;
            String str = this.f13894c;
            List list = this.f13895d;
            Integer num = this.f13896e;
            a aVar = this.f13897f;
            b0 b0Var2 = this.f13898g;
            if (b0Var2 == null) {
                b0Var = null;
            } else {
                b0Var = b0Var2.toString();
            }
            return new PublicKeyCredentialRequestOptions(bArr, d10, str, list, num, aVar, b0Var, this.f13899h, this.f13900i, null, this.f13901j);
        }

        public Builder b(List list) {
            this.f13895d = list;
            return this;
        }

        public Builder c(AuthenticationExtensions authenticationExtensions) {
            this.f13899h = authenticationExtensions;
            return this;
        }

        public Builder d(byte[] bArr) {
            this.f13892a = (byte[]) q.l(bArr);
            return this;
        }

        public Builder e(Integer num) {
            this.f13896e = num;
            return this;
        }

        public Builder f(String str) {
            this.f13894c = (String) q.l(str);
            return this;
        }

        public Builder g(Double d10) {
            this.f13893b = d10;
            return this;
        }

        public Builder h(a aVar) {
            this.f13897f = aVar;
            return this;
        }

        public final Builder i(Long l10) {
            this.f13900i = l10;
            return this;
        }

        public final Builder j(b0 b0Var) {
            this.f13898g = b0Var;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PublicKeyCredentialRequestOptions(byte[] bArr, Double d10, String str, List list, Integer num, a aVar, String str2, AuthenticationExtensions authenticationExtensions, Long l10, String str3, ResultReceiver resultReceiver) {
        JSONArray jSONArray;
        this.f13891u = resultReceiver;
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
                this.f13882d = a10.f13882d;
                this.f13883e = a10.f13883e;
                this.f13884i = a10.f13884i;
                this.f13885o = a10.f13885o;
                this.f13886p = a10.f13886p;
                this.f13887q = a10.f13887q;
                this.f13888r = a10.f13888r;
                this.f13889s = a10.f13889s;
                this.f13890t = a10.f13890t;
                return;
            } catch (JSONException e10) {
                e = e10;
                throw new IllegalArgumentException(e);
            } catch (d1 e11) {
                e = e11;
                throw new IllegalArgumentException(e);
            }
        }
        this.f13882d = (byte[]) q.l(bArr);
        this.f13883e = d10;
        this.f13884i = (String) q.l(str);
        this.f13885o = list;
        this.f13886p = num;
        this.f13887q = aVar;
        this.f13890t = l10;
        if (str2 != null) {
            try {
                this.f13888r = b0.a(str2);
            } catch (d1 e12) {
                throw new IllegalArgumentException(e12);
            }
        } else {
            this.f13888r = null;
        }
        this.f13889s = authenticationExtensions;
    }

    public List b() {
        return this.f13885o;
    }

    public AuthenticationExtensions c() {
        return this.f13889s;
    }

    public byte[] d() {
        return this.f13882d;
    }

    public Integer e() {
        return this.f13886p;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        if (!(obj instanceof PublicKeyCredentialRequestOptions)) {
            return false;
        }
        PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions = (PublicKeyCredentialRequestOptions) obj;
        if (!Arrays.equals(this.f13882d, publicKeyCredentialRequestOptions.f13882d) || !o.a(this.f13883e, publicKeyCredentialRequestOptions.f13883e) || !o.a(this.f13884i, publicKeyCredentialRequestOptions.f13884i) || ((((list = this.f13885o) != null || publicKeyCredentialRequestOptions.f13885o != null) && (list == null || (list2 = publicKeyCredentialRequestOptions.f13885o) == null || !list.containsAll(list2) || !publicKeyCredentialRequestOptions.f13885o.containsAll(this.f13885o))) || !o.a(this.f13886p, publicKeyCredentialRequestOptions.f13886p) || !o.a(this.f13887q, publicKeyCredentialRequestOptions.f13887q) || !o.a(this.f13888r, publicKeyCredentialRequestOptions.f13888r) || !o.a(this.f13889s, publicKeyCredentialRequestOptions.f13889s) || !o.a(this.f13890t, publicKeyCredentialRequestOptions.f13890t))) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f13884i;
    }

    public Double h() {
        return this.f13883e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Arrays.hashCode(this.f13882d)), this.f13883e, this.f13884i, this.f13885o, this.f13886p, this.f13887q, this.f13888r, this.f13889s, this.f13890t);
    }

    public a i() {
        return this.f13887q;
    }

    public final String toString() {
        AuthenticationExtensions authenticationExtensions = this.f13889s;
        b0 b0Var = this.f13888r;
        a aVar = this.f13887q;
        List list = this.f13885o;
        String b10 = com.google.android.gms.common.util.c.b(this.f13882d);
        String valueOf = String.valueOf(list);
        String valueOf2 = String.valueOf(aVar);
        String valueOf3 = String.valueOf(b0Var);
        String valueOf4 = String.valueOf(authenticationExtensions);
        return "PublicKeyCredentialRequestOptions{\n challenge=" + b10 + ", \n timeoutSeconds=" + this.f13883e + ", \n rpId='" + this.f13884i + "', \n allowList=" + valueOf + ", \n requestId=" + this.f13886p + ", \n tokenBinding=" + valueOf2 + ", \n userVerification=" + valueOf3 + ", \n authenticationExtensions=" + valueOf4 + ", \n longRequestId=" + this.f13890t + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 2, d(), false);
        hf.c.i(parcel, 3, h(), false);
        hf.c.s(parcel, 4, f(), false);
        hf.c.w(parcel, 5, b(), false);
        hf.c.n(parcel, 6, e(), false);
        hf.c.q(parcel, 7, i(), i10, false);
        b0 b0Var2 = this.f13888r;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        hf.c.s(parcel, 8, b0Var, false);
        hf.c.q(parcel, 9, c(), i10, false);
        hf.c.p(parcel, 10, this.f13890t, false);
        hf.c.s(parcel, 11, null, false);
        hf.c.q(parcel, 12, this.f13891u, i10, false);
        hf.c.b(parcel, a10);
    }
}
