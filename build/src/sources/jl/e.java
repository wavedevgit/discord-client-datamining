package jl;

import android.media.MediaCodec;
import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.media.MediaFormat;
import android.util.Log;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends d {

    /* renamed from: q  reason: collision with root package name */
    private static final String f31767q = "jl.e";

    /* renamed from: e  reason: collision with root package name */
    private final a f31768e;

    /* renamed from: i  reason: collision with root package name */
    private final MediaFormat f31769i;

    /* renamed from: o  reason: collision with root package name */
    private final MediaCodec f31770o;

    /* renamed from: p  reason: collision with root package name */
    private final MediaCodecList f31771p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        DECODER_FORMAT_NOT_FOUND("Failed to create decoder codec."),
        DECODER_CONFIGURATION_ERROR("Failed to configure decoder codec."),
        ENCODER_FORMAT_NOT_FOUND("Failed to create encoder codec."),
        ENCODER_CONFIGURATION_ERROR("Failed to configure encoder codec."),
        DECODER_NOT_FOUND("No decoder found."),
        ENCODER_NOT_FOUND("No encoder found."),
        CODEC_IN_RELEASED_STATE("Codecs are in released state."),
        SOURCE_TRACK_MIME_TYPE_NOT_FOUND("Mime type not found for the source track."),
        NO_TRACKS_FOUND("No tracks found."),
        INTERNAL_CODEC_ERROR("Internal codec error occurred."),
        NO_FRAME_AVAILABLE("No frame available for specified tag"),
        DECODER_NOT_PROVIDED("Decoder is not provided"),
        ENCODER_NOT_PROVIDED("Encoder is not provided"),
        RENDERER_NOT_PROVIDED("Renderer is not provided");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f31786d;

        a(String str) {
            this.f31786d = str;
        }
    }

    public e(a aVar) {
        this(aVar, null, null, null);
    }

    private String b(MediaCodec mediaCodec) {
        try {
            return c(mediaCodec.getCodecInfo());
        } catch (IllegalStateException unused) {
            Log.e(f31767q, "Failed to retrieve media codec info.");
            return "";
        }
    }

    private String c(MediaCodecInfo mediaCodecInfo) {
        return "MediaCodecInfo: " + mediaCodecInfo.getName() + ',' + mediaCodecInfo.isEncoder() + ',' + Arrays.asList(mediaCodecInfo.getSupportedTypes()).toString();
    }

    private String d(MediaCodecList mediaCodecList) {
        MediaCodecInfo[] codecInfos;
        StringBuilder sb2 = new StringBuilder();
        try {
            for (MediaCodecInfo mediaCodecInfo : mediaCodecList.getCodecInfos()) {
                if (mediaCodecInfo != null) {
                    sb2.append('\n');
                    sb2.append(c(mediaCodecInfo));
                }
            }
        } catch (IllegalStateException e10) {
            Log.e(f31767q, "Failed to retrieve media codec info.", e10);
        }
        return sb2.toString();
    }

    private String e(Throwable th2) {
        if (!(th2 instanceof MediaCodec.CodecException)) {
            return null;
        }
        return ((MediaCodec.CodecException) th2).getDiagnosticInfo();
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return this.f31768e.f31786d;
    }

    @Override // jl.d, java.lang.Throwable
    public String toString() {
        String str = super.toString() + '\n';
        if (this.f31769i != null) {
            str = str + "Media format: " + this.f31769i.toString() + '\n';
        }
        if (this.f31770o != null) {
            str = str + "Selected media codec info: " + b(this.f31770o) + '\n';
        }
        if (this.f31771p != null) {
            str = str + "Available media codec info list (Name, IsEncoder, Supported Types): " + d(this.f31771p);
        }
        if (getCause() != null) {
            return str + "Diagnostic info: " + e(getCause());
        }
        return str;
    }

    public e(a aVar, Throwable th2) {
        this(aVar, null, null, null, th2);
    }

    public e(a aVar, MediaFormat mediaFormat, MediaCodec mediaCodec, MediaCodecList mediaCodecList) {
        this(aVar, mediaFormat, mediaCodec, mediaCodecList, null);
    }

    public e(a aVar, MediaFormat mediaFormat, MediaCodec mediaCodec, MediaCodecList mediaCodecList, Throwable th2) {
        super(th2);
        this.f31768e = aVar;
        this.f31769i = mediaFormat;
        this.f31770o = mediaCodec;
        this.f31771p = mediaCodecList;
    }
}
