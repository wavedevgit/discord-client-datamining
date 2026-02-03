package com.discord.chat.bridge.botuikit;

import at.b0;
import com.discord.chat.bridge.botuikit.SelectOptionType;
import dt.a2;
import dt.h0;
import dt.n2;
import dt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/SearchableSelectItem.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/SearchableSelectItem;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/SearchableSelectItem;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/SearchableSelectItem;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class SearchableSelectItem$$serializer implements h0 {
    @NotNull
    public static final SearchableSelectItem$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        SearchableSelectItem$$serializer searchableSelectItem$$serializer = new SearchableSelectItem$$serializer();
        INSTANCE = searchableSelectItem$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.botuikit.SearchableSelectItem", searchableSelectItem$$serializer, 6);
        a2Var.o("label", false);
        a2Var.o("value", false);
        a2Var.o("type", false);
        a2Var.o("iconSrc", true);
        a2Var.o("iconColor", true);
        a2Var.o("iconEmoji", true);
        descriptor = a2Var;
    }

    private SearchableSelectItem$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{n2Var, n2Var, SelectOptionType.Serializer.INSTANCE, bt.a.u(n2Var), bt.a.u(p0.f20994a), bt.a.u(ComponentEmoji$$serializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SearchableSelectItem deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        SelectOptionType selectOptionType;
        String str3;
        Integer num;
        ComponentEmoji componentEmoji;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        String str4 = null;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            str = m10;
            componentEmoji = (ComponentEmoji) b10.n(serialDescriptor, 5, ComponentEmoji$$serializer.INSTANCE, null);
            str3 = (String) b10.n(serialDescriptor, 3, n2.f20978a, null);
            num = (Integer) b10.n(serialDescriptor, 4, p0.f20994a, null);
            selectOptionType = (SelectOptionType) b10.y(serialDescriptor, 2, SelectOptionType.Serializer.INSTANCE, null);
            str2 = m11;
            i10 = 63;
        } else {
            boolean z10 = true;
            int i11 = 0;
            String str5 = null;
            SelectOptionType selectOptionType2 = null;
            String str6 = null;
            Integer num2 = null;
            ComponentEmoji componentEmoji2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        continue;
                    case 0:
                        str4 = b10.m(serialDescriptor, 0);
                        i11 |= 1;
                        continue;
                    case 1:
                        str5 = b10.m(serialDescriptor, 1);
                        i11 |= 2;
                        break;
                    case 2:
                        selectOptionType2 = (SelectOptionType) b10.y(serialDescriptor, 2, SelectOptionType.Serializer.INSTANCE, selectOptionType2);
                        i11 |= 4;
                        break;
                    case 3:
                        str6 = (String) b10.n(serialDescriptor, 3, n2.f20978a, str6);
                        i11 |= 8;
                        break;
                    case 4:
                        num2 = (Integer) b10.n(serialDescriptor, 4, p0.f20994a, num2);
                        i11 |= 16;
                        break;
                    case 5:
                        componentEmoji2 = (ComponentEmoji) b10.n(serialDescriptor, 5, ComponentEmoji$$serializer.INSTANCE, componentEmoji2);
                        i11 |= 32;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i11;
            str = str4;
            str2 = str5;
            selectOptionType = selectOptionType2;
            str3 = str6;
            num = num2;
            componentEmoji = componentEmoji2;
        }
        b10.c(serialDescriptor);
        return new SearchableSelectItem(i10, str, str2, selectOptionType, str3, num, componentEmoji, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull SearchableSelectItem value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        SearchableSelectItem.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
