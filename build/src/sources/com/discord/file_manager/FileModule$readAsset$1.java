package com.discord.file_manager;

import com.facebook.react.bridge.Promise;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_manager.FileModule$readAsset$1", f = "FileModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nFileModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$readAsset$1\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,320:1\n29#2:321\n1#3:322\n*S KotlinDebug\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$readAsset$1\n*L\n114#1:321\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class FileModule$readAsset$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $assetUri;
    final /* synthetic */ String $encoding;
    final /* synthetic */ Promise $promise;
    int label;
    final /* synthetic */ FileModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileModule$readAsset$1(String str, FileModule fileModule, String str2, Promise promise, Continuation<? super FileModule$readAsset$1> continuation) {
        super(2, continuation);
        this.$assetUri = str;
        this.this$0 = fileModule;
        this.$encoding = str2;
        this.$promise = promise;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new FileModule$readAsset$1(this.$assetUri, this.this$0, this.$encoding, this.$promise, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:34:0x0094 A[Catch: all -> 0x0099, TRY_ENTER, TRY_LEAVE, TryCatch #2 {all -> 0x0039, blocks: (B:5:0x000a, B:7:0x0016, B:12:0x0025, B:14:0x002d, B:43:0x00a2, B:45:0x00af, B:46:0x00ba, B:48:0x00be, B:49:0x00c2, B:17:0x003d, B:20:0x0046, B:23:0x0050, B:25:0x0059, B:26:0x005f, B:28:0x0065, B:29:0x0081, B:30:0x0088, B:31:0x0089, B:34:0x0094), top: B:56:0x000a }] */
    /* JADX WARN: Removed duplicated region for block: B:42:0x00a1  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x00af A[Catch: all -> 0x0039, TryCatch #2 {all -> 0x0039, blocks: (B:5:0x000a, B:7:0x0016, B:12:0x0025, B:14:0x002d, B:43:0x00a2, B:45:0x00af, B:46:0x00ba, B:48:0x00be, B:49:0x00c2, B:17:0x003d, B:20:0x0046, B:23:0x0050, B:25:0x0059, B:26:0x005f, B:28:0x0065, B:29:0x0081, B:30:0x0088, B:31:0x0089, B:34:0x0094), top: B:56:0x000a }] */
    /* JADX WARN: Removed duplicated region for block: B:46:0x00ba A[Catch: all -> 0x0039, TryCatch #2 {all -> 0x0039, blocks: (B:5:0x000a, B:7:0x0016, B:12:0x0025, B:14:0x002d, B:43:0x00a2, B:45:0x00af, B:46:0x00ba, B:48:0x00be, B:49:0x00c2, B:17:0x003d, B:20:0x0046, B:23:0x0050, B:25:0x0059, B:26:0x005f, B:28:0x0065, B:29:0x0081, B:30:0x0088, B:31:0x0089, B:34:0x0094), top: B:56:0x000a }] */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r7) {
        /*
            r6 = this;
            ur.b.f()
            int r0 = r6.label
            if (r0 != 0) goto Lce
            kotlin.c.b(r7)
            java.lang.String r7 = r6.$assetUri     // Catch: java.lang.Throwable -> L39
            android.net.Uri r7 = android.net.Uri.parse(r7)     // Catch: java.lang.Throwable -> L39
            java.lang.String r0 = r7.getScheme()     // Catch: java.lang.Throwable -> L39
            if (r0 == 0) goto L89
            int r1 = r0.hashCode()     // Catch: java.lang.Throwable -> L39
            r2 = 3143036(0x2ff57c, float:4.404332E-39)
            if (r1 == r2) goto L3d
            r7 = 3213448(0x310888, float:4.503E-39)
            if (r1 == r7) goto L25
            goto L89
        L25:
            java.lang.String r7 = "http"
            boolean r7 = r0.equals(r7)     // Catch: java.lang.Throwable -> L39
            if (r7 == 0) goto L89
            java.net.URL r7 = new java.net.URL     // Catch: java.lang.Throwable -> L39
            java.lang.String r0 = r6.$assetUri     // Catch: java.lang.Throwable -> L39
            r7.<init>(r0)     // Catch: java.lang.Throwable -> L39
            java.io.InputStream r7 = r7.openStream()     // Catch: java.lang.Throwable -> L39
            goto L91
        L39:
            r0 = move-exception
            r7 = r0
            goto Lc6
        L3d:
            java.lang.String r1 = "file"
            boolean r0 = r0.equals(r1)     // Catch: java.lang.Throwable -> L39
            if (r0 != 0) goto L46
            goto L89
        L46:
            java.io.File r0 = new java.io.File     // Catch: java.lang.Throwable -> L39
            java.lang.String r1 = r7.getPath()     // Catch: java.lang.Throwable -> L39
            if (r1 != 0) goto L50
            java.lang.String r1 = ""
        L50:
            r0.<init>(r1)     // Catch: java.lang.Throwable -> L39
            boolean r1 = r0.exists()     // Catch: java.lang.Throwable -> L39
            if (r1 == 0) goto L5f
            java.io.FileInputStream r7 = new java.io.FileInputStream     // Catch: java.lang.Throwable -> L39
            r7.<init>(r0)     // Catch: java.lang.Throwable -> L39
            goto L91
        L5f:
            java.lang.String r0 = r7.getLastPathSegment()     // Catch: java.lang.Throwable -> L39
            if (r0 == 0) goto L81
            com.discord.file_manager.FileModule r7 = r6.this$0     // Catch: java.lang.Throwable -> L39
            java.lang.String r1 = "."
            java.lang.String[] r1 = new java.lang.String[]{r1}     // Catch: java.lang.Throwable -> L39
            r4 = 6
            r5 = 0
            r2 = 0
            r3 = 0
            java.util.List r0 = kotlin.text.StringsKt.split$default(r0, r1, r2, r3, r4, r5)     // Catch: java.lang.Throwable -> L39
            r1 = 0
            java.lang.Object r0 = r0.get(r1)     // Catch: java.lang.Throwable -> L39
            java.lang.String r0 = (java.lang.String) r0     // Catch: java.lang.Throwable -> L39
            java.io.InputStream r7 = r7.openRawResource(r0)     // Catch: java.lang.Throwable -> L39
            goto L91
        L81:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException     // Catch: java.lang.Throwable -> L39
            java.lang.String r0 = "Could not find asset"
            r7.<init>(r0)     // Catch: java.lang.Throwable -> L39
            throw r7     // Catch: java.lang.Throwable -> L39
        L89:
            com.discord.file_manager.FileModule r7 = r6.this$0     // Catch: java.lang.Throwable -> L39
            java.lang.String r0 = r6.$assetUri     // Catch: java.lang.Throwable -> L39
            java.io.InputStream r7 = r7.openRawResource(r0)     // Catch: java.lang.Throwable -> L39
        L91:
            r0 = 0
            if (r7 == 0) goto La1
            byte[] r1 = zr.b.c(r7)     // Catch: java.lang.Throwable -> L99
            goto La2
        L99:
            r0 = move-exception
            r1 = r0
            throw r1     // Catch: java.lang.Throwable -> L9c
        L9c:
            r0 = move-exception
            zr.c.a(r7, r1)     // Catch: java.lang.Throwable -> L39
            throw r0     // Catch: java.lang.Throwable -> L39
        La1:
            r1 = r0
        La2:
            zr.c.a(r7, r0)     // Catch: java.lang.Throwable -> L39
            java.lang.String r7 = r6.$encoding     // Catch: java.lang.Throwable -> L39
            java.lang.String r2 = "base64"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r2)     // Catch: java.lang.Throwable -> L39
            if (r7 == 0) goto Lba
            com.facebook.react.bridge.Promise r7 = r6.$promise     // Catch: java.lang.Throwable -> L39
            r0 = 2
            java.lang.String r0 = android.util.Base64.encodeToString(r1, r0)     // Catch: java.lang.Throwable -> L39
            r7.resolve(r0)     // Catch: java.lang.Throwable -> L39
            goto Lcb
        Lba:
            com.facebook.react.bridge.Promise r7 = r6.$promise     // Catch: java.lang.Throwable -> L39
            if (r1 == 0) goto Lc2
            java.lang.String r0 = kotlin.text.StringsKt.x(r1)     // Catch: java.lang.Throwable -> L39
        Lc2:
            r7.resolve(r0)     // Catch: java.lang.Throwable -> L39
            goto Lcb
        Lc6:
            com.facebook.react.bridge.Promise r0 = r6.$promise
            r0.reject(r7)
        Lcb:
            kotlin.Unit r7 = kotlin.Unit.f31988a
            return r7
        Lce:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r7.<init>(r0)
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.file_manager.FileModule$readAsset$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileModule$readAsset$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
