package com.discord.chat.bridge.botuikit;

import com.discord.chat.bridge.botuikit.ActionComponentState;
import com.discord.chat.bridge.botuikit.ButtonStyle;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import jt.a2;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/ButtonComponent.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/botuikit/ButtonComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/ButtonComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/ButtonComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ButtonComponent$$serializer implements h0 {
    @NotNull
    public static final ButtonComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ButtonComponent$$serializer buttonComponent$$serializer = new ButtonComponent$$serializer();
        INSTANCE = buttonComponent$$serializer;
        a2 a2Var = new a2("2", buttonComponent$$serializer, 10);
        a2Var.o("type", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("state", false);
        a2Var.o("customId", true);
        a2Var.o("label", true);
        a2Var.o("style", false);
        a2Var.o("disabled", true);
        a2Var.o("emoji", true);
        a2Var.o("url", true);
        a2Var.o("skuId", true);
        descriptor = a2Var;
    }

    private ButtonComponent$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{p0.f31105a, n2Var, ActionComponentState.Serializer.INSTANCE, gt.a.u(n2Var), gt.a.u(n2Var), ButtonStyle.Serializer.INSTANCE, jt.h.f31053a, gt.a.u(ComponentEmoji$$serializer.INSTANCE), gt.a.u(n2Var), gt.a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ButtonComponent deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        ButtonStyle buttonStyle;
        ComponentEmoji componentEmoji;
        String str3;
        String str4;
        ActionComponentState actionComponentState;
        boolean z10;
        int i11;
        String str5;
        char c10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 9;
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            n2 n2Var = n2.f31089a;
            boolean C = b10.C(serialDescriptor, 6);
            str = (String) b10.n(serialDescriptor, 9, n2Var, null);
            componentEmoji = (ComponentEmoji) b10.n(serialDescriptor, 7, ComponentEmoji$$serializer.INSTANCE, null);
            z10 = C;
            buttonStyle = (ButtonStyle) b10.y(serialDescriptor, 5, ButtonStyle.Serializer.INSTANCE, null);
            str4 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 8, n2Var, null);
            str3 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            actionComponentState = (ActionComponentState) b10.y(serialDescriptor, 2, ActionComponentState.Serializer.INSTANCE, null);
            str5 = m10;
            i11 = 1023;
        } else {
            boolean z11 = true;
            i10 = 0;
            int i13 = 0;
            String str6 = null;
            String str7 = null;
            ButtonStyle buttonStyle2 = null;
            ComponentEmoji componentEmoji2 = null;
            String str8 = null;
            String str9 = null;
            String str10 = null;
            boolean z12 = false;
            ActionComponentState actionComponentState2 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i12 = 9;
                    case 0:
                        i13 |= 1;
                        i10 = b10.i(serialDescriptor, 0);
                        i12 = 9;
                    case 1:
                        str10 = b10.m(serialDescriptor, 1);
                        i13 |= 2;
                        i12 = 9;
                    case 2:
                        actionComponentState2 = (ActionComponentState) b10.y(serialDescriptor, 2, ActionComponentState.Serializer.INSTANCE, actionComponentState2);
                        i13 |= 4;
                        i12 = 9;
                    case 3:
                        str9 = (String) b10.n(serialDescriptor, 3, n2.f31089a, str9);
                        i13 |= 8;
                        i12 = 9;
                    case 4:
                        str8 = (String) b10.n(serialDescriptor, 4, n2.f31089a, str8);
                        i13 |= 16;
                        i12 = 9;
                    case 5:
                        buttonStyle2 = (ButtonStyle) b10.y(serialDescriptor, 5, ButtonStyle.Serializer.INSTANCE, buttonStyle2);
                        i13 |= 32;
                        i12 = 9;
                    case 6:
                        c10 = 7;
                        z12 = b10.C(serialDescriptor, 6);
                        i13 |= 64;
                        i12 = 9;
                    case 7:
                        c10 = 7;
                        componentEmoji2 = (ComponentEmoji) b10.n(serialDescriptor, 7, ComponentEmoji$$serializer.INSTANCE, componentEmoji2);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i12 = 9;
                    case 8:
                        str7 = (String) b10.n(serialDescriptor, 8, n2.f31089a, str7);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                    case 9:
                        str6 = (String) b10.n(serialDescriptor, i12, n2.f31089a, str6);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                    default:
                        throw new b0(o10);
                }
            }
            str = str6;
            str2 = str7;
            buttonStyle = buttonStyle2;
            componentEmoji = componentEmoji2;
            str3 = str8;
            str4 = str9;
            actionComponentState = actionComponentState2;
            z10 = z12;
            i11 = i13;
            str5 = str10;
        }
        int i14 = i10;
        b10.c(serialDescriptor);
        return new ButtonComponent(i11, i14, str5, actionComponentState, str4, str3, buttonStyle, z10, componentEmoji, str2, str, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ButtonComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ButtonComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
