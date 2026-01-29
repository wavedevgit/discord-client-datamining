package com.discord.chat.bridge.customthemes;

import at.a2;
import at.g0;
import at.h0;
import at.n2;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.rnlineargradient.LinearGradientManager;
import ir.c;
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
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/customthemes/SharedCustomThemeData.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/customthemes/SharedCustomThemeData;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/customthemes/SharedCustomThemeData;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/customthemes/SharedCustomThemeData;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class SharedCustomThemeData$$serializer implements h0 {
    @NotNull
    public static final SharedCustomThemeData$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        SharedCustomThemeData$$serializer sharedCustomThemeData$$serializer = new SharedCustomThemeData$$serializer();
        INSTANCE = sharedCustomThemeData$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.customthemes.SharedCustomThemeData", sharedCustomThemeData$$serializer, 8);
        a2Var.o(LinearGradientManager.PROP_COLORS, false);
        a2Var.o("gradientAngle", false);
        a2Var.o("createdBy", false);
        a2Var.o("createdByAvatarUrl", false);
        a2Var.o("nitroWheelIconUrl", false);
        a2Var.o("previewLabel", false);
        a2Var.o("previewHeading", false);
        a2Var.o("createdByLabel", false);
        descriptor = a2Var;
    }

    private SharedCustomThemeData$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = SharedCustomThemeData.$childSerializers;
        n2 n2Var = n2.f6848a;
        return new KSerializer[]{lazyArr[0].getValue(), g0.f6808a, n2Var, n2Var, n2Var, n2Var, n2Var, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SharedCustomThemeData deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        float f10;
        int i10;
        List list;
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = SharedCustomThemeData.$childSerializers;
        int i11 = 7;
        int i12 = 0;
        if (b10.p()) {
            f10 = b10.u(serialDescriptor, 1);
            String m10 = b10.m(serialDescriptor, 2);
            String m11 = b10.m(serialDescriptor, 3);
            String m12 = b10.m(serialDescriptor, 4);
            String m13 = b10.m(serialDescriptor, 5);
            String m14 = b10.m(serialDescriptor, 6);
            list = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), null);
            str6 = b10.m(serialDescriptor, 7);
            str5 = m14;
            str4 = m13;
            str2 = m11;
            str3 = m12;
            str = m10;
            i10 = 255;
        } else {
            f10 = 0.0f;
            int i13 = 1;
            List list2 = null;
            String str7 = null;
            String str8 = null;
            String str9 = null;
            String str10 = null;
            String str11 = null;
            String str12 = null;
            int i14 = 0;
            while (i13 != 0) {
                int i15 = i12;
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        i12 = i15;
                        i13 = i12;
                        i11 = 7;
                    case 0:
                        list2 = (List) b10.y(serialDescriptor, i15, (DeserializationStrategy) lazyArr[i15].getValue(), list2);
                        i14 |= 1;
                        i12 = i15;
                        i11 = 7;
                    case 1:
                        f10 = b10.u(serialDescriptor, 1);
                        i14 |= 2;
                        i12 = i15;
                    case 2:
                        str7 = b10.m(serialDescriptor, 2);
                        i14 |= 4;
                        i12 = i15;
                    case 3:
                        str8 = b10.m(serialDescriptor, 3);
                        i14 |= 8;
                        i12 = i15;
                    case 4:
                        str9 = b10.m(serialDescriptor, 4);
                        i14 |= 16;
                        i12 = i15;
                    case 5:
                        str10 = b10.m(serialDescriptor, 5);
                        i14 |= 32;
                        i12 = i15;
                    case 6:
                        str11 = b10.m(serialDescriptor, 6);
                        i14 |= 64;
                        i12 = i15;
                    case 7:
                        str12 = b10.m(serialDescriptor, i11);
                        i14 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i12 = i15;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i14;
            list = list2;
            str = str7;
            str2 = str8;
            str3 = str9;
            str4 = str10;
            str5 = str11;
            str6 = str12;
        }
        float f11 = f10;
        b10.c(serialDescriptor);
        return new SharedCustomThemeData(i10, list, f11, str, str2, str3, str4, str5, str6, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull SharedCustomThemeData value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        SharedCustomThemeData.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
