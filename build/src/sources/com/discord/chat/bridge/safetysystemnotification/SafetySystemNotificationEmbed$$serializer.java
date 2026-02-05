package com.discord.chat.bridge.safetysystemnotification;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.b0;
import et.a;
import gt.a2;
import gt.h0;
import gt.n2;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import or.c;
import org.jetbrains.annotations.NotNull;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/safetysystemnotification/SafetySystemNotificationEmbed.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/safetysystemnotification/SafetySystemNotificationEmbed;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/safetysystemnotification/SafetySystemNotificationEmbed;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/safetysystemnotification/SafetySystemNotificationEmbed;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class SafetySystemNotificationEmbed$$serializer implements h0 {
    @NotNull
    public static final SafetySystemNotificationEmbed$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        SafetySystemNotificationEmbed$$serializer safetySystemNotificationEmbed$$serializer = new SafetySystemNotificationEmbed$$serializer();
        INSTANCE = safetySystemNotificationEmbed$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.safetysystemnotification.SafetySystemNotificationEmbed", safetySystemNotificationEmbed$$serializer, 11);
        a2Var.o("titleText", false);
        a2Var.o("titleIcon", false);
        a2Var.o("subtitleText", false);
        a2Var.o("descriptionText", false);
        a2Var.o("primaryCtaText", true);
        a2Var.o("primaryCtaType", true);
        a2Var.o("primaryCtaKey", true);
        a2Var.o("secondaryCtaText", true);
        a2Var.o("secondaryCtaType", true);
        a2Var.o("secondaryCtaKey", true);
        a2Var.o("footerTheme", false);
        descriptor = a2Var;
    }

    private SafetySystemNotificationEmbed$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = SafetySystemNotificationEmbed.$childSerializers;
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{n2Var, n2Var, n2Var, n2Var, a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(n2Var), a.u(n2Var), lazyArr[10].getValue()};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SafetySystemNotificationEmbed deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        FooterTheme footerTheme;
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
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = SafetySystemNotificationEmbed.$childSerializers;
        int i11 = 9;
        String str11 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            String m12 = b10.m(serialDescriptor, 2);
            String m13 = b10.m(serialDescriptor, 3);
            n2 n2Var = n2.f25302a;
            footerTheme = (FooterTheme) b10.y(serialDescriptor, 10, (DeserializationStrategy) lazyArr[10].getValue(), null);
            str7 = m10;
            str = (String) b10.n(serialDescriptor, 9, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 7, n2Var, null);
            str4 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            str5 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            str10 = m13;
            str3 = (String) b10.n(serialDescriptor, 8, n2Var, null);
            str6 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str9 = m12;
            i10 = 2047;
            str8 = m11;
        } else {
            boolean z10 = true;
            int i12 = 0;
            FooterTheme footerTheme2 = null;
            String str12 = null;
            String str13 = null;
            String str14 = null;
            String str15 = null;
            String str16 = null;
            String str17 = null;
            String str18 = null;
            String str19 = null;
            String str20 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i11 = 9;
                        break;
                    case 0:
                        i12 |= 1;
                        str11 = b10.m(serialDescriptor, 0);
                        i11 = 9;
                        break;
                    case 1:
                        str18 = b10.m(serialDescriptor, 1);
                        i12 |= 2;
                        i11 = 9;
                        break;
                    case 2:
                        str19 = b10.m(serialDescriptor, 2);
                        i12 |= 4;
                        i11 = 9;
                        break;
                    case 3:
                        str20 = b10.m(serialDescriptor, 3);
                        i12 |= 8;
                        i11 = 9;
                        break;
                    case 4:
                        str17 = (String) b10.n(serialDescriptor, 4, n2.f25302a, str17);
                        i12 |= 16;
                        i11 = 9;
                        break;
                    case 5:
                        str16 = (String) b10.n(serialDescriptor, 5, n2.f25302a, str16);
                        i12 |= 32;
                        i11 = 9;
                        break;
                    case 6:
                        str15 = (String) b10.n(serialDescriptor, 6, n2.f25302a, str15);
                        i12 |= 64;
                        i11 = 9;
                        break;
                    case 7:
                        str13 = (String) b10.n(serialDescriptor, 7, n2.f25302a, str13);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i11 = 9;
                        continue;
                    case 8:
                        str14 = (String) b10.n(serialDescriptor, 8, n2.f25302a, str14);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        str12 = (String) b10.n(serialDescriptor, i11, n2.f25302a, str12);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        footerTheme2 = (FooterTheme) b10.y(serialDescriptor, 10, (DeserializationStrategy) lazyArr[10].getValue(), footerTheme2);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i12;
            footerTheme = footerTheme2;
            str = str12;
            str2 = str13;
            str3 = str14;
            str4 = str15;
            str5 = str16;
            str6 = str17;
            str7 = str11;
            str8 = str18;
            str9 = str19;
            str10 = str20;
        }
        b10.c(serialDescriptor);
        return new SafetySystemNotificationEmbed(i10, str7, str8, str9, str10, str6, str5, str4, str2, str3, str, footerTheme, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull SafetySystemNotificationEmbed value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        SafetySystemNotificationEmbed.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
