package com.discord.chat.bridge.activities;

import com.discord.chat.bridge.codedlinks.AppMessageEmbedImpl;
import com.discord.chat.bridge.codedlinks.AppMessageEmbedImpl$$serializer;
import com.discord.primitives.ApplicationId;
import com.discord.primitives.ApplicationId$$serializer;
import dt.b0;
import et.a;
import gt.a2;
import gt.h0;
import gt.n2;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import or.c;
import org.jetbrains.annotations.NotNull;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/activities/ActivityInstanceEmbed.$serializer", "Lgt/h0;", "Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ActivityInstanceEmbed$$serializer implements h0 {
    @NotNull
    public static final ActivityInstanceEmbed$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ActivityInstanceEmbed$$serializer activityInstanceEmbed$$serializer = new ActivityInstanceEmbed$$serializer();
        INSTANCE = activityInstanceEmbed$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.activities.ActivityInstanceEmbed", activityInstanceEmbed$$serializer, 5);
        a2Var.o("applicationId", false);
        a2Var.o("instanceId", false);
        a2Var.o("participantAvatarUris", true);
        a2Var.o("appMessageEmbedModel", false);
        a2Var.o("participantsDescription", true);
        descriptor = a2Var;
    }

    private ActivityInstanceEmbed$$serializer() {
    }

    @Override // gt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = ActivityInstanceEmbed.$childSerializers;
        n2 n2Var = n2.f25302a;
        return new KSerializer[]{ApplicationId$$serializer.INSTANCE, n2Var, a.u((KSerializer) lazyArr[2].getValue()), AppMessageEmbedImpl$$serializer.INSTANCE, a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ActivityInstanceEmbed deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        ApplicationId applicationId;
        String str;
        List list;
        AppMessageEmbedImpl appMessageEmbedImpl;
        String str2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = ActivityInstanceEmbed.$childSerializers;
        ApplicationId applicationId2 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 1);
            list = (List) b10.n(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), null);
            applicationId = (ApplicationId) b10.y(serialDescriptor, 0, ApplicationId$$serializer.INSTANCE, null);
            appMessageEmbedImpl = (AppMessageEmbedImpl) b10.y(serialDescriptor, 3, AppMessageEmbedImpl$$serializer.INSTANCE, null);
            str2 = (String) b10.n(serialDescriptor, 4, n2.f25302a, null);
            i10 = 31;
            str = m10;
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str3 = null;
            List list2 = null;
            AppMessageEmbedImpl appMessageEmbedImpl2 = null;
            String str4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    applicationId2 = (ApplicationId) b10.y(serialDescriptor, 0, ApplicationId$$serializer.INSTANCE, applicationId2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    str3 = b10.m(serialDescriptor, 1);
                    i11 |= 2;
                } else if (o10 == 2) {
                    list2 = (List) b10.n(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), list2);
                    i11 |= 4;
                } else if (o10 == 3) {
                    appMessageEmbedImpl2 = (AppMessageEmbedImpl) b10.y(serialDescriptor, 3, AppMessageEmbedImpl$$serializer.INSTANCE, appMessageEmbedImpl2);
                    i11 |= 8;
                } else if (o10 != 4) {
                    throw new b0(o10);
                } else {
                    str4 = (String) b10.n(serialDescriptor, 4, n2.f25302a, str4);
                    i11 |= 16;
                }
            }
            i10 = i11;
            applicationId = applicationId2;
            str = str3;
            list = list2;
            appMessageEmbedImpl = appMessageEmbedImpl2;
            str2 = str4;
        }
        b10.c(serialDescriptor);
        return new ActivityInstanceEmbed(i10, applicationId, str, list, appMessageEmbedImpl, str2, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // dt.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ActivityInstanceEmbed value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ActivityInstanceEmbed.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // gt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
