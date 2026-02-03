package com.discord.chat.bridge.polls;

import at.m;
import com.discord.chat.bridge.polls.PollMedia;
import dt.n2;
import dt.w0;
import dt.z0;
import java.util.Set;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.l;
import lr.o;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\"\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 /2\u00020\u0001:\u0002./BA\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0010\b\u0002\u0010\b\u001a\n\u0018\u00010\tj\u0004\u0018\u0001`\n¢\u0006\u0004\b\u000b\u0010\fBI\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u000b\u0010\u0011J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000f\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005HÆ\u0003J\u000b\u0010\u001d\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u0016\u0010\u001e\u001a\n\u0018\u00010\tj\u0004\u0018\u0001`\nHÆ\u0003¢\u0006\u0002\u0010\u0019JH\u0010\u001f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0010\b\u0002\u0010\b\u001a\n\u0018\u00010\tj\u0004\u0018\u0001`\nHÆ\u0001¢\u0006\u0002\u0010 J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010$\u001a\u00020\u000eHÖ\u0001J\t\u0010%\u001a\u00020\u0003HÖ\u0001J%\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020\u00002\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020,H\u0001¢\u0006\u0002\b-R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u001b\u0010\b\u001a\n\u0018\u00010\tj\u0004\u0018\u0001`\n¢\u0006\n\n\u0002\u0010\u001a\u001a\u0004\b\u0018\u0010\u0019¨\u00060"}, d2 = {"Lcom/discord/chat/bridge/polls/PollMedia;", "", "text", "", "attachmentIds", "", "emoji", "Lcom/discord/chat/bridge/polls/PollMediaEmoji;", "stickerId", "", "Lcom/discord/snowflake/Snowflake;", "<init>", "(Ljava/lang/String;Ljava/util/Set;Lcom/discord/chat/bridge/polls/PollMediaEmoji;Ljava/lang/Long;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/util/Set;Lcom/discord/chat/bridge/polls/PollMediaEmoji;Ljava/lang/Long;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getText", "()Ljava/lang/String;", "getAttachmentIds", "()Ljava/util/Set;", "getEmoji", "()Lcom/discord/chat/bridge/polls/PollMediaEmoji;", "getStickerId", "()Ljava/lang/Long;", "Ljava/lang/Long;", "component1", "component2", "component3", "component4", "copy", "(Ljava/lang/String;Ljava/util/Set;Lcom/discord/chat/bridge/polls/PollMediaEmoji;Ljava/lang/Long;)Lcom/discord/chat/bridge/polls/PollMedia;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollMedia {
    @NotNull
    private final Set<String> attachmentIds;
    private final PollMediaEmoji emoji;
    private final Long stickerId;
    private final String text;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, l.b(o.f37120e, new Function0() { // from class: n6.d
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = PollMedia._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/polls/PollMedia$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/polls/PollMedia;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return PollMedia$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public PollMedia() {
        this((String) null, (Set) null, (PollMediaEmoji) null, (Long) null, 15, (DefaultConstructorMarker) null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new w0(n2.f20978a);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ PollMedia copy$default(PollMedia pollMedia, String str, Set set, PollMediaEmoji pollMediaEmoji, Long l10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = pollMedia.text;
        }
        if ((i10 & 2) != 0) {
            set = pollMedia.attachmentIds;
        }
        if ((i10 & 4) != 0) {
            pollMediaEmoji = pollMedia.emoji;
        }
        if ((i10 & 8) != 0) {
            l10 = pollMedia.stickerId;
        }
        return pollMedia.copy(str, set, pollMediaEmoji, l10);
    }

    public static final /* synthetic */ void write$Self$chat_release(PollMedia pollMedia, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.z(serialDescriptor, 0) || pollMedia.text != null) {
            compositeEncoder.s(serialDescriptor, 0, n2.f20978a, pollMedia.text);
        }
        if (compositeEncoder.z(serialDescriptor, 1) || !Intrinsics.areEqual(pollMedia.attachmentIds, x0.d())) {
            compositeEncoder.D(serialDescriptor, 1, (at.o) lazyArr[1].getValue(), pollMedia.attachmentIds);
        }
        if (compositeEncoder.z(serialDescriptor, 2) || pollMedia.emoji != null) {
            compositeEncoder.s(serialDescriptor, 2, PollMediaEmoji$$serializer.INSTANCE, pollMedia.emoji);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || pollMedia.stickerId != null) {
            compositeEncoder.s(serialDescriptor, 3, z0.f21052a, pollMedia.stickerId);
        }
    }

    public final String component1() {
        return this.text;
    }

    @NotNull
    public final Set<String> component2() {
        return this.attachmentIds;
    }

    public final PollMediaEmoji component3() {
        return this.emoji;
    }

    public final Long component4() {
        return this.stickerId;
    }

    @NotNull
    public final PollMedia copy(String str, @NotNull Set<String> attachmentIds, PollMediaEmoji pollMediaEmoji, Long l10) {
        Intrinsics.checkNotNullParameter(attachmentIds, "attachmentIds");
        return new PollMedia(str, attachmentIds, pollMediaEmoji, l10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PollMedia) {
            PollMedia pollMedia = (PollMedia) obj;
            return Intrinsics.areEqual(this.text, pollMedia.text) && Intrinsics.areEqual(this.attachmentIds, pollMedia.attachmentIds) && Intrinsics.areEqual(this.emoji, pollMedia.emoji) && Intrinsics.areEqual(this.stickerId, pollMedia.stickerId);
        }
        return false;
    }

    @NotNull
    public final Set<String> getAttachmentIds() {
        return this.attachmentIds;
    }

    public final PollMediaEmoji getEmoji() {
        return this.emoji;
    }

    public final Long getStickerId() {
        return this.stickerId;
    }

    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        String str = this.text;
        int hashCode = (((str == null ? 0 : str.hashCode()) * 31) + this.attachmentIds.hashCode()) * 31;
        PollMediaEmoji pollMediaEmoji = this.emoji;
        int hashCode2 = (hashCode + (pollMediaEmoji == null ? 0 : pollMediaEmoji.hashCode())) * 31;
        Long l10 = this.stickerId;
        return hashCode2 + (l10 != null ? l10.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.text;
        Set<String> set = this.attachmentIds;
        PollMediaEmoji pollMediaEmoji = this.emoji;
        Long l10 = this.stickerId;
        return "PollMedia(text=" + str + ", attachmentIds=" + set + ", emoji=" + pollMediaEmoji + ", stickerId=" + l10 + ")";
    }

    public /* synthetic */ PollMedia(int i10, String str, Set set, PollMediaEmoji pollMediaEmoji, Long l10, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.text = null;
        } else {
            this.text = str;
        }
        if ((i10 & 2) == 0) {
            this.attachmentIds = x0.d();
        } else {
            this.attachmentIds = set;
        }
        if ((i10 & 4) == 0) {
            this.emoji = null;
        } else {
            this.emoji = pollMediaEmoji;
        }
        if ((i10 & 8) == 0) {
            this.stickerId = null;
        } else {
            this.stickerId = l10;
        }
    }

    public PollMedia(String str, @NotNull Set<String> attachmentIds, PollMediaEmoji pollMediaEmoji, Long l10) {
        Intrinsics.checkNotNullParameter(attachmentIds, "attachmentIds");
        this.text = str;
        this.attachmentIds = attachmentIds;
        this.emoji = pollMediaEmoji;
        this.stickerId = l10;
    }

    public /* synthetic */ PollMedia(String str, Set set, PollMediaEmoji pollMediaEmoji, Long l10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? x0.d() : set, (i10 & 4) != 0 ? null : pollMediaEmoji, (i10 & 8) != 0 ? null : l10);
    }
}
