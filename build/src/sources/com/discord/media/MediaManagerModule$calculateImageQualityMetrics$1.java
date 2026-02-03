package com.discord.media;

import com.facebook.react.bridge.Promise;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.media.MediaManagerModule$calculateImageQualityMetrics$1", f = "MediaManagerModule.kt", l = {507, 508, 541, 542, 555}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaManagerModule$calculateImageQualityMetrics$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $compressedUri;
    final /* synthetic */ String $originalUri;
    final /* synthetic */ Promise $promise;
    private /* synthetic */ Object L$0;
    Object L$1;
    Object L$2;
    Object L$3;
    Object L$4;
    int label;
    final /* synthetic */ MediaManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaManagerModule$calculateImageQualityMetrics$1(MediaManagerModule mediaManagerModule, String str, String str2, Promise promise, Continuation<? super MediaManagerModule$calculateImageQualityMetrics$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaManagerModule;
        this.$originalUri = str;
        this.$compressedUri = str2;
        this.$promise = promise;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        MediaManagerModule$calculateImageQualityMetrics$1 mediaManagerModule$calculateImageQualityMetrics$1 = new MediaManagerModule$calculateImageQualityMetrics$1(this.this$0, this.$originalUri, this.$compressedUri, this.$promise, continuation);
        mediaManagerModule$calculateImageQualityMetrics$1.L$0 = obj;
        return mediaManagerModule$calculateImageQualityMetrics$1;
    }

    /* JADX WARN: Removed duplicated region for block: B:39:0x00e0 A[Catch: all -> 0x0027, TryCatch #0 {all -> 0x0027, blocks: (B:10:0x0020, B:69:0x01c8, B:71:0x01cc, B:75:0x026b, B:72:0x01d3, B:17:0x0042, B:60:0x0182, B:62:0x0186, B:64:0x019e, B:65:0x01b4, B:20:0x005b, B:57:0x016f, B:23:0x0078, B:37:0x00dc, B:39:0x00e0, B:41:0x00f8, B:42:0x010e, B:45:0x0126, B:48:0x013e, B:50:0x014c, B:53:0x015a, B:73:0x0206, B:74:0x022e, B:26:0x0091, B:33:0x00c1, B:29:0x00a8), top: B:83:0x0010 }] */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00f6  */
    /* JADX WARN: Removed duplicated region for block: B:59:0x0181  */
    /* JADX WARN: Removed duplicated region for block: B:62:0x0186 A[Catch: all -> 0x0027, TryCatch #0 {all -> 0x0027, blocks: (B:10:0x0020, B:69:0x01c8, B:71:0x01cc, B:75:0x026b, B:72:0x01d3, B:17:0x0042, B:60:0x0182, B:62:0x0186, B:64:0x019e, B:65:0x01b4, B:20:0x005b, B:57:0x016f, B:23:0x0078, B:37:0x00dc, B:39:0x00e0, B:41:0x00f8, B:42:0x010e, B:45:0x0126, B:48:0x013e, B:50:0x014c, B:53:0x015a, B:73:0x0206, B:74:0x022e, B:26:0x0091, B:33:0x00c1, B:29:0x00a8), top: B:83:0x0010 }] */
    /* JADX WARN: Removed duplicated region for block: B:63:0x019c  */
    /* JADX WARN: Removed duplicated region for block: B:71:0x01cc A[Catch: all -> 0x0027, TryCatch #0 {all -> 0x0027, blocks: (B:10:0x0020, B:69:0x01c8, B:71:0x01cc, B:75:0x026b, B:72:0x01d3, B:17:0x0042, B:60:0x0182, B:62:0x0186, B:64:0x019e, B:65:0x01b4, B:20:0x005b, B:57:0x016f, B:23:0x0078, B:37:0x00dc, B:39:0x00e0, B:41:0x00f8, B:42:0x010e, B:45:0x0126, B:48:0x013e, B:50:0x014c, B:53:0x015a, B:73:0x0206, B:74:0x022e, B:26:0x0091, B:33:0x00c1, B:29:0x00a8), top: B:83:0x0010 }] */
    /* JADX WARN: Removed duplicated region for block: B:72:0x01d3 A[Catch: all -> 0x0027, TryCatch #0 {all -> 0x0027, blocks: (B:10:0x0020, B:69:0x01c8, B:71:0x01cc, B:75:0x026b, B:72:0x01d3, B:17:0x0042, B:60:0x0182, B:62:0x0186, B:64:0x019e, B:65:0x01b4, B:20:0x005b, B:57:0x016f, B:23:0x0078, B:37:0x00dc, B:39:0x00e0, B:41:0x00f8, B:42:0x010e, B:45:0x0126, B:48:0x013e, B:50:0x014c, B:53:0x015a, B:73:0x0206, B:74:0x022e, B:26:0x0091, B:33:0x00c1, B:29:0x00a8), top: B:83:0x0010 }] */
    /* JADX WARN: Removed duplicated region for block: B:80:0x0288  */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r26) {
        /*
            Method dump skipped, instructions count: 719
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.media.MediaManagerModule$calculateImageQualityMetrics$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaManagerModule$calculateImageQualityMetrics$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
