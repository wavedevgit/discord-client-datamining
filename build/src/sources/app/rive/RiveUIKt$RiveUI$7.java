package app.rive;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.z;
import app.rive.core.CommandQueue;
import app.rive.core.RiveSurface;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Fit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import w0.q;
import wr.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.RiveUIKt$RiveUI$7", f = "RiveUI.kt", l = {234}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$7\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,310:1\n57#2:311\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$7\n*L\n231#1:311\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$7 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Alignment $alignment;
    final /* synthetic */ long $artboardHandle;
    final /* synthetic */ int $clearColor;
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ Fit $fit;
    final /* synthetic */ q $isSettled$delegate;
    final /* synthetic */ LifecycleOwner $lifecycleOwner;
    final /* synthetic */ long $stateMachineHandle;
    final /* synthetic */ q $surface$delegate;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
    @e(c = "app.rive.RiveUIKt$RiveUI$7$2", f = "RiveUI.kt", l = {238}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$7$2\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,310:1\n57#2:311\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$7$2\n*L\n235#1:311\n*E\n"})
    /* renamed from: app.rive.RiveUIKt$RiveUI$7$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass2 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        final /* synthetic */ Alignment $alignment;
        final /* synthetic */ long $artboardHandle;
        final /* synthetic */ int $clearColor;
        final /* synthetic */ CommandQueue $commandQueue;
        final /* synthetic */ Fit $fit;
        final /* synthetic */ q $isSettled$delegate;
        final /* synthetic */ long $stateMachineHandle;
        final /* synthetic */ q $surface$delegate;
        private /* synthetic */ Object L$0;
        Object L$1;
        int label;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass2(CommandQueue commandQueue, long j10, long j11, Fit fit, Alignment alignment, int i10, q qVar, q qVar2, Continuation<? super AnonymousClass2> continuation) {
            super(2, continuation);
            this.$commandQueue = commandQueue;
            this.$stateMachineHandle = j10;
            this.$artboardHandle = j11;
            this.$fit = fit;
            this.$alignment = alignment;
            this.$clearColor = i10;
            this.$isSettled$delegate = qVar;
            this.$surface$delegate = qVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        @NotNull
        public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
            AnonymousClass2 anonymousClass2 = new AnonymousClass2(this.$commandQueue, this.$stateMachineHandle, this.$artboardHandle, this.$fit, this.$alignment, this.$clearColor, this.$isSettled$delegate, this.$surface$delegate, continuation);
            anonymousClass2.L$0 = obj;
            return anonymousClass2;
        }

        /* JADX WARN: Removed duplicated region for block: B:11:0x004e  */
        /* JADX WARN: Removed duplicated region for block: B:17:0x006f  */
        /* JADX WARN: Removed duplicated region for block: B:18:0x0093  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:12:0x005d -> B:14:0x0060). Please submit an issue!!! */
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
                goto L60
            L1b:
                java.lang.IllegalStateException r1 = new java.lang.IllegalStateException
                java.lang.String r2 = "call to 'resume' before 'invoke' with coroutine"
                r1.<init>(r2)
                throw r1
            L23:
                kotlin.c.b(r21)
                java.lang.Object r2 = r0.L$0
                kotlinx.coroutines.CoroutineScope r2 = (kotlinx.coroutines.CoroutineScope) r2
                app.rive.RiveUIKt$RiveUI$7$2$1 r4 = new app.rive.RiveUIKt$RiveUI$7$2$1
                long r5 = r0.$artboardHandle
                long r7 = r0.$stateMachineHandle
                r4.<init>()
                app.rive.RiveLog r5 = app.rive.RiveLog.INSTANCE
                app.rive.RiveLog$Logger r5 = r5.getLogger()
                java.lang.String r6 = "RiveUI/Draw"
                r5.d(r6, r4)
                kotlin.jvm.internal.Ref$LongRef r4 = new kotlin.jvm.internal.Ref$LongRef
                r4.<init>()
                r19 = r4
                r4 = r2
                r2 = r19
            L48:
                boolean r5 = kotlinx.coroutines.i.i(r4)
                if (r5 == 0) goto L93
                app.rive.RiveUIKt$RiveUI$7$2$deltaTimeNs$1 r5 = new app.rive.RiveUIKt$RiveUI$7$2$deltaTimeNs$1
                r5.<init>()
                r0.L$0 = r4
                r0.L$1 = r2
                r0.label = r3
                java.lang.Object r5 = w0.o.b(r5, r0)
                if (r5 != r1) goto L60
                return r1
            L60:
                java.lang.Number r5 = (java.lang.Number) r5
                long r5 = r5.longValue()
                w0.q r7 = r0.$isSettled$delegate
                boolean r7 = app.rive.RiveUIKt.access$RiveUI$lambda$3(r7)
                if (r7 == 0) goto L6f
                goto L48
            L6f:
                app.rive.core.CommandQueue r7 = r0.$commandQueue
                long r8 = r0.$stateMachineHandle
                r7.m108advanceStateMachineOFH3VyA(r8, r5)
                app.rive.core.CommandQueue r10 = r0.$commandQueue
                long r11 = r0.$artboardHandle
                long r13 = r0.$stateMachineHandle
                app.rive.runtime.kotlin.core.Fit r15 = r0.$fit
                app.rive.runtime.kotlin.core.Alignment r5 = r0.$alignment
                w0.q r6 = r0.$surface$delegate
                app.rive.core.RiveSurface r17 = app.rive.RiveUIKt.access$RiveUI$lambda$6(r6)
                kotlin.jvm.internal.Intrinsics.checkNotNull(r17)
                int r6 = r0.$clearColor
                r16 = r5
                r18 = r6
                r10.m125drawPOUf8go(r11, r13, r15, r16, r17, r18)
                goto L48
            L93:
                kotlin.Unit r1 = kotlin.Unit.f32056a
                return r1
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.RiveUIKt$RiveUI$7.AnonymousClass2.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$7(LifecycleOwner lifecycleOwner, q qVar, CommandQueue commandQueue, long j10, long j11, Fit fit, Alignment alignment, int i10, q qVar2, Continuation<? super RiveUIKt$RiveUI$7> continuation) {
        super(2, continuation);
        this.$lifecycleOwner = lifecycleOwner;
        this.$surface$delegate = qVar;
        this.$commandQueue = commandQueue;
        this.$stateMachineHandle = j10;
        this.$artboardHandle = j11;
        this.$fit = fit;
        this.$alignment = alignment;
        this.$clearColor = i10;
        this.$isSettled$delegate = qVar2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        return new RiveUIKt$RiveUI$7(this.$lifecycleOwner, this.$surface$delegate, this.$commandQueue, this.$stateMachineHandle, this.$artboardHandle, this.$fit, this.$alignment, this.$clearColor, this.$isSettled$delegate, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        RiveSurface RiveUI$lambda$6;
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
            RiveUI$lambda$6 = RiveUIKt.RiveUI$lambda$6(this.$surface$delegate);
            if (RiveUI$lambda$6 == null) {
                RiveLog.INSTANCE.getLogger().d("RiveUI/Draw", new Function0<String>() { // from class: app.rive.RiveUIKt$RiveUI$7.1
                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        return "Surface is null, skipping drawing";
                    }
                });
                return Unit.f32056a;
            }
            Lifecycle lifecycle = this.$lifecycleOwner.getLifecycle();
            Lifecycle.State state = Lifecycle.State.f4850p;
            AnonymousClass2 anonymousClass2 = new AnonymousClass2(this.$commandQueue, this.$stateMachineHandle, this.$artboardHandle, this.$fit, this.$alignment, this.$clearColor, this.$isSettled$delegate, this.$surface$delegate, null);
            this.label = 1;
            if (z.a(lifecycle, state, anonymousClass2, this) == f10) {
                return f10;
            }
        }
        return Unit.f32056a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((RiveUIKt$RiveUI$7) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
