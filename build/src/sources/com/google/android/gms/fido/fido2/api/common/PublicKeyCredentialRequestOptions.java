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
    private final byte[] f14557d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f14558e;

    /* renamed from: i  reason: collision with root package name */
    private final String f14559i;

    /* renamed from: o  reason: collision with root package name */
    private final List f14560o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f14561p;

    /* renamed from: q  reason: collision with root package name */
    private final a f14562q;

    /* renamed from: r  reason: collision with root package name */
    private final b0 f14563r;

    /* renamed from: s  reason: collision with root package name */
    private final AuthenticationExtensions f14564s;

    /* renamed from: t  reason: collision with root package name */
    private final Long f14565t;

    /* renamed from: u  reason: collision with root package name */
    private ResultReceiver f14566u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f14567a;

        /* renamed from: b  reason: collision with root package name */
        private Double f14568b;

        /* renamed from: c  reason: collision with root package name */
        private String f14569c;

        /* renamed from: d  reason: collision with root package name */
        private List f14570d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f14571e;

        /* renamed from: f  reason: collision with root package name */
        private a f14572f;

        /* renamed from: g  reason: collision with root package name */
        private b0 f14573g;

        /* renamed from: h  reason: collision with root package name */
        private AuthenticationExtensions f14574h;

        /* renamed from: i  reason: collision with root package name */
        private Long f14575i;

        /* renamed from: j  reason: collision with root package name */
        private ResultReceiver f14576j;

        public PublicKeyCredentialRequestOptions a() {
            String b0Var;
            byte[] bArr = this.f14567a;
            Double d10 = this.f14568b;
            String str = this.f14569c;
            List list = this.f14570d;
            Integer num = this.f14571e;
            a aVar = this.f14572f;
            b0 b0Var2 = this.f14573g;
            if (b0Var2 == null) {
                b0Var = null;
            } else {
                b0Var = b0Var2.toString();
            }
            return new PublicKeyCredentialRequestOptions(bArr, d10, str, list, num, aVar, b0Var, this.f14574h, this.f14575i, null, this.f14576j);
        }

        public Builder b(List list) {
            this.f14570d = list;
            return this;
        }

        public Builder c(AuthenticationExtensions authenticationExtensions) {
            this.f14574h = authenticationExtensions;
            return this;
        }

        public Builder d(byte[] bArr) {
            this.f14567a = (byte[]) q.l(bArr);
            return this;
        }

        public Builder e(Integer num) {
            this.f14571e = num;
            return this;
        }

        public Builder f(String str) {
            this.f14569c = (String) q.l(str);
            return this;
        }

        public Builder g(Double d10) {
            this.f14568b = d10;
            return this;
        }

        public Builder h(a aVar) {
            this.f14572f = aVar;
            return this;
        }

        public final Builder i(Long l10) {
            this.f14575i = l10;
            return this;
        }

        public final Builder j(b0 b0Var) {
            this.f14573g = b0Var;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PublicKeyCredentialRequestOptions(byte[] bArr, Double d10, String str, List list, Integer num, a aVar, String str2, AuthenticationExtensions authenticationExtensions, Long l10, String str3, ResultReceiver resultReceiver) {
        JSONArray jSONArray;
        this.f14566u = resultReceiver;
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
                this.f14557d = a10.f14557d;
                this.f14558e = a10.f14558e;
                this.f14559i = a10.f14559i;
                this.f14560o = a10.f14560o;
                this.f14561p = a10.f14561p;
                this.f14562q = a10.f14562q;
                this.f14563r = a10.f14563r;
                this.f14564s = a10.f14564s;
                this.f14565t = a10.f14565t;
                return;
            } catch (JSONException e10) {
                e = e10;
                throw new IllegalArgumentException(e);
            } catch (d1 e11) {
                e = e11;
                throw new IllegalArgumentException(e);
            }
        }
        this.f14557d = (byte[]) q.l(bArr);
        this.f14558e = d10;
        this.f14559i = (String) q.l(str);
        this.f14560o = list;
        this.f14561p = num;
        this.f14562q = aVar;
        this.f14565t = l10;
        if (str2 != null) {
            try {
                this.f14563r = b0.a(str2);
            } catch (d1 e12) {
                throw new IllegalArgumentException(e12);
            }
        } else {
            this.f14563r = null;
        }
        this.f14564s = authenticationExtensions;
    }

    public List b() {
        return this.f14560o;
    }

    public AuthenticationExtensions c() {
        return this.f14564s;
    }

    public byte[] d() {
        return this.f14557d;
    }

    public Integer e() {
        return this.f14561p;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        if (!(obj instanceof PublicKeyCredentialRequestOptions)) {
            return false;
        }
        PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions = (PublicKeyCredentialRequestOptions) obj;
        if (!Arrays.equals(this.f14557d, publicKeyCredentialRequestOptions.f14557d) || !o.a(this.f14558e, publicKeyCredentialRequestOptions.f14558e) || !o.a(this.f14559i, publicKeyCredentialRequestOptions.f14559i) || ((((list = this.f14560o) != null || publicKeyCredentialRequestOptions.f14560o != null) && (list == null || (list2 = publicKeyCredentialRequestOptions.f14560o) == null || !list.containsAll(list2) || !publicKeyCredentialRequestOptions.f14560o.containsAll(this.f14560o))) || !o.a(this.f14561p, publicKeyCredentialRequestOptions.f14561p) || !o.a(this.f14562q, publicKeyCredentialRequestOptions.f14562q) || !o.a(this.f14563r, publicKeyCredentialRequestOptions.f14563r) || !o.a(this.f14564s, publicKeyCredentialRequestOptions.f14564s) || !o.a(this.f14565t, publicKeyCredentialRequestOptions.f14565t))) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f14559i;
    }

    public Double g() {
        return this.f14558e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Arrays.hashCode(this.f14557d)), this.f14558e, this.f14559i, this.f14560o, this.f14561p, this.f14562q, this.f14563r, this.f14564s, this.f14565t);
    }

    public a i() {
        return this.f14562q;
    }

    public final String toString() {
        AuthenticationExtensions authenticationExtensions = this.f14564s;
        b0 b0Var = this.f14563r;
        a aVar = this.f14562q;
        List list = this.f14560o;
        String b10 = com.google.android.gms.common.util.c.b(this.f14557d);
        String valueOf = String.valueOf(list);
        String valueOf2 = String.valueOf(aVar);
        String valueOf3 = String.valueOf(b0Var);
        String valueOf4 = String.valueOf(authenticationExtensions);
        return "PublicKeyCredentialRequestOptions{\n challenge=" + b10 + ", \n timeoutSeconds=" + this.f14558e + ", \n rpId='" + this.f14559i + "', \n allowList=" + valueOf + ", \n requestId=" + this.f14561p + ", \n tokenBinding=" + valueOf2 + ", \n userVerification=" + valueOf3 + ", \n authenticationExtensions=" + valueOf4 + ", \n longRequestId=" + this.f14565t + "}";
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
        b0 b0Var2 = this.f14563r;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        hf.c.s(parcel, 8, b0Var, false);
        hf.c.q(parcel, 9, c(), i10, false);
        hf.c.p(parcel, 10, this.f14565t, false);
        hf.c.s(parcel, 11, null, false);
        hf.c.q(parcel, 12, this.f14566u, i10, false);
        hf.c.b(parcel, a10);
    }
}
