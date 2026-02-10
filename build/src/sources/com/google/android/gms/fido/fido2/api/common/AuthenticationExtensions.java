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
    private final n f14573d;

    /* renamed from: e  reason: collision with root package name */
    private final r1 f14574e;

    /* renamed from: i  reason: collision with root package name */
    private final a0 f14575i;

    /* renamed from: o  reason: collision with root package name */
    private final x1 f14576o;

    /* renamed from: p  reason: collision with root package name */
    private final g0 f14577p;

    /* renamed from: q  reason: collision with root package name */
    private final i0 f14578q;

    /* renamed from: r  reason: collision with root package name */
    private final t1 f14579r;

    /* renamed from: s  reason: collision with root package name */
    private final l0 f14580s;

    /* renamed from: t  reason: collision with root package name */
    private final o f14581t;

    /* renamed from: u  reason: collision with root package name */
    private final q0 f14582u;

    /* renamed from: v  reason: collision with root package name */
    private final c f14583v;

    /* renamed from: w  reason: collision with root package name */
    private final n0 f14584w;

    /* renamed from: x  reason: collision with root package name */
    private final p f14585x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private n f14586a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f14587b;

        /* renamed from: c  reason: collision with root package name */
        private r1 f14588c;

        /* renamed from: d  reason: collision with root package name */
        private x1 f14589d;

        /* renamed from: e  reason: collision with root package name */
        private g0 f14590e;

        /* renamed from: f  reason: collision with root package name */
        private i0 f14591f;

        /* renamed from: g  reason: collision with root package name */
        private t1 f14592g;

        /* renamed from: h  reason: collision with root package name */
        private l0 f14593h;

        /* renamed from: i  reason: collision with root package name */
        private o f14594i;

        /* renamed from: j  reason: collision with root package name */
        private p f14595j;

        /* renamed from: k  reason: collision with root package name */
        private q0 f14596k;

        /* renamed from: l  reason: collision with root package name */
        private c f14597l;

        /* renamed from: m  reason: collision with root package name */
        private n0 f14598m;

        public AuthenticationExtensions a() {
            return new AuthenticationExtensions(this.f14586a, this.f14588c, this.f14587b, this.f14589d, this.f14590e, this.f14591f, this.f14592g, this.f14593h, this.f14594i, this.f14596k, this.f14597l, this.f14598m, this.f14595j);
        }

        public a b(n nVar) {
            this.f14586a = nVar;
            return this;
        }

        public a c(o oVar) {
            this.f14594i = oVar;
            return this;
        }

        public a d(p pVar) {
            this.f14595j = pVar;
            return this;
        }

        public a e(a0 a0Var) {
            this.f14587b = a0Var;
            return this;
        }

        public final a f(r1 r1Var) {
            this.f14588c = r1Var;
            return this;
        }

        public final a g(t1 t1Var) {
            this.f14592g = t1Var;
            return this;
        }

        public final a h(x1 x1Var) {
            this.f14589d = x1Var;
            return this;
        }

        public final a i(g0 g0Var) {
            this.f14590e = g0Var;
            return this;
        }

        public final a j(i0 i0Var) {
            this.f14591f = i0Var;
            return this;
        }

        public final a k(l0 l0Var) {
            this.f14593h = l0Var;
            return this;
        }

        public final a l(q0 q0Var) {
            this.f14596k = q0Var;
            return this;
        }

        public final a m(c cVar) {
            this.f14597l = cVar;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AuthenticationExtensions(n nVar, r1 r1Var, a0 a0Var, x1 x1Var, g0 g0Var, i0 i0Var, t1 t1Var, l0 l0Var, o oVar, q0 q0Var, c cVar, n0 n0Var, p pVar) {
        this.f14573d = nVar;
        this.f14575i = a0Var;
        this.f14574e = r1Var;
        this.f14576o = x1Var;
        this.f14577p = g0Var;
        this.f14578q = i0Var;
        this.f14579r = t1Var;
        this.f14580s = l0Var;
        this.f14581t = oVar;
        this.f14582u = q0Var;
        this.f14583v = cVar;
        this.f14584w = n0Var;
        this.f14585x = pVar;
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
        return this.f14573d;
    }

    public a0 c() {
        return this.f14575i;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AuthenticationExtensions)) {
            return false;
        }
        AuthenticationExtensions authenticationExtensions = (AuthenticationExtensions) obj;
        if (!hf.o.a(this.f14573d, authenticationExtensions.f14573d) || !hf.o.a(this.f14574e, authenticationExtensions.f14574e) || !hf.o.a(this.f14575i, authenticationExtensions.f14575i) || !hf.o.a(this.f14576o, authenticationExtensions.f14576o) || !hf.o.a(this.f14577p, authenticationExtensions.f14577p) || !hf.o.a(this.f14578q, authenticationExtensions.f14578q) || !hf.o.a(this.f14579r, authenticationExtensions.f14579r) || !hf.o.a(this.f14580s, authenticationExtensions.f14580s) || !hf.o.a(this.f14581t, authenticationExtensions.f14581t) || !hf.o.a(this.f14582u, authenticationExtensions.f14582u) || !hf.o.a(this.f14583v, authenticationExtensions.f14583v) || !hf.o.a(this.f14584w, authenticationExtensions.f14584w) || !hf.o.a(this.f14585x, authenticationExtensions.f14585x)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f14573d, this.f14574e, this.f14575i, this.f14576o, this.f14577p, this.f14578q, this.f14579r, this.f14580s, this.f14581t, this.f14582u, this.f14583v, this.f14584w, this.f14585x);
    }

    public final String toString() {
        p pVar = this.f14585x;
        c cVar = this.f14583v;
        q0 q0Var = this.f14582u;
        o oVar = this.f14581t;
        l0 l0Var = this.f14580s;
        t1 t1Var = this.f14579r;
        i0 i0Var = this.f14578q;
        g0 g0Var = this.f14577p;
        x1 x1Var = this.f14576o;
        a0 a0Var = this.f14575i;
        r1 r1Var = this.f14574e;
        String valueOf = String.valueOf(this.f14573d);
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
        jf.c.q(parcel, 3, this.f14574e, i10, false);
        jf.c.q(parcel, 4, c(), i10, false);
        jf.c.q(parcel, 5, this.f14576o, i10, false);
        jf.c.q(parcel, 6, this.f14577p, i10, false);
        jf.c.q(parcel, 7, this.f14578q, i10, false);
        jf.c.q(parcel, 8, this.f14579r, i10, false);
        jf.c.q(parcel, 9, this.f14580s, i10, false);
        jf.c.q(parcel, 10, this.f14581t, i10, false);
        jf.c.q(parcel, 11, this.f14582u, i10, false);
        jf.c.q(parcel, 12, this.f14583v, i10, false);
        jf.c.q(parcel, 13, this.f14584w, i10, false);
        jf.c.q(parcel, 14, this.f14585x, i10, false);
        jf.c.b(parcel, a10);
    }
}
