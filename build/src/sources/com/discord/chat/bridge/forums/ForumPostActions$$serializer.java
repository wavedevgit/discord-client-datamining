package com.discord.chat.bridge.forums;

import bt.a2;
import bt.h;
import bt.h0;
import bt.n2;
import bt.p0;
import com.discord.chat.bridge.reaction.MessageReaction;
import com.discord.chat.bridge.reaction.MessageReaction$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import jr.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.b0;
import zs.a;
@c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/forums/ForumPostActions.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/forums/ForumPostActions;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/forums/ForumPostActions;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/forums/ForumPostActions;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ForumPostActions$$serializer implements h0 {
    @NotNull
    public static final ForumPostActions$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ForumPostActions$$serializer forumPostActions$$serializer = new ForumPostActions$$serializer();
        INSTANCE = forumPostActions$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.forums.ForumPostActions", forumPostActions$$serializer, 8);
        a2Var.o("numDisplayedReactions", false);
        a2Var.o("isFollowing", false);
        a2Var.o("followIcon", true);
        a2Var.o("followLabel", false);
        a2Var.o("shareIcon", true);
        a2Var.o("shareLabel", false);
        a2Var.o("defaultReaction", true);
        a2Var.o("sharePrompt", true);
        descriptor = a2Var;
    }

    private ForumPostActions$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f7662a;
        return new KSerializer[]{p0.f7678a, h.f7626a, a.u(n2Var), n2Var, a.u(n2Var), n2Var, a.u(MessageReaction$$serializer.INSTANCE), a.u(PostSharePrompt$$serializer.INSTANCE)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ForumPostActions deserialize(@NotNull Decoder decoder) {
        int i10;
        PostSharePrompt postSharePrompt;
        MessageReaction messageReaction;
        boolean z10;
        int i11;
        String str;
        String str2;
        String str3;
        String str4;
        char c10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i12 = 7;
        if (b10.p()) {
            i10 = b10.i(serialDescriptor, 0);
            boolean C = b10.C(serialDescriptor, 1);
            n2 n2Var = n2.f7662a;
            String m10 = b10.m(serialDescriptor, 3);
            String m11 = b10.m(serialDescriptor, 5);
            postSharePrompt = (PostSharePrompt) b10.n(serialDescriptor, 7, PostSharePrompt$$serializer.INSTANCE, null);
            messageReaction = (MessageReaction) b10.n(serialDescriptor, 6, MessageReaction$$serializer.INSTANCE, null);
            str4 = m11;
            str2 = m10;
            str3 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str = (String) b10.n(serialDescriptor, 2, n2Var, null);
            z10 = C;
            i11 = 255;
        } else {
            boolean z11 = true;
            i10 = 0;
            int i13 = 0;
            PostSharePrompt postSharePrompt2 = null;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            boolean z12 = false;
            MessageReaction messageReaction2 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                    case 0:
                        i13 |= 1;
                        i10 = b10.i(serialDescriptor, 0);
                        i12 = 7;
                    case 1:
                        c10 = 2;
                        z12 = b10.C(serialDescriptor, 1);
                        i13 |= 2;
                        i12 = 7;
                    case 2:
                        c10 = 2;
                        str5 = (String) b10.n(serialDescriptor, 2, n2.f7662a, str5);
                        i13 |= 4;
                        i12 = 7;
                    case 3:
                        str6 = b10.m(serialDescriptor, 3);
                        i13 |= 8;
                    case 4:
                        str7 = (String) b10.n(serialDescriptor, 4, n2.f7662a, str7);
                        i13 |= 16;
                    case 5:
                        str8 = b10.m(serialDescriptor, 5);
                        i13 |= 32;
                    case 6:
                        messageReaction2 = (MessageReaction) b10.n(serialDescriptor, 6, MessageReaction$$serializer.INSTANCE, messageReaction2);
                        i13 |= 64;
                    case 7:
                        postSharePrompt2 = (PostSharePrompt) b10.n(serialDescriptor, i12, PostSharePrompt$$serializer.INSTANCE, postSharePrompt2);
                        i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    default:
                        throw new b0(o10);
                }
            }
            postSharePrompt = postSharePrompt2;
            messageReaction = messageReaction2;
            z10 = z12;
            i11 = i13;
            str = str5;
            str2 = str6;
            str3 = str7;
            str4 = str8;
        }
        int i14 = i10;
        b10.c(serialDescriptor);
        return new ForumPostActions(i11, i14, z10, str, str2, str3, str4, messageReaction, postSharePrompt, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ForumPostActions value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ForumPostActions.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
