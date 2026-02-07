package com.discord.security_key;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Intent;
import android.util.Base64;
import android.util.JsonReader;
import com.appsflyer.AppsFlyerProperties;
import com.discord.logging.Log;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.fido.fido2.api.common.AuthenticationExtensions;
import com.google.android.gms.fido.fido2.api.common.PublicKeyCredentialRequestOptions;
import com.google.android.gms.tasks.Task;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
import org.json.JSONTokener;
import wf.a0;
import wf.h;
import wf.i;
import wf.n;
import wf.q;
import wf.r;
import wf.s;
import wf.v;
import yg.g;
@Metadata(d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0012\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\n\u0018\u0000 .2\u00020\u0001:\u0001.B/\u0012\u0012\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002\u0012\u0012\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\u000b\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u0003H\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\u0011\u001a\u00020\u00042\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u000e\u001a\u00020\rH\u0002¢\u0006\u0004\b\u0014\u0010\u0015J\u001d\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00170\u00162\u0006\u0010\u000e\u001a\u00020\rH\u0002¢\u0006\u0004\b\u0018\u0010\u0019J\u0013\u0010\u001b\u001a\u00020\u001a*\u00020\u0003H\u0002¢\u0006\u0004\b\u001b\u0010\u001cJ'\u0010\"\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\u001f\u001a\u00020\u001d2\b\u0010!\u001a\u0004\u0018\u00010 ¢\u0006\u0004\b\"\u0010#J\u001f\u0010'\u001a\u00020\u00042\u0006\u0010$\u001a\u00020\u00032\b\u0010&\u001a\u0004\u0018\u00010%¢\u0006\u0004\b'\u0010(J\u001f\u0010)\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00032\b\u0010&\u001a\u0004\u0018\u00010%¢\u0006\u0004\b)\u0010(R#\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0005\u0010*\u001a\u0004\b+\u0010,R#\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010*\u001a\u0004\b-\u0010,¨\u0006/"}, d2 = {"Lcom/discord/security_key/WebAuthn;", "", "Lkotlin/Function1;", "", "", "resolve", "reject", "<init>", "(Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "requestOptions", "Lcom/google/android/gms/fido/fido2/api/common/PublicKeyCredentialRequestOptions;", "parsePublicKeyCredentialRequestOptions", "(Ljava/lang/String;)Lcom/google/android/gms/fido/fido2/api/common/PublicKeyCredentialRequestOptions;", "Landroid/util/JsonReader;", "reader", "Lcom/google/android/gms/fido/fido2/api/common/PublicKeyCredentialRequestOptions$Builder;", "builder", "parseRequestOptions", "(Landroid/util/JsonReader;Lcom/google/android/gms/fido/fido2/api/common/PublicKeyCredentialRequestOptions$Builder;)V", "Lcom/google/android/gms/fido/fido2/api/common/AuthenticationExtensions;", "parseAuthenticationExtensions", "(Landroid/util/JsonReader;)Lcom/google/android/gms/fido/fido2/api/common/AuthenticationExtensions;", "", "Lwf/s;", "parseCredentialDescriptors", "(Landroid/util/JsonReader;)Ljava/util/List;", "", "decodeBase64", "(Ljava/lang/String;)[B", "", "requestCode", "resultCode", "Landroid/content/Intent;", "data", "onActivityResult", "(IILandroid/content/Intent;)V", "creationOptionsJSON", "Landroid/app/Activity;", "currentActivity", "registerSecurityKey", "(Ljava/lang/String;Landroid/app/Activity;)V", "authenticateSecurityKey", "Lkotlin/jvm/functions/Function1;", "getResolve", "()Lkotlin/jvm/functions/Function1;", "getReject", "Companion", "security_key_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class WebAuthn {
    private static final int BASE64_FLAG = 11;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int REQUEST_CODE_AUTHENTICATE_SK = 4002;
    private static final int REQUEST_CODE_REGISTER_SK = 4001;
    @NotNull
    private static final String TAG = "DCDSecurityKeyManager.WebAuthn";
    @NotNull
    private final Function1<String, Unit> reject;
    @NotNull
    private final Function1<String, Unit> resolve;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/security_key/WebAuthn$Companion;", "", "<init>", "()V", "REQUEST_CODE_REGISTER_SK", "", "REQUEST_CODE_AUTHENTICATE_SK", "BASE64_FLAG", "TAG", "", "security_key_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public WebAuthn(@NotNull Function1<? super String, Unit> resolve, @NotNull Function1<? super String, Unit> reject) {
        Intrinsics.checkNotNullParameter(resolve, "resolve");
        Intrinsics.checkNotNullParameter(reject, "reject");
        this.resolve = resolve;
        this.reject = reject;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit authenticateSecurityKey$lambda$3(Activity activity, PendingIntent pendingIntent) {
        activity.startIntentSenderForResult(pendingIntent.getIntentSender(), REQUEST_CODE_AUTHENTICATE_SK, null, 0, 0, 0);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void authenticateSecurityKey$lambda$5(WebAuthn webAuthn, Exception it) {
        Intrinsics.checkNotNullParameter(it, "it");
        webAuthn.reject.invoke("task failed");
    }

    private final byte[] decodeBase64(String str) {
        byte[] decode = Base64.decode(str, 11);
        Intrinsics.checkNotNullExpressionValue(decode, "decode(...)");
        return decode;
    }

    private final AuthenticationExtensions parseAuthenticationExtensions(JsonReader jsonReader) {
        Log.i$default(Log.INSTANCE, TAG, "parseAuthenticationExtensions: Parsing authentication extensions...", (Throwable) null, 4, (Object) null);
        AuthenticationExtensions.a aVar = new AuthenticationExtensions.a();
        jsonReader.beginObject();
        while (jsonReader.hasNext()) {
            String nextName = jsonReader.nextName();
            if (nextName != null) {
                int hashCode = nextName.hashCode();
                if (hashCode != 116204) {
                    if (hashCode != 93029116) {
                        if (hashCode == 757680504 && nextName.equals("largeBlob")) {
                            Log.w$default(Log.INSTANCE, TAG, "parseAuthenticationExtensions: ... largeBlob extension: unsupported, skipping", (Throwable) null, 4, (Object) null);
                            jsonReader.skipValue();
                        }
                    } else if (nextName.equals(AppsFlyerProperties.APP_ID)) {
                        String nextString = jsonReader.nextString();
                        Log log = Log.INSTANCE;
                        Log.i$default(log, TAG, "parseAuthenticationExtensions: ... appid extension: `" + nextString + "`", (Throwable) null, 4, (Object) null);
                        Intrinsics.checkNotNull(aVar.b(new n(nextString)));
                    }
                } else if (nextName.equals("uvm")) {
                    a0 a0Var = new a0(jsonReader.nextBoolean());
                    Log log2 = Log.INSTANCE;
                    Log.i$default(log2, TAG, "parseAuthenticationExtensions: ... uvm extension: `" + a0Var + "`", (Throwable) null, 4, (Object) null);
                    Intrinsics.checkNotNull(aVar.e(a0Var));
                }
            }
            Log log3 = Log.INSTANCE;
            Log.w$default(log3, TAG, "parseAuthenticationExtensions: Found unrecognized extension: `" + nextName + "`", (Throwable) null, 4, (Object) null);
            jsonReader.skipValue();
        }
        jsonReader.endObject();
        AuthenticationExtensions a10 = aVar.a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        return a10;
    }

    private final List<s> parseCredentialDescriptors(JsonReader jsonReader) {
        Log.i$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: Processing credential descriptors...", (Throwable) null, 4, (Object) null);
        ArrayList arrayList = new ArrayList();
        jsonReader.beginArray();
        while (jsonReader.hasNext()) {
            Log.i$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: Found new descriptor", (Throwable) null, 4, (Object) null);
            jsonReader.beginObject();
            byte[] bArr = null;
            while (jsonReader.hasNext()) {
                String nextName = jsonReader.nextName();
                if (nextName != null) {
                    int hashCode = nextName.hashCode();
                    if (hashCode != -1717834134) {
                        if (hashCode != 3355) {
                            if (hashCode == 3575610 && nextName.equals("type")) {
                                Log.w$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: ... skipping unsupported field `type`", (Throwable) null, 4, (Object) null);
                                jsonReader.skipValue();
                            }
                        } else if (nextName.equals(StackTraceHelper.ID_KEY)) {
                            String nextString = jsonReader.nextString();
                            Log.i$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: ... id: `" + nextString + "`", (Throwable) null, 4, (Object) null);
                            Intrinsics.checkNotNull(nextString);
                            bArr = decodeBase64(nextString);
                        }
                        Log.w$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: ... skipping unrecognized field `" + nextName + "`", (Throwable) null, 4, (Object) null);
                        jsonReader.skipValue();
                    } else if (nextName.equals("transports")) {
                        Log.w$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: ... skipping unsupported field `transports`", (Throwable) null, 4, (Object) null);
                        jsonReader.skipValue();
                    } else {
                        Log.w$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: ... skipping unrecognized field `" + nextName + "`", (Throwable) null, 4, (Object) null);
                        jsonReader.skipValue();
                    }
                }
                Log.w$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: ... skipping unrecognized field `" + nextName + "`", (Throwable) null, 4, (Object) null);
                jsonReader.skipValue();
            }
            jsonReader.endObject();
            String vVar = v.PUBLIC_KEY.toString();
            Intrinsics.checkNotNull(bArr);
            arrayList.add(new s(vVar, bArr, (List) null));
        }
        jsonReader.endArray();
        Log.i$default(Log.INSTANCE, TAG, "parseCredentialDescriptors: Processed " + arrayList.size() + " descriptors", (Throwable) null, 4, (Object) null);
        return arrayList;
    }

    private final PublicKeyCredentialRequestOptions parsePublicKeyCredentialRequestOptions(String str) {
        Log log = Log.INSTANCE;
        Log.i$default(log, TAG, "parsePublicKeyCredentialRequestOptions: " + str, (Throwable) null, 4, (Object) null);
        PublicKeyCredentialRequestOptions.Builder builder = new PublicKeyCredentialRequestOptions.Builder();
        JsonReader jsonReader = new JsonReader(new StringReader(str));
        try {
            jsonReader.beginObject();
            while (jsonReader.hasNext()) {
                String nextName = jsonReader.nextName();
                if (Intrinsics.areEqual(nextName, "publicKey")) {
                    parseRequestOptions(jsonReader, builder);
                } else {
                    Log log2 = Log.INSTANCE;
                    Log.w$default(log2, TAG, "parsePublicKeyCredentialRequestOptions: Found unexpected key in request options: `" + nextName + "`, skipping", (Throwable) null, 4, (Object) null);
                    jsonReader.skipValue();
                }
            }
            jsonReader.endObject();
            Unit unit = Unit.f32056a;
            bs.c.a(jsonReader, null);
            PublicKeyCredentialRequestOptions a10 = builder.a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        } finally {
        }
    }

    private final void parseRequestOptions(JsonReader jsonReader, PublicKeyCredentialRequestOptions.Builder builder) {
        jsonReader.beginObject();
        Log.i$default(Log.INSTANCE, TAG, "Processing request options...", (Throwable) null, 4, (Object) null);
        while (jsonReader.hasNext()) {
            String nextName = jsonReader.nextName();
            if (nextName != null) {
                switch (nextName.hashCode()) {
                    case -1809421292:
                        if (!nextName.equals("extensions")) {
                            break;
                        } else {
                            Intrinsics.checkNotNullExpressionValue(builder.c(parseAuthenticationExtensions(jsonReader)), "setAuthenticationExtensions(...)");
                            continue;
                        }
                    case -1313911455:
                        if (!nextName.equals("timeout")) {
                            break;
                        } else {
                            double nextDouble = jsonReader.nextDouble();
                            Log log = Log.INSTANCE;
                            Log.i$default(log, TAG, "parseRequestOptions: timeout: `" + nextDouble + "`", (Throwable) null, 4, (Object) null);
                            Intrinsics.checkNotNull(builder.g(Double.valueOf(nextDouble / ((double) 1000))));
                            continue;
                        }
                    case 3506169:
                        if (!nextName.equals("rpId")) {
                            break;
                        } else {
                            String nextString = jsonReader.nextString();
                            Log log2 = Log.INSTANCE;
                            Log.i$default(log2, TAG, "parseRequestOptions: rpId: `" + nextString + "`", (Throwable) null, 4, (Object) null);
                            Intrinsics.checkNotNull(builder.f(nextString));
                            continue;
                        }
                    case 493711347:
                        if (!nextName.equals("allowCredentials")) {
                            break;
                        } else {
                            Intrinsics.checkNotNullExpressionValue(builder.b(parseCredentialDescriptors(jsonReader)), "setAllowList(...)");
                            continue;
                        }
                    case 1402633315:
                        if (!nextName.equals("challenge")) {
                            break;
                        } else {
                            String nextString2 = jsonReader.nextString();
                            Log log3 = Log.INSTANCE;
                            Log.i$default(log3, TAG, "parseRequestOptions: challenge: `" + nextString2 + "`", (Throwable) null, 4, (Object) null);
                            Intrinsics.checkNotNull(nextString2);
                            Intrinsics.checkNotNull(builder.d(decodeBase64(nextString2)));
                            continue;
                        }
                    case 2036710790:
                        if (!nextName.equals("userVerification")) {
                            break;
                        } else {
                            String nextString3 = jsonReader.nextString();
                            Log log4 = Log.INSTANCE;
                            Log.w$default(log4, TAG, "parseRequestOptions: userVerification: `" + nextString3 + "`, skipping", (Throwable) null, 4, (Object) null);
                            Unit unit = Unit.f32056a;
                            continue;
                        }
                }
            }
            Log log5 = Log.INSTANCE;
            Log.w$default(log5, TAG, "parseRequestOptions: Found unrecognized option: `" + nextName + "`, skipping", (Throwable) null, 4, (Object) null);
            jsonReader.skipValue();
            Unit unit2 = Unit.f32056a;
        }
        jsonReader.endObject();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerSecurityKey$lambda$0(Activity activity, PendingIntent pendingIntent) {
        activity.startIntentSenderForResult(pendingIntent.getIntentSender(), 4001, null, 0, 0, 0);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void registerSecurityKey$lambda$2(WebAuthn webAuthn, Exception it) {
        Intrinsics.checkNotNullParameter(it, "it");
        webAuthn.reject.invoke("task failed");
    }

    public final void authenticateSecurityKey(@NotNull String requestOptions, final Activity activity) {
        Intrinsics.checkNotNullParameter(requestOptions, "requestOptions");
        if (activity == null) {
            this.reject.invoke("no activity");
            return;
        }
        vf.a a10 = uf.a.a(activity);
        Intrinsics.checkNotNullExpressionValue(a10, "getFido2ApiClient(...)");
        Task D = a10.D(parsePublicKeyCredentialRequestOptions(requestOptions));
        Intrinsics.checkNotNullExpressionValue(D, "getSignPendingIntent(...)");
        final Function1 function1 = new Function1() { // from class: com.discord.security_key.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit authenticateSecurityKey$lambda$3;
                authenticateSecurityKey$lambda$3 = WebAuthn.authenticateSecurityKey$lambda$3(activity, (PendingIntent) obj);
                return authenticateSecurityKey$lambda$3;
            }
        };
        D.g(new g() { // from class: com.discord.security_key.b
            @Override // yg.g
            public final void onSuccess(Object obj) {
                Function1.this.invoke(obj);
            }
        });
        D.e(new yg.f() { // from class: com.discord.security_key.c
            @Override // yg.f
            public final void onFailure(Exception exc) {
                WebAuthn.authenticateSecurityKey$lambda$5(WebAuthn.this, exc);
            }
        });
    }

    @NotNull
    public final Function1<String, Unit> getReject() {
        return this.reject;
    }

    @NotNull
    public final Function1<String, Unit> getResolve() {
        return this.resolve;
    }

    public final void onActivityResult(int i10, int i11, Intent intent) {
        byte[] bArr;
        if (i10 == 4001 || i10 == REQUEST_CODE_AUTHENTICATE_SK) {
            if (i11 != -1) {
                this.reject.invoke("activity failed");
                return;
            }
            if (intent != null) {
                bArr = intent.getByteArrayExtra("FIDO2_CREDENTIAL_EXTRA");
            } else {
                bArr = null;
            }
            if (bArr == null) {
                this.reject.invoke("credential data missing");
                return;
            }
            q b10 = q.b(bArr);
            Intrinsics.checkNotNullExpressionValue(b10, "deserializeFromBytes(...)");
            if (b10.h() instanceof h) {
                Function1<String, Unit> function1 = this.reject;
                i h10 = b10.h();
                Intrinsics.checkNotNull(h10, "null cannot be cast to non-null type com.google.android.gms.fido.fido2.api.common.AuthenticatorErrorResponse");
                String d10 = ((h) h10).d();
                if (d10 == null) {
                    d10 = "Unknown error";
                }
                function1.invoke(d10);
            } else if (i10 != 4001) {
                if (i10 != REQUEST_CODE_AUTHENTICATE_SK) {
                    return;
                }
                Function1<String, Unit> function12 = this.resolve;
                String j10 = b10.j();
                Intrinsics.checkNotNullExpressionValue(j10, "toJson(...)");
                function12.invoke(j10);
            } else {
                Function1<String, Unit> function13 = this.resolve;
                String j11 = b10.j();
                Intrinsics.checkNotNullExpressionValue(j11, "toJson(...)");
                function13.invoke(j11);
            }
        }
    }

    public final void registerSecurityKey(@NotNull String creationOptionsJSON, final Activity activity) {
        Intrinsics.checkNotNullParameter(creationOptionsJSON, "creationOptionsJSON");
        if (activity == null) {
            this.reject.invoke("no activity");
            return;
        }
        vf.a a10 = uf.a.a(activity);
        Intrinsics.checkNotNullExpressionValue(a10, "getFido2ApiClient(...)");
        String jSONObject = new JSONObject(new JSONTokener(creationOptionsJSON)).getJSONObject("publicKey").toString();
        Intrinsics.checkNotNullExpressionValue(jSONObject, "toString(...)");
        Task C = a10.C(new r(jSONObject));
        Intrinsics.checkNotNullExpressionValue(C, "getRegisterPendingIntent(...)");
        final Function1 function1 = new Function1() { // from class: com.discord.security_key.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit registerSecurityKey$lambda$0;
                registerSecurityKey$lambda$0 = WebAuthn.registerSecurityKey$lambda$0(activity, (PendingIntent) obj);
                return registerSecurityKey$lambda$0;
            }
        };
        C.g(new g() { // from class: com.discord.security_key.e
            @Override // yg.g
            public final void onSuccess(Object obj) {
                Function1.this.invoke(obj);
            }
        });
        C.e(new yg.f() { // from class: com.discord.security_key.f
            @Override // yg.f
            public final void onFailure(Exception exc) {
                WebAuthn.registerSecurityKey$lambda$2(WebAuthn.this, exc);
            }
        });
    }
}
