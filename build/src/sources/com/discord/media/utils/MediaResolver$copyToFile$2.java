package com.discord.media.utils;

import android.content.ContentResolver;
import android.net.Uri;
import java.io.File;
import java.io.InputStream;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/net/Uri;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.utils.MediaResolver$copyToFile$2", f = "MediaResolver.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nMediaResolver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaResolver.kt\ncom/discord/media/utils/MediaResolver$copyToFile$2\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,260:1\n36#2:261\n*S KotlinDebug\n*F\n+ 1 MediaResolver.kt\ncom/discord/media/utils/MediaResolver$copyToFile$2\n*L\n238#1:261\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaResolver$copyToFile$2 extends k implements Function2<CoroutineScope, Continuation<? super Uri>, Object> {
    final /* synthetic */ File $targetFile;
    final /* synthetic */ Uri $uri;
    int label;
    final /* synthetic */ MediaResolver this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaResolver$copyToFile$2(File file, MediaResolver mediaResolver, Uri uri, Continuation<? super MediaResolver$copyToFile$2> continuation) {
        super(2, continuation);
        this.$targetFile = file;
        this.this$0 = mediaResolver;
        this.$uri = uri;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaResolver$copyToFile$2(this.$targetFile, this.this$0, this.$uri, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ContentResolver resolver;
        ContentResolver resolver2;
        rr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            File file = this.$targetFile;
            if (file == null) {
                ContentResolverUtils contentResolverUtils = ContentResolverUtils.INSTANCE;
                resolver2 = this.this$0.getResolver();
                file = ContentResolverUtils.createTempFile$default(contentResolverUtils, resolver2, this.$uri, null, null, 6, null);
            }
            MediaResolver mediaResolver = this.this$0;
            Uri uri = this.$uri;
            resolver = mediaResolver.getResolver();
            InputStream openInputStream = resolver.openInputStream(uri);
            if (openInputStream != null) {
                try {
                    FileUtilsKt.writeTo(openInputStream, file);
                    Unit unit = Unit.f32464a;
                    wr.c.a(openInputStream, null);
                } finally {
                }
            }
            return Uri.fromFile(file);
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Uri> continuation) {
        return ((MediaResolver$copyToFile$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
