package com.discord.image.fresco.tiled;

import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import rr.b;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\u0010\u0004\u001a\u000f\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u0001¢\u0006\u0002\b\u0003*\u00020\u0000H\n¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"Lkotlinx/coroutines/CoroutineScope;", "Lcom/facebook/common/references/CloseableReference;", "Lsa/e;", "Lkotlin/jvm/internal/EnhancedNullability;", "<anonymous>", "(Lkotlinx/coroutines/CoroutineScope;)Lcom/facebook/common/references/CloseableReference;"}, k = 3, mv = {2, 1, 0})
@e(c = "com.discord.image.fresco.tiled.TiledDraweeController$load$1$closableImageReference$1", f = "TiledDraweeController.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class TiledDraweeController$load$1$closableImageReference$1 extends k implements Function2<CoroutineScope, Continuation<? super CloseableReference>, Object> {
    final /* synthetic */ DataSource $dataSource;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TiledDraweeController$load$1$closableImageReference$1(DataSource dataSource, Continuation<? super TiledDraweeController$load$1$closableImageReference$1> continuation) {
        super(2, continuation);
        this.$dataSource = dataSource;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new TiledDraweeController$load$1$closableImageReference$1(this.$dataSource, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        b.f();
        if (this.label == 0) {
            c.b(obj);
            return y8.c.c(this.$dataSource);
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super CloseableReference> continuation) {
        return ((TiledDraweeController$load$1$closableImageReference$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
