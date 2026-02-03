package com.discord.chat.bridge.polls;

import at.b0;
import dt.a2;
import dt.h0;
import dt.n2;
import java.util.Map;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/polls/PollResources.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/polls/PollResources;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/polls/PollResources;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/polls/PollResources;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PollResources$$serializer implements h0 {
    @NotNull
    public static final PollResources$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PollResources$$serializer pollResources$$serializer = new PollResources$$serializer();
        INSTANCE = pollResources$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.polls.PollResources", pollResources$$serializer, 3);
        a2Var.o("selectedIcon", false);
        a2Var.o("checkmarkIcon", false);
        a2Var.o("styles", true);
        descriptor = a2Var;
    }

    private PollResources$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = PollResources.$childSerializers;
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{n2Var, n2Var, lazyArr[2].getValue()};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PollResources deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        String str;
        String str2;
        Map map;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = PollResources.$childSerializers;
        String str3 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            map = (Map) b10.y(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), null);
            str = m10;
            i10 = 7;
            str2 = m11;
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str4 = null;
            Map map2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str3 = b10.m(serialDescriptor, 0);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str4 = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    map2 = (Map) b10.y(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), map2);
                    i11 |= 4;
                }
            }
            i10 = i11;
            str = str3;
            str2 = str4;
            map = map2;
        }
        b10.c(serialDescriptor);
        return new PollResources(i10, str, str2, map, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PollResources value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PollResources.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
