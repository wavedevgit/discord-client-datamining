package com.discord.chat.bridge.safetysystemnotification;

import com.discord.chat.bridge.safetysystemnotification.SafetySystemNotificationEmbed;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.m;
import gt.n2;
import gt.v1;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import or.l;
import or.o;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 =2\u00020\u0001:\u0002<=Bw\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\r\u001a\u00020\u000e¢\u0006\u0004\b\u000f\u0010\u0010B\u0089\u0001\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0012\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u000f\u0010\u0015J\t\u0010#\u001a\u00020\u0003HÆ\u0003J\t\u0010$\u001a\u00020\u0003HÆ\u0003J\t\u0010%\u001a\u00020\u0003HÆ\u0003J\t\u0010&\u001a\u00020\u0003HÆ\u0003J\u000b\u0010'\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010(\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010)\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010*\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010+\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010,\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010-\u001a\u00020\u000eHÆ\u0003J\u0083\u0001\u0010.\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\r\u001a\u00020\u000eHÆ\u0001J\u0013\u0010/\u001a\u0002002\b\u00101\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00102\u001a\u00020\u0012HÖ\u0001J\t\u00103\u001a\u00020\u0003HÖ\u0001J%\u00104\u001a\u0002052\u0006\u00106\u001a\u00020\u00002\u0006\u00107\u001a\u0002082\u0006\u00109\u001a\u00020:H\u0001¢\u0006\u0002\b;R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0017R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0017R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0017R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0017R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0017R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0017R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0017R\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0017R\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"¨\u0006>"}, d2 = {"Lcom/discord/chat/bridge/safetysystemnotification/SafetySystemNotificationEmbed;", "", "titleText", "", "titleIcon", "subtitleText", "descriptionText", "primaryCtaText", "primaryCtaType", "primaryCtaKey", "secondaryCtaText", "secondaryCtaType", "secondaryCtaKey", "footerTheme", "Lcom/discord/chat/bridge/safetysystemnotification/FooterTheme;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/safetysystemnotification/FooterTheme;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/safetysystemnotification/FooterTheme;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getTitleText", "()Ljava/lang/String;", "getTitleIcon", "getSubtitleText", "getDescriptionText", "getPrimaryCtaText", "getPrimaryCtaType", "getPrimaryCtaKey", "getSecondaryCtaText", "getSecondaryCtaType", "getSecondaryCtaKey", "getFooterTheme", "()Lcom/discord/chat/bridge/safetysystemnotification/FooterTheme;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SafetySystemNotificationEmbed {
    @NotNull
    private final String descriptionText;
    @NotNull
    private final FooterTheme footerTheme;
    private final String primaryCtaKey;
    private final String primaryCtaText;
    private final String primaryCtaType;
    private final String secondaryCtaKey;
    private final String secondaryCtaText;
    private final String secondaryCtaType;
    @NotNull
    private final String subtitleText;
    @NotNull
    private final String titleIcon;
    @NotNull
    private final String titleText;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, null, null, null, null, null, null, null, l.b(o.f44232e, new Function0() { // from class: o6.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = SafetySystemNotificationEmbed._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/safetysystemnotification/SafetySystemNotificationEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/safetysystemnotification/SafetySystemNotificationEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return SafetySystemNotificationEmbed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ SafetySystemNotificationEmbed(int i10, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, FooterTheme footerTheme, SerializationConstructorMarker serializationConstructorMarker) {
        if (1039 != (i10 & 1039)) {
            v1.b(i10, 1039, SafetySystemNotificationEmbed$$serializer.INSTANCE.getDescriptor());
        }
        this.titleText = str;
        this.titleIcon = str2;
        this.subtitleText = str3;
        this.descriptionText = str4;
        if ((i10 & 16) == 0) {
            this.primaryCtaText = null;
        } else {
            this.primaryCtaText = str5;
        }
        if ((i10 & 32) == 0) {
            this.primaryCtaType = null;
        } else {
            this.primaryCtaType = str6;
        }
        if ((i10 & 64) == 0) {
            this.primaryCtaKey = null;
        } else {
            this.primaryCtaKey = str7;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.secondaryCtaText = null;
        } else {
            this.secondaryCtaText = str8;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.secondaryCtaType = null;
        } else {
            this.secondaryCtaType = str9;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.secondaryCtaKey = null;
        } else {
            this.secondaryCtaKey = str10;
        }
        this.footerTheme = footerTheme;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return FooterTheme.Companion.serializer();
    }

    public static /* synthetic */ SafetySystemNotificationEmbed copy$default(SafetySystemNotificationEmbed safetySystemNotificationEmbed, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, FooterTheme footerTheme, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = safetySystemNotificationEmbed.titleText;
        }
        if ((i10 & 2) != 0) {
            str2 = safetySystemNotificationEmbed.titleIcon;
        }
        if ((i10 & 4) != 0) {
            str3 = safetySystemNotificationEmbed.subtitleText;
        }
        if ((i10 & 8) != 0) {
            str4 = safetySystemNotificationEmbed.descriptionText;
        }
        if ((i10 & 16) != 0) {
            str5 = safetySystemNotificationEmbed.primaryCtaText;
        }
        if ((i10 & 32) != 0) {
            str6 = safetySystemNotificationEmbed.primaryCtaType;
        }
        if ((i10 & 64) != 0) {
            str7 = safetySystemNotificationEmbed.primaryCtaKey;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            str8 = safetySystemNotificationEmbed.secondaryCtaText;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str9 = safetySystemNotificationEmbed.secondaryCtaType;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            str10 = safetySystemNotificationEmbed.secondaryCtaKey;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            footerTheme = safetySystemNotificationEmbed.footerTheme;
        }
        String str11 = str10;
        FooterTheme footerTheme2 = footerTheme;
        String str12 = str8;
        String str13 = str9;
        String str14 = str6;
        String str15 = str7;
        String str16 = str5;
        String str17 = str3;
        return safetySystemNotificationEmbed.copy(str, str2, str17, str4, str16, str14, str15, str12, str13, str11, footerTheme2);
    }

    public static final /* synthetic */ void write$Self$chat_release(SafetySystemNotificationEmbed safetySystemNotificationEmbed, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.x(serialDescriptor, 0, safetySystemNotificationEmbed.titleText);
        compositeEncoder.x(serialDescriptor, 1, safetySystemNotificationEmbed.titleIcon);
        compositeEncoder.x(serialDescriptor, 2, safetySystemNotificationEmbed.subtitleText);
        compositeEncoder.x(serialDescriptor, 3, safetySystemNotificationEmbed.descriptionText);
        if (compositeEncoder.z(serialDescriptor, 4) || safetySystemNotificationEmbed.primaryCtaText != null) {
            compositeEncoder.A(serialDescriptor, 4, n2.f25302a, safetySystemNotificationEmbed.primaryCtaText);
        }
        if (compositeEncoder.z(serialDescriptor, 5) || safetySystemNotificationEmbed.primaryCtaType != null) {
            compositeEncoder.A(serialDescriptor, 5, n2.f25302a, safetySystemNotificationEmbed.primaryCtaType);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || safetySystemNotificationEmbed.primaryCtaKey != null) {
            compositeEncoder.A(serialDescriptor, 6, n2.f25302a, safetySystemNotificationEmbed.primaryCtaKey);
        }
        if (compositeEncoder.z(serialDescriptor, 7) || safetySystemNotificationEmbed.secondaryCtaText != null) {
            compositeEncoder.A(serialDescriptor, 7, n2.f25302a, safetySystemNotificationEmbed.secondaryCtaText);
        }
        if (compositeEncoder.z(serialDescriptor, 8) || safetySystemNotificationEmbed.secondaryCtaType != null) {
            compositeEncoder.A(serialDescriptor, 8, n2.f25302a, safetySystemNotificationEmbed.secondaryCtaType);
        }
        if (compositeEncoder.z(serialDescriptor, 9) || safetySystemNotificationEmbed.secondaryCtaKey != null) {
            compositeEncoder.A(serialDescriptor, 9, n2.f25302a, safetySystemNotificationEmbed.secondaryCtaKey);
        }
        compositeEncoder.l(serialDescriptor, 10, (dt.o) lazyArr[10].getValue(), safetySystemNotificationEmbed.footerTheme);
    }

    @NotNull
    public final String component1() {
        return this.titleText;
    }

    public final String component10() {
        return this.secondaryCtaKey;
    }

    @NotNull
    public final FooterTheme component11() {
        return this.footerTheme;
    }

    @NotNull
    public final String component2() {
        return this.titleIcon;
    }

    @NotNull
    public final String component3() {
        return this.subtitleText;
    }

    @NotNull
    public final String component4() {
        return this.descriptionText;
    }

    public final String component5() {
        return this.primaryCtaText;
    }

    public final String component6() {
        return this.primaryCtaType;
    }

    public final String component7() {
        return this.primaryCtaKey;
    }

    public final String component8() {
        return this.secondaryCtaText;
    }

    public final String component9() {
        return this.secondaryCtaType;
    }

    @NotNull
    public final SafetySystemNotificationEmbed copy(@NotNull String titleText, @NotNull String titleIcon, @NotNull String subtitleText, @NotNull String descriptionText, String str, String str2, String str3, String str4, String str5, String str6, @NotNull FooterTheme footerTheme) {
        Intrinsics.checkNotNullParameter(titleText, "titleText");
        Intrinsics.checkNotNullParameter(titleIcon, "titleIcon");
        Intrinsics.checkNotNullParameter(subtitleText, "subtitleText");
        Intrinsics.checkNotNullParameter(descriptionText, "descriptionText");
        Intrinsics.checkNotNullParameter(footerTheme, "footerTheme");
        return new SafetySystemNotificationEmbed(titleText, titleIcon, subtitleText, descriptionText, str, str2, str3, str4, str5, str6, footerTheme);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SafetySystemNotificationEmbed) {
            SafetySystemNotificationEmbed safetySystemNotificationEmbed = (SafetySystemNotificationEmbed) obj;
            return Intrinsics.areEqual(this.titleText, safetySystemNotificationEmbed.titleText) && Intrinsics.areEqual(this.titleIcon, safetySystemNotificationEmbed.titleIcon) && Intrinsics.areEqual(this.subtitleText, safetySystemNotificationEmbed.subtitleText) && Intrinsics.areEqual(this.descriptionText, safetySystemNotificationEmbed.descriptionText) && Intrinsics.areEqual(this.primaryCtaText, safetySystemNotificationEmbed.primaryCtaText) && Intrinsics.areEqual(this.primaryCtaType, safetySystemNotificationEmbed.primaryCtaType) && Intrinsics.areEqual(this.primaryCtaKey, safetySystemNotificationEmbed.primaryCtaKey) && Intrinsics.areEqual(this.secondaryCtaText, safetySystemNotificationEmbed.secondaryCtaText) && Intrinsics.areEqual(this.secondaryCtaType, safetySystemNotificationEmbed.secondaryCtaType) && Intrinsics.areEqual(this.secondaryCtaKey, safetySystemNotificationEmbed.secondaryCtaKey) && this.footerTheme == safetySystemNotificationEmbed.footerTheme;
        }
        return false;
    }

    @NotNull
    public final String getDescriptionText() {
        return this.descriptionText;
    }

    @NotNull
    public final FooterTheme getFooterTheme() {
        return this.footerTheme;
    }

    public final String getPrimaryCtaKey() {
        return this.primaryCtaKey;
    }

    public final String getPrimaryCtaText() {
        return this.primaryCtaText;
    }

    public final String getPrimaryCtaType() {
        return this.primaryCtaType;
    }

    public final String getSecondaryCtaKey() {
        return this.secondaryCtaKey;
    }

    public final String getSecondaryCtaText() {
        return this.secondaryCtaText;
    }

    public final String getSecondaryCtaType() {
        return this.secondaryCtaType;
    }

    @NotNull
    public final String getSubtitleText() {
        return this.subtitleText;
    }

    @NotNull
    public final String getTitleIcon() {
        return this.titleIcon;
    }

    @NotNull
    public final String getTitleText() {
        return this.titleText;
    }

    public int hashCode() {
        int hashCode = ((((((this.titleText.hashCode() * 31) + this.titleIcon.hashCode()) * 31) + this.subtitleText.hashCode()) * 31) + this.descriptionText.hashCode()) * 31;
        String str = this.primaryCtaText;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.primaryCtaType;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.primaryCtaKey;
        int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.secondaryCtaText;
        int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.secondaryCtaType;
        int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.secondaryCtaKey;
        return ((hashCode6 + (str6 != null ? str6.hashCode() : 0)) * 31) + this.footerTheme.hashCode();
    }

    @NotNull
    public String toString() {
        String str = this.titleText;
        String str2 = this.titleIcon;
        String str3 = this.subtitleText;
        String str4 = this.descriptionText;
        String str5 = this.primaryCtaText;
        String str6 = this.primaryCtaType;
        String str7 = this.primaryCtaKey;
        String str8 = this.secondaryCtaText;
        String str9 = this.secondaryCtaType;
        String str10 = this.secondaryCtaKey;
        FooterTheme footerTheme = this.footerTheme;
        return "SafetySystemNotificationEmbed(titleText=" + str + ", titleIcon=" + str2 + ", subtitleText=" + str3 + ", descriptionText=" + str4 + ", primaryCtaText=" + str5 + ", primaryCtaType=" + str6 + ", primaryCtaKey=" + str7 + ", secondaryCtaText=" + str8 + ", secondaryCtaType=" + str9 + ", secondaryCtaKey=" + str10 + ", footerTheme=" + footerTheme + ")";
    }

    public SafetySystemNotificationEmbed(@NotNull String titleText, @NotNull String titleIcon, @NotNull String subtitleText, @NotNull String descriptionText, String str, String str2, String str3, String str4, String str5, String str6, @NotNull FooterTheme footerTheme) {
        Intrinsics.checkNotNullParameter(titleText, "titleText");
        Intrinsics.checkNotNullParameter(titleIcon, "titleIcon");
        Intrinsics.checkNotNullParameter(subtitleText, "subtitleText");
        Intrinsics.checkNotNullParameter(descriptionText, "descriptionText");
        Intrinsics.checkNotNullParameter(footerTheme, "footerTheme");
        this.titleText = titleText;
        this.titleIcon = titleIcon;
        this.subtitleText = subtitleText;
        this.descriptionText = descriptionText;
        this.primaryCtaText = str;
        this.primaryCtaType = str2;
        this.primaryCtaKey = str3;
        this.secondaryCtaText = str4;
        this.secondaryCtaType = str5;
        this.secondaryCtaKey = str6;
        this.footerTheme = footerTheme;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ SafetySystemNotificationEmbed(java.lang.String r2, java.lang.String r3, java.lang.String r4, java.lang.String r5, java.lang.String r6, java.lang.String r7, java.lang.String r8, java.lang.String r9, java.lang.String r10, java.lang.String r11, com.discord.chat.bridge.safetysystemnotification.FooterTheme r12, int r13, kotlin.jvm.internal.DefaultConstructorMarker r14) {
        /*
            r1 = this;
            r14 = r13 & 16
            r0 = 0
            if (r14 == 0) goto L6
            r6 = r0
        L6:
            r14 = r13 & 32
            if (r14 == 0) goto Lb
            r7 = r0
        Lb:
            r14 = r13 & 64
            if (r14 == 0) goto L10
            r8 = r0
        L10:
            r14 = r13 & 128(0x80, float:1.794E-43)
            if (r14 == 0) goto L15
            r9 = r0
        L15:
            r14 = r13 & 256(0x100, float:3.59E-43)
            if (r14 == 0) goto L1a
            r10 = r0
        L1a:
            r13 = r13 & 512(0x200, float:7.175E-43)
            if (r13 == 0) goto L2b
            r13 = r12
            r12 = r0
        L20:
            r11 = r10
            r10 = r9
            r9 = r8
            r8 = r7
            r7 = r6
            r6 = r5
            r5 = r4
            r4 = r3
            r3 = r2
            r2 = r1
            goto L2e
        L2b:
            r13 = r12
            r12 = r11
            goto L20
        L2e:
            r2.<init>(r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.safetysystemnotification.SafetySystemNotificationEmbed.<init>(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, com.discord.chat.bridge.safetysystemnotification.FooterTheme, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
