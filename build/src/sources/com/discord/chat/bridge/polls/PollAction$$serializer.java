package com.discord.chat.bridge.polls;

import at.b0;
import bt.a;
import com.facebook.react.uimanager.ViewProps;
import dt.a2;
import dt.h;
import dt.h0;
import dt.n2;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/polls/PollAction.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/polls/PollAction;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/polls/PollAction;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/polls/PollAction;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PollAction$$serializer implements h0 {
    @NotNull
    public static final PollAction$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PollAction$$serializer pollAction$$serializer = new PollAction$$serializer();
        INSTANCE = pollAction$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.polls.PollAction", pollAction$$serializer, 6);
        a2Var.o("label", false);
        a2Var.o("presentation", false);
        a2Var.o(ViewProps.ENABLED, false);
        a2Var.o("type", true);
        a2Var.o("secondaryLabel", true);
        a2Var.o(ViewProps.ACCESSIBILITY_HINT, true);
        descriptor = a2Var;
    }

    private PollAction$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = PollAction.$childSerializers;
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{n2Var, lazyArr[1].getValue(), h.f20942a, a.u(n2Var), a.u(n2Var), a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PollAction deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        boolean z10;
        int i10;
        String str;
        PollActionPresentation pollActionPresentation;
        String str2;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = PollAction.$childSerializers;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            boolean C = b10.C(serialDescriptor, 2);
            n2 n2Var = n2.f20978a;
            pollActionPresentation = (PollActionPresentation) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), null);
            str = m10;
            str4 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            str3 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            z10 = C;
            i10 = 63;
        } else {
            boolean z11 = true;
            boolean z12 = false;
            String str5 = null;
            PollActionPresentation pollActionPresentation2 = null;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            int i11 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        continue;
                    case 0:
                        str5 = b10.m(serialDescriptor, 0);
                        i11 |= 1;
                        continue;
                    case 1:
                        pollActionPresentation2 = (PollActionPresentation) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), pollActionPresentation2);
                        i11 |= 2;
                        break;
                    case 2:
                        z12 = b10.C(serialDescriptor, 2);
                        i11 |= 4;
                        break;
                    case 3:
                        str6 = (String) b10.n(serialDescriptor, 3, n2.f20978a, str6);
                        i11 |= 8;
                        break;
                    case 4:
                        str7 = (String) b10.n(serialDescriptor, 4, n2.f20978a, str7);
                        i11 |= 16;
                        break;
                    case 5:
                        str8 = (String) b10.n(serialDescriptor, 5, n2.f20978a, str8);
                        i11 |= 32;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            z10 = z12;
            i10 = i11;
            str = str5;
            pollActionPresentation = pollActionPresentation2;
            str2 = str6;
            str3 = str7;
            str4 = str8;
        }
        b10.c(serialDescriptor);
        return new PollAction(i10, str, pollActionPresentation, z10, str2, str3, str4, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PollAction value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PollAction.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
