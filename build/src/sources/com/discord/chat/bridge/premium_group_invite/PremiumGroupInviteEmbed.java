package com.discord.chat.bridge.premium_group_invite;

import bt.v1;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableTextSerializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 >2\u00020\u0001:\u0002=>B_\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\u0006\u0010\u000b\u001a\u00020\u0005\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\r\u001a\u00020\u0005\u0012\u0006\u0010\u000e\u001a\u00020\u000f¢\u0006\u0004\b\u0010\u0010\u0011B}\b\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\u0006\u0010\u000b\u001a\u00020\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\r\u001a\u00020\u0005\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u0010\u0010\u0015J\t\u0010$\u001a\u00020\u0003HÆ\u0003J\t\u0010%\u001a\u00020\u0005HÆ\u0003J\t\u0010&\u001a\u00020\u0005HÆ\u0003J\t\u0010'\u001a\u00020\u0005HÆ\u0003J\t\u0010(\u001a\u00020\u0003HÆ\u0003J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u0005HÆ\u0003J\t\u0010+\u001a\u00020\u0005HÆ\u0003J\t\u0010,\u001a\u00020\u0003HÆ\u0003J\t\u0010-\u001a\u00020\u0005HÆ\u0003J\t\u0010.\u001a\u00020\u000fHÆ\u0003Jw\u0010/\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\u00032\b\b\u0002\u0010\n\u001a\u00020\u00052\b\b\u0002\u0010\u000b\u001a\u00020\u00052\b\b\u0002\u0010\f\u001a\u00020\u00032\b\b\u0002\u0010\r\u001a\u00020\u00052\b\b\u0002\u0010\u000e\u001a\u00020\u000fHÆ\u0001J\u0013\u00100\u001a\u0002012\b\u00102\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00103\u001a\u00020\u0005HÖ\u0001J\t\u00104\u001a\u00020\u0003HÖ\u0001J%\u00105\u001a\u0002062\u0006\u00107\u001a\u00020\u00002\u0006\u00108\u001a\u0002092\u0006\u0010:\u001a\u00020;H\u0001¢\u0006\u0002\b<R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0019R\u0011\u0010\u0007\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0019R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0017R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0017R\u0011\u0010\n\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0019R\u0011\u0010\u000b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0019R\u0011\u0010\f\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0017R\u0011\u0010\r\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u0019R\u0011\u0010\u000e\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#¨\u0006?"}, d2 = {"Lcom/discord/chat/bridge/premium_group_invite/PremiumGroupInviteEmbed;", "", "headerText", "", "headerColor", "", ViewProps.BACKGROUND_COLOR, ViewProps.BORDER_COLOR, "headerImageUrl", "betaPillText", "betaPillTextColor", "betaPillBackgroundColor", "bodyText", "bodyTextColor", "learnMoreLink", "Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "<init>", "(Ljava/lang/String;IIILjava/lang/String;Ljava/lang/String;IILjava/lang/String;ILcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;IIILjava/lang/String;Ljava/lang/String;IILjava/lang/String;ILcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeaderText", "()Ljava/lang/String;", "getHeaderColor", "()I", "getBackgroundColor", "getBorderColor", "getHeaderImageUrl", "getBetaPillText", "getBetaPillTextColor", "getBetaPillBackgroundColor", "getBodyText", "getBodyTextColor", "getLearnMoreLink", "()Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PremiumGroupInviteEmbed {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int backgroundColor;
    private final int betaPillBackgroundColor;
    @NotNull
    private final String betaPillText;
    private final int betaPillTextColor;
    @NotNull
    private final String bodyText;
    private final int bodyTextColor;
    private final int borderColor;
    private final int headerColor;
    @NotNull
    private final String headerImageUrl;
    @NotNull
    private final String headerText;
    @NotNull
    private final AnnotatedStructurableText learnMoreLink;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/premium_group_invite/PremiumGroupInviteEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/premium_group_invite/PremiumGroupInviteEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return PremiumGroupInviteEmbed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ PremiumGroupInviteEmbed(int i10, String str, int i11, int i12, int i13, String str2, String str3, int i14, int i15, String str4, int i16, AnnotatedStructurableText annotatedStructurableText, SerializationConstructorMarker serializationConstructorMarker) {
        if (2047 != (i10 & 2047)) {
            v1.b(i10, 2047, PremiumGroupInviteEmbed$$serializer.INSTANCE.getDescriptor());
        }
        this.headerText = str;
        this.headerColor = i11;
        this.backgroundColor = i12;
        this.borderColor = i13;
        this.headerImageUrl = str2;
        this.betaPillText = str3;
        this.betaPillTextColor = i14;
        this.betaPillBackgroundColor = i15;
        this.bodyText = str4;
        this.bodyTextColor = i16;
        this.learnMoreLink = annotatedStructurableText;
    }

    public static /* synthetic */ PremiumGroupInviteEmbed copy$default(PremiumGroupInviteEmbed premiumGroupInviteEmbed, String str, int i10, int i11, int i12, String str2, String str3, int i13, int i14, String str4, int i15, AnnotatedStructurableText annotatedStructurableText, int i16, Object obj) {
        if ((i16 & 1) != 0) {
            str = premiumGroupInviteEmbed.headerText;
        }
        if ((i16 & 2) != 0) {
            i10 = premiumGroupInviteEmbed.headerColor;
        }
        if ((i16 & 4) != 0) {
            i11 = premiumGroupInviteEmbed.backgroundColor;
        }
        if ((i16 & 8) != 0) {
            i12 = premiumGroupInviteEmbed.borderColor;
        }
        if ((i16 & 16) != 0) {
            str2 = premiumGroupInviteEmbed.headerImageUrl;
        }
        if ((i16 & 32) != 0) {
            str3 = premiumGroupInviteEmbed.betaPillText;
        }
        if ((i16 & 64) != 0) {
            i13 = premiumGroupInviteEmbed.betaPillTextColor;
        }
        if ((i16 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            i14 = premiumGroupInviteEmbed.betaPillBackgroundColor;
        }
        if ((i16 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str4 = premiumGroupInviteEmbed.bodyText;
        }
        if ((i16 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            i15 = premiumGroupInviteEmbed.bodyTextColor;
        }
        if ((i16 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            annotatedStructurableText = premiumGroupInviteEmbed.learnMoreLink;
        }
        int i17 = i15;
        AnnotatedStructurableText annotatedStructurableText2 = annotatedStructurableText;
        int i18 = i14;
        String str5 = str4;
        String str6 = str3;
        int i19 = i13;
        String str7 = str2;
        int i20 = i11;
        return premiumGroupInviteEmbed.copy(str, i10, i20, i12, str7, str6, i19, i18, str5, i17, annotatedStructurableText2);
    }

    public static final /* synthetic */ void write$Self$chat_release(PremiumGroupInviteEmbed premiumGroupInviteEmbed, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, premiumGroupInviteEmbed.headerText);
        compositeEncoder.v(serialDescriptor, 1, premiumGroupInviteEmbed.headerColor);
        compositeEncoder.v(serialDescriptor, 2, premiumGroupInviteEmbed.backgroundColor);
        compositeEncoder.v(serialDescriptor, 3, premiumGroupInviteEmbed.borderColor);
        compositeEncoder.x(serialDescriptor, 4, premiumGroupInviteEmbed.headerImageUrl);
        compositeEncoder.x(serialDescriptor, 5, premiumGroupInviteEmbed.betaPillText);
        compositeEncoder.v(serialDescriptor, 6, premiumGroupInviteEmbed.betaPillTextColor);
        compositeEncoder.v(serialDescriptor, 7, premiumGroupInviteEmbed.betaPillBackgroundColor);
        compositeEncoder.x(serialDescriptor, 8, premiumGroupInviteEmbed.bodyText);
        compositeEncoder.v(serialDescriptor, 9, premiumGroupInviteEmbed.bodyTextColor);
        compositeEncoder.m(serialDescriptor, 10, AnnotatedStructurableTextSerializer.INSTANCE, premiumGroupInviteEmbed.learnMoreLink);
    }

    @NotNull
    public final String component1() {
        return this.headerText;
    }

    public final int component10() {
        return this.bodyTextColor;
    }

    @NotNull
    public final AnnotatedStructurableText component11() {
        return this.learnMoreLink;
    }

    public final int component2() {
        return this.headerColor;
    }

    public final int component3() {
        return this.backgroundColor;
    }

    public final int component4() {
        return this.borderColor;
    }

    @NotNull
    public final String component5() {
        return this.headerImageUrl;
    }

    @NotNull
    public final String component6() {
        return this.betaPillText;
    }

    public final int component7() {
        return this.betaPillTextColor;
    }

    public final int component8() {
        return this.betaPillBackgroundColor;
    }

    @NotNull
    public final String component9() {
        return this.bodyText;
    }

    @NotNull
    public final PremiumGroupInviteEmbed copy(@NotNull String headerText, int i10, int i11, int i12, @NotNull String headerImageUrl, @NotNull String betaPillText, int i13, int i14, @NotNull String bodyText, int i15, @NotNull AnnotatedStructurableText learnMoreLink) {
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(headerImageUrl, "headerImageUrl");
        Intrinsics.checkNotNullParameter(betaPillText, "betaPillText");
        Intrinsics.checkNotNullParameter(bodyText, "bodyText");
        Intrinsics.checkNotNullParameter(learnMoreLink, "learnMoreLink");
        return new PremiumGroupInviteEmbed(headerText, i10, i11, i12, headerImageUrl, betaPillText, i13, i14, bodyText, i15, learnMoreLink);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PremiumGroupInviteEmbed) {
            PremiumGroupInviteEmbed premiumGroupInviteEmbed = (PremiumGroupInviteEmbed) obj;
            return Intrinsics.areEqual(this.headerText, premiumGroupInviteEmbed.headerText) && this.headerColor == premiumGroupInviteEmbed.headerColor && this.backgroundColor == premiumGroupInviteEmbed.backgroundColor && this.borderColor == premiumGroupInviteEmbed.borderColor && Intrinsics.areEqual(this.headerImageUrl, premiumGroupInviteEmbed.headerImageUrl) && Intrinsics.areEqual(this.betaPillText, premiumGroupInviteEmbed.betaPillText) && this.betaPillTextColor == premiumGroupInviteEmbed.betaPillTextColor && this.betaPillBackgroundColor == premiumGroupInviteEmbed.betaPillBackgroundColor && Intrinsics.areEqual(this.bodyText, premiumGroupInviteEmbed.bodyText) && this.bodyTextColor == premiumGroupInviteEmbed.bodyTextColor && Intrinsics.areEqual(this.learnMoreLink, premiumGroupInviteEmbed.learnMoreLink);
        }
        return false;
    }

    public final int getBackgroundColor() {
        return this.backgroundColor;
    }

    public final int getBetaPillBackgroundColor() {
        return this.betaPillBackgroundColor;
    }

    @NotNull
    public final String getBetaPillText() {
        return this.betaPillText;
    }

    public final int getBetaPillTextColor() {
        return this.betaPillTextColor;
    }

    @NotNull
    public final String getBodyText() {
        return this.bodyText;
    }

    public final int getBodyTextColor() {
        return this.bodyTextColor;
    }

    public final int getBorderColor() {
        return this.borderColor;
    }

    public final int getHeaderColor() {
        return this.headerColor;
    }

    @NotNull
    public final String getHeaderImageUrl() {
        return this.headerImageUrl;
    }

    @NotNull
    public final String getHeaderText() {
        return this.headerText;
    }

    @NotNull
    public final AnnotatedStructurableText getLearnMoreLink() {
        return this.learnMoreLink;
    }

    public int hashCode() {
        return (((((((((((((((((((this.headerText.hashCode() * 31) + Integer.hashCode(this.headerColor)) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.borderColor)) * 31) + this.headerImageUrl.hashCode()) * 31) + this.betaPillText.hashCode()) * 31) + Integer.hashCode(this.betaPillTextColor)) * 31) + Integer.hashCode(this.betaPillBackgroundColor)) * 31) + this.bodyText.hashCode()) * 31) + Integer.hashCode(this.bodyTextColor)) * 31) + this.learnMoreLink.hashCode();
    }

    @NotNull
    public String toString() {
        String str = this.headerText;
        int i10 = this.headerColor;
        int i11 = this.backgroundColor;
        int i12 = this.borderColor;
        String str2 = this.headerImageUrl;
        String str3 = this.betaPillText;
        int i13 = this.betaPillTextColor;
        int i14 = this.betaPillBackgroundColor;
        String str4 = this.bodyText;
        int i15 = this.bodyTextColor;
        AnnotatedStructurableText annotatedStructurableText = this.learnMoreLink;
        return "PremiumGroupInviteEmbed(headerText=" + str + ", headerColor=" + i10 + ", backgroundColor=" + i11 + ", borderColor=" + i12 + ", headerImageUrl=" + str2 + ", betaPillText=" + str3 + ", betaPillTextColor=" + i13 + ", betaPillBackgroundColor=" + i14 + ", bodyText=" + str4 + ", bodyTextColor=" + i15 + ", learnMoreLink=" + annotatedStructurableText + ")";
    }

    public PremiumGroupInviteEmbed(@NotNull String headerText, int i10, int i11, int i12, @NotNull String headerImageUrl, @NotNull String betaPillText, int i13, int i14, @NotNull String bodyText, int i15, @NotNull AnnotatedStructurableText learnMoreLink) {
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(headerImageUrl, "headerImageUrl");
        Intrinsics.checkNotNullParameter(betaPillText, "betaPillText");
        Intrinsics.checkNotNullParameter(bodyText, "bodyText");
        Intrinsics.checkNotNullParameter(learnMoreLink, "learnMoreLink");
        this.headerText = headerText;
        this.headerColor = i10;
        this.backgroundColor = i11;
        this.borderColor = i12;
        this.headerImageUrl = headerImageUrl;
        this.betaPillText = betaPillText;
        this.betaPillTextColor = i13;
        this.betaPillBackgroundColor = i14;
        this.bodyText = bodyText;
        this.bodyTextColor = i15;
        this.learnMoreLink = learnMoreLink;
    }
}
