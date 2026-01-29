package com.discord.security_key;

import android.app.Activity;
import androidx.credentials.CredentialManager;
import com.discord.logging.Log;
import g2.g;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import org.json.JSONObject;
import org.json.JSONTokener;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.security_key.SecurityKeyManagerModule$registerPasskey$1", f = "SecurityKeyManagerModule.kt", l = {132}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class SecurityKeyManagerModule$registerPasskey$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $requestJson;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ SecurityKeyManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SecurityKeyManagerModule$registerPasskey$1(String str, SecurityKeyManagerModule securityKeyManagerModule, Continuation<? super SecurityKeyManagerModule$registerPasskey$1> continuation) {
        super(2, continuation);
        this.$requestJson = str;
        this.this$0 = securityKeyManagerModule;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        SecurityKeyManagerModule$registerPasskey$1 securityKeyManagerModule$registerPasskey$1 = new SecurityKeyManagerModule$registerPasskey$1(this.$requestJson, this.this$0, continuation);
        securityKeyManagerModule$registerPasskey$1.L$0 = obj;
        return securityKeyManagerModule$registerPasskey$1;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [int, com.discord.security_key.SecurityKeyManagerModule] */
    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object b10;
        SecurityKeyManagerModule securityKeyManagerModule;
        CredentialManager credentialManager;
        Object f10 = or.b.f();
        ?? r12 = this.label;
        try {
            try {
                if (r12 != 0) {
                    if (r12 == 1) {
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
                    g2.f fVar = new g2.f(jSONObject, null, false, null, false, 30, null);
                    credentialManager = securityKeyManagerModule.credentialManager;
                    Activity currentActivity = securityKeyManagerModule.getReactContext().getCurrentActivity();
                    Intrinsics.checkNotNull(currentActivity);
                    this.L$0 = securityKeyManagerModule;
                    this.label = 1;
                    obj = credentialManager.c(currentActivity, fVar, this);
                    if (obj == f10) {
                        return f10;
                    }
                }
                g2.c cVar = (g2.c) obj;
                if (cVar instanceof g) {
                    securityKeyManagerModule.resolve(((g) cVar).b());
                } else {
                    Log log = Log.INSTANCE;
                    String a10 = cVar.a();
                    Log.w$default(log, SecurityKeyManagerModule.TAG, "Received unrecognized response type " + a10 + ". This shouldn't happen", (Throwable) null, 4, (Object) null);
                    securityKeyManagerModule.reject("unexpected response");
                }
            } catch (h2.e e10) {
                r12.reject(e10);
            }
            b10 = Result.b(Unit.f33282a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33279e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        SecurityKeyManagerModule securityKeyManagerModule2 = this.this$0;
        Throwable e11 = Result.e(b10);
        if (e11 != null) {
            if (!(e11 instanceof CancellationException)) {
                securityKeyManagerModule2.reject(e11);
            } else {
                throw e11;
            }
        }
        return Unit.f33282a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((SecurityKeyManagerModule$registerPasskey$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
