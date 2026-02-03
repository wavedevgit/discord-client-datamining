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
    private final byte[] f13525d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f13526e;

    /* renamed from: i  reason: collision with root package name */
    private final String f13527i;

    /* renamed from: o  reason: collision with root package name */
    private final List f13528o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f13529p;

    /* renamed from: q  reason: collision with root package name */
    private final a f13530q;

    /* renamed from: r  reason: collision with root package name */
    private final b0 f13531r;

    /* renamed from: s  reason: collision with root package name */
    private final AuthenticationExtensions f13532s;

    /* renamed from: t  reason: collision with root package name */
    private final Long f13533t;

    /* renamed from: u  reason: collision with root package name */
    private ResultReceiver f13534u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f13535a;

        /* renamed from: b  reason: collision with root package name */
        private Double f13536b;

        /* renamed from: c  reason: collision with root package name */
        private String f13537c;

        /* renamed from: d  reason: collision with root package name */
        private List f13538d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f13539e;

        /* renamed from: f  reason: collision with root package name */
        private a f13540f;

        /* renamed from: g  reason: collision with root package name */
        private b0 f13541g;

        /* renamed from: h  reason: collision with root package name */
        private AuthenticationExtensions f13542h;

        /* renamed from: i  reason: collision with root package name */
        private Long f13543i;

        /* renamed from: j  reason: collision with root package name */
        private ResultReceiver f13544j;

        public PublicKeyCredentialRequestOptions a() {
            String b0Var;
            byte[] bArr = this.f13535a;
            Double d10 = this.f13536b;
            String str = this.f13537c;
            List list = this.f13538d;
            Integer num = this.f13539e;
            a aVar = this.f13540f;
            b0 b0Var2 = this.f13541g;
            if (b0Var2 == null) {
                b0Var = null;
            } else {
                b0Var = b0Var2.toString();
            }
            return new PublicKeyCredentialRequestOptions(bArr, d10, str, list, num, aVar, b0Var, this.f13542h, this.f13543i, null, this.f13544j);
        }

        public Builder b(List list) {
            this.f13538d = list;
            return this;
        }

        public Builder c(AuthenticationExtensions authenticationExtensions) {
            this.f13542h = authenticationExtensions;
            return this;
        }

        public Builder d(byte[] bArr) {
            this.f13535a = (byte[]) q.l(bArr);
            return this;
        }

        public Builder e(Integer num) {
            this.f13539e = num;
            return this;
        }

        public Builder f(String str) {
            this.f13537c = (String) q.l(str);
            return this;
        }

        public Builder g(Double d10) {
            this.f13536b = d10;
            return this;
        }

        public Builder h(a aVar) {
            this.f13540f = aVar;
            return this;
        }

        public final Builder i(Long l10) {
            this.f13543i = l10;
            return this;
        }

        public final Builder j(b0 b0Var) {
            this.f13541g = b0Var;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PublicKeyCredentialRequestOptions(byte[] bArr, Double d10, String str, List list, Integer num, a aVar, String str2, AuthenticationExtensions authenticationExtensions, Long l10, String str3, ResultReceiver resultReceiver) {
        JSONArray jSONArray;
        this.f13534u = resultReceiver;
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
                this.f13525d = a10.f13525d;
                this.f13526e = a10.f13526e;
                this.f13527i = a10.f13527i;
                this.f13528o = a10.f13528o;
                this.f13529p = a10.f13529p;
                this.f13530q = a10.f13530q;
                this.f13531r = a10.f13531r;
                this.f13532s = a10.f13532s;
                this.f13533t = a10.f13533t;
                return;
            } catch (JSONException e10) {
                e = e10;
                throw new IllegalArgumentException(e);
            } catch (d1 e11) {
                e = e11;
                throw new IllegalArgumentException(e);
            }
        }
        this.f13525d = (byte[]) q.l(bArr);
        this.f13526e = d10;
        this.f13527i = (String) q.l(str);
        this.f13528o = list;
        this.f13529p = num;
        this.f13530q = aVar;
        this.f13533t = l10;
        if (str2 != null) {
            try {
                this.f13531r = b0.a(str2);
            } catch (d1 e12) {
                throw new IllegalArgumentException(e12);
            }
        } else {
            this.f13531r = null;
        }
        this.f13532s = authenticationExtensions;
    }

    public List b() {
        return this.f13528o;
    }

    public AuthenticationExtensions c() {
        return this.f13532s;
    }

    public byte[] d() {
        return this.f13525d;
    }

    public Integer e() {
        return this.f13529p;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        if (!(obj instanceof PublicKeyCredentialRequestOptions)) {
            return false;
        }
        PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions = (PublicKeyCredentialRequestOptions) obj;
        if (!Arrays.equals(this.f13525d, publicKeyCredentialRequestOptions.f13525d) || !o.a(this.f13526e, publicKeyCredentialRequestOptions.f13526e) || !o.a(this.f13527i, publicKeyCredentialRequestOptions.f13527i) || ((((list = this.f13528o) != null || publicKeyCredentialRequestOptions.f13528o != null) && (list == null || (list2 = publicKeyCredentialRequestOptions.f13528o) == null || !list.containsAll(list2) || !publicKeyCredentialRequestOptions.f13528o.containsAll(this.f13528o))) || !o.a(this.f13529p, publicKeyCredentialRequestOptions.f13529p) || !o.a(this.f13530q, publicKeyCredentialRequestOptions.f13530q) || !o.a(this.f13531r, publicKeyCredentialRequestOptions.f13531r) || !o.a(this.f13532s, publicKeyCredentialRequestOptions.f13532s) || !o.a(this.f13533t, publicKeyCredentialRequestOptions.f13533t))) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f13527i;
    }

    public Double g() {
        return this.f13526e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Arrays.hashCode(this.f13525d)), this.f13526e, this.f13527i, this.f13528o, this.f13529p, this.f13530q, this.f13531r, this.f13532s, this.f13533t);
    }

    public a i() {
        return this.f13530q;
    }

    public final String toString() {
        AuthenticationExtensions authenticationExtensions = this.f13532s;
        b0 b0Var = this.f13531r;
        a aVar = this.f13530q;
        List list = this.f13528o;
        String b10 = com.google.android.gms.common.util.c.b(this.f13525d);
        String valueOf = String.valueOf(list);
        String valueOf2 = String.valueOf(aVar);
        String valueOf3 = String.valueOf(b0Var);
        String valueOf4 = String.valueOf(authenticationExtensions);
        return "PublicKeyCredentialRequestOptions{\n challenge=" + b10 + ", \n timeoutSeconds=" + this.f13526e + ", \n rpId='" + this.f13527i + "', \n allowList=" + valueOf + ", \n requestId=" + this.f13529p + ", \n tokenBinding=" + valueOf2 + ", \n userVerification=" + valueOf3 + ", \n authenticationExtensions=" + valueOf4 + ", \n longRequestId=" + this.f13533t + "}";
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
        b0 b0Var2 = this.f13531r;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        hf.c.s(parcel, 8, b0Var, false);
        hf.c.q(parcel, 9, c(), i10, false);
        hf.c.p(parcel, 10, this.f13533t, false);
        hf.c.s(parcel, 11, null, false);
        hf.c.q(parcel, 12, this.f13534u, i10, false);
        hf.c.b(parcel, a10);
    }
}
