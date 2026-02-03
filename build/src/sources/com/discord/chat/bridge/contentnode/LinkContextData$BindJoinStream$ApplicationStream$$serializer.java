package com.discord.chat.bridge.contentnode;

import at.b0;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import dt.a2;
import dt.h0;
import dt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/LinkContextData.BindJoinStream.ApplicationStream.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindJoinStream$ApplicationStream;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LinkContextData$BindJoinStream$ApplicationStream$$serializer implements h0 {
    @NotNull
    public static final LinkContextData$BindJoinStream$ApplicationStream$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LinkContextData$BindJoinStream$ApplicationStream$$serializer linkContextData$BindJoinStream$ApplicationStream$$serializer = new LinkContextData$BindJoinStream$ApplicationStream$$serializer();
        INSTANCE = linkContextData$BindJoinStream$ApplicationStream$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.contentnode.LinkContextData.BindJoinStream.ApplicationStream", linkContextData$BindJoinStream$ApplicationStream$$serializer, 5);
        a2Var.o("ownerId", false);
        a2Var.o("channelId", false);
        a2Var.o("guildId", true);
        a2Var.o("streamType", false);
        a2Var.o("discoverable", true);
        descriptor = a2Var;
    }

    private LinkContextData$BindJoinStream$ApplicationStream$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{UserId$$serializer.INSTANCE, ChannelId$$serializer.INSTANCE, bt.a.u(GuildId$$serializer.INSTANCE), n2.f20978a, bt.a.u(dt.h.f20942a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LinkContextData.BindJoinStream.ApplicationStream deserialize(@NotNull Decoder decoder) {
        int i10;
        UserId userId;
        ChannelId channelId;
        GuildId guildId;
        String str;
        Boolean bool;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        UserId userId2 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 3);
            userId = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, null);
            str = m10;
            bool = (Boolean) b10.n(serialDescriptor, 4, dt.h.f20942a, null);
            guildId = (GuildId) b10.n(serialDescriptor, 2, GuildId$$serializer.INSTANCE, null);
            channelId = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, null);
            i10 = 31;
        } else {
            boolean z10 = true;
            int i11 = 0;
            ChannelId channelId2 = null;
            GuildId guildId2 = null;
            String str2 = null;
            Boolean bool2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    userId2 = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, userId2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    channelId2 = (ChannelId) b10.y(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, channelId2);
                    i11 |= 2;
                } else if (o10 == 2) {
                    guildId2 = (GuildId) b10.n(serialDescriptor, 2, GuildId$$serializer.INSTANCE, guildId2);
                    i11 |= 4;
                } else if (o10 == 3) {
                    str2 = b10.m(serialDescriptor, 3);
                    i11 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    bool2 = (Boolean) b10.n(serialDescriptor, 4, dt.h.f20942a, bool2);
                    i11 |= 16;
                }
            }
            i10 = i11;
            userId = userId2;
            channelId = channelId2;
            guildId = guildId2;
            str = str2;
            bool = bool2;
        }
        b10.c(serialDescriptor);
        return new LinkContextData.BindJoinStream.ApplicationStream(i10, userId, channelId, guildId, str, bool, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LinkContextData.BindJoinStream.ApplicationStream value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LinkContextData.BindJoinStream.ApplicationStream.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
