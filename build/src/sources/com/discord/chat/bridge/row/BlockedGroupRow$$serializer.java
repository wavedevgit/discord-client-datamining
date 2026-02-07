package com.discord.chat.bridge.row;

import com.discord.chat.bridge.ChangeType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import ft.b0;
import java.util.List;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/row/BlockedGroupRow.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/row/BlockedGroupRow;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/row/BlockedGroupRow;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/row/BlockedGroupRow;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class BlockedGroupRow$$serializer implements h0 {
    @NotNull
    public static final BlockedGroupRow$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        BlockedGroupRow$$serializer blockedGroupRow$$serializer = new BlockedGroupRow$$serializer();
        INSTANCE = blockedGroupRow$$serializer;
        a2 a2Var = new a2("2", blockedGroupRow$$serializer, 9);
        a2Var.o("index", false);
        a2Var.o("changeType", false);
        a2Var.o(ViewProps.COLOR, false);
        a2Var.o(ViewProps.BORDER_COLOR, false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("text", false);
        a2Var.o("revealed", false);
        a2Var.o("button", false);
        a2Var.o("content", true);
        descriptor = a2Var;
    }

    private BlockedGroupRow$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = BlockedGroupRow.$childSerializers;
        KSerializer u10 = gt.a.u((KSerializer) lazyArr[8].getValue());
        p0 p0Var = p0.f31105a;
        return new KSerializer[]{p0Var, ChangeType.Serializer.INSTANCE, p0Var, p0Var, p0Var, n2.f31089a, h.f31053a, BlockedGroupButton$$serializer.INSTANCE, u10};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final BlockedGroupRow deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        ChangeType changeType;
        List list;
        BlockedGroupButton blockedGroupButton;
        int i11;
        boolean z10;
        int i12;
        int i13;
        int i14;
        String str;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = BlockedGroupRow.$childSerializers;
        int i15 = 7;
        int i16 = 6;
        int i17 = 5;
        int i18 = 0;
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            int i19 = b10.i(serialDescriptor, 2);
            int i20 = b10.i(serialDescriptor, 3);
            int i21 = b10.i(serialDescriptor, 4);
            String m10 = b10.m(serialDescriptor, 5);
            boolean C = b10.C(serialDescriptor, 6);
            list = (List) b10.n(serialDescriptor, 8, (DeserializationStrategy) lazyArr[8].getValue(), null);
            blockedGroupButton = (BlockedGroupButton) b10.y(serialDescriptor, 7, BlockedGroupButton$$serializer.INSTANCE, null);
            z10 = C;
            str = m10;
            i12 = i20;
            i13 = i21;
            i14 = i19;
            i11 = 511;
            changeType = (ChangeType) b10.y(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, null);
        } else {
            boolean z11 = true;
            i10 = 0;
            int i22 = 0;
            int i23 = 0;
            int i24 = 0;
            List list2 = null;
            BlockedGroupButton blockedGroupButton2 = null;
            ChangeType changeType2 = null;
            String str2 = null;
            boolean z12 = false;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i15 = 7;
                        i16 = 6;
                        break;
                    case 0:
                        i10 = b10.i(serialDescriptor, 0);
                        i18 |= 1;
                        i15 = 7;
                        i16 = 6;
                        i17 = 5;
                        break;
                    case 1:
                        i18 |= 2;
                        changeType2 = (ChangeType) b10.y(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, changeType2);
                        i15 = 7;
                        i16 = 6;
                        i17 = 5;
                        break;
                    case 2:
                        i24 = b10.i(serialDescriptor, 2);
                        i18 |= 4;
                        i15 = 7;
                        break;
                    case 3:
                        i22 = b10.i(serialDescriptor, 3);
                        i18 |= 8;
                        break;
                    case 4:
                        i23 = b10.i(serialDescriptor, 4);
                        i18 |= 16;
                        break;
                    case 5:
                        str2 = b10.m(serialDescriptor, i17);
                        i18 |= 32;
                        break;
                    case 6:
                        z12 = b10.C(serialDescriptor, i16);
                        i18 |= 64;
                        break;
                    case 7:
                        blockedGroupButton2 = (BlockedGroupButton) b10.y(serialDescriptor, i15, BlockedGroupButton$$serializer.INSTANCE, blockedGroupButton2);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        list2 = (List) b10.n(serialDescriptor, 8, (DeserializationStrategy) lazyArr[8].getValue(), list2);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            changeType = changeType2;
            list = list2;
            blockedGroupButton = blockedGroupButton2;
            i11 = i18;
            z10 = z12;
            i12 = i22;
            i13 = i23;
            i14 = i24;
            str = str2;
        }
        int i25 = i10;
        b10.c(serialDescriptor);
        return new BlockedGroupRow(i11, i25, changeType, i14, i12, i13, str, z10, blockedGroupButton, list, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull BlockedGroupRow value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        BlockedGroupRow.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
