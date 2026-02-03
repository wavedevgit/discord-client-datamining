package com.discord.chat.bridge.botuikit;

import at.b0;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.a2;
import dt.h0;
import dt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/ComponentEmoji.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/ComponentEmoji;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/ComponentEmoji;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/ComponentEmoji;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ComponentEmoji$$serializer implements h0 {
    @NotNull
    public static final ComponentEmoji$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ComponentEmoji$$serializer componentEmoji$$serializer = new ComponentEmoji$$serializer();
        INSTANCE = componentEmoji$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.botuikit.ComponentEmoji", componentEmoji$$serializer, 5);
        a2Var.o(StackTraceHelper.ID_KEY, true);
        a2Var.o(StackTraceHelper.NAME_KEY, false);
        a2Var.o("src", true);
        a2Var.o("animated", true);
        a2Var.o("surrogates", true);
        descriptor = a2Var;
    }

    private ComponentEmoji$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{bt.a.u(n2Var), n2Var, bt.a.u(n2Var), dt.h.f20942a, bt.a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ComponentEmoji deserialize(@NotNull Decoder decoder) {
        boolean z10;
        int i10;
        String str;
        String str2;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            n2 n2Var = n2.f20978a;
            String m10 = b10.m(serialDescriptor, 1);
            boolean C = b10.C(serialDescriptor, 3);
            str4 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            z10 = C;
            i10 = 31;
            str3 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            str2 = m10;
            str = (String) b10.n(serialDescriptor, 0, n2Var, null);
        } else {
            boolean z11 = true;
            boolean z12 = false;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            int i11 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z11 = false;
                } else if (o10 == 0) {
                    str5 = (String) b10.n(serialDescriptor, 0, n2.f20978a, str5);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str6 = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 == 2) {
                    str7 = (String) b10.n(serialDescriptor, 2, n2.f20978a, str7);
                    i11 |= 4;
                } else if (o10 == 3) {
                    z12 = b10.C(serialDescriptor, 3);
                    i11 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    str8 = (String) b10.n(serialDescriptor, 4, n2.f20978a, str8);
                    i11 |= 16;
                }
            }
            z10 = z12;
            i10 = i11;
            str = str5;
            str2 = str6;
            str3 = str7;
            str4 = str8;
        }
        b10.c(serialDescriptor);
        return new ComponentEmoji(i10, str, str2, str3, z10, str4, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ComponentEmoji value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ComponentEmoji.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
