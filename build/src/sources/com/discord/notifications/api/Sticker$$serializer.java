package com.discord.notifications.api;

import com.discord.notifications.api.StickerFormatType;
import com.discord.notifications.api.StickerType;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.StickerId;
import com.discord.primitives.StickerId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import gt.a;
import jt.a2;
import jt.h;
import jt.h0;
import jt.n2;
import jt.z0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/notifications/api/Sticker.$serializer", "Ljt/h0;", "Lcom/discord/notifications/api/Sticker;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/notifications/api/Sticker;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/notifications/api/Sticker;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class Sticker$$serializer implements h0 {
    @NotNull
    public static final Sticker$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        Sticker$$serializer sticker$$serializer = new Sticker$$serializer();
        INSTANCE = sticker$$serializer;
        a2 a2Var = new a2("com.discord.notifications.api.Sticker", sticker$$serializer, 9);
        a2Var.o(StackTraceHelper.ID_KEY, true);
        a2Var.o(StackTraceHelper.NAME_KEY, false);
        a2Var.o("pack_id", true);
        a2Var.o("guild_id", true);
        a2Var.o("description", true);
        a2Var.o("format_type", true);
        a2Var.o("tags", true);
        a2Var.o("type", true);
        a2Var.o("available", true);
        descriptor = a2Var;
    }

    private Sticker$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = a.u(z0.f31115a);
        KSerializer u11 = a.u(GuildId$$serializer.INSTANCE);
        KSerializer u12 = a.u(h.f31005a);
        n2 n2Var = n2.f31041a;
        return new KSerializer[]{StickerId$$serializer.INSTANCE, n2Var, u10, u11, n2Var, StickerFormatType.Serializer.INSTANCE, n2Var, StickerType.Serializer.INSTANCE, u12};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final Sticker deserialize(@NotNull Decoder decoder) {
        int i10;
        Boolean bool;
        StickerType stickerType;
        StickerFormatType stickerFormatType;
        StickerId stickerId;
        String str;
        Long l10;
        GuildId guildId;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i11 = 7;
        int i12 = 6;
        StickerId stickerId2 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 4);
            String m12 = b10.m(serialDescriptor, 6);
            stickerId = (StickerId) b10.y(serialDescriptor, 0, StickerId$$serializer.INSTANCE, null);
            stickerType = (StickerType) b10.y(serialDescriptor, 7, StickerType.Serializer.INSTANCE, null);
            str3 = m12;
            stickerFormatType = (StickerFormatType) b10.y(serialDescriptor, 5, StickerFormatType.Serializer.INSTANCE, null);
            guildId = (GuildId) b10.n(serialDescriptor, 3, GuildId$$serializer.INSTANCE, null);
            bool = (Boolean) b10.n(serialDescriptor, 8, h.f31005a, null);
            str2 = m11;
            l10 = (Long) b10.n(serialDescriptor, 2, z0.f31115a, null);
            str = m10;
            i10 = 511;
        } else {
            boolean z10 = true;
            int i13 = 0;
            Boolean bool2 = null;
            StickerType stickerType2 = null;
            StickerFormatType stickerFormatType2 = null;
            String str4 = null;
            Long l11 = null;
            GuildId guildId2 = null;
            String str5 = null;
            String str6 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i12 = 6;
                        break;
                    case 0:
                        stickerId2 = (StickerId) b10.y(serialDescriptor, 0, StickerId$$serializer.INSTANCE, stickerId2);
                        i13 |= 1;
                        i11 = 7;
                        i12 = 6;
                        break;
                    case 1:
                        str4 = b10.m(serialDescriptor, 1);
                        i13 |= 2;
                        i11 = 7;
                        break;
                    case 2:
                        l11 = (Long) b10.n(serialDescriptor, 2, z0.f31115a, l11);
                        i13 |= 4;
                        i11 = 7;
                        break;
                    case 3:
                        guildId2 = (GuildId) b10.n(serialDescriptor, 3, GuildId$$serializer.INSTANCE, guildId2);
                        i13 |= 8;
                        i11 = 7;
                        continue;
                    case 4:
                        str5 = b10.m(serialDescriptor, 4);
                        i13 |= 16;
                        break;
                    case 5:
                        stickerFormatType2 = (StickerFormatType) b10.y(serialDescriptor, 5, StickerFormatType.Serializer.INSTANCE, stickerFormatType2);
                        i13 |= 32;
                        break;
                    case 6:
                        str6 = b10.m(serialDescriptor, i12);
                        i13 |= 64;
                        break;
                    case 7:
                        stickerType2 = (StickerType) b10.y(serialDescriptor, i11, StickerType.Serializer.INSTANCE, stickerType2);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        bool2 = (Boolean) b10.n(serialDescriptor, 8, h.f31005a, bool2);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i13;
            bool = bool2;
            stickerType = stickerType2;
            stickerFormatType = stickerFormatType2;
            stickerId = stickerId2;
            str = str4;
            l10 = l11;
            guildId = guildId2;
            str2 = str5;
            str3 = str6;
        }
        b10.c(serialDescriptor);
        return new Sticker(i10, stickerId, str, l10, guildId, str2, stickerFormatType, str3, stickerType, bool, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull Sticker value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        Sticker.write$Self$notification_api_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
