package com.discord.notifications.renderer.utils;

import android.content.Context;
import android.net.Uri;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\u0014\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0018\u0002\u0010\u0000\u001a\u0018\u0012\f\u0012\n \u0003*\u0004\u0018\u00010\u00020\u0002\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0001*\u00020\u0005H\n"}, d2 = {"<anonymous>", "Lkotlin/Pair;", "Landroid/net/Uri;", "kotlin.jvm.PlatformType", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.notifications.renderer.utils.NotificationImageCacheKt$storeRemoteImageViaFileProvider$2", f = "NotificationImageCache.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nNotificationImageCache.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationImageCache.kt\ncom/discord/notifications/renderer/utils/NotificationImageCacheKt$storeRemoteImageViaFileProvider$2\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,81:1\n1#2:82\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationImageCacheKt$storeRemoteImageViaFileProvider$2 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Pair<? extends Uri, ? extends String>>, Object> {
    final /* synthetic */ Context $context;
    final /* synthetic */ String $imageUrl;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public NotificationImageCacheKt$storeRemoteImageViaFileProvider$2(Context context, String str, Continuation<? super NotificationImageCacheKt$storeRemoteImageViaFileProvider$2> continuation) {
        super(2, continuation);
        this.$context = context;
        this.$imageUrl = str;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new NotificationImageCacheKt$storeRemoteImageViaFileProvider$2(this.$context, this.$imageUrl, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x007f  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00c1 A[Catch: all -> 0x0040, IOException -> 0x0153, TryCatch #4 {IOException -> 0x0153, all -> 0x0040, blocks: (B:6:0x0022, B:10:0x002c, B:12:0x0034, B:17:0x0046, B:19:0x0050, B:21:0x0056, B:24:0x005e, B:26:0x0064, B:35:0x0075, B:38:0x0081, B:40:0x00c1, B:41:0x00c8, B:43:0x00ce, B:49:0x00e0, B:46:0x00d5, B:48:0x00dd, B:47:0x00da), top: B:88:0x0022 }] */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r13) {
        /*
            Method dump skipped, instructions count: 353
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.renderer.utils.NotificationImageCacheKt$storeRemoteImageViaFileProvider$2.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Pair<? extends Uri, String>> continuation) {
        return ((NotificationImageCacheKt$storeRemoteImageViaFileProvider$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
