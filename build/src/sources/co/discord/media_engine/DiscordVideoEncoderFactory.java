package co.discord.media_engine;

import android.media.MediaCodecInfo;
import androidx.annotation.NonNull;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import org.webrtc.EglBase;
import org.webrtc.HardwareVideoEncoderFactory;
import org.webrtc.Predicate;
import org.webrtc.VideoCodecInfo;
import org.webrtc.VideoEncoder;
import org.webrtc.VideoEncoderFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class DiscordVideoEncoderFactory implements VideoEncoderFactory {
    private static final HashSet<String> KNOWN_BAD_ENCODERS = new HashSet<>(Arrays.asList("c2.mtk.hevc.encoder", "omx.mtk.video.encoder.hevc"));
    private HardwareVideoEncoderFactory fwd;

    public DiscordVideoEncoderFactory(@NonNull EglBase.Context context) {
        this.fwd = new HardwareVideoEncoderFactory(context, false, true, new Predicate() { // from class: co.discord.media_engine.a
            @Override // org.webrtc.Predicate
            public final boolean test(Object obj) {
                return DiscordVideoEncoderFactory.a((MediaCodecInfo) obj);
            }
        });
    }

    public static /* synthetic */ boolean a(MediaCodecInfo mediaCodecInfo) {
        return !KNOWN_BAD_ENCODERS.contains(mediaCodecInfo.getName().toLowerCase(Locale.ROOT));
    }

    @Override // org.webrtc.VideoEncoderFactory
    public VideoEncoder createEncoder(@NonNull VideoCodecInfo videoCodecInfo) {
        return this.fwd.createEncoder(videoCodecInfo);
    }

    @Override // org.webrtc.VideoEncoderFactory
    public VideoCodecInfo[] getSupportedCodecs() {
        return this.fwd.getSupportedCodecs();
    }
}
