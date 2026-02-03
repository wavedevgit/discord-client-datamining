package com.discord.file_manager;

import com.facebook.react.bridge.Promise;
import java.io.File;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import rr.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_manager.FileModule$fileExists$1", f = "FileModule.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class FileModule$fileExists$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $path;
    final /* synthetic */ Promise $promise;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileModule$fileExists$1(Promise promise, String str, Continuation<? super FileModule$fileExists$1> continuation) {
        super(2, continuation);
        this.$promise = promise;
        this.$path = str;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new FileModule$fileExists$1(this.$promise, this.$path, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        b.f();
        if (this.label == 0) {
            c.b(obj);
            try {
                this.$promise.resolve(kotlin.coroutines.jvm.internal.b.a(new File(this.$path).exists()));
            } catch (Throwable th2) {
                this.$promise.reject(th2);
            }
            return Unit.f32464a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileModule$fileExists$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
