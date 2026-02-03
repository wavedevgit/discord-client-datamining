package com.discord.billing;

import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingResult;
import com.discord.billing.BillingManager;
import com.discord.billing.BillingManager$getProducts$1;
import com.discord.billing.types.ProductType;
import com.discord.billing.types.QueryProductDetailsParams;
import com.discord.misc.utilities.backoff.ExponentialBackoff;
import com.facebook.react.bridge.Promise;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$getProducts$1", f = "BillingManager.kt", l = {370, 383}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager$getProducts$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ ExponentialBackoff $getProductsBackoff;
    final /* synthetic */ Function1<BillingManagerException, Unit> $onError;
    final /* synthetic */ List<String> $productIds;
    final /* synthetic */ ProductType $productType;
    final /* synthetic */ Promise $reactPromise;
    int label;
    final /* synthetic */ BillingManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\u0006\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001H\n"}, d2 = {"<anonymous>", "Lcom/discord/billing/BillingManager$ProductDetailsResponse;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$getProducts$1$1", f = "BillingManager.kt", l = {407}, m = "invokeSuspend")
    /* renamed from: com.discord.billing.BillingManager$getProducts$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass1 extends kotlin.coroutines.jvm.internal.k implements Function1<Continuation<? super BillingManager.ProductDetailsResponse>, Object> {
        final /* synthetic */ List<String> $productIds;
        final /* synthetic */ ProductType $productType;
        int label;
        final /* synthetic */ BillingManager this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(BillingManager billingManager, ProductType productType, List<String> list, Continuation<? super AnonymousClass1> continuation) {
            super(1, continuation);
            this.this$0 = billingManager;
            this.$productType = productType;
            this.$productIds = list;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void invokeSuspend$lambda$0(CompletableDeferred completableDeferred, BillingResult billingResult, List list) {
            Intrinsics.checkNotNull(billingResult);
            completableDeferred.J0(new BillingManager.ProductDetailsResponse(billingResult, list));
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Continuation<?> continuation) {
            return new AnonymousClass1(this.this$0, this.$productType, this.$productIds, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            BillingClient billingClient;
            Object f10 = rr.b.f();
            int i10 = this.label;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            BillingClient billingClient2 = null;
            final CompletableDeferred b10 = js.q.b(null, 1, null);
            a6.h hVar = new a6.h() { // from class: com.discord.billing.e
                @Override // a6.h
                public final void a(BillingResult billingResult, List list) {
                    BillingManager$getProducts$1.AnonymousClass1.invokeSuspend$lambda$0(CompletableDeferred.this, billingResult, list);
                }
            };
            billingClient = this.this$0.billingClient;
            if (billingClient == null) {
                Intrinsics.throwUninitializedPropertyAccessException("billingClient");
            } else {
                billingClient2 = billingClient;
            }
            billingClient2.i(QueryProductDetailsParams.INSTANCE.create(ProductType.valueOf(this.$productType.name()), this.$productIds), hVar);
            this.label = 1;
            Object V = b10.V(this);
            if (V == f10) {
                return f10;
            }
            return V;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation<? super BillingManager.ProductDetailsResponse> continuation) {
            return ((AnonymousClass1) create(continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0003H\n"}, d2 = {"<anonymous>", "", "productDetailsResponse", "Lcom/discord/billing/BillingManager$ProductDetailsResponse;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$getProducts$1$2", f = "BillingManager.kt", l = {}, m = "invokeSuspend")
    /* renamed from: com.discord.billing.BillingManager$getProducts$1$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass2 extends kotlin.coroutines.jvm.internal.k implements Function2<BillingManager.ProductDetailsResponse, Continuation<? super Boolean>, Object> {
        /* synthetic */ Object L$0;
        int label;
        final /* synthetic */ BillingManager this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass2(BillingManager billingManager, Continuation<? super AnonymousClass2> continuation) {
            super(2, continuation);
            this.this$0 = billingManager;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass2 anonymousClass2 = new AnonymousClass2(this.this$0, continuation);
            anonymousClass2.L$0 = obj;
            return anonymousClass2;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(BillingManager.ProductDetailsResponse productDetailsResponse, Continuation<? super Boolean> continuation) {
            return ((AnonymousClass2) create(productDetailsResponse, continuation)).invokeSuspend(Unit.f32464a);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            boolean isRetryableError;
            rr.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                isRetryableError = this.this$0.isRetryableError(((BillingManager.ProductDetailsResponse) this.L$0).getBillingResult());
                return kotlin.coroutines.jvm.internal.b.a(isRetryableError);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public BillingManager$getProducts$1(BillingManager billingManager, Function1<? super BillingManagerException, Unit> function1, ExponentialBackoff exponentialBackoff, Promise promise, ProductType productType, List<String> list, Continuation<? super BillingManager$getProducts$1> continuation) {
        super(2, continuation);
        this.this$0 = billingManager;
        this.$onError = function1;
        this.$getProductsBackoff = exponentialBackoff;
        this.$reactPromise = promise;
        this.$productType = productType;
        this.$productIds = list;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new BillingManager$getProducts$1(this.this$0, this.$onError, this.$getProductsBackoff, this.$reactPromise, this.$productType, this.$productIds, continuation);
    }

    /* JADX WARN: Code restructure failed: missing block: B:27:0x0095, code lost:
        if (r0 == r6) goto L36;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r19) {
        /*
            Method dump skipped, instructions count: 331
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.billing.BillingManager$getProducts$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((BillingManager$getProducts$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
