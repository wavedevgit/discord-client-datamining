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
import wf.a0;
import wf.g0;
import wf.i0;
import wf.l0;
import wf.n;
import wf.n0;
import wf.o;
import wf.p;
import wf.q0;
import wf.r1;
import wf.t1;
import wf.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AuthenticationExtensions extends hf.a {
    @NonNull
    public static final Parcelable.Creator<AuthenticationExtensions> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    private final n f14531d;

    /* renamed from: e  reason: collision with root package name */
    private final r1 f14532e;

    /* renamed from: i  reason: collision with root package name */
    private final a0 f14533i;

    /* renamed from: o  reason: collision with root package name */
    private final x1 f14534o;

    /* renamed from: p  reason: collision with root package name */
    private final g0 f14535p;

    /* renamed from: q  reason: collision with root package name */
    private final i0 f14536q;

    /* renamed from: r  reason: collision with root package name */
    private final t1 f14537r;

    /* renamed from: s  reason: collision with root package name */
    private final l0 f14538s;

    /* renamed from: t  reason: collision with root package name */
    private final o f14539t;

    /* renamed from: u  reason: collision with root package name */
    private final q0 f14540u;

    /* renamed from: v  reason: collision with root package name */
    private final c f14541v;

    /* renamed from: w  reason: collision with root package name */
    private final n0 f14542w;

    /* renamed from: x  reason: collision with root package name */
    private final p f14543x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private n f14544a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f14545b;

        /* renamed from: c  reason: collision with root package name */
        private r1 f14546c;

        /* renamed from: d  reason: collision with root package name */
        private x1 f14547d;

        /* renamed from: e  reason: collision with root package name */
        private g0 f14548e;

        /* renamed from: f  reason: collision with root package name */
        private i0 f14549f;

        /* renamed from: g  reason: collision with root package name */
        private t1 f14550g;

        /* renamed from: h  reason: collision with root package name */
        private l0 f14551h;

        /* renamed from: i  reason: collision with root package name */
        private o f14552i;

        /* renamed from: j  reason: collision with root package name */
        private p f14553j;

        /* renamed from: k  reason: collision with root package name */
        private q0 f14554k;

        /* renamed from: l  reason: collision with root package name */
        private c f14555l;

        /* renamed from: m  reason: collision with root package name */
        private n0 f14556m;

        public AuthenticationExtensions a() {
            return new AuthenticationExtensions(this.f14544a, this.f14546c, this.f14545b, this.f14547d, this.f14548e, this.f14549f, this.f14550g, this.f14551h, this.f14552i, this.f14554k, this.f14555l, this.f14556m, this.f14553j);
        }

        public a b(n nVar) {
            this.f14544a = nVar;
            return this;
        }

        public a c(o oVar) {
            this.f14552i = oVar;
            return this;
        }

        public a d(p pVar) {
            this.f14553j = pVar;
            return this;
        }

        public a e(a0 a0Var) {
            this.f14545b = a0Var;
            return this;
        }

        public final a f(r1 r1Var) {
            this.f14546c = r1Var;
            return this;
        }

        public final a g(t1 t1Var) {
            this.f14550g = t1Var;
            return this;
        }

        public final a h(x1 x1Var) {
            this.f14547d = x1Var;
            return this;
        }

        public final a i(g0 g0Var) {
            this.f14548e = g0Var;
            return this;
        }

        public final a j(i0 i0Var) {
            this.f14549f = i0Var;
            return this;
        }

        public final a k(l0 l0Var) {
            this.f14551h = l0Var;
            return this;
        }

        public final a l(q0 q0Var) {
            this.f14554k = q0Var;
            return this;
        }

        public final a m(c cVar) {
            this.f14555l = cVar;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AuthenticationExtensions(n nVar, r1 r1Var, a0 a0Var, x1 x1Var, g0 g0Var, i0 i0Var, t1 t1Var, l0 l0Var, o oVar, q0 q0Var, c cVar, n0 n0Var, p pVar) {
        this.f14531d = nVar;
        this.f14533i = a0Var;
        this.f14532e = r1Var;
        this.f14534o = x1Var;
        this.f14535p = g0Var;
        this.f14536q = i0Var;
        this.f14537r = t1Var;
        this.f14538s = l0Var;
        this.f14539t = oVar;
        this.f14540u = q0Var;
        this.f14541v = cVar;
        this.f14542w = n0Var;
        this.f14543x = pVar;
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
        return this.f14531d;
    }

    public a0 c() {
        return this.f14533i;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AuthenticationExtensions)) {
            return false;
        }
        AuthenticationExtensions authenticationExtensions = (AuthenticationExtensions) obj;
        if (!gf.o.a(this.f14531d, authenticationExtensions.f14531d) || !gf.o.a(this.f14532e, authenticationExtensions.f14532e) || !gf.o.a(this.f14533i, authenticationExtensions.f14533i) || !gf.o.a(this.f14534o, authenticationExtensions.f14534o) || !gf.o.a(this.f14535p, authenticationExtensions.f14535p) || !gf.o.a(this.f14536q, authenticationExtensions.f14536q) || !gf.o.a(this.f14537r, authenticationExtensions.f14537r) || !gf.o.a(this.f14538s, authenticationExtensions.f14538s) || !gf.o.a(this.f14539t, authenticationExtensions.f14539t) || !gf.o.a(this.f14540u, authenticationExtensions.f14540u) || !gf.o.a(this.f14541v, authenticationExtensions.f14541v) || !gf.o.a(this.f14542w, authenticationExtensions.f14542w) || !gf.o.a(this.f14543x, authenticationExtensions.f14543x)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f14531d, this.f14532e, this.f14533i, this.f14534o, this.f14535p, this.f14536q, this.f14537r, this.f14538s, this.f14539t, this.f14540u, this.f14541v, this.f14542w, this.f14543x);
    }

    public final String toString() {
        p pVar = this.f14543x;
        c cVar = this.f14541v;
        q0 q0Var = this.f14540u;
        o oVar = this.f14539t;
        l0 l0Var = this.f14538s;
        t1 t1Var = this.f14537r;
        i0 i0Var = this.f14536q;
        g0 g0Var = this.f14535p;
        x1 x1Var = this.f14534o;
        a0 a0Var = this.f14533i;
        r1 r1Var = this.f14532e;
        String valueOf = String.valueOf(this.f14531d);
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
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 2, b(), i10, false);
        hf.c.q(parcel, 3, this.f14532e, i10, false);
        hf.c.q(parcel, 4, c(), i10, false);
        hf.c.q(parcel, 5, this.f14534o, i10, false);
        hf.c.q(parcel, 6, this.f14535p, i10, false);
        hf.c.q(parcel, 7, this.f14536q, i10, false);
        hf.c.q(parcel, 8, this.f14537r, i10, false);
        hf.c.q(parcel, 9, this.f14538s, i10, false);
        hf.c.q(parcel, 10, this.f14539t, i10, false);
        hf.c.q(parcel, 11, this.f14540u, i10, false);
        hf.c.q(parcel, 12, this.f14541v, i10, false);
        hf.c.q(parcel, 13, this.f14542w, i10, false);
        hf.c.q(parcel, 14, this.f14543x, i10, false);
        hf.c.b(parcel, a10);
    }
}
