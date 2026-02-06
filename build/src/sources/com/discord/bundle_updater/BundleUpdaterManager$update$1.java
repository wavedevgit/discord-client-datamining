package com.discord.bundle_updater;

import com.facebook.react.bridge.ReactApplicationContext;
import com.jakewharton.processphoenix.ProcessPhoenix;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import os.i0;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.bundle_updater.BundleUpdaterManager$update$1", f = "BundleUpdaterManager.kt", l = {100}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BundleUpdaterManager$update$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ BundleUpdaterManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BundleUpdaterManager$update$1(BundleUpdaterManager bundleUpdaterManager, Continuation<? super BundleUpdaterManager$update$1> continuation) {
        super(2, continuation);
        this.this$0 = bundleUpdaterManager;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new BundleUpdaterManager$update$1(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ReactApplicationContext reactApplicationContext;
        Object f10 = wr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            this.label = 1;
            if (i0.a(1000L, this) == f10) {
                return f10;
            }
        }
        reactApplicationContext = this.this$0.reactContext;
        ProcessPhoenix.b(reactApplicationContext);
        return Unit.f32008a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((BundleUpdaterManager$update$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
