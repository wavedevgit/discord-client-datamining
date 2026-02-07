package com.discord.chat.bridge.automod;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import gt.a;
import jt.a2;
import jt.h0;
import jt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/automod/AutoModerationContext.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/automod/AutoModerationContext;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/automod/AutoModerationContext;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/automod/AutoModerationContext;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class AutoModerationContext$$serializer implements h0 {
    @NotNull
    public static final AutoModerationContext$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        AutoModerationContext$$serializer autoModerationContext$$serializer = new AutoModerationContext$$serializer();
        INSTANCE = autoModerationContext$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.automod.AutoModerationContext", autoModerationContext$$serializer, 9);
        a2Var.o("headerText", false);
        a2Var.o("headerBadgeText", false);
        a2Var.o("ruleDisplayText", true);
        a2Var.o("keywordDisplayText", true);
        a2Var.o("actionsIconURL", true);
        a2Var.o("actionsText", false);
        a2Var.o("feedbackText", false);
        a2Var.o("message", false);
        a2Var.o("notification", true);
        descriptor = a2Var;
    }

    private AutoModerationContext$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{n2Var, n2Var, a.u(n2Var), a.u(n2Var), a.u(n2Var), n2Var, n2Var, FlaggedMessageEmbed$$serializer.INSTANCE, a.u(AutoModerationNotification$$serializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final AutoModerationContext deserialize(@NotNull Decoder decoder) {
        int i10;
        AutoModerationNotification autoModerationNotification;
        FlaggedMessageEmbed flaggedMessageEmbed;
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        String str7;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i11 = 7;
        String str8 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            n2 n2Var = n2.f31089a;
            String m12 = b10.m(serialDescriptor, 5);
            String m13 = b10.m(serialDescriptor, 6);
            str2 = m10;
            flaggedMessageEmbed = (FlaggedMessageEmbed) b10.y(serialDescriptor, 7, FlaggedMessageEmbed$$serializer.INSTANCE, null);
            str7 = m13;
            str6 = m12;
            str5 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            autoModerationNotification = (AutoModerationNotification) b10.n(serialDescriptor, 8, AutoModerationNotification$$serializer.INSTANCE, null);
            str = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str4 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            str3 = m11;
            i10 = 511;
        } else {
            boolean z10 = true;
            int i12 = 0;
            AutoModerationNotification autoModerationNotification2 = null;
            FlaggedMessageEmbed flaggedMessageEmbed2 = null;
            String str9 = null;
            String str10 = null;
            String str11 = null;
            String str12 = null;
            String str13 = null;
            String str14 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        break;
                    case 0:
                        i12 |= 1;
                        str8 = b10.m(serialDescriptor, 0);
                        i11 = 7;
                        break;
                    case 1:
                        str10 = b10.m(serialDescriptor, 1);
                        i12 |= 2;
                        i11 = 7;
                        break;
                    case 2:
                        str11 = (String) b10.n(serialDescriptor, 2, n2.f31089a, str11);
                        i12 |= 4;
                        i11 = 7;
                        break;
                    case 3:
                        str12 = (String) b10.n(serialDescriptor, 3, n2.f31089a, str12);
                        i12 |= 8;
                        i11 = 7;
                        continue;
                    case 4:
                        str9 = (String) b10.n(serialDescriptor, 4, n2.f31089a, str9);
                        i12 |= 16;
                        break;
                    case 5:
                        str13 = b10.m(serialDescriptor, 5);
                        i12 |= 32;
                        break;
                    case 6:
                        str14 = b10.m(serialDescriptor, 6);
                        i12 |= 64;
                        break;
                    case 7:
                        flaggedMessageEmbed2 = (FlaggedMessageEmbed) b10.y(serialDescriptor, i11, FlaggedMessageEmbed$$serializer.INSTANCE, flaggedMessageEmbed2);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        autoModerationNotification2 = (AutoModerationNotification) b10.n(serialDescriptor, 8, AutoModerationNotification$$serializer.INSTANCE, autoModerationNotification2);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i12;
            autoModerationNotification = autoModerationNotification2;
            flaggedMessageEmbed = flaggedMessageEmbed2;
            str = str9;
            str2 = str8;
            str3 = str10;
            str4 = str11;
            str5 = str12;
            str6 = str13;
            str7 = str14;
        }
        b10.c(serialDescriptor);
        return new AutoModerationContext(i10, str2, str3, str4, str5, str, str6, str7, flaggedMessageEmbed, autoModerationNotification, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull AutoModerationContext value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        AutoModerationContext.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
