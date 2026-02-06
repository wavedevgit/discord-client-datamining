package com.discord.chat.bridge.embed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import ft.m;
import jt.n2;
import jt.p0;
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
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b!\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 B2\u00020\u0001:\u0002ABBq\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\u000e\u001a\u00020\n¢\u0006\u0004\b\u000f\u0010\u0010B\u0083\u0001\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\u000e\u001a\u00020\n\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u000f\u0010\u0015J\t\u0010(\u001a\u00020\u0003HÆ\u0003J\u000b\u0010)\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010*\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010+\u001a\u00020\u0007HÆ\u0003J\t\u0010,\u001a\u00020\u0007HÆ\u0003J\u0010\u0010-\u001a\u0004\u0018\u00010\nHÆ\u0003¢\u0006\u0002\u0010\u001eJ\u0010\u0010.\u001a\u0004\u0018\u00010\nHÆ\u0003¢\u0006\u0002\u0010\u001eJ\u000b\u0010/\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u00100\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010#J\t\u00101\u001a\u00020\nHÆ\u0003J~\u00102\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\u000e\u001a\u00020\nHÆ\u0001¢\u0006\u0002\u00103J\u0013\u00104\u001a\u00020\n2\b\u00105\u001a\u0004\u0018\u000106HÖ\u0003J\t\u00107\u001a\u00020\u0007HÖ\u0001J\t\u00108\u001a\u00020\u0003HÖ\u0001J%\u00109\u001a\u00020:2\u0006\u0010;\u001a\u00020\u00002\u0006\u0010<\u001a\u00020=2\u0006\u0010>\u001a\u00020?H\u0001¢\u0006\u0002\b@R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0017R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001bR\u0015\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\n\n\u0002\u0010\u001f\u001a\u0004\b\u001d\u0010\u001eR\u0015\u0010\u000b\u001a\u0004\u0018\u00010\n¢\u0006\n\n\u0002\u0010\u001f\u001a\u0004\b \u0010\u001eR\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u0017R\u0015\u0010\r\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010$\u001a\u0004\b\"\u0010#R\u0011\u0010\u000e\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0014\u0010\u0012\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u0017¨\u0006C"}, d2 = {"Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "Lcom/discord/chat/bridge/embed/EmbedUrlProvider;", "url", "", "proxyURL", "videoUrl", "height", "", "width", "gifv", "", "showPlayButton", ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", "srcIsAnimated", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;IILjava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Integer;Z)V", "seen0", "embedUrl", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;IILjava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Integer;ZLjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getUrl", "()Ljava/lang/String;", "getProxyURL", "getVideoUrl", "getHeight", "()I", "getWidth", "getGifv", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getShowPlayButton", "getPlaceholder", "getPlaceholderVersion", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getSrcIsAnimated", "()Z", "getEmbedUrl", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;IILjava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Integer;Z)Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbedThumbnail implements EmbedUrlProvider {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String embedUrl;
    private final Boolean gifv;
    private final int height;
    private final String placeholder;
    private final Integer placeholderVersion;
    private final String proxyURL;
    private final Boolean showPlayButton;
    private final boolean srcIsAnimated;
    @NotNull
    private final String url;
    private final String videoUrl;
    private final int width;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/embed/EmbedThumbnail$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return EmbedThumbnail$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ EmbedThumbnail(int i10, String str, String str2, String str3, int i11, int i12, Boolean bool, Boolean bool2, String str4, Integer num, boolean z10, String str5, SerializationConstructorMarker serializationConstructorMarker) {
        if (25 != (i10 & 25)) {
            v1.b(i10, 25, EmbedThumbnail$$serializer.INSTANCE.getDescriptor());
        }
        this.url = str;
        if ((i10 & 2) == 0) {
            this.proxyURL = null;
        } else {
            this.proxyURL = str2;
        }
        if ((i10 & 4) == 0) {
            this.videoUrl = null;
        } else {
            this.videoUrl = str3;
        }
        this.height = i11;
        this.width = i12;
        if ((i10 & 32) == 0) {
            this.gifv = null;
        } else {
            this.gifv = bool;
        }
        if ((i10 & 64) == 0) {
            this.showPlayButton = null;
        } else {
            this.showPlayButton = bool2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.placeholder = null;
        } else {
            this.placeholder = str4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.placeholderVersion = null;
        } else {
            this.placeholderVersion = num;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.srcIsAnimated = false;
        } else {
            this.srcIsAnimated = z10;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            this.embedUrl = str5;
            return;
        }
        String str6 = this.proxyURL;
        this.embedUrl = str6 != null ? str6 : str;
    }

    public static /* synthetic */ EmbedThumbnail copy$default(EmbedThumbnail embedThumbnail, String str, String str2, String str3, int i10, int i11, Boolean bool, Boolean bool2, String str4, Integer num, boolean z10, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            str = embedThumbnail.url;
        }
        if ((i12 & 2) != 0) {
            str2 = embedThumbnail.proxyURL;
        }
        if ((i12 & 4) != 0) {
            str3 = embedThumbnail.videoUrl;
        }
        if ((i12 & 8) != 0) {
            i10 = embedThumbnail.height;
        }
        if ((i12 & 16) != 0) {
            i11 = embedThumbnail.width;
        }
        if ((i12 & 32) != 0) {
            bool = embedThumbnail.gifv;
        }
        if ((i12 & 64) != 0) {
            bool2 = embedThumbnail.showPlayButton;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            str4 = embedThumbnail.placeholder;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            num = embedThumbnail.placeholderVersion;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z10 = embedThumbnail.srcIsAnimated;
        }
        Integer num2 = num;
        boolean z11 = z10;
        Boolean bool3 = bool2;
        String str5 = str4;
        int i13 = i11;
        Boolean bool4 = bool;
        return embedThumbnail.copy(str, str2, str3, i10, i13, bool4, bool3, str5, num2, z11);
    }

    public static final /* synthetic */ void write$Self$chat_release(EmbedThumbnail embedThumbnail, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.z(serialDescriptor, 0, embedThumbnail.url);
        if (compositeEncoder.A(serialDescriptor, 1) || embedThumbnail.proxyURL != null) {
            compositeEncoder.l(serialDescriptor, 1, n2.f31041a, embedThumbnail.proxyURL);
        }
        if (compositeEncoder.A(serialDescriptor, 2) || embedThumbnail.videoUrl != null) {
            compositeEncoder.l(serialDescriptor, 2, n2.f31041a, embedThumbnail.videoUrl);
        }
        compositeEncoder.x(serialDescriptor, 3, embedThumbnail.height);
        compositeEncoder.x(serialDescriptor, 4, embedThumbnail.width);
        if (compositeEncoder.A(serialDescriptor, 5) || embedThumbnail.gifv != null) {
            compositeEncoder.l(serialDescriptor, 5, jt.h.f31005a, embedThumbnail.gifv);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || embedThumbnail.showPlayButton != null) {
            compositeEncoder.l(serialDescriptor, 6, jt.h.f31005a, embedThumbnail.showPlayButton);
        }
        if (compositeEncoder.A(serialDescriptor, 7) || embedThumbnail.placeholder != null) {
            compositeEncoder.l(serialDescriptor, 7, n2.f31041a, embedThumbnail.placeholder);
        }
        if (compositeEncoder.A(serialDescriptor, 8) || embedThumbnail.placeholderVersion != null) {
            compositeEncoder.l(serialDescriptor, 8, p0.f31057a, embedThumbnail.placeholderVersion);
        }
        if (compositeEncoder.A(serialDescriptor, 9) || embedThumbnail.srcIsAnimated) {
            compositeEncoder.y(serialDescriptor, 9, embedThumbnail.srcIsAnimated);
        }
        if (!compositeEncoder.A(serialDescriptor, 10)) {
            String embedUrl = embedThumbnail.getEmbedUrl();
            String str = embedThumbnail.proxyURL;
            if (str == null) {
                str = embedThumbnail.url;
            }
            if (Intrinsics.areEqual(embedUrl, str)) {
                return;
            }
        }
        compositeEncoder.z(serialDescriptor, 10, embedThumbnail.getEmbedUrl());
    }

    @NotNull
    public final String component1() {
        return this.url;
    }

    public final boolean component10() {
        return this.srcIsAnimated;
    }

    public final String component2() {
        return this.proxyURL;
    }

    public final String component3() {
        return this.videoUrl;
    }

    public final int component4() {
        return this.height;
    }

    public final int component5() {
        return this.width;
    }

    public final Boolean component6() {
        return this.gifv;
    }

    public final Boolean component7() {
        return this.showPlayButton;
    }

    public final String component8() {
        return this.placeholder;
    }

    public final Integer component9() {
        return this.placeholderVersion;
    }

    @NotNull
    public final EmbedThumbnail copy(@NotNull String url, String str, String str2, int i10, int i11, Boolean bool, Boolean bool2, String str3, Integer num, boolean z10) {
        Intrinsics.checkNotNullParameter(url, "url");
        return new EmbedThumbnail(url, str, str2, i10, i11, bool, bool2, str3, num, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EmbedThumbnail) {
            EmbedThumbnail embedThumbnail = (EmbedThumbnail) obj;
            return Intrinsics.areEqual(this.url, embedThumbnail.url) && Intrinsics.areEqual(this.proxyURL, embedThumbnail.proxyURL) && Intrinsics.areEqual(this.videoUrl, embedThumbnail.videoUrl) && this.height == embedThumbnail.height && this.width == embedThumbnail.width && Intrinsics.areEqual(this.gifv, embedThumbnail.gifv) && Intrinsics.areEqual(this.showPlayButton, embedThumbnail.showPlayButton) && Intrinsics.areEqual(this.placeholder, embedThumbnail.placeholder) && Intrinsics.areEqual(this.placeholderVersion, embedThumbnail.placeholderVersion) && this.srcIsAnimated == embedThumbnail.srcIsAnimated;
        }
        return false;
    }

    @Override // com.discord.chat.bridge.embed.EmbedUrlProvider
    @NotNull
    public String getEmbedUrl() {
        return this.embedUrl;
    }

    public final Boolean getGifv() {
        return this.gifv;
    }

    public final int getHeight() {
        return this.height;
    }

    public final String getPlaceholder() {
        return this.placeholder;
    }

    public final Integer getPlaceholderVersion() {
        return this.placeholderVersion;
    }

    public final String getProxyURL() {
        return this.proxyURL;
    }

    public final Boolean getShowPlayButton() {
        return this.showPlayButton;
    }

    public final boolean getSrcIsAnimated() {
        return this.srcIsAnimated;
    }

    @NotNull
    public final String getUrl() {
        return this.url;
    }

    public final String getVideoUrl() {
        return this.videoUrl;
    }

    public final int getWidth() {
        return this.width;
    }

    public int hashCode() {
        int hashCode = this.url.hashCode() * 31;
        String str = this.proxyURL;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.videoUrl;
        int hashCode3 = (((((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + Integer.hashCode(this.height)) * 31) + Integer.hashCode(this.width)) * 31;
        Boolean bool = this.gifv;
        int hashCode4 = (hashCode3 + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.showPlayButton;
        int hashCode5 = (hashCode4 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        String str3 = this.placeholder;
        int hashCode6 = (hashCode5 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Integer num = this.placeholderVersion;
        return ((hashCode6 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.srcIsAnimated);
    }

    @NotNull
    public String toString() {
        String str = this.url;
        String str2 = this.proxyURL;
        String str3 = this.videoUrl;
        int i10 = this.height;
        int i11 = this.width;
        Boolean bool = this.gifv;
        Boolean bool2 = this.showPlayButton;
        String str4 = this.placeholder;
        Integer num = this.placeholderVersion;
        boolean z10 = this.srcIsAnimated;
        return "EmbedThumbnail(url=" + str + ", proxyURL=" + str2 + ", videoUrl=" + str3 + ", height=" + i10 + ", width=" + i11 + ", gifv=" + bool + ", showPlayButton=" + bool2 + ", placeholder=" + str4 + ", placeholderVersion=" + num + ", srcIsAnimated=" + z10 + ")";
    }

    public EmbedThumbnail(@NotNull String url, String str, String str2, int i10, int i11, Boolean bool, Boolean bool2, String str3, Integer num, boolean z10) {
        Intrinsics.checkNotNullParameter(url, "url");
        this.url = url;
        this.proxyURL = str;
        this.videoUrl = str2;
        this.height = i10;
        this.width = i11;
        this.gifv = bool;
        this.showPlayButton = bool2;
        this.placeholder = str3;
        this.placeholderVersion = num;
        this.srcIsAnimated = z10;
        this.embedUrl = str != null ? str : url;
    }

    public /* synthetic */ EmbedThumbnail(String str, String str2, String str3, int i10, int i11, Boolean bool, Boolean bool2, String str4, Integer num, boolean z10, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i12 & 2) != 0 ? null : str2, (i12 & 4) != 0 ? null : str3, i10, i11, (i12 & 32) != 0 ? null : bool, (i12 & 64) != 0 ? null : bool2, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str4, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : num, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z10);
    }
}
