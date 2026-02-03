package com.discord.chat.bridge.botuikit;

import at.b0;
import com.discord.chat.bridge.botuikit.ActionComponentState;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import dt.a2;
import dt.h0;
import dt.n2;
import dt.p0;
import java.util.List;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/ChannelSelectComponent.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/ChannelSelectComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/ChannelSelectComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/ChannelSelectComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ChannelSelectComponent$$serializer implements h0 {
    @NotNull
    public static final ChannelSelectComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ChannelSelectComponent$$serializer channelSelectComponent$$serializer = new ChannelSelectComponent$$serializer();
        INSTANCE = channelSelectComponent$$serializer;
        a2 a2Var = new a2("8", channelSelectComponent$$serializer, 11);
        a2Var.o("type", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("state", false);
        a2Var.o("customId", false);
        a2Var.o(ReactTextInputShadowNode.PROP_PLACEHOLDER, true);
        a2Var.o(ViewProps.ACCESSIBILITY_LABEL, true);
        a2Var.o("minValues", false);
        a2Var.o("maxValues", false);
        a2Var.o("disabled", true);
        a2Var.o("selectedOptions", false);
        a2Var.o("channelTypes", true);
        descriptor = a2Var;
    }

    private ChannelSelectComponent$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = ChannelSelectComponent.$childSerializers;
        p0 p0Var = p0.f20994a;
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{p0Var, n2Var, ActionComponentState.Serializer.INSTANCE, n2Var, bt.a.u(n2Var), bt.a.u(n2Var), p0Var, p0Var, dt.h.f20942a, lazyArr[9].getValue(), bt.a.u((KSerializer) lazyArr[10].getValue())};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ChannelSelectComponent deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        List list;
        String str;
        List list2;
        String str2;
        ActionComponentState actionComponentState;
        int i11;
        int i12;
        int i13;
        boolean z10;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = ChannelSelectComponent.$childSerializers;
        int i14 = 7;
        int i15 = 0;
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 3);
            n2 n2Var = n2.f20978a;
            int i16 = b10.i(serialDescriptor, 6);
            int i17 = b10.i(serialDescriptor, 7);
            boolean C = b10.C(serialDescriptor, 8);
            list = (List) b10.n(serialDescriptor, 10, (DeserializationStrategy) lazyArr[10].getValue(), null);
            i12 = i17;
            i13 = i16;
            str = (String) b10.n(serialDescriptor, 5, n2Var, null);
            str4 = m11;
            z10 = C;
            str2 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            actionComponentState = (ActionComponentState) b10.y(serialDescriptor, 2, ActionComponentState.Serializer.INSTANCE, null);
            i11 = 2047;
            list2 = (List) b10.y(serialDescriptor, 9, (DeserializationStrategy) lazyArr[9].getValue(), null);
            str3 = m10;
        } else {
            boolean z11 = true;
            i10 = 0;
            int i18 = 0;
            boolean z12 = false;
            List list3 = null;
            String str5 = null;
            List list4 = null;
            String str6 = null;
            ActionComponentState actionComponentState2 = null;
            String str7 = null;
            String str8 = null;
            int i19 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i14 = 7;
                        break;
                    case 0:
                        i15 |= 1;
                        i10 = b10.i(serialDescriptor, 0);
                        i14 = 7;
                        break;
                    case 1:
                        str7 = b10.m(serialDescriptor, 1);
                        i15 |= 2;
                        i14 = 7;
                        break;
                    case 2:
                        actionComponentState2 = (ActionComponentState) b10.y(serialDescriptor, 2, ActionComponentState.Serializer.INSTANCE, actionComponentState2);
                        i15 |= 4;
                        i14 = 7;
                        break;
                    case 3:
                        str8 = b10.m(serialDescriptor, 3);
                        i15 |= 8;
                        i14 = 7;
                        break;
                    case 4:
                        str6 = (String) b10.n(serialDescriptor, 4, n2.f20978a, str6);
                        i15 |= 16;
                        i14 = 7;
                        break;
                    case 5:
                        str5 = (String) b10.n(serialDescriptor, 5, n2.f20978a, str5);
                        i15 |= 32;
                        i14 = 7;
                        break;
                    case 6:
                        i18 = b10.i(serialDescriptor, 6);
                        i15 |= 64;
                        continue;
                    case 7:
                        i19 = b10.i(serialDescriptor, i14);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        z12 = b10.C(serialDescriptor, 8);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        list4 = (List) b10.y(serialDescriptor, 9, (DeserializationStrategy) lazyArr[9].getValue(), list4);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        list3 = (List) b10.n(serialDescriptor, 10, (DeserializationStrategy) lazyArr[10].getValue(), list3);
                        i15 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            list = list3;
            str = str5;
            list2 = list4;
            str2 = str6;
            actionComponentState = actionComponentState2;
            i11 = i15;
            i12 = i19;
            i13 = i18;
            z10 = z12;
            str3 = str7;
            str4 = str8;
        }
        int i20 = i10;
        b10.c(serialDescriptor);
        return new ChannelSelectComponent(i11, i20, str3, actionComponentState, str4, str2, str, i13, i12, z10, list2, list, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ChannelSelectComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ChannelSelectComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
