package com.discord.chat.bridge.botuikit;

import com.discord.chat.bridge.media.UnfurledMediaItem;
import com.discord.chat.bridge.media.UnfurledMediaItem$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.b0;
import gt.a2;
import gt.h0;
import gt.k1;
import gt.n2;
import gt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
@or.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/FileDisplayComponent.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/botuikit/FileDisplayComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/FileDisplayComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/FileDisplayComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class FileDisplayComponent$$serializer implements h0 {
    @NotNull
    public static final FileDisplayComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        FileDisplayComponent$$serializer fileDisplayComponent$$serializer = new FileDisplayComponent$$serializer();
        INSTANCE = fileDisplayComponent$$serializer;
        a2 a2Var = new a2("13", fileDisplayComponent$$serializer, 9);
        a2Var.o("type", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("file", false);
        a2Var.o(StackTraceHelper.NAME_KEY, false);
        a2Var.o("size", false);
        a2Var.o("isSpoiler", false);
        a2Var.o("spoilerDescription", false);
        a2Var.o("spoilerOrNull", true);
        a2Var.o("obscureOrNull", true);
        descriptor = a2Var;
    }

    private FileDisplayComponent$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{p0.f25318a, n2Var, UnfurledMediaItem$$serializer.INSTANCE, n2Var, n2Var, gt.h.f25266a, et.a.u(n2Var), et.a.u(n2Var), et.a.u(k1.f25285a)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final FileDisplayComponent deserialize(@NotNull Decoder decoder) {
        int i10;
        Void r30;
        String str;
        String str2;
        boolean z10;
        int i11;
        String str3;
        UnfurledMediaItem unfurledMediaItem;
        String str4;
        String str5;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 7;
        int i13 = 6;
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 3);
            String m12 = b10.m(serialDescriptor, 4);
            boolean C = b10.C(serialDescriptor, 5);
            n2 n2Var = n2.f25302a;
            str = (String) b10.n(serialDescriptor, 7, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            z10 = C;
            str4 = m11;
            r30 = (Void) b10.n(serialDescriptor, 8, k1.f25285a, null);
            str5 = m12;
            unfurledMediaItem = (UnfurledMediaItem) b10.y(serialDescriptor, 2, UnfurledMediaItem$$serializer.INSTANCE, null);
            str3 = m10;
            i11 = 511;
        } else {
            boolean z11 = true;
            i10 = 0;
            int i14 = 0;
            Void r92 = null;
            String str6 = null;
            String str7 = null;
            UnfurledMediaItem unfurledMediaItem2 = null;
            String str8 = null;
            String str9 = null;
            boolean z12 = false;
            String str10 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i12 = 7;
                        break;
                    case 0:
                        i14 |= 1;
                        i10 = b10.i(serialDescriptor, 0);
                        i12 = 7;
                        i13 = 6;
                        break;
                    case 1:
                        str7 = b10.m(serialDescriptor, 1);
                        i14 |= 2;
                        i12 = 7;
                        i13 = 6;
                        break;
                    case 2:
                        unfurledMediaItem2 = (UnfurledMediaItem) b10.y(serialDescriptor, 2, UnfurledMediaItem$$serializer.INSTANCE, unfurledMediaItem2);
                        i14 |= 4;
                        i12 = 7;
                        i13 = 6;
                        break;
                    case 3:
                        str8 = b10.m(serialDescriptor, 3);
                        i14 |= 8;
                        break;
                    case 4:
                        str9 = b10.m(serialDescriptor, 4);
                        i14 |= 16;
                        break;
                    case 5:
                        z12 = b10.C(serialDescriptor, 5);
                        i14 |= 32;
                        break;
                    case 6:
                        str10 = (String) b10.n(serialDescriptor, i13, n2.f25302a, str10);
                        i14 |= 64;
                        break;
                    case 7:
                        str6 = (String) b10.n(serialDescriptor, i12, n2.f25302a, str6);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        r92 = (Void) b10.n(serialDescriptor, 8, k1.f25285a, r92);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            r30 = r92;
            str = str6;
            str2 = str10;
            z10 = z12;
            i11 = i14;
            str3 = str7;
            unfurledMediaItem = unfurledMediaItem2;
            str4 = str8;
            str5 = str9;
        }
        int i15 = i10;
        b10.c(serialDescriptor);
        return new FileDisplayComponent(i11, i15, str3, unfurledMediaItem, str4, str5, z10, str2, str, r30, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull FileDisplayComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        FileDisplayComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
