package com.discord.billing;

import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingResult;
import com.discord.billing.BillingManager;
import com.discord.billing.BillingManagerException;
import com.discord.crash_reporting.CrashReporting;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$consumePurchase$1", f = "BillingManager.kt", l = {559}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager$consumePurchase$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Function1<BillingManagerException, Unit> $onError;
    final /* synthetic */ Function0<Unit> $onSuccess;
    final /* synthetic */ String $purchaseToken;
    int label;
    final /* synthetic */ BillingManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public BillingManager$consumePurchase$1(BillingManager billingManager, Function1<? super BillingManagerException, Unit> function1, String str, Function0<Unit> function0, Continuation<? super BillingManager$consumePurchase$1> continuation) {
        super(2, continuation);
        this.this$0 = billingManager;
        this.$onError = function1;
        this.$purchaseToken = str;
        this.$onSuccess = function0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void invokeSuspend$lambda$0(BillingManager billingManager, Function1 function1, Function0 function0, BillingResult billingResult, String str) {
        boolean isNotOk;
        Intrinsics.checkNotNull(billingResult);
        isNotOk = billingManager.isNotOk(billingResult);
        if (isNotOk) {
            function1.invoke(BillingManagerException.Companion.fromBillingResult(billingResult.b()));
        } else {
            function0.invoke();
        }
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new BillingManager$consumePurchase$1(this.this$0, this.$onError, this.$purchaseToken, this.$onSuccess, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        BillingManager$consumePurchase$1 billingManager$consumePurchase$1;
        Exception exc;
        BillingClient billingClient;
        Object f10 = wr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                try {
                    kotlin.c.b(obj);
                    billingManager$consumePurchase$1 = this;
                } catch (CancellationException e10) {
                    throw e10;
                } catch (Exception e11) {
                    exc = e11;
                    billingManager$consumePurchase$1 = this;
                    CrashReporting.captureException$default(CrashReporting.INSTANCE, exc, false, 2, null);
                    billingManager$consumePurchase$1.$onError.invoke(BillingManagerException.Companion.wrap(exc, "consumePurchase"));
                    return Unit.f32056a;
                }
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            try {
                BillingManager billingManager = this.this$0;
                this.label = 1;
                billingManager$consumePurchase$1 = this;
                try {
                    obj = BillingManager.suspendUntilReady$default(billingManager, 0L, billingManager$consumePurchase$1, 1, null);
                    if (obj == f10) {
                        return f10;
                    }
                } catch (CancellationException e12) {
                    e = e12;
                    throw e;
                } catch (Exception e13) {
                    e = e13;
                    exc = e;
                    CrashReporting.captureException$default(CrashReporting.INSTANCE, exc, false, 2, null);
                    billingManager$consumePurchase$1.$onError.invoke(BillingManagerException.Companion.wrap(exc, "consumePurchase"));
                    return Unit.f32056a;
                }
            } catch (CancellationException e14) {
                e = e14;
            } catch (Exception e15) {
                e = e15;
                billingManager$consumePurchase$1 = this;
            }
        }
        BillingManager.ClientReadyState clientReadyState = (BillingManager.ClientReadyState) obj;
        billingManager$consumePurchase$1.this$0.trackBillingMetric("operation", CollectionsKt.o("method:consume_purchase", "client_ready:" + clientReadyState.getMetricValue()));
        if (clientReadyState == BillingManager.ClientReadyState.TIMEOUT) {
            billingManager$consumePurchase$1.$onError.invoke(new BillingManagerException.BillingClientNotReadyException());
            return Unit.f32056a;
        }
        a6.e a10 = a6.e.b().b(billingManager$consumePurchase$1.$purchaseToken).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        billingClient = billingManager$consumePurchase$1.this$0.billingClient;
        if (billingClient == null) {
            Intrinsics.throwUninitializedPropertyAccessException("billingClient");
            billingClient = null;
        }
        final BillingManager billingManager2 = billingManager$consumePurchase$1.this$0;
        final Function1<BillingManagerException, Unit> function1 = billingManager$consumePurchase$1.$onError;
        final Function0<Unit> function0 = billingManager$consumePurchase$1.$onSuccess;
        billingClient.b(a10, new a6.f() { // from class: com.discord.billing.d
            @Override // a6.f
            public final void a(BillingResult billingResult, String str) {
                BillingManager$consumePurchase$1.invokeSuspend$lambda$0(BillingManager.this, function1, function0, billingResult, str);
            }
        });
        return Unit.f32056a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((BillingManager$consumePurchase$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
