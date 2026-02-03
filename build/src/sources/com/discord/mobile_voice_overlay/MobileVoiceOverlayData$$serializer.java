package com.discord.mobile_voice_overlay;

import bt.a2;
import bt.h0;
import bt.n2;
import bt.p0;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
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
import ys.b0;
@jr.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/mobile_voice_overlay/MobileVoiceOverlayData.$serializer", "Lbt/h0;", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class MobileVoiceOverlayData$$serializer implements h0 {
    @NotNull
    public static final MobileVoiceOverlayData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MobileVoiceOverlayData$$serializer mobileVoiceOverlayData$$serializer = new MobileVoiceOverlayData$$serializer();
        INSTANCE = mobileVoiceOverlayData$$serializer;
        a2 a2Var = new a2("com.discord.mobile_voice_overlay.MobileVoiceOverlayData", mobileVoiceOverlayData$$serializer, 11);
        a2Var.o("users", false);
        a2Var.o("extraUsers", false);
        a2Var.o("guildId", false);
        a2Var.o("channelId", false);
        a2Var.o(NotificationRenderer.CHANNEL_NAME, false);
        a2Var.o("guildName", false);
        a2Var.o("deafened", false);
        a2Var.o("muted", false);
        a2Var.o("connectionQuality", false);
        a2Var.o("canGenerateInvite", false);
        a2Var.o("channelSelectorResults", false);
        descriptor = a2Var;
    }

    private MobileVoiceOverlayData$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = MobileVoiceOverlayData.$childSerializers;
        n2 n2Var = n2.f7662a;
        bt.h hVar = bt.h.f7626a;
        return new KSerializer[]{lazyArr[0].getValue(), p0.f7678a, zs.a.u(GuildId$$serializer.INSTANCE), ChannelId$$serializer.INSTANCE, n2Var, n2Var, hVar, hVar, lazyArr[8].getValue(), hVar, lazyArr[10].getValue()};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MobileVoiceOverlayData deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        boolean z10;
        List list;
        ConnectionQuality connectionQuality;
        List list2;
        ChannelId channelId;
        GuildId guildId;
        int i10;
        boolean z11;
        boolean z12;
        int i11;
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = MobileVoiceOverlayData.$childSerializers;
        int i12 = 9;
        int i13 = 7;
        int i14 = 6;
        int i15 = 0;
        if (b10.p()) {
            int i16 = b10.i(serialDescriptor, 1);
            String m10 = b10.m(serialDescriptor, 4);
            String m11 = b10.m(serialDescriptor, 5);
            boolean C = b10.C(serialDescriptor, 6);
            boolean C2 = b10.C(serialDescriptor, 7);
            boolean C3 = b10.C(serialDescriptor, 9);
            list2 = (List) b10.y(serialDescriptor, 10, (DeserializationStrategy) lazyArr[10].getValue(), null);
            list = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), null);
            z10 = C3;
            z11 = C2;
            z12 = C;
            str2 = m11;
            channelId = (ChannelId) b10.y(serialDescriptor, 3, ChannelId$$serializer.INSTANCE, null);
            str = m10;
            guildId = (GuildId) b10.n(serialDescriptor, 2, GuildId$$serializer.INSTANCE, null);
            i10 = 2047;
            connectionQuality = (ConnectionQuality) b10.y(serialDescriptor, 8, (DeserializationStrategy) lazyArr[8].getValue(), null);
            i11 = i16;
        } else {
            boolean z13 = true;
            boolean z14 = false;
            boolean z15 = false;
            int i17 = 0;
            ConnectionQuality connectionQuality2 = null;
            List list3 = null;
            ChannelId channelId2 = null;
            GuildId guildId2 = null;
            List list4 = null;
            String str3 = null;
            String str4 = null;
            boolean z16 = false;
            while (z13) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z13 = false;
                        i13 = 7;
                        i14 = 6;
                        break;
                    case 0:
                        list4 = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), list4);
                        i15 |= 1;
                        i12 = 9;
                        i13 = 7;
                        i14 = 6;
                        break;
                    case 1:
                        i17 = b10.i(serialDescriptor, 1);
                        i15 |= 2;
                        i12 = 9;
                        i13 = 7;
                        break;
                    case 2:
                        guildId2 = (GuildId) b10.n(serialDescriptor, 2, GuildId$$serializer.INSTANCE, guildId2);
                        i15 |= 4;
                        i12 = 9;
                        i13 = 7;
                        break;
                    case 3:
                        channelId2 = (ChannelId) b10.y(serialDescriptor, 3, ChannelId$$serializer.INSTANCE, channelId2);
                        i15 |= 8;
                        i12 = 9;
                        i13 = 7;
                        break;
                    case 4:
                        str3 = b10.m(serialDescriptor, 4);
                        i15 |= 16;
                        i12 = 9;
                        break;
                    case 5:
                        str4 = b10.m(serialDescriptor, 5);
                        i15 |= 32;
                        break;
                    case 6:
                        z15 = b10.C(serialDescriptor, i14);
                        i15 |= 64;
                        break;
                    case 7:
                        z16 = b10.C(serialDescriptor, i13);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        connectionQuality2 = (ConnectionQuality) b10.y(serialDescriptor, 8, (DeserializationStrategy) lazyArr[8].getValue(), connectionQuality2);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        z14 = b10.C(serialDescriptor, i12);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        list3 = (List) b10.y(serialDescriptor, 10, (DeserializationStrategy) lazyArr[10].getValue(), list3);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            z10 = z14;
            list = list4;
            connectionQuality = connectionQuality2;
            list2 = list3;
            channelId = channelId2;
            guildId = guildId2;
            i10 = i15;
            z11 = z16;
            z12 = z15;
            i11 = i17;
            str = str3;
            str2 = str4;
        }
        b10.c(serialDescriptor);
        return new MobileVoiceOverlayData(i10, list, i11, guildId, channelId, str, str2, z12, z11, connectionQuality, z10, list2, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MobileVoiceOverlayData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MobileVoiceOverlayData.write$Self$mobile_voice_overlay_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
