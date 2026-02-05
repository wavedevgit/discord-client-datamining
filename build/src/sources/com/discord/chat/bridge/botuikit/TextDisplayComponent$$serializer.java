package com.discord.chat.bridge.botuikit;

import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.structurabletext.StructurableTextSerializer;
import com.facebook.react.devsupport.StackTraceHelper;
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
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/TextDisplayComponent.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/botuikit/TextDisplayComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/TextDisplayComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/TextDisplayComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class TextDisplayComponent$$serializer implements h0 {
    @NotNull
    public static final TextDisplayComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        TextDisplayComponent$$serializer textDisplayComponent$$serializer = new TextDisplayComponent$$serializer();
        INSTANCE = textDisplayComponent$$serializer;
        a2 a2Var = new a2("10", textDisplayComponent$$serializer, 3);
        a2Var.o("type", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("content", false);
        descriptor = a2Var;
    }

    private TextDisplayComponent$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        return new KSerializer[]{p0.f25318a, n2.f25302a, StructurableTextSerializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final TextDisplayComponent deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        String str;
        StructurableText structurableText;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            structurableText = (StructurableText) b10.y(serialDescriptor, 2, StructurableTextSerializer.INSTANCE, null);
            str = m10;
            i11 = 7;
        } else {
            boolean z10 = true;
            i10 = 0;
            String str2 = null;
            StructurableText structurableText2 = null;
            int i12 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    i10 = b10.i(serialDescriptor, 0);
                    i12 |= 1;
                } else if (o10 == 1) {
                    str2 = b10.m(serialDescriptor, 1);
                    i12 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    structurableText2 = (StructurableText) b10.y(serialDescriptor, 2, StructurableTextSerializer.INSTANCE, structurableText2);
                    i12 |= 4;
                }
            }
            i11 = i12;
            str = str2;
            structurableText = structurableText2;
        }
        int i13 = i10;
        b10.c(serialDescriptor);
        return new TextDisplayComponent(i11, i13, str, structurableText, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull TextDisplayComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        TextDisplayComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
