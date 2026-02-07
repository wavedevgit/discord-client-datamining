package app.rive;

import app.rive.core.CommandQueue;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import org.jetbrains.annotations.NotNull;
import w0.u;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\u0010\u0006\u001a\u00020\u0005\"\u000e\b\u0000\u0010\u0001*\b\u0012\u0004\u0012\u00028\u00010\u0000\"\u0004\b\u0001\u0010\u0002*\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00028\u00000\u00040\u0003H\u008a@¢\u0006\u0004\b\u0006\u0010\u0007"}, d2 = {"Lapp/rive/Asset;", "T", "H", "Lw0/u;", "Lapp/rive/Result;", "", "<anonymous>", "(Lw0/u;)V"}, k = 3, mv = {1, 9, 0})
@e(c = "app.rive.AssetsKt$rememberAsset$1", f = "Assets.kt", l = {426, 434}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class AssetsKt$rememberAsset$1 extends k implements Function2<u, Continuation<? super Unit>, Object> {
    final /* synthetic */ byte[] $bytes;
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ Function3 $constructFn;
    final /* synthetic */ String $key;
    private /* synthetic */ Object L$0;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AssetsKt$rememberAsset$1(Function3 function3, CommandQueue commandQueue, byte[] bArr, String str, Continuation<? super AssetsKt$rememberAsset$1> continuation) {
        super(2, continuation);
        this.$constructFn = function3;
        this.$commandQueue = commandQueue;
        this.$bytes = bArr;
        this.$key = str;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        AssetsKt$rememberAsset$1 assetsKt$rememberAsset$1 = new AssetsKt$rememberAsset$1(this.$constructFn, this.$commandQueue, this.$bytes, this.$key, continuation);
        assetsKt$rememberAsset$1.L$0 = obj;
        return assetsKt$rememberAsset$1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0038, code lost:
        if (r7 == r0) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x0066, code lost:
        if (r1.f2(r3, r6) == r0) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x0068, code lost:
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
            java.lang.Object r0 = wr.b.f()
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
            goto L69
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
            kotlin.jvm.functions.Function3 r7 = r6.$constructFn
            app.rive.core.CommandQueue r4 = r6.$commandQueue
            byte[] r5 = r6.$bytes
            r6.L$0 = r1
            r6.label = r3
            java.lang.Object r7 = r7.invoke(r4, r5, r6)
            if (r7 != r0) goto L3b
            goto L68
        L3b:
            app.rive.Result r7 = (app.rive.Result) r7
            java.lang.String r3 = r6.$key
            if (r3 == 0) goto L53
            boolean r3 = r7 instanceof app.rive.Result.Success
            if (r3 == 0) goto L53
            r3 = r7
            app.rive.Result$Success r3 = (app.rive.Result.Success) r3
            java.lang.Object r3 = r3.getValue()
            app.rive.Asset r3 = (app.rive.Asset) r3
            java.lang.String r4 = r6.$key
            r3.register(r4)
        L53:
            r1.setValue(r7)
            app.rive.AssetsKt$rememberAsset$1$1 r3 = new app.rive.AssetsKt$rememberAsset$1$1
            java.lang.String r4 = r6.$key
            r3.<init>()
            r7 = 0
            r6.L$0 = r7
            r6.label = r2
            java.lang.Object r7 = r1.f2(r3, r6)
            if (r7 != r0) goto L69
        L68:
            return r0
        L69:
            qr.h r7 = new qr.h
            r7.<init>()
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: app.rive.AssetsKt$rememberAsset$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull u uVar, Continuation<? super Unit> continuation) {
        return ((AssetsKt$rememberAsset$1) create(uVar, continuation)).invokeSuspend(Unit.f32056a);
    }
}
