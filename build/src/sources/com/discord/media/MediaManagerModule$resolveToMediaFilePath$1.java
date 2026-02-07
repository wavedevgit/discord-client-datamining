package com.discord.media;

import android.net.Uri;
import com.discord.crash_reporting.CrashReporting;
import com.discord.media.utils.EncodingConfig;
import com.discord.media.utils.MediaResolver;
import com.facebook.react.bridge.Promise;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import qr.v;
import wr.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.media.MediaManagerModule$resolveToMediaFilePath$1", f = "MediaManagerModule.kt", l = {145}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaManagerModule$resolveToMediaFilePath$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ EncodingConfig $encodingConfig;
    final /* synthetic */ int $imageCompressionQuality;
    final /* synthetic */ Uri $inputUri;
    final /* synthetic */ boolean $isLowQuality;
    final /* synthetic */ Promise $promise;
    final /* synthetic */ boolean $skipVideoTranscode;
    final /* synthetic */ String $uri;
    final /* synthetic */ boolean $useOriginalIfSmaller;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ MediaManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaManagerModule$resolveToMediaFilePath$1(MediaManagerModule mediaManagerModule, Uri uri, int i10, boolean z10, boolean z11, boolean z12, EncodingConfig encodingConfig, Promise promise, String str, Continuation<? super MediaManagerModule$resolveToMediaFilePath$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaManagerModule;
        this.$inputUri = uri;
        this.$imageCompressionQuality = i10;
        this.$isLowQuality = z10;
        this.$skipVideoTranscode = z11;
        this.$useOriginalIfSmaller = z12;
        this.$encodingConfig = encodingConfig;
        this.$promise = promise;
        this.$uri = str;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        MediaManagerModule$resolveToMediaFilePath$1 mediaManagerModule$resolveToMediaFilePath$1 = new MediaManagerModule$resolveToMediaFilePath$1(this.this$0, this.$inputUri, this.$imageCompressionQuality, this.$isLowQuality, this.$skipVideoTranscode, this.$useOriginalIfSmaller, this.$encodingConfig, this.$promise, this.$uri, continuation);
        mediaManagerModule$resolveToMediaFilePath$1.L$0 = obj;
        return mediaManagerModule$resolveToMediaFilePath$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object b10;
        MediaResolver mediaResolver;
        Promise promise;
        MediaResolver mediaResolver2;
        Object resolveToUri$media_release;
        Object f10 = b.f();
        int i10 = this.label;
        try {
            if (i10 != 0) {
                if (i10 == 1) {
                    Promise promise2 = (Promise) this.L$0;
                    c.b(obj);
                    promise = promise2;
                    resolveToUri$media_release = obj;
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
                MediaManagerModule mediaManagerModule = this.this$0;
                Uri uri = this.$inputUri;
                int i11 = this.$imageCompressionQuality;
                boolean z10 = this.$isLowQuality;
                boolean z11 = this.$skipVideoTranscode;
                boolean z12 = this.$useOriginalIfSmaller;
                EncodingConfig encodingConfig = this.$encodingConfig;
                promise = this.$promise;
                Result.a aVar = Result.f32053e;
                mediaResolver2 = mediaManagerModule.mediaResolver;
                this.L$0 = promise;
                this.label = 1;
                resolveToUri$media_release = mediaResolver2.resolveToUri$media_release(uri, i11, z10, z11, z12, encodingConfig, this);
                if (resolveToUri$media_release == f10) {
                    return f10;
                }
            }
            promise.resolve(((Uri) resolveToUri$media_release).toString());
            b10 = Result.b(Unit.f32056a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(c.a(th2));
        }
        Promise promise3 = this.$promise;
        String str = this.$uri;
        MediaManagerModule mediaManagerModule2 = this.this$0;
        Uri uri2 = this.$inputUri;
        Throwable e10 = Result.e(b10);
        if (e10 != null) {
            if (e10 instanceof CancellationException) {
                promise3.reject(e10);
            }
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            Pair a10 = v.a("uri", str);
            mediaResolver = mediaManagerModule2.mediaResolver;
            CrashReporting.addBreadcrumb$default(crashReporting, "Failed to resolve URI to file", o0.m(a10, v.a("mimeType", String.valueOf(mediaResolver.getMimeType(uri2)))), null, null, false, 28, null);
            CrashReporting.captureException$default(crashReporting, e10, false, 2, null);
            promise3.reject(e10);
        }
        return Unit.f32056a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaManagerModule$resolveToMediaFilePath$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
