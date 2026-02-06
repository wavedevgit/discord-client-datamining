package ul;

import android.media.MediaFormat;
import com.linkedin.android.litr.render.OboeAudioProcessor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {
    public final a a(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        if (mediaFormat != null && mediaFormat2 != null && mediaFormat.containsKey("sample-rate") && mediaFormat2.containsKey("sample-rate") && mediaFormat.containsKey("channel-count") && mediaFormat2.containsKey("channel-count") && (mediaFormat.getInteger("sample-rate") != mediaFormat2.getInteger("sample-rate") || mediaFormat.getInteger("channel-count") != mediaFormat2.getInteger("channel-count"))) {
            return new OboeAudioProcessor(mediaFormat.getInteger("channel-count"), mediaFormat.getInteger("sample-rate"), mediaFormat2.getInteger("channel-count"), mediaFormat2.getInteger("sample-rate"));
        }
        return new h();
    }
}
