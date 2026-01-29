package com.discord.push_notification_monitor;

import at.a2;
import at.h;
import at.h0;
import at.n2;
import at.z0;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.b0;
import ys.a;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/push_notification_monitor/PushNotificationMeta.$serializer", "Lat/h0;", "Lcom/discord/push_notification_monitor/PushNotificationMeta;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/push_notification_monitor/PushNotificationMeta;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/push_notification_monitor/PushNotificationMeta;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "push_notification_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class PushNotificationMeta$$serializer implements h0 {
    @NotNull
    public static final PushNotificationMeta$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        PushNotificationMeta$$serializer pushNotificationMeta$$serializer = new PushNotificationMeta$$serializer();
        INSTANCE = pushNotificationMeta$$serializer;
        a2 a2Var = new a2("com.discord.push_notification_monitor.PushNotificationMeta", pushNotificationMeta$$serializer, 7);
        a2Var.o("receivedTimestamp", false);
        a2Var.o("silent", false);
        a2Var.o("type", false);
        a2Var.o("title", false);
        a2Var.o("content", false);
        a2Var.o("channelId", true);
        a2Var.o("messageId", true);
        descriptor = a2Var;
    }

    private PushNotificationMeta$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f6848a;
        return new KSerializer[]{z0.f6922a, h.f6812a, n2Var, n2Var, a.u(n2Var), a.u(n2Var), a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final PushNotificationMeta deserialize(@NotNull Decoder decoder) {
        boolean z10;
        int i10;
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        long j10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            long f10 = b10.f(serialDescriptor, 0);
            z10 = b10.C(serialDescriptor, 1);
            String m10 = b10.m(serialDescriptor, 2);
            String m11 = b10.m(serialDescriptor, 3);
            n2 n2Var = n2.f6848a;
            str5 = (String) b10.n(serialDescriptor, 6, n2Var, null);
            str4 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            str2 = m11;
            str3 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str = m10;
            i10 = 127;
            j10 = f10;
        } else {
            boolean z11 = true;
            z10 = false;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            long j11 = 0;
            int i11 = 0;
            String str9 = null;
            String str10 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        continue;
                    case 0:
                        j11 = b10.f(serialDescriptor, 0);
                        i11 |= 1;
                        continue;
                    case 1:
                        z10 = b10.C(serialDescriptor, 1);
                        i11 |= 2;
                        break;
                    case 2:
                        str9 = b10.m(serialDescriptor, 2);
                        i11 |= 4;
                        break;
                    case 3:
                        str10 = b10.m(serialDescriptor, 3);
                        i11 |= 8;
                        break;
                    case 4:
                        str6 = (String) b10.n(serialDescriptor, 4, n2.f6848a, str6);
                        i11 |= 16;
                        break;
                    case 5:
                        str7 = (String) b10.n(serialDescriptor, 5, n2.f6848a, str7);
                        i11 |= 32;
                        break;
                    case 6:
                        str8 = (String) b10.n(serialDescriptor, 6, n2.f6848a, str8);
                        i11 |= 64;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i11;
            str = str9;
            str2 = str10;
            str3 = str6;
            str4 = str7;
            str5 = str8;
            j10 = j11;
        }
        boolean z12 = z10;
        b10.c(serialDescriptor);
        return new PushNotificationMeta(i10, j10, z12, str, str2, str3, str4, str5, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull PushNotificationMeta value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        PushNotificationMeta.write$Self$push_notification_monitor_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
