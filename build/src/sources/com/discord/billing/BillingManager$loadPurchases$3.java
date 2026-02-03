package com.discord.billing;

import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingResult;
import com.discord.billing.BillingManager;
import com.discord.billing.BillingManagerException;
import com.discord.crash_reporting.CrashReporting;
import java.util.List;
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
@kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$loadPurchases$3", f = "BillingManager.kt", l = {601}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager$loadPurchases$3 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Function1<Exception, Unit> $onError;
    final /* synthetic */ Function0<Unit> $onSuccess;
    int label;
    final /* synthetic */ BillingManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public BillingManager$loadPurchases$3(BillingManager billingManager, Function1<? super Exception, Unit> function1, Function0<Unit> function0, Continuation<? super BillingManager$loadPurchases$3> continuation) {
        super(2, continuation);
        this.this$0 = billingManager;
        this.$onError = function1;
        this.$onSuccess = function0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void invokeSuspend$lambda$0(BillingManager billingManager, BillingResult billingResult, List list) {
        Intrinsics.checkNotNull(billingResult);
        billingManager.handlePurchases(billingResult, list, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void invokeSuspend$lambda$1(BillingManager billingManager, BillingResult billingResult, List list) {
        Intrinsics.checkNotNull(billingResult);
        billingManager.handlePurchases(billingResult, list, false);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new BillingManager$loadPurchases$3(this.this$0, this.$onError, this.$onSuccess, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        BillingManager$loadPurchases$3 billingManager$loadPurchases$3;
        Exception exc;
        BillingClient billingClient;
        BillingClient billingClient2;
        Object f10 = rr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                try {
                    kotlin.c.b(obj);
                    billingManager$loadPurchases$3 = this;
                } catch (CancellationException e10) {
                    throw e10;
                } catch (Exception e11) {
                    exc = e11;
                    billingManager$loadPurchases$3 = this;
                    CrashReporting.captureException$default(CrashReporting.INSTANCE, exc, false, 2, null);
                    billingManager$loadPurchases$3.$onError.invoke(exc);
                    return Unit.f32464a;
                }
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            try {
                BillingManager billingManager = this.this$0;
                this.label = 1;
                billingManager$loadPurchases$3 = this;
                try {
                    obj = BillingManager.suspendUntilReady$default(billingManager, 0L, billingManager$loadPurchases$3, 1, null);
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
                    billingManager$loadPurchases$3.$onError.invoke(exc);
                    return Unit.f32464a;
                }
            } catch (CancellationException e14) {
                e = e14;
            } catch (Exception e15) {
                e = e15;
                billingManager$loadPurchases$3 = this;
            }
        }
        BillingManager.ClientReadyState clientReadyState = (BillingManager.ClientReadyState) obj;
        billingManager$loadPurchases$3.this$0.trackBillingMetric("operation", CollectionsKt.o("method:load_purchases", "client_ready:" + clientReadyState.getMetricValue()));
        if (clientReadyState != BillingManager.ClientReadyState.TIMEOUT) {
            billingClient = billingManager$loadPurchases$3.this$0.billingClient;
            if (billingClient == null) {
                Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                billingClient = null;
            }
            a6.m a10 = a6.m.a().b("subs").a();
            final BillingManager billingManager2 = billingManager$loadPurchases$3.this$0;
            billingClient.k(a10, new a6.j() { // from class: com.discord.billing.f
                @Override // a6.j
                public final void a(BillingResult billingResult, List list) {
                    BillingManager$loadPurchases$3.invokeSuspend$lambda$0(BillingManager.this, billingResult, list);
                }
            });
            billingClient2 = billingManager$loadPurchases$3.this$0.billingClient;
            if (billingClient2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                billingClient2 = null;
            }
            a6.m a11 = a6.m.a().b("inapp").a();
            final BillingManager billingManager3 = billingManager$loadPurchases$3.this$0;
            billingClient2.k(a11, new a6.j() { // from class: com.discord.billing.g
                @Override // a6.j
                public final void a(BillingResult billingResult, List list) {
                    BillingManager$loadPurchases$3.invokeSuspend$lambda$1(BillingManager.this, billingResult, list);
                }
            });
            billingManager$loadPurchases$3.$onSuccess.invoke();
            return Unit.f32464a;
        }
        billingManager$loadPurchases$3.$onError.invoke(new BillingManagerException.BillingClientNotReadyException());
        return Unit.f32464a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((BillingManager$loadPurchases$3) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
