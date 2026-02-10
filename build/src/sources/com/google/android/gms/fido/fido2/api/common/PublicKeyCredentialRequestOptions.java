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
    private final byte[] f14022d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f14023e;

    /* renamed from: i  reason: collision with root package name */
    private final String f14024i;

    /* renamed from: o  reason: collision with root package name */
    private final List f14025o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f14026p;

    /* renamed from: q  reason: collision with root package name */
    private final a f14027q;

    /* renamed from: r  reason: collision with root package name */
    private final b0 f14028r;

    /* renamed from: s  reason: collision with root package name */
    private final AuthenticationExtensions f14029s;

    /* renamed from: t  reason: collision with root package name */
    private final Long f14030t;

    /* renamed from: u  reason: collision with root package name */
    private ResultReceiver f14031u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f14032a;

        /* renamed from: b  reason: collision with root package name */
        private Double f14033b;

        /* renamed from: c  reason: collision with root package name */
        private String f14034c;

        /* renamed from: d  reason: collision with root package name */
        private List f14035d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f14036e;

        /* renamed from: f  reason: collision with root package name */
        private a f14037f;

        /* renamed from: g  reason: collision with root package name */
        private b0 f14038g;

        /* renamed from: h  reason: collision with root package name */
        private AuthenticationExtensions f14039h;

        /* renamed from: i  reason: collision with root package name */
        private Long f14040i;

        /* renamed from: j  reason: collision with root package name */
        private ResultReceiver f14041j;

        public PublicKeyCredentialRequestOptions a() {
            String b0Var;
            byte[] bArr = this.f14032a;
            Double d10 = this.f14033b;
            String str = this.f14034c;
            List list = this.f14035d;
            Integer num = this.f14036e;
            a aVar = this.f14037f;
            b0 b0Var2 = this.f14038g;
            if (b0Var2 == null) {
                b0Var = null;
            } else {
                b0Var = b0Var2.toString();
            }
            return new PublicKeyCredentialRequestOptions(bArr, d10, str, list, num, aVar, b0Var, this.f14039h, this.f14040i, null, this.f14041j);
        }

        public Builder b(List list) {
            this.f14035d = list;
            return this;
        }

        public Builder c(AuthenticationExtensions authenticationExtensions) {
            this.f14039h = authenticationExtensions;
            return this;
        }

        public Builder d(byte[] bArr) {
            this.f14032a = (byte[]) q.l(bArr);
            return this;
        }

        public Builder e(Integer num) {
            this.f14036e = num;
            return this;
        }

        public Builder f(String str) {
            this.f14034c = (String) q.l(str);
            return this;
        }

        public Builder g(Double d10) {
            this.f14033b = d10;
            return this;
        }

        public Builder h(a aVar) {
            this.f14037f = aVar;
            return this;
        }

        public final Builder i(Long l10) {
            this.f14040i = l10;
            return this;
        }

        public final Builder j(b0 b0Var) {
            this.f14038g = b0Var;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PublicKeyCredentialRequestOptions(byte[] bArr, Double d10, String str, List list, Integer num, a aVar, String str2, AuthenticationExtensions authenticationExtensions, Long l10, String str3, ResultReceiver resultReceiver) {
        JSONArray jSONArray;
        this.f14031u = resultReceiver;
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
                this.f14022d = a10.f14022d;
                this.f14023e = a10.f14023e;
                this.f14024i = a10.f14024i;
                this.f14025o = a10.f14025o;
                this.f14026p = a10.f14026p;
                this.f14027q = a10.f14027q;
                this.f14028r = a10.f14028r;
                this.f14029s = a10.f14029s;
                this.f14030t = a10.f14030t;
                return;
            } catch (JSONException e10) {
                e = e10;
                throw new IllegalArgumentException(e);
            } catch (d1 e11) {
                e = e11;
                throw new IllegalArgumentException(e);
            }
        }
        this.f14022d = (byte[]) q.l(bArr);
        this.f14023e = d10;
        this.f14024i = (String) q.l(str);
        this.f14025o = list;
        this.f14026p = num;
        this.f14027q = aVar;
        this.f14030t = l10;
        if (str2 != null) {
            try {
                this.f14028r = b0.a(str2);
            } catch (d1 e12) {
                throw new IllegalArgumentException(e12);
            }
        } else {
            this.f14028r = null;
        }
        this.f14029s = authenticationExtensions;
    }

    public List b() {
        return this.f14025o;
    }

    public AuthenticationExtensions c() {
        return this.f14029s;
    }

    public byte[] d() {
        return this.f14022d;
    }

    public Integer e() {
        return this.f14026p;
    }

    public boolean equals(Object obj) {
        List list;
        List list2;
        if (!(obj instanceof PublicKeyCredentialRequestOptions)) {
            return false;
        }
        PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions = (PublicKeyCredentialRequestOptions) obj;
        if (!Arrays.equals(this.f14022d, publicKeyCredentialRequestOptions.f14022d) || !o.a(this.f14023e, publicKeyCredentialRequestOptions.f14023e) || !o.a(this.f14024i, publicKeyCredentialRequestOptions.f14024i) || ((((list = this.f14025o) != null || publicKeyCredentialRequestOptions.f14025o != null) && (list == null || (list2 = publicKeyCredentialRequestOptions.f14025o) == null || !list.containsAll(list2) || !publicKeyCredentialRequestOptions.f14025o.containsAll(this.f14025o))) || !o.a(this.f14026p, publicKeyCredentialRequestOptions.f14026p) || !o.a(this.f14027q, publicKeyCredentialRequestOptions.f14027q) || !o.a(this.f14028r, publicKeyCredentialRequestOptions.f14028r) || !o.a(this.f14029s, publicKeyCredentialRequestOptions.f14029s) || !o.a(this.f14030t, publicKeyCredentialRequestOptions.f14030t))) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f14024i;
    }

    public Double h() {
        return this.f14023e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Arrays.hashCode(this.f14022d)), this.f14023e, this.f14024i, this.f14025o, this.f14026p, this.f14027q, this.f14028r, this.f14029s, this.f14030t);
    }

    public a i() {
        return this.f14027q;
    }

    public final String toString() {
        AuthenticationExtensions authenticationExtensions = this.f14029s;
        b0 b0Var = this.f14028r;
        a aVar = this.f14027q;
        List list = this.f14025o;
        String b10 = com.google.android.gms.common.util.c.b(this.f14022d);
        String valueOf = String.valueOf(list);
        String valueOf2 = String.valueOf(aVar);
        String valueOf3 = String.valueOf(b0Var);
        String valueOf4 = String.valueOf(authenticationExtensions);
        return "PublicKeyCredentialRequestOptions{\n challenge=" + b10 + ", \n timeoutSeconds=" + this.f14023e + ", \n rpId='" + this.f14024i + "', \n allowList=" + valueOf + ", \n requestId=" + this.f14026p + ", \n tokenBinding=" + valueOf2 + ", \n userVerification=" + valueOf3 + ", \n authenticationExtensions=" + valueOf4 + ", \n longRequestId=" + this.f14030t + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        String b0Var;
        int a10 = jf.c.a(parcel);
        jf.c.f(parcel, 2, d(), false);
        jf.c.i(parcel, 3, h(), false);
        jf.c.s(parcel, 4, f(), false);
        jf.c.w(parcel, 5, b(), false);
        jf.c.n(parcel, 6, e(), false);
        jf.c.q(parcel, 7, i(), i10, false);
        b0 b0Var2 = this.f14028r;
        if (b0Var2 == null) {
            b0Var = null;
        } else {
            b0Var = b0Var2.toString();
        }
        jf.c.s(parcel, 8, b0Var, false);
        jf.c.q(parcel, 9, c(), i10, false);
        jf.c.p(parcel, 10, this.f14030t, false);
        jf.c.s(parcel, 11, null, false);
        jf.c.q(parcel, 12, this.f14031u, i10, false);
        jf.c.b(parcel, a10);
    }
}
