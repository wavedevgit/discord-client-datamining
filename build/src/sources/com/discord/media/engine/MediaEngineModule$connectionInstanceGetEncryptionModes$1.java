package com.discord.media.engine;

import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.facebook.react.bridge.Callback;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$connectionInstanceGetEncryptionModes$1", f = "MediaEngineModule.kt", l = {550}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngineModule$connectionInstanceGetEncryptionModes$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Callback $callback;
    final /* synthetic */ double $connectionId;
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$connectionInstanceGetEncryptionModes$1(MediaEngineModule mediaEngineModule, double d10, Callback callback, Continuation<? super MediaEngineModule$connectionInstanceGetEncryptionModes$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
        this.$connectionId = d10;
        this.$callback = callback;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(Callback callback, String[] strArr) {
        callback.invoke(NativeArrayExtensionsKt.toNativeArray(strArr));
        return Unit.f33298a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngineModule$connectionInstanceGetEncryptionModes$1(this.this$0, this.$connectionId, this.$callback, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object awaitMediaEngine;
        Object f10 = or.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            MediaEngineModule mediaEngineModule = this.this$0;
            this.label = 1;
            awaitMediaEngine = mediaEngineModule.awaitMediaEngine(this);
            if (awaitMediaEngine == f10) {
                return f10;
            }
        }
        final Callback callback = this.$callback;
        this.this$0.getMediaEngine().connectionInstanceGetEncryptionModes$media_engine_release((int) this.$connectionId, new Function1() { // from class: com.discord.media.engine.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit invokeSuspend$lambda$0;
                invokeSuspend$lambda$0 = MediaEngineModule$connectionInstanceGetEncryptionModes$1.invokeSuspend$lambda$0(Callback.this, (String[]) obj2);
                return invokeSuspend$lambda$0;
            }
        });
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$connectionInstanceGetEncryptionModes$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
