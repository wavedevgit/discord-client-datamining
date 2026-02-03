package com.discord.chat.bridge.botuikit;

import androidx.recyclerview.widget.RecyclerView;
import at.b0;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
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
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/CheckpointDataV2025.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class CheckpointDataV2025$$serializer implements h0 {
    @NotNull
    public static final CheckpointDataV2025$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        CheckpointDataV2025$$serializer checkpointDataV2025$$serializer = new CheckpointDataV2025$$serializer();
        INSTANCE = checkpointDataV2025$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.botuikit.CheckpointDataV2025", checkpointDataV2025$$serializer, 12);
        a2Var.o("authorId", false);
        a2Var.o("cardId", false);
        a2Var.o("cardAssetUrl", false);
        a2Var.o("powerLevel", false);
        a2Var.o("powerLevelUnits", false);
        a2Var.o("messagesString", false);
        a2Var.o("voiceString", false);
        a2Var.o("reactionString", false);
        a2Var.o("clickable", true);
        a2Var.o("topEmoji", true);
        a2Var.o("topGuild", true);
        a2Var.o("topGame", true);
        descriptor = a2Var;
    }

    private CheckpointDataV2025$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = bt.a.u(CheckpointCardClickable$$serializer.INSTANCE);
        KSerializer u11 = bt.a.u(CheckpointEmoji$$serializer.INSTANCE);
        KSerializer u12 = bt.a.u(CheckpointGuild$$serializer.INSTANCE);
        KSerializer u13 = bt.a.u(CheckpointApplication$$serializer.INSTANCE);
        n2 n2Var = n2.f20978a;
        return new KSerializer[]{UserId$$serializer.INSTANCE, n2Var, n2Var, n2Var, p0.f20994a, n2Var, n2Var, n2Var, u10, u11, u12, u13};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final CheckpointDataV2025 deserialize(@NotNull Decoder decoder) {
        int i10;
        UserId userId;
        CheckpointApplication checkpointApplication;
        CheckpointGuild checkpointGuild;
        CheckpointEmoji checkpointEmoji;
        CheckpointCardClickable checkpointCardClickable;
        int i11;
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 11;
        int i13 = 10;
        int i14 = 9;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 1);
            String m11 = b10.m(serialDescriptor, 2);
            String m12 = b10.m(serialDescriptor, 3);
            int i15 = b10.i(serialDescriptor, 4);
            String m13 = b10.m(serialDescriptor, 5);
            String m14 = b10.m(serialDescriptor, 6);
            String m15 = b10.m(serialDescriptor, 7);
            userId = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, null);
            checkpointApplication = (CheckpointApplication) b10.n(serialDescriptor, 11, CheckpointApplication$$serializer.INSTANCE, null);
            checkpointGuild = (CheckpointGuild) b10.n(serialDescriptor, 10, CheckpointGuild$$serializer.INSTANCE, null);
            checkpointEmoji = (CheckpointEmoji) b10.n(serialDescriptor, 9, CheckpointEmoji$$serializer.INSTANCE, null);
            str6 = m15;
            str5 = m14;
            str4 = m13;
            str3 = m12;
            checkpointCardClickable = (CheckpointCardClickable) b10.n(serialDescriptor, 8, CheckpointCardClickable$$serializer.INSTANCE, null);
            i10 = i15;
            str2 = m11;
            str = m10;
            i11 = 4095;
        } else {
            boolean z10 = true;
            int i16 = 0;
            CheckpointApplication checkpointApplication2 = null;
            CheckpointGuild checkpointGuild2 = null;
            CheckpointEmoji checkpointEmoji2 = null;
            UserId userId2 = null;
            String str7 = null;
            String str8 = null;
            String str9 = null;
            String str10 = null;
            String str11 = null;
            String str12 = null;
            int i17 = 0;
            CheckpointCardClickable checkpointCardClickable2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i13 = 10;
                        i14 = 9;
                        break;
                    case 0:
                        userId2 = (UserId) b10.y(serialDescriptor, 0, UserId$$serializer.INSTANCE, userId2);
                        i17 |= 1;
                        i12 = 11;
                        i13 = 10;
                        i14 = 9;
                        break;
                    case 1:
                        str7 = b10.m(serialDescriptor, 1);
                        i17 |= 2;
                        i12 = 11;
                        break;
                    case 2:
                        str8 = b10.m(serialDescriptor, 2);
                        i17 |= 4;
                        i12 = 11;
                        break;
                    case 3:
                        str9 = b10.m(serialDescriptor, 3);
                        i17 |= 8;
                        i12 = 11;
                        break;
                    case 4:
                        i16 = b10.i(serialDescriptor, 4);
                        i17 |= 16;
                        break;
                    case 5:
                        str10 = b10.m(serialDescriptor, 5);
                        i17 |= 32;
                        break;
                    case 6:
                        str11 = b10.m(serialDescriptor, 6);
                        i17 |= 64;
                        break;
                    case 7:
                        str12 = b10.m(serialDescriptor, 7);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    case 8:
                        checkpointCardClickable2 = (CheckpointCardClickable) b10.n(serialDescriptor, 8, CheckpointCardClickable$$serializer.INSTANCE, checkpointCardClickable2);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        break;
                    case 9:
                        checkpointEmoji2 = (CheckpointEmoji) b10.n(serialDescriptor, i14, CheckpointEmoji$$serializer.INSTANCE, checkpointEmoji2);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        break;
                    case 10:
                        checkpointGuild2 = (CheckpointGuild) b10.n(serialDescriptor, i13, CheckpointGuild$$serializer.INSTANCE, checkpointGuild2);
                        i17 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        break;
                    case 11:
                        checkpointApplication2 = (CheckpointApplication) b10.n(serialDescriptor, i12, CheckpointApplication$$serializer.INSTANCE, checkpointApplication2);
                        i17 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i16;
            userId = userId2;
            checkpointApplication = checkpointApplication2;
            checkpointGuild = checkpointGuild2;
            checkpointEmoji = checkpointEmoji2;
            checkpointCardClickable = checkpointCardClickable2;
            i11 = i17;
            str = str7;
            str2 = str8;
            str3 = str9;
            str4 = str10;
            str5 = str11;
            str6 = str12;
        }
        b10.c(serialDescriptor);
        return new CheckpointDataV2025(i11, userId, str, str2, str3, i10, str4, str5, str6, checkpointCardClickable, checkpointEmoji, checkpointGuild, checkpointApplication, null, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull CheckpointDataV2025 value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        CheckpointDataV2025.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
