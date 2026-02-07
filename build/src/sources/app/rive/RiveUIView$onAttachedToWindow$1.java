package app.rive;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.z;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import wr.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.RiveUIView$onAttachedToWindow$1", f = "RiveUIView.kt", l = {ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIView$onAttachedToWindow$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ LifecycleOwner $owner;
    int label;
    final /* synthetic */ RiveUIView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
    @e(c = "app.rive.RiveUIView$onAttachedToWindow$1$1", f = "RiveUIView.kt", l = {60}, m = "invokeSuspend")
    /* renamed from: app.rive.RiveUIView$onAttachedToWindow$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        private /* synthetic */ Object L$0;
        Object L$1;
        int label;
        final /* synthetic */ RiveUIView this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(RiveUIView riveUIView, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.this$0 = riveUIView;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        @NotNull
        public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.this$0, continuation);
            anonymousClass1.L$0 = obj;
            return anonymousClass1;
        }

        /* JADX WARN: Removed duplicated region for block: B:11:0x003a  */
        /* JADX WARN: Removed duplicated region for block: B:17:0x005b  */
        /* JADX WARN: Removed duplicated region for block: B:25:0x0091  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:12:0x0049 -> B:14:0x004c). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(@org.jetbrains.annotations.NotNull java.lang.Object r21) {
            /*
                r20 = this;
                r0 = r20
                java.lang.Object r1 = wr.b.f()
                int r2 = r0.label
                r3 = 1
                if (r2 == 0) goto L23
                if (r2 != r3) goto L1b
                java.lang.Object r2 = r0.L$1
                kotlin.jvm.internal.Ref$LongRef r2 = (kotlin.jvm.internal.Ref.LongRef) r2
                java.lang.Object r4 = r0.L$0
                kotlinx.coroutines.CoroutineScope r4 = (kotlinx.coroutines.CoroutineScope) r4
                kotlin.c.b(r21)
                r5 = r21
                goto L4c
            L1b:
                java.lang.IllegalStateException r1 = new java.lang.IllegalStateException
                java.lang.String r2 = "call to 'resume' before 'invoke' with coroutine"
                r1.<init>(r2)
                throw r1
            L23:
                kotlin.c.b(r21)
                java.lang.Object r2 = r0.L$0
                kotlinx.coroutines.CoroutineScope r2 = (kotlinx.coroutines.CoroutineScope) r2
                kotlin.jvm.internal.Ref$LongRef r4 = new kotlin.jvm.internal.Ref$LongRef
                r4.<init>()
                r19 = r4
                r4 = r2
                r2 = r19
            L34:
                boolean r5 = kotlinx.coroutines.i.i(r4)
                if (r5 == 0) goto L91
                app.rive.RiveUIView$onAttachedToWindow$1$1$deltaTimeNs$1 r5 = new app.rive.RiveUIView$onAttachedToWindow$1$1$deltaTimeNs$1
                r5.<init>()
                r0.L$0 = r4
                r0.L$1 = r2
                r0.label = r3
                java.lang.Object r5 = app.rive.core.FrameTickerKt.withFrameNanosChoreo(r5, r0)
                if (r5 != r1) goto L4c
                return r1
            L4c:
                java.lang.Number r5 = (java.lang.Number) r5
                long r5 = r5.longValue()
                app.rive.RiveUIView r7 = r0.this$0
                app.rive.RiveFile r7 = app.rive.RiveUIView.access$getRiveFile$p(r7)
                if (r7 != 0) goto L5b
                goto L34
            L5b:
                app.rive.core.CommandQueue r8 = r7.getCommandQueue$kotlin_release()
                app.rive.RiveUIView r7 = r0.this$0
                app.rive.core.ArtboardHandle r7 = app.rive.RiveUIView.access$getArtboardHandle$p(r7)
                if (r7 == 0) goto L34
                long r9 = r7.m98unboximpl()
                app.rive.RiveUIView r7 = r0.this$0
                app.rive.core.StateMachineHandle r7 = app.rive.RiveUIView.access$getStateMachineHandle$p(r7)
                if (r7 == 0) goto L34
                long r11 = r7.m196unboximpl()
                app.rive.RiveUIView r7 = r0.this$0
                app.rive.core.RiveSurface r15 = app.rive.RiveUIView.access$getRiveSurface$p(r7)
                if (r15 != 0) goto L80
                goto L34
            L80:
                r8.m108advanceStateMachineOFH3VyA(r11, r5)
                app.rive.runtime.kotlin.core.Fit r13 = app.rive.runtime.kotlin.core.Fit.CONTAIN
                app.rive.runtime.kotlin.core.Alignment r14 = app.rive.runtime.kotlin.core.Alignment.CENTER
                r17 = 32
                r18 = 0
                r16 = 0
                app.rive.core.CommandQueue.m106drawPOUf8go$default(r8, r9, r11, r13, r14, r15, r16, r17, r18)
                goto L34
            L91:
                kotlin.Unit r1 = kotlin.Unit.f32056a
                return r1
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.RiveUIView$onAttachedToWindow$1.AnonymousClass1.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveUIView$onAttachedToWindow$1(LifecycleOwner lifecycleOwner, RiveUIView riveUIView, Continuation<? super RiveUIView$onAttachedToWindow$1> continuation) {
        super(2, continuation);
        this.$owner = lifecycleOwner;
        this.this$0 = riveUIView;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        return new RiveUIView$onAttachedToWindow$1(this.$owner, this.this$0, continuation);
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
            Lifecycle lifecycle = this.$owner.getLifecycle();
            Lifecycle.State state = Lifecycle.State.f4850p;
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.this$0, null);
            this.label = 1;
            if (z.a(lifecycle, state, anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f32056a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((RiveUIView$onAttachedToWindow$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
