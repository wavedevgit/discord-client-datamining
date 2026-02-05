package com.discord.chat.bridge.botuikit;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b&\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 M2\u00020\u0001:\u0002LMBw\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\u0006\u0010\u000b\u001a\u00020\u0005\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u0015\u0010\u0016B\u0091\u0001\b\u0010\u0012\u0006\u0010\u0017\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019¢\u0006\u0004\b\u0015\u0010\u001aJ\u0010\u0010/\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b0\u0010\u001cJ\t\u00101\u001a\u00020\u0005HÆ\u0003J\t\u00102\u001a\u00020\u0005HÆ\u0003J\t\u00103\u001a\u00020\u0005HÆ\u0003J\t\u00104\u001a\u00020\tHÆ\u0003J\t\u00105\u001a\u00020\u0005HÆ\u0003J\t\u00106\u001a\u00020\u0005HÆ\u0003J\t\u00107\u001a\u00020\u0005HÆ\u0003J\u000b\u00108\u001a\u0004\u0018\u00010\u000eHÆ\u0003J\u000b\u00109\u001a\u0004\u0018\u00010\u0010HÆ\u0003J\u000b\u0010:\u001a\u0004\u0018\u00010\u0012HÆ\u0003J\u000b\u0010;\u001a\u0004\u0018\u00010\u0014HÆ\u0003J\u0090\u0001\u0010<\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u00052\b\b\u0002\u0010\u000b\u001a\u00020\u00052\b\b\u0002\u0010\f\u001a\u00020\u00052\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00102\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÆ\u0001¢\u0006\u0004\b=\u0010>J\u0013\u0010?\u001a\u00020@2\b\u0010A\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010B\u001a\u00020\tHÖ\u0001J\t\u0010C\u001a\u00020\u0005HÖ\u0001J%\u0010D\u001a\u00020E2\u0006\u0010F\u001a\u00020\u00002\u0006\u0010G\u001a\u00020H2\u0006\u0010I\u001a\u00020JH\u0001¢\u0006\u0002\bKR\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u001d\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001fR\u0011\u0010\u0007\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001fR\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#R\u0011\u0010\n\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u001fR\u0011\u0010\u000b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u001fR\u0011\u0010\f\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\u001fR\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b)\u0010*R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\b\n\u0000\u001a\u0004\b+\u0010,R\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\b\n\u0000\u001a\u0004\b-\u0010.¨\u0006N"}, d2 = {"Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;", "", "authorId", "Lcom/discord/primitives/UserId;", "cardId", "", "cardAssetUrl", "powerLevel", "powerLevelUnits", "", "messagesString", "voiceString", "reactionString", "clickable", "Lcom/discord/chat/bridge/botuikit/CheckpointCardClickable;", "topEmoji", "Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;", "topGuild", "Lcom/discord/chat/bridge/botuikit/CheckpointGuild;", "topGame", "Lcom/discord/chat/bridge/botuikit/CheckpointApplication;", "<init>", "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/CheckpointCardClickable;Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;Lcom/discord/chat/bridge/botuikit/CheckpointGuild;Lcom/discord/chat/bridge/botuikit/CheckpointApplication;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/CheckpointCardClickable;Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;Lcom/discord/chat/bridge/botuikit/CheckpointGuild;Lcom/discord/chat/bridge/botuikit/CheckpointApplication;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getAuthorId-re6GcUE", "()J", "J", "getCardId", "()Ljava/lang/String;", "getCardAssetUrl", "getPowerLevel", "getPowerLevelUnits", "()I", "getMessagesString", "getVoiceString", "getReactionString", "getClickable", "()Lcom/discord/chat/bridge/botuikit/CheckpointCardClickable;", "getTopEmoji", "()Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;", "getTopGuild", "()Lcom/discord/chat/bridge/botuikit/CheckpointGuild;", "getTopGame", "()Lcom/discord/chat/bridge/botuikit/CheckpointApplication;", "component1", "component1-re6GcUE", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "copy", "copy-cXl1GvU", "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/CheckpointCardClickable;Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;Lcom/discord/chat/bridge/botuikit/CheckpointGuild;Lcom/discord/chat/bridge/botuikit/CheckpointApplication;)Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@dt.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CheckpointDataV2025 {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long authorId;
    @NotNull
    private final String cardAssetUrl;
    @NotNull
    private final String cardId;
    private final CheckpointCardClickable clickable;
    @NotNull
    private final String messagesString;
    @NotNull
    private final String powerLevel;
    private final int powerLevelUnits;
    @NotNull
    private final String reactionString;
    private final CheckpointEmoji topEmoji;
    private final CheckpointApplication topGame;
    private final CheckpointGuild topGuild;
    @NotNull
    private final String voiceString;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return CheckpointDataV2025$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ CheckpointDataV2025(int i10, UserId userId, String str, String str2, String str3, int i11, String str4, String str5, String str6, CheckpointCardClickable checkpointCardClickable, CheckpointEmoji checkpointEmoji, CheckpointGuild checkpointGuild, CheckpointApplication checkpointApplication, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, userId, str, str2, str3, i11, str4, str5, str6, checkpointCardClickable, checkpointEmoji, checkpointGuild, checkpointApplication, serializationConstructorMarker);
    }

    public static final /* synthetic */ void write$Self$chat_release(CheckpointDataV2025 checkpointDataV2025, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.l(serialDescriptor, 0, UserId$$serializer.INSTANCE, UserId.m1137boximpl(checkpointDataV2025.authorId));
        compositeEncoder.x(serialDescriptor, 1, checkpointDataV2025.cardId);
        compositeEncoder.x(serialDescriptor, 2, checkpointDataV2025.cardAssetUrl);
        compositeEncoder.x(serialDescriptor, 3, checkpointDataV2025.powerLevel);
        compositeEncoder.v(serialDescriptor, 4, checkpointDataV2025.powerLevelUnits);
        compositeEncoder.x(serialDescriptor, 5, checkpointDataV2025.messagesString);
        compositeEncoder.x(serialDescriptor, 6, checkpointDataV2025.voiceString);
        compositeEncoder.x(serialDescriptor, 7, checkpointDataV2025.reactionString);
        if (compositeEncoder.z(serialDescriptor, 8) || checkpointDataV2025.clickable != null) {
            compositeEncoder.A(serialDescriptor, 8, CheckpointCardClickable$$serializer.INSTANCE, checkpointDataV2025.clickable);
        }
        if (compositeEncoder.z(serialDescriptor, 9) || checkpointDataV2025.topEmoji != null) {
            compositeEncoder.A(serialDescriptor, 9, CheckpointEmoji$$serializer.INSTANCE, checkpointDataV2025.topEmoji);
        }
        if (compositeEncoder.z(serialDescriptor, 10) || checkpointDataV2025.topGuild != null) {
            compositeEncoder.A(serialDescriptor, 10, CheckpointGuild$$serializer.INSTANCE, checkpointDataV2025.topGuild);
        }
        if (compositeEncoder.z(serialDescriptor, 11) || checkpointDataV2025.topGame != null) {
            compositeEncoder.A(serialDescriptor, 11, CheckpointApplication$$serializer.INSTANCE, checkpointDataV2025.topGame);
        }
    }

    /* renamed from: component1-re6GcUE  reason: not valid java name */
    public final long m260component1re6GcUE() {
        return this.authorId;
    }

    public final CheckpointEmoji component10() {
        return this.topEmoji;
    }

    public final CheckpointGuild component11() {
        return this.topGuild;
    }

    public final CheckpointApplication component12() {
        return this.topGame;
    }

    @NotNull
    public final String component2() {
        return this.cardId;
    }

    @NotNull
    public final String component3() {
        return this.cardAssetUrl;
    }

    @NotNull
    public final String component4() {
        return this.powerLevel;
    }

    public final int component5() {
        return this.powerLevelUnits;
    }

    @NotNull
    public final String component6() {
        return this.messagesString;
    }

    @NotNull
    public final String component7() {
        return this.voiceString;
    }

    @NotNull
    public final String component8() {
        return this.reactionString;
    }

    public final CheckpointCardClickable component9() {
        return this.clickable;
    }

    @NotNull
    /* renamed from: copy-cXl1GvU  reason: not valid java name */
    public final CheckpointDataV2025 m261copycXl1GvU(long j10, @NotNull String cardId, @NotNull String cardAssetUrl, @NotNull String powerLevel, int i10, @NotNull String messagesString, @NotNull String voiceString, @NotNull String reactionString, CheckpointCardClickable checkpointCardClickable, CheckpointEmoji checkpointEmoji, CheckpointGuild checkpointGuild, CheckpointApplication checkpointApplication) {
        Intrinsics.checkNotNullParameter(cardId, "cardId");
        Intrinsics.checkNotNullParameter(cardAssetUrl, "cardAssetUrl");
        Intrinsics.checkNotNullParameter(powerLevel, "powerLevel");
        Intrinsics.checkNotNullParameter(messagesString, "messagesString");
        Intrinsics.checkNotNullParameter(voiceString, "voiceString");
        Intrinsics.checkNotNullParameter(reactionString, "reactionString");
        return new CheckpointDataV2025(j10, cardId, cardAssetUrl, powerLevel, i10, messagesString, voiceString, reactionString, checkpointCardClickable, checkpointEmoji, checkpointGuild, checkpointApplication, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof CheckpointDataV2025) {
            CheckpointDataV2025 checkpointDataV2025 = (CheckpointDataV2025) obj;
            return UserId.m1141equalsimpl0(this.authorId, checkpointDataV2025.authorId) && Intrinsics.areEqual(this.cardId, checkpointDataV2025.cardId) && Intrinsics.areEqual(this.cardAssetUrl, checkpointDataV2025.cardAssetUrl) && Intrinsics.areEqual(this.powerLevel, checkpointDataV2025.powerLevel) && this.powerLevelUnits == checkpointDataV2025.powerLevelUnits && Intrinsics.areEqual(this.messagesString, checkpointDataV2025.messagesString) && Intrinsics.areEqual(this.voiceString, checkpointDataV2025.voiceString) && Intrinsics.areEqual(this.reactionString, checkpointDataV2025.reactionString) && Intrinsics.areEqual(this.clickable, checkpointDataV2025.clickable) && Intrinsics.areEqual(this.topEmoji, checkpointDataV2025.topEmoji) && Intrinsics.areEqual(this.topGuild, checkpointDataV2025.topGuild) && Intrinsics.areEqual(this.topGame, checkpointDataV2025.topGame);
        }
        return false;
    }

    /* renamed from: getAuthorId-re6GcUE  reason: not valid java name */
    public final long m262getAuthorIdre6GcUE() {
        return this.authorId;
    }

    @NotNull
    public final String getCardAssetUrl() {
        return this.cardAssetUrl;
    }

    @NotNull
    public final String getCardId() {
        return this.cardId;
    }

    public final CheckpointCardClickable getClickable() {
        return this.clickable;
    }

    @NotNull
    public final String getMessagesString() {
        return this.messagesString;
    }

    @NotNull
    public final String getPowerLevel() {
        return this.powerLevel;
    }

    public final int getPowerLevelUnits() {
        return this.powerLevelUnits;
    }

    @NotNull
    public final String getReactionString() {
        return this.reactionString;
    }

    public final CheckpointEmoji getTopEmoji() {
        return this.topEmoji;
    }

    public final CheckpointApplication getTopGame() {
        return this.topGame;
    }

    public final CheckpointGuild getTopGuild() {
        return this.topGuild;
    }

    @NotNull
    public final String getVoiceString() {
        return this.voiceString;
    }

    public int hashCode() {
        int m1142hashCodeimpl = ((((((((((((((UserId.m1142hashCodeimpl(this.authorId) * 31) + this.cardId.hashCode()) * 31) + this.cardAssetUrl.hashCode()) * 31) + this.powerLevel.hashCode()) * 31) + Integer.hashCode(this.powerLevelUnits)) * 31) + this.messagesString.hashCode()) * 31) + this.voiceString.hashCode()) * 31) + this.reactionString.hashCode()) * 31;
        CheckpointCardClickable checkpointCardClickable = this.clickable;
        int hashCode = (m1142hashCodeimpl + (checkpointCardClickable == null ? 0 : checkpointCardClickable.hashCode())) * 31;
        CheckpointEmoji checkpointEmoji = this.topEmoji;
        int hashCode2 = (hashCode + (checkpointEmoji == null ? 0 : checkpointEmoji.hashCode())) * 31;
        CheckpointGuild checkpointGuild = this.topGuild;
        int hashCode3 = (hashCode2 + (checkpointGuild == null ? 0 : checkpointGuild.hashCode())) * 31;
        CheckpointApplication checkpointApplication = this.topGame;
        return hashCode3 + (checkpointApplication != null ? checkpointApplication.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1144toStringimpl = UserId.m1144toStringimpl(this.authorId);
        String str = this.cardId;
        String str2 = this.cardAssetUrl;
        String str3 = this.powerLevel;
        int i10 = this.powerLevelUnits;
        String str4 = this.messagesString;
        String str5 = this.voiceString;
        String str6 = this.reactionString;
        CheckpointCardClickable checkpointCardClickable = this.clickable;
        CheckpointEmoji checkpointEmoji = this.topEmoji;
        CheckpointGuild checkpointGuild = this.topGuild;
        CheckpointApplication checkpointApplication = this.topGame;
        return "CheckpointDataV2025(authorId=" + m1144toStringimpl + ", cardId=" + str + ", cardAssetUrl=" + str2 + ", powerLevel=" + str3 + ", powerLevelUnits=" + i10 + ", messagesString=" + str4 + ", voiceString=" + str5 + ", reactionString=" + str6 + ", clickable=" + checkpointCardClickable + ", topEmoji=" + checkpointEmoji + ", topGuild=" + checkpointGuild + ", topGame=" + checkpointApplication + ")";
    }

    public /* synthetic */ CheckpointDataV2025(long j10, String str, String str2, String str3, int i10, String str4, String str5, String str6, CheckpointCardClickable checkpointCardClickable, CheckpointEmoji checkpointEmoji, CheckpointGuild checkpointGuild, CheckpointApplication checkpointApplication, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, str2, str3, i10, str4, str5, str6, checkpointCardClickable, checkpointEmoji, checkpointGuild, checkpointApplication);
    }

    private /* synthetic */ CheckpointDataV2025(int i10, UserId userId, String str, String str2, String str3, int i11, String str4, String str5, String str6, CheckpointCardClickable checkpointCardClickable, CheckpointEmoji checkpointEmoji, CheckpointGuild checkpointGuild, CheckpointApplication checkpointApplication, SerializationConstructorMarker serializationConstructorMarker) {
        if (255 != (i10 & SetSpanOperation.SPAN_MAX_PRIORITY)) {
            v1.b(i10, SetSpanOperation.SPAN_MAX_PRIORITY, CheckpointDataV2025$$serializer.INSTANCE.getDescriptor());
        }
        this.authorId = userId.m1146unboximpl();
        this.cardId = str;
        this.cardAssetUrl = str2;
        this.powerLevel = str3;
        this.powerLevelUnits = i11;
        this.messagesString = str4;
        this.voiceString = str5;
        this.reactionString = str6;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.clickable = null;
        } else {
            this.clickable = checkpointCardClickable;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.topEmoji = null;
        } else {
            this.topEmoji = checkpointEmoji;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.topGuild = null;
        } else {
            this.topGuild = checkpointGuild;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.topGame = null;
        } else {
            this.topGame = checkpointApplication;
        }
    }

    private CheckpointDataV2025(long j10, String cardId, String cardAssetUrl, String powerLevel, int i10, String messagesString, String voiceString, String reactionString, CheckpointCardClickable checkpointCardClickable, CheckpointEmoji checkpointEmoji, CheckpointGuild checkpointGuild, CheckpointApplication checkpointApplication) {
        Intrinsics.checkNotNullParameter(cardId, "cardId");
        Intrinsics.checkNotNullParameter(cardAssetUrl, "cardAssetUrl");
        Intrinsics.checkNotNullParameter(powerLevel, "powerLevel");
        Intrinsics.checkNotNullParameter(messagesString, "messagesString");
        Intrinsics.checkNotNullParameter(voiceString, "voiceString");
        Intrinsics.checkNotNullParameter(reactionString, "reactionString");
        this.authorId = j10;
        this.cardId = cardId;
        this.cardAssetUrl = cardAssetUrl;
        this.powerLevel = powerLevel;
        this.powerLevelUnits = i10;
        this.messagesString = messagesString;
        this.voiceString = voiceString;
        this.reactionString = reactionString;
        this.clickable = checkpointCardClickable;
        this.topEmoji = checkpointEmoji;
        this.topGuild = checkpointGuild;
        this.topGame = checkpointApplication;
    }

    public /* synthetic */ CheckpointDataV2025(long j10, String str, String str2, String str3, int i10, String str4, String str5, String str6, CheckpointCardClickable checkpointCardClickable, CheckpointEmoji checkpointEmoji, CheckpointGuild checkpointGuild, CheckpointApplication checkpointApplication, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, str2, str3, i10, str4, str5, str6, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : checkpointCardClickable, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : checkpointEmoji, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : checkpointGuild, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : checkpointApplication, null);
    }
}
