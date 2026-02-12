package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.Base64;
import androidx.annotation.NonNull;
import com.appsflyer.AppsFlyerProperties;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import xf.a0;
import xf.g0;
import xf.i0;
import xf.l0;
import xf.n;
import xf.n0;
import xf.o;
import xf.p;
import xf.q0;
import xf.r1;
import xf.t1;
import xf.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AuthenticationExtensions extends jf.a {
    @NonNull
    public static final Parcelable.Creator<AuthenticationExtensions> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    private final n f14574d;

    /* renamed from: e  reason: collision with root package name */
    private final r1 f14575e;

    /* renamed from: i  reason: collision with root package name */
    private final a0 f14576i;

    /* renamed from: o  reason: collision with root package name */
    private final x1 f14577o;

    /* renamed from: p  reason: collision with root package name */
    private final g0 f14578p;

    /* renamed from: q  reason: collision with root package name */
    private final i0 f14579q;

    /* renamed from: r  reason: collision with root package name */
    private final t1 f14580r;

    /* renamed from: s  reason: collision with root package name */
    private final l0 f14581s;

    /* renamed from: t  reason: collision with root package name */
    private final o f14582t;

    /* renamed from: u  reason: collision with root package name */
    private final q0 f14583u;

    /* renamed from: v  reason: collision with root package name */
    private final c f14584v;

    /* renamed from: w  reason: collision with root package name */
    private final n0 f14585w;

    /* renamed from: x  reason: collision with root package name */
    private final p f14586x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private n f14587a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f14588b;

        /* renamed from: c  reason: collision with root package name */
        private r1 f14589c;

        /* renamed from: d  reason: collision with root package name */
        private x1 f14590d;

        /* renamed from: e  reason: collision with root package name */
        private g0 f14591e;

        /* renamed from: f  reason: collision with root package name */
        private i0 f14592f;

        /* renamed from: g  reason: collision with root package name */
        private t1 f14593g;

        /* renamed from: h  reason: collision with root package name */
        private l0 f14594h;

        /* renamed from: i  reason: collision with root package name */
        private o f14595i;

        /* renamed from: j  reason: collision with root package name */
        private p f14596j;

        /* renamed from: k  reason: collision with root package name */
        private q0 f14597k;

        /* renamed from: l  reason: collision with root package name */
        private c f14598l;

        /* renamed from: m  reason: collision with root package name */
        private n0 f14599m;

        public AuthenticationExtensions a() {
            return new AuthenticationExtensions(this.f14587a, this.f14589c, this.f14588b, this.f14590d, this.f14591e, this.f14592f, this.f14593g, this.f14594h, this.f14595i, this.f14597k, this.f14598l, this.f14599m, this.f14596j);
        }

        public a b(n nVar) {
            this.f14587a = nVar;
            return this;
        }

        public a c(o oVar) {
            this.f14595i = oVar;
            return this;
        }

        public a d(p pVar) {
            this.f14596j = pVar;
            return this;
        }

        public a e(a0 a0Var) {
            this.f14588b = a0Var;
            return this;
        }

        public final a f(r1 r1Var) {
            this.f14589c = r1Var;
            return this;
        }

        public final a g(t1 t1Var) {
            this.f14593g = t1Var;
            return this;
        }

        public final a h(x1 x1Var) {
            this.f14590d = x1Var;
            return this;
        }

        public final a i(g0 g0Var) {
            this.f14591e = g0Var;
            return this;
        }

        public final a j(i0 i0Var) {
            this.f14592f = i0Var;
            return this;
        }

        public final a k(l0 l0Var) {
            this.f14594h = l0Var;
            return this;
        }

        public final a l(q0 q0Var) {
            this.f14597k = q0Var;
            return this;
        }

        public final a m(c cVar) {
            this.f14598l = cVar;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AuthenticationExtensions(n nVar, r1 r1Var, a0 a0Var, x1 x1Var, g0 g0Var, i0 i0Var, t1 t1Var, l0 l0Var, o oVar, q0 q0Var, c cVar, n0 n0Var, p pVar) {
        this.f14574d = nVar;
        this.f14576i = a0Var;
        this.f14575e = r1Var;
        this.f14577o = x1Var;
        this.f14578p = g0Var;
        this.f14579q = i0Var;
        this.f14580r = t1Var;
        this.f14581s = l0Var;
        this.f14582t = oVar;
        this.f14583u = q0Var;
        this.f14584v = cVar;
        this.f14585w = n0Var;
        this.f14586x = pVar;
    }

    public static AuthenticationExtensions d(JSONObject jSONObject) {
        a aVar = new a();
        if (jSONObject.has("fidoAppIdExtension")) {
            aVar.b(new n(jSONObject.getJSONObject("fidoAppIdExtension").getString(AppsFlyerProperties.APP_ID)));
        }
        if (jSONObject.has(AppsFlyerProperties.APP_ID)) {
            aVar.b(new n(jSONObject.getString(AppsFlyerProperties.APP_ID)));
        }
        if (jSONObject.has("prf")) {
            if (!jSONObject.has("prfAlreadyHashed")) {
                aVar.l(q0.b(jSONObject.getJSONObject("prf"), false));
            } else {
                throw new JSONException("both prf and prfAlreadyHashed extensions found");
            }
        } else if (jSONObject.has("prfAlreadyHashed")) {
            aVar.l(q0.b(jSONObject.getJSONObject("prfAlreadyHashed"), true));
        }
        if (jSONObject.has("cableAuthenticationExtension")) {
            JSONArray jSONArray = jSONObject.getJSONArray("cableAuthenticationExtension");
            Parcelable.Creator<r1> creator = r1.CREATOR;
            ArrayList arrayList = new ArrayList();
            for (int i10 = 0; i10 < jSONArray.length(); i10++) {
                JSONObject jSONObject2 = jSONArray.getJSONObject(i10);
                arrayList.add(new h(jSONObject2.getLong("version"), Base64.decode(jSONObject2.getString("clientEid"), 11), Base64.decode(jSONObject2.getString("authenticatorEid"), 11), Base64.decode(jSONObject2.getString("sessionPreKey"), 11)));
            }
            aVar.f(new r1(arrayList));
        }
        if (jSONObject.has("userVerificationMethodExtension")) {
            aVar.e(new a0(jSONObject.getJSONObject("userVerificationMethodExtension").getBoolean("uvm")));
        }
        if (jSONObject.has("google_multiAssertionExtension")) {
            aVar.h(new x1(jSONObject.getJSONObject("google_multiAssertionExtension").getBoolean("requestForMultiAssertion")));
        }
        if (jSONObject.has("google_sessionIdExtension")) {
            aVar.i(new g0(jSONObject.getJSONObject("google_sessionIdExtension").getInt("sessionId")));
        }
        if (jSONObject.has("google_silentVerificationExtension")) {
            aVar.j(new i0(jSONObject.getJSONObject("google_silentVerificationExtension").getBoolean("silentVerification")));
        }
        if (jSONObject.has("devicePublicKeyExtension")) {
            aVar.g(new t1(jSONObject.getJSONObject("devicePublicKeyExtension").getBoolean("devicePublicKey")));
        }
        if (jSONObject.has("google_tunnelServerIdExtension")) {
            aVar.k(new l0(jSONObject.getJSONObject("google_tunnelServerIdExtension").getString("tunnelServerId")));
        }
        if (jSONObject.has("google_thirdPartyPaymentExtension")) {
            aVar.c(new o(jSONObject.getJSONObject("google_thirdPartyPaymentExtension").getBoolean("thirdPartyPayment")));
        }
        if (jSONObject.has("payment")) {
            aVar.d(new p(jSONObject.getJSONObject("payment").getBoolean("isPayment")));
        }
        if (jSONObject.has("txAuthSimple")) {
            aVar.m(new c(jSONObject.getString("txAuthSimple")));
        }
        return aVar.a();
    }

    public n b() {
        return this.f14574d;
    }

    public a0 c() {
        return this.f14576i;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AuthenticationExtensions)) {
            return false;
        }
        AuthenticationExtensions authenticationExtensions = (AuthenticationExtensions) obj;
        if (!hf.o.a(this.f14574d, authenticationExtensions.f14574d) || !hf.o.a(this.f14575e, authenticationExtensions.f14575e) || !hf.o.a(this.f14576i, authenticationExtensions.f14576i) || !hf.o.a(this.f14577o, authenticationExtensions.f14577o) || !hf.o.a(this.f14578p, authenticationExtensions.f14578p) || !hf.o.a(this.f14579q, authenticationExtensions.f14579q) || !hf.o.a(this.f14580r, authenticationExtensions.f14580r) || !hf.o.a(this.f14581s, authenticationExtensions.f14581s) || !hf.o.a(this.f14582t, authenticationExtensions.f14582t) || !hf.o.a(this.f14583u, authenticationExtensions.f14583u) || !hf.o.a(this.f14584v, authenticationExtensions.f14584v) || !hf.o.a(this.f14585w, authenticationExtensions.f14585w) || !hf.o.a(this.f14586x, authenticationExtensions.f14586x)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f14574d, this.f14575e, this.f14576i, this.f14577o, this.f14578p, this.f14579q, this.f14580r, this.f14581s, this.f14582t, this.f14583u, this.f14584v, this.f14585w, this.f14586x);
    }

    public final String toString() {
        p pVar = this.f14586x;
        c cVar = this.f14584v;
        q0 q0Var = this.f14583u;
        o oVar = this.f14582t;
        l0 l0Var = this.f14581s;
        t1 t1Var = this.f14580r;
        i0 i0Var = this.f14579q;
        g0 g0Var = this.f14578p;
        x1 x1Var = this.f14577o;
        a0 a0Var = this.f14576i;
        r1 r1Var = this.f14575e;
        String valueOf = String.valueOf(this.f14574d);
        String valueOf2 = String.valueOf(r1Var);
        String valueOf3 = String.valueOf(a0Var);
        String valueOf4 = String.valueOf(x1Var);
        String valueOf5 = String.valueOf(g0Var);
        String valueOf6 = String.valueOf(i0Var);
        String valueOf7 = String.valueOf(t1Var);
        String valueOf8 = String.valueOf(l0Var);
        String valueOf9 = String.valueOf(oVar);
        String valueOf10 = String.valueOf(q0Var);
        String valueOf11 = String.valueOf(cVar);
        String valueOf12 = String.valueOf(pVar);
        return "AuthenticationExtensions{\n fidoAppIdExtension=" + valueOf + ", \n cableAuthenticationExtension=" + valueOf2 + ", \n userVerificationMethodExtension=" + valueOf3 + ", \n googleMultiAssertionExtension=" + valueOf4 + ", \n googleSessionIdExtension=" + valueOf5 + ", \n googleSilentVerificationExtension=" + valueOf6 + ", \n devicePublicKeyExtension=" + valueOf7 + ", \n googleTunnelServerIdExtension=" + valueOf8 + ", \n googleThirdPartyPaymentExtension=" + valueOf9 + ", \n prfExtension=" + valueOf10 + ", \n simpleTransactionAuthorizationExtension=" + valueOf11 + ", \n paymentExtension=" + valueOf12 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 2, b(), i10, false);
        jf.c.q(parcel, 3, this.f14575e, i10, false);
        jf.c.q(parcel, 4, c(), i10, false);
        jf.c.q(parcel, 5, this.f14577o, i10, false);
        jf.c.q(parcel, 6, this.f14578p, i10, false);
        jf.c.q(parcel, 7, this.f14579q, i10, false);
        jf.c.q(parcel, 8, this.f14580r, i10, false);
        jf.c.q(parcel, 9, this.f14581s, i10, false);
        jf.c.q(parcel, 10, this.f14582t, i10, false);
        jf.c.q(parcel, 11, this.f14583u, i10, false);
        jf.c.q(parcel, 12, this.f14584v, i10, false);
        jf.c.q(parcel, 13, this.f14585w, i10, false);
        jf.c.q(parcel, 14, this.f14586x, i10, false);
        jf.c.b(parcel, a10);
    }
}
