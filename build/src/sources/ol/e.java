package ol;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface e {
    void advance();

    long getDuration();

    int getOrientationHint();

    int getSampleFlags();

    long getSampleTime();

    int getSampleTrackIndex();

    MediaRange getSelection();

    long getSize();

    int getTrackCount();

    MediaFormat getTrackFormat(int i10);

    int readSampleData(ByteBuffer byteBuffer, int i10);

    void release();

    void seekTo(long j10, int i10);

    void selectTrack(int i10);
}
