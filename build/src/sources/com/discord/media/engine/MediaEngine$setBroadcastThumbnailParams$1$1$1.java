package com.discord.media.engine;

import android.graphics.Bitmap;
import com.discord.media.engine.MediaEngine;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngine$setBroadcastThumbnailParams$1$1$1", f = "MediaEngine.kt", l = {506}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaEngine$setBroadcastThumbnailParams$1$1$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Bitmap $bitmap;
    final /* synthetic */ Function1<String, Unit> $callback;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public MediaEngine$setBroadcastThumbnailParams$1$1$1(Bitmap bitmap, Function1<? super String, Unit> function1, Continuation<? super MediaEngine$setBroadcastThumbnailParams$1$1$1> continuation) {
        super(2, continuation);
        this.$bitmap = bitmap;
        this.$callback = function1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngine$setBroadcastThumbnailParams$1$1$1(this.$bitmap, this.$callback, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
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
            MediaEngine.Companion companion = MediaEngine.Companion;
            Bitmap bitmap = this.$bitmap;
            this.label = 1;
            obj = companion.encodeThumbnail(bitmap, this);
            if (obj == f10) {
                return f10;
            }
        }
        this.$callback.invoke((String) obj);
        return Unit.f32008a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngine$setBroadcastThumbnailParams$1$1$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
