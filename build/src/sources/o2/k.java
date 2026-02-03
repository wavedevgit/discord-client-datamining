package o2;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.util.Base64;
import android.util.Log;
import com.appsflyer.AppsFlyerProperties;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.gms.fido.common.Transport;
import com.google.android.gms.fido.fido2.api.common.AuthenticationExtensions;
import g2.e0;
import i2.b0;
import i2.l;
import i2.n;
import i2.p;
import i2.r;
import i2.s;
import i2.x;
import i2.z;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import lr.v;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import ve.a;
import wf.a0;
import wf.j;
import wf.m;
import wf.o;
import wf.q;
import wf.r;
import wf.t;
import wf.u;
import wf.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    public static final a f42293a = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final String f42294b = "clientDataJSON";

    /* renamed from: c  reason: collision with root package name */
    private static final String f42295c = "attestationObject";

    /* renamed from: d  reason: collision with root package name */
    private static final String f42296d = "authenticatorData";

    /* renamed from: e  reason: collision with root package name */
    private static final String f42297e = "signature";

    /* renamed from: f  reason: collision with root package name */
    private static final String f42298f = "userHandle";

    /* renamed from: g  reason: collision with root package name */
    private static final String f42299g = "response";

    /* renamed from: h  reason: collision with root package name */
    private static final String f42300h = StackTraceHelper.ID_KEY;

    /* renamed from: i  reason: collision with root package name */
    private static final String f42301i = "rawId";

    /* renamed from: j  reason: collision with root package name */
    private static final String f42302j = "type";

    /* renamed from: k  reason: collision with root package name */
    private static final String f42303k = "rpId";

    /* renamed from: l  reason: collision with root package name */
    private static final String f42304l = "challenge";

    /* renamed from: m  reason: collision with root package name */
    private static final String f42305m = AppsFlyerProperties.APP_ID;

    /* renamed from: n  reason: collision with root package name */
    private static final String f42306n = "thirdPartyPayment";

    /* renamed from: o  reason: collision with root package name */
    private static final String f42307o = "authenticatorSelection";

    /* renamed from: p  reason: collision with root package name */
    private static final String f42308p = "requireResidentKey";

    /* renamed from: q  reason: collision with root package name */
    private static final String f42309q = "residentKey";

    /* renamed from: r  reason: collision with root package name */
    private static final String f42310r = "authenticatorAttachment";

    /* renamed from: s  reason: collision with root package name */
    private static final String f42311s = "timeout";

    /* renamed from: t  reason: collision with root package name */
    private static final String f42312t = "excludeCredentials";

    /* renamed from: u  reason: collision with root package name */
    private static final String f42313u = "transports";

    /* renamed from: v  reason: collision with root package name */
    private static final String f42314v = "rp";

    /* renamed from: w  reason: collision with root package name */
    private static final String f42315w = StackTraceHelper.NAME_KEY;

    /* renamed from: x  reason: collision with root package name */
    private static final String f42316x = "icon";

    /* renamed from: y  reason: collision with root package name */
    private static final String f42317y = "alg";

    /* renamed from: z  reason: collision with root package name */
    private static final String f42318z = "user";
    private static final String A = "displayName";
    private static final String B = "userVerificationMethod";
    private static final String C = "keyProtectionType";
    private static final String D = "matcherProtectionType";
    private static final String E = "extensions";
    private static final String F = "attestation";
    private static final String G = "pubKeyCredParams";
    private static final String H = "clientExtensionResults";
    private static final String I = "rk";
    private static final String J = "credProps";
    private static final LinkedHashMap K = o0.l(v.a(m.UNKNOWN_ERR, new b0()), v.a(m.ABORT_ERR, new i2.a()), v.a(m.ATTESTATION_NOT_PRIVATE_ERR, new r()), v.a(m.CONSTRAINT_ERR, new i2.b()), v.a(m.DATA_ERR, new i2.d()), v.a(m.INVALID_STATE_ERR, new l()), v.a(m.ENCODING_ERR, new i2.f()), v.a(m.NETWORK_ERR, new n()), v.a(m.NOT_ALLOWED_ERR, new p()), v.a(m.NOT_SUPPORTED_ERR, new s()), v.a(m.SECURITY_ERR, new x()), v.a(m.TIMEOUT_ERR, new z()));

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final boolean F(Context context, long j10) {
            long j11;
            if (com.google.android.gms.common.f.m().g(context) != 0) {
                return false;
            }
            PackageManager packageManager = context.getPackageManager();
            Intrinsics.checkNotNullExpressionValue(packageManager, "getPackageManager(...)");
            if (Build.VERSION.SDK_INT >= 28) {
                PackageInfo packageInfo = packageManager.getPackageInfo("com.google.android.gms", 0);
                Intrinsics.checkNotNullExpressionValue(packageInfo, "getPackageInfo(...)");
                j11 = b.a(packageInfo);
            } else {
                j11 = packageManager.getPackageInfo("com.google.android.gms", 0).versionCode;
            }
            if (j11 <= j10) {
                return false;
            }
            return true;
        }

        private final byte[] h(JSONObject jSONObject) {
            String optString = jSONObject.optString(n(), "");
            Intrinsics.checkNotNull(optString);
            if (optString.length() != 0) {
                return a(optString);
            }
            throw new JSONException("Challenge not found in request or is unexpectedly empty");
        }

        public final String A() {
            return k.f42311s;
        }

        public final String B() {
            return k.f42313u;
        }

        public final String C() {
            return k.f42302j;
        }

        public final String D() {
            return k.f42318z;
        }

        public final LinkedHashMap E() {
            return k.K;
        }

        public final void G(JSONObject json, r.a builder) {
            wf.z zVar;
            Intrinsics.checkNotNullParameter(json, "json");
            Intrinsics.checkNotNullParameter(builder, "builder");
            if (json.has(m())) {
                JSONObject jSONObject = json.getJSONObject(m());
                j.a aVar = new j.a();
                boolean optBoolean = jSONObject.optBoolean(v(), false);
                String optString = jSONObject.optString(w(), "");
                Intrinsics.checkNotNull(optString);
                if (optString.length() > 0) {
                    zVar = wf.z.a(optString);
                } else {
                    zVar = null;
                }
                aVar.c(Boolean.valueOf(optBoolean)).d(zVar);
                String optString2 = jSONObject.optString(l(), "");
                Intrinsics.checkNotNull(optString2);
                if (optString2.length() > 0) {
                    aVar.b(wf.b.a(optString2));
                }
                builder.e(aVar.a());
            }
        }

        public final void H(JSONObject json, r.a builder) {
            Intrinsics.checkNotNullParameter(json, "json");
            Intrinsics.checkNotNullParameter(builder, "builder");
            if (json.has(q())) {
                JSONObject jSONObject = json.getJSONObject(q());
                AuthenticationExtensions.a aVar = new AuthenticationExtensions.a();
                String optString = jSONObject.optString(j(), "");
                Intrinsics.checkNotNull(optString);
                if (optString.length() > 0) {
                    aVar.b(new wf.n(optString));
                }
                if (jSONObject.optBoolean(z(), false)) {
                    aVar.c(new o(true));
                }
                if (jSONObject.optBoolean("uvm", false)) {
                    aVar.e(new a0(true));
                }
                builder.d(aVar.a());
            }
        }

        public final void I(JSONObject json, r.a builder) {
            Intrinsics.checkNotNullParameter(json, "json");
            Intrinsics.checkNotNullParameter(builder, "builder");
            if (json.has(A())) {
                builder.j(Double.valueOf(json.getLong(A()) / 1000));
            }
        }

        public final void J(JSONObject json, r.a builder) {
            ArrayList arrayList;
            Intrinsics.checkNotNullParameter(json, "json");
            Intrinsics.checkNotNullParameter(builder, "builder");
            ArrayList arrayList2 = new ArrayList();
            if (json.has(p())) {
                JSONArray jSONArray = json.getJSONArray(p());
                int length = jSONArray.length();
                for (int i10 = 0; i10 < length; i10++) {
                    JSONObject jSONObject = jSONArray.getJSONObject(i10);
                    String string = jSONObject.getString(s());
                    Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
                    byte[] a10 = a(string);
                    String string2 = jSONObject.getString(C());
                    Intrinsics.checkNotNull(string2);
                    if (string2.length() != 0) {
                        if (a10.length != 0) {
                            if (jSONObject.has(B())) {
                                arrayList = new ArrayList();
                                JSONArray jSONArray2 = jSONObject.getJSONArray(B());
                                int length2 = jSONArray2.length();
                                for (int i11 = 0; i11 < length2; i11++) {
                                    try {
                                        Transport a11 = Transport.a(jSONArray2.getString(i11));
                                        Intrinsics.checkNotNullExpressionValue(a11, "fromString(...)");
                                        arrayList.add(a11);
                                    } catch (Transport.a e10) {
                                        throw new j2.a(new i2.f(), e10.getMessage());
                                    }
                                }
                                continue;
                            } else {
                                arrayList = null;
                            }
                            arrayList2.add(new wf.s(string2, a10, arrayList));
                        } else {
                            throw new JSONException("PublicKeyCredentialDescriptor id value is not found or unexpectedly empty");
                        }
                    } else {
                        throw new JSONException("PublicKeyCredentialDescriptor type value is not found or unexpectedly empty");
                    }
                }
            }
            builder.g(arrayList2);
            String k10 = k();
            String str = ViewProps.NONE;
            String optString = json.optString(k10, ViewProps.NONE);
            Intrinsics.checkNotNull(optString);
            if (optString.length() != 0) {
                str = optString;
            }
            builder.b(wf.c.a(str));
        }

        public final void K(JSONObject json, r.a builder) {
            Intrinsics.checkNotNullParameter(json, "json");
            Intrinsics.checkNotNullParameter(builder, "builder");
            builder.f(h(json));
            JSONObject jSONObject = json.getJSONObject(D());
            String string = jSONObject.getString(s());
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            byte[] a10 = a(string);
            String string2 = jSONObject.getString(t());
            String string3 = jSONObject.getString(o());
            String optString = jSONObject.optString(r(), "");
            Intrinsics.checkNotNull(string3);
            if (string3.length() != 0) {
                if (a10.length != 0) {
                    Intrinsics.checkNotNull(string2);
                    if (string2.length() != 0) {
                        builder.k(new w(a10, string2, optString, string3));
                        return;
                    }
                    throw new JSONException("PublicKeyCredentialCreationOptions UserEntity missing user name or they are unexpectedly empty");
                }
                throw new JSONException("PublicKeyCredentialCreationOptions UserEntity missing user id or they are unexpectedly empty");
            }
            throw new JSONException("PublicKeyCredentialCreationOptions UserEntity missing displayName or they are unexpectedly empty");
        }

        public final void L(JSONObject json, r.a builder) {
            Intrinsics.checkNotNullParameter(json, "json");
            Intrinsics.checkNotNullParameter(builder, "builder");
            JSONObject jSONObject = json.getJSONObject(x());
            String string = jSONObject.getString(s());
            String optString = jSONObject.optString(t(), "");
            String optString2 = jSONObject.optString(r(), "");
            Intrinsics.checkNotNull(optString2);
            if (optString2.length() == 0) {
                optString2 = null;
            }
            Intrinsics.checkNotNull(optString);
            if (optString.length() != 0) {
                Intrinsics.checkNotNull(string);
                if (string.length() != 0) {
                    builder.i(new u(string, optString, optString2));
                    JSONArray jSONArray = json.getJSONArray(u());
                    ArrayList arrayList = new ArrayList();
                    int length = jSONArray.length();
                    for (int i10 = 0; i10 < length; i10++) {
                        JSONObject jSONObject2 = jSONArray.getJSONObject(i10);
                        int i11 = (int) jSONObject2.getLong(i());
                        String optString3 = jSONObject2.optString(C(), "");
                        Intrinsics.checkNotNull(optString3);
                        if (optString3.length() != 0) {
                            if (c(i11)) {
                                arrayList.add(new t(optString3, i11));
                            }
                        } else {
                            throw new JSONException("PublicKeyCredentialCreationOptions PublicKeyCredentialParameter type missing or unexpectedly empty");
                        }
                    }
                    builder.h(arrayList);
                    return;
                }
                throw new JSONException("PublicKeyCredentialCreationOptions rp ID is missing or unexpectedly empty");
            }
            throw new JSONException("PublicKeyCredentialCreationOptions rp name is missing or unexpectedly empty");
        }

        public final h2.e M(q cred) {
            Intrinsics.checkNotNullParameter(cred, "cred");
            wf.i g10 = cred.g();
            Intrinsics.checkNotNullExpressionValue(g10, "getResponse(...)");
            if (!(g10 instanceof wf.h)) {
                return null;
            }
            wf.h hVar = (wf.h) g10;
            m b10 = hVar.b();
            Intrinsics.checkNotNullExpressionValue(b10, "getErrorCode(...)");
            i2.e eVar = (i2.e) E().get(b10);
            String d10 = hVar.d();
            if (eVar == null) {
                b0 b0Var = new b0();
                return new j2.a(b0Var, "unknown fido gms exception - " + d10);
            } else if (b10 == m.NOT_ALLOWED_ERR && d10 != null && StringsKt.V(d10, "Unable to get sync account", false, 2, null)) {
                return new h2.c("Passkey registration was cancelled by the user.");
            } else {
                return new j2.a(eVar, d10);
            }
        }

        public final String N(ve.i cred) {
            wf.i iVar;
            Intrinsics.checkNotNullParameter(cred, "cred");
            JSONObject jSONObject = new JSONObject();
            q k10 = cred.k();
            if (k10 != null) {
                iVar = k10.g();
            } else {
                iVar = null;
            }
            Intrinsics.checkNotNull(iVar);
            if (!(iVar instanceof wf.h)) {
                if (iVar instanceof wf.f) {
                    try {
                        String j10 = k10.j();
                        Intrinsics.checkNotNullExpressionValue(j10, "toJson(...)");
                        return j10;
                    } catch (Throwable th2) {
                        throw new h2.p("The PublicKeyCredential response json had an unexpected exception when parsing: " + th2.getMessage());
                    }
                }
                Log.e("PublicKeyUtility", "AuthenticatorResponse expected assertion response but got: " + iVar.getClass().getName());
                String jSONObject2 = jSONObject.toString();
                Intrinsics.checkNotNullExpressionValue(jSONObject2, "toString(...)");
                return jSONObject2;
            }
            wf.h hVar = (wf.h) iVar;
            m b10 = hVar.b();
            Intrinsics.checkNotNullExpressionValue(b10, "getErrorCode(...)");
            throw b(b10, hVar.d());
        }

        public final byte[] a(String str) {
            Intrinsics.checkNotNullParameter(str, "str");
            byte[] decode = Base64.decode(str, 11);
            Intrinsics.checkNotNullExpressionValue(decode, "decode(...)");
            return decode;
        }

        public final h2.m b(m code, String str) {
            Intrinsics.checkNotNullParameter(code, "code");
            i2.e eVar = (i2.e) E().get(code);
            if (eVar == null) {
                b0 b0Var = new b0();
                return new j2.d(b0Var, "unknown fido gms exception - " + str);
            } else if (code == m.NOT_ALLOWED_ERR && str != null && StringsKt.V(str, "Unable to get sync account", false, 2, null)) {
                return new h2.k("Passkey retrieval was cancelled by the user.");
            } else {
                return new j2.d(eVar, str);
            }
        }

        public final boolean c(int i10) {
            try {
                wf.k.a(i10);
                return true;
            } catch (Throwable unused) {
                return false;
            }
        }

        public final wf.r d(g2.f request, Context context) {
            Intrinsics.checkNotNullParameter(request, "request");
            Intrinsics.checkNotNullParameter(context, "context");
            if (F(context, 241217000L)) {
                return new wf.r(request.g());
            }
            return e(new JSONObject(request.g()));
        }

        public final wf.r e(JSONObject json) {
            Intrinsics.checkNotNullParameter(json, "json");
            r.a aVar = new r.a();
            K(json, aVar);
            L(json, aVar);
            J(json, aVar);
            I(json, aVar);
            G(json, aVar);
            H(json, aVar);
            wf.r a10 = aVar.a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }

        public final a.c f(e0 option) {
            Intrinsics.checkNotNullParameter(option, "option");
            a.c a10 = new a.c.C0679a().c(true).b(option.f()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }

        public final a.d g(e0 option) {
            Intrinsics.checkNotNullParameter(option, "option");
            JSONObject jSONObject = new JSONObject(option.f());
            String optString = jSONObject.optString(y(), "");
            Intrinsics.checkNotNull(optString);
            if (optString.length() != 0) {
                a.d a10 = new a.d.C0680a().d(true).c(optString).b(h(jSONObject)).a();
                Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
                return a10;
            }
            throw new JSONException("GetPublicKeyCredentialOption - rpId not specified in the request or is unexpectedly empty");
        }

        public final String i() {
            return k.f42317y;
        }

        public final String j() {
            return k.f42305m;
        }

        public final String k() {
            return k.F;
        }

        public final String l() {
            return k.f42310r;
        }

        public final String m() {
            return k.f42307o;
        }

        public final String n() {
            return k.f42304l;
        }

        public final String o() {
            return k.A;
        }

        public final String p() {
            return k.f42312t;
        }

        public final String q() {
            return k.E;
        }

        public final String r() {
            return k.f42316x;
        }

        public final String s() {
            return k.f42300h;
        }

        public final String t() {
            return k.f42315w;
        }

        public final String u() {
            return k.G;
        }

        public final String v() {
            return k.f42308p;
        }

        public final String w() {
            return k.f42309q;
        }

        public final String x() {
            return k.f42314v;
        }

        public final String y() {
            return k.f42303k;
        }

        public final String z() {
            return k.f42306n;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public static final b f42319a = new b();

        private b() {
        }

        public static final long a(PackageInfo info) {
            Intrinsics.checkNotNullParameter(info, "info");
            return info.getLongVersionCode();
        }
    }
}
