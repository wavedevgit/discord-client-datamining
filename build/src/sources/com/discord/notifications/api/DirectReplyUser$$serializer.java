package com.discord.notifications.api;

import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.b0;
import et.a;
import gt.a2;
import gt.h0;
import gt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import or.c;
import org.jetbrains.annotations.NotNull;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/notifications/api/DirectReplyUser.$serializer", "Lgt/h0;", "Lcom/discord/notifications/api/DirectReplyUser;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/notifications/api/DirectReplyUser;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/notifications/api/DirectReplyUser;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class DirectReplyUser$$serializer implements h0 {
    @NotNull
    public static final DirectReplyUser$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        DirectReplyUser$$serializer directReplyUser$$serializer = new DirectReplyUser$$serializer();
        INSTANCE = directReplyUser$$serializer;
        a2 a2Var = new a2("com.discord.notifications.api.DirectReplyUser", directReplyUser$$serializer, 4);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o(NotificationRenderer.USERNAME, true);
        a2Var.o("discriminator", true);
        a2Var.o("avatar", true);
        descriptor = a2Var;
    }

    private DirectReplyUser$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{UserId$$serializer.INSTANCE, a.u(n2Var), a.u(n2Var), a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final DirectReplyUser deserialize(@NotNull Decoder decoder) {
        int i10;
        UserId userId;
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        UserId userId2 = null;
        if (b10.p()) {
            n2 n2Var = n2.f25302a;
            userId = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, null);
            str3 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 2, n2Var, null);
            str = (String) b10.n(serialDescriptor, 1, n2Var, null);
            i10 = 15;
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str4 = null;
            String str5 = null;
            String str6 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    userId2 = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, userId2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str4 = (String) b10.n(serialDescriptor, 1, n2.f25302a, str4);
                    i11 |= 2;
                } else if (o10 == 2) {
                    str5 = (String) b10.n(serialDescriptor, 2, n2.f25302a, str5);
                    i11 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    str6 = (String) b10.n(serialDescriptor, 3, n2.f25302a, str6);
                    i11 |= 8;
                }
            }
            i10 = i11;
            userId = userId2;
            str = str4;
            str2 = str5;
            str3 = str6;
        }
        b10.c(serialDescriptor);
        return new DirectReplyUser(i10, userId, str, str2, str3, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull DirectReplyUser value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        DirectReplyUser.write$Self$notification_api_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
