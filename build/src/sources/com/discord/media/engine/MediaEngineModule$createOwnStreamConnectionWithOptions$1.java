package com.discord.media.engine;

import android.content.Intent;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$createOwnStreamConnectionWithOptions$1", f = "MediaEngineModule.kt", l = {487}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngineModule$createOwnStreamConnectionWithOptions$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Callback $callback;
    final /* synthetic */ double $connectionId;
    final /* synthetic */ ReadableMap $connectionOptions;
    final /* synthetic */ String $userId;
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$createOwnStreamConnectionWithOptions$1(MediaEngineModule mediaEngineModule, double d10, String str, ReadableMap readableMap, Callback callback, Continuation<? super MediaEngineModule$createOwnStreamConnectionWithOptions$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
        this.$connectionId = d10;
        this.$userId = str;
        this.$connectionOptions = readableMap;
        this.$callback = callback;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$1(Callback callback, MediaEngineModule mediaEngineModule, double d10, String str, Map map) {
        Intent intent;
        callback.invoke(str, NativeMapExtensionsKt.toNativeMap(map));
        intent = mediaEngineModule.streamPermissions;
        if (intent != null) {
            mediaEngineModule.getMediaEngine().connectionInstanceStartBroadcast$media_engine_release((int) d10, intent);
            mediaEngineModule.streamPermissions = null;
        }
        return Unit.f33074a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngineModule$createOwnStreamConnectionWithOptions$1(this.this$0, this.$connectionId, this.$userId, this.$connectionOptions, this.$callback, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object awaitMediaEngine;
        Object f10 = pr.b.f();
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
        final MediaEngineModule mediaEngineModule2 = this.this$0;
        final double d10 = this.$connectionId;
        String str = this.$userId;
        ReadableMap readableMap = this.$connectionOptions;
        final Callback callback = this.$callback;
        mediaEngineModule2.createConnection((int) d10, str, readableMap, new Function2() { // from class: com.discord.media.engine.t0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit invokeSuspend$lambda$1;
                invokeSuspend$lambda$1 = MediaEngineModule$createOwnStreamConnectionWithOptions$1.invokeSuspend$lambda$1(Callback.this, mediaEngineModule2, d10, (String) obj2, (Map) obj3);
                return invokeSuspend$lambda$1;
            }
        });
        this.this$0.streamConnectionId = kotlin.coroutines.jvm.internal.b.e((int) this.$connectionId);
        this.this$0.addConnectionCallbacks((int) this.$connectionId);
        return Unit.f33074a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$createOwnStreamConnectionWithOptions$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
