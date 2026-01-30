package com.discord.emoji;

import android.content.Context;
import bt.b0;
import com.discord.emoji.UnicodeEmojis;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.serialization.json.Json;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Lcom/discord/emoji/UnicodeEmojis$EmojiCategories;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.emoji.UnicodeEmojis$loadData$2", f = "UnicodeEmojis.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nUnicodeEmojis.kt\nKotlin\n*S Kotlin\n*F\n+ 1 UnicodeEmojis.kt\ncom/discord/emoji/UnicodeEmojis$loadData$2\n+ 2 JvmStreams.kt\nkotlinx/serialization/json/JvmStreamsKt\n*L\n1#1,68:1\n80#2:69\n*S KotlinDebug\n*F\n+ 1 UnicodeEmojis.kt\ncom/discord/emoji/UnicodeEmojis$loadData$2\n*L\n34#1:69\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class UnicodeEmojis$loadData$2 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super UnicodeEmojis.EmojiCategories>, Object> {
    final /* synthetic */ Context $context;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public UnicodeEmojis$loadData$2(Context context, Continuation<? super UnicodeEmojis$loadData$2> continuation) {
        super(2, continuation);
        this.$context = context;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new UnicodeEmojis$loadData$2(this.$context, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Json json;
        or.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            InputStream openRawResource = this.$context.getResources().openRawResource(R.raw.emojis_json);
            try {
                GZIPInputStream gZIPInputStream = new GZIPInputStream(openRawResource);
                json = UnicodeEmojis.emojiJsonParser;
                json.a();
                UnicodeEmojis.EmojiCategories emojiCategories = (UnicodeEmojis.EmojiCategories) b0.a(json, UnicodeEmojis.EmojiCategories.Companion.serializer(), gZIPInputStream);
                tr.c.a(gZIPInputStream, null);
                tr.c.a(openRawResource, null);
                return emojiCategories;
            } finally {
            }
        } else {
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super UnicodeEmojis.EmojiCategories> continuation) {
        return ((UnicodeEmojis$loadData$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
