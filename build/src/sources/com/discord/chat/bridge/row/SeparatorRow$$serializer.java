package com.discord.chat.bridge.row;

import com.discord.chat.bridge.ChangeType;
import com.discord.chat.bridge.summaries.Summary;
import com.discord.chat.bridge.summaries.Summary$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import dt.b0;
import gt.a2;
import gt.h;
import gt.h0;
import gt.n2;
import gt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/row/SeparatorRow.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/row/SeparatorRow;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/row/SeparatorRow;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/row/SeparatorRow;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class SeparatorRow$$serializer implements h0 {
    @NotNull
    public static final SeparatorRow$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        SeparatorRow$$serializer separatorRow$$serializer = new SeparatorRow$$serializer();
        INSTANCE = separatorRow$$serializer;
        a2 a2Var = new a2("0", separatorRow$$serializer, 8);
        a2Var.o("changeType", false);
        a2Var.o("index", false);
        a2Var.o("text", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o(ViewProps.COLOR, false);
        a2Var.o("scrollTo", true);
        a2Var.o("isBeforeContent", true);
        a2Var.o("summary", true);
        descriptor = a2Var;
    }

    private SeparatorRow$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        h hVar = h.f25266a;
        KSerializer u10 = et.a.u(hVar);
        KSerializer u11 = et.a.u(hVar);
        KSerializer u12 = et.a.u(Summary$$serializer.INSTANCE);
        p0 p0Var = p0.f25318a;
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{ChangeType.Serializer.INSTANCE, p0Var, n2Var, n2Var, p0Var, u10, u11, u12};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SeparatorRow deserialize(@NotNull Decoder decoder) {
        int i10;
        Summary summary;
        Boolean bool;
        Boolean bool2;
        int i11;
        int i12;
        ChangeType changeType;
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i13 = 7;
        int i14 = 6;
        if (b10.p()) {
            int i15 = b10.i(serialDescriptor, 1);
            String m10 = b10.m(serialDescriptor, 2);
            String m11 = b10.m(serialDescriptor, 3);
            int i16 = b10.i(serialDescriptor, 4);
            h hVar = h.f25266a;
            changeType = (ChangeType) b10.y(serialDescriptor, 0, ChangeType.Serializer.INSTANCE, null);
            summary = (Summary) b10.n(serialDescriptor, 7, Summary$$serializer.INSTANCE, null);
            bool = (Boolean) b10.n(serialDescriptor, 6, hVar, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 5, hVar, null);
            str2 = m11;
            i10 = i16;
            str = m10;
            i11 = i15;
            i12 = 255;
        } else {
            boolean z10 = true;
            int i17 = 0;
            int i18 = 0;
            Summary summary2 = null;
            Boolean bool3 = null;
            ChangeType changeType2 = null;
            String str3 = null;
            String str4 = null;
            int i19 = 0;
            Boolean bool4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i14 = 6;
                        break;
                    case 0:
                        changeType2 = (ChangeType) b10.y(serialDescriptor, 0, ChangeType.Serializer.INSTANCE, changeType2);
                        i18 |= 1;
                        i13 = 7;
                        i14 = 6;
                        break;
                    case 1:
                        i18 |= 2;
                        i19 = b10.i(serialDescriptor, 1);
                        break;
                    case 2:
                        i18 |= 4;
                        str3 = b10.m(serialDescriptor, 2);
                        break;
                    case 3:
                        str4 = b10.m(serialDescriptor, 3);
                        i18 |= 8;
                        break;
                    case 4:
                        i17 = b10.i(serialDescriptor, 4);
                        i18 |= 16;
                        break;
                    case 5:
                        bool4 = (Boolean) b10.n(serialDescriptor, 5, h.f25266a, bool4);
                        i18 |= 32;
                        break;
                    case 6:
                        bool3 = (Boolean) b10.n(serialDescriptor, i14, h.f25266a, bool3);
                        i18 |= 64;
                        break;
                    case 7:
                        summary2 = (Summary) b10.n(serialDescriptor, i13, Summary$$serializer.INSTANCE, summary2);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i17;
            summary = summary2;
            bool = bool3;
            bool2 = bool4;
            i11 = i19;
            i12 = i18;
            changeType = changeType2;
            str = str3;
            str2 = str4;
        }
        b10.c(serialDescriptor);
        return new SeparatorRow(i12, changeType, i11, str, str2, i10, bool2, bool, summary, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull SeparatorRow value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        SeparatorRow.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
