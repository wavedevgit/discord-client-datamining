package com.discord.media;

import android.net.Uri;
import com.discord.logging.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import java.io.InputStream;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import rr.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0012\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.media.MediaManagerModule$loadImageDataFromUri$2", f = "MediaManagerModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nMediaManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaManagerModule.kt\ncom/discord/media/MediaManagerModule$loadImageDataFromUri$2\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,749:1\n29#2:750\n*S KotlinDebug\n*F\n+ 1 MediaManagerModule.kt\ncom/discord/media/MediaManagerModule$loadImageDataFromUri$2\n*L\n725#1:750\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaManagerModule$loadImageDataFromUri$2 extends k implements Function2<CoroutineScope, Continuation<? super byte[]>, Object> {
    final /* synthetic */ String $uri;
    int label;
    final /* synthetic */ MediaManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaManagerModule$loadImageDataFromUri$2(String str, MediaManagerModule mediaManagerModule, Continuation<? super MediaManagerModule$loadImageDataFromUri$2> continuation) {
        super(2, continuation);
        this.$uri = str;
        this.this$0 = mediaManagerModule;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaManagerModule$loadImageDataFromUri$2(this.$uri, this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ReactApplicationContext reactApplicationContext;
        int i10;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            try {
                Uri parse = Uri.parse(this.$uri);
                reactApplicationContext = this.this$0.getReactApplicationContext();
                InputStream openInputStream = reactApplicationContext.getContentResolver().openInputStream(parse);
                if (openInputStream == null) {
                    return null;
                }
                try {
                    i10 = openInputStream.available();
                } catch (Exception unused) {
                    i10 = 0;
                }
                if (i10 > 52428800) {
                    Log log = Log.INSTANCE;
                    Log.w$default(log, "MediaManagerModule", "Image file too large: " + i10 + " bytes (max: 52428800)", (Throwable) null, 4, (Object) null);
                    wr.c.a(openInputStream, null);
                    return null;
                }
                byte[] c10 = wr.b.c(openInputStream);
                wr.c.a(openInputStream, null);
                return c10;
            } catch (Exception e10) {
                Log log2 = Log.INSTANCE;
                String str = this.$uri;
                log2.e("MediaManagerModule", "Failed to load image data from URI: " + str, e10);
                return null;
            }
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super byte[]> continuation) {
        return ((MediaManagerModule$loadImageDataFromUri$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
