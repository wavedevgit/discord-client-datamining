package com.discord.samsung;

import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import okhttp3.OkHttpClient;
import os.g;
import os.m0;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.samsung.SamsungModule$finishSamsungAuthorization$1", f = "SamsungModule.kt", l = {176}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class SamsungModule$finishSamsungAuthorization$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $authCode;
    final /* synthetic */ String $location;
    final /* synthetic */ String $state;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ SamsungModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SamsungModule$finishSamsungAuthorization$1(String str, SamsungModule samsungModule, String str2, String str3, Continuation<? super SamsungModule$finishSamsungAuthorization$1> continuation) {
        super(2, continuation);
        this.$location = str;
        this.this$0 = samsungModule;
        this.$state = str2;
        this.$authCode = str3;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        SamsungModule$finishSamsungAuthorization$1 samsungModule$finishSamsungAuthorization$1 = new SamsungModule$finishSamsungAuthorization$1(this.$location, this.this$0, this.$state, this.$authCode, continuation);
        samsungModule$finishSamsungAuthorization$1.L$0 = obj;
        return samsungModule$finishSamsungAuthorization$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object b10;
        Object f10 = wr.b.f();
        int i10 = this.label;
        try {
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
                String str = this.$location;
                SamsungModule samsungModule = this.this$0;
                String str2 = this.$state;
                String str3 = this.$authCode;
                Result.a aVar = Result.f32053e;
                OkHttpClient c10 = new OkHttpClient.Builder().k(false).c();
                CoroutineDispatcher b11 = m0.b();
                SamsungModule$finishSamsungAuthorization$1$1$1 samsungModule$finishSamsungAuthorization$1$1$1 = new SamsungModule$finishSamsungAuthorization$1$1$1(str, samsungModule, c10, str2, str3, null);
                this.label = 1;
                if (g.g(b11, samsungModule$finishSamsungAuthorization$1$1$1, this) == f10) {
                    return f10;
                }
            }
            b10 = Result.b(Unit.f32056a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        SamsungModule samsungModule2 = this.this$0;
        Throwable e10 = Result.e(b10);
        if (e10 != null) {
            if (!(e10 instanceof CancellationException)) {
                samsungModule2.rejectConnection(e10);
            } else {
                throw e10;
            }
        }
        return Unit.f32056a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((SamsungModule$finishSamsungAuthorization$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
