package com.discord.chat.input.bridge;

import at.b0;
import bt.a;
import com.discord.span.utilities.common.BackgroundStyle;
import com.discord.span.utilities.common.BackgroundStyle$$serializer;
import com.facebook.react.uimanager.ViewProps;
import dt.a2;
import dt.h0;
import dt.p0;
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
import lr.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/input/bridge/ChatInputNodeStyle.$serializer", "Ldt/h0;", "Lcom/discord/chat/input/bridge/ChatInputNodeStyle;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/input/bridge/ChatInputNodeStyle;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/input/bridge/ChatInputNodeStyle;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ChatInputNodeStyle$$serializer implements h0 {
    @NotNull
    public static final ChatInputNodeStyle$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ChatInputNodeStyle$$serializer chatInputNodeStyle$$serializer = new ChatInputNodeStyle$$serializer();
        INSTANCE = chatInputNodeStyle$$serializer;
        a2 a2Var = new a2("com.discord.chat.input.bridge.ChatInputNodeStyle", chatInputNodeStyle$$serializer, 4);
        a2Var.o(ViewProps.FONT_SIZE, true);
        a2Var.o(ViewProps.COLOR, false);
        a2Var.o("backgroundStyle", false);
        a2Var.o(ViewProps.FONT_WEIGHT, true);
        descriptor = a2Var;
    }

    private ChatInputNodeStyle$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = ChatInputNodeStyle.$childSerializers;
        p0 p0Var = p0.f20994a;
        return new KSerializer[]{a.u(p0Var), p0Var, a.u(BackgroundStyle$$serializer.INSTANCE), a.u((KSerializer) lazyArr[3].getValue())};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ChatInputNodeStyle deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        int i11;
        Integer num;
        BackgroundStyle backgroundStyle;
        ChatInputNodeFontWeight chatInputNodeFontWeight;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = ChatInputNodeStyle.$childSerializers;
        if (b10.p()) {
            int i12 = b10.i(serialDescriptor, 1);
            chatInputNodeFontWeight = (ChatInputNodeFontWeight) b10.n(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), null);
            num = (Integer) b10.n(serialDescriptor, 0, p0.f20994a, null);
            backgroundStyle = (BackgroundStyle) b10.n(serialDescriptor, 2, BackgroundStyle$$serializer.INSTANCE, null);
            i10 = 15;
            i11 = i12;
        } else {
            boolean z10 = true;
            int i13 = 0;
            Integer num2 = null;
            BackgroundStyle backgroundStyle2 = null;
            ChatInputNodeFontWeight chatInputNodeFontWeight2 = null;
            int i14 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    num2 = (Integer) b10.n(serialDescriptor, 0, p0.f20994a, num2);
                    i13 |= 1;
                } else if (o10 == 1) {
                    i14 = b10.i(serialDescriptor, 1);
                    i13 |= 2;
                } else if (o10 == 2) {
                    backgroundStyle2 = (BackgroundStyle) b10.n(serialDescriptor, 2, BackgroundStyle$$serializer.INSTANCE, backgroundStyle2);
                    i13 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    chatInputNodeFontWeight2 = (ChatInputNodeFontWeight) b10.n(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), chatInputNodeFontWeight2);
                    i13 |= 8;
                }
            }
            i10 = i13;
            i11 = i14;
            num = num2;
            backgroundStyle = backgroundStyle2;
            chatInputNodeFontWeight = chatInputNodeFontWeight2;
        }
        b10.c(serialDescriptor);
        return new ChatInputNodeStyle(i10, num, i11, backgroundStyle, chatInputNodeFontWeight, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ChatInputNodeStyle value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ChatInputNodeStyle.write$Self$chat_input_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
