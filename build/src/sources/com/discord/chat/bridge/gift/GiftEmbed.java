package com.discord.chat.bridge.gift;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
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
import org.webrtc.PeerConnection;
@m(with = GiftEmbedSerializer.class)
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bw\u0018\u0000 \u00102\u00020\u0001:\u0003\u000e\u000f\u0010R\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0012\u0010\u0006\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\b\u0010\tR\u0012\u0010\n\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\tR\u0012\u0010\f\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\t\u0082\u0001\u0002\u0011\u0012¨\u0006\u0013"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed;", "", "headerText", "", "getHeaderText", "()Ljava/lang/String;", "headerColor", "", "getHeaderColor", "()I", ViewProps.BACKGROUND_COLOR, "getBackgroundColor", "thumbnailCornerRadius", "getThumbnailCornerRadius", "Resolving", "Resolved", "Companion", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolving;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface GiftEmbed {
    @NotNull
    public static final Companion Companion = Companion.$$INSTANCE;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/gift/GiftEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        static final /* synthetic */ Companion $$INSTANCE = new Companion();

        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GiftEmbedSerializer.INSTANCE;
        }
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bv\u0018\u00002\u00020\u0001:\u0002\u0010\u0011R\u0014\u0010\u0002\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0014\u0010\u0006\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\u0005R\u0012\u0010\b\u001a\u00020\tX¦\u0004¢\u0006\u0006\u001a\u0004\b\n\u0010\u000bR\u0014\u0010\f\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\u0005R\u0012\u0010\u000e\u001a\u00020\tX¦\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u000b\u0082\u0001\u0002\u0012\u0013¨\u0006\u0014"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved;", "Lcom/discord/chat/bridge/gift/GiftEmbed;", "thumbnailUrl", "", "getThumbnailUrl", "()Ljava/lang/String;", "titleText", "getTitleText", "titleColor", "", "getTitleColor", "()I", "subtitle", "getSubtitle", "subtitleColor", "getSubtitleColor", "Valid", "Invalid", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Invalid;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Valid;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface Resolved extends GiftEmbed {

        @m
        @Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0019\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 :2\u00020\u0001:\u00029:BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\u0006\u0010\r\u001a\u00020\u0005¢\u0006\u0004\b\u000e\u0010\u000fBs\b\u0010\u0012\u0006\u0010\u0010\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\u0006\u0010\r\u001a\u00020\u0005\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b\u000e\u0010\u0013J\t\u0010 \u001a\u00020\u0003HÆ\u0003J\t\u0010!\u001a\u00020\u0005HÆ\u0003J\t\u0010\"\u001a\u00020\u0005HÆ\u0003J\t\u0010#\u001a\u00020\u0005HÆ\u0003J\t\u0010$\u001a\u00020\u0003HÆ\u0003J\t\u0010%\u001a\u00020\u0003HÆ\u0003J\t\u0010&\u001a\u00020\u0005HÆ\u0003J\t\u0010'\u001a\u00020\u0003HÆ\u0003J\t\u0010(\u001a\u00020\u0005HÆ\u0003J\t\u0010)\u001a\u00020\u0005HÆ\u0003Jm\u0010*\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\u00032\b\b\u0002\u0010\n\u001a\u00020\u00052\b\b\u0002\u0010\u000b\u001a\u00020\u00032\b\b\u0002\u0010\f\u001a\u00020\u00052\b\b\u0002\u0010\r\u001a\u00020\u0005HÆ\u0001J\u0013\u0010+\u001a\u00020,2\b\u0010-\u001a\u0004\u0018\u00010.HÖ\u0003J\t\u0010/\u001a\u00020\u0005HÖ\u0001J\t\u00100\u001a\u00020\u0003HÖ\u0001J%\u00101\u001a\u0002022\u0006\u00103\u001a\u00020\u00002\u0006\u00104\u001a\u0002052\u0006\u00106\u001a\u000207H\u0001¢\u0006\u0002\b8R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0014\u0010\u0006\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0014\u0010\u0007\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0017R\u0014\u0010\b\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0015R\u0014\u0010\t\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0015R\u0014\u0010\n\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0017R\u0014\u0010\u000b\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0015R\u0014\u0010\f\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0017R\u0011\u0010\r\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0017¨\u0006;"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Invalid;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved;", "headerText", "", "headerColor", "", ViewProps.BACKGROUND_COLOR, "thumbnailCornerRadius", "thumbnailUrl", "titleText", "titleColor", "subtitle", "subtitleColor", "thumbnailBackgroundColor", "<init>", "(Ljava/lang/String;IIILjava/lang/String;Ljava/lang/String;ILjava/lang/String;II)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;IIILjava/lang/String;Ljava/lang/String;ILjava/lang/String;IILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeaderText", "()Ljava/lang/String;", "getHeaderColor", "()I", "getBackgroundColor", "getThumbnailCornerRadius", "getThumbnailUrl", "getTitleText", "getTitleColor", "getSubtitle", "getSubtitleColor", "getThumbnailBackgroundColor", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Invalid implements Resolved {
            @NotNull
            public static final Companion Companion = new Companion(null);
            private final int backgroundColor;
            private final int headerColor;
            @NotNull
            private final String headerText;
            @NotNull
            private final String subtitle;
            private final int subtitleColor;
            private final int thumbnailBackgroundColor;
            private final int thumbnailCornerRadius;
            @NotNull
            private final String thumbnailUrl;
            private final int titleColor;
            @NotNull
            private final String titleText;

            @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Invalid$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Invalid;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Companion {
                private Companion() {
                }

                @NotNull
                public final KSerializer serializer() {
                    return GiftEmbed$Resolved$Invalid$$serializer.INSTANCE;
                }

                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }
            }

            public /* synthetic */ Invalid(int i10, String str, int i11, int i12, int i13, String str2, String str3, int i14, String str4, int i15, int i16, SerializationConstructorMarker serializationConstructorMarker) {
                if (1023 != (i10 & 1023)) {
                    v1.b(i10, 1023, GiftEmbed$Resolved$Invalid$$serializer.INSTANCE.getDescriptor());
                }
                this.headerText = str;
                this.headerColor = i11;
                this.backgroundColor = i12;
                this.thumbnailCornerRadius = i13;
                this.thumbnailUrl = str2;
                this.titleText = str3;
                this.titleColor = i14;
                this.subtitle = str4;
                this.subtitleColor = i15;
                this.thumbnailBackgroundColor = i16;
            }

            public static /* synthetic */ Invalid copy$default(Invalid invalid, String str, int i10, int i11, int i12, String str2, String str3, int i13, String str4, int i14, int i15, int i16, Object obj) {
                if ((i16 & 1) != 0) {
                    str = invalid.headerText;
                }
                if ((i16 & 2) != 0) {
                    i10 = invalid.headerColor;
                }
                if ((i16 & 4) != 0) {
                    i11 = invalid.backgroundColor;
                }
                if ((i16 & 8) != 0) {
                    i12 = invalid.thumbnailCornerRadius;
                }
                if ((i16 & 16) != 0) {
                    str2 = invalid.thumbnailUrl;
                }
                if ((i16 & 32) != 0) {
                    str3 = invalid.titleText;
                }
                if ((i16 & 64) != 0) {
                    i13 = invalid.titleColor;
                }
                if ((i16 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str4 = invalid.subtitle;
                }
                if ((i16 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                    i14 = invalid.subtitleColor;
                }
                if ((i16 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                    i15 = invalid.thumbnailBackgroundColor;
                }
                int i17 = i14;
                int i18 = i15;
                int i19 = i13;
                String str5 = str4;
                String str6 = str2;
                String str7 = str3;
                return invalid.copy(str, i10, i11, i12, str6, str7, i19, str5, i17, i18);
            }

            public static final /* synthetic */ void write$Self$chat_release(Invalid invalid, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
                compositeEncoder.z(serialDescriptor, 0, invalid.getHeaderText());
                compositeEncoder.x(serialDescriptor, 1, invalid.getHeaderColor());
                compositeEncoder.x(serialDescriptor, 2, invalid.getBackgroundColor());
                compositeEncoder.x(serialDescriptor, 3, invalid.getThumbnailCornerRadius());
                compositeEncoder.z(serialDescriptor, 4, invalid.getThumbnailUrl());
                compositeEncoder.z(serialDescriptor, 5, invalid.getTitleText());
                compositeEncoder.x(serialDescriptor, 6, invalid.getTitleColor());
                compositeEncoder.z(serialDescriptor, 7, invalid.getSubtitle());
                compositeEncoder.x(serialDescriptor, 8, invalid.getSubtitleColor());
                compositeEncoder.x(serialDescriptor, 9, invalid.thumbnailBackgroundColor);
            }

            @NotNull
            public final String component1() {
                return this.headerText;
            }

            public final int component10() {
                return this.thumbnailBackgroundColor;
            }

            public final int component2() {
                return this.headerColor;
            }

            public final int component3() {
                return this.backgroundColor;
            }

            public final int component4() {
                return this.thumbnailCornerRadius;
            }

            @NotNull
            public final String component5() {
                return this.thumbnailUrl;
            }

            @NotNull
            public final String component6() {
                return this.titleText;
            }

            public final int component7() {
                return this.titleColor;
            }

            @NotNull
            public final String component8() {
                return this.subtitle;
            }

            public final int component9() {
                return this.subtitleColor;
            }

            @NotNull
            public final Invalid copy(@NotNull String headerText, int i10, int i11, int i12, @NotNull String thumbnailUrl, @NotNull String titleText, int i13, @NotNull String subtitle, int i14, int i15) {
                Intrinsics.checkNotNullParameter(headerText, "headerText");
                Intrinsics.checkNotNullParameter(thumbnailUrl, "thumbnailUrl");
                Intrinsics.checkNotNullParameter(titleText, "titleText");
                Intrinsics.checkNotNullParameter(subtitle, "subtitle");
                return new Invalid(headerText, i10, i11, i12, thumbnailUrl, titleText, i13, subtitle, i14, i15);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof Invalid) {
                    Invalid invalid = (Invalid) obj;
                    return Intrinsics.areEqual(this.headerText, invalid.headerText) && this.headerColor == invalid.headerColor && this.backgroundColor == invalid.backgroundColor && this.thumbnailCornerRadius == invalid.thumbnailCornerRadius && Intrinsics.areEqual(this.thumbnailUrl, invalid.thumbnailUrl) && Intrinsics.areEqual(this.titleText, invalid.titleText) && this.titleColor == invalid.titleColor && Intrinsics.areEqual(this.subtitle, invalid.subtitle) && this.subtitleColor == invalid.subtitleColor && this.thumbnailBackgroundColor == invalid.thumbnailBackgroundColor;
                }
                return false;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            public int getBackgroundColor() {
                return this.backgroundColor;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            public int getHeaderColor() {
                return this.headerColor;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            @NotNull
            public String getHeaderText() {
                return this.headerText;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            @NotNull
            public String getSubtitle() {
                return this.subtitle;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            public int getSubtitleColor() {
                return this.subtitleColor;
            }

            public final int getThumbnailBackgroundColor() {
                return this.thumbnailBackgroundColor;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            public int getThumbnailCornerRadius() {
                return this.thumbnailCornerRadius;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            @NotNull
            public String getThumbnailUrl() {
                return this.thumbnailUrl;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            public int getTitleColor() {
                return this.titleColor;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            @NotNull
            public String getTitleText() {
                return this.titleText;
            }

            public int hashCode() {
                return (((((((((((((((((this.headerText.hashCode() * 31) + Integer.hashCode(this.headerColor)) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.thumbnailCornerRadius)) * 31) + this.thumbnailUrl.hashCode()) * 31) + this.titleText.hashCode()) * 31) + Integer.hashCode(this.titleColor)) * 31) + this.subtitle.hashCode()) * 31) + Integer.hashCode(this.subtitleColor)) * 31) + Integer.hashCode(this.thumbnailBackgroundColor);
            }

            @NotNull
            public String toString() {
                String str = this.headerText;
                int i10 = this.headerColor;
                int i11 = this.backgroundColor;
                int i12 = this.thumbnailCornerRadius;
                String str2 = this.thumbnailUrl;
                String str3 = this.titleText;
                int i13 = this.titleColor;
                String str4 = this.subtitle;
                int i14 = this.subtitleColor;
                int i15 = this.thumbnailBackgroundColor;
                return "Invalid(headerText=" + str + ", headerColor=" + i10 + ", backgroundColor=" + i11 + ", thumbnailCornerRadius=" + i12 + ", thumbnailUrl=" + str2 + ", titleText=" + str3 + ", titleColor=" + i13 + ", subtitle=" + str4 + ", subtitleColor=" + i14 + ", thumbnailBackgroundColor=" + i15 + ")";
            }

            public Invalid(@NotNull String headerText, int i10, int i11, int i12, @NotNull String thumbnailUrl, @NotNull String titleText, int i13, @NotNull String subtitle, int i14, int i15) {
                Intrinsics.checkNotNullParameter(headerText, "headerText");
                Intrinsics.checkNotNullParameter(thumbnailUrl, "thumbnailUrl");
                Intrinsics.checkNotNullParameter(titleText, "titleText");
                Intrinsics.checkNotNullParameter(subtitle, "subtitle");
                this.headerText = headerText;
                this.headerColor = i10;
                this.backgroundColor = i11;
                this.thumbnailCornerRadius = i12;
                this.thumbnailUrl = thumbnailUrl;
                this.titleText = titleText;
                this.titleColor = i13;
                this.subtitle = subtitle;
                this.subtitleColor = i14;
                this.thumbnailBackgroundColor = i15;
            }
        }

        @m
        @Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u000e\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b,\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 U2\u00020\u0001:\u0002TUB¯\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u000e\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0010\u001a\u00020\u0005\u0012\u0006\u0010\u0011\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0013\u001a\u00020\u0014\u0012\u0006\u0010\u0015\u001a\u00020\u0016\u0012\u0006\u0010\u0017\u001a\u00020\u0003¢\u0006\u0004\b\u0018\u0010\u0019B»\u0001\b\u0010\u0012\u0006\u0010\u001a\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u000e\u001a\u00020\u0005\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0010\u001a\u00020\u0005\u0012\u0006\u0010\u0011\u001a\u00020\u0005\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0013\u001a\u00020\u0014\u0012\u0006\u0010\u0015\u001a\u00020\u0016\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u001c¢\u0006\u0004\b\u0018\u0010\u001dJ\t\u00104\u001a\u00020\u0003HÆ\u0003J\t\u00105\u001a\u00020\u0005HÆ\u0003J\t\u00106\u001a\u00020\u0005HÆ\u0003J\t\u00107\u001a\u00020\u0005HÆ\u0003J\u000b\u00108\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u00109\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010:\u001a\u00020\u0005HÆ\u0003J\u000b\u0010;\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010<\u001a\u00020\u0005HÆ\u0003J\u000b\u0010=\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010>\u001a\u00020\u0005HÆ\u0003J\u000b\u0010?\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010@\u001a\u00020\u0005HÆ\u0003J\t\u0010A\u001a\u00020\u0005HÆ\u0003J\u000b\u0010B\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010C\u001a\u00020\u0014HÆ\u0003J\t\u0010D\u001a\u00020\u0016HÆ\u0003J\t\u0010E\u001a\u00020\u0003HÆ\u0003JÉ\u0001\u0010F\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\n\u001a\u00020\u00052\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\f\u001a\u00020\u00052\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u000e\u001a\u00020\u00052\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0010\u001a\u00020\u00052\b\b\u0002\u0010\u0011\u001a\u00020\u00052\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0013\u001a\u00020\u00142\b\b\u0002\u0010\u0015\u001a\u00020\u00162\b\b\u0002\u0010\u0017\u001a\u00020\u0003HÆ\u0001J\u0013\u0010G\u001a\u00020\u00162\b\u0010H\u001a\u0004\u0018\u00010IHÖ\u0003J\t\u0010J\u001a\u00020\u0005HÖ\u0001J\t\u0010K\u001a\u00020\u0003HÖ\u0001J%\u0010L\u001a\u00020M2\u0006\u0010N\u001a\u00020\u00002\u0006\u0010O\u001a\u00020P2\u0006\u0010Q\u001a\u00020RH\u0001¢\u0006\u0002\bSR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0014\u0010\u0006\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010!R\u0014\u0010\u0007\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b#\u0010!R\u0016\u0010\b\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u001fR\u0016\u0010\t\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u001fR\u0014\u0010\n\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b&\u0010!R\u0016\u0010\u000b\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u001fR\u0014\u0010\f\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b(\u0010!R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b)\u0010\u001fR\u0011\u0010\u000e\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b*\u0010!R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b+\u0010\u001fR\u0011\u0010\u0010\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b,\u0010!R\u0011\u0010\u0011\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b-\u0010!R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b.\u0010\u001fR\u0011\u0010\u0013\u001a\u00020\u0014¢\u0006\b\n\u0000\u001a\u0004\b/\u00100R\u0011\u0010\u0015\u001a\u00020\u0016¢\u0006\b\n\u0000\u001a\u0004\b1\u00102R\u0011\u0010\u0017\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b3\u0010\u001f¨\u0006V"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Valid;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved;", "headerText", "", "headerColor", "", ViewProps.BACKGROUND_COLOR, "thumbnailCornerRadius", "thumbnailUrl", "titleText", "titleColor", "subtitle", "subtitleColor", "bodyText", "bodyTextColor", "acceptLabelText", "acceptLabelColor", "acceptLabelBackgroundColor", "splashUrl", "splashOpacity", "", "canBeAccepted", "", "giftCode", "<init>", "(Ljava/lang/String;IIILjava/lang/String;Ljava/lang/String;ILjava/lang/String;ILjava/lang/String;ILjava/lang/String;IILjava/lang/String;FZLjava/lang/String;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;IIILjava/lang/String;Ljava/lang/String;ILjava/lang/String;ILjava/lang/String;ILjava/lang/String;IILjava/lang/String;FZLjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeaderText", "()Ljava/lang/String;", "getHeaderColor", "()I", "getBackgroundColor", "getThumbnailCornerRadius", "getThumbnailUrl", "getTitleText", "getTitleColor", "getSubtitle", "getSubtitleColor", "getBodyText", "getBodyTextColor", "getAcceptLabelText", "getAcceptLabelColor", "getAcceptLabelBackgroundColor", "getSplashUrl", "getSplashOpacity", "()F", "getCanBeAccepted", "()Z", "getGiftCode", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Valid implements Resolved {
            @NotNull
            public static final Companion Companion = new Companion(null);
            private final int acceptLabelBackgroundColor;
            private final int acceptLabelColor;
            private final String acceptLabelText;
            private final int backgroundColor;
            private final String bodyText;
            private final int bodyTextColor;
            private final boolean canBeAccepted;
            @NotNull
            private final String giftCode;
            private final int headerColor;
            @NotNull
            private final String headerText;
            private final float splashOpacity;
            private final String splashUrl;
            private final String subtitle;
            private final int subtitleColor;
            private final int thumbnailCornerRadius;
            private final String thumbnailUrl;
            private final int titleColor;
            private final String titleText;

            @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Valid$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolved$Valid;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Companion {
                private Companion() {
                }

                @NotNull
                public final KSerializer serializer() {
                    return GiftEmbed$Resolved$Valid$$serializer.INSTANCE;
                }

                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }
            }

            public /* synthetic */ Valid(int i10, String str, int i11, int i12, int i13, String str2, String str3, int i14, String str4, int i15, String str5, int i16, String str6, int i17, int i18, String str7, float f10, boolean z10, String str8, SerializationConstructorMarker serializationConstructorMarker) {
                if (243023 != (i10 & 243023)) {
                    v1.b(i10, 243023, GiftEmbed$Resolved$Valid$$serializer.INSTANCE.getDescriptor());
                }
                this.headerText = str;
                this.headerColor = i11;
                this.backgroundColor = i12;
                this.thumbnailCornerRadius = i13;
                if ((i10 & 16) == 0) {
                    this.thumbnailUrl = null;
                } else {
                    this.thumbnailUrl = str2;
                }
                if ((i10 & 32) == 0) {
                    this.titleText = null;
                } else {
                    this.titleText = str3;
                }
                this.titleColor = i14;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                    this.subtitle = null;
                } else {
                    this.subtitle = str4;
                }
                this.subtitleColor = i15;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
                    this.bodyText = null;
                } else {
                    this.bodyText = str5;
                }
                this.bodyTextColor = i16;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
                    this.acceptLabelText = null;
                } else {
                    this.acceptLabelText = str6;
                }
                this.acceptLabelColor = i17;
                this.acceptLabelBackgroundColor = i18;
                if ((i10 & 16384) == 0) {
                    this.splashUrl = null;
                } else {
                    this.splashUrl = str7;
                }
                this.splashOpacity = f10;
                this.canBeAccepted = z10;
                this.giftCode = str8;
            }

            public static /* synthetic */ Valid copy$default(Valid valid, String str, int i10, int i11, int i12, String str2, String str3, int i13, String str4, int i14, String str5, int i15, String str6, int i16, int i17, String str7, float f10, boolean z10, String str8, int i18, Object obj) {
                String str9;
                boolean z11;
                String str10 = (i18 & 1) != 0 ? valid.headerText : str;
                int i19 = (i18 & 2) != 0 ? valid.headerColor : i10;
                int i20 = (i18 & 4) != 0 ? valid.backgroundColor : i11;
                int i21 = (i18 & 8) != 0 ? valid.thumbnailCornerRadius : i12;
                String str11 = (i18 & 16) != 0 ? valid.thumbnailUrl : str2;
                String str12 = (i18 & 32) != 0 ? valid.titleText : str3;
                int i22 = (i18 & 64) != 0 ? valid.titleColor : i13;
                String str13 = (i18 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? valid.subtitle : str4;
                int i23 = (i18 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? valid.subtitleColor : i14;
                String str14 = (i18 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? valid.bodyText : str5;
                int i24 = (i18 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? valid.bodyTextColor : i15;
                String str15 = (i18 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? valid.acceptLabelText : str6;
                int i25 = (i18 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? valid.acceptLabelColor : i16;
                int i26 = (i18 & 8192) != 0 ? valid.acceptLabelBackgroundColor : i17;
                String str16 = str10;
                String str17 = (i18 & 16384) != 0 ? valid.splashUrl : str7;
                float f11 = (i18 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? valid.splashOpacity : f10;
                boolean z12 = (i18 & 65536) != 0 ? valid.canBeAccepted : z10;
                if ((i18 & 131072) != 0) {
                    z11 = z12;
                    str9 = valid.giftCode;
                } else {
                    str9 = str8;
                    z11 = z12;
                }
                return valid.copy(str16, i19, i20, i21, str11, str12, i22, str13, i23, str14, i24, str15, i25, i26, str17, f11, z11, str9);
            }

            public static final /* synthetic */ void write$Self$chat_release(Valid valid, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
                compositeEncoder.z(serialDescriptor, 0, valid.getHeaderText());
                compositeEncoder.x(serialDescriptor, 1, valid.getHeaderColor());
                compositeEncoder.x(serialDescriptor, 2, valid.getBackgroundColor());
                compositeEncoder.x(serialDescriptor, 3, valid.getThumbnailCornerRadius());
                if (compositeEncoder.A(serialDescriptor, 4) || valid.getThumbnailUrl() != null) {
                    compositeEncoder.l(serialDescriptor, 4, n2.f31089a, valid.getThumbnailUrl());
                }
                if (compositeEncoder.A(serialDescriptor, 5) || valid.getTitleText() != null) {
                    compositeEncoder.l(serialDescriptor, 5, n2.f31089a, valid.getTitleText());
                }
                compositeEncoder.x(serialDescriptor, 6, valid.getTitleColor());
                if (compositeEncoder.A(serialDescriptor, 7) || valid.getSubtitle() != null) {
                    compositeEncoder.l(serialDescriptor, 7, n2.f31089a, valid.getSubtitle());
                }
                compositeEncoder.x(serialDescriptor, 8, valid.getSubtitleColor());
                if (compositeEncoder.A(serialDescriptor, 9) || valid.bodyText != null) {
                    compositeEncoder.l(serialDescriptor, 9, n2.f31089a, valid.bodyText);
                }
                compositeEncoder.x(serialDescriptor, 10, valid.bodyTextColor);
                if (compositeEncoder.A(serialDescriptor, 11) || valid.acceptLabelText != null) {
                    compositeEncoder.l(serialDescriptor, 11, n2.f31089a, valid.acceptLabelText);
                }
                compositeEncoder.x(serialDescriptor, 12, valid.acceptLabelColor);
                compositeEncoder.x(serialDescriptor, 13, valid.acceptLabelBackgroundColor);
                if (compositeEncoder.A(serialDescriptor, 14) || valid.splashUrl != null) {
                    compositeEncoder.l(serialDescriptor, 14, n2.f31089a, valid.splashUrl);
                }
                compositeEncoder.r(serialDescriptor, 15, valid.splashOpacity);
                compositeEncoder.y(serialDescriptor, 16, valid.canBeAccepted);
                compositeEncoder.z(serialDescriptor, 17, valid.giftCode);
            }

            @NotNull
            public final String component1() {
                return this.headerText;
            }

            public final String component10() {
                return this.bodyText;
            }

            public final int component11() {
                return this.bodyTextColor;
            }

            public final String component12() {
                return this.acceptLabelText;
            }

            public final int component13() {
                return this.acceptLabelColor;
            }

            public final int component14() {
                return this.acceptLabelBackgroundColor;
            }

            public final String component15() {
                return this.splashUrl;
            }

            public final float component16() {
                return this.splashOpacity;
            }

            public final boolean component17() {
                return this.canBeAccepted;
            }

            @NotNull
            public final String component18() {
                return this.giftCode;
            }

            public final int component2() {
                return this.headerColor;
            }

            public final int component3() {
                return this.backgroundColor;
            }

            public final int component4() {
                return this.thumbnailCornerRadius;
            }

            public final String component5() {
                return this.thumbnailUrl;
            }

            public final String component6() {
                return this.titleText;
            }

            public final int component7() {
                return this.titleColor;
            }

            public final String component8() {
                return this.subtitle;
            }

            public final int component9() {
                return this.subtitleColor;
            }

            @NotNull
            public final Valid copy(@NotNull String headerText, int i10, int i11, int i12, String str, String str2, int i13, String str3, int i14, String str4, int i15, String str5, int i16, int i17, String str6, float f10, boolean z10, @NotNull String giftCode) {
                Intrinsics.checkNotNullParameter(headerText, "headerText");
                Intrinsics.checkNotNullParameter(giftCode, "giftCode");
                return new Valid(headerText, i10, i11, i12, str, str2, i13, str3, i14, str4, i15, str5, i16, i17, str6, f10, z10, giftCode);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof Valid) {
                    Valid valid = (Valid) obj;
                    return Intrinsics.areEqual(this.headerText, valid.headerText) && this.headerColor == valid.headerColor && this.backgroundColor == valid.backgroundColor && this.thumbnailCornerRadius == valid.thumbnailCornerRadius && Intrinsics.areEqual(this.thumbnailUrl, valid.thumbnailUrl) && Intrinsics.areEqual(this.titleText, valid.titleText) && this.titleColor == valid.titleColor && Intrinsics.areEqual(this.subtitle, valid.subtitle) && this.subtitleColor == valid.subtitleColor && Intrinsics.areEqual(this.bodyText, valid.bodyText) && this.bodyTextColor == valid.bodyTextColor && Intrinsics.areEqual(this.acceptLabelText, valid.acceptLabelText) && this.acceptLabelColor == valid.acceptLabelColor && this.acceptLabelBackgroundColor == valid.acceptLabelBackgroundColor && Intrinsics.areEqual(this.splashUrl, valid.splashUrl) && Float.compare(this.splashOpacity, valid.splashOpacity) == 0 && this.canBeAccepted == valid.canBeAccepted && Intrinsics.areEqual(this.giftCode, valid.giftCode);
                }
                return false;
            }

            public final int getAcceptLabelBackgroundColor() {
                return this.acceptLabelBackgroundColor;
            }

            public final int getAcceptLabelColor() {
                return this.acceptLabelColor;
            }

            public final String getAcceptLabelText() {
                return this.acceptLabelText;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            public int getBackgroundColor() {
                return this.backgroundColor;
            }

            public final String getBodyText() {
                return this.bodyText;
            }

            public final int getBodyTextColor() {
                return this.bodyTextColor;
            }

            public final boolean getCanBeAccepted() {
                return this.canBeAccepted;
            }

            @NotNull
            public final String getGiftCode() {
                return this.giftCode;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            public int getHeaderColor() {
                return this.headerColor;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            @NotNull
            public String getHeaderText() {
                return this.headerText;
            }

            public final float getSplashOpacity() {
                return this.splashOpacity;
            }

            public final String getSplashUrl() {
                return this.splashUrl;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            public String getSubtitle() {
                return this.subtitle;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            public int getSubtitleColor() {
                return this.subtitleColor;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed
            public int getThumbnailCornerRadius() {
                return this.thumbnailCornerRadius;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            public String getThumbnailUrl() {
                return this.thumbnailUrl;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            public int getTitleColor() {
                return this.titleColor;
            }

            @Override // com.discord.chat.bridge.gift.GiftEmbed.Resolved
            public String getTitleText() {
                return this.titleText;
            }

            public int hashCode() {
                int hashCode = ((((((this.headerText.hashCode() * 31) + Integer.hashCode(this.headerColor)) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.thumbnailCornerRadius)) * 31;
                String str = this.thumbnailUrl;
                int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
                String str2 = this.titleText;
                int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + Integer.hashCode(this.titleColor)) * 31;
                String str3 = this.subtitle;
                int hashCode4 = (((hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31) + Integer.hashCode(this.subtitleColor)) * 31;
                String str4 = this.bodyText;
                int hashCode5 = (((hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31) + Integer.hashCode(this.bodyTextColor)) * 31;
                String str5 = this.acceptLabelText;
                int hashCode6 = (((((hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31) + Integer.hashCode(this.acceptLabelColor)) * 31) + Integer.hashCode(this.acceptLabelBackgroundColor)) * 31;
                String str6 = this.splashUrl;
                return ((((((hashCode6 + (str6 != null ? str6.hashCode() : 0)) * 31) + Float.hashCode(this.splashOpacity)) * 31) + Boolean.hashCode(this.canBeAccepted)) * 31) + this.giftCode.hashCode();
            }

            @NotNull
            public String toString() {
                String str = this.headerText;
                int i10 = this.headerColor;
                int i11 = this.backgroundColor;
                int i12 = this.thumbnailCornerRadius;
                String str2 = this.thumbnailUrl;
                String str3 = this.titleText;
                int i13 = this.titleColor;
                String str4 = this.subtitle;
                int i14 = this.subtitleColor;
                String str5 = this.bodyText;
                int i15 = this.bodyTextColor;
                String str6 = this.acceptLabelText;
                int i16 = this.acceptLabelColor;
                int i17 = this.acceptLabelBackgroundColor;
                String str7 = this.splashUrl;
                float f10 = this.splashOpacity;
                boolean z10 = this.canBeAccepted;
                String str8 = this.giftCode;
                return "Valid(headerText=" + str + ", headerColor=" + i10 + ", backgroundColor=" + i11 + ", thumbnailCornerRadius=" + i12 + ", thumbnailUrl=" + str2 + ", titleText=" + str3 + ", titleColor=" + i13 + ", subtitle=" + str4 + ", subtitleColor=" + i14 + ", bodyText=" + str5 + ", bodyTextColor=" + i15 + ", acceptLabelText=" + str6 + ", acceptLabelColor=" + i16 + ", acceptLabelBackgroundColor=" + i17 + ", splashUrl=" + str7 + ", splashOpacity=" + f10 + ", canBeAccepted=" + z10 + ", giftCode=" + str8 + ")";
            }

            public Valid(@NotNull String headerText, int i10, int i11, int i12, String str, String str2, int i13, String str3, int i14, String str4, int i15, String str5, int i16, int i17, String str6, float f10, boolean z10, @NotNull String giftCode) {
                Intrinsics.checkNotNullParameter(headerText, "headerText");
                Intrinsics.checkNotNullParameter(giftCode, "giftCode");
                this.headerText = headerText;
                this.headerColor = i10;
                this.backgroundColor = i11;
                this.thumbnailCornerRadius = i12;
                this.thumbnailUrl = str;
                this.titleText = str2;
                this.titleColor = i13;
                this.subtitle = str3;
                this.subtitleColor = i14;
                this.bodyText = str4;
                this.bodyTextColor = i15;
                this.acceptLabelText = str5;
                this.acceptLabelColor = i16;
                this.acceptLabelBackgroundColor = i17;
                this.splashUrl = str6;
                this.splashOpacity = f10;
                this.canBeAccepted = z10;
                this.giftCode = giftCode;
            }

            public /* synthetic */ Valid(String str, int i10, int i11, int i12, String str2, String str3, int i13, String str4, int i14, String str5, int i15, String str6, int i16, int i17, String str7, float f10, boolean z10, String str8, int i18, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, i10, i11, i12, (i18 & 16) != 0 ? null : str2, (i18 & 32) != 0 ? null : str3, i13, (i18 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str4, i14, (i18 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str5, i15, (i18 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : str6, i16, i17, (i18 & 16384) != 0 ? null : str7, f10, z10, str8);
            }
        }

        String getSubtitle();

        int getSubtitleColor();

        String getThumbnailUrl();

        int getTitleColor();

        String getTitleText();
    }

    @m
    @Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 .2\u00020\u0001:\u0002-.B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\u0006\u0010\t\u001a\u00020\u0005¢\u0006\u0004\b\n\u0010\u000bBM\b\u0010\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0005HÆ\u0003JE\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\u00052\b\b\u0002\u0010\t\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u001f\u001a\u00020 2\b\u0010!\u001a\u0004\u0018\u00010\"HÖ\u0003J\t\u0010#\u001a\u00020\u0005HÖ\u0001J\t\u0010$\u001a\u00020\u0003HÖ\u0001J%\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020\u00002\u0006\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020+H\u0001¢\u0006\u0002\b,R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0006\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0014\u0010\u0007\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013R\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0013R\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0013¨\u0006/"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Resolving;", "Lcom/discord/chat/bridge/gift/GiftEmbed;", "headerText", "", "headerColor", "", ViewProps.BACKGROUND_COLOR, "thumbnailCornerRadius", "resolvingGradientStart", "resolvingGradientEnd", "<init>", "(Ljava/lang/String;IIIII)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;IIIIILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeaderText", "()Ljava/lang/String;", "getHeaderColor", "()I", "getBackgroundColor", "getThumbnailCornerRadius", "getResolvingGradientStart", "getResolvingGradientEnd", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Resolving implements GiftEmbed {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final int backgroundColor;
        private final int headerColor;
        @NotNull
        private final String headerText;
        private final int resolvingGradientEnd;
        private final int resolvingGradientStart;
        private final int thumbnailCornerRadius;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/gift/GiftEmbed$Resolving$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/gift/GiftEmbed$Resolving;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return GiftEmbed$Resolving$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ Resolving(int i10, String str, int i11, int i12, int i13, int i14, int i15, SerializationConstructorMarker serializationConstructorMarker) {
            if (63 != (i10 & 63)) {
                v1.b(i10, 63, GiftEmbed$Resolving$$serializer.INSTANCE.getDescriptor());
            }
            this.headerText = str;
            this.headerColor = i11;
            this.backgroundColor = i12;
            this.thumbnailCornerRadius = i13;
            this.resolvingGradientStart = i14;
            this.resolvingGradientEnd = i15;
        }

        public static /* synthetic */ Resolving copy$default(Resolving resolving, String str, int i10, int i11, int i12, int i13, int i14, int i15, Object obj) {
            if ((i15 & 1) != 0) {
                str = resolving.headerText;
            }
            if ((i15 & 2) != 0) {
                i10 = resolving.headerColor;
            }
            if ((i15 & 4) != 0) {
                i11 = resolving.backgroundColor;
            }
            if ((i15 & 8) != 0) {
                i12 = resolving.thumbnailCornerRadius;
            }
            if ((i15 & 16) != 0) {
                i13 = resolving.resolvingGradientStart;
            }
            if ((i15 & 32) != 0) {
                i14 = resolving.resolvingGradientEnd;
            }
            int i16 = i13;
            int i17 = i14;
            return resolving.copy(str, i10, i11, i12, i16, i17);
        }

        public static final /* synthetic */ void write$Self$chat_release(Resolving resolving, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            compositeEncoder.z(serialDescriptor, 0, resolving.getHeaderText());
            compositeEncoder.x(serialDescriptor, 1, resolving.getHeaderColor());
            compositeEncoder.x(serialDescriptor, 2, resolving.getBackgroundColor());
            compositeEncoder.x(serialDescriptor, 3, resolving.getThumbnailCornerRadius());
            compositeEncoder.x(serialDescriptor, 4, resolving.resolvingGradientStart);
            compositeEncoder.x(serialDescriptor, 5, resolving.resolvingGradientEnd);
        }

        @NotNull
        public final String component1() {
            return this.headerText;
        }

        public final int component2() {
            return this.headerColor;
        }

        public final int component3() {
            return this.backgroundColor;
        }

        public final int component4() {
            return this.thumbnailCornerRadius;
        }

        public final int component5() {
            return this.resolvingGradientStart;
        }

        public final int component6() {
            return this.resolvingGradientEnd;
        }

        @NotNull
        public final Resolving copy(@NotNull String headerText, int i10, int i11, int i12, int i13, int i14) {
            Intrinsics.checkNotNullParameter(headerText, "headerText");
            return new Resolving(headerText, i10, i11, i12, i13, i14);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Resolving) {
                Resolving resolving = (Resolving) obj;
                return Intrinsics.areEqual(this.headerText, resolving.headerText) && this.headerColor == resolving.headerColor && this.backgroundColor == resolving.backgroundColor && this.thumbnailCornerRadius == resolving.thumbnailCornerRadius && this.resolvingGradientStart == resolving.resolvingGradientStart && this.resolvingGradientEnd == resolving.resolvingGradientEnd;
            }
            return false;
        }

        @Override // com.discord.chat.bridge.gift.GiftEmbed
        public int getBackgroundColor() {
            return this.backgroundColor;
        }

        @Override // com.discord.chat.bridge.gift.GiftEmbed
        public int getHeaderColor() {
            return this.headerColor;
        }

        @Override // com.discord.chat.bridge.gift.GiftEmbed
        @NotNull
        public String getHeaderText() {
            return this.headerText;
        }

        public final int getResolvingGradientEnd() {
            return this.resolvingGradientEnd;
        }

        public final int getResolvingGradientStart() {
            return this.resolvingGradientStart;
        }

        @Override // com.discord.chat.bridge.gift.GiftEmbed
        public int getThumbnailCornerRadius() {
            return this.thumbnailCornerRadius;
        }

        public int hashCode() {
            return (((((((((this.headerText.hashCode() * 31) + Integer.hashCode(this.headerColor)) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.thumbnailCornerRadius)) * 31) + Integer.hashCode(this.resolvingGradientStart)) * 31) + Integer.hashCode(this.resolvingGradientEnd);
        }

        @NotNull
        public String toString() {
            String str = this.headerText;
            int i10 = this.headerColor;
            int i11 = this.backgroundColor;
            int i12 = this.thumbnailCornerRadius;
            int i13 = this.resolvingGradientStart;
            int i14 = this.resolvingGradientEnd;
            return "Resolving(headerText=" + str + ", headerColor=" + i10 + ", backgroundColor=" + i11 + ", thumbnailCornerRadius=" + i12 + ", resolvingGradientStart=" + i13 + ", resolvingGradientEnd=" + i14 + ")";
        }

        public Resolving(@NotNull String headerText, int i10, int i11, int i12, int i13, int i14) {
            Intrinsics.checkNotNullParameter(headerText, "headerText");
            this.headerText = headerText;
            this.headerColor = i10;
            this.backgroundColor = i11;
            this.thumbnailCornerRadius = i12;
            this.resolvingGradientStart = i13;
            this.resolvingGradientEnd = i14;
        }
    }

    int getBackgroundColor();

    int getHeaderColor();

    @NotNull
    String getHeaderText();

    int getThumbnailCornerRadius();
}
