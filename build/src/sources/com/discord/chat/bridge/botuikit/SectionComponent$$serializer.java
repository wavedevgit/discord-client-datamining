package com.discord.chat.bridge.botuikit;

import at.b0;
import com.discord.chat.bridge.botuikit.SectionAccessory;
import com.facebook.react.devsupport.StackTraceHelper;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/SectionComponent.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/SectionComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/SectionComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/SectionComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class SectionComponent$$serializer implements h0 {
    @NotNull
    public static final SectionComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        SectionComponent$$serializer sectionComponent$$serializer = new SectionComponent$$serializer();
        INSTANCE = sectionComponent$$serializer;
        a2 a2Var = new a2("9", sectionComponent$$serializer, 5);
        a2Var.o("type", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("errorText", true);
        a2Var.o("components", false);
        a2Var.o("accessory", false);
        descriptor = a2Var;
    }

    private SectionComponent$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = SectionComponent.$childSerializers;
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{p0.f20994a, n2Var, bt.a.u(n2Var), lazyArr[3].getValue(), SectionAccessory.Serializer.INSTANCE};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SectionComponent deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        int i11;
        String str;
        String str2;
        List list;
        SectionAccessory sectionAccessory;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = SectionComponent.$childSerializers;
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            list = (List) b10.y(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), null);
            sectionAccessory = (SectionAccessory) b10.y(serialDescriptor, 4, SectionAccessory.Serializer.INSTANCE, null);
            str2 = (String) b10.n(serialDescriptor, 2, n2.f20978a, null);
            i11 = 31;
            str = m10;
        } else {
            boolean z10 = true;
            i10 = 0;
            String str3 = null;
            String str4 = null;
            List list2 = null;
            SectionAccessory sectionAccessory2 = null;
            int i12 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    i10 = b10.i(serialDescriptor, 0);
                    i12 |= 1;
                } else if (o10 == 1) {
                    str3 = b10.m(serialDescriptor, 1);
                    i12 |= 2;
                } else if (o10 == 2) {
                    str4 = (String) b10.n(serialDescriptor, 2, n2.f20978a, str4);
                    i12 |= 4;
                } else if (o10 == 3) {
                    list2 = (List) b10.y(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), list2);
                    i12 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    sectionAccessory2 = (SectionAccessory) b10.y(serialDescriptor, 4, SectionAccessory.Serializer.INSTANCE, sectionAccessory2);
                    i12 |= 16;
                }
            }
            i11 = i12;
            str = str3;
            str2 = str4;
            list = list2;
            sectionAccessory = sectionAccessory2;
        }
        int i13 = i10;
        b10.c(serialDescriptor);
        return new SectionComponent(i11, i13, str, str2, list, sectionAccessory, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull SectionComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        SectionComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
