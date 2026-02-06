package com.discord.file_downloader;

import android.app.DownloadManager;
import android.content.Context;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.channels.ProducerScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00030\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/channels/ProducerScope;", "Lcom/discord/file_downloader/DownloadState;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_downloader.PublicFileDownloader$downloadFile$1", f = "PublicFileDownloader.kt", l = {30, ChatViewRecyclerTypes.POLL_IMAGE_ONLY, NotificationData.MESSAGE_TYPE_EMOJI_ADDED}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PublicFileDownloader$downloadFile$1 extends k implements Function2<ProducerScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Context $context;
    final /* synthetic */ String $description;
    final /* synthetic */ String $fileName;
    final /* synthetic */ String $url;
    private /* synthetic */ Object L$0;
    Object L$1;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PublicFileDownloader$downloadFile$1(Context context, String str, String str2, String str3, Continuation<? super PublicFileDownloader$downloadFile$1> continuation) {
        super(2, continuation);
        this.$context = context;
        this.$url = str;
        this.$fileName = str2;
        this.$description = str3;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(Ref.LongRef longRef, ProducerScope producerScope, DownloadManager downloadManager, String str) {
        PublicFileDownloader.onDownloadListeners.remove(Long.valueOf(longRef.element));
        PublicFileDownloader.INSTANCE.onFileDownloaded(producerScope, downloadManager, longRef.element, str);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$1(Ref.LongRef longRef) {
        PublicFileDownloader.onDownloadListeners.remove(Long.valueOf(longRef.element));
        return Unit.f32008a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        PublicFileDownloader$downloadFile$1 publicFileDownloader$downloadFile$1 = new PublicFileDownloader$downloadFile$1(this.$context, this.$url, this.$fileName, this.$description, continuation);
        publicFileDownloader$downloadFile$1.L$0 = obj;
        return publicFileDownloader$downloadFile$1;
    }

    /* JADX WARN: Can't wrap try/catch for region: R(10:1|(1:(1:(1:(3:6|7|8)(2:10|11))(6:12|13|14|15|16|17))(1:23))(1:37)|24|25|26|(2:31|17)|32|(4:34|15|16|17)|19|(1:(0))) */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0049, code lost:
        if (r12.x(r1, r11) == r0) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0099, code lost:
        r1 = move-exception;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x009a, code lost:
        r3 = r12;
        r12 = r1;
        r1 = r6;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x00e2, code lost:
        if (qs.s.a(r12, r1, r11) != r0) goto L7;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r12) {
        /*
            Method dump skipped, instructions count: 232
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.file_downloader.PublicFileDownloader$downloadFile$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(ProducerScope producerScope, Continuation<? super Unit> continuation) {
        return ((PublicFileDownloader$downloadFile$1) create(producerScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
