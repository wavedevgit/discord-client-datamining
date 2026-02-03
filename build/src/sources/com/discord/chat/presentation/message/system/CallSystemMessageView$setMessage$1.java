package com.discord.chat.presentation.message.system;

import android.widget.TextView;
import androidx.lifecycle.Lifecycle;
import com.discord.chat.bridge.Message;
import com.discord.chat.databinding.CallSystemMessageViewBinding;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.misc.utilities.time.IntervalFlowKt;
import java.util.Arrays;
import js.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.time.Duration;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1", f = "CallSystemMessageView.kt", l = {94}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CallSystemMessageView$setMessage$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Message $message;
    final /* synthetic */ long $start;
    int label;
    final /* synthetic */ CallSystemMessageView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1", f = "CallSystemMessageView.kt", l = {101}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nCallSystemMessageView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CallSystemMessageView.kt\ncom/discord/chat/presentation/message/system/CallSystemMessageView$setMessage$1$1\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 4 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,158:1\n49#2:159\n51#2:163\n46#3:160\n51#3:162\n105#4:161\n*S KotlinDebug\n*F\n+ 1 CallSystemMessageView.kt\ncom/discord/chat/presentation/message/system/CallSystemMessageView$setMessage$1$1\n*L\n96#1:159\n96#1:163\n96#1:160\n96#1:162\n96#1:161\n*E\n"})
    /* renamed from: com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        final /* synthetic */ Message $message;
        final /* synthetic */ long $start;
        int label;
        final /* synthetic */ CallSystemMessageView this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(long j10, CallSystemMessageView callSystemMessageView, Message message, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$start = j10;
            this.this$0 = callSystemMessageView;
            this.$message = message;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.$start, this.this$0, this.$message, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.label;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Duration.a aVar = Duration.f35463e;
                final Flow m956intervalFlowQTBD994 = IntervalFlowKt.m956intervalFlowQTBD994(kotlin.time.b.s(1, hs.b.f28135p), Duration.f35463e.c());
                final long j10 = this.$start;
                Flow x10 = ms.g.x(new Flow() { // from class: com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1

                    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
                    @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 CallSystemMessageView.kt\ncom/discord/chat/presentation/message/system/CallSystemMessageView$setMessage$1$1\n*L\n1#1,49:1\n50#2:50\n97#3,3:51\n*E\n"})
                    /* renamed from: com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1$2  reason: invalid class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class AnonymousClass2<T> implements FlowCollector {
                        final /* synthetic */ long $start$inlined;
                        final /* synthetic */ FlowCollector $this_unsafeFlow;

                        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
                        @kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1$2", f = "CallSystemMessageView.kt", l = {50}, m = "emit")
                        /* renamed from: com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1$2$1  reason: invalid class name */
                        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                        public static final class AnonymousClass1 extends kotlin.coroutines.jvm.internal.d {
                            Object L$0;
                            int label;
                            /* synthetic */ Object result;

                            public AnonymousClass1(Continuation continuation) {
                                super(continuation);
                            }

                            @Override // kotlin.coroutines.jvm.internal.a
                            public final Object invokeSuspend(Object obj) {
                                this.result = obj;
                                this.label |= Integer.MIN_VALUE;
                                return AnonymousClass2.this.emit(null, this);
                            }
                        }

                        public AnonymousClass2(FlowCollector flowCollector, long j10) {
                            this.$this_unsafeFlow = flowCollector;
                            this.$start$inlined = j10;
                        }

                        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                        /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                        @Override // kotlinx.coroutines.flow.FlowCollector
                        /*
                            Code decompiled incorrectly, please refer to instructions dump.
                            To view partially-correct add '--show-bad-code' argument
                        */
                        public final java.lang.Object emit(java.lang.Object r9, kotlin.coroutines.Continuation r10) {
                            /*
                                r8 = this;
                                boolean r0 = r10 instanceof com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1.AnonymousClass2.AnonymousClass1
                                if (r0 == 0) goto L13
                                r0 = r10
                                com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1$2$1 r0 = (com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1.AnonymousClass2.AnonymousClass1) r0
                                int r1 = r0.label
                                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                                r3 = r1 & r2
                                if (r3 == 0) goto L13
                                int r1 = r1 - r2
                                r0.label = r1
                                goto L18
                            L13:
                                com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1$2$1 r0 = new com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1$2$1
                                r0.<init>(r10)
                            L18:
                                java.lang.Object r10 = r0.result
                                java.lang.Object r1 = rr.b.f()
                                int r2 = r0.label
                                r3 = 1
                                if (r2 == 0) goto L31
                                if (r2 != r3) goto L29
                                kotlin.c.b(r10)
                                goto L62
                            L29:
                                java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                                java.lang.String r10 = "call to 'resume' before 'invoke' with coroutine"
                                r9.<init>(r10)
                                throw r9
                            L31:
                                kotlin.c.b(r10)
                                kotlinx.coroutines.flow.FlowCollector r10 = r8.$this_unsafeFlow
                                kotlin.Unit r9 = (kotlin.Unit) r9
                                kotlin.time.Duration$a r9 = kotlin.time.Duration.f35463e
                                long r4 = java.lang.System.currentTimeMillis()
                                long r6 = r8.$start$inlined
                                long r4 = r4 - r6
                                hs.b r9 = hs.b.f28134o
                                long r4 = kotlin.time.b.t(r4, r9)
                                kotlin.time.Duration r9 = kotlin.time.Duration.h(r4)
                                kotlin.time.Duration$a r2 = kotlin.time.Duration.f35463e
                                long r4 = r2.c()
                                kotlin.time.Duration r2 = kotlin.time.Duration.h(r4)
                                java.lang.Comparable r9 = kotlin.ranges.d.f(r9, r2)
                                r0.label = r3
                                java.lang.Object r9 = r10.emit(r9, r0)
                                if (r9 != r1) goto L62
                                return r1
                            L62:
                                kotlin.Unit r9 = kotlin.Unit.f32464a
                                return r9
                            */
                            throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$1$1$invokeSuspend$$inlined$map$1.AnonymousClass2.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                        }
                    }

                    @Override // kotlinx.coroutines.flow.Flow
                    public Object collect(FlowCollector flowCollector, Continuation continuation) {
                        Object collect = Flow.this.collect(new AnonymousClass2(flowCollector, j10), continuation);
                        if (collect == rr.b.f()) {
                            return collect;
                        }
                        return Unit.f32464a;
                    }
                }, m0.a());
                final CallSystemMessageView callSystemMessageView = this.this$0;
                final Message message = this.$message;
                FlowCollector flowCollector = new FlowCollector() { // from class: com.discord.chat.presentation.message.system.CallSystemMessageView.setMessage.1.1.2
                    @Override // kotlinx.coroutines.flow.FlowCollector
                    public /* bridge */ /* synthetic */ Object emit(Object obj2, Continuation continuation) {
                        return m680emitVtjQ1oo(((Duration) obj2).O(), continuation);
                    }

                    /* renamed from: emit-VtjQ1oo  reason: not valid java name */
                    public final Object m680emitVtjQ1oo(long j11, Continuation<? super Unit> continuation) {
                        CallSystemMessageViewBinding callSystemMessageViewBinding;
                        CallSystemMessageView callSystemMessageView2 = CallSystemMessageView.this;
                        Message message2 = message;
                        long s10 = Duration.s(j11);
                        int w10 = Duration.w(j11);
                        int y10 = Duration.y(j11);
                        Duration.x(j11);
                        callSystemMessageViewBinding = callSystemMessageView2.binding;
                        TextView textView = callSystemMessageViewBinding.info;
                        String format = String.format("%02d:%02d:%02d%s", Arrays.copyOf(new Object[]{kotlin.coroutines.jvm.internal.b.f(s10), kotlin.coroutines.jvm.internal.b.e(w10), kotlin.coroutines.jvm.internal.b.e(y10), message2.getDescription()}, 4));
                        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
                        textView.setText(format);
                        return Unit.f32464a;
                    }
                };
                this.label = 1;
                if (x10.collect(flowCollector, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CallSystemMessageView$setMessage$1(CallSystemMessageView callSystemMessageView, long j10, Message message, Continuation<? super CallSystemMessageView$setMessage$1> continuation) {
        super(2, continuation);
        this.this$0 = callSystemMessageView;
        this.$start = j10;
        this.$message = message;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new CallSystemMessageView$setMessage$1(this.this$0, this.$start, this.$message, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = rr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            CallSystemMessageView callSystemMessageView = this.this$0;
            Lifecycle.State state = Lifecycle.State.f4408o;
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$start, callSystemMessageView, this.$message, null);
            this.label = 1;
            if (CoroutineViewUtilsKt.repeatOnLifecycleOwner(callSystemMessageView, state, anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f32464a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((CallSystemMessageView$setMessage$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
