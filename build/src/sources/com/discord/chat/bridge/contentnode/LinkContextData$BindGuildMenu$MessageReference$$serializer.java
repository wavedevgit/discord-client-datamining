package com.discord.chat.bridge.contentnode;

import at.b0;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import dt.a2;
import dt.h0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/LinkContextData.BindGuildMenu.MessageReference.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindGuildMenu$MessageReference;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LinkContextData$BindGuildMenu$MessageReference$$serializer implements h0 {
    @NotNull
    public static final LinkContextData$BindGuildMenu$MessageReference$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LinkContextData$BindGuildMenu$MessageReference$$serializer linkContextData$BindGuildMenu$MessageReference$$serializer = new LinkContextData$BindGuildMenu$MessageReference$$serializer();
        INSTANCE = linkContextData$BindGuildMenu$MessageReference$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.contentnode.LinkContextData.BindGuildMenu.MessageReference", linkContextData$BindGuildMenu$MessageReference$$serializer, 2);
        a2Var.o("channel_id", false);
        a2Var.o("guild_id", true);
        descriptor = a2Var;
    }

    private LinkContextData$BindGuildMenu$MessageReference$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{ChannelId$$serializer.INSTANCE, bt.a.u(GuildId$$serializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LinkContextData.BindGuildMenu.MessageReference deserialize(@NotNull Decoder decoder) {
        int i10;
        ChannelId channelId;
        GuildId guildId;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        ChannelId channelId2 = null;
        if (b10.p()) {
            channelId = (ChannelId) b10.y(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, null);
            guildId = (GuildId) b10.n(serialDescriptor, 1, GuildId$$serializer.INSTANCE, null);
            i10 = 3;
        } else {
            boolean z10 = true;
            int i11 = 0;
            GuildId guildId2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    channelId2 = (ChannelId) b10.y(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, channelId2);
                    i11 |= 1;
                } else if (o10 != 1) {
                    throw new b0(o10);
                } else {
                    guildId2 = (GuildId) b10.n(serialDescriptor, 1, GuildId$$serializer.INSTANCE, guildId2);
                    i11 |= 2;
                }
            }
            i10 = i11;
            channelId = channelId2;
            guildId = guildId2;
        }
        b10.c(serialDescriptor);
        return new LinkContextData.BindGuildMenu.MessageReference(i10, channelId, guildId, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LinkContextData.BindGuildMenu.MessageReference value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LinkContextData.BindGuildMenu.MessageReference.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
