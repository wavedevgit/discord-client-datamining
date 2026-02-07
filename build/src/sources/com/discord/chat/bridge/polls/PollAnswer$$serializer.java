package com.discord.chat.bridge.polls;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import gt.a;
import jt.a2;
import jt.h;
import jt.h0;
import jt.n2;
import jt.p0;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/polls/PollAnswer.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/polls/PollAnswer;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/polls/PollAnswer;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/polls/PollAnswer;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PollAnswer$$serializer implements h0 {
    @NotNull
    public static final PollAnswer$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PollAnswer$$serializer pollAnswer$$serializer = new PollAnswer$$serializer();
        INSTANCE = pollAnswer$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.polls.PollAnswer", pollAnswer$$serializer, 9);
        a2Var.o("answerId", false);
        a2Var.o("pollMedia", false);
        a2Var.o("didSelfVote", false);
        a2Var.o("votes", false);
        a2Var.o("votesPercentage", false);
        a2Var.o("isSelected", true);
        a2Var.o("isVictor", true);
        a2Var.o("shouldAnimateTransition", true);
        a2Var.o("style", true);
        descriptor = a2Var;
    }

    private PollAnswer$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        h hVar = h.f31053a;
        KSerializer u10 = a.u(hVar);
        KSerializer u11 = a.u(hVar);
        KSerializer u12 = a.u(hVar);
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{n2Var, PollMedia$$serializer.INSTANCE, hVar, n2Var, p0.f31105a, u10, u11, u12, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PollAnswer deserialize(@NotNull Decoder decoder) {
        int i10;
        Boolean bool;
        Boolean bool2;
        Boolean bool3;
        boolean z10;
        int i11;
        String str;
        PollMedia pollMedia;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 7;
        int i13 = 6;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            boolean C = b10.C(serialDescriptor, 2);
            String m11 = b10.m(serialDescriptor, 3);
            int i14 = b10.i(serialDescriptor, 4);
            h hVar = h.f31053a;
            str = m10;
            bool = (Boolean) b10.n(serialDescriptor, 7, hVar, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 6, hVar, null);
            bool3 = (Boolean) b10.n(serialDescriptor, 5, hVar, null);
            str2 = m11;
            str3 = b10.m(serialDescriptor, 8);
            i10 = i14;
            z10 = C;
            pollMedia = (PollMedia) b10.y(serialDescriptor, 1, PollMedia$$serializer.INSTANCE, null);
            i11 = 511;
        } else {
            boolean z11 = true;
            int i15 = 0;
            int i16 = 0;
            Boolean bool4 = null;
            Boolean bool5 = null;
            String str4 = null;
            PollMedia pollMedia2 = null;
            String str5 = null;
            String str6 = null;
            boolean z12 = false;
            Boolean bool6 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i12 = 7;
                        break;
                    case 0:
                        str4 = b10.m(serialDescriptor, 0);
                        i16 |= 1;
                        i12 = 7;
                        i13 = 6;
                        break;
                    case 1:
                        pollMedia2 = (PollMedia) b10.y(serialDescriptor, 1, PollMedia$$serializer.INSTANCE, pollMedia2);
                        i16 |= 2;
                        i12 = 7;
                        i13 = 6;
                        break;
                    case 2:
                        i16 |= 4;
                        z12 = b10.C(serialDescriptor, 2);
                        break;
                    case 3:
                        str5 = b10.m(serialDescriptor, 3);
                        i16 |= 8;
                        break;
                    case 4:
                        i15 = b10.i(serialDescriptor, 4);
                        i16 |= 16;
                        break;
                    case 5:
                        bool6 = (Boolean) b10.n(serialDescriptor, 5, h.f31053a, bool6);
                        i16 |= 32;
                        break;
                    case 6:
                        bool5 = (Boolean) b10.n(serialDescriptor, i13, h.f31053a, bool5);
                        i16 |= 64;
                        break;
                    case 7:
                        bool4 = (Boolean) b10.n(serialDescriptor, i12, h.f31053a, bool4);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        str6 = b10.m(serialDescriptor, 8);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i15;
            bool = bool4;
            bool2 = bool5;
            bool3 = bool6;
            z10 = z12;
            i11 = i16;
            str = str4;
            pollMedia = pollMedia2;
            str2 = str5;
            str3 = str6;
        }
        b10.c(serialDescriptor);
        return new PollAnswer(i11, str, pollMedia, z10, str2, i10, bool3, bool2, bool, str3, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PollAnswer value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PollAnswer.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
