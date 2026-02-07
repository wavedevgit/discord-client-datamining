package com.discord.chat.bridge.polls;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.polls.PollChatAnswerInteractionType;
import com.discord.chat.bridge.polls.PollLayoutType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import gt.a;
import java.util.List;
import jt.a2;
import jt.h;
import jt.h0;
import jt.n2;
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
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/polls/PollData.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/polls/PollData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/polls/PollData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/polls/PollData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class PollData$$serializer implements h0 {
    @NotNull
    public static final PollData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PollData$$serializer pollData$$serializer = new PollData$$serializer();
        INSTANCE = pollData$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.polls.PollData", pollData$$serializer, 17);
        a2Var.o("resources", false);
        a2Var.o("question", false);
        a2Var.o("answers", false);
        a2Var.o("answersInteraction", false);
        a2Var.o("answerTapAccessibilityLabel", true);
        a2Var.o("layoutType", false);
        a2Var.o("canSelectMultipleAnswers", true);
        a2Var.o("canTapAnswers", false);
        a2Var.o("canShowVoteCounts", false);
        a2Var.o("hasVoted", false);
        a2Var.o("isExpired", false);
        a2Var.o("containerStyle", true);
        a2Var.o("myAvatarUrl", true);
        a2Var.o("secondaryAction", true);
        a2Var.o("primaryAction", true);
        a2Var.o("tertiaryAction", true);
        a2Var.o("promptLabel", true);
        descriptor = a2Var;
    }

    private PollData$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = PollData.$childSerializers;
        n2 n2Var = n2.f31089a;
        h hVar = h.f31053a;
        PollAction$$serializer pollAction$$serializer = PollAction$$serializer.INSTANCE;
        return new KSerializer[]{PollResources$$serializer.INSTANCE, PollMedia$$serializer.INSTANCE, lazyArr[2].getValue(), PollChatAnswerInteractionType.Serializer.INSTANCE, a.u(n2Var), PollLayoutType.Serializer.INSTANCE, hVar, hVar, hVar, hVar, hVar, n2Var, a.u(n2Var), a.u(pollAction$$serializer), a.u(pollAction$$serializer), a.u(pollAction$$serializer), a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PollData deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        PollChatAnswerInteractionType pollChatAnswerInteractionType;
        int i10;
        PollLayoutType pollLayoutType;
        List list;
        PollMedia pollMedia;
        PollResources pollResources;
        String str;
        PollAction pollAction;
        PollAction pollAction2;
        String str2;
        String str3;
        PollAction pollAction3;
        String str4;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        Lazy[] lazyArr2;
        int i11;
        Lazy[] lazyArr3;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = PollData.$childSerializers;
        PollResources pollResources2 = null;
        if (b10.p()) {
            PollResources pollResources3 = (PollResources) b10.y(serialDescriptor, 0, PollResources$$serializer.INSTANCE, null);
            List list2 = (List) b10.y(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), null);
            pollChatAnswerInteractionType = (PollChatAnswerInteractionType) b10.y(serialDescriptor, 3, PollChatAnswerInteractionType.Serializer.INSTANCE, null);
            n2 n2Var = n2.f31089a;
            boolean C = b10.C(serialDescriptor, 6);
            boolean C2 = b10.C(serialDescriptor, 7);
            boolean C3 = b10.C(serialDescriptor, 8);
            boolean C4 = b10.C(serialDescriptor, 9);
            boolean C5 = b10.C(serialDescriptor, 10);
            String m10 = b10.m(serialDescriptor, 11);
            String str5 = (String) b10.n(serialDescriptor, 12, n2Var, null);
            PollAction$$serializer pollAction$$serializer = PollAction$$serializer.INSTANCE;
            PollAction pollAction4 = (PollAction) b10.n(serialDescriptor, 13, pollAction$$serializer, null);
            PollAction pollAction5 = (PollAction) b10.n(serialDescriptor, 14, pollAction$$serializer, null);
            pollAction3 = (PollAction) b10.n(serialDescriptor, 15, pollAction$$serializer, null);
            str = (String) b10.n(serialDescriptor, 16, n2Var, null);
            str3 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            pollMedia = (PollMedia) b10.y(serialDescriptor, 1, PollMedia$$serializer.INSTANCE, null);
            i10 = 131071;
            z10 = C5;
            z11 = C4;
            z12 = C2;
            z13 = C;
            pollLayoutType = (PollLayoutType) b10.y(serialDescriptor, 5, PollLayoutType.Serializer.INSTANCE, null);
            z14 = C3;
            str4 = m10;
            pollAction = pollAction5;
            pollAction2 = pollAction4;
            str2 = str5;
            list = list2;
            pollResources = pollResources3;
        } else {
            int i12 = 2;
            boolean z15 = true;
            int i13 = 0;
            boolean z16 = false;
            boolean z17 = false;
            boolean z18 = false;
            boolean z19 = false;
            boolean z20 = false;
            PollLayoutType pollLayoutType2 = null;
            pollChatAnswerInteractionType = null;
            List list3 = null;
            PollMedia pollMedia2 = null;
            String str6 = null;
            PollAction pollAction6 = null;
            PollAction pollAction7 = null;
            String str7 = null;
            String str8 = null;
            PollAction pollAction8 = null;
            String str9 = null;
            while (z15) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z15 = false;
                        i12 = 2;
                        break;
                    case 0:
                        lazyArr3 = lazyArr;
                        pollResources2 = (PollResources) b10.y(serialDescriptor, 0, PollResources$$serializer.INSTANCE, pollResources2);
                        i13 |= 1;
                        lazyArr = lazyArr3;
                        i12 = 2;
                        break;
                    case 1:
                        lazyArr3 = lazyArr;
                        pollMedia2 = (PollMedia) b10.y(serialDescriptor, 1, PollMedia$$serializer.INSTANCE, pollMedia2);
                        i13 |= 2;
                        lazyArr = lazyArr3;
                        i12 = 2;
                        break;
                    case 2:
                        lazyArr2 = lazyArr;
                        list3 = (List) b10.y(serialDescriptor, i12, (DeserializationStrategy) lazyArr2[i12].getValue(), list3);
                        i13 |= 4;
                        lazyArr = lazyArr2;
                        break;
                    case 3:
                        lazyArr2 = lazyArr;
                        pollChatAnswerInteractionType = (PollChatAnswerInteractionType) b10.y(serialDescriptor, 3, PollChatAnswerInteractionType.Serializer.INSTANCE, pollChatAnswerInteractionType);
                        i13 |= 8;
                        lazyArr = lazyArr2;
                        break;
                    case 4:
                        lazyArr2 = lazyArr;
                        str8 = (String) b10.n(serialDescriptor, 4, n2.f31089a, str8);
                        i13 |= 16;
                        lazyArr = lazyArr2;
                        break;
                    case 5:
                        lazyArr2 = lazyArr;
                        pollLayoutType2 = (PollLayoutType) b10.y(serialDescriptor, 5, PollLayoutType.Serializer.INSTANCE, pollLayoutType2);
                        i13 |= 32;
                        lazyArr = lazyArr2;
                        break;
                    case 6:
                        lazyArr2 = lazyArr;
                        z19 = b10.C(serialDescriptor, 6);
                        i13 |= 64;
                        lazyArr = lazyArr2;
                        break;
                    case 7:
                        lazyArr2 = lazyArr;
                        z18 = b10.C(serialDescriptor, 7);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        lazyArr = lazyArr2;
                        break;
                    case 8:
                        lazyArr2 = lazyArr;
                        z20 = b10.C(serialDescriptor, 8);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        lazyArr = lazyArr2;
                        break;
                    case 9:
                        lazyArr2 = lazyArr;
                        z17 = b10.C(serialDescriptor, 9);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        lazyArr = lazyArr2;
                        break;
                    case 10:
                        z16 = b10.C(serialDescriptor, 10);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        lazyArr = lazyArr;
                        break;
                    case 11:
                        lazyArr2 = lazyArr;
                        str9 = b10.m(serialDescriptor, 11);
                        i13 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        lazyArr = lazyArr2;
                        break;
                    case 12:
                        lazyArr2 = lazyArr;
                        str7 = (String) b10.n(serialDescriptor, 12, n2.f31089a, str7);
                        i13 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        lazyArr = lazyArr2;
                        break;
                    case 13:
                        lazyArr2 = lazyArr;
                        pollAction7 = (PollAction) b10.n(serialDescriptor, 13, PollAction$$serializer.INSTANCE, pollAction7);
                        i13 |= 8192;
                        lazyArr = lazyArr2;
                        break;
                    case 14:
                        lazyArr2 = lazyArr;
                        pollAction6 = (PollAction) b10.n(serialDescriptor, 14, PollAction$$serializer.INSTANCE, pollAction6);
                        i13 |= 16384;
                        lazyArr = lazyArr2;
                        break;
                    case 15:
                        lazyArr2 = lazyArr;
                        pollAction8 = (PollAction) b10.n(serialDescriptor, 15, PollAction$$serializer.INSTANCE, pollAction8);
                        i11 = PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                        i13 |= i11;
                        lazyArr = lazyArr2;
                        break;
                    case 16:
                        lazyArr2 = lazyArr;
                        str6 = (String) b10.n(serialDescriptor, 16, n2.f31089a, str6);
                        i11 = 65536;
                        i13 |= i11;
                        lazyArr = lazyArr2;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i13;
            pollLayoutType = pollLayoutType2;
            list = list3;
            pollMedia = pollMedia2;
            pollResources = pollResources2;
            str = str6;
            pollAction = pollAction6;
            pollAction2 = pollAction7;
            str2 = str7;
            str3 = str8;
            pollAction3 = pollAction8;
            str4 = str9;
            z10 = z16;
            z11 = z17;
            z12 = z18;
            z13 = z19;
            z14 = z20;
        }
        PollChatAnswerInteractionType pollChatAnswerInteractionType2 = pollChatAnswerInteractionType;
        b10.c(serialDescriptor);
        return new PollData(i10, pollResources, pollMedia, list, pollChatAnswerInteractionType2, str3, pollLayoutType, z13, z12, z14, z11, z10, str4, str2, pollAction2, pollAction, pollAction3, str, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PollData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PollData.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
