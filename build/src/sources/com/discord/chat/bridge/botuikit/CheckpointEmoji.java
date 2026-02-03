package com.discord.chat.bridge.botuikit;

import dt.n2;
import dt.v1;
import dt.z0;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B'\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0007\u0010\bB9\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000fJ\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0005HÆ\u0003J0\u0010\u0017\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0002\u0010\u0018J\u0013\u0010\u0019\u001a\u00020\u001a2\b\u0010\u001b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001c\u001a\u00020\nHÖ\u0001J\t\u0010\u001d\u001a\u00020\u0005HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0010\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012¨\u0006("}, d2 = {"Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;", "", "emojiId", "", "emojiName", "", "emojiSurrogateName", "<init>", "(Ljava/lang/Long;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/Long;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getEmojiId", "()Ljava/lang/Long;", "Ljava/lang/Long;", "getEmojiName", "()Ljava/lang/String;", "getEmojiSurrogateName", "component1", "component2", "component3", "copy", "(Ljava/lang/Long;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CheckpointEmoji {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Long emojiId;
    @NotNull
    private final String emojiName;
    private final String emojiSurrogateName;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/CheckpointEmoji$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return CheckpointEmoji$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ CheckpointEmoji(int i10, Long l10, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (2 != (i10 & 2)) {
            v1.b(i10, 2, CheckpointEmoji$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.emojiId = null;
        } else {
            this.emojiId = l10;
        }
        this.emojiName = str;
        if ((i10 & 4) == 0) {
            this.emojiSurrogateName = null;
        } else {
            this.emojiSurrogateName = str2;
        }
    }

    public static /* synthetic */ CheckpointEmoji copy$default(CheckpointEmoji checkpointEmoji, Long l10, String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            l10 = checkpointEmoji.emojiId;
        }
        if ((i10 & 2) != 0) {
            str = checkpointEmoji.emojiName;
        }
        if ((i10 & 4) != 0) {
            str2 = checkpointEmoji.emojiSurrogateName;
        }
        return checkpointEmoji.copy(l10, str, str2);
    }

    public static final /* synthetic */ void write$Self$chat_release(CheckpointEmoji checkpointEmoji, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || checkpointEmoji.emojiId != null) {
            compositeEncoder.s(serialDescriptor, 0, z0.f21052a, checkpointEmoji.emojiId);
        }
        compositeEncoder.y(serialDescriptor, 1, checkpointEmoji.emojiName);
        if (compositeEncoder.z(serialDescriptor, 2) || checkpointEmoji.emojiSurrogateName != null) {
            compositeEncoder.s(serialDescriptor, 2, n2.f20978a, checkpointEmoji.emojiSurrogateName);
        }
    }

    public final Long component1() {
        return this.emojiId;
    }

    @NotNull
    public final String component2() {
        return this.emojiName;
    }

    public final String component3() {
        return this.emojiSurrogateName;
    }

    @NotNull
    public final CheckpointEmoji copy(Long l10, @NotNull String emojiName, String str) {
        Intrinsics.checkNotNullParameter(emojiName, "emojiName");
        return new CheckpointEmoji(l10, emojiName, str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof CheckpointEmoji) {
            CheckpointEmoji checkpointEmoji = (CheckpointEmoji) obj;
            return Intrinsics.areEqual(this.emojiId, checkpointEmoji.emojiId) && Intrinsics.areEqual(this.emojiName, checkpointEmoji.emojiName) && Intrinsics.areEqual(this.emojiSurrogateName, checkpointEmoji.emojiSurrogateName);
        }
        return false;
    }

    public final Long getEmojiId() {
        return this.emojiId;
    }

    @NotNull
    public final String getEmojiName() {
        return this.emojiName;
    }

    public final String getEmojiSurrogateName() {
        return this.emojiSurrogateName;
    }

    public int hashCode() {
        Long l10 = this.emojiId;
        int hashCode = (((l10 == null ? 0 : l10.hashCode()) * 31) + this.emojiName.hashCode()) * 31;
        String str = this.emojiSurrogateName;
        return hashCode + (str != null ? str.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        Long l10 = this.emojiId;
        String str = this.emojiName;
        String str2 = this.emojiSurrogateName;
        return "CheckpointEmoji(emojiId=" + l10 + ", emojiName=" + str + ", emojiSurrogateName=" + str2 + ")";
    }

    public CheckpointEmoji(Long l10, @NotNull String emojiName, String str) {
        Intrinsics.checkNotNullParameter(emojiName, "emojiName");
        this.emojiId = l10;
        this.emojiName = emojiName;
        this.emojiSurrogateName = str;
    }

    public /* synthetic */ CheckpointEmoji(Long l10, String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : l10, str, (i10 & 4) != 0 ? null : str2);
    }
}
