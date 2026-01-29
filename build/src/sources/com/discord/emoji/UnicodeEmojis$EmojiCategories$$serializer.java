package com.discord.emoji;

import at.a2;
import at.h0;
import com.discord.emoji.UnicodeEmojis;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/emoji/UnicodeEmojis.EmojiCategories.$serializer", "Lat/h0;", "Lcom/discord/emoji/UnicodeEmojis$EmojiCategories;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/emoji/UnicodeEmojis$EmojiCategories;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/emoji/UnicodeEmojis$EmojiCategories;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class UnicodeEmojis$EmojiCategories$$serializer implements h0 {
    @NotNull
    public static final UnicodeEmojis$EmojiCategories$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        UnicodeEmojis$EmojiCategories$$serializer unicodeEmojis$EmojiCategories$$serializer = new UnicodeEmojis$EmojiCategories$$serializer();
        INSTANCE = unicodeEmojis$EmojiCategories$$serializer;
        a2 a2Var = new a2("com.discord.emoji.UnicodeEmojis.EmojiCategories", unicodeEmojis$EmojiCategories$$serializer, 8);
        a2Var.o("people", false);
        a2Var.o("nature", false);
        a2Var.o("food", false);
        a2Var.o("activity", false);
        a2Var.o("travel", false);
        a2Var.o("objects", false);
        a2Var.o("symbols", false);
        a2Var.o("flags", false);
        descriptor = a2Var;
    }

    private UnicodeEmojis$EmojiCategories$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = UnicodeEmojis.EmojiCategories.$childSerializers;
        return new KSerializer[]{lazyArr[0].getValue(), lazyArr[1].getValue(), lazyArr[2].getValue(), lazyArr[3].getValue(), lazyArr[4].getValue(), lazyArr[5].getValue(), lazyArr[6].getValue(), lazyArr[7].getValue()};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final UnicodeEmojis.EmojiCategories deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        List list;
        List list2;
        List list3;
        List list4;
        List list5;
        List list6;
        List list7;
        List list8;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = UnicodeEmojis.EmojiCategories.$childSerializers;
        int i11 = 7;
        int i12 = 4;
        List list9 = null;
        if (b10.p()) {
            list = (List) b10.y(serialDescriptor, 7, (DeserializationStrategy) lazyArr[7].getValue(), null);
            list5 = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), null);
            i10 = 255;
            list2 = (List) b10.y(serialDescriptor, 6, (DeserializationStrategy) lazyArr[6].getValue(), null);
            list3 = (List) b10.y(serialDescriptor, 5, (DeserializationStrategy) lazyArr[5].getValue(), null);
            list8 = (List) b10.y(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), null);
            list4 = (List) b10.y(serialDescriptor, 4, (DeserializationStrategy) lazyArr[4].getValue(), null);
            list7 = (List) b10.y(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), null);
            list6 = (List) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), null);
        } else {
            int i13 = 3;
            int i14 = 2;
            int i15 = 1;
            boolean z10 = true;
            int i16 = 0;
            List list10 = null;
            List list11 = null;
            List list12 = null;
            List list13 = null;
            List list14 = null;
            List list15 = null;
            List list16 = null;
            while (z10) {
                int i17 = i12;
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i11 = 7;
                        i12 = 4;
                        i15 = 1;
                        i14 = 2;
                        i13 = 3;
                        break;
                    case 0:
                        list9 = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), list9);
                        i16 |= 1;
                        i11 = 7;
                        i12 = 4;
                        i15 = 1;
                        i14 = 2;
                        i13 = 3;
                        break;
                    case 1:
                        list14 = (List) b10.y(serialDescriptor, i15, (DeserializationStrategy) lazyArr[i15].getValue(), list14);
                        i16 |= 2;
                        i11 = 7;
                        i12 = 4;
                        i14 = 2;
                        i13 = 3;
                        break;
                    case 2:
                        list15 = (List) b10.y(serialDescriptor, i14, (DeserializationStrategy) lazyArr[i14].getValue(), list15);
                        i16 |= 4;
                        i11 = 7;
                        i12 = 4;
                        i13 = 3;
                        break;
                    case 3:
                        list16 = (List) b10.y(serialDescriptor, i13, (DeserializationStrategy) lazyArr[i13].getValue(), list16);
                        i16 |= 8;
                        i11 = 7;
                        i12 = 4;
                        break;
                    case 4:
                        list13 = (List) b10.y(serialDescriptor, i17, (DeserializationStrategy) lazyArr[i17].getValue(), list13);
                        i16 |= 16;
                        i12 = i17;
                        i11 = 7;
                        break;
                    case 5:
                        list12 = (List) b10.y(serialDescriptor, 5, (DeserializationStrategy) lazyArr[5].getValue(), list12);
                        i16 |= 32;
                        i12 = i17;
                        break;
                    case 6:
                        list11 = (List) b10.y(serialDescriptor, 6, (DeserializationStrategy) lazyArr[6].getValue(), list11);
                        i16 |= 64;
                        i12 = i17;
                        break;
                    case 7:
                        list10 = (List) b10.y(serialDescriptor, i11, (DeserializationStrategy) lazyArr[i11].getValue(), list10);
                        i16 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i12 = i17;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i16;
            list = list10;
            list2 = list11;
            list3 = list12;
            list4 = list13;
            list5 = list9;
            list6 = list14;
            list7 = list15;
            list8 = list16;
        }
        b10.c(serialDescriptor);
        return new UnicodeEmojis.EmojiCategories(i10, list5, list6, list7, list8, list4, list3, list2, list, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull UnicodeEmojis.EmojiCategories value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        UnicodeEmojis.EmojiCategories.write$Self$emoji_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
