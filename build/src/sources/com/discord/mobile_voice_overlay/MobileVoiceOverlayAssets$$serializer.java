package com.discord.mobile_voice_overlay;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.b0;
import gt.a2;
import gt.h0;
import gt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/mobile_voice_overlay/MobileVoiceOverlayAssets.$serializer", "Lgt/h0;", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayAssets;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayAssets;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayAssets;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class MobileVoiceOverlayAssets$$serializer implements h0 {
    @NotNull
    public static final MobileVoiceOverlayAssets$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MobileVoiceOverlayAssets$$serializer mobileVoiceOverlayAssets$$serializer = new MobileVoiceOverlayAssets$$serializer();
        INSTANCE = mobileVoiceOverlayAssets$$serializer;
        a2 a2Var = new a2("com.discord.mobile_voice_overlay.MobileVoiceOverlayAssets", mobileVoiceOverlayAssets$$serializer, 11);
        a2Var.o("useSpeaker", false);
        a2Var.o("mute", false);
        a2Var.o("disconnectFromVoice", false);
        a2Var.o("getInvite", false);
        a2Var.o("switchChannels", false);
        a2Var.o("openDiscord", false);
        a2Var.o("inviteLinkCopied", false);
        a2Var.o("channelSelect", false);
        a2Var.o("closeWindow", false);
        a2Var.o("searchChannels", false);
        a2Var.o("noResults", false);
        descriptor = a2Var;
    }

    private MobileVoiceOverlayAssets$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{n2Var, n2Var, n2Var, n2Var, n2Var, n2Var, n2Var, n2Var, n2Var, n2Var, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MobileVoiceOverlayAssets deserialize(@NotNull Decoder decoder) {
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        String str7;
        String str8;
        String str9;
        String str10;
        String str11;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i10 = 0;
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 2);
            String m12 = b10.m(serialDescriptor, 3);
            String m13 = b10.m(serialDescriptor, 4);
            String m14 = b10.m(serialDescriptor, 5);
            String m15 = b10.m(serialDescriptor, 6);
            String m16 = b10.m(serialDescriptor, 7);
            String m17 = b10.m(serialDescriptor, 8);
            String m18 = b10.m(serialDescriptor, 9);
            i10 = 2047;
            str2 = b10.m(serialDescriptor, 10);
            str3 = m18;
            str4 = m16;
            str5 = m15;
            str6 = m14;
            str7 = m12;
            str8 = m17;
            str9 = m13;
            str10 = m11;
            str11 = m10;
        } else {
            str = null;
            String str12 = null;
            String str13 = null;
            String str14 = null;
            String str15 = null;
            String str16 = null;
            String str17 = null;
            String str18 = null;
            String str19 = null;
            String str20 = null;
            String str21 = null;
            boolean z10 = true;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        break;
                    case 0:
                        i10 |= 1;
                        str = b10.m(serialDescriptor, 0);
                        continue;
                    case 1:
                        str21 = b10.m(serialDescriptor, 1);
                        i10 |= 2;
                        continue;
                    case 2:
                        str20 = b10.m(serialDescriptor, 2);
                        i10 |= 4;
                        break;
                    case 3:
                        str17 = b10.m(serialDescriptor, 3);
                        i10 |= 8;
                        break;
                    case 4:
                        str19 = b10.m(serialDescriptor, 4);
                        i10 |= 16;
                        break;
                    case 5:
                        str16 = b10.m(serialDescriptor, 5);
                        i10 |= 32;
                        break;
                    case 6:
                        str15 = b10.m(serialDescriptor, 6);
                        i10 |= 64;
                        break;
                    case 7:
                        str14 = b10.m(serialDescriptor, 7);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        str18 = b10.m(serialDescriptor, 8);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        str13 = b10.m(serialDescriptor, 9);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        str12 = b10.m(serialDescriptor, 10);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            str2 = str12;
            str3 = str13;
            str4 = str14;
            str5 = str15;
            str6 = str16;
            str7 = str17;
            str8 = str18;
            str9 = str19;
            str10 = str20;
            str11 = str21;
        }
        String str22 = str;
        int i11 = i10;
        b10.c(serialDescriptor);
        return new MobileVoiceOverlayAssets(i11, str22, str11, str10, str7, str9, str6, str5, str4, str8, str3, str2, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MobileVoiceOverlayAssets value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MobileVoiceOverlayAssets.write$Self$mobile_voice_overlay_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
