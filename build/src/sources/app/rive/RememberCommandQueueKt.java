package app.rive;

import androidx.lifecycle.LifecycleOwner;
import app.rive.core.CommandQueue;
import app.rive.core.CommandQueueKt;
import i3.b;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w0.a;
import w0.c;
import w0.e0;
import w0.g;
import w0.h;
import w0.i;
import w0.q;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0003\n\u0002\b\u0004\u001a\u000f\u0010\u0001\u001a\u00020\u0000H\u0007¢\u0006\u0004\b\u0001\u0010\u0002\u001a#\u0010\u0006\u001a\u0004\u0018\u00010\u00002\u0010\b\u0002\u0010\u0005\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00040\u0003H\u0007¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lapp/rive/core/CommandQueue;", "rememberCommandQueue", "(Lw0/a;I)Lapp/rive/core/CommandQueue;", "Lw0/q;", "", "errorState", "rememberCommandQueueOrNull", "(Lw0/q;Lw0/a;II)Lapp/rive/core/CommandQueue;", "kotlin_release"}, k = 2, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nrememberCommandQueue.kt\nKotlin\n*S Kotlin\n*F\n+ 1 rememberCommandQueue.kt\napp/rive/RememberCommandQueueKt\n+ 2 Composer.kt\nandroidx/compose/runtime/ComposerKt\n+ 3 CompositionLocal.kt\nandroidx/compose/runtime/CompositionLocal\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 5 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,100:1\n1282#2,6:101\n1282#2,3:108\n1285#2,3:114\n75#3:107\n1#4:111\n69#5,2:112\n*S KotlinDebug\n*F\n+ 1 rememberCommandQueue.kt\napp/rive/RememberCommandQueueKt\n*L\n42#1:101,6\n67#1:108,3\n67#1:114,3\n66#1:107\n73#1:112,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RememberCommandQueueKt {
    @ExperimentalRiveComposeAPI
    @NotNull
    public static final CommandQueue rememberCommandQueue(a aVar, int i10) {
        aVar.i(-1751080185);
        if (c.c()) {
            c.e(-1751080185, i10, -1, "app.rive.rememberCommandQueue (rememberCommandQueue.kt:40)");
        }
        aVar.i(1494017499);
        Object d10 = aVar.d();
        if (d10 == a.f51787a.a()) {
            d10 = e0.b(null, null, 2, null);
            aVar.c(d10);
        }
        q qVar = (q) d10;
        aVar.g();
        CommandQueue rememberCommandQueueOrNull = rememberCommandQueueOrNull(qVar, aVar, 6, 0);
        if (rememberCommandQueueOrNull == null) {
            Throwable th2 = (Throwable) qVar.getValue();
            if (th2 == null) {
                th2 = new RuntimeException("Failed to create CommandQueue");
            }
            throw new RuntimeException(th2);
        }
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return rememberCommandQueueOrNull;
    }

    @ExperimentalRiveComposeAPI
    public static final CommandQueue rememberCommandQueueOrNull(q qVar, a aVar, int i10, int i11) {
        Object b10;
        aVar.i(2056231014);
        if ((i11 & 1) != 0) {
            qVar = e0.b(null, null, 2, null);
        }
        if (c.c()) {
            c.e(2056231014, i10, -1, "app.rive.rememberCommandQueueOrNull (rememberCommandQueue.kt:64)");
        }
        LifecycleOwner lifecycleOwner = (LifecycleOwner) aVar.f(b.c());
        aVar.i(-592937361);
        Object d10 = aVar.d();
        if (d10 == a.f51787a.a()) {
            try {
                Result.a aVar2 = kotlin.Result.f32461e;
                b10 = kotlin.Result.b(new CommandQueue());
            } catch (Throwable th2) {
                Result.a aVar3 = kotlin.Result.f32461e;
                b10 = kotlin.Result.b(kotlin.c.a(th2));
            }
            final Throwable e10 = kotlin.Result.e(b10);
            if (e10 != null) {
                if (qVar.getValue() == null) {
                    qVar.setValue(e10);
                }
                RiveLog.INSTANCE.getLogger().e(CommandQueueKt.COMMAND_QUEUE_TAG, null, new Function0<String>() { // from class: app.rive.RememberCommandQueueKt$rememberCommandQueueOrNull$commandQueue$1$2$1
                    /* JADX INFO: Access modifiers changed from: package-private */
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        String message = e10.getMessage();
                        return "Failed to create command queue: " + message;
                    }
                });
            }
            if (kotlin.Result.g(b10)) {
                b10 = null;
            }
            d10 = (CommandQueue) b10;
            aVar.c(d10);
        }
        final CommandQueue commandQueue = (CommandQueue) d10;
        aVar.g();
        i.c(lifecycleOwner, commandQueue, new RememberCommandQueueKt$rememberCommandQueueOrNull$1(commandQueue, lifecycleOwner, null), aVar, 584);
        i.a(commandQueue, new Function1<h, g>() { // from class: app.rive.RememberCommandQueueKt$rememberCommandQueueOrNull$2
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            @NotNull
            public final g invoke(@NotNull h DisposableEffect) {
                Intrinsics.checkNotNullParameter(DisposableEffect, "$this$DisposableEffect");
                final CommandQueue commandQueue2 = CommandQueue.this;
                if (commandQueue2 == null) {
                    return new g() { // from class: app.rive.RememberCommandQueueKt$rememberCommandQueueOrNull$2$invoke$$inlined$onDispose$1
                        public void dispose() {
                        }
                    };
                }
                return new g() { // from class: app.rive.RememberCommandQueueKt$rememberCommandQueueOrNull$2$invoke$$inlined$onDispose$2
                    public void dispose() {
                        CommandQueue.this.release(CommandQueueKt.COMMAND_QUEUE_TAG, "Compose dispose");
                    }
                };
            }
        }, aVar, 8);
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return commandQueue;
    }
}
