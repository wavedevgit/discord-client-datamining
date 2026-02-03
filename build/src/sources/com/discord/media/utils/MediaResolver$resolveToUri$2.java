package com.discord.media.utils;

import android.net.Uri;
import com.discord.notifications.api.NotificationData;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/net/Uri;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.utils.MediaResolver$resolveToUri$2", f = "MediaResolver.kt", l = {NotificationData.MESSAGE_TYPE_EMOJI_ADDED, 66, 67, 68}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaResolver$resolveToUri$2 extends k implements Function2<CoroutineScope, Continuation<? super Uri>, Object> {
    final /* synthetic */ EncodingConfig $encodingConfig;
    final /* synthetic */ int $imageCompressionQuality;
    final /* synthetic */ Uri $inputUri;
    final /* synthetic */ boolean $isLowQuality;
    final /* synthetic */ boolean $skipVideoTranscode;
    final /* synthetic */ boolean $useOriginalIfSmaller;
    int label;
    final /* synthetic */ MediaResolver this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaResolver$resolveToUri$2(MediaResolver mediaResolver, Uri uri, boolean z10, EncodingConfig encodingConfig, int i10, boolean z11, boolean z12, Continuation<? super MediaResolver$resolveToUri$2> continuation) {
        super(2, continuation);
        this.this$0 = mediaResolver;
        this.$inputUri = uri;
        this.$skipVideoTranscode = z10;
        this.$encodingConfig = encodingConfig;
        this.$imageCompressionQuality = i10;
        this.$isLowQuality = z11;
        this.$useOriginalIfSmaller = z12;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaResolver$resolveToUri$2(this.this$0, this.$inputUri, this.$skipVideoTranscode, this.$encodingConfig, this.$imageCompressionQuality, this.$isLowQuality, this.$useOriginalIfSmaller, continuation);
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0039, code lost:
        if (r11 == r0) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x005a, code lost:
        if (r11 == r0) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0080, code lost:
        if (r11 == r0) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0095, code lost:
        if (r11 == r0) goto L24;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r11) {
        /*
            r10 = this;
            java.lang.Object r0 = pr.b.f()
            int r1 = r10.label
            r2 = 4
            r3 = 3
            r4 = 2
            r5 = 1
            if (r1 == 0) goto L2e
            if (r1 == r5) goto L2a
            if (r1 == r4) goto L26
            if (r1 == r3) goto L21
            if (r1 != r2) goto L19
            kotlin.c.b(r11)
            goto L98
        L19:
            java.lang.IllegalStateException r11 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r11.<init>(r0)
            throw r11
        L21:
            kotlin.c.b(r11)
            r4 = r10
            goto L83
        L26:
            kotlin.c.b(r11)
            goto L5d
        L2a:
            kotlin.c.b(r11)
            goto L3c
        L2e:
            kotlin.c.b(r11)
            com.discord.media.utils.MediaResolver r11 = r10.this$0
            r10.label = r5
            java.lang.Object r11 = com.discord.media.utils.MediaResolver.access$checkFreeSpace(r11, r10)
            if (r11 != r0) goto L3c
            goto L97
        L3c:
            com.discord.media.utils.ContentResolverUtils r11 = com.discord.media.utils.ContentResolverUtils.INSTANCE
            com.discord.media.utils.MediaResolver r1 = r10.this$0
            android.content.ContentResolver r1 = com.discord.media.utils.MediaResolver.access$getResolver(r1)
            android.net.Uri r5 = r10.$inputUri
            boolean r1 = r11.isVideo(r1, r5)
            if (r1 == 0) goto L60
            com.discord.media.utils.MediaResolver r11 = r10.this$0
            android.net.Uri r1 = r10.$inputUri
            boolean r2 = r10.$skipVideoTranscode
            com.discord.media.utils.EncodingConfig r3 = r10.$encodingConfig
            r10.label = r4
            java.lang.Object r11 = com.discord.media.utils.MediaResolver.access$handleVideo(r11, r1, r2, r3, r10)
            if (r11 != r0) goto L5d
            goto L97
        L5d:
            android.net.Uri r11 = (android.net.Uri) r11
            return r11
        L60:
            com.discord.media.utils.MediaResolver r1 = r10.this$0
            android.content.ContentResolver r1 = com.discord.media.utils.MediaResolver.access$getResolver(r1)
            android.net.Uri r4 = r10.$inputUri
            boolean r11 = r11.isImage(r1, r4)
            if (r11 == 0) goto L86
            com.discord.media.utils.MediaResolver r4 = r10.this$0
            android.net.Uri r5 = r10.$inputUri
            int r6 = r10.$imageCompressionQuality
            boolean r7 = r10.$isLowQuality
            boolean r8 = r10.$useOriginalIfSmaller
            r10.label = r3
            r9 = r10
            java.lang.Object r11 = com.discord.media.utils.MediaResolver.access$handleImage(r4, r5, r6, r7, r8, r9)
            r4 = r9
            if (r11 != r0) goto L83
            goto L97
        L83:
            android.net.Uri r11 = (android.net.Uri) r11
            return r11
        L86:
            r4 = r10
            com.discord.media.utils.MediaResolver r1 = r4.this$0
            r11 = r2
            android.net.Uri r2 = r4.$inputUri
            r4.label = r11
            r3 = 0
            r5 = 2
            r6 = 0
            java.lang.Object r11 = com.discord.media.utils.MediaResolver.copyToFile$default(r1, r2, r3, r4, r5, r6)
            if (r11 != r0) goto L98
        L97:
            return r0
        L98:
            android.net.Uri r11 = (android.net.Uri) r11
            return r11
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.media.utils.MediaResolver$resolveToUri$2.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Uri> continuation) {
        return ((MediaResolver$resolveToUri$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
