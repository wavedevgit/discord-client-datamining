package com.discord.chat.bridge.media;

import at.n2;
import at.p0;
import at.v1;
import com.discord.chat.bridge.media.UnfurledMediaLoadingState;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\"\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 @2\u00020\u0001:\u0002?@Bo\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\u0006\u0010\u000f\u001a\u00020\u0010¢\u0006\u0004\b\u0011\u0010\u0012B}\b\u0010\u0012\u0006\u0010\u0013\u001a\u00020\b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\u0006\u0010\u000f\u001a\u00020\u0010\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015¢\u0006\u0004\b\u0011\u0010\u0016J\t\u0010'\u001a\u00020\u0003HÆ\u0003J\t\u0010(\u001a\u00020\u0003HÆ\u0003J\t\u0010)\u001a\u00020\u0006HÆ\u0003J\u0010\u0010*\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u001dJ\u0010\u0010+\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u001dJ\u000b\u0010,\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010-\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010.\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u001dJ\u000b\u0010/\u001a\u0004\u0018\u00010\u000eHÆ\u0003J\t\u00100\u001a\u00020\u0010HÆ\u0003J~\u00101\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\b\b\u0002\u0010\u000f\u001a\u00020\u0010HÆ\u0001¢\u0006\u0002\u00102J\u0013\u00103\u001a\u00020\u00102\b\u00104\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00105\u001a\u00020\bHÖ\u0001J\t\u00106\u001a\u00020\u0003HÖ\u0001J%\u00107\u001a\u0002082\u0006\u00109\u001a\u00020\u00002\u0006\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u00020=H\u0001¢\u0006\u0002\b>R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0015\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\n\n\u0002\u0010\u001e\u001a\u0004\b\u001c\u0010\u001dR\u0015\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\n\n\u0002\u0010\u001e\u001a\u0004\b\u001f\u0010\u001dR\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0018R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u0018R\u0015\u0010\f\u001a\u0004\u0018\u00010\b¢\u0006\n\n\u0002\u0010\u001e\u001a\u0004\b\"\u0010\u001dR\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\u000f\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&¨\u0006A"}, d2 = {"Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "", "url", "", "proxyUrl", "loadingState", "Lcom/discord/chat/bridge/media/UnfurledMediaLoadingState;", "height", "", "width", "contentType", ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", "contentScanMetadata", "Lcom/discord/chat/bridge/media/ContentScanMetadata;", "srcIsAnimated", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaLoadingState;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/media/ContentScanMetadata;Z)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaLoadingState;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/media/ContentScanMetadata;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getUrl", "()Ljava/lang/String;", "getProxyUrl", "getLoadingState", "()Lcom/discord/chat/bridge/media/UnfurledMediaLoadingState;", "getHeight", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getWidth", "getContentType", "getPlaceholder", "getPlaceholderVersion", "getContentScanMetadata", "()Lcom/discord/chat/bridge/media/ContentScanMetadata;", "getSrcIsAnimated", "()Z", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "copy", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaLoadingState;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/media/ContentScanMetadata;Z)Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class UnfurledMediaItem {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final ContentScanMetadata contentScanMetadata;
    private final String contentType;
    private final Integer height;
    @NotNull
    private final UnfurledMediaLoadingState loadingState;
    private final String placeholder;
    private final Integer placeholderVersion;
    @NotNull
    private final String proxyUrl;
    private final boolean srcIsAnimated;
    @NotNull
    private final String url;
    private final Integer width;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/media/UnfurledMediaItem$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return UnfurledMediaItem$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ UnfurledMediaItem(int i10, String str, String str2, UnfurledMediaLoadingState unfurledMediaLoadingState, Integer num, Integer num2, String str3, String str4, Integer num3, ContentScanMetadata contentScanMetadata, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        if (519 != (i10 & 519)) {
            v1.b(i10, 519, UnfurledMediaItem$$serializer.INSTANCE.getDescriptor());
        }
        this.url = str;
        this.proxyUrl = str2;
        this.loadingState = unfurledMediaLoadingState;
        if ((i10 & 8) == 0) {
            this.height = null;
        } else {
            this.height = num;
        }
        if ((i10 & 16) == 0) {
            this.width = null;
        } else {
            this.width = num2;
        }
        if ((i10 & 32) == 0) {
            this.contentType = null;
        } else {
            this.contentType = str3;
        }
        if ((i10 & 64) == 0) {
            this.placeholder = null;
        } else {
            this.placeholder = str4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.placeholderVersion = null;
        } else {
            this.placeholderVersion = num3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.contentScanMetadata = null;
        } else {
            this.contentScanMetadata = contentScanMetadata;
        }
        this.srcIsAnimated = z10;
    }

    public static /* synthetic */ UnfurledMediaItem copy$default(UnfurledMediaItem unfurledMediaItem, String str, String str2, UnfurledMediaLoadingState unfurledMediaLoadingState, Integer num, Integer num2, String str3, String str4, Integer num3, ContentScanMetadata contentScanMetadata, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = unfurledMediaItem.url;
        }
        if ((i10 & 2) != 0) {
            str2 = unfurledMediaItem.proxyUrl;
        }
        if ((i10 & 4) != 0) {
            unfurledMediaLoadingState = unfurledMediaItem.loadingState;
        }
        if ((i10 & 8) != 0) {
            num = unfurledMediaItem.height;
        }
        if ((i10 & 16) != 0) {
            num2 = unfurledMediaItem.width;
        }
        if ((i10 & 32) != 0) {
            str3 = unfurledMediaItem.contentType;
        }
        if ((i10 & 64) != 0) {
            str4 = unfurledMediaItem.placeholder;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            num3 = unfurledMediaItem.placeholderVersion;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            contentScanMetadata = unfurledMediaItem.contentScanMetadata;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z10 = unfurledMediaItem.srcIsAnimated;
        }
        ContentScanMetadata contentScanMetadata2 = contentScanMetadata;
        boolean z11 = z10;
        String str5 = str4;
        Integer num4 = num3;
        Integer num5 = num2;
        String str6 = str3;
        return unfurledMediaItem.copy(str, str2, unfurledMediaLoadingState, num, num5, str6, str5, num4, contentScanMetadata2, z11);
    }

    public static final /* synthetic */ void write$Self$chat_release(UnfurledMediaItem unfurledMediaItem, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, unfurledMediaItem.url);
        compositeEncoder.y(serialDescriptor, 1, unfurledMediaItem.proxyUrl);
        compositeEncoder.j(serialDescriptor, 2, UnfurledMediaLoadingState.Serializer.INSTANCE, unfurledMediaItem.loadingState);
        if (compositeEncoder.A(serialDescriptor, 3) || unfurledMediaItem.height != null) {
            compositeEncoder.z(serialDescriptor, 3, p0.f6864a, unfurledMediaItem.height);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || unfurledMediaItem.width != null) {
            compositeEncoder.z(serialDescriptor, 4, p0.f6864a, unfurledMediaItem.width);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || unfurledMediaItem.contentType != null) {
            compositeEncoder.z(serialDescriptor, 5, n2.f6848a, unfurledMediaItem.contentType);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || unfurledMediaItem.placeholder != null) {
            compositeEncoder.z(serialDescriptor, 6, n2.f6848a, unfurledMediaItem.placeholder);
        }
        if (compositeEncoder.A(serialDescriptor, 7) || unfurledMediaItem.placeholderVersion != null) {
            compositeEncoder.z(serialDescriptor, 7, p0.f6864a, unfurledMediaItem.placeholderVersion);
        }
        if (compositeEncoder.A(serialDescriptor, 8) || unfurledMediaItem.contentScanMetadata != null) {
            compositeEncoder.z(serialDescriptor, 8, ContentScanMetadata$$serializer.INSTANCE, unfurledMediaItem.contentScanMetadata);
        }
        compositeEncoder.x(serialDescriptor, 9, unfurledMediaItem.srcIsAnimated);
    }

    @NotNull
    public final String component1() {
        return this.url;
    }

    public final boolean component10() {
        return this.srcIsAnimated;
    }

    @NotNull
    public final String component2() {
        return this.proxyUrl;
    }

    @NotNull
    public final UnfurledMediaLoadingState component3() {
        return this.loadingState;
    }

    public final Integer component4() {
        return this.height;
    }

    public final Integer component5() {
        return this.width;
    }

    public final String component6() {
        return this.contentType;
    }

    public final String component7() {
        return this.placeholder;
    }

    public final Integer component8() {
        return this.placeholderVersion;
    }

    public final ContentScanMetadata component9() {
        return this.contentScanMetadata;
    }

    @NotNull
    public final UnfurledMediaItem copy(@NotNull String url, @NotNull String proxyUrl, @NotNull UnfurledMediaLoadingState loadingState, Integer num, Integer num2, String str, String str2, Integer num3, ContentScanMetadata contentScanMetadata, boolean z10) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(proxyUrl, "proxyUrl");
        Intrinsics.checkNotNullParameter(loadingState, "loadingState");
        return new UnfurledMediaItem(url, proxyUrl, loadingState, num, num2, str, str2, num3, contentScanMetadata, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof UnfurledMediaItem) {
            UnfurledMediaItem unfurledMediaItem = (UnfurledMediaItem) obj;
            return Intrinsics.areEqual(this.url, unfurledMediaItem.url) && Intrinsics.areEqual(this.proxyUrl, unfurledMediaItem.proxyUrl) && this.loadingState == unfurledMediaItem.loadingState && Intrinsics.areEqual(this.height, unfurledMediaItem.height) && Intrinsics.areEqual(this.width, unfurledMediaItem.width) && Intrinsics.areEqual(this.contentType, unfurledMediaItem.contentType) && Intrinsics.areEqual(this.placeholder, unfurledMediaItem.placeholder) && Intrinsics.areEqual(this.placeholderVersion, unfurledMediaItem.placeholderVersion) && Intrinsics.areEqual(this.contentScanMetadata, unfurledMediaItem.contentScanMetadata) && this.srcIsAnimated == unfurledMediaItem.srcIsAnimated;
        }
        return false;
    }

    public final ContentScanMetadata getContentScanMetadata() {
        return this.contentScanMetadata;
    }

    public final String getContentType() {
        return this.contentType;
    }

    public final Integer getHeight() {
        return this.height;
    }

    @NotNull
    public final UnfurledMediaLoadingState getLoadingState() {
        return this.loadingState;
    }

    public final String getPlaceholder() {
        return this.placeholder;
    }

    public final Integer getPlaceholderVersion() {
        return this.placeholderVersion;
    }

    @NotNull
    public final String getProxyUrl() {
        return this.proxyUrl;
    }

    public final boolean getSrcIsAnimated() {
        return this.srcIsAnimated;
    }

    @NotNull
    public final String getUrl() {
        return this.url;
    }

    public final Integer getWidth() {
        return this.width;
    }

    public int hashCode() {
        int hashCode = ((((this.url.hashCode() * 31) + this.proxyUrl.hashCode()) * 31) + this.loadingState.hashCode()) * 31;
        Integer num = this.height;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.width;
        int hashCode3 = (hashCode2 + (num2 == null ? 0 : num2.hashCode())) * 31;
        String str = this.contentType;
        int hashCode4 = (hashCode3 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.placeholder;
        int hashCode5 = (hashCode4 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Integer num3 = this.placeholderVersion;
        int hashCode6 = (hashCode5 + (num3 == null ? 0 : num3.hashCode())) * 31;
        ContentScanMetadata contentScanMetadata = this.contentScanMetadata;
        return ((hashCode6 + (contentScanMetadata != null ? contentScanMetadata.hashCode() : 0)) * 31) + Boolean.hashCode(this.srcIsAnimated);
    }

    @NotNull
    public String toString() {
        String str = this.url;
        String str2 = this.proxyUrl;
        UnfurledMediaLoadingState unfurledMediaLoadingState = this.loadingState;
        Integer num = this.height;
        Integer num2 = this.width;
        String str3 = this.contentType;
        String str4 = this.placeholder;
        Integer num3 = this.placeholderVersion;
        ContentScanMetadata contentScanMetadata = this.contentScanMetadata;
        boolean z10 = this.srcIsAnimated;
        return "UnfurledMediaItem(url=" + str + ", proxyUrl=" + str2 + ", loadingState=" + unfurledMediaLoadingState + ", height=" + num + ", width=" + num2 + ", contentType=" + str3 + ", placeholder=" + str4 + ", placeholderVersion=" + num3 + ", contentScanMetadata=" + contentScanMetadata + ", srcIsAnimated=" + z10 + ")";
    }

    public UnfurledMediaItem(@NotNull String url, @NotNull String proxyUrl, @NotNull UnfurledMediaLoadingState loadingState, Integer num, Integer num2, String str, String str2, Integer num3, ContentScanMetadata contentScanMetadata, boolean z10) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(proxyUrl, "proxyUrl");
        Intrinsics.checkNotNullParameter(loadingState, "loadingState");
        this.url = url;
        this.proxyUrl = proxyUrl;
        this.loadingState = loadingState;
        this.height = num;
        this.width = num2;
        this.contentType = str;
        this.placeholder = str2;
        this.placeholderVersion = num3;
        this.contentScanMetadata = contentScanMetadata;
        this.srcIsAnimated = z10;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ UnfurledMediaItem(java.lang.String r2, java.lang.String r3, com.discord.chat.bridge.media.UnfurledMediaLoadingState r4, java.lang.Integer r5, java.lang.Integer r6, java.lang.String r7, java.lang.String r8, java.lang.Integer r9, com.discord.chat.bridge.media.ContentScanMetadata r10, boolean r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
        /*
            r1 = this;
            r13 = r12 & 8
            r0 = 0
            if (r13 == 0) goto L6
            r5 = r0
        L6:
            r13 = r12 & 16
            if (r13 == 0) goto Lb
            r6 = r0
        Lb:
            r13 = r12 & 32
            if (r13 == 0) goto L10
            r7 = r0
        L10:
            r13 = r12 & 64
            if (r13 == 0) goto L15
            r8 = r0
        L15:
            r13 = r12 & 128(0x80, float:1.794E-43)
            if (r13 == 0) goto L1a
            r9 = r0
        L1a:
            r12 = r12 & 256(0x100, float:3.59E-43)
            if (r12 == 0) goto L2a
            r12 = r11
            r11 = r0
        L20:
            r10 = r9
            r9 = r8
            r8 = r7
            r7 = r6
            r6 = r5
            r5 = r4
            r4 = r3
            r3 = r2
            r2 = r1
            goto L2d
        L2a:
            r12 = r11
            r11 = r10
            goto L20
        L2d:
            r2.<init>(r3, r4, r5, r6, r7, r8, r9, r10, r11, r12)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.media.UnfurledMediaItem.<init>(java.lang.String, java.lang.String, com.discord.chat.bridge.media.UnfurledMediaLoadingState, java.lang.Integer, java.lang.Integer, java.lang.String, java.lang.String, java.lang.Integer, com.discord.chat.bridge.media.ContentScanMetadata, boolean, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
