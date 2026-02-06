package com.discord.chat.bridge.row;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.BackgroundHighlight;
import com.discord.chat.bridge.BackgroundHighlight$$serializer;
import com.discord.chat.bridge.ChangeType;
import com.discord.chat.bridge.MessageBase;
import com.discord.chat.bridge.SwipeActionsType;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.chat.bridge.reaction.ReactionsTheme$$serializer;
import com.discord.chat.bridge.truncation.Truncation;
import com.discord.chat.bridge.truncation.Truncation$$serializer;
import com.discord.chat.presentation.root.MessageContextType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import jt.a2;
import jt.h;
import jt.h0;
import jt.n2;
import jt.p0;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/row/MessageRow.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/row/MessageRow;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/row/MessageRow;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/row/MessageRow;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MessageRow$$serializer implements h0 {
    @NotNull
    public static final MessageRow$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MessageRow$$serializer messageRow$$serializer = new MessageRow$$serializer();
        INSTANCE = messageRow$$serializer;
        a2 a2Var = new a2("1", messageRow$$serializer, 14);
        a2Var.o("index", false);
        a2Var.o("changeType", false);
        a2Var.o("jumped", true);
        a2Var.o("message", false);
        a2Var.o("canAddNewReactions", true);
        a2Var.o("addNewReactionAccessibilityLabel", true);
        a2Var.o("reactionsTheme", true);
        a2Var.o("showReplyButton", true);
        a2Var.o("renderContentOnly", true);
        a2Var.o("reactTag", true);
        a2Var.o("truncation", true);
        a2Var.o("backgroundHighlight", true);
        a2Var.o("swipeActions", true);
        a2Var.o("contextType", true);
        descriptor = a2Var;
    }

    private MessageRow$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = MessageRow.$childSerializers;
        p0 p0Var = p0.f31057a;
        h hVar = h.f31005a;
        return new KSerializer[]{p0Var, ChangeType.Serializer.INSTANCE, gt.a.u(hVar), MessageSerializer.INSTANCE, gt.a.u(hVar), gt.a.u(n2.f31041a), gt.a.u(ReactionsTheme$$serializer.INSTANCE), gt.a.u(hVar), hVar, gt.a.u(p0Var), gt.a.u(Truncation$$serializer.INSTANCE), gt.a.u(BackgroundHighlight$$serializer.INSTANCE), SwipeActionsType.Serializer.INSTANCE, gt.a.u((KSerializer) lazyArr[13].getValue())};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MessageRow deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        MessageContextType messageContextType;
        ChangeType changeType;
        SwipeActionsType swipeActionsType;
        Truncation truncation;
        Integer num;
        Boolean bool;
        String str;
        BackgroundHighlight backgroundHighlight;
        ReactionsTheme reactionsTheme;
        Boolean bool2;
        MessageBase messageBase;
        Boolean bool3;
        int i11;
        boolean z10;
        Boolean bool4;
        ChangeType changeType2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = MessageRow.$childSerializers;
        if (b10.p()) {
            int i12 = b10.i(serialDescriptor, 0);
            ChangeType changeType3 = (ChangeType) b10.y(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, null);
            h hVar = h.f31005a;
            boolean C = b10.C(serialDescriptor, 8);
            BackgroundHighlight backgroundHighlight2 = (BackgroundHighlight) b10.n(serialDescriptor, 11, BackgroundHighlight$$serializer.INSTANCE, null);
            i10 = 16383;
            swipeActionsType = (SwipeActionsType) b10.y(serialDescriptor, 12, SwipeActionsType.Serializer.INSTANCE, null);
            i11 = i12;
            messageContextType = (MessageContextType) b10.n(serialDescriptor, 13, (DeserializationStrategy) lazyArr[13].getValue(), null);
            messageBase = (MessageBase) b10.y(serialDescriptor, 3, MessageSerializer.INSTANCE, null);
            num = (Integer) b10.n(serialDescriptor, 9, p0.f31057a, null);
            bool = (Boolean) b10.n(serialDescriptor, 7, hVar, null);
            reactionsTheme = (ReactionsTheme) b10.n(serialDescriptor, 6, ReactionsTheme$$serializer.INSTANCE, null);
            str = (String) b10.n(serialDescriptor, 5, n2.f31041a, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 4, hVar, null);
            z10 = C;
            truncation = (Truncation) b10.n(serialDescriptor, 10, Truncation$$serializer.INSTANCE, null);
            bool3 = (Boolean) b10.n(serialDescriptor, 2, hVar, null);
            changeType = changeType3;
            backgroundHighlight = backgroundHighlight2;
        } else {
            int i13 = 13;
            int i14 = 0;
            boolean z11 = false;
            MessageContextType messageContextType2 = null;
            ChangeType changeType4 = null;
            SwipeActionsType swipeActionsType2 = null;
            Truncation truncation2 = null;
            Integer num2 = null;
            Boolean bool5 = null;
            String str2 = null;
            BackgroundHighlight backgroundHighlight3 = null;
            ReactionsTheme reactionsTheme2 = null;
            Boolean bool6 = null;
            boolean z12 = true;
            i10 = 0;
            Boolean bool7 = null;
            MessageBase messageBase2 = null;
            while (z12) {
                int i15 = i13;
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        bool4 = bool7;
                        z12 = false;
                        bool7 = bool4;
                        i13 = 13;
                        break;
                    case 0:
                        bool4 = bool7;
                        i14 = b10.i(serialDescriptor, 0);
                        i10 |= 1;
                        bool7 = bool4;
                        i13 = 13;
                        break;
                    case 1:
                        bool4 = bool7;
                        changeType4 = (ChangeType) b10.y(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, changeType4);
                        i10 |= 2;
                        bool7 = bool4;
                        i13 = 13;
                        break;
                    case 2:
                        changeType2 = changeType4;
                        bool7 = (Boolean) b10.n(serialDescriptor, 2, h.f31005a, bool7);
                        i10 |= 4;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 3:
                        changeType2 = changeType4;
                        messageBase2 = (MessageBase) b10.y(serialDescriptor, 3, MessageSerializer.INSTANCE, messageBase2);
                        i10 |= 8;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 4:
                        changeType2 = changeType4;
                        bool6 = (Boolean) b10.n(serialDescriptor, 4, h.f31005a, bool6);
                        i10 |= 16;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 5:
                        changeType2 = changeType4;
                        str2 = (String) b10.n(serialDescriptor, 5, n2.f31041a, str2);
                        i10 |= 32;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 6:
                        changeType2 = changeType4;
                        reactionsTheme2 = (ReactionsTheme) b10.n(serialDescriptor, 6, ReactionsTheme$$serializer.INSTANCE, reactionsTheme2);
                        i10 |= 64;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 7:
                        changeType2 = changeType4;
                        bool5 = (Boolean) b10.n(serialDescriptor, 7, h.f31005a, bool5);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 8:
                        changeType2 = changeType4;
                        z11 = b10.C(serialDescriptor, 8);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 9:
                        changeType2 = changeType4;
                        num2 = (Integer) b10.n(serialDescriptor, 9, p0.f31057a, num2);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 10:
                        changeType2 = changeType4;
                        truncation2 = (Truncation) b10.n(serialDescriptor, 10, Truncation$$serializer.INSTANCE, truncation2);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 11:
                        changeType2 = changeType4;
                        backgroundHighlight3 = (BackgroundHighlight) b10.n(serialDescriptor, 11, BackgroundHighlight$$serializer.INSTANCE, backgroundHighlight3);
                        i10 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 12:
                        changeType2 = changeType4;
                        swipeActionsType2 = (SwipeActionsType) b10.y(serialDescriptor, 12, SwipeActionsType.Serializer.INSTANCE, swipeActionsType2);
                        i10 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        changeType4 = changeType2;
                        i13 = 13;
                        break;
                    case 13:
                        messageContextType2 = (MessageContextType) b10.n(serialDescriptor, i15, (DeserializationStrategy) lazyArr[i15].getValue(), messageContextType2);
                        i10 |= 8192;
                        i13 = i15;
                        changeType4 = changeType4;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            messageContextType = messageContextType2;
            changeType = changeType4;
            swipeActionsType = swipeActionsType2;
            truncation = truncation2;
            num = num2;
            bool = bool5;
            str = str2;
            backgroundHighlight = backgroundHighlight3;
            reactionsTheme = reactionsTheme2;
            bool2 = bool6;
            messageBase = messageBase2;
            bool3 = bool7;
            i11 = i14;
            z10 = z11;
        }
        int i16 = i10;
        b10.c(serialDescriptor);
        return new MessageRow(i16, i11, changeType, bool3, messageBase, bool2, str, reactionsTheme, bool, z10, num, truncation, backgroundHighlight, swipeActionsType, messageContextType, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MessageRow value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MessageRow.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
