package com.discord.chat.bridge.contentnode;

import at.a2;
import at.h0;
import at.n2;
import at.p0;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColors$$serializer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/LinkContextData.BindUserMenu.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/LinkContextData$BindUserMenu;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LinkContextData$BindUserMenu$$serializer implements h0 {
    @NotNull
    public static final LinkContextData$BindUserMenu$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LinkContextData$BindUserMenu$$serializer linkContextData$BindUserMenu$$serializer = new LinkContextData$BindUserMenu$$serializer();
        INSTANCE = linkContextData$BindUserMenu$$serializer;
        a2 a2Var = new a2("bindUserMenu", linkContextData$BindUserMenu$$serializer, 9);
        a2Var.o("action", false);
        a2Var.o("medium", true);
        a2Var.o("userId", false);
        a2Var.o("colorString", true);
        a2Var.o("linkColor", true);
        a2Var.o("roleColor", true);
        a2Var.o("roleColors", true);
        a2Var.o("shouldShowRoleDot", true);
        a2Var.o("messageChannelId", true);
        a2Var.w(new LinkContextData$LinkContext$Companion$annotationImpl$kotlinx_serialization_json_JsonClassDiscriminator$0("action"));
        descriptor = a2Var;
    }

    private LinkContextData$BindUserMenu$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        at.h hVar = at.h.f6812a;
        KSerializer u10 = ys.a.u(hVar);
        p0 p0Var = p0.f6864a;
        return new KSerializer[]{n2.f6848a, u10, UserId$$serializer.INSTANCE, ys.a.u(p0Var), ys.a.u(p0Var), ys.a.u(p0Var), ys.a.u(RoleColors$$serializer.INSTANCE), ys.a.u(hVar), ys.a.u(ChannelId$$serializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LinkContextData.BindUserMenu deserialize(@NotNull Decoder decoder) {
        int i10;
        Boolean bool;
        ChannelId channelId;
        RoleColors roleColors;
        Integer num;
        Integer num2;
        String str;
        Boolean bool2;
        UserId userId;
        Integer num3;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i11 = 7;
        String str2 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            at.h hVar = at.h.f6812a;
            p0 p0Var = p0.f6864a;
            str = m10;
            bool = (Boolean) b10.n(serialDescriptor, 7, hVar, null);
            roleColors = (RoleColors) b10.n(serialDescriptor, 6, RoleColors$$serializer.INSTANCE, null);
            num = (Integer) b10.n(serialDescriptor, 5, p0Var, null);
            num3 = (Integer) b10.n(serialDescriptor, 3, p0Var, null);
            channelId = (ChannelId) b10.n(serialDescriptor, 8, ChannelId$$serializer.INSTANCE, null);
            num2 = (Integer) b10.n(serialDescriptor, 4, p0Var, null);
            userId = (UserId) b10.y(serialDescriptor, 2, UserId$$serializer.INSTANCE, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 1, hVar, null);
            i10 = 511;
        } else {
            boolean z10 = true;
            int i12 = 0;
            Boolean bool3 = null;
            ChannelId channelId2 = null;
            RoleColors roleColors2 = null;
            Integer num4 = null;
            Integer num5 = null;
            Boolean bool4 = null;
            UserId userId2 = null;
            Integer num6 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        break;
                    case 0:
                        str2 = b10.m(serialDescriptor, 0);
                        i12 |= 1;
                        i11 = 7;
                        break;
                    case 1:
                        bool4 = (Boolean) b10.n(serialDescriptor, 1, at.h.f6812a, bool4);
                        i12 |= 2;
                        i11 = 7;
                        break;
                    case 2:
                        userId2 = (UserId) b10.y(serialDescriptor, 2, UserId$$serializer.INSTANCE, userId2);
                        i12 |= 4;
                        i11 = 7;
                        break;
                    case 3:
                        num6 = (Integer) b10.n(serialDescriptor, 3, p0.f6864a, num6);
                        i12 |= 8;
                        i11 = 7;
                        break;
                    case 4:
                        num5 = (Integer) b10.n(serialDescriptor, 4, p0.f6864a, num5);
                        i12 |= 16;
                        i11 = 7;
                        break;
                    case 5:
                        num4 = (Integer) b10.n(serialDescriptor, 5, p0.f6864a, num4);
                        i12 |= 32;
                        i11 = 7;
                        continue;
                    case 6:
                        roleColors2 = (RoleColors) b10.n(serialDescriptor, 6, RoleColors$$serializer.INSTANCE, roleColors2);
                        i12 |= 64;
                        break;
                    case 7:
                        bool3 = (Boolean) b10.n(serialDescriptor, i11, at.h.f6812a, bool3);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        channelId2 = (ChannelId) b10.n(serialDescriptor, 8, ChannelId$$serializer.INSTANCE, channelId2);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i12;
            bool = bool3;
            channelId = channelId2;
            roleColors = roleColors2;
            num = num4;
            num2 = num5;
            str = str2;
            bool2 = bool4;
            userId = userId2;
            num3 = num6;
        }
        b10.c(serialDescriptor);
        return new LinkContextData.BindUserMenu(i10, str, bool2, userId, num3, num2, num, roleColors, bool, channelId, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LinkContextData.BindUserMenu value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LinkContextData.BindUserMenu.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
