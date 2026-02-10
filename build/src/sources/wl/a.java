package wl;

import android.content.Context;
import android.media.MediaExtractor;
import android.media.MediaFormat;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import androidx.annotation.NonNull;
import com.linkedin.android.litr.io.MediaRange;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.Map;
import kotlin.jvm.internal.LongCompanionObject;
import rl.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements e {
    private final long duration;
    private final MediaExtractor mediaExtractor;
    private final MediaRange mediaRange;
    private int orientationHint;
    private long size;

    public a(Context context, Uri uri) {
        this(context, uri, new MediaRange(0L, LongCompanionObject.MAX_VALUE));
    }

    private void a(MediaMetadataRetriever mediaMetadataRetriever) {
        try {
            mediaMetadataRetriever.release();
        } catch (IOException unused) {
        }
    }

    @Override // wl.e
    public void advance() {
        this.mediaExtractor.advance();
    }

    @Override // wl.e
    public long getDuration() {
        return this.duration;
    }

    @Override // wl.e
    public int getOrientationHint() {
        return this.orientationHint;
    }

    @Override // wl.e
    public int getSampleFlags() {
        return this.mediaExtractor.getSampleFlags();
    }

    @Override // wl.e
    public long getSampleTime() {
        return this.mediaExtractor.getSampleTime();
    }

    @Override // wl.e
    public int getSampleTrackIndex() {
        return this.mediaExtractor.getSampleTrackIndex();
    }

    @Override // wl.e
    @NonNull
    public MediaRange getSelection() {
        return this.mediaRange;
    }

    @Override // wl.e
    public long getSize() {
        return this.size;
    }

    @Override // wl.e
    public int getTrackCount() {
        return this.mediaExtractor.getTrackCount();
    }

    @Override // wl.e
    @NonNull
    public MediaFormat getTrackFormat(int i10) {
        return this.mediaExtractor.getTrackFormat(i10);
    }

    @Override // wl.e
    public int readSampleData(@NonNull ByteBuffer byteBuffer, int i10) {
        return this.mediaExtractor.readSampleData(byteBuffer, i10);
    }

    @Override // wl.e
    public void release() {
        this.mediaExtractor.release();
    }

    @Override // wl.e
    public void seekTo(long j10, int i10) {
        this.mediaExtractor.seekTo(j10, i10);
    }

    @Override // wl.e
    public void selectTrack(int i10) {
        this.mediaExtractor.selectTrack(i10);
    }

    public a(Context context, Uri uri, MediaRange mediaRange) {
        this.mediaRange = mediaRange;
        MediaExtractor mediaExtractor = new MediaExtractor();
        this.mediaExtractor = mediaExtractor;
        MediaMetadataRetriever mediaMetadataRetriever = new MediaMetadataRetriever();
        try {
            mediaExtractor.setDataSource(context, uri, (Map<String, String>) null);
            mediaMetadataRetriever.setDataSource(context, uri);
            String extractMetadata = mediaMetadataRetriever.extractMetadata(24);
            if (extractMetadata != null) {
                this.orientationHint = Integer.parseInt(extractMetadata);
            }
            String extractMetadata2 = mediaMetadataRetriever.extractMetadata(9);
            this.duration = extractMetadata2 != null ? Long.parseLong(extractMetadata2) : -1L;
            this.size = zl.g.g(context, uri);
            a(mediaMetadataRetriever);
        } catch (IOException e10) {
            a(mediaMetadataRetriever);
            throw new rl.b(b.a.DATA_SOURCE, uri, e10);
        }
    }
}
