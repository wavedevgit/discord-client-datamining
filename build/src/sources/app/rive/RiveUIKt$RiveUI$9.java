package app.rive;

import app.rive.core.CommandQueue;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Fit;
import e1.a;
import e1.f;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.j;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w0.p;
import w0.q;
import wr.b;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\u0010\u0002\u001a\u00020\u0001*\u00020\u0000H\u008a@¢\u0006\u0004\b\u0002\u0010\u0003"}, d2 = {"Le1/f;", "", "<anonymous>", "(Le1/f;)V"}, k = 3, mv = {1, 9, 0})
@e(c = "app.rive.RiveUIKt$RiveUI$9", f = "RiveUI.kt", l = {277}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$9 extends k implements Function2<f, Continuation<? super Unit>, Object> {
    final /* synthetic */ Alignment $alignment;
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ Fit $fit;
    final /* synthetic */ q $isSettled$delegate;
    final /* synthetic */ long $stateMachineHandle;
    final /* synthetic */ p $surfaceHeight$delegate;
    final /* synthetic */ p $surfaceWidth$delegate;
    private /* synthetic */ Object L$0;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\u0010\u0002\u001a\u00020\u0001*\u00020\u0000H\u008a@¢\u0006\u0004\b\u0002\u0010\u0003"}, d2 = {"Le1/a;", "", "<anonymous>", "(Le1/a;)V"}, k = 3, mv = {1, 9, 0})
    @e(c = "app.rive.RiveUIKt$RiveUI$9$1", f = "RiveUI.kt", l = {279}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$9$1\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,310:1\n1863#2,2:311\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$9$1\n*L\n291#1:311,2\n*E\n"})
    /* renamed from: app.rive.RiveUIKt$RiveUI$9$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass1 extends j implements Function2<a, Continuation<? super Unit>, Object> {
        final /* synthetic */ Alignment $alignment;
        final /* synthetic */ CommandQueue $commandQueue;
        final /* synthetic */ Fit $fit;
        final /* synthetic */ q $isSettled$delegate;
        final /* synthetic */ long $stateMachineHandle;
        final /* synthetic */ p $surfaceHeight$delegate;
        final /* synthetic */ p $surfaceWidth$delegate;
        private /* synthetic */ Object L$0;
        int label;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(CommandQueue commandQueue, q qVar, long j10, Fit fit, Alignment alignment, p pVar, p pVar2, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$commandQueue = commandQueue;
            this.$isSettled$delegate = qVar;
            this.$stateMachineHandle = j10;
            this.$fit = fit;
            this.$alignment = alignment;
            this.$surfaceWidth$delegate = pVar;
            this.$surfaceHeight$delegate = pVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        @NotNull
        public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$commandQueue, this.$isSettled$delegate, this.$stateMachineHandle, this.$fit, this.$alignment, this.$surfaceWidth$delegate, this.$surfaceHeight$delegate, continuation);
            anonymousClass1.L$0 = obj;
            return anonymousClass1;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(@NotNull a aVar, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(aVar, continuation)).invokeSuspend(Unit.f32056a);
        }

        /*  JADX ERROR: JadxOverflowException in pass: RegionMakerVisitor
            jadx.core.utils.exceptions.JadxOverflowException: Regions count limit reached
            	at jadx.core.utils.ErrorsCounter.addError(ErrorsCounter.java:56)
            	at jadx.core.utils.ErrorsCounter.error(ErrorsCounter.java:30)
            	at jadx.core.dex.attributes.nodes.NotificationAttrNode.addError(NotificationAttrNode.java:18)
            */
        /* JADX WARN: Removed duplicated region for block: B:11:0x0031 A[RETURN] */
        /* JADX WARN: Removed duplicated region for block: B:14:0x004a  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0053  */
        /* JADX WARN: Removed duplicated region for block: B:28:0x00a3 A[LOOP:0: B:26:0x009d->B:28:0x00a3, LOOP_END] */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:10:0x002f -> B:12:0x0032). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(@org.jetbrains.annotations.NotNull java.lang.Object r18) {
            /*
                Method dump skipped, instructions count: 253
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.RiveUIKt$RiveUI$9.AnonymousClass1.invokeSuspend(java.lang.Object):java.lang.Object");
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$9(CommandQueue commandQueue, q qVar, long j10, Fit fit, Alignment alignment, p pVar, p pVar2, Continuation<? super RiveUIKt$RiveUI$9> continuation) {
        super(2, continuation);
        this.$commandQueue = commandQueue;
        this.$isSettled$delegate = qVar;
        this.$stateMachineHandle = j10;
        this.$fit = fit;
        this.$alignment = alignment;
        this.$surfaceWidth$delegate = pVar;
        this.$surfaceHeight$delegate = pVar2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        RiveUIKt$RiveUI$9 riveUIKt$RiveUI$9 = new RiveUIKt$RiveUI$9(this.$commandQueue, this.$isSettled$delegate, this.$stateMachineHandle, this.$fit, this.$alignment, this.$surfaceWidth$delegate, this.$surfaceHeight$delegate, continuation);
        riveUIKt$RiveUI$9.L$0 = obj;
        return riveUIKt$RiveUI$9;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull f fVar, Continuation<? super Unit> continuation) {
        return ((RiveUIKt$RiveUI$9) create(fVar, continuation)).invokeSuspend(Unit.f32056a);
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
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$commandQueue, this.$isSettled$delegate, this.$stateMachineHandle, this.$fit, this.$alignment, this.$surfaceWidth$delegate, this.$surfaceHeight$delegate, null);
            this.label = 1;
            if (((f) this.L$0).a(anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f32056a;
    }
}
