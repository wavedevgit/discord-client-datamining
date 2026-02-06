package com.discord.chat.bridge.codedlinks;

import com.facebook.react.devsupport.StackTraceHelper;
import ft.b0;
import jt.a2;
import jt.h;
import jt.h0;
import jt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/codedlinks/AppMessageActionImpl.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/codedlinks/AppMessageActionImpl;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/codedlinks/AppMessageActionImpl;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/codedlinks/AppMessageActionImpl;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class AppMessageActionImpl$$serializer implements h0 {
    @NotNull
    public static final AppMessageActionImpl$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        AppMessageActionImpl$$serializer appMessageActionImpl$$serializer = new AppMessageActionImpl$$serializer();
        INSTANCE = appMessageActionImpl$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.codedlinks.AppMessageActionImpl", appMessageActionImpl$$serializer, 3);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("label", false);
        a2Var.o("disabled", true);
        descriptor = a2Var;
    }

    private AppMessageActionImpl$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = gt.a.u(h.f31005a);
        n2 n2Var = n2.f31041a;
        return new KSerializer[]{n2Var, n2Var, u10};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final AppMessageActionImpl deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        Boolean bool;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        String str3 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            str = m10;
            bool = (Boolean) b10.n(serialDescriptor, 2, h.f31005a, null);
            str2 = m11;
            i10 = 7;
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str4 = null;
            Boolean bool2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str3 = b10.m(serialDescriptor, 0);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str4 = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    bool2 = (Boolean) b10.n(serialDescriptor, 2, h.f31005a, bool2);
                    i11 |= 4;
                }
            }
            i10 = i11;
            str = str3;
            str2 = str4;
            bool = bool2;
        }
        b10.c(serialDescriptor);
        return new AppMessageActionImpl(i10, str, str2, bool, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull AppMessageActionImpl value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        AppMessageActionImpl.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
