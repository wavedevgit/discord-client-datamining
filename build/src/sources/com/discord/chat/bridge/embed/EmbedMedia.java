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
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 :2\u00020\u0001:\u00029:BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\r\u0010\u000eBo\b\u0010\u0012\u0006\u0010\u000f\u001a\u00020\u0006\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b\r\u0010\u0013J\t\u0010\"\u001a\u00020\u0003HÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010$\u001a\u00020\u0006HÆ\u0003J\t\u0010%\u001a\u00020\u0006HÆ\u0003J\u000b\u0010&\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010'\u001a\u0004\u0018\u00010\u0006HÆ\u0003¢\u0006\u0002\u0010\u001cJ\t\u0010(\u001a\u00020\u000bHÆ\u0003J\u000b\u0010)\u001a\u0004\u0018\u00010\u0003HÆ\u0003Jf\u0010*\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u00062\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00062\b\b\u0002\u0010\n\u001a\u00020\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0002\u0010+J\u0013\u0010,\u001a\u00020\u000b2\b\u0010-\u001a\u0004\u0018\u00010.HÖ\u0003J\t\u0010/\u001a\u00020\u0006HÖ\u0001J\t\u00100\u001a\u00020\u0003HÖ\u0001J%\u00101\u001a\u0002022\u0006\u00103\u001a\u00020\u00002\u0006\u00104\u001a\u0002052\u0006\u00106\u001a\u000207H\u0001¢\u0006\u0002\b8R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0015R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0015R\u0015\u0010\t\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u001d\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0015R\u0014\u0010\u0010\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u0015¨\u0006;"}, d2 = {"Lcom/discord/chat/bridge/embed/EmbedMedia;", "Lcom/discord/chat/bridge/embed/EmbedUrlProvider;", "url", "", "proxyURL", "width", "", "height", ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", "srcIsAnimated", "", "contentType", "<init>", "(Ljava/lang/String;Ljava/lang/String;IILjava/lang/String;Ljava/lang/Integer;ZLjava/lang/String;)V", "seen0", "embedUrl", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;IILjava/lang/String;Ljava/lang/Integer;ZLjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getUrl", "()Ljava/lang/String;", "getProxyURL", "getWidth", "()I", "getHeight", "getPlaceholder", "getPlaceholderVersion", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getSrcIsAnimated", "()Z", "getContentType", "getEmbedUrl", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "(Ljava/lang/String;Ljava/lang/String;IILjava/lang/String;Ljava/lang/Integer;ZLjava/lang/String;)Lcom/discord/chat/bridge/embed/EmbedMedia;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbedMedia implements EmbedUrlProvider {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String contentType;
    @NotNull
    private final String embedUrl;
    private final int height;
    private final String placeholder;
    private final Integer placeholderVersion;
    private final String proxyURL;
    private final boolean srcIsAnimated;
    @NotNull
    private final String url;
    private final int width;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/embed/EmbedMedia$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/embed/EmbedMedia;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return EmbedMedia$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ EmbedMedia(int i10, String str, String str2, int i11, int i12, String str3, Integer num, boolean z10, String str4, String str5, SerializationConstructorMarker serializationConstructorMarker) {
        if (77 != (i10 & 77)) {
            v1.b(i10, 77, EmbedMedia$$serializer.INSTANCE.getDescriptor());
        }
        this.url = str;
        if ((i10 & 2) == 0) {
            this.proxyURL = null;
        } else {
            this.proxyURL = str2;
        }
        this.width = i11;
        this.height = i12;
        if ((i10 & 16) == 0) {
            this.placeholder = null;
        } else {
            this.placeholder = str3;
        }
        if ((i10 & 32) == 0) {
            this.placeholderVersion = null;
        } else {
            this.placeholderVersion = num;
        }
        this.srcIsAnimated = z10;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.contentType = null;
        } else {
            this.contentType = str4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            this.embedUrl = str5;
            return;
        }
        String str6 = this.proxyURL;
        this.embedUrl = str6 != null ? str6 : str;
    }

    public static /* synthetic */ EmbedMedia copy$default(EmbedMedia embedMedia, String str, String str2, int i10, int i11, String str3, Integer num, boolean z10, String str4, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            str = embedMedia.url;
        }
        if ((i12 & 2) != 0) {
            str2 = embedMedia.proxyURL;
        }
        if ((i12 & 4) != 0) {
            i10 = embedMedia.width;
        }
        if ((i12 & 8) != 0) {
            i11 = embedMedia.height;
        }
        if ((i12 & 16) != 0) {
            str3 = embedMedia.placeholder;
        }
        if ((i12 & 32) != 0) {
            num = embedMedia.placeholderVersion;
        }
        if ((i12 & 64) != 0) {
            z10 = embedMedia.srcIsAnimated;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            str4 = embedMedia.contentType;
        }
        boolean z11 = z10;
        String str5 = str4;
        String str6 = str3;
        Integer num2 = num;
        return embedMedia.copy(str, str2, i10, i11, str6, num2, z11, str5);
    }

    public static final /* synthetic */ void write$Self$chat_release(EmbedMedia embedMedia, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.z(serialDescriptor, 0, embedMedia.url);
        if (compositeEncoder.A(serialDescriptor, 1) || embedMedia.proxyURL != null) {
            compositeEncoder.l(serialDescriptor, 1, n2.f31089a, embedMedia.proxyURL);
        }
        compositeEncoder.x(serialDescriptor, 2, embedMedia.width);
        compositeEncoder.x(serialDescriptor, 3, embedMedia.height);
        if (compositeEncoder.A(serialDescriptor, 4) || embedMedia.placeholder != null) {
            compositeEncoder.l(serialDescriptor, 4, n2.f31089a, embedMedia.placeholder);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || embedMedia.placeholderVersion != null) {
            compositeEncoder.l(serialDescriptor, 5, p0.f31105a, embedMedia.placeholderVersion);
        }
        compositeEncoder.y(serialDescriptor, 6, embedMedia.srcIsAnimated);
        if (compositeEncoder.A(serialDescriptor, 7) || embedMedia.contentType != null) {
            compositeEncoder.l(serialDescriptor, 7, n2.f31089a, embedMedia.contentType);
        }
        if (!compositeEncoder.A(serialDescriptor, 8)) {
            String embedUrl = embedMedia.getEmbedUrl();
            String str = embedMedia.proxyURL;
            if (str == null) {
                str = embedMedia.url;
            }
            if (Intrinsics.areEqual(embedUrl, str)) {
                return;
            }
        }
        compositeEncoder.z(serialDescriptor, 8, embedMedia.getEmbedUrl());
    }

    @NotNull
    public final String component1() {
        return this.url;
    }

    public final String component2() {
        return this.proxyURL;
    }

    public final int component3() {
        return this.width;
    }

    public final int component4() {
        return this.height;
    }

    public final String component5() {
        return this.placeholder;
    }

    public final Integer component6() {
        return this.placeholderVersion;
    }

    public final boolean component7() {
        return this.srcIsAnimated;
    }

    public final String component8() {
        return this.contentType;
    }

    @NotNull
    public final EmbedMedia copy(@NotNull String url, String str, int i10, int i11, String str2, Integer num, boolean z10, String str3) {
        Intrinsics.checkNotNullParameter(url, "url");
        return new EmbedMedia(url, str, i10, i11, str2, num, z10, str3);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EmbedMedia) {
            EmbedMedia embedMedia = (EmbedMedia) obj;
            return Intrinsics.areEqual(this.url, embedMedia.url) && Intrinsics.areEqual(this.proxyURL, embedMedia.proxyURL) && this.width == embedMedia.width && this.height == embedMedia.height && Intrinsics.areEqual(this.placeholder, embedMedia.placeholder) && Intrinsics.areEqual(this.placeholderVersion, embedMedia.placeholderVersion) && this.srcIsAnimated == embedMedia.srcIsAnimated && Intrinsics.areEqual(this.contentType, embedMedia.contentType);
        }
        return false;
    }

    public final String getContentType() {
        return this.contentType;
    }

    @Override // com.discord.chat.bridge.embed.EmbedUrlProvider
    @NotNull
    public String getEmbedUrl() {
        return this.embedUrl;
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

    public final boolean getSrcIsAnimated() {
        return this.srcIsAnimated;
    }

    @NotNull
    public final String getUrl() {
        return this.url;
    }

    public final int getWidth() {
        return this.width;
    }

    public int hashCode() {
        int hashCode = this.url.hashCode() * 31;
        String str = this.proxyURL;
        int hashCode2 = (((((hashCode + (str == null ? 0 : str.hashCode())) * 31) + Integer.hashCode(this.width)) * 31) + Integer.hashCode(this.height)) * 31;
        String str2 = this.placeholder;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Integer num = this.placeholderVersion;
        int hashCode4 = (((hashCode3 + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.srcIsAnimated)) * 31;
        String str3 = this.contentType;
        return hashCode4 + (str3 != null ? str3.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.url;
        String str2 = this.proxyURL;
        int i10 = this.width;
        int i11 = this.height;
        String str3 = this.placeholder;
        Integer num = this.placeholderVersion;
        boolean z10 = this.srcIsAnimated;
        String str4 = this.contentType;
        return "EmbedMedia(url=" + str + ", proxyURL=" + str2 + ", width=" + i10 + ", height=" + i11 + ", placeholder=" + str3 + ", placeholderVersion=" + num + ", srcIsAnimated=" + z10 + ", contentType=" + str4 + ")";
    }

    public EmbedMedia(@NotNull String url, String str, int i10, int i11, String str2, Integer num, boolean z10, String str3) {
        Intrinsics.checkNotNullParameter(url, "url");
        this.url = url;
        this.proxyURL = str;
        this.width = i10;
        this.height = i11;
        this.placeholder = str2;
        this.placeholderVersion = num;
        this.srcIsAnimated = z10;
        this.contentType = str3;
        this.embedUrl = str != null ? str : url;
    }

    public /* synthetic */ EmbedMedia(String str, String str2, int i10, int i11, String str3, Integer num, boolean z10, String str4, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i12 & 2) != 0 ? null : str2, i10, i11, (i12 & 16) != 0 ? null : str3, (i12 & 32) != 0 ? null : num, z10, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str4);
    }
}
