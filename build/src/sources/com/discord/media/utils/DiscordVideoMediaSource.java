package com.discord.media.utils;

import android.content.Context;
import android.media.CamcorderProfile;
import android.media.MediaFormat;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.os.Build;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import org.webrtc.MediaStreamTrack;
import qr.v;
import wl.g;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\t\b\u0000\u0018\u0000 =2\u00020\u0001:\u0002>=B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u001f\u0010\t\u001a\u00020\b2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\t\u0010\nJ'\u0010\u000e\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\b2\u0006\u0010\r\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000e\u0010\u000fJ'\u0010\u0010\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\b2\u0006\u0010\r\u001a\u00020\bH\u0002¢\u0006\u0004\b\u0010\u0010\u000fJ\u001b\u0010\u0013\u001a\u0004\u0018\u00010\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0011H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u001d\u0010\u0017\u001a\u0004\u0018\u00010\b*\u00020\u00112\u0006\u0010\u0016\u001a\u00020\u0015H\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u001d\u0010\u001a\u001a\u0004\u0018\u00010\u0019*\u00020\u00112\u0006\u0010\u0016\u001a\u00020\u0015H\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ\u0019\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u001d0\u001c¢\u0006\u0004\b\u001e\u0010\u001fJ\u000f\u0010!\u001a\u0004\u0018\u00010 ¢\u0006\u0004\b!\u0010\"R\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u0005\u0010#\u001a\u0004\b$\u0010%R\u001f\u0010(\u001a\r\u0012\t\u0012\u00070\u0011¢\u0006\u0002\b'0&8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b(\u0010)R\u0016\u0010*\u001a\u0004\u0018\u00010\u00118\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b*\u0010+R\u0016\u0010\u0012\u001a\u0004\u0018\u00010\u00118\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010+R\u0014\u0010\u000b\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000b\u0010,R\u0014\u0010\f\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010,R\u0014\u0010-\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010,R\u0014\u0010.\u001a\u00020\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010/R\u0014\u00100\u001a\u00020\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b0\u0010/R\u0014\u00101\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010,R\u0014\u00102\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b2\u0010,R\u0014\u00104\u001a\u0002038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b4\u00105R\u0014\u0010\r\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\r\u0010,R\u0014\u00107\u001a\u0002068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00108R\u0014\u00109\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010,R\u0019\u0010:\u001a\u0004\u0018\u00010\u00118\u0006¢\u0006\f\n\u0004\b:\u0010+\u001a\u0004\b;\u0010<¨\u0006?"}, d2 = {"Lcom/discord/media/utils/DiscordVideoMediaSource;", "Ltl/a;", "Landroid/content/Context;", "context", "Landroid/net/Uri;", "inputUri", "<init>", "(Landroid/content/Context;Landroid/net/Uri;)V", "", "extractVideoRotationFromMetadata", "(Landroid/content/Context;Landroid/net/Uri;)I", "width", "height", "frameRate", "getAVCBitrate", "(III)I", "getDefaultBitrate", "Landroid/media/MediaFormat;", "srcAudioFormat", "getAudioFormatWithBitrate", "(Landroid/media/MediaFormat;)Landroid/media/MediaFormat;", "", "key", "getIntegerOrNull", "(Landroid/media/MediaFormat;Ljava/lang/String;)Ljava/lang/Integer;", "Ljava/nio/ByteBuffer;", "getByteBufferOrNull", "(Landroid/media/MediaFormat;Ljava/lang/String;)Ljava/nio/ByteBuffer;", "", "", "getMetadata", "()Ljava/util/Map;", "Lcom/discord/media/utils/DiscordVideoMediaSource$ColorFormatSettings;", "getColorFormatSettings", "()Lcom/discord/media/utils/DiscordVideoMediaSource$ColorFormatSettings;", "Landroid/net/Uri;", "getInputUri", "()Landroid/net/Uri;", "", "Lkotlin/jvm/internal/EnhancedNullability;", "srcTrackFormats", "Ljava/util/List;", "srcVideoFormat", "Landroid/media/MediaFormat;", "I", "bitRate", "videoFormat", "Ljava/lang/String;", "profile", "level", "durationMs", "", "isHDRContent", "Z", "", "keyFrameIntervalSeconds", "F", "rotationDegrees", "audioFormat", "getAudioFormat", "()Landroid/media/MediaFormat;", "Companion", "ColorFormatSettings", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDiscordVideoMediaSource.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DiscordVideoMediaSource.kt\ncom/discord/media/utils/DiscordVideoMediaSource\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,236:1\n1563#2:237\n1634#2,3:238\n295#2,2:241\n295#2,2:243\n1#3:245\n*S KotlinDebug\n*F\n+ 1 DiscordVideoMediaSource.kt\ncom/discord/media/utils/DiscordVideoMediaSource\n*L\n22#1:237\n22#1:238,3\n23#1:241,2\n24#1:243,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DiscordVideoMediaSource extends tl.a {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @Deprecated
    public static final int DEFAULT_FRAME_RATE = 30;
    @Deprecated
    public static final int DEFAULT_HEIGHT = 480;
    @Deprecated
    public static final float DEFAULT_KEY_FRAME_INTERVAL_SECONDS = 5.0f;
    @Deprecated
    public static final int DEFAULT_WIDTH = 640;
    private final MediaFormat audioFormat;
    private final int bitRate;
    private final int durationMs;
    private final int frameRate;
    private final int height;
    @NotNull
    private final Uri inputUri;
    private final boolean isHDRContent;
    private final float keyFrameIntervalSeconds;
    private final int level;
    @NotNull
    private final String profile;
    private final int rotationDegrees;
    private final MediaFormat srcAudioFormat;
    @NotNull
    private final List<MediaFormat> srcTrackFormats;
    private final MediaFormat srcVideoFormat;
    @NotNull
    private final String videoFormat;
    private final int width;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B/\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000bJ\u0010\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000bJ\u0010\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000bJ\u000b\u0010\u0014\u001a\u0004\u0018\u00010\u0007HÆ\u0003J>\u0010\u0015\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0002\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001b\u001a\u00020\u001cHÖ\u0001R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\f\u001a\u0004\b\n\u0010\u000bR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\f\u001a\u0004\b\r\u0010\u000bR\u0015\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\f\u001a\u0004\b\u000e\u0010\u000bR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006\u001d"}, d2 = {"Lcom/discord/media/utils/DiscordVideoMediaSource$ColorFormatSettings;", "", "colorTransfer", "", "colorStandard", "colorRange", "hdrStaticInfo", "Ljava/nio/ByteBuffer;", "<init>", "(Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/nio/ByteBuffer;)V", "getColorTransfer", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getColorStandard", "getColorRange", "getHdrStaticInfo", "()Ljava/nio/ByteBuffer;", "component1", "component2", "component3", "component4", "copy", "(Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/nio/ByteBuffer;)Lcom/discord/media/utils/DiscordVideoMediaSource$ColorFormatSettings;", "equals", "", "other", "hashCode", "toString", "", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ColorFormatSettings {
        private final Integer colorRange;
        private final Integer colorStandard;
        private final Integer colorTransfer;
        private final ByteBuffer hdrStaticInfo;

        public ColorFormatSettings(Integer num, Integer num2, Integer num3, ByteBuffer byteBuffer) {
            this.colorTransfer = num;
            this.colorStandard = num2;
            this.colorRange = num3;
            this.hdrStaticInfo = byteBuffer;
        }

        public static /* synthetic */ ColorFormatSettings copy$default(ColorFormatSettings colorFormatSettings, Integer num, Integer num2, Integer num3, ByteBuffer byteBuffer, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                num = colorFormatSettings.colorTransfer;
            }
            if ((i10 & 2) != 0) {
                num2 = colorFormatSettings.colorStandard;
            }
            if ((i10 & 4) != 0) {
                num3 = colorFormatSettings.colorRange;
            }
            if ((i10 & 8) != 0) {
                byteBuffer = colorFormatSettings.hdrStaticInfo;
            }
            return colorFormatSettings.copy(num, num2, num3, byteBuffer);
        }

        public final Integer component1() {
            return this.colorTransfer;
        }

        public final Integer component2() {
            return this.colorStandard;
        }

        public final Integer component3() {
            return this.colorRange;
        }

        public final ByteBuffer component4() {
            return this.hdrStaticInfo;
        }

        @NotNull
        public final ColorFormatSettings copy(Integer num, Integer num2, Integer num3, ByteBuffer byteBuffer) {
            return new ColorFormatSettings(num, num2, num3, byteBuffer);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ColorFormatSettings) {
                ColorFormatSettings colorFormatSettings = (ColorFormatSettings) obj;
                return Intrinsics.areEqual(this.colorTransfer, colorFormatSettings.colorTransfer) && Intrinsics.areEqual(this.colorStandard, colorFormatSettings.colorStandard) && Intrinsics.areEqual(this.colorRange, colorFormatSettings.colorRange) && Intrinsics.areEqual(this.hdrStaticInfo, colorFormatSettings.hdrStaticInfo);
            }
            return false;
        }

        public final Integer getColorRange() {
            return this.colorRange;
        }

        public final Integer getColorStandard() {
            return this.colorStandard;
        }

        public final Integer getColorTransfer() {
            return this.colorTransfer;
        }

        public final ByteBuffer getHdrStaticInfo() {
            return this.hdrStaticInfo;
        }

        public int hashCode() {
            Integer num = this.colorTransfer;
            int hashCode = (num == null ? 0 : num.hashCode()) * 31;
            Integer num2 = this.colorStandard;
            int hashCode2 = (hashCode + (num2 == null ? 0 : num2.hashCode())) * 31;
            Integer num3 = this.colorRange;
            int hashCode3 = (hashCode2 + (num3 == null ? 0 : num3.hashCode())) * 31;
            ByteBuffer byteBuffer = this.hdrStaticInfo;
            return hashCode3 + (byteBuffer != null ? byteBuffer.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            Integer num = this.colorTransfer;
            Integer num2 = this.colorStandard;
            Integer num3 = this.colorRange;
            ByteBuffer byteBuffer = this.hdrStaticInfo;
            return "ColorFormatSettings(colorTransfer=" + num + ", colorStandard=" + num2 + ", colorRange=" + num3 + ", hdrStaticInfo=" + byteBuffer + ")";
        }
    }

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/media/utils/DiscordVideoMediaSource$Companion;", "", "<init>", "()V", "DEFAULT_WIDTH", "", "DEFAULT_HEIGHT", "DEFAULT_FRAME_RATE", "DEFAULT_KEY_FRAME_INTERVAL_SECONDS", "", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DiscordVideoMediaSource(@NotNull Context context, @NotNull Uri inputUri) {
        super(context, inputUri);
        boolean z10;
        Object obj;
        Object obj2;
        Object b10;
        Object b11;
        int i10;
        Object b12;
        Object b13;
        Object b14;
        Object b15;
        Object b16;
        int extractVideoRotationFromMetadata;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(inputUri, "inputUri");
        this.inputUri = inputUri;
        IntRange u10 = kotlin.ranges.d.u(0, getTrackCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(getTrackFormat(((m0) it).nextInt()));
        }
        this.srcTrackFormats = arrayList;
        Iterator it2 = arrayList.iterator();
        while (true) {
            z10 = true;
            obj = null;
            if (it2.hasNext()) {
                obj2 = it2.next();
                MediaFormat mediaFormat = (MediaFormat) obj2;
                Intrinsics.checkNotNull(mediaFormat);
                String mimeType = MediaFormatUtilsKt.getMimeType(mediaFormat);
                if (mimeType != null && StringsKt.P(mimeType, MediaStreamTrack.VIDEO_TRACK_KIND, false, 2, null)) {
                    break;
                }
            } else {
                obj2 = null;
                break;
            }
        }
        this.srcVideoFormat = (MediaFormat) obj2;
        Iterator<T> it3 = this.srcTrackFormats.iterator();
        while (true) {
            if (!it3.hasNext()) {
                break;
            }
            Object next = it3.next();
            MediaFormat mediaFormat2 = (MediaFormat) next;
            Intrinsics.checkNotNull(mediaFormat2);
            String mimeType2 = MediaFormatUtilsKt.getMimeType(mediaFormat2);
            if (mimeType2 != null && StringsKt.P(mimeType2, MediaStreamTrack.AUDIO_TRACK_KIND, false, 2, null)) {
                obj = next;
                break;
            }
        }
        this.srcAudioFormat = (MediaFormat) obj;
        MediaFormat mediaFormat3 = this.srcVideoFormat;
        if (mediaFormat3 != null) {
            try {
                Result.a aVar = Result.f32053e;
                b10 = Result.b(Integer.valueOf(mediaFormat3.getInteger("width")));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f32053e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            this.width = ((Number) (Result.g(b10) ? Integer.valueOf((int) DEFAULT_WIDTH) : b10)).intValue();
            try {
                b11 = Result.b(Integer.valueOf(mediaFormat3.getInteger("height")));
            } catch (Throwable th3) {
                Result.a aVar3 = Result.f32053e;
                b11 = Result.b(kotlin.c.a(th3));
            }
            this.height = ((Number) (Result.g(b11) ? Integer.valueOf((int) DEFAULT_HEIGHT) : b11)).intValue();
            String profileName = MediaFormatUtilsKt.getProfileName(mediaFormat3);
            this.profile = profileName == null ? "unknown" : profileName;
            Integer level = MediaFormatUtilsKt.getLevel(mediaFormat3);
            if (level != null) {
                i10 = level.intValue();
            } else {
                i10 = 0;
            }
            this.level = i10;
            this.durationMs = (int) TimeUnit.MICROSECONDS.toMillis(mediaFormat3.getLong("durationUs"));
            String codecType = MediaFormatUtilsKt.getCodecType(mediaFormat3);
            this.videoFormat = codecType != null ? codecType : "unknown";
            if ((!mediaFormat3.containsKey("color-transfer") || (mediaFormat3.getInteger("color-transfer") != 7 && mediaFormat3.getInteger("color-transfer") != 6)) && (!mediaFormat3.containsKey("color-standard") || mediaFormat3.getInteger("color-standard") != 6)) {
                z10 = false;
            }
            this.isHDRContent = z10;
            try {
                b12 = Result.b(Integer.valueOf(mediaFormat3.getInteger("frame-rate")));
            } catch (Throwable th4) {
                Result.a aVar4 = Result.f32053e;
                b12 = Result.b(kotlin.c.a(th4));
            }
            if (Result.e(b12) != null) {
                try {
                    b13 = Result.b(Integer.valueOf((int) mediaFormat3.getFloat("frame-rate")));
                } catch (Throwable th5) {
                    Result.a aVar5 = Result.f32053e;
                    b13 = Result.b(kotlin.c.a(th5));
                }
                b12 = b13;
            }
            this.frameRate = ((Number) (Result.g(b12) ? 30 : b12)).intValue();
            this.bitRate = g.a(this, this.srcTrackFormats.indexOf(mediaFormat3));
            try {
                b14 = Result.b(Float.valueOf(mediaFormat3.getFloat("i-frame-interval")));
            } catch (Throwable th6) {
                Result.a aVar6 = Result.f32053e;
                b14 = Result.b(kotlin.c.a(th6));
            }
            if (Result.e(b14) != null) {
                try {
                    b15 = Result.b(Float.valueOf(mediaFormat3.getInteger("i-frame-interval")));
                } catch (Throwable th7) {
                    Result.a aVar7 = Result.f32053e;
                    b15 = Result.b(kotlin.c.a(th7));
                }
                b14 = b15;
            }
            this.keyFrameIntervalSeconds = ((Number) (Result.g(b14) ? Float.valueOf(5.0f) : b14)).floatValue();
            try {
                if (mediaFormat3.containsKey("rotation-degrees")) {
                    extractVideoRotationFromMetadata = mediaFormat3.getInteger("rotation-degrees");
                } else {
                    extractVideoRotationFromMetadata = extractVideoRotationFromMetadata(context, this.inputUri);
                }
                b16 = Result.b(Integer.valueOf(extractVideoRotationFromMetadata));
            } catch (Throwable th8) {
                Result.a aVar8 = Result.f32053e;
                b16 = Result.b(kotlin.c.a(th8));
            }
            this.rotationDegrees = ((Number) (Result.g(b16) ? 0 : b16)).intValue();
        } else {
            this.width = DEFAULT_WIDTH;
            this.height = DEFAULT_HEIGHT;
            this.frameRate = 30;
            this.bitRate = getAVCBitrate(DEFAULT_WIDTH, DEFAULT_HEIGHT, 30);
            this.keyFrameIntervalSeconds = 5.0f;
            this.videoFormat = "unknown";
            this.profile = "unknown";
            this.level = 0;
            this.durationMs = 0;
            this.isHDRContent = false;
            this.rotationDegrees = 0;
        }
        this.audioFormat = getAudioFormatWithBitrate(this.srcAudioFormat);
    }

    private final int extractVideoRotationFromMetadata(Context context, Uri uri) {
        int i10;
        Integer intOrNull;
        MediaMetadataRetriever mediaMetadataRetriever = new MediaMetadataRetriever();
        try {
            mediaMetadataRetriever.setDataSource(context, uri);
            String extractMetadata = mediaMetadataRetriever.extractMetadata(24);
            if (extractMetadata != null && (intOrNull = StringsKt.toIntOrNull(extractMetadata)) != null) {
                i10 = intOrNull.intValue();
            } else {
                i10 = 0;
            }
            try {
                Result.a aVar = Result.f32053e;
                mediaMetadataRetriever.release();
                Result.b(Unit.f32056a);
                return i10;
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f32053e;
                Result.b(kotlin.c.a(th2));
                return i10;
            }
        } catch (Throwable th3) {
            try {
                Result.a aVar3 = Result.f32053e;
                mediaMetadataRetriever.release();
                Result.b(Unit.f32056a);
            } catch (Throwable th4) {
                Result.a aVar4 = Result.f32053e;
                Result.b(kotlin.c.a(th4));
            }
            throw th3;
        }
    }

    private final int getAVCBitrate(int i10, int i11, int i12) {
        boolean z10;
        int[] iArr = {8, 6, 5, 4, 0};
        int i13 = -1;
        for (int i14 = 0; i14 < 2; i14++) {
            int i15 = 0;
            while (true) {
                if (i15 < 5) {
                    int i16 = iArr[i15];
                    if (CamcorderProfile.hasProfile(i14, i16)) {
                        CamcorderProfile camcorderProfile = CamcorderProfile.get(i14, i16);
                        int i17 = camcorderProfile.videoFrameWidth;
                        boolean z11 = true;
                        if (i10 == i17 && i11 == camcorderProfile.videoFrameHeight) {
                            z10 = true;
                        } else {
                            z10 = false;
                        }
                        z11 = (i11 == i17 && i10 == camcorderProfile.videoFrameHeight) ? false : false;
                        if ((z10 || z11) && i12 == camcorderProfile.videoFrameRate && camcorderProfile.videoCodec == 2) {
                            int i18 = camcorderProfile.videoBitRate;
                            if (i13 < i18) {
                                i13 = i18;
                            }
                        }
                    }
                    i15++;
                }
            }
        }
        Integer valueOf = Integer.valueOf(i13);
        if (valueOf.intValue() == -1) {
            valueOf = null;
        }
        if (valueOf != null) {
            return valueOf.intValue();
        }
        return getDefaultBitrate(i10, i11, i12);
    }

    private final MediaFormat getAudioFormatWithBitrate(MediaFormat mediaFormat) {
        if (mediaFormat != null && !mediaFormat.containsKey("bitrate")) {
            if (Build.VERSION.SDK_INT >= 29) {
                MediaFormat a10 = c.a(mediaFormat);
                a10.setInteger("bitrate", 256000);
                return a10;
            }
            mediaFormat.setInteger("bitrate", 256000);
            return mediaFormat;
        }
        return null;
    }

    private final ByteBuffer getByteBufferOrNull(MediaFormat mediaFormat, String str) {
        if (mediaFormat.containsKey(str)) {
            return mediaFormat.getByteBuffer(str);
        }
        return null;
    }

    private final int getDefaultBitrate(int i10, int i11, int i12) {
        return (int) (i10 * i11 * i12 * 0.25d);
    }

    private final Integer getIntegerOrNull(MediaFormat mediaFormat, String str) {
        if (mediaFormat.containsKey(str)) {
            return Integer.valueOf(mediaFormat.getInteger(str));
        }
        return null;
    }

    public final MediaFormat getAudioFormat() {
        return this.audioFormat;
    }

    public final ColorFormatSettings getColorFormatSettings() {
        MediaFormat mediaFormat;
        if (this.isHDRContent && (mediaFormat = this.srcVideoFormat) != null) {
            return new ColorFormatSettings(getIntegerOrNull(mediaFormat, "color-transfer"), getIntegerOrNull(this.srcVideoFormat, "color-standard"), getIntegerOrNull(this.srcVideoFormat, "color-range"), getByteBufferOrNull(this.srcVideoFormat, "hdr-static-info"));
        }
        return null;
    }

    @NotNull
    public final Uri getInputUri() {
        return this.inputUri;
    }

    @NotNull
    public final Map<String, Object> getMetadata() {
        return o0.m(v.a("width", Integer.valueOf(this.width)), v.a("height", Integer.valueOf(this.height)), v.a("bitRate", Integer.valueOf(this.bitRate)), v.a("frameRate", Integer.valueOf(this.frameRate)), v.a("format", this.videoFormat), v.a("isHDRContent", Boolean.valueOf(this.isHDRContent)), v.a("rotationDegrees", Integer.valueOf(this.rotationDegrees)), v.a("durationMs", Integer.valueOf(this.durationMs)), v.a("sourceProfile", this.profile), v.a("sourceLevel", Integer.valueOf(this.level)));
    }
}
