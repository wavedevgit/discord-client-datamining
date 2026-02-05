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
    private final n f13893d;

    /* renamed from: e  reason: collision with root package name */
    private final r1 f13894e;

    /* renamed from: i  reason: collision with root package name */
    private final a0 f13895i;

    /* renamed from: o  reason: collision with root package name */
    private final x1 f13896o;

    /* renamed from: p  reason: collision with root package name */
    private final g0 f13897p;

    /* renamed from: q  reason: collision with root package name */
    private final i0 f13898q;

    /* renamed from: r  reason: collision with root package name */
    private final t1 f13899r;

    /* renamed from: s  reason: collision with root package name */
    private final l0 f13900s;

    /* renamed from: t  reason: collision with root package name */
    private final o f13901t;

    /* renamed from: u  reason: collision with root package name */
    private final q0 f13902u;

    /* renamed from: v  reason: collision with root package name */
    private final c f13903v;

    /* renamed from: w  reason: collision with root package name */
    private final n0 f13904w;

    /* renamed from: x  reason: collision with root package name */
    private final p f13905x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private n f13906a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f13907b;

        /* renamed from: c  reason: collision with root package name */
        private r1 f13908c;

        /* renamed from: d  reason: collision with root package name */
        private x1 f13909d;

        /* renamed from: e  reason: collision with root package name */
        private g0 f13910e;

        /* renamed from: f  reason: collision with root package name */
        private i0 f13911f;

        /* renamed from: g  reason: collision with root package name */
        private t1 f13912g;

        /* renamed from: h  reason: collision with root package name */
        private l0 f13913h;

        /* renamed from: i  reason: collision with root package name */
        private o f13914i;

        /* renamed from: j  reason: collision with root package name */
        private p f13915j;

        /* renamed from: k  reason: collision with root package name */
        private q0 f13916k;

        /* renamed from: l  reason: collision with root package name */
        private c f13917l;

        /* renamed from: m  reason: collision with root package name */
        private n0 f13918m;

        public AuthenticationExtensions a() {
            return new AuthenticationExtensions(this.f13906a, this.f13908c, this.f13907b, this.f13909d, this.f13910e, this.f13911f, this.f13912g, this.f13913h, this.f13914i, this.f13916k, this.f13917l, this.f13918m, this.f13915j);
        }

        public a b(n nVar) {
            this.f13906a = nVar;
            return this;
        }

        public a c(o oVar) {
            this.f13914i = oVar;
            return this;
        }

        public a d(p pVar) {
            this.f13915j = pVar;
            return this;
        }

        public a e(a0 a0Var) {
            this.f13907b = a0Var;
            return this;
        }

        public final a f(r1 r1Var) {
            this.f13908c = r1Var;
            return this;
        }

        public final a g(t1 t1Var) {
            this.f13912g = t1Var;
            return this;
        }

        public final a h(x1 x1Var) {
            this.f13909d = x1Var;
            return this;
        }

        public final a i(g0 g0Var) {
            this.f13910e = g0Var;
            return this;
        }

        public final a j(i0 i0Var) {
            this.f13911f = i0Var;
            return this;
        }

        public final a k(l0 l0Var) {
            this.f13913h = l0Var;
            return this;
        }

        public final a l(q0 q0Var) {
            this.f13916k = q0Var;
            return this;
        }

        public final a m(c cVar) {
            this.f13917l = cVar;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AuthenticationExtensions(n nVar, r1 r1Var, a0 a0Var, x1 x1Var, g0 g0Var, i0 i0Var, t1 t1Var, l0 l0Var, o oVar, q0 q0Var, c cVar, n0 n0Var, p pVar) {
        this.f13893d = nVar;
        this.f13895i = a0Var;
        this.f13894e = r1Var;
        this.f13896o = x1Var;
        this.f13897p = g0Var;
        this.f13898q = i0Var;
        this.f13899r = t1Var;
        this.f13900s = l0Var;
        this.f13901t = oVar;
        this.f13902u = q0Var;
        this.f13903v = cVar;
        this.f13904w = n0Var;
        this.f13905x = pVar;
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
        return this.f13893d;
    }

    public a0 c() {
        return this.f13895i;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AuthenticationExtensions)) {
            return false;
        }
        AuthenticationExtensions authenticationExtensions = (AuthenticationExtensions) obj;
        if (!gf.o.a(this.f13893d, authenticationExtensions.f13893d) || !gf.o.a(this.f13894e, authenticationExtensions.f13894e) || !gf.o.a(this.f13895i, authenticationExtensions.f13895i) || !gf.o.a(this.f13896o, authenticationExtensions.f13896o) || !gf.o.a(this.f13897p, authenticationExtensions.f13897p) || !gf.o.a(this.f13898q, authenticationExtensions.f13898q) || !gf.o.a(this.f13899r, authenticationExtensions.f13899r) || !gf.o.a(this.f13900s, authenticationExtensions.f13900s) || !gf.o.a(this.f13901t, authenticationExtensions.f13901t) || !gf.o.a(this.f13902u, authenticationExtensions.f13902u) || !gf.o.a(this.f13903v, authenticationExtensions.f13903v) || !gf.o.a(this.f13904w, authenticationExtensions.f13904w) || !gf.o.a(this.f13905x, authenticationExtensions.f13905x)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f13893d, this.f13894e, this.f13895i, this.f13896o, this.f13897p, this.f13898q, this.f13899r, this.f13900s, this.f13901t, this.f13902u, this.f13903v, this.f13904w, this.f13905x);
    }

    public final String toString() {
        p pVar = this.f13905x;
        c cVar = this.f13903v;
        q0 q0Var = this.f13902u;
        o oVar = this.f13901t;
        l0 l0Var = this.f13900s;
        t1 t1Var = this.f13899r;
        i0 i0Var = this.f13898q;
        g0 g0Var = this.f13897p;
        x1 x1Var = this.f13896o;
        a0 a0Var = this.f13895i;
        r1 r1Var = this.f13894e;
        String valueOf = String.valueOf(this.f13893d);
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
        hf.c.q(parcel, 3, this.f13894e, i10, false);
        hf.c.q(parcel, 4, c(), i10, false);
        hf.c.q(parcel, 5, this.f13896o, i10, false);
        hf.c.q(parcel, 6, this.f13897p, i10, false);
        hf.c.q(parcel, 7, this.f13898q, i10, false);
        hf.c.q(parcel, 8, this.f13899r, i10, false);
        hf.c.q(parcel, 9, this.f13900s, i10, false);
        hf.c.q(parcel, 10, this.f13901t, i10, false);
        hf.c.q(parcel, 11, this.f13902u, i10, false);
        hf.c.q(parcel, 12, this.f13903v, i10, false);
        hf.c.q(parcel, 13, this.f13904w, i10, false);
        hf.c.q(parcel, 14, this.f13905x, i10, false);
        hf.c.b(parcel, a10);
    }
}
