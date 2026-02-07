package com.discord.chat.bridge.contentnode;

import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColors$$serializer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.RoleId;
import com.discord.primitives.RoleId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import java.util.List;
import jt.a2;
import jt.h0;
import jt.n2;
import jt.p0;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/UserOrRoleMentionContentNode.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/contentnode/UserOrRoleMentionContentNode;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/UserOrRoleMentionContentNode;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/UserOrRoleMentionContentNode;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class UserOrRoleMentionContentNode$$serializer implements h0 {
    @NotNull
    public static final UserOrRoleMentionContentNode$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        UserOrRoleMentionContentNode$$serializer userOrRoleMentionContentNode$$serializer = new UserOrRoleMentionContentNode$$serializer();
        INSTANCE = userOrRoleMentionContentNode$$serializer;
        a2 a2Var = new a2("mention", userOrRoleMentionContentNode$$serializer, 9);
        a2Var.o("channelId", true);
        a2Var.o("userId", true);
        a2Var.o("roleName", true);
        a2Var.o("parsedUserId", true);
        a2Var.o("roleColor", true);
        a2Var.o("roleColors", true);
        a2Var.o("guildId", true);
        a2Var.o("roleId", true);
        a2Var.o("content", false);
        descriptor = a2Var;
    }

    private UserOrRoleMentionContentNode$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] access$get$childSerializers$cp = UserOrRoleMentionContentNode.access$get$childSerializers$cp();
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{gt.a.u(ChannelId$$serializer.INSTANCE), gt.a.u(UserId$$serializer.INSTANCE), gt.a.u(n2Var), gt.a.u(n2Var), p0.f31105a, gt.a.u(RoleColors$$serializer.INSTANCE), gt.a.u(GuildId$$serializer.INSTANCE), gt.a.u(RoleId$$serializer.INSTANCE), access$get$childSerializers$cp[8].getValue()};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final UserOrRoleMentionContentNode deserialize(@NotNull Decoder decoder) {
        int i10;
        List list;
        GuildId guildId;
        RoleId roleId;
        RoleColors roleColors;
        String str;
        String str2;
        int i11;
        ChannelId channelId;
        UserId userId;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        Lazy[] access$get$childSerializers$cp = UserOrRoleMentionContentNode.access$get$childSerializers$cp();
        int i12 = 7;
        if (b10.p()) {
            n2 n2Var = n2.f31089a;
            int i13 = b10.i(serialDescriptor, 4);
            list = (List) b10.y(serialDescriptor, 8, (DeserializationStrategy) access$get$childSerializers$cp[8].getValue(), null);
            channelId = (ChannelId) b10.n(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, null);
            roleId = (RoleId) b10.n(serialDescriptor, 7, RoleId$$serializer.INSTANCE, null);
            guildId = (GuildId) b10.n(serialDescriptor, 6, GuildId$$serializer.INSTANCE, null);
            roleColors = (RoleColors) b10.n(serialDescriptor, 5, RoleColors$$serializer.INSTANCE, null);
            str = (String) b10.n(serialDescriptor, 3, n2Var, null);
            i10 = i13;
            str2 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            i11 = 511;
            userId = (UserId) b10.n(serialDescriptor, 1, UserId$$serializer.INSTANCE, null);
        } else {
            boolean z10 = true;
            int i14 = 0;
            List list2 = null;
            GuildId guildId2 = null;
            RoleId roleId2 = null;
            RoleColors roleColors2 = null;
            String str3 = null;
            ChannelId channelId2 = null;
            UserId userId2 = null;
            int i15 = 0;
            String str4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        break;
                    case 0:
                        channelId2 = (ChannelId) b10.n(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, channelId2);
                        i15 |= 1;
                        i12 = 7;
                        break;
                    case 1:
                        userId2 = (UserId) b10.n(serialDescriptor, 1, UserId$$serializer.INSTANCE, userId2);
                        i15 |= 2;
                        i12 = 7;
                        break;
                    case 2:
                        str4 = (String) b10.n(serialDescriptor, 2, n2.f31089a, str4);
                        i15 |= 4;
                        i12 = 7;
                        break;
                    case 3:
                        str3 = (String) b10.n(serialDescriptor, 3, n2.f31089a, str3);
                        i15 |= 8;
                        i12 = 7;
                        break;
                    case 4:
                        i14 = b10.i(serialDescriptor, 4);
                        i15 |= 16;
                        i12 = 7;
                        break;
                    case 5:
                        roleColors2 = (RoleColors) b10.n(serialDescriptor, 5, RoleColors$$serializer.INSTANCE, roleColors2);
                        i15 |= 32;
                        i12 = 7;
                        break;
                    case 6:
                        guildId2 = (GuildId) b10.n(serialDescriptor, 6, GuildId$$serializer.INSTANCE, guildId2);
                        i15 |= 64;
                        i12 = 7;
                        continue;
                    case 7:
                        roleId2 = (RoleId) b10.n(serialDescriptor, i12, RoleId$$serializer.INSTANCE, roleId2);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        list2 = (List) b10.y(serialDescriptor, 8, (DeserializationStrategy) access$get$childSerializers$cp[8].getValue(), list2);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i14;
            list = list2;
            guildId = guildId2;
            roleId = roleId2;
            roleColors = roleColors2;
            str = str3;
            str2 = str4;
            i11 = i15;
            channelId = channelId2;
            userId = userId2;
        }
        b10.c(serialDescriptor);
        return new UserOrRoleMentionContentNode(i11, channelId, userId, str2, str, i10, roleColors, guildId, roleId, list, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull UserOrRoleMentionContentNode value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        UserOrRoleMentionContentNode.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
