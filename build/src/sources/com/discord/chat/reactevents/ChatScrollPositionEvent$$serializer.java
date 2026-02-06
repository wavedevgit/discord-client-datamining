package com.discord.chat.reactevents;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import jt.a2;
import jt.h;
import jt.h0;
import jt.p0;
import jt.x;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/reactevents/ChatScrollPositionEvent.$serializer", "Ljt/h0;", "Lcom/discord/chat/reactevents/ChatScrollPositionEvent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/reactevents/ChatScrollPositionEvent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/reactevents/ChatScrollPositionEvent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ChatScrollPositionEvent$$serializer implements h0 {
    @NotNull
    public static final ChatScrollPositionEvent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ChatScrollPositionEvent$$serializer chatScrollPositionEvent$$serializer = new ChatScrollPositionEvent$$serializer();
        INSTANCE = chatScrollPositionEvent$$serializer;
        a2 a2Var = new a2("com.discord.chat.reactevents.ChatScrollPositionEvent", chatScrollPositionEvent$$serializer, 12);
        a2Var.o("isAtBottom", false);
        a2Var.o("isNearBottom", false);
        a2Var.o("isNearTop", false);
        a2Var.o("dragging", false);
        a2Var.o("decelerating", false);
        a2Var.o("shouldShowJumpToPresent", false);
        a2Var.o("isFirstMessageVisible", false);
        a2Var.o("firstVisibleMessageIndex", false);
        a2Var.o("firstVisibleMessagePercentVisible", false);
        a2Var.o("lastVisibleMessageIndex", false);
        a2Var.o("lastVisibleMessagePercentVisible", false);
        a2Var.o("changesetUpdateId", false);
        descriptor = a2Var;
    }

    private ChatScrollPositionEvent$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        x xVar = x.f31095a;
        KSerializer u10 = gt.a.u(xVar);
        KSerializer u11 = gt.a.u(xVar);
        h hVar = h.f31005a;
        p0 p0Var = p0.f31057a;
        return new KSerializer[]{hVar, hVar, hVar, hVar, hVar, hVar, hVar, p0Var, u10, p0Var, u11, p0Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ChatScrollPositionEvent deserialize(@NotNull Decoder decoder) {
        boolean z10;
        Double d10;
        Double d11;
        int i10;
        int i11;
        int i12;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        boolean z15;
        boolean z16;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i13 = 11;
        int i14 = 0;
        if (b10.p()) {
            z10 = b10.C(serialDescriptor, 0);
            boolean C = b10.C(serialDescriptor, 1);
            boolean C2 = b10.C(serialDescriptor, 2);
            boolean C3 = b10.C(serialDescriptor, 3);
            boolean C4 = b10.C(serialDescriptor, 4);
            boolean C5 = b10.C(serialDescriptor, 5);
            boolean C6 = b10.C(serialDescriptor, 6);
            int i15 = b10.i(serialDescriptor, 7);
            x xVar = x.f31095a;
            int i16 = b10.i(serialDescriptor, 9);
            i14 = 4095;
            i10 = b10.i(serialDescriptor, 11);
            d10 = (Double) b10.n(serialDescriptor, 10, xVar, null);
            i11 = i16;
            i12 = i15;
            z11 = C6;
            z12 = C5;
            z13 = C3;
            d11 = (Double) b10.n(serialDescriptor, 8, xVar, null);
            z14 = C4;
            z15 = C2;
            z16 = C;
        } else {
            boolean z17 = true;
            z10 = false;
            int i17 = 0;
            int i18 = 0;
            boolean z18 = false;
            boolean z19 = false;
            boolean z20 = false;
            boolean z21 = false;
            boolean z22 = false;
            boolean z23 = false;
            Double d12 = null;
            Double d13 = null;
            int i19 = 0;
            while (z17) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z17 = false;
                        i13 = 11;
                        break;
                    case 0:
                        i14 |= 1;
                        z10 = b10.C(serialDescriptor, 0);
                        i13 = 11;
                        break;
                    case 1:
                        z23 = b10.C(serialDescriptor, 1);
                        i14 |= 2;
                        i13 = 11;
                        break;
                    case 2:
                        z22 = b10.C(serialDescriptor, 2);
                        i14 |= 4;
                        i13 = 11;
                        break;
                    case 3:
                        z20 = b10.C(serialDescriptor, 3);
                        i14 |= 8;
                        break;
                    case 4:
                        z21 = b10.C(serialDescriptor, 4);
                        i14 |= 16;
                        break;
                    case 5:
                        z19 = b10.C(serialDescriptor, 5);
                        i14 |= 32;
                        break;
                    case 6:
                        z18 = b10.C(serialDescriptor, 6);
                        i14 |= 64;
                        break;
                    case 7:
                        i18 = b10.i(serialDescriptor, 7);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        d13 = (Double) b10.n(serialDescriptor, 8, x.f31095a, d13);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        i17 = b10.i(serialDescriptor, 9);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        d12 = (Double) b10.n(serialDescriptor, 10, x.f31095a, d12);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    case 11:
                        i19 = b10.i(serialDescriptor, i13);
                        i14 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            d10 = d12;
            d11 = d13;
            i10 = i19;
            i11 = i17;
            i12 = i18;
            z11 = z18;
            z12 = z19;
            z13 = z20;
            z14 = z21;
            z15 = z22;
            z16 = z23;
        }
        boolean z24 = z10;
        int i20 = i14;
        b10.c(serialDescriptor);
        return new ChatScrollPositionEvent(i20, z24, z16, z15, z13, z14, z12, z11, i12, d11, i11, d10, i10, null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ChatScrollPositionEvent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ChatScrollPositionEvent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
