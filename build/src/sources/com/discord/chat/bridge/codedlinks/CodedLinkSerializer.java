package com.discord.chat.bridge.codedlinks;

import bt.e;
import bt.h;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonPrimitive;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0005H\u0014¢\u0006\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/CodedLinkSerializer;", "Lbt/e;", "Lcom/discord/chat/bridge/codedlinks/CodedLinkEmbed;", "<init>", "()V", "Lkotlinx/serialization/json/JsonElement;", "element", "Lkotlinx/serialization/DeserializationStrategy;", "selectDeserializer", "(Lkotlinx/serialization/json/JsonElement;)Lkotlinx/serialization/DeserializationStrategy;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CodedLinkSerializer extends e {
    @NotNull
    public static final CodedLinkSerializer INSTANCE = new CodedLinkSerializer();

    private CodedLinkSerializer() {
        super(Reflection.getOrCreateKotlinClass(CodedLinkEmbed.class));
    }

    @Override // bt.e
    @NotNull
    protected DeserializationStrategy selectDeserializer(@NotNull JsonElement element) {
        String str;
        JsonPrimitive o10;
        Intrinsics.checkNotNullParameter(element, "element");
        JsonElement jsonElement = (JsonElement) h.n(element).get("extendedType");
        if (jsonElement != null && (o10 = h.o(jsonElement)) != null) {
            str = o10.b();
        } else {
            str = null;
        }
        if (Intrinsics.areEqual(str, String.valueOf(CodedLinkExtendedType.GUILD_SCHEDULED_EVENT.getSerialNumber()))) {
            return GuildEventInviteEmbedImpl.Companion.serializer();
        }
        if (Intrinsics.areEqual(str, String.valueOf(CodedLinkExtendedType.GUILD_INVITE_DISABLED.getSerialNumber()))) {
            return GuildInviteDisabledEmbedImpl.Companion.serializer();
        }
        if (Intrinsics.areEqual(str, String.valueOf(CodedLinkExtendedType.APP_MESSAGE_EMBED.getSerialNumber()))) {
            return AppMessageEmbedImpl.Companion.serializer();
        }
        if (Intrinsics.areEqual(str, String.valueOf(CodedLinkExtendedType.EMBEDDED_ACTIVITY_INVITE.getSerialNumber()))) {
            return EmbeddedActivityInviteEmbedImpl.Companion.serializer();
        }
        if (Intrinsics.areEqual(str, String.valueOf(CodedLinkExtendedType.GUILD_PROFILE_INVITE.getSerialNumber()))) {
            return GuildProfileInviteEmbedImpl.Companion.serializer();
        }
        return GuildInviteEmbedImpl.Companion.serializer();
    }
}
