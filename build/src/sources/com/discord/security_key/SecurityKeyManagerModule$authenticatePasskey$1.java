package com.discord.security_key;

import android.app.Activity;
import androidx.credentials.CredentialManager;
import com.discord.logging.Log;
import g2.c0;
import g2.d0;
import g2.e0;
import g2.h;
import g2.h0;
import h2.m;
import h2.r;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import org.json.JSONObject;
import org.json.JSONTokener;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.security_key.SecurityKeyManagerModule$authenticatePasskey$1", f = "SecurityKeyManagerModule.kt", l = {181}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class SecurityKeyManagerModule$authenticatePasskey$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $requestJson;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ SecurityKeyManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SecurityKeyManagerModule$authenticatePasskey$1(String str, SecurityKeyManagerModule securityKeyManagerModule, Continuation<? super SecurityKeyManagerModule$authenticatePasskey$1> continuation) {
        super(2, continuation);
        this.$requestJson = str;
        this.this$0 = securityKeyManagerModule;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        SecurityKeyManagerModule$authenticatePasskey$1 securityKeyManagerModule$authenticatePasskey$1 = new SecurityKeyManagerModule$authenticatePasskey$1(this.$requestJson, this.this$0, continuation);
        securityKeyManagerModule$authenticatePasskey$1.L$0 = obj;
        return securityKeyManagerModule$authenticatePasskey$1;
    }

    /* JADX WARN: Type inference failed for: r2v0, types: [int, com.discord.security_key.SecurityKeyManagerModule] */
    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object b10;
        SecurityKeyManagerModule securityKeyManagerModule;
        CredentialManager credentialManager;
        Object f10 = or.b.f();
        ?? r22 = this.label;
        try {
            try {
                if (r22 != 0) {
                    if (r22 == 1) {
                        securityKeyManagerModule = (SecurityKeyManagerModule) this.L$0;
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
                    String str = this.$requestJson;
                    securityKeyManagerModule = this.this$0;
                    Result.a aVar = Result.f33279e;
                    String jSONObject = new JSONObject(new JSONTokener(str)).getJSONObject("publicKey").toString();
                    Intrinsics.checkNotNullExpressionValue(jSONObject, "toString(...)");
                    c0 c0Var = new c0(CollectionsKt.e(new e0(jSONObject, null, null, 6, null)), null, false, null, false, 30, null);
                    credentialManager = securityKeyManagerModule.credentialManager;
                    Activity currentActivity = securityKeyManagerModule.getReactContext().getCurrentActivity();
                    Intrinsics.checkNotNull(currentActivity);
                    this.L$0 = securityKeyManagerModule;
                    this.label = 1;
                    obj = credentialManager.a(currentActivity, c0Var, this);
                    if (obj == f10) {
                        return f10;
                    }
                }
                h a10 = ((d0) obj).a();
                if (a10 instanceof h0) {
                    securityKeyManagerModule.resolve(((h0) a10).a());
                } else {
                    securityKeyManagerModule.reject("Unsupported credential type returned");
                }
            } catch (r e10) {
                Log.INSTANCE.e(SecurityKeyManagerModule.TAG, "No credential found", e10);
                r22.reject("No credential found");
            } catch (m e11) {
                Log.INSTANCE.e(SecurityKeyManagerModule.TAG, "authenticatePasskey error", e11);
                r22.reject(e11);
            }
            b10 = Result.b(Unit.f33282a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33279e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        SecurityKeyManagerModule securityKeyManagerModule2 = this.this$0;
        Throwable e12 = Result.e(b10);
        if (e12 != null) {
            if (!(e12 instanceof CancellationException)) {
                securityKeyManagerModule2.reject(e12);
            } else {
                throw e12;
            }
        }
        return Unit.f33282a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((SecurityKeyManagerModule$authenticatePasskey$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
