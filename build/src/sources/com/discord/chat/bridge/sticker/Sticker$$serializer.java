package com.discord.chat.bridge.sticker;

import at.b0;
import bt.a;
import com.discord.chat.bridge.sticker.StickerFormatType;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import dt.a2;
import dt.h0;
import dt.n2;
import dt.p0;
import dt.z0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/sticker/Sticker.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/sticker/Sticker;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/sticker/Sticker;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/sticker/Sticker;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class Sticker$$serializer implements h0 {
    @NotNull
    public static final Sticker$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        Sticker$$serializer sticker$$serializer = new Sticker$$serializer();
        INSTANCE = sticker$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.sticker.Sticker", sticker$$serializer, 9);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("format_type", false);
        a2Var.o(StackTraceHelper.NAME_KEY, false);
        a2Var.o("asset", false);
        a2Var.o("url", false);
        a2Var.o("width", true);
        a2Var.o("height", true);
        a2Var.o("renderMode", false);
        a2Var.o(ViewProps.ACCESSIBILITY_LABEL, false);
        descriptor = a2Var;
    }

    private Sticker$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f20994a;
        KSerializer u10 = a.u(p0Var);
        KSerializer u11 = a.u(p0Var);
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{z0.f21052a, StickerFormatType.StickerFormatTypeSerializer.INSTANCE, n2Var, n2Var, n2Var, u10, u11, p0Var, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final Sticker deserialize(@NotNull Decoder decoder) {
        int i10;
        Integer num;
        Integer num2;
        int i11;
        StickerFormatType stickerFormatType;
        String str;
        String str2;
        String str3;
        String str4;
        long j10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 7;
        int i13 = 6;
        if (b10.p()) {
            long f10 = b10.f(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 2);
            String m11 = b10.m(serialDescriptor, 3);
            String m12 = b10.m(serialDescriptor, 4);
            p0 p0Var = p0.f20994a;
            int i14 = b10.i(serialDescriptor, 7);
            stickerFormatType = (StickerFormatType) b10.y(serialDescriptor, 1, StickerFormatType.StickerFormatTypeSerializer.INSTANCE, null);
            i10 = i14;
            num = (Integer) b10.n(serialDescriptor, 6, p0Var, null);
            num2 = (Integer) b10.n(serialDescriptor, 5, p0Var, null);
            str2 = m11;
            str4 = b10.m(serialDescriptor, 8);
            str3 = m12;
            str = m10;
            i11 = 511;
            j10 = f10;
        } else {
            boolean z10 = true;
            int i15 = 0;
            Integer num3 = null;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            long j11 = 0;
            int i16 = 0;
            Integer num4 = null;
            StickerFormatType stickerFormatType2 = null;
            String str8 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i12 = 7;
                        break;
                    case 0:
                        j11 = b10.f(serialDescriptor, 0);
                        i16 |= 1;
                        i12 = 7;
                        i13 = 6;
                        break;
                    case 1:
                        stickerFormatType2 = (StickerFormatType) b10.y(serialDescriptor, 1, StickerFormatType.StickerFormatTypeSerializer.INSTANCE, stickerFormatType2);
                        i16 |= 2;
                        i12 = 7;
                        i13 = 6;
                        break;
                    case 2:
                        str8 = b10.m(serialDescriptor, 2);
                        i16 |= 4;
                        break;
                    case 3:
                        str5 = b10.m(serialDescriptor, 3);
                        i16 |= 8;
                        break;
                    case 4:
                        str6 = b10.m(serialDescriptor, 4);
                        i16 |= 16;
                        break;
                    case 5:
                        num4 = (Integer) b10.n(serialDescriptor, 5, p0.f20994a, num4);
                        i16 |= 32;
                        break;
                    case 6:
                        num3 = (Integer) b10.n(serialDescriptor, i13, p0.f20994a, num3);
                        i16 |= 64;
                        break;
                    case 7:
                        i15 = b10.i(serialDescriptor, i12);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        str7 = b10.m(serialDescriptor, 8);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i15;
            num = num3;
            num2 = num4;
            i11 = i16;
            stickerFormatType = stickerFormatType2;
            str = str8;
            str2 = str5;
            str3 = str6;
            str4 = str7;
            j10 = j11;
        }
        b10.c(serialDescriptor);
        return new Sticker(i11, j10, stickerFormatType, str, str2, str3, num2, num, i10, str4, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull Sticker value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        Sticker.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
