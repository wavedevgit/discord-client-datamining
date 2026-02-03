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
    private final n f13499d;

    /* renamed from: e  reason: collision with root package name */
    private final r1 f13500e;

    /* renamed from: i  reason: collision with root package name */
    private final a0 f13501i;

    /* renamed from: o  reason: collision with root package name */
    private final x1 f13502o;

    /* renamed from: p  reason: collision with root package name */
    private final g0 f13503p;

    /* renamed from: q  reason: collision with root package name */
    private final i0 f13504q;

    /* renamed from: r  reason: collision with root package name */
    private final t1 f13505r;

    /* renamed from: s  reason: collision with root package name */
    private final l0 f13506s;

    /* renamed from: t  reason: collision with root package name */
    private final o f13507t;

    /* renamed from: u  reason: collision with root package name */
    private final q0 f13508u;

    /* renamed from: v  reason: collision with root package name */
    private final c f13509v;

    /* renamed from: w  reason: collision with root package name */
    private final n0 f13510w;

    /* renamed from: x  reason: collision with root package name */
    private final p f13511x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private n f13512a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f13513b;

        /* renamed from: c  reason: collision with root package name */
        private r1 f13514c;

        /* renamed from: d  reason: collision with root package name */
        private x1 f13515d;

        /* renamed from: e  reason: collision with root package name */
        private g0 f13516e;

        /* renamed from: f  reason: collision with root package name */
        private i0 f13517f;

        /* renamed from: g  reason: collision with root package name */
        private t1 f13518g;

        /* renamed from: h  reason: collision with root package name */
        private l0 f13519h;

        /* renamed from: i  reason: collision with root package name */
        private o f13520i;

        /* renamed from: j  reason: collision with root package name */
        private p f13521j;

        /* renamed from: k  reason: collision with root package name */
        private q0 f13522k;

        /* renamed from: l  reason: collision with root package name */
        private c f13523l;

        /* renamed from: m  reason: collision with root package name */
        private n0 f13524m;

        public AuthenticationExtensions a() {
            return new AuthenticationExtensions(this.f13512a, this.f13514c, this.f13513b, this.f13515d, this.f13516e, this.f13517f, this.f13518g, this.f13519h, this.f13520i, this.f13522k, this.f13523l, this.f13524m, this.f13521j);
        }

        public a b(n nVar) {
            this.f13512a = nVar;
            return this;
        }

        public a c(o oVar) {
            this.f13520i = oVar;
            return this;
        }

        public a d(p pVar) {
            this.f13521j = pVar;
            return this;
        }

        public a e(a0 a0Var) {
            this.f13513b = a0Var;
            return this;
        }

        public final a f(r1 r1Var) {
            this.f13514c = r1Var;
            return this;
        }

        public final a g(t1 t1Var) {
            this.f13518g = t1Var;
            return this;
        }

        public final a h(x1 x1Var) {
            this.f13515d = x1Var;
            return this;
        }

        public final a i(g0 g0Var) {
            this.f13516e = g0Var;
            return this;
        }

        public final a j(i0 i0Var) {
            this.f13517f = i0Var;
            return this;
        }

        public final a k(l0 l0Var) {
            this.f13519h = l0Var;
            return this;
        }

        public final a l(q0 q0Var) {
            this.f13522k = q0Var;
            return this;
        }

        public final a m(c cVar) {
            this.f13523l = cVar;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AuthenticationExtensions(n nVar, r1 r1Var, a0 a0Var, x1 x1Var, g0 g0Var, i0 i0Var, t1 t1Var, l0 l0Var, o oVar, q0 q0Var, c cVar, n0 n0Var, p pVar) {
        this.f13499d = nVar;
        this.f13501i = a0Var;
        this.f13500e = r1Var;
        this.f13502o = x1Var;
        this.f13503p = g0Var;
        this.f13504q = i0Var;
        this.f13505r = t1Var;
        this.f13506s = l0Var;
        this.f13507t = oVar;
        this.f13508u = q0Var;
        this.f13509v = cVar;
        this.f13510w = n0Var;
        this.f13511x = pVar;
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
        return this.f13499d;
    }

    public a0 c() {
        return this.f13501i;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AuthenticationExtensions)) {
            return false;
        }
        AuthenticationExtensions authenticationExtensions = (AuthenticationExtensions) obj;
        if (!gf.o.a(this.f13499d, authenticationExtensions.f13499d) || !gf.o.a(this.f13500e, authenticationExtensions.f13500e) || !gf.o.a(this.f13501i, authenticationExtensions.f13501i) || !gf.o.a(this.f13502o, authenticationExtensions.f13502o) || !gf.o.a(this.f13503p, authenticationExtensions.f13503p) || !gf.o.a(this.f13504q, authenticationExtensions.f13504q) || !gf.o.a(this.f13505r, authenticationExtensions.f13505r) || !gf.o.a(this.f13506s, authenticationExtensions.f13506s) || !gf.o.a(this.f13507t, authenticationExtensions.f13507t) || !gf.o.a(this.f13508u, authenticationExtensions.f13508u) || !gf.o.a(this.f13509v, authenticationExtensions.f13509v) || !gf.o.a(this.f13510w, authenticationExtensions.f13510w) || !gf.o.a(this.f13511x, authenticationExtensions.f13511x)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f13499d, this.f13500e, this.f13501i, this.f13502o, this.f13503p, this.f13504q, this.f13505r, this.f13506s, this.f13507t, this.f13508u, this.f13509v, this.f13510w, this.f13511x);
    }

    public final String toString() {
        p pVar = this.f13511x;
        c cVar = this.f13509v;
        q0 q0Var = this.f13508u;
        o oVar = this.f13507t;
        l0 l0Var = this.f13506s;
        t1 t1Var = this.f13505r;
        i0 i0Var = this.f13504q;
        g0 g0Var = this.f13503p;
        x1 x1Var = this.f13502o;
        a0 a0Var = this.f13501i;
        r1 r1Var = this.f13500e;
        String valueOf = String.valueOf(this.f13499d);
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
        hf.c.q(parcel, 3, this.f13500e, i10, false);
        hf.c.q(parcel, 4, c(), i10, false);
        hf.c.q(parcel, 5, this.f13502o, i10, false);
        hf.c.q(parcel, 6, this.f13503p, i10, false);
        hf.c.q(parcel, 7, this.f13504q, i10, false);
        hf.c.q(parcel, 8, this.f13505r, i10, false);
        hf.c.q(parcel, 9, this.f13506s, i10, false);
        hf.c.q(parcel, 10, this.f13507t, i10, false);
        hf.c.q(parcel, 11, this.f13508u, i10, false);
        hf.c.q(parcel, 12, this.f13509v, i10, false);
        hf.c.q(parcel, 13, this.f13510w, i10, false);
        hf.c.q(parcel, 14, this.f13511x, i10, false);
        hf.c.b(parcel, a10);
    }
}
