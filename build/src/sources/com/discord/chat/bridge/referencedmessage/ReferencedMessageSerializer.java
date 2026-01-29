package com.discord.chat.bridge.referencedmessage;

import bt.e;
import bt.h;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonPrimitive;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0005H\u0014¢\u0006\u0004\b\b\u0010\tR\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u000b\u0010\fR\u0014\u0010\r\u001a\u00020\n8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\r\u0010\f¨\u0006\u000e"}, d2 = {"Lcom/discord/chat/bridge/referencedmessage/ReferencedMessageSerializer;", "Lbt/e;", "Lcom/discord/chat/bridge/referencedmessage/ReferencedMessage;", "<init>", "()V", "Lkotlinx/serialization/json/JsonElement;", "element", "Lkotlinx/serialization/DeserializationStrategy;", "selectDeserializer", "(Lkotlinx/serialization/json/JsonElement;)Lkotlinx/serialization/DeserializationStrategy;", "", "STATE_LOADED", "Ljava/lang/String;", "STATE_SYSTEM", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ReferencedMessageSerializer extends e {
    @NotNull
    public static final ReferencedMessageSerializer INSTANCE = new ReferencedMessageSerializer();
    @NotNull
    private static final String STATE_LOADED = "0";
    @NotNull
    private static final String STATE_SYSTEM = "1";

    private ReferencedMessageSerializer() {
        super(Reflection.getOrCreateKotlinClass(ReferencedMessage.class));
    }

    @Override // bt.e
    @NotNull
    protected DeserializationStrategy selectDeserializer(@NotNull JsonElement element) {
        String str;
        JsonPrimitive o10;
        Intrinsics.checkNotNullParameter(element, "element");
        JsonElement jsonElement = (JsonElement) h.n(element).get("state");
        if (jsonElement != null && (o10 = h.o(jsonElement)) != null) {
            str = o10.b();
        } else {
            str = null;
        }
        if (Intrinsics.areEqual(str, STATE_LOADED)) {
            return LoadedReferencedMessage.Companion.serializer();
        }
        if (Intrinsics.areEqual(str, STATE_SYSTEM)) {
            return SystemReferencedMessage.Companion.serializer();
        }
        throw new IllegalArgumentException("unsupported state json: " + str);
    }
}
