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
@e(c = "com.discord.file_manager.FileModule$getFileHash$1", f = "FileModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nFileModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$getFileHash$1\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,320:1\n29#2:321\n1#3:322\n*S KotlinDebug\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$getFileHash$1\n*L\n293#1:321\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class FileModule$getFileHash$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $algorithm;
    final /* synthetic */ double $chunkSize;
    final /* synthetic */ Promise $promise;
    final /* synthetic */ String $uri;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ FileModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileModule$getFileHash$1(String str, FileModule fileModule, String str2, Promise promise, double d10, Continuation<? super FileModule$getFileHash$1> continuation) {
        super(2, continuation);
        this.$algorithm = str;
        this.this$0 = fileModule;
        this.$uri = str2;
        this.$promise = promise;
        this.$chunkSize = d10;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        FileModule$getFileHash$1 fileModule$getFileHash$1 = new FileModule$getFileHash$1(this.$algorithm, this.this$0, this.$uri, this.$promise, this.$chunkSize, continuation);
        fileModule$getFileHash$1.L$0 = obj;
        return fileModule$getFileHash$1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x00a0, code lost:
        if (r0 != null) goto L22;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r10) {
        /*
            r9 = this;
            wr.b.f()
            int r0 = r9.label
            if (r0 != 0) goto Ldb
            kotlin.c.b(r10)
            java.lang.Object r10 = r9.L$0
            kotlinx.coroutines.CoroutineScope r10 = (kotlinx.coroutines.CoroutineScope) r10
            java.lang.String r10 = r9.$algorithm
            com.discord.file_manager.FileModule r0 = r9.this$0
            java.lang.String r1 = r9.$uri
            com.facebook.react.bridge.Promise r2 = r9.$promise
            double r3 = r9.$chunkSize
            kotlin.Result$a r5 = kotlin.Result.f32053e     // Catch: java.lang.Throwable -> La3
            java.util.Locale r5 = java.util.Locale.ROOT     // Catch: java.lang.Throwable -> La3
            java.lang.String r10 = r10.toLowerCase(r5)     // Catch: java.lang.Throwable -> La3
            java.lang.String r5 = "toLowerCase(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r10, r5)     // Catch: java.lang.Throwable -> La3
            java.lang.String r5 = "md5"
            boolean r10 = kotlin.jvm.internal.Intrinsics.areEqual(r10, r5)     // Catch: java.lang.Throwable -> La3
            if (r10 == 0) goto Lb7
            com.facebook.react.bridge.ReactApplicationContext r10 = com.discord.file_manager.FileModule.access$getReactApplicationContext(r0)     // Catch: java.lang.Throwable -> La3
            android.content.ContentResolver r10 = r10.getContentResolver()     // Catch: java.lang.Throwable -> La3
            android.net.Uri r0 = android.net.Uri.parse(r1)     // Catch: java.lang.Throwable -> La3
            java.lang.String r1 = "r"
            android.os.ParcelFileDescriptor r10 = r10.openFileDescriptor(r0, r1)     // Catch: java.lang.Throwable -> La3
            if (r10 == 0) goto Lab
            java.io.FileInputStream r0 = new java.io.FileInputStream     // Catch: java.lang.Throwable -> L62
            java.io.FileDescriptor r1 = r10.getFileDescriptor()     // Catch: java.lang.Throwable -> L62
            r0.<init>(r1)     // Catch: java.lang.Throwable -> L62
            java.lang.String r1 = "MD5"
            java.security.MessageDigest r1 = java.security.MessageDigest.getInstance(r1)     // Catch: java.lang.Throwable -> L62
            int r3 = fs.a.b(r3)     // Catch: java.lang.Throwable -> L62
            byte[] r3 = new byte[r3]     // Catch: java.lang.Throwable -> L62
        L56:
            int r4 = r0.read(r3)     // Catch: java.lang.Throwable -> L62
            r5 = -1
            r6 = 0
            if (r4 == r5) goto L64
            r1.update(r3, r6, r4)     // Catch: java.lang.Throwable -> L62
            goto L56
        L62:
            r0 = move-exception
            goto La5
        L64:
            r0.close()     // Catch: java.lang.Throwable -> L62
            java.lang.StringBuilder r0 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L62
            r0.<init>()     // Catch: java.lang.Throwable -> L62
            byte[] r1 = r1.digest()     // Catch: java.lang.Throwable -> L62
            int r3 = r1.length     // Catch: java.lang.Throwable -> L62
        L71:
            if (r6 >= r3) goto L98
            r4 = r1[r6]     // Catch: java.lang.Throwable -> L62
            kotlin.jvm.internal.StringCompanionObject r5 = kotlin.jvm.internal.StringCompanionObject.INSTANCE     // Catch: java.lang.Throwable -> L62
            java.util.Locale r5 = java.util.Locale.US     // Catch: java.lang.Throwable -> L62
            java.lang.String r7 = "%02x"
            byte r4 = (byte) r4     // Catch: java.lang.Throwable -> L62
            java.lang.Byte r4 = kotlin.coroutines.jvm.internal.b.b(r4)     // Catch: java.lang.Throwable -> L62
            java.lang.Object[] r4 = new java.lang.Object[]{r4}     // Catch: java.lang.Throwable -> L62
            r8 = 1
            java.lang.Object[] r4 = java.util.Arrays.copyOf(r4, r8)     // Catch: java.lang.Throwable -> L62
            java.lang.String r4 = java.lang.String.format(r5, r7, r4)     // Catch: java.lang.Throwable -> L62
            java.lang.String r5 = "format(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r4, r5)     // Catch: java.lang.Throwable -> L62
            r0.append(r4)     // Catch: java.lang.Throwable -> L62
            int r6 = r6 + 1
            goto L71
        L98:
            java.lang.String r0 = r0.toString()     // Catch: java.lang.Throwable -> L62
            r1 = 0
            bs.c.a(r10, r1)     // Catch: java.lang.Throwable -> La3
            if (r0 == 0) goto Lab
            goto Lad
        La3:
            r10 = move-exception
            goto Lbf
        La5:
            throw r0     // Catch: java.lang.Throwable -> La6
        La6:
            r1 = move-exception
            bs.c.a(r10, r0)     // Catch: java.lang.Throwable -> La3
            throw r1     // Catch: java.lang.Throwable -> La3
        Lab:
            java.lang.String r0 = ""
        Lad:
            r2.resolve(r0)     // Catch: java.lang.Throwable -> La3
            kotlin.Unit r10 = kotlin.Unit.f32056a     // Catch: java.lang.Throwable -> La3
            java.lang.Object r10 = kotlin.Result.b(r10)     // Catch: java.lang.Throwable -> La3
            goto Lc9
        Lb7:
            java.lang.String r10 = "Failed requirement."
            java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException     // Catch: java.lang.Throwable -> La3
            r0.<init>(r10)     // Catch: java.lang.Throwable -> La3
            throw r0     // Catch: java.lang.Throwable -> La3
        Lbf:
            kotlin.Result$a r0 = kotlin.Result.f32053e
            java.lang.Object r10 = kotlin.c.a(r10)
            java.lang.Object r10 = kotlin.Result.b(r10)
        Lc9:
            com.facebook.react.bridge.Promise r0 = r9.$promise
            java.lang.Throwable r10 = kotlin.Result.e(r10)
            if (r10 == 0) goto Ld8
            java.lang.String r1 = "err"
            java.lang.String r2 = "Cannot get checksum of file"
            r0.reject(r1, r2, r10)
        Ld8:
            kotlin.Unit r10 = kotlin.Unit.f32056a
            return r10
        Ldb:
            java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r10.<init>(r0)
            throw r10
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.file_manager.FileModule$getFileHash$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileModule$getFileHash$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
