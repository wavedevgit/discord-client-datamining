package com.discord.chat.bridge.automod;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.m;
import jt.n2;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 92\u00020\u0001:\u000289B_\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u000e\u0010\u000fBu\b\u0010\u0012\u0006\u0010\u0010\u001a\u00020\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000e\u0010\u0014J\t\u0010!\u001a\u00020\u0003HÆ\u0003J\t\u0010\"\u001a\u00020\u0003HÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010$\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010%\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010&\u001a\u00020\u0003HÆ\u0003J\t\u0010'\u001a\u00020\u0003HÆ\u0003J\t\u0010(\u001a\u00020\u000bHÆ\u0003J\u000b\u0010)\u001a\u0004\u0018\u00010\rHÆ\u0003Jk\u0010*\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\u00032\b\b\u0002\u0010\n\u001a\u00020\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\rHÆ\u0001J\u0013\u0010+\u001a\u00020,2\b\u0010-\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010.\u001a\u00020\u0011HÖ\u0001J\t\u0010/\u001a\u00020\u0003HÖ\u0001J%\u00100\u001a\u0002012\u0006\u00102\u001a\u00020\u00002\u0006\u00103\u001a\u0002042\u0006\u00105\u001a\u000206H\u0001¢\u0006\u0002\b7R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0016R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0016R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0016R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0016R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0016R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0016R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0013\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 ¨\u0006:"}, d2 = {"Lcom/discord/chat/bridge/automod/AutoModerationContext;", "", "headerText", "", "headerBadgeText", "ruleDisplayText", "keywordDisplayText", "actionsIconURL", "actionsText", "feedbackText", "message", "Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;", "notification", "Lcom/discord/chat/bridge/automod/AutoModerationNotification;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;Lcom/discord/chat/bridge/automod/AutoModerationNotification;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;Lcom/discord/chat/bridge/automod/AutoModerationNotification;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeaderText", "()Ljava/lang/String;", "getHeaderBadgeText", "getRuleDisplayText", "getKeywordDisplayText", "getActionsIconURL", "getActionsText", "getFeedbackText", "getMessage", "()Lcom/discord/chat/bridge/automod/FlaggedMessageEmbed;", "getNotification", "()Lcom/discord/chat/bridge/automod/AutoModerationNotification;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AutoModerationContext {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String actionsIconURL;
    @NotNull
    private final String actionsText;
    @NotNull
    private final String feedbackText;
    @NotNull
    private final String headerBadgeText;
    @NotNull
    private final String headerText;
    private final String keywordDisplayText;
    @NotNull
    private final FlaggedMessageEmbed message;
    private final AutoModerationNotification notification;
    private final String ruleDisplayText;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/automod/AutoModerationContext$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/automod/AutoModerationContext;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return AutoModerationContext$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ AutoModerationContext(int i10, String str, String str2, String str3, String str4, String str5, String str6, String str7, FlaggedMessageEmbed flaggedMessageEmbed, AutoModerationNotification autoModerationNotification, SerializationConstructorMarker serializationConstructorMarker) {
        if (227 != (i10 & 227)) {
            v1.b(i10, 227, AutoModerationContext$$serializer.INSTANCE.getDescriptor());
        }
        this.headerText = str;
        this.headerBadgeText = str2;
        if ((i10 & 4) == 0) {
            this.ruleDisplayText = null;
        } else {
            this.ruleDisplayText = str3;
        }
        if ((i10 & 8) == 0) {
            this.keywordDisplayText = null;
        } else {
            this.keywordDisplayText = str4;
        }
        if ((i10 & 16) == 0) {
            this.actionsIconURL = null;
        } else {
            this.actionsIconURL = str5;
        }
        this.actionsText = str6;
        this.feedbackText = str7;
        this.message = flaggedMessageEmbed;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.notification = null;
        } else {
            this.notification = autoModerationNotification;
        }
    }

    public static /* synthetic */ AutoModerationContext copy$default(AutoModerationContext autoModerationContext, String str, String str2, String str3, String str4, String str5, String str6, String str7, FlaggedMessageEmbed flaggedMessageEmbed, AutoModerationNotification autoModerationNotification, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = autoModerationContext.headerText;
        }
        if ((i10 & 2) != 0) {
            str2 = autoModerationContext.headerBadgeText;
        }
        if ((i10 & 4) != 0) {
            str3 = autoModerationContext.ruleDisplayText;
        }
        if ((i10 & 8) != 0) {
            str4 = autoModerationContext.keywordDisplayText;
        }
        if ((i10 & 16) != 0) {
            str5 = autoModerationContext.actionsIconURL;
        }
        if ((i10 & 32) != 0) {
            str6 = autoModerationContext.actionsText;
        }
        if ((i10 & 64) != 0) {
            str7 = autoModerationContext.feedbackText;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            flaggedMessageEmbed = autoModerationContext.message;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            autoModerationNotification = autoModerationContext.notification;
        }
        FlaggedMessageEmbed flaggedMessageEmbed2 = flaggedMessageEmbed;
        AutoModerationNotification autoModerationNotification2 = autoModerationNotification;
        String str8 = str6;
        String str9 = str7;
        String str10 = str5;
        String str11 = str3;
        return autoModerationContext.copy(str, str2, str11, str4, str10, str8, str9, flaggedMessageEmbed2, autoModerationNotification2);
    }

    public static final /* synthetic */ void write$Self$chat_release(AutoModerationContext autoModerationContext, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.z(serialDescriptor, 0, autoModerationContext.headerText);
        compositeEncoder.z(serialDescriptor, 1, autoModerationContext.headerBadgeText);
        if (compositeEncoder.A(serialDescriptor, 2) || autoModerationContext.ruleDisplayText != null) {
            compositeEncoder.l(serialDescriptor, 2, n2.f31041a, autoModerationContext.ruleDisplayText);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || autoModerationContext.keywordDisplayText != null) {
            compositeEncoder.l(serialDescriptor, 3, n2.f31041a, autoModerationContext.keywordDisplayText);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || autoModerationContext.actionsIconURL != null) {
            compositeEncoder.l(serialDescriptor, 4, n2.f31041a, autoModerationContext.actionsIconURL);
        }
        compositeEncoder.z(serialDescriptor, 5, autoModerationContext.actionsText);
        compositeEncoder.z(serialDescriptor, 6, autoModerationContext.feedbackText);
        compositeEncoder.s(serialDescriptor, 7, FlaggedMessageEmbed$$serializer.INSTANCE, autoModerationContext.message);
        if (compositeEncoder.A(serialDescriptor, 8) || autoModerationContext.notification != null) {
            compositeEncoder.l(serialDescriptor, 8, AutoModerationNotification$$serializer.INSTANCE, autoModerationContext.notification);
        }
    }

    @NotNull
    public final String component1() {
        return this.headerText;
    }

    @NotNull
    public final String component2() {
        return this.headerBadgeText;
    }

    public final String component3() {
        return this.ruleDisplayText;
    }

    public final String component4() {
        return this.keywordDisplayText;
    }

    public final String component5() {
        return this.actionsIconURL;
    }

    @NotNull
    public final String component6() {
        return this.actionsText;
    }

    @NotNull
    public final String component7() {
        return this.feedbackText;
    }

    @NotNull
    public final FlaggedMessageEmbed component8() {
        return this.message;
    }

    public final AutoModerationNotification component9() {
        return this.notification;
    }

    @NotNull
    public final AutoModerationContext copy(@NotNull String headerText, @NotNull String headerBadgeText, String str, String str2, String str3, @NotNull String actionsText, @NotNull String feedbackText, @NotNull FlaggedMessageEmbed message, AutoModerationNotification autoModerationNotification) {
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(headerBadgeText, "headerBadgeText");
        Intrinsics.checkNotNullParameter(actionsText, "actionsText");
        Intrinsics.checkNotNullParameter(feedbackText, "feedbackText");
        Intrinsics.checkNotNullParameter(message, "message");
        return new AutoModerationContext(headerText, headerBadgeText, str, str2, str3, actionsText, feedbackText, message, autoModerationNotification);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AutoModerationContext) {
            AutoModerationContext autoModerationContext = (AutoModerationContext) obj;
            return Intrinsics.areEqual(this.headerText, autoModerationContext.headerText) && Intrinsics.areEqual(this.headerBadgeText, autoModerationContext.headerBadgeText) && Intrinsics.areEqual(this.ruleDisplayText, autoModerationContext.ruleDisplayText) && Intrinsics.areEqual(this.keywordDisplayText, autoModerationContext.keywordDisplayText) && Intrinsics.areEqual(this.actionsIconURL, autoModerationContext.actionsIconURL) && Intrinsics.areEqual(this.actionsText, autoModerationContext.actionsText) && Intrinsics.areEqual(this.feedbackText, autoModerationContext.feedbackText) && Intrinsics.areEqual(this.message, autoModerationContext.message) && Intrinsics.areEqual(this.notification, autoModerationContext.notification);
        }
        return false;
    }

    public final String getActionsIconURL() {
        return this.actionsIconURL;
    }

    @NotNull
    public final String getActionsText() {
        return this.actionsText;
    }

    @NotNull
    public final String getFeedbackText() {
        return this.feedbackText;
    }

    @NotNull
    public final String getHeaderBadgeText() {
        return this.headerBadgeText;
    }

    @NotNull
    public final String getHeaderText() {
        return this.headerText;
    }

    public final String getKeywordDisplayText() {
        return this.keywordDisplayText;
    }

    @NotNull
    public final FlaggedMessageEmbed getMessage() {
        return this.message;
    }

    public final AutoModerationNotification getNotification() {
        return this.notification;
    }

    public final String getRuleDisplayText() {
        return this.ruleDisplayText;
    }

    public int hashCode() {
        int hashCode = ((this.headerText.hashCode() * 31) + this.headerBadgeText.hashCode()) * 31;
        String str = this.ruleDisplayText;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.keywordDisplayText;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.actionsIconURL;
        int hashCode4 = (((((((hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31) + this.actionsText.hashCode()) * 31) + this.feedbackText.hashCode()) * 31) + this.message.hashCode()) * 31;
        AutoModerationNotification autoModerationNotification = this.notification;
        return hashCode4 + (autoModerationNotification != null ? autoModerationNotification.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.headerText;
        String str2 = this.headerBadgeText;
        String str3 = this.ruleDisplayText;
        String str4 = this.keywordDisplayText;
        String str5 = this.actionsIconURL;
        String str6 = this.actionsText;
        String str7 = this.feedbackText;
        FlaggedMessageEmbed flaggedMessageEmbed = this.message;
        AutoModerationNotification autoModerationNotification = this.notification;
        return "AutoModerationContext(headerText=" + str + ", headerBadgeText=" + str2 + ", ruleDisplayText=" + str3 + ", keywordDisplayText=" + str4 + ", actionsIconURL=" + str5 + ", actionsText=" + str6 + ", feedbackText=" + str7 + ", message=" + flaggedMessageEmbed + ", notification=" + autoModerationNotification + ")";
    }

    public AutoModerationContext(@NotNull String headerText, @NotNull String headerBadgeText, String str, String str2, String str3, @NotNull String actionsText, @NotNull String feedbackText, @NotNull FlaggedMessageEmbed message, AutoModerationNotification autoModerationNotification) {
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(headerBadgeText, "headerBadgeText");
        Intrinsics.checkNotNullParameter(actionsText, "actionsText");
        Intrinsics.checkNotNullParameter(feedbackText, "feedbackText");
        Intrinsics.checkNotNullParameter(message, "message");
        this.headerText = headerText;
        this.headerBadgeText = headerBadgeText;
        this.ruleDisplayText = str;
        this.keywordDisplayText = str2;
        this.actionsIconURL = str3;
        this.actionsText = actionsText;
        this.feedbackText = feedbackText;
        this.message = message;
        this.notification = autoModerationNotification;
    }

    public /* synthetic */ AutoModerationContext(String str, String str2, String str3, String str4, String str5, String str6, String str7, FlaggedMessageEmbed flaggedMessageEmbed, AutoModerationNotification autoModerationNotification, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, str6, str7, flaggedMessageEmbed, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : autoModerationNotification);
    }
}
