package com.discord.chat.bridge.premium_group_invite;

import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableTextSerializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import dt.b0;
import gt.a2;
import gt.h0;
import gt.n2;
import gt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import or.c;
import org.jetbrains.annotations.NotNull;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/premium_group_invite/PremiumGroupInviteEmbed.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/premium_group_invite/PremiumGroupInviteEmbed;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/premium_group_invite/PremiumGroupInviteEmbed;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/premium_group_invite/PremiumGroupInviteEmbed;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PremiumGroupInviteEmbed$$serializer implements h0 {
    @NotNull
    public static final PremiumGroupInviteEmbed$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PremiumGroupInviteEmbed$$serializer premiumGroupInviteEmbed$$serializer = new PremiumGroupInviteEmbed$$serializer();
        INSTANCE = premiumGroupInviteEmbed$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.premium_group_invite.PremiumGroupInviteEmbed", premiumGroupInviteEmbed$$serializer, 11);
        a2Var.o("headerText", false);
        a2Var.o("headerColor", false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o(ViewProps.BORDER_COLOR, false);
        a2Var.o("headerImageUrl", false);
        a2Var.o("betaPillText", false);
        a2Var.o("betaPillTextColor", false);
        a2Var.o("betaPillBackgroundColor", false);
        a2Var.o("bodyText", false);
        a2Var.o("bodyTextColor", false);
        a2Var.o("learnMoreLink", false);
        descriptor = a2Var;
    }

    private PremiumGroupInviteEmbed$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        p0 p0Var = p0.f25318a;
        return new KSerializer[]{n2Var, p0Var, p0Var, p0Var, n2Var, n2Var, p0Var, p0Var, n2Var, p0Var, AnnotatedStructurableTextSerializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PremiumGroupInviteEmbed deserialize(@NotNull Decoder decoder) {
        int i10;
        AnnotatedStructurableText annotatedStructurableText;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        String str;
        String str2;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i16 = 10;
        int i17 = 0;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            int i18 = b10.i(serialDescriptor, 1);
            int i19 = b10.i(serialDescriptor, 2);
            int i20 = b10.i(serialDescriptor, 3);
            String m11 = b10.m(serialDescriptor, 4);
            String m12 = b10.m(serialDescriptor, 5);
            int i21 = b10.i(serialDescriptor, 6);
            int i22 = b10.i(serialDescriptor, 7);
            String m13 = b10.m(serialDescriptor, 8);
            int i23 = b10.i(serialDescriptor, 9);
            i17 = 2047;
            str = m10;
            annotatedStructurableText = (AnnotatedStructurableText) b10.y(serialDescriptor, 10, AnnotatedStructurableTextSerializer.INSTANCE, null);
            i10 = i23;
            i11 = i22;
            i12 = i21;
            str3 = m12;
            i13 = i20;
            str4 = m13;
            str2 = m11;
            i14 = i19;
            i15 = i18;
        } else {
            boolean z10 = true;
            int i24 = 0;
            int i25 = 0;
            int i26 = 0;
            int i27 = 0;
            int i28 = 0;
            AnnotatedStructurableText annotatedStructurableText2 = null;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            int i29 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i16 = 10;
                        break;
                    case 0:
                        str5 = b10.m(serialDescriptor, 0);
                        i17 |= 1;
                        i16 = 10;
                        break;
                    case 1:
                        i28 = b10.i(serialDescriptor, 1);
                        i17 |= 2;
                        i16 = 10;
                        break;
                    case 2:
                        i27 = b10.i(serialDescriptor, 2);
                        i17 |= 4;
                        break;
                    case 3:
                        i26 = b10.i(serialDescriptor, 3);
                        i17 |= 8;
                        break;
                    case 4:
                        str6 = b10.m(serialDescriptor, 4);
                        i17 |= 16;
                        break;
                    case 5:
                        str7 = b10.m(serialDescriptor, 5);
                        i17 |= 32;
                        break;
                    case 6:
                        i25 = b10.i(serialDescriptor, 6);
                        i17 |= 64;
                        break;
                    case 7:
                        i29 = b10.i(serialDescriptor, 7);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        str8 = b10.m(serialDescriptor, 8);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        i24 = b10.i(serialDescriptor, 9);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        annotatedStructurableText2 = (AnnotatedStructurableText) b10.y(serialDescriptor, i16, AnnotatedStructurableTextSerializer.INSTANCE, annotatedStructurableText2);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i24;
            annotatedStructurableText = annotatedStructurableText2;
            i11 = i29;
            i12 = i25;
            i13 = i26;
            i14 = i27;
            i15 = i28;
            str = str5;
            str2 = str6;
            str3 = str7;
            str4 = str8;
        }
        int i30 = i17;
        b10.c(serialDescriptor);
        return new PremiumGroupInviteEmbed(i30, str, i15, i14, i13, str2, str3, i12, i11, str4, i10, annotatedStructurableText, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PremiumGroupInviteEmbed value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PremiumGroupInviteEmbed.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
