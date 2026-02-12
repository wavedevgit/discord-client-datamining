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
    private final byte[] f14600d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f14601e;

    /* renamed from: i  reason: collision with root package name */
    private final String f14602i;

    /* renamed from: o  reason: collision with root package name */
    private final List f14603o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f14604p;

    /* renamed from: q  reason: collision with root package name */
    private final a f14605q;

    /* renamed from: r  reason: collision with root package name */
    private final b0 f14606r;

    /* renamed from: s  reason: collision with root package name */
    private final AuthenticationExtensions f14607s;

    /* renamed from: t  reason: collision with root package name */
    private final Long f14608t;

    /* renamed from: u  reason: collision with root package name */
    private ResultReceiver f14609u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f14610a;

        /* renamed from: b  reason: collision with root package name */
        private Double f14611b;

        /* renamed from: c  reason: collision with root package name */
        private String f14612c;

        /* renamed from: d  reason: collision with root package name */
        private List f14613d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f14614e;

        /* renamed from: f  reason: collision with root package name */
        private a f14615f;

        /* renamed from: g  reason: collision with root package name */
        private b0 f14616g;

        /* renamed from: h  reason: collision with root package name */
        private AuthenticationExtensions f14617h;

        /* renamed from: i  reason: collision with root package name */
        private Long f14618i;

        /* renamed from: j  reason: collision with root package name */
        private ResultReceiver f14619j;

        public PublicKeyCredentialRequestOptions a() {
            String b0Var;
            byte[] bArr = this.f14610a;
            Double d10 = this.f14611b;
            String str = this.f14612c;
            List list = this.f14613d;
            Integer num = this.f14614e;
            a aVar = this.f14615f;
            b0 b0Var2 = this.f14616g;
            if (b0Var2 == null) {
                b0Var = null;
            } else {
                b0Var = b0Var2.toString();
            }
            return new PublicKeyCredentialRequestOptions(bArr, d10, str, list, num, aVar, b0Var, this.f14617h, this.f14618i, null, this.f14619j);
        }

        public Builder b(List list) {
            this.f14613d = list;
            return this;
        }

        public Builder c(AuthenticationExtensions authenticationExtensions) {
            this.f14617h = authenticationExtensions;
            return this;
        }

        public Builder d(byte[] bArr) {
            this.f14610a = (byte[]) q.l(bArr);
            return this;
        }

        public Builder e(Integer num) {
            this.f14614e = num;
            return this;
        }

        public Builder f(String str) {
            this.f14612c = (String) q.l(str);
            return this;
        }

        public Builder g(Double d10) {
            this.f14611b = d10;
            return this;
        }

        public Builder h(a aVar) {
            this.f14615f = aVar;
            return this;
        }

        public final Builder i(Long l10) {
            this.f14618i = l10;
            return this;
        }

        public final Builder j(b0 b0Var) {
            this.f14616g = b0Var;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PublicKeyCredentialRequestOptions(byte[] bArr, Double d10, String str, List list, Integer num, a aVar, String str2, AuthenticationExtensions authenticationExtensions, Long l10, String str3, ResultReceiver resultReceiver) {
        JSONArray jSONArray;
        this.f14609u = resultReceiver;
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
                this.f14600d = a10.f14600d;
                this.f14601e = a10.f14601e;
                this.f14602i = a10.f14602i;
                this.f14603o = a10.f14603o;
                this.f14604p = a10.f14604p;
                this.f14605q = a10.f14605q;
                this.f14606r = a10.f14606r;
                this.f14607s = a10.f14607s;
                this.f14608t = a10.f14608t;
                return;
            } catch (JSONException e10) {
                e = e10;
                throw new IllegalArgumentException(e);
            } catch (d1 e11) {
                e = e11;
                throw new IllegalArgumentException(e);
            }
        }
        this.f14600d = (byte[]) q.l(bArr);
        this.f14601e = d10;
        this.f14602i = (String) q.l(str);
        this.f14603o = list;
        this.f14604p = num;
        this.f14605q = aVar;
        this.f14608t = l10;
        if (str2 != null) {
            try {
                this.f14606r = b0.a(str2);
            } catch (d1 e12) {
                throw new IllegalArgumentException(e12);
            }
        } else {
            this.f14606r = null;
        }
        this.f14607s = authenticationExtensions;
    }

    public List b() {
        return this.f14603o;
    }

    public AuthenticationExtensions c() {
        return this.f14607s;
    }

    public byte[] d() {
        return this.f14600d;
    }

    public Integer e() {
        return this.f14604p;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        if (!(obj instanceof PublicKeyCredentialRequestOptions)) {
            return false;
        }
        PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions = (PublicKeyCredentialRequestOptions) obj;
        if (!Arrays.equals(this.f14600d, publicKeyCredentialRequestOptions.f14600d) || !o.a(this.f14601e, publicKeyCredentialRequestOptions.f14601e) || !o.a(this.f14602i, publicKeyCredentialRequestOptions.f14602i) || ((((list = this.f14603o) != null || publicKeyCredentialRequestOptions.f14603o != null) && (list == null || (list2 = publicKeyCredentialRequestOptions.f14603o) == null || !list.containsAll(list2) || !publicKeyCredentialRequestOptions.f14603o.containsAll(this.f14603o))) || !o.a(this.f14604p, publicKeyCredentialRequestOptions.f14604p) || !o.a(this.f14605q, publicKeyCredentialRequestOptions.f14605q) || !o.a(this.f14606r, publicKeyCredentialRequestOptions.f14606r) || !o.a(this.f14607s, publicKeyCredentialRequestOptions.f14607s) || !o.a(this.f14608t, publicKeyCredentialRequestOptions.f14608t))) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f14602i;
    }

    public Double g() {
        return this.f14601e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Arrays.hashCode(this.f14600d)), this.f14601e, this.f14602i, this.f14603o, this.f14604p, this.f14605q, this.f14606r, this.f14607s, this.f14608t);
    }

    public a i() {
        return this.f14605q;
    }

    public final String toString() {
        AuthenticationExtensions authenticationExtensions = this.f14607s;
        b0 b0Var = this.f14606r;
        a aVar = this.f14605q;
        List list = this.f14603o;
        String b10 = com.google.android.gms.common.util.c.b(this.f14600d);
        String valueOf = String.valueOf(list);
        String valueOf2 = String.valueOf(aVar);
        String valueOf3 = String.valueOf(b0Var);
        String valueOf4 = String.valueOf(authenticationExtensions);
        return "PublicKeyCredentialRequestOptions{\n challenge=" + b10 + ", \n timeoutSeconds=" + this.f14601e + ", \n rpId='" + this.f14602i + "', \n allowList=" + valueOf + ", \n requestId=" + this.f14604p + ", \n tokenBinding=" + valueOf2 + ", \n userVerification=" + valueOf3 + ", \n authenticationExtensions=" + valueOf4 + ", \n longRequestId=" + this.f14608t + "}";
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
        b0 b0Var2 = this.f14606r;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        jf.c.s(parcel, 8, b0Var, false);
        jf.c.q(parcel, 9, c(), i10, false);
        jf.c.p(parcel, 10, this.f14608t, false);
        jf.c.s(parcel, 11, null, false);
        jf.c.q(parcel, 12, this.f14609u, i10, false);
        jf.c.b(parcel, a10);
    }
}
