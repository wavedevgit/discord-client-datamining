package com.discord.recycler_view.scroll;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import js.m0;
import kotlin.Function;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionAdapter;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.i;
import ms.c0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0000\u0018\u0000*\b\b\u0000\u0010\u0001*\u00020\u00022\u00020\u0002B-\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0012\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00070\u0006\u0012\b\b\u0002\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\u0015\u0010\u0013\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00028\u0000H\u0007¢\u0006\u0002\u0010\u0015J\b\u0010\u0016\u001a\u00020\u0007H\u0007R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0011\u001a\b\u0012\u0004\u0012\u00028\u00000\u0012X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"Lcom/discord/recycler_view/scroll/DebouncedFlow;", "T", "", "timeoutMillis", "", "onEvent", "Lkotlin/Function1;", "", "collectWithLeadingDebounce", "", "<init>", "(JLkotlin/jvm/functions/Function1;Z)V", "eventCoroutineScope", "Lkotlinx/coroutines/CoroutineScope;", "eventDetectorJob", "Lkotlinx/coroutines/Job;", "eventDetectorActive", "events", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "tryEmit", "event", "(Ljava/lang/Object;)V", "cancel", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DebouncedFlow<T> {
    @NotNull
    private final CoroutineScope eventCoroutineScope;
    private boolean eventDetectorActive;
    private Job eventDetectorJob;
    @NotNull
    private final MutableSharedFlow events;

    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.recycler_view.scroll.DebouncedFlow$1", f = "DebouncedFlow.kt", l = {28, ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE}, m = "invokeSuspend")
    /* renamed from: com.discord.recycler_view.scroll.DebouncedFlow$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        final /* synthetic */ boolean $collectWithLeadingDebounce;
        final /* synthetic */ Function1<T, Unit> $onEvent;
        final /* synthetic */ long $timeoutMillis;
        int label;
        final /* synthetic */ DebouncedFlow<T> this$0;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* renamed from: com.discord.recycler_view.scroll.DebouncedFlow$1$1  reason: invalid class name and collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class C01321 implements FlowCollector, FunctionAdapter {
            final /* synthetic */ Function1<T, Unit> $tmp0;

            /* JADX WARN: Multi-variable type inference failed */
            C01321(Function1<? super T, Unit> function1) {
                this.$tmp0 = function1;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public final Object emit(T t10, Continuation<? super Unit> continuation) {
                Object invokeSuspend$suspendConversion0 = AnonymousClass1.invokeSuspend$suspendConversion0(this.$tmp0, t10, continuation);
                if (invokeSuspend$suspendConversion0 == rr.b.f()) {
                    return invokeSuspend$suspendConversion0;
                }
                return Unit.f32464a;
            }

            public final boolean equals(Object obj) {
                if ((obj instanceof FlowCollector) && (obj instanceof FunctionAdapter)) {
                    return Intrinsics.areEqual(getFunctionDelegate(), ((FunctionAdapter) obj).getFunctionDelegate());
                }
                return false;
            }

            @Override // kotlin.jvm.internal.FunctionAdapter
            public final Function getFunctionDelegate() {
                return new FunctionReferenceImpl(2, this.$tmp0, Intrinsics.Kotlin.class, "suspendConversion0", "invokeSuspend$suspendConversion0(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", 0);
            }

            public final int hashCode() {
                return getFunctionDelegate().hashCode();
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* renamed from: com.discord.recycler_view.scroll.DebouncedFlow$1$2  reason: invalid class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class AnonymousClass2 implements FlowCollector, FunctionAdapter {
            final /* synthetic */ Function1<T, Unit> $tmp0;

            /* JADX WARN: Multi-variable type inference failed */
            AnonymousClass2(Function1<? super T, Unit> function1) {
                this.$tmp0 = function1;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public final Object emit(T t10, Continuation<? super Unit> continuation) {
                Object invokeSuspend$suspendConversion1 = AnonymousClass1.invokeSuspend$suspendConversion1(this.$tmp0, t10, continuation);
                if (invokeSuspend$suspendConversion1 == rr.b.f()) {
                    return invokeSuspend$suspendConversion1;
                }
                return Unit.f32464a;
            }

            public final boolean equals(Object obj) {
                if ((obj instanceof FlowCollector) && (obj instanceof FunctionAdapter)) {
                    return Intrinsics.areEqual(getFunctionDelegate(), ((FunctionAdapter) obj).getFunctionDelegate());
                }
                return false;
            }

            @Override // kotlin.jvm.internal.FunctionAdapter
            public final Function getFunctionDelegate() {
                return new FunctionReferenceImpl(2, this.$tmp0, Intrinsics.Kotlin.class, "suspendConversion1", "invokeSuspend$suspendConversion1(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", 0);
            }

            public final int hashCode() {
                return getFunctionDelegate().hashCode();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        /* JADX WARN: Multi-variable type inference failed */
        AnonymousClass1(boolean z10, DebouncedFlow<T> debouncedFlow, long j10, Function1<? super T, Unit> function1, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$collectWithLeadingDebounce = z10;
            this.this$0 = debouncedFlow;
            this.$timeoutMillis = j10;
            this.$onEvent = function1;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ Object invokeSuspend$suspendConversion0(Function1 function1, Object obj, Continuation continuation) {
            function1.invoke(obj);
            return Unit.f32464a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final /* synthetic */ Object invokeSuspend$suspendConversion1(Function1 function1, Object obj, Continuation continuation) {
            function1.invoke(obj);
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.$collectWithLeadingDebounce, this.this$0, this.$timeoutMillis, this.$onEvent, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0037, code lost:
            if (com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt.collectWithLeadingDebounce(r7, r1, r5, r6) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:16:0x0053, code lost:
            if (r7.collect(r3, r6) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:17:0x0055, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = rr.b.f()
                int r1 = r6.label
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L1b
                if (r1 == r3) goto L17
                if (r1 != r2) goto Lf
                goto L17
            Lf:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L17:
                kotlin.c.b(r7)
                goto L56
            L1b:
                kotlin.c.b(r7)
                boolean r7 = r6.$collectWithLeadingDebounce
                if (r7 == 0) goto L3a
                com.discord.recycler_view.scroll.DebouncedFlow<T> r7 = r6.this$0
                kotlinx.coroutines.flow.MutableSharedFlow r7 = com.discord.recycler_view.scroll.DebouncedFlow.access$getEvents$p(r7)
                long r1 = r6.$timeoutMillis
                kotlin.jvm.functions.Function1<T, kotlin.Unit> r4 = r6.$onEvent
                com.discord.recycler_view.scroll.DebouncedFlow$1$1 r5 = new com.discord.recycler_view.scroll.DebouncedFlow$1$1
                r5.<init>(r4)
                r6.label = r3
                java.lang.Object r7 = com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt.collectWithLeadingDebounce(r7, r1, r5, r6)
                if (r7 != r0) goto L56
                goto L55
            L3a:
                com.discord.recycler_view.scroll.DebouncedFlow<T> r7 = r6.this$0
                kotlinx.coroutines.flow.MutableSharedFlow r7 = com.discord.recycler_view.scroll.DebouncedFlow.access$getEvents$p(r7)
                long r3 = r6.$timeoutMillis
                kotlinx.coroutines.flow.Flow r7 = ms.g.k(r7, r3)
                kotlin.jvm.functions.Function1<T, kotlin.Unit> r1 = r6.$onEvent
                com.discord.recycler_view.scroll.DebouncedFlow$1$2 r3 = new com.discord.recycler_view.scroll.DebouncedFlow$1$2
                r3.<init>(r1)
                r6.label = r2
                java.lang.Object r7 = r7.collect(r3, r6)
                if (r7 != r0) goto L56
            L55:
                return r0
            L56:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.recycler_view.scroll.DebouncedFlow.AnonymousClass1.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public DebouncedFlow(long j10, @NotNull Function1<? super T, Unit> onEvent, boolean z10) {
        Job d10;
        Intrinsics.checkNotNullParameter(onEvent, "onEvent");
        CoroutineScope a10 = i.a(m0.c());
        this.eventCoroutineScope = a10;
        this.eventDetectorActive = true;
        this.events = c0.b(0, 1, null, 4, null);
        d10 = js.i.d(a10, null, null, new AnonymousClass1(z10, this, j10, onEvent, null), 3, null);
        this.eventDetectorJob = d10;
    }

    public final void cancel() {
        Job job = this.eventDetectorJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.eventDetectorActive = false;
    }

    public final void tryEmit(@NotNull T event) {
        Intrinsics.checkNotNullParameter(event, "event");
        this.events.b(event);
    }

    public /* synthetic */ DebouncedFlow(long j10, Function1 function1, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, function1, (i10 & 4) != 0 ? true : z10);
    }
}
