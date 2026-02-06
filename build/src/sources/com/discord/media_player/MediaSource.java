package com.discord.media_player;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b3\b\u0086\b\u0018\u00002\u00020\u0001B\u008b\u0001\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\b\u0002\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0013\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0015\u0010\u0016J\u000b\u00101\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u00102\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u00103\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u00104\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u001cJ\t\u00105\u001a\u00020\u0003HÆ\u0003J\t\u00106\u001a\u00020\nHÆ\u0003J\t\u00107\u001a\u00020\fHÆ\u0003J\u0010\u00108\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\b9J\u0012\u0010:\u001a\u0004\u0018\u00010\u0010HÆ\u0003¢\u0006\u0004\b;\u0010\u0018J\u0010\u0010<\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u001cJ\u0010\u0010=\u001a\u0004\u0018\u00010\u0013HÆ\u0003¢\u0006\u0002\u0010)J\u0010\u0010>\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010,J\u009a\u0001\u0010?\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00102\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\fHÆ\u0001¢\u0006\u0004\b@\u0010AJ\u0013\u0010B\u001a\u00020\f2\b\u0010C\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010D\u001a\u00020\u0007HÖ\u0001J\t\u0010E\u001a\u00020\u0003HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0018R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u001d\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0018R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0015\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\n\n\u0002\u0010&\u001a\u0004\b%\u0010\u0018R\u0015\u0010\u0011\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u001d\u001a\u0004\b'\u0010\u001cR\u0015\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\n\n\u0002\u0010*\u001a\u0004\b(\u0010)R\u0015\u0010\u0014\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010-\u001a\u0004\b+\u0010,R\u0011\u0010.\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b.\u0010\"R\u0011\u0010/\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b/\u0010\"R\u0011\u00100\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b0\u0010\"¨\u0006F"}, d2 = {"Lcom/discord/media_player/MediaSource;", "", "sourceUrl", "", "previewUrl", ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", "", "featureTag", "type", "Lcom/discord/media_player/MediaType;", "shouldAutoPlay", "", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "index", "portal", "", "srcIsAnimated", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/media_player/MediaType;ZLcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Double;Ljava/lang/Boolean;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getSourceUrl", "()Ljava/lang/String;", "getPreviewUrl", "getPlaceholder", "getPlaceholderVersion", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getFeatureTag", "getType", "()Lcom/discord/media_player/MediaType;", "getShouldAutoPlay", "()Z", "getChannelId-qMVnFVQ", "()Lcom/discord/primitives/ChannelId;", "getMessageId-N_6c4I0", "Ljava/lang/String;", "getIndex", "getPortal", "()Ljava/lang/Double;", "Ljava/lang/Double;", "getSrcIsAnimated", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "isGifv", "isVideo", "isValid", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component8-qMVnFVQ", "component9", "component9-N_6c4I0", "component10", "component11", "component12", "copy", "copy-M_16ML8", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/media_player/MediaType;ZLcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Double;Ljava/lang/Boolean;)Lcom/discord/media_player/MediaSource;", "equals", "other", "hashCode", "toString", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaSource {
    private final ChannelId channelId;
    @NotNull
    private final String featureTag;
    private final Integer index;
    private final boolean isGifv;
    private final boolean isValid;
    private final boolean isVideo;
    private final String messageId;
    private final String placeholder;
    private final Integer placeholderVersion;
    private final Double portal;
    private final String previewUrl;
    private final boolean shouldAutoPlay;
    private final String sourceUrl;
    private final Boolean srcIsAnimated;
    @NotNull
    private final MediaType type;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[MediaType.values().length];
            try {
                iArr[MediaType.IMAGE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[MediaType.VIDEO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[MediaType.GIFV.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[MediaType.AUDIO.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public /* synthetic */ MediaSource(String str, String str2, String str3, Integer num, String str4, MediaType mediaType, boolean z10, ChannelId channelId, String str5, Integer num2, Double d10, Boolean bool, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, str3, num, str4, mediaType, z10, channelId, str5, num2, d10, bool);
    }

    /* renamed from: copy-M_16ML8$default  reason: not valid java name */
    public static /* synthetic */ MediaSource m944copyM_16ML8$default(MediaSource mediaSource, String str, String str2, String str3, Integer num, String str4, MediaType mediaType, boolean z10, ChannelId channelId, String str5, Integer num2, Double d10, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = mediaSource.sourceUrl;
        }
        if ((i10 & 2) != 0) {
            str2 = mediaSource.previewUrl;
        }
        if ((i10 & 4) != 0) {
            str3 = mediaSource.placeholder;
        }
        if ((i10 & 8) != 0) {
            num = mediaSource.placeholderVersion;
        }
        if ((i10 & 16) != 0) {
            str4 = mediaSource.featureTag;
        }
        if ((i10 & 32) != 0) {
            mediaType = mediaSource.type;
        }
        if ((i10 & 64) != 0) {
            z10 = mediaSource.shouldAutoPlay;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            channelId = mediaSource.channelId;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            str5 = mediaSource.messageId;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            num2 = mediaSource.index;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            d10 = mediaSource.portal;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            bool = mediaSource.srcIsAnimated;
        }
        Double d11 = d10;
        Boolean bool2 = bool;
        String str6 = str5;
        Integer num3 = num2;
        boolean z11 = z10;
        ChannelId channelId2 = channelId;
        String str7 = str4;
        MediaType mediaType2 = mediaType;
        return mediaSource.m947copyM_16ML8(str, str2, str3, num, str7, mediaType2, z11, channelId2, str6, num3, d11, bool2);
    }

    public final String component1() {
        return this.sourceUrl;
    }

    public final Integer component10() {
        return this.index;
    }

    public final Double component11() {
        return this.portal;
    }

    public final Boolean component12() {
        return this.srcIsAnimated;
    }

    public final String component2() {
        return this.previewUrl;
    }

    public final String component3() {
        return this.placeholder;
    }

    public final Integer component4() {
        return this.placeholderVersion;
    }

    @NotNull
    public final String component5() {
        return this.featureTag;
    }

    @NotNull
    public final MediaType component6() {
        return this.type;
    }

    public final boolean component7() {
        return this.shouldAutoPlay;
    }

    /* renamed from: component8-qMVnFVQ  reason: not valid java name */
    public final ChannelId m945component8qMVnFVQ() {
        return this.channelId;
    }

    /* renamed from: component9-N_6c4I0  reason: not valid java name */
    public final String m946component9N_6c4I0() {
        return this.messageId;
    }

    @NotNull
    /* renamed from: copy-M_16ML8  reason: not valid java name */
    public final MediaSource m947copyM_16ML8(String str, String str2, String str3, Integer num, @NotNull String featureTag, @NotNull MediaType type, boolean z10, ChannelId channelId, String str4, Integer num2, Double d10, Boolean bool) {
        Intrinsics.checkNotNullParameter(featureTag, "featureTag");
        Intrinsics.checkNotNullParameter(type, "type");
        return new MediaSource(str, str2, str3, num, featureTag, type, z10, channelId, str4, num2, d10, bool, null);
    }

    public boolean equals(Object obj) {
        boolean m1087equalsimpl0;
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaSource) {
            MediaSource mediaSource = (MediaSource) obj;
            if (Intrinsics.areEqual(this.sourceUrl, mediaSource.sourceUrl) && Intrinsics.areEqual(this.previewUrl, mediaSource.previewUrl) && Intrinsics.areEqual(this.placeholder, mediaSource.placeholder) && Intrinsics.areEqual(this.placeholderVersion, mediaSource.placeholderVersion) && Intrinsics.areEqual(this.featureTag, mediaSource.featureTag) && this.type == mediaSource.type && this.shouldAutoPlay == mediaSource.shouldAutoPlay && Intrinsics.areEqual(this.channelId, mediaSource.channelId)) {
                String str = this.messageId;
                String str2 = mediaSource.messageId;
                if (str == null) {
                    if (str2 == null) {
                        m1087equalsimpl0 = true;
                    }
                    m1087equalsimpl0 = false;
                } else {
                    if (str2 != null) {
                        m1087equalsimpl0 = MessageId.m1087equalsimpl0(str, str2);
                    }
                    m1087equalsimpl0 = false;
                }
                return m1087equalsimpl0 && Intrinsics.areEqual(this.index, mediaSource.index) && Intrinsics.areEqual((Object) this.portal, (Object) mediaSource.portal) && Intrinsics.areEqual(this.srcIsAnimated, mediaSource.srcIsAnimated);
            }
            return false;
        }
        return false;
    }

    /* renamed from: getChannelId-qMVnFVQ  reason: not valid java name */
    public final ChannelId m948getChannelIdqMVnFVQ() {
        return this.channelId;
    }

    @NotNull
    public final String getFeatureTag() {
        return this.featureTag;
    }

    public final Integer getIndex() {
        return this.index;
    }

    /* renamed from: getMessageId-N_6c4I0  reason: not valid java name */
    public final String m949getMessageIdN_6c4I0() {
        return this.messageId;
    }

    public final String getPlaceholder() {
        return this.placeholder;
    }

    public final Integer getPlaceholderVersion() {
        return this.placeholderVersion;
    }

    public final Double getPortal() {
        return this.portal;
    }

    public final String getPreviewUrl() {
        return this.previewUrl;
    }

    public final boolean getShouldAutoPlay() {
        return this.shouldAutoPlay;
    }

    public final String getSourceUrl() {
        return this.sourceUrl;
    }

    public final Boolean getSrcIsAnimated() {
        return this.srcIsAnimated;
    }

    @NotNull
    public final MediaType getType() {
        return this.type;
    }

    public int hashCode() {
        String str = this.sourceUrl;
        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
        String str2 = this.previewUrl;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.placeholder;
        int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Integer num = this.placeholderVersion;
        int hashCode4 = (((((((hashCode3 + (num == null ? 0 : num.hashCode())) * 31) + this.featureTag.hashCode()) * 31) + this.type.hashCode()) * 31) + Boolean.hashCode(this.shouldAutoPlay)) * 31;
        ChannelId channelId = this.channelId;
        int m1062hashCodeimpl = (hashCode4 + (channelId == null ? 0 : ChannelId.m1062hashCodeimpl(channelId.m1066unboximpl()))) * 31;
        String str4 = this.messageId;
        int m1088hashCodeimpl = (m1062hashCodeimpl + (str4 == null ? 0 : MessageId.m1088hashCodeimpl(str4))) * 31;
        Integer num2 = this.index;
        int hashCode5 = (m1088hashCodeimpl + (num2 == null ? 0 : num2.hashCode())) * 31;
        Double d10 = this.portal;
        int hashCode6 = (hashCode5 + (d10 == null ? 0 : d10.hashCode())) * 31;
        Boolean bool = this.srcIsAnimated;
        return hashCode6 + (bool != null ? bool.hashCode() : 0);
    }

    public final boolean isGifv() {
        return this.isGifv;
    }

    public final boolean isValid() {
        return this.isValid;
    }

    public final boolean isVideo() {
        return this.isVideo;
    }

    @NotNull
    public String toString() {
        String str = this.sourceUrl;
        String str2 = this.previewUrl;
        String str3 = this.placeholder;
        Integer num = this.placeholderVersion;
        String str4 = this.featureTag;
        MediaType mediaType = this.type;
        boolean z10 = this.shouldAutoPlay;
        ChannelId channelId = this.channelId;
        String str5 = this.messageId;
        String m1090toStringimpl = str5 == null ? "null" : MessageId.m1090toStringimpl(str5);
        Integer num2 = this.index;
        Double d10 = this.portal;
        Boolean bool = this.srcIsAnimated;
        return "MediaSource(sourceUrl=" + str + ", previewUrl=" + str2 + ", placeholder=" + str3 + ", placeholderVersion=" + num + ", featureTag=" + str4 + ", type=" + mediaType + ", shouldAutoPlay=" + z10 + ", channelId=" + channelId + ", messageId=" + m1090toStringimpl + ", index=" + num2 + ", portal=" + d10 + ", srcIsAnimated=" + bool + ")";
    }

    /* JADX WARN: Code restructure failed: missing block: B:23:0x0059, code lost:
        if (kotlin.text.StringsKt.k0(r2) == false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005c, code lost:
        r5 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0064, code lost:
        if (kotlin.text.StringsKt.k0(r3) == false) goto L21;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private MediaSource(java.lang.String r2, java.lang.String r3, java.lang.String r4, java.lang.Integer r5, java.lang.String r6, com.discord.media_player.MediaType r7, boolean r8, com.discord.primitives.ChannelId r9, java.lang.String r10, java.lang.Integer r11, java.lang.Double r12, java.lang.Boolean r13) {
        /*
            r1 = this;
            java.lang.String r0 = "featureTag"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            java.lang.String r0 = "type"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r7, r0)
            r1.<init>()
            r1.sourceUrl = r2
            r1.previewUrl = r3
            r1.placeholder = r4
            r1.placeholderVersion = r5
            r1.featureTag = r6
            r1.type = r7
            r1.shouldAutoPlay = r8
            r1.channelId = r9
            r1.messageId = r10
            r1.index = r11
            r1.portal = r12
            r1.srcIsAnimated = r13
            com.discord.media_player.MediaType r4 = com.discord.media_player.MediaType.GIFV
            r5 = 0
            r6 = 1
            if (r7 != r4) goto L2d
            r4 = r6
            goto L2e
        L2d:
            r4 = r5
        L2e:
            r1.isGifv = r4
            com.discord.media_player.MediaType r4 = com.discord.media_player.MediaType.VIDEO
            if (r7 != r4) goto L36
            r4 = r6
            goto L37
        L36:
            r4 = r5
        L37:
            r1.isVideo = r4
            int[] r4 = com.discord.media_player.MediaSource.WhenMappings.$EnumSwitchMapping$0
            int r7 = r7.ordinal()
            r4 = r4[r7]
            if (r4 == r6) goto L5e
            r3 = 2
            if (r4 == r3) goto L53
            r3 = 3
            if (r4 == r3) goto L53
            r3 = 4
            if (r4 != r3) goto L4d
            goto L53
        L4d:
            qr.p r2 = new qr.p
            r2.<init>()
            throw r2
        L53:
            if (r2 == 0) goto L66
            boolean r2 = kotlin.text.StringsKt.k0(r2)
            if (r2 == 0) goto L5c
            goto L66
        L5c:
            r5 = r6
            goto L66
        L5e:
            if (r3 == 0) goto L66
            boolean r2 = kotlin.text.StringsKt.k0(r3)
            if (r2 == 0) goto L5c
        L66:
            r1.isValid = r5
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.media_player.MediaSource.<init>(java.lang.String, java.lang.String, java.lang.String, java.lang.Integer, java.lang.String, com.discord.media_player.MediaType, boolean, com.discord.primitives.ChannelId, java.lang.String, java.lang.Integer, java.lang.Double, java.lang.Boolean):void");
    }

    public /* synthetic */ MediaSource(String str, String str2, String str3, Integer num, String str4, MediaType mediaType, boolean z10, ChannelId channelId, String str5, Integer num2, Double d10, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : num, str4, mediaType, (i10 & 64) != 0 ? false : z10, channelId, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str5, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : num2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : d10, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : bool, null);
    }
}
