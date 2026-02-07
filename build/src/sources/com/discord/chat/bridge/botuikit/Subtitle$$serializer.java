package com.discord.chat.bridge.botuikit;

import ft.b0;
import jt.a2;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/Subtitle.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/botuikit/Subtitle;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/Subtitle;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/Subtitle;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class Subtitle$$serializer implements h0 {
    @NotNull
    public static final Subtitle$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        Subtitle$$serializer subtitle$$serializer = new Subtitle$$serializer();
        INSTANCE = subtitle$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.botuikit.Subtitle", subtitle$$serializer, 4);
        a2Var.o("badgeUrl", true);
        a2Var.o("text", false);
        a2Var.o("ariaDescription", true);
        a2Var.o("clickable", true);
        descriptor = a2Var;
    }

    private Subtitle$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f31089a;
        return new KSerializer[]{gt.a.u(n2Var), n2Var, gt.a.u(n2Var), gt.a.u(ContentInventoryEntryClickable$$serializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final Subtitle deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        String str3;
        ContentInventoryEntryClickable contentInventoryEntryClickable;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        String str4 = null;
        if (b10.p()) {
            n2 n2Var = n2.f31089a;
            String m10 = b10.m(serialDescriptor, 1);
            str3 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            contentInventoryEntryClickable = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 3, ContentInventoryEntryClickable$$serializer.INSTANCE, null);
            i10 = 15;
            str2 = m10;
            str = (String) b10.n(serialDescriptor, 0, n2Var, null);
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str5 = null;
            String str6 = null;
            ContentInventoryEntryClickable contentInventoryEntryClickable2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str4 = (String) b10.n(serialDescriptor, 0, n2.f31089a, str4);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str5 = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 == 2) {
                    str6 = (String) b10.n(serialDescriptor, 2, n2.f31089a, str6);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    contentInventoryEntryClickable2 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 3, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntryClickable2);
                    i11 |= 8;
                }
            }
            i10 = i11;
            str = str4;
            str2 = str5;
            str3 = str6;
            contentInventoryEntryClickable = contentInventoryEntryClickable2;
        }
        b10.c(serialDescriptor);
        return new Subtitle(i10, str, str2, str3, contentInventoryEntryClickable, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull Subtitle value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        Subtitle.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
