package com.discord.media;

import android.net.Uri;
import com.discord.media.utils.MediaResolver;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import wr.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.media.MediaManagerModule$getVideoMetadata$1", f = "MediaManagerModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nMediaManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaManagerModule.kt\ncom/discord/media/MediaManagerModule$getVideoMetadata$1\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,749:1\n216#2,2:750\n*S KotlinDebug\n*F\n+ 1 MediaManagerModule.kt\ncom/discord/media/MediaManagerModule$getVideoMetadata$1\n*L\n217#1:750,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaManagerModule$getVideoMetadata$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Uri $inputUri;
    final /* synthetic */ Promise $promise;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ MediaManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaManagerModule$getVideoMetadata$1(MediaManagerModule mediaManagerModule, Uri uri, Promise promise, Continuation<? super MediaManagerModule$getVideoMetadata$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaManagerModule;
        this.$inputUri = uri;
        this.$promise = promise;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        MediaManagerModule$getVideoMetadata$1 mediaManagerModule$getVideoMetadata$1 = new MediaManagerModule$getVideoMetadata$1(this.this$0, this.$inputUri, this.$promise, continuation);
        mediaManagerModule$getVideoMetadata$1.L$0 = obj;
        return mediaManagerModule$getVideoMetadata$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object b10;
        MediaResolver mediaResolver;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
            MediaManagerModule mediaManagerModule = this.this$0;
            Uri uri = this.$inputUri;
            Promise promise = this.$promise;
            try {
                Result.a aVar = Result.f32005e;
                mediaResolver = mediaManagerModule.mediaResolver;
                Map<String, Object> handleVideoMetadata = mediaResolver.handleVideoMetadata(uri);
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                for (Map.Entry<String, Object> entry : handleVideoMetadata.entrySet()) {
                    String key = entry.getKey();
                    Object value = entry.getValue();
                    if (value instanceof Integer) {
                        createMap.putInt(key, ((Number) value).intValue());
                    } else if (value instanceof Boolean) {
                        createMap.putBoolean(key, ((Boolean) value).booleanValue());
                    } else if (value instanceof String) {
                        createMap.putString(key, (String) value);
                    } else {
                        String name = value.getClass().getName();
                        throw new IllegalArgumentException("Unsupported value type " + name + " for key [" + key + "]");
                    }
                }
                promise.resolve(createMap);
                b10 = Result.b(Unit.f32008a);
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f32005e;
                b10 = Result.b(c.a(th2));
            }
            Promise promise2 = this.$promise;
            Throwable e10 = Result.e(b10);
            if (e10 != null) {
                promise2.reject(e10);
            }
            return Unit.f32008a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaManagerModule$getVideoMetadata$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
