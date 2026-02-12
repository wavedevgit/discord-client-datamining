package co.discord.media_engine;

import androidx.annotation.NonNull;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.function.Consumer;
import java.util.function.Predicate;
import org.webrtc.EglBase;
import org.webrtc.HardwareVideoDecoderFactory;
import org.webrtc.PlatformSoftwareVideoDecoderFactory;
import org.webrtc.SoftwareVideoDecoderFactory;
import org.webrtc.VideoCodecInfo;
import org.webrtc.VideoDecoder;
import org.webrtc.VideoDecoderFactory;
import org.webrtc.VideoDecoderFallback;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class DiscordVideoDecoderFactory implements VideoDecoderFactory {
    private final VideoDecoderFactory hardwareVideoDecoderFactory;
    private final VideoDecoderFactory platformSoftwareVideoDecoderFactory;
    private final VideoDecoderFactory softwareVideoDecoderFactory = new SoftwareVideoDecoderFactory();

    public DiscordVideoDecoderFactory(EglBase.Context context) {
        this.hardwareVideoDecoderFactory = new HardwareVideoDecoderFactory(context);
        this.platformSoftwareVideoDecoderFactory = new PlatformSoftwareVideoDecoderFactory(context);
    }

    @Override // org.webrtc.VideoDecoderFactory
    public VideoDecoder createDecoder(@NonNull VideoCodecInfo videoCodecInfo) {
        VideoDecoderFactory videoDecoderFactory;
        VideoDecoder createDecoder = this.softwareVideoDecoderFactory.createDecoder(videoCodecInfo);
        VideoDecoder createDecoder2 = this.hardwareVideoDecoderFactory.createDecoder(videoCodecInfo);
        if (createDecoder == null && (videoDecoderFactory = this.platformSoftwareVideoDecoderFactory) != null) {
            createDecoder = videoDecoderFactory.createDecoder(videoCodecInfo);
        }
        if (createDecoder2 != null && createDecoder != null) {
            return new VideoDecoderFallback(createDecoder, createDecoder2);
        }
        if (createDecoder2 != null) {
            return createDecoder2;
        }
        return createDecoder;
    }

    @Override // org.webrtc.VideoDecoderFactory
    @NonNull
    public VideoCodecInfo[] getSupportedCodecs() {
        final LinkedHashSet linkedHashSet = new LinkedHashSet();
        Arrays.stream(this.softwareVideoDecoderFactory.getSupportedCodecs()).filter(new Predicate() { // from class: co.discord.media_engine.a
            @Override // java.util.function.Predicate
            public final boolean test(Object obj) {
                boolean equals;
                equals = ((VideoCodecInfo) obj).name.equals("VP8");
                return equals;
            }
        }).forEach(new Consumer() { // from class: co.discord.media_engine.b
            @Override // java.util.function.Consumer
            public final void accept(Object obj) {
                linkedHashSet.add((VideoCodecInfo) obj);
            }
        });
        linkedHashSet.addAll(Arrays.asList(this.hardwareVideoDecoderFactory.getSupportedCodecs()));
        Arrays.stream(this.platformSoftwareVideoDecoderFactory.getSupportedCodecs()).filter(new Predicate() { // from class: co.discord.media_engine.c
            @Override // java.util.function.Predicate
            public final boolean test(Object obj) {
                boolean equals;
                equals = ((VideoCodecInfo) obj).name.equals("H264");
                return equals;
            }
        }).forEach(new Consumer() { // from class: co.discord.media_engine.b
            @Override // java.util.function.Consumer
            public final void accept(Object obj) {
                linkedHashSet.add((VideoCodecInfo) obj);
            }
        });
        return (VideoCodecInfo[]) linkedHashSet.toArray(new VideoCodecInfo[linkedHashSet.size()]);
    }
}
