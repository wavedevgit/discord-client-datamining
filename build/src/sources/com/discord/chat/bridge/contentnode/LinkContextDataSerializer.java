package com.discord.chat.bridge.contentnode;

import com.discord.chat.bridge.contentnode.LinkContextData;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonPrimitive;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bÂ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001f\u0010\b\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0005H\u0014¢\u0006\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContextDataSerializer;", "Lht/e;", "Lcom/discord/chat/bridge/contentnode/LinkContextData;", "<init>", "()V", "Lkotlinx/serialization/json/JsonElement;", "element", "Lkotlinx/serialization/KSerializer;", "selectDeserializer", "(Lkotlinx/serialization/json/JsonElement;)Lkotlinx/serialization/KSerializer;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LinkContextDataSerializer extends ht.e {
    @NotNull
    public static final LinkContextDataSerializer INSTANCE = new LinkContextDataSerializer();

    private LinkContextDataSerializer() {
        super(Reflection.getOrCreateKotlinClass(LinkContextData.class));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ht.e
    @NotNull
    public KSerializer selectDeserializer(@NotNull JsonElement element) {
        Intrinsics.checkNotNullParameter(element, "element");
        return element instanceof JsonPrimitive ? LinkContextData.LinkUrl.Companion.serializer() : ht.h.n(element).containsKey("action") ? LinkContextData.LinkContext.Companion.serializer() : LinkContextData.BindDoNothing.INSTANCE.serializer();
    }
}
