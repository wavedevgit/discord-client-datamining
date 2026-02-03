package com.discord.media.utils;

import com.discord.media.utils.MediaResolver;
import java.io.File;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.utils.MediaResolver$checkFreeSpace$2", f = "MediaResolver.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nMediaResolver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaResolver.kt\ncom/discord/media/utils/MediaResolver$checkFreeSpace$2\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,260:1\n13472#2:261\n13472#2,2:262\n13473#2:264\n*S KotlinDebug\n*F\n+ 1 MediaResolver.kt\ncom/discord/media/utils/MediaResolver$checkFreeSpace$2\n*L\n82#1:261\n86#1:262,2\n82#1:264\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaResolver$checkFreeSpace$2 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ MediaResolver this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaResolver$checkFreeSpace$2(MediaResolver mediaResolver, Continuation<? super MediaResolver$checkFreeSpace$2> continuation) {
        super(2, continuation);
        this.this$0 = mediaResolver;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaResolver$checkFreeSpace$2(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        File file;
        File file2;
        MediaResolver.Companion companion;
        File file3;
        File[] listFiles;
        pr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            file = this.this$0.cacheDir;
            file2 = this.this$0.cacheDir;
            if (file.getUsableSpace() / file2.getTotalSpace() < 0.2d) {
                long currentTimeMillis = System.currentTimeMillis();
                companion = MediaResolver.Companion;
                long half_day_millis = currentTimeMillis - companion.getHALF_DAY_MILLIS();
                file3 = this.this$0.cacheDir;
                File[] listFiles2 = file3.listFiles();
                if (listFiles2 != null) {
                    for (File file4 : listFiles2) {
                        if (file4.isFile()) {
                            String name = file4.getName();
                            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                            if (StringsKt.P(name, "temp_", false, 2, null) && file4.lastModified() < half_day_millis) {
                                file4.delete();
                            }
                        }
                        if (file4.isDirectory() && Intrinsics.areEqual(file4.getName(), "compressor") && (listFiles = file4.listFiles()) != null) {
                            for (File file5 : listFiles) {
                                if (file5.isFile() && file5.lastModified() < half_day_millis) {
                                    file5.delete();
                                }
                            }
                        }
                    }
                }
            }
            return Unit.f33074a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaResolver$checkFreeSpace$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
