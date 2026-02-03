package com.discord.chat.bridge.botuikit;

import androidx.recyclerview.widget.RecyclerView;
import at.b0;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.a2;
import dt.h0;
import dt.n2;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/ContentInventoryEntry.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ContentInventoryEntry$$serializer implements h0 {
    @NotNull
    public static final ContentInventoryEntry$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ContentInventoryEntry$$serializer contentInventoryEntry$$serializer = new ContentInventoryEntry$$serializer();
        INSTANCE = contentInventoryEntry$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.botuikit.ContentInventoryEntry", contentInventoryEntry$$serializer, 14);
        a2Var.o("authorId", false);
        a2Var.o("contentId", false);
        a2Var.o("imageUrl", false);
        a2Var.o("imageClickable", true);
        a2Var.o("avatarUrl", false);
        a2Var.o("platformIconUrl", true);
        a2Var.o("platformClickable", true);
        a2Var.o("userActionDescription", false);
        a2Var.o("userClickable", true);
        a2Var.o("title", false);
        a2Var.o("titleClickable", true);
        a2Var.o("subtitles", false);
        a2Var.o("gradientColors", false);
        a2Var.o("clickable", true);
        descriptor = a2Var;
    }

    private ContentInventoryEntry$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = ContentInventoryEntry.$childSerializers;
        n2 n2Var = n2.f20978a;
        ContentInventoryEntryClickable$$serializer contentInventoryEntryClickable$$serializer = ContentInventoryEntryClickable$$serializer.INSTANCE;
        return new KSerializer[]{UserId$$serializer.INSTANCE, n2Var, n2Var, bt.a.u(contentInventoryEntryClickable$$serializer), n2Var, bt.a.u(n2Var), bt.a.u(contentInventoryEntryClickable$$serializer), n2Var, bt.a.u(contentInventoryEntryClickable$$serializer), n2Var, bt.a.u(contentInventoryEntryClickable$$serializer), lazyArr[11].getValue(), lazyArr[12].getValue(), bt.a.u(contentInventoryEntryClickable$$serializer)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ContentInventoryEntry deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        String str;
        String str2;
        String str3;
        ContentInventoryEntryClickable contentInventoryEntryClickable;
        List list;
        List list2;
        ContentInventoryEntryClickable contentInventoryEntryClickable2;
        ContentInventoryEntryClickable contentInventoryEntryClickable3;
        ContentInventoryEntryClickable contentInventoryEntryClickable4;
        ContentInventoryEntryClickable contentInventoryEntryClickable5;
        UserId userId;
        String str4;
        String str5;
        String str6;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = ContentInventoryEntry.$childSerializers;
        int i11 = 9;
        UserId userId2 = null;
        if (b10.p()) {
            UserId userId3 = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, null);
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 2);
            ContentInventoryEntryClickable$$serializer contentInventoryEntryClickable$$serializer = ContentInventoryEntryClickable$$serializer.INSTANCE;
            String m12 = b10.m(serialDescriptor, 4);
            String m13 = b10.m(serialDescriptor, 7);
            String m14 = b10.m(serialDescriptor, 9);
            List list3 = (List) b10.y(serialDescriptor, 11, (DeserializationStrategy) lazyArr[11].getValue(), null);
            list = (List) b10.y(serialDescriptor, 12, (DeserializationStrategy) lazyArr[12].getValue(), null);
            contentInventoryEntryClickable = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 13, contentInventoryEntryClickable$$serializer, null);
            str = m10;
            str2 = (String) b10.n(serialDescriptor, 5, n2.f20978a, null);
            str6 = m14;
            str5 = m13;
            contentInventoryEntryClickable4 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 6, contentInventoryEntryClickable$$serializer, null);
            contentInventoryEntryClickable2 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 8, contentInventoryEntryClickable$$serializer, null);
            contentInventoryEntryClickable5 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 3, contentInventoryEntryClickable$$serializer, null);
            contentInventoryEntryClickable3 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 10, contentInventoryEntryClickable$$serializer, null);
            str4 = m12;
            str3 = m11;
            i10 = 16383;
            list2 = list3;
            userId = userId3;
        } else {
            boolean z10 = true;
            int i12 = 0;
            String str7 = null;
            String str8 = null;
            String str9 = null;
            ContentInventoryEntryClickable contentInventoryEntryClickable6 = null;
            List list4 = null;
            List list5 = null;
            ContentInventoryEntryClickable contentInventoryEntryClickable7 = null;
            ContentInventoryEntryClickable contentInventoryEntryClickable8 = null;
            ContentInventoryEntryClickable contentInventoryEntryClickable9 = null;
            ContentInventoryEntryClickable contentInventoryEntryClickable10 = null;
            String str10 = null;
            String str11 = null;
            String str12 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                    case 0:
                        userId2 = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, userId2);
                        i12 |= 1;
                        i11 = 9;
                    case 1:
                        i12 |= 2;
                        str7 = b10.m(serialDescriptor, 1);
                        i11 = 9;
                    case 2:
                        str9 = b10.m(serialDescriptor, 2);
                        i12 |= 4;
                        i11 = 9;
                    case 3:
                        contentInventoryEntryClickable10 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 3, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntryClickable10);
                        i12 |= 8;
                        i11 = 9;
                    case 4:
                        str10 = b10.m(serialDescriptor, 4);
                        i12 |= 16;
                        i11 = 9;
                    case 5:
                        str8 = (String) b10.n(serialDescriptor, 5, n2.f20978a, str8);
                        i12 |= 32;
                        i11 = 9;
                    case 6:
                        contentInventoryEntryClickable9 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 6, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntryClickable9);
                        i12 |= 64;
                        i11 = 9;
                    case 7:
                        str11 = b10.m(serialDescriptor, 7);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i11 = 9;
                    case 8:
                        contentInventoryEntryClickable7 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 8, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntryClickable7);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        i11 = 9;
                    case 9:
                        int i13 = i11;
                        str12 = b10.m(serialDescriptor, i13);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        i11 = i13;
                    case 10:
                        contentInventoryEntryClickable8 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 10, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntryClickable8);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        i11 = 9;
                    case 11:
                        list5 = (List) b10.y(serialDescriptor, 11, (DeserializationStrategy) lazyArr[11].getValue(), list5);
                        i12 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        i11 = 9;
                    case 12:
                        list4 = (List) b10.y(serialDescriptor, 12, (DeserializationStrategy) lazyArr[12].getValue(), list4);
                        i12 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        i11 = 9;
                    case 13:
                        contentInventoryEntryClickable6 = (ContentInventoryEntryClickable) b10.n(serialDescriptor, 13, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntryClickable6);
                        i12 |= 8192;
                        i11 = 9;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i12;
            str = str7;
            str2 = str8;
            str3 = str9;
            contentInventoryEntryClickable = contentInventoryEntryClickable6;
            list = list4;
            list2 = list5;
            contentInventoryEntryClickable2 = contentInventoryEntryClickable7;
            contentInventoryEntryClickable3 = contentInventoryEntryClickable8;
            contentInventoryEntryClickable4 = contentInventoryEntryClickable9;
            contentInventoryEntryClickable5 = contentInventoryEntryClickable10;
            userId = userId2;
            str4 = str10;
            str5 = str11;
            str6 = str12;
        }
        b10.c(serialDescriptor);
        return new ContentInventoryEntry(i10, userId, str, str3, contentInventoryEntryClickable5, str4, str2, contentInventoryEntryClickable4, str5, contentInventoryEntryClickable2, str6, contentInventoryEntryClickable3, list2, list, contentInventoryEntryClickable, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ContentInventoryEntry value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ContentInventoryEntry.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
