package com.discord.file_downloader;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.io.File;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00030\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/flow/FlowCollector;", "Lcom/discord/file_downloader/DownloadState;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_downloader.FileDownloader$downloadFile$1", f = "FileDownloader.kt", l = {ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE, 61, 69, 76, 82}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FileDownloader$downloadFile$1 extends k implements Function2<FlowCollector, Continuation<? super Unit>, Object> {
    final /* synthetic */ File $downloadDirectory;
    final /* synthetic */ String $fileName;
    final /* synthetic */ String $fileUrl;
    final /* synthetic */ boolean $logErrors;
    private /* synthetic */ Object L$0;
    Object L$1;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileDownloader$downloadFile$1(File file, String str, String str2, boolean z10, Continuation<? super FileDownloader$downloadFile$1> continuation) {
        super(2, continuation);
        this.$downloadDirectory = file;
        this.$fileName = str;
        this.$fileUrl = str2;
        this.$logErrors = z10;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        FileDownloader$downloadFile$1 fileDownloader$downloadFile$1 = new FileDownloader$downloadFile$1(this.$downloadDirectory, this.$fileName, this.$fileUrl, this.$logErrors, continuation);
        fileDownloader$downloadFile$1.L$0 = obj;
        return fileDownloader$downloadFile$1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:31:0x0082, code lost:
        if (r15.emit(r2, r14) == r1) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x0093, code lost:
        if (r15.emit(r0, r14) == r1) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:52:0x0104, code lost:
        if (r15.emit(r4, r14) == r1) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:55:0x010b, code lost:
        if (r15 == null) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:56:0x010d, code lost:
        r15.close();
     */
    /* JADX WARN: Code restructure failed: missing block: B:71:0x0137, code lost:
        if (r15 == null) goto L14;
     */
    /* JADX WARN: Removed duplicated region for block: B:65:0x011d A[Catch: all -> 0x00cc, TryCatch #3 {all -> 0x00cc, blocks: (B:63:0x0119, B:65:0x011d, B:66:0x0120, B:39:0x009c, B:41:0x00b0, B:49:0x00d5, B:51:0x00f2, B:61:0x0115, B:62:0x0118), top: B:85:0x000c }] */
    /* JADX WARN: Removed duplicated region for block: B:69:0x0132  */
    /* JADX WARN: Type inference failed for: r0v9, types: [T, okhttp3.ResponseBody] */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r15) {
        /*
            Method dump skipped, instructions count: 327
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.file_downloader.FileDownloader$downloadFile$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(FlowCollector flowCollector, Continuation<? super Unit> continuation) {
        return ((FileDownloader$downloadFile$1) create(flowCollector, continuation)).invokeSuspend(Unit.f33282a);
    }
}
