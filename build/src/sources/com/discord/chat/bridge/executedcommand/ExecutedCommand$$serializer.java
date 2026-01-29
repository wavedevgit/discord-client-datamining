package com.discord.chat.bridge.executedcommand;

import at.a2;
import at.h;
import at.h0;
import at.n2;
import at.p0;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableTextSerializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
import ys.a;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/executedcommand/ExecutedCommand.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ExecutedCommand$$serializer implements h0 {
    @NotNull
    public static final ExecutedCommand$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ExecutedCommand$$serializer executedCommand$$serializer = new ExecutedCommand$$serializer();
        INSTANCE = executedCommand$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.executedcommand.ExecutedCommand", executedCommand$$serializer, 8);
        a2Var.o("userId", false);
        a2Var.o("usernameColor", false);
        a2Var.o("avatarURL", true);
        a2Var.o("targetUsernameColor", false);
        a2Var.o("content", false);
        a2Var.o("commandNameBackgroundStyles", true);
        a2Var.o("showAppsIcon", true);
        a2Var.o("showControllerIcon", true);
        descriptor = a2Var;
    }

    private ExecutedCommand$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = a.u(n2.f6848a);
        KSerializer u11 = a.u(ExecutedCommandBackgroundStyles$$serializer.INSTANCE);
        h hVar = h.f6812a;
        KSerializer u12 = a.u(hVar);
        KSerializer u13 = a.u(hVar);
        p0 p0Var = p0.f6864a;
        return new KSerializer[]{UserId$$serializer.INSTANCE, p0Var, u10, p0Var, AnnotatedStructurableTextSerializer.INSTANCE, u11, u12, u13};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ExecutedCommand deserialize(@NotNull Decoder decoder) {
        int i10;
        Boolean bool;
        Boolean bool2;
        ExecutedCommandBackgroundStyles executedCommandBackgroundStyles;
        int i11;
        int i12;
        UserId userId;
        String str;
        AnnotatedStructurableText annotatedStructurableText;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i13 = 7;
        int i14 = 6;
        if (b10.p()) {
            int i15 = b10.i(serialDescriptor, 1);
            int i16 = b10.i(serialDescriptor, 3);
            h hVar = h.f6812a;
            userId = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, null);
            bool = (Boolean) b10.n(serialDescriptor, 7, hVar, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 6, hVar, null);
            executedCommandBackgroundStyles = (ExecutedCommandBackgroundStyles) b10.n(serialDescriptor, 5, ExecutedCommandBackgroundStyles$$serializer.INSTANCE, null);
            i10 = i16;
            annotatedStructurableText = (AnnotatedStructurableText) b10.y(serialDescriptor, 4, AnnotatedStructurableTextSerializer.INSTANCE, null);
            str = (String) b10.n(serialDescriptor, 2, n2.f6848a, null);
            i11 = i15;
            i12 = 255;
        } else {
            boolean z10 = true;
            int i17 = 0;
            int i18 = 0;
            Boolean bool3 = null;
            Boolean bool4 = null;
            UserId userId2 = null;
            String str2 = null;
            AnnotatedStructurableText annotatedStructurableText2 = null;
            int i19 = 0;
            ExecutedCommandBackgroundStyles executedCommandBackgroundStyles2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i14 = 6;
                        break;
                    case 0:
                        userId2 = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, userId2);
                        i18 |= 1;
                        i13 = 7;
                        i14 = 6;
                        break;
                    case 1:
                        i19 = b10.i(serialDescriptor, 1);
                        i18 |= 2;
                        i13 = 7;
                        i14 = 6;
                        break;
                    case 2:
                        str2 = (String) b10.n(serialDescriptor, 2, n2.f6848a, str2);
                        i18 |= 4;
                        i13 = 7;
                        i14 = 6;
                        break;
                    case 3:
                        i17 = b10.i(serialDescriptor, 3);
                        i18 |= 8;
                        break;
                    case 4:
                        annotatedStructurableText2 = (AnnotatedStructurableText) b10.y(serialDescriptor, 4, AnnotatedStructurableTextSerializer.INSTANCE, annotatedStructurableText2);
                        i18 |= 16;
                        break;
                    case 5:
                        executedCommandBackgroundStyles2 = (ExecutedCommandBackgroundStyles) b10.n(serialDescriptor, 5, ExecutedCommandBackgroundStyles$$serializer.INSTANCE, executedCommandBackgroundStyles2);
                        i18 |= 32;
                        break;
                    case 6:
                        bool4 = (Boolean) b10.n(serialDescriptor, i14, h.f6812a, bool4);
                        i18 |= 64;
                        break;
                    case 7:
                        bool3 = (Boolean) b10.n(serialDescriptor, i13, h.f6812a, bool3);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i17;
            bool = bool3;
            bool2 = bool4;
            executedCommandBackgroundStyles = executedCommandBackgroundStyles2;
            i11 = i19;
            i12 = i18;
            userId = userId2;
            str = str2;
            annotatedStructurableText = annotatedStructurableText2;
        }
        b10.c(serialDescriptor);
        return new ExecutedCommand(i12, userId, i11, str, i10, annotatedStructurableText, executedCommandBackgroundStyles, bool2, bool, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ExecutedCommand value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ExecutedCommand.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
