package com.discord.chat.bridge.botuikit;

import at.b0;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.a2;
import dt.h0;
import dt.k1;
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
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/ContainerComponent.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/ContainerComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/ContainerComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/ContainerComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ContainerComponent$$serializer implements h0 {
    @NotNull
    public static final ContainerComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ContainerComponent$$serializer containerComponent$$serializer = new ContainerComponent$$serializer();
        INSTANCE = containerComponent$$serializer;
        a2 a2Var = new a2("17", containerComponent$$serializer, 10);
        a2Var.o("type", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("errorText", true);
        a2Var.o("components", false);
        a2Var.o("accentColor", true);
        a2Var.o("isSpoiler", false);
        a2Var.o("spoilerDescription", false);
        a2Var.o("themedBackgroundColor", true);
        a2Var.o("spoilerOrNull", true);
        a2Var.o("obscureOrNull", true);
        descriptor = a2Var;
    }

    private ContainerComponent$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = ContainerComponent.$childSerializers;
        p0 p0Var = p0.f20994a;
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{p0Var, n2Var, bt.a.u(n2Var), lazyArr[3].getValue(), bt.a.u(p0Var), dt.h.f20942a, bt.a.u(n2Var), bt.a.u(p0Var), bt.a.u(n2Var), bt.a.u(k1.f20961a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ContainerComponent deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        Void r31;
        String str;
        Integer num;
        Integer num2;
        String str2;
        List list;
        String str3;
        boolean z10;
        int i11;
        String str4;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = ContainerComponent.$childSerializers;
        int i12 = 9;
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            n2 n2Var = n2.f20978a;
            p0 p0Var = p0.f20994a;
            boolean C = b10.C(serialDescriptor, 5);
            list = (List) b10.y(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), null);
            r31 = (Void) b10.n(serialDescriptor, 9, k1.f20961a, null);
            num = (Integer) b10.n(serialDescriptor, 7, p0Var, null);
            str2 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            z10 = C;
            str = (String) b10.n(serialDescriptor, 8, n2Var, null);
            num2 = (Integer) b10.n(serialDescriptor, 4, p0Var, null);
            str3 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            i11 = 1023;
            str4 = m10;
        } else {
            int i13 = 3;
            boolean z11 = true;
            i10 = 0;
            int i14 = 0;
            Void r62 = null;
            String str5 = null;
            Integer num3 = null;
            Integer num4 = null;
            String str6 = null;
            List list2 = null;
            String str7 = null;
            boolean z12 = false;
            String str8 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i12 = 9;
                        i13 = 3;
                        break;
                    case 0:
                        i14 |= 1;
                        i10 = b10.i(serialDescriptor, 0);
                        i12 = 9;
                        i13 = 3;
                        break;
                    case 1:
                        str7 = b10.m(serialDescriptor, 1);
                        i14 |= 2;
                        i12 = 9;
                        i13 = 3;
                        break;
                    case 2:
                        str8 = (String) b10.n(serialDescriptor, 2, n2.f20978a, str8);
                        i14 |= 4;
                        i12 = 9;
                        i13 = 3;
                        break;
                    case 3:
                        list2 = (List) b10.y(serialDescriptor, i13, (DeserializationStrategy) lazyArr[i13].getValue(), list2);
                        i14 |= 8;
                        i12 = 9;
                        break;
                    case 4:
                        num4 = (Integer) b10.n(serialDescriptor, 4, p0.f20994a, num4);
                        i14 |= 16;
                        i12 = 9;
                        break;
                    case 5:
                        z12 = b10.C(serialDescriptor, 5);
                        i14 |= 32;
                        i12 = 9;
                        break;
                    case 6:
                        str6 = (String) b10.n(serialDescriptor, 6, n2.f20978a, str6);
                        i14 |= 64;
                        i12 = 9;
                        break;
                    case 7:
                        num3 = (Integer) b10.n(serialDescriptor, 7, p0.f20994a, num3);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i12 = 9;
                        break;
                    case 8:
                        str5 = (String) b10.n(serialDescriptor, 8, n2.f20978a, str5);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        r62 = (Void) b10.n(serialDescriptor, i12, k1.f20961a, r62);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            r31 = r62;
            str = str5;
            num = num3;
            num2 = num4;
            str2 = str6;
            list = list2;
            str3 = str8;
            z10 = z12;
            i11 = i14;
            str4 = str7;
        }
        int i15 = i10;
        b10.c(serialDescriptor);
        return new ContainerComponent(i11, i15, str4, str3, list, num2, z10, str2, num, str, r31, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ContainerComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ContainerComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
