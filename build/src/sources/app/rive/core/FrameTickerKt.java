package app.rive.core;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import g1.a;
import hs.g;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import pr.b;
import w0.o;
@Metadata(d1 = {"\u0000\u0016\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\u0010\t\n\u0002\b\u0002\u001a(\u0010\u0006\u001a\u0002H\u0007\"\u0004\b\u0000\u0010\u00072\u0012\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u0002H\u00070\tH\u0086@¢\u0006\u0002\u0010\u000b\"\u0011\u0010\u0000\u001a\u00020\u0001¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u0003\"\u0011\u0010\u0004\u001a\u00020\u0001¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0003¨\u0006\f"}, d2 = {"ChoreographerFrameTicker", "Lapp/rive/core/FrameTicker;", "getChoreographerFrameTicker", "()Lapp/rive/core/FrameTicker;", "ComposeFrameTicker", "getComposeFrameTicker", "withFrameNanosChoreo", "R", "onFrame", "Lkotlin/Function1;", "", "(Lkotlin/jvm/functions/Function1;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlin_release"}, k = 2, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFrameTicker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FrameTicker.kt\napp/rive/core/FrameTickerKt\n+ 2 CancellableContinuation.kt\nkotlinx/coroutines/CancellableContinuationKt\n*L\n1#1,49:1\n318#2,11:50\n*S KotlinDebug\n*F\n+ 1 FrameTicker.kt\napp/rive/core/FrameTickerKt\n*L\n37#1:50,11\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FrameTickerKt {
    @NotNull
    private static final FrameTicker ChoreographerFrameTicker = new FrameTicker() { // from class: app.rive.core.FrameTickerKt$ChoreographerFrameTicker$1
        @Override // app.rive.core.FrameTicker
        public final Object withFrame(@NotNull final Function1<? super Long, Unit> function1, @NotNull Continuation<? super Unit> continuation) {
            Object withFrameNanosChoreo = FrameTickerKt.withFrameNanosChoreo(new Function1<Long, Unit>() { // from class: app.rive.core.FrameTickerKt$ChoreographerFrameTicker$1.1
                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                /* JADX WARN: Multi-variable type inference failed */
                {
                    super(1);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    invoke(((Number) obj).longValue());
                    return Unit.f33074a;
                }

                public final void invoke(long j10) {
                    function1.invoke(Long.valueOf(j10));
                }
            }, continuation);
            if (withFrameNanosChoreo == b.f()) {
                return withFrameNanosChoreo;
            }
            return Unit.f33074a;
        }
    };
    @NotNull
    private static final FrameTicker ComposeFrameTicker = new FrameTicker() { // from class: app.rive.core.FrameTickerKt$ComposeFrameTicker$1

        @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
        @e(c = "app.rive.core.FrameTickerKt$ComposeFrameTicker$1$1", f = "FrameTicker.kt", l = {ChatViewRecyclerTypes.SURVEY_INDICATION}, m = "invokeSuspend")
        /* renamed from: app.rive.core.FrameTickerKt$ComposeFrameTicker$1$1  reason: invalid class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
            final /* synthetic */ Function1<Long, Unit> $onFrame;
            int label;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            /* JADX WARN: Multi-variable type inference failed */
            AnonymousClass1(Function1<? super Long, Unit> function1, Continuation<? super AnonymousClass1> continuation) {
                super(2, continuation);
                this.$onFrame = function1;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            @NotNull
            public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
                return new AnonymousClass1(this.$onFrame, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(@NotNull Object obj) {
                Object f10 = b.f();
                int i10 = this.label;
                if (i10 != 0) {
                    if (i10 == 1) {
                        c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    c.b(obj);
                    final Function1<Long, Unit> function1 = this.$onFrame;
                    Function1<Long, Unit> function12 = new Function1<Long, Unit>() { // from class: app.rive.core.FrameTickerKt.ComposeFrameTicker.1.1.1
                        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                        /* JADX WARN: Multi-variable type inference failed */
                        {
                            super(1);
                        }

                        @Override // kotlin.jvm.functions.Function1
                        public /* bridge */ /* synthetic */ Object invoke(Object obj2) {
                            invoke(((Number) obj2).longValue());
                            return Unit.f33074a;
                        }

                        public final void invoke(long j10) {
                            function1.invoke(Long.valueOf(j10));
                        }
                    };
                    this.label = 1;
                    if (o.b(function12, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
                return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        @Override // app.rive.core.FrameTicker
        public final Object withFrame(@NotNull Function1<? super Long, Unit> function1, @NotNull Continuation<? super Unit> continuation) {
            Object g10 = g.g(a.f25633x.a(), new AnonymousClass1(function1, null), continuation);
            if (g10 == b.f()) {
                return g10;
            }
            return Unit.f33074a;
        }
    };

    @NotNull
    public static final FrameTicker getChoreographerFrameTicker() {
        return ChoreographerFrameTicker;
    }

    @NotNull
    public static final FrameTicker getComposeFrameTicker() {
        return ComposeFrameTicker;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final <R> java.lang.Object withFrameNanosChoreo(@org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function1<? super java.lang.Long, ? extends R> r5, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation<? super R> r6) {
        /*
            boolean r0 = r6 instanceof app.rive.core.FrameTickerKt$withFrameNanosChoreo$1
            if (r0 == 0) goto L13
            r0 = r6
            app.rive.core.FrameTickerKt$withFrameNanosChoreo$1 r0 = (app.rive.core.FrameTickerKt$withFrameNanosChoreo$1) r0
            int r1 = r0.label
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.label = r1
            goto L18
        L13:
            app.rive.core.FrameTickerKt$withFrameNanosChoreo$1 r0 = new app.rive.core.FrameTickerKt$withFrameNanosChoreo$1
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.result
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.label
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 != r3) goto L2d
            java.lang.Object r5 = r0.L$0
            kotlin.jvm.functions.Function1 r5 = (kotlin.jvm.functions.Function1) r5
            kotlin.c.b(r6)
            goto L6c
        L2d:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L35:
            kotlin.c.b(r6)
            r0.L$0 = r5
            r0.label = r3
            kotlinx.coroutines.e r6 = new kotlinx.coroutines.e
            kotlin.coroutines.Continuation r2 = pr.b.c(r0)
            r6.<init>(r2, r3)
            r6.H()
            android.view.Choreographer r2 = android.view.Choreographer.getInstance()
            app.rive.core.FrameTickerKt$withFrameNanosChoreo$frameTimeNs$1$onFrameCallback$1 r3 = new app.rive.core.FrameTickerKt$withFrameNanosChoreo$frameTimeNs$1$onFrameCallback$1
            r3.<init>()
            r2.postFrameCallback(r3)
            app.rive.core.FrameTickerKt$withFrameNanosChoreo$frameTimeNs$1$1 r4 = new app.rive.core.FrameTickerKt$withFrameNanosChoreo$frameTimeNs$1$1
            r4.<init>()
            r6.c(r4)
            java.lang.Object r6 = r6.B()
            java.lang.Object r2 = pr.b.f()
            if (r6 != r2) goto L69
            kotlin.coroutines.jvm.internal.g.c(r0)
        L69:
            if (r6 != r1) goto L6c
            return r1
        L6c:
            java.lang.Number r6 = (java.lang.Number) r6
            long r0 = r6.longValue()
            java.lang.Long r6 = kotlin.coroutines.jvm.internal.b.f(r0)
            java.lang.Object r5 = r5.invoke(r6)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: app.rive.core.FrameTickerKt.withFrameNanosChoreo(kotlin.jvm.functions.Function1, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
