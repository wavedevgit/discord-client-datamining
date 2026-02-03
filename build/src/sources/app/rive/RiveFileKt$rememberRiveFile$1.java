package app.rive;

import app.rive.core.CommandQueue;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import org.jetbrains.annotations.NotNull;
import w0.u;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\u0010\u0004\u001a\u00020\u0003*\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00020\u00010\u0000H\u008a@¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"Lw0/u;", "Lapp/rive/Result;", "Lapp/rive/RiveFile;", "", "<anonymous>", "(Lw0/u;)V"}, k = 3, mv = {1, 9, 0})
@e(c = "app.rive.RiveFileKt$rememberRiveFile$1", f = "RiveFile.kt", l = {175, 180}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveFileKt$rememberRiveFile$1 extends k implements Function2<u, Continuation<? super Unit>, Object> {
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ RiveFileSource $source;
    private /* synthetic */ Object L$0;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveFileKt$rememberRiveFile$1(RiveFileSource riveFileSource, CommandQueue commandQueue, Continuation<? super RiveFileKt$rememberRiveFile$1> continuation) {
        super(2, continuation);
        this.$source = riveFileSource;
        this.$commandQueue = commandQueue;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        RiveFileKt$rememberRiveFile$1 riveFileKt$rememberRiveFile$1 = new RiveFileKt$rememberRiveFile$1(this.$source, this.$commandQueue, continuation);
        riveFileKt$rememberRiveFile$1.L$0 = obj;
        return riveFileKt$rememberRiveFile$1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0038, code lost:
        if (r7 == r0) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0052, code lost:
        if (r1.f2(r3, r6) == r0) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0054, code lost:
        return r0;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(@org.jetbrains.annotations.NotNull java.lang.Object r7) {
        /*
            r6 = this;
            java.lang.Object r0 = pr.b.f()
            int r1 = r6.label
            r2 = 2
            r3 = 1
            if (r1 == 0) goto L22
            if (r1 == r3) goto L1a
            if (r1 == r2) goto L16
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r7.<init>(r0)
            throw r7
        L16:
            kotlin.c.b(r7)
            goto L55
        L1a:
            java.lang.Object r1 = r6.L$0
            w0.u r1 = (w0.u) r1
            kotlin.c.b(r7)
            goto L3b
        L22:
            kotlin.c.b(r7)
            java.lang.Object r7 = r6.L$0
            r1 = r7
            w0.u r1 = (w0.u) r1
            app.rive.RiveFile$Companion r7 = app.rive.RiveFile.Companion
            app.rive.RiveFileSource r4 = r6.$source
            app.rive.core.CommandQueue r5 = r6.$commandQueue
            r6.L$0 = r1
            r6.label = r3
            java.lang.Object r7 = r7.fromSource(r4, r5, r6)
            if (r7 != r0) goto L3b
            goto L54
        L3b:
            app.rive.Result r7 = (app.rive.Result) r7
            r1.setValue(r7)
            boolean r3 = r7 instanceof app.rive.Result.Success
            if (r3 == 0) goto L5b
            app.rive.RiveFileKt$rememberRiveFile$1$1 r3 = new app.rive.RiveFileKt$rememberRiveFile$1$1
            r3.<init>()
            r7 = 0
            r6.L$0 = r7
            r6.label = r2
            java.lang.Object r7 = r1.f2(r3, r6)
            if (r7 != r0) goto L55
        L54:
            return r0
        L55:
            jr.h r7 = new jr.h
            r7.<init>()
            throw r7
        L5b:
            kotlin.Unit r7 = kotlin.Unit.f33074a
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: app.rive.RiveFileKt$rememberRiveFile$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull u uVar, Continuation<? super Unit> continuation) {
        return ((RiveFileKt$rememberRiveFile$1) create(uVar, continuation)).invokeSuspend(Unit.f33074a);
    }
}
