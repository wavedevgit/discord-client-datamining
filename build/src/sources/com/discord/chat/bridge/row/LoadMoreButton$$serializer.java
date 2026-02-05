package com.discord.chat.bridge.row;

import com.facebook.react.uimanager.ViewProps;
import dt.b0;
import gt.a2;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/row/LoadMoreButton.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/row/LoadMoreButton;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/row/LoadMoreButton;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/row/LoadMoreButton;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LoadMoreButton$$serializer implements h0 {
    @NotNull
    public static final LoadMoreButton$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LoadMoreButton$$serializer loadMoreButton$$serializer = new LoadMoreButton$$serializer();
        INSTANCE = loadMoreButton$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.row.LoadMoreButton", loadMoreButton$$serializer, 5);
        a2Var.o("action", false);
        a2Var.o("text", false);
        a2Var.o(ViewProps.BACKGROUND_COLOR, false);
        a2Var.o("cornerRadius", true);
        a2Var.o(ViewProps.COLOR, true);
        descriptor = a2Var;
    }

    private LoadMoreButton$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        p0 p0Var = p0.f25318a;
        return new KSerializer[]{LoadingAction$$serializer.INSTANCE, n2.f25302a, p0Var, et.a.u(p0Var), et.a.u(p0Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LoadMoreButton deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        LoadingAction loadingAction;
        String str;
        Integer num;
        Integer num2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 1);
            int i12 = b10.i(serialDescriptor, 2);
            p0 p0Var = p0.f25318a;
            loadingAction = (LoadingAction) b10.y(serialDescriptor, 0, LoadingAction$$serializer.INSTANCE, null);
            num = (Integer) b10.n(serialDescriptor, 3, p0Var, null);
            num2 = (Integer) b10.n(serialDescriptor, 4, p0Var, null);
            i10 = i12;
            str = m10;
            i11 = 31;
        } else {
            boolean z10 = true;
            int i13 = 0;
            LoadingAction loadingAction2 = null;
            String str2 = null;
            Integer num3 = null;
            Integer num4 = null;
            int i14 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    loadingAction2 = (LoadingAction) b10.y(serialDescriptor, 0, LoadingAction$$serializer.INSTANCE, loadingAction2);
                    i14 |= 1;
                } else if (o10 == 1) {
                    str2 = b10.m(serialDescriptor, 1);
                    i14 |= 2;
                } else if (o10 == 2) {
                    i13 = b10.i(serialDescriptor, 2);
                    i14 |= 4;
                } else if (o10 == 3) {
                    num3 = (Integer) b10.n(serialDescriptor, 3, p0.f25318a, num3);
                    i14 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    num4 = (Integer) b10.n(serialDescriptor, 4, p0.f25318a, num4);
                    i14 |= 16;
                }
            }
            i10 = i13;
            i11 = i14;
            loadingAction = loadingAction2;
            str = str2;
            num = num3;
            num2 = num4;
        }
        b10.c(serialDescriptor);
        return new LoadMoreButton(i11, loadingAction, str, i10, num, num2, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LoadMoreButton value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LoadMoreButton.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
