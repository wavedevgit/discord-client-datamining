package com.discord.thumbhash;

import android.graphics.Bitmap;
import android.util.Base64;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import pr.b;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\n \u0002*\u0004\u0018\u00010\u00010\u0001*\u00020\u0003H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "kotlin.jvm.PlatformType", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.thumbhash.ThumbhashPlaceholderControllerListener$onSubmit$1$bitmap$1", f = "ThumbhashPlaceholderControllerListener.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ThumbhashPlaceholderControllerListener$onSubmit$1$bitmap$1 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
    int label;
    final /* synthetic */ ThumbhashPlaceholderControllerListener this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ThumbhashPlaceholderControllerListener$onSubmit$1$bitmap$1(ThumbhashPlaceholderControllerListener thumbhashPlaceholderControllerListener, Continuation<? super ThumbhashPlaceholderControllerListener$onSubmit$1$bitmap$1> continuation) {
        super(2, continuation);
        this.this$0 = thumbhashPlaceholderControllerListener;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ThumbhashPlaceholderControllerListener$onSubmit$1$bitmap$1(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        String str;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            str = this.this$0.placeholder;
            return ThumbhashUtils.thumbHashToRGBA(Base64.decode(str, 0));
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
        return ((ThumbhashPlaceholderControllerListener$onSubmit$1$bitmap$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
