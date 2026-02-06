package com.discord.chat.bridge.automod;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b0;
import gt.a;
import jt.a2;
import jt.h;
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
import qr.c;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/automod/AutoModerationNotification.$serializer", "Ljt/h0;", "Lcom/discord/chat/bridge/automod/AutoModerationNotification;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/automod/AutoModerationNotification;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/automod/AutoModerationNotification;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class AutoModerationNotification$$serializer implements h0 {
    @NotNull
    public static final AutoModerationNotification$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        AutoModerationNotification$$serializer autoModerationNotification$$serializer = new AutoModerationNotification$$serializer();
        INSTANCE = autoModerationNotification$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.automod.AutoModerationNotification", autoModerationNotification$$serializer, 13);
        a2Var.o("header", false);
        a2Var.o("headerColor", false);
        a2Var.o("headerIconURL", false);
        a2Var.o("headerIconColor", false);
        a2Var.o("subtitleLeft", true);
        a2Var.o("subtitleRight", true);
        a2Var.o("body", true);
        a2Var.o("shouldShowActions", false);
        a2Var.o("enabledByUsername", true);
        a2Var.o("enabledByAvatarURL", true);
        a2Var.o("enabledByColor", true);
        a2Var.o("severity", true);
        a2Var.o("startTime", true);
        descriptor = a2Var;
    }

    private AutoModerationNotification$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f31041a;
        p0 p0Var = p0.f31057a;
        return new KSerializer[]{n2Var, p0Var, n2Var, p0Var, a.u(n2Var), a.u(n2Var), a.u(n2Var), h.f31005a, a.u(n2Var), a.u(n2Var), a.u(p0Var), a.u(n2Var), a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final AutoModerationNotification deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        String str3;
        String str4;
        Integer num;
        String str5;
        String str6;
        String str7;
        String str8;
        String str9;
        boolean z10;
        int i11;
        int i12;
        char c10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i13 = 10;
        char c11 = '\t';
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            int i14 = b10.i(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 2);
            int i15 = b10.i(serialDescriptor, 3);
            n2 n2Var = n2.f31041a;
            boolean C = b10.C(serialDescriptor, 7);
            i10 = 8191;
            str3 = (String) b10.n(serialDescriptor, 12, n2Var, null);
            num = (Integer) b10.n(serialDescriptor, 10, p0.f31057a, null);
            str4 = (String) b10.n(serialDescriptor, 11, n2Var, null);
            str6 = (String) b10.n(serialDescriptor, 9, n2Var, null);
            z10 = C;
            str7 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            str8 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            i11 = i15;
            str5 = (String) b10.n(serialDescriptor, 8, n2Var, null);
            str9 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str2 = m11;
            i12 = i14;
            str = m10;
        } else {
            String str10 = null;
            String str11 = null;
            String str12 = null;
            String str13 = null;
            Integer num2 = null;
            String str14 = null;
            String str15 = null;
            String str16 = null;
            boolean z11 = true;
            boolean z12 = false;
            int i16 = 0;
            int i17 = 0;
            String str17 = null;
            String str18 = null;
            i10 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                    case 0:
                        i10 |= 1;
                        str10 = b10.m(serialDescriptor, 0);
                        i13 = 10;
                        c11 = '\t';
                    case 1:
                        i17 = b10.i(serialDescriptor, 1);
                        i10 |= 2;
                        i13 = 10;
                        c11 = '\t';
                    case 2:
                        i10 |= 4;
                        str11 = b10.m(serialDescriptor, 2);
                        i13 = 10;
                        c11 = '\t';
                    case 3:
                        i16 = b10.i(serialDescriptor, 3);
                        i10 |= 8;
                        i13 = 10;
                        c11 = '\t';
                    case 4:
                        str18 = (String) b10.n(serialDescriptor, 4, n2.f31041a, str18);
                        i10 |= 16;
                        i13 = 10;
                        c11 = '\t';
                    case 5:
                        str17 = (String) b10.n(serialDescriptor, 5, n2.f31041a, str17);
                        i10 |= 32;
                        i13 = 10;
                        c11 = '\t';
                    case 6:
                        str16 = (String) b10.n(serialDescriptor, 6, n2.f31041a, str16);
                        i10 |= 64;
                        i13 = 10;
                        c11 = '\t';
                    case 7:
                        c10 = '\b';
                        z12 = b10.C(serialDescriptor, 7);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i13 = 10;
                        c11 = '\t';
                    case 8:
                        c10 = '\b';
                        str14 = (String) b10.n(serialDescriptor, 8, n2.f31041a, str14);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        i13 = 10;
                        c11 = '\t';
                    case 9:
                        str15 = (String) b10.n(serialDescriptor, 9, n2.f31041a, str15);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        c11 = '\t';
                        i13 = 10;
                    case 10:
                        num2 = (Integer) b10.n(serialDescriptor, i13, p0.f31057a, num2);
                        i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        c11 = '\t';
                    case 11:
                        str13 = (String) b10.n(serialDescriptor, 11, n2.f31041a, str13);
                        i10 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        c11 = '\t';
                    case 12:
                        str12 = (String) b10.n(serialDescriptor, 12, n2.f31041a, str12);
                        i10 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        c11 = '\t';
                    default:
                        throw new b0(o10);
                }
            }
            str = str10;
            str2 = str11;
            str3 = str12;
            str4 = str13;
            num = num2;
            str5 = str14;
            str6 = str15;
            str7 = str16;
            str8 = str17;
            str9 = str18;
            z10 = z12;
            i11 = i16;
            i12 = i17;
        }
        int i18 = i10;
        b10.c(serialDescriptor);
        return new AutoModerationNotification(i18, str, i12, str2, i11, str9, str8, str7, z10, str5, str6, num, str4, str3, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull AutoModerationNotification value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        AutoModerationNotification.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
