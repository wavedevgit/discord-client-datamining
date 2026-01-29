package rl;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.media.MediaFormat;
import android.net.Uri;
import android.util.Log;
import com.linkedin.android.litr.io.MediaRange;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static final String f48343a = "g";

    public static int a(ol.e eVar, int i10) {
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("bitrate")) {
            return trackFormat.getInteger("bitrate");
        }
        float b10 = b(eVar, trackFormat);
        if (b10 <= 0.0f) {
            return -1;
        }
        float size = (float) eVar.getSize();
        int trackCount = eVar.getTrackCount();
        float f10 = 0.0f;
        for (int i11 = 0; i11 < trackCount; i11++) {
            MediaFormat trackFormat2 = eVar.getTrackFormat(i11);
            if (trackFormat2.containsKey("mime")) {
                if (trackFormat2.containsKey("bitrate") && trackFormat2.containsKey("durationUs")) {
                    size -= (trackFormat2.getInteger("bitrate") * f.a(trackFormat2.getLong("durationUs"))) / 8.0f;
                } else if (trackFormat2.getString("mime").startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                    float b11 = b(eVar, trackFormat2);
                    if (b11 > 0.0f) {
                        f10 += trackFormat2.getInteger("width") * trackFormat2.getInteger("height") * b11;
                    }
                }
            }
        }
        float integer = trackFormat.getInteger("width") * trackFormat.getInteger("height") * b10;
        if (f10 > 0.0f) {
            size = (size * integer) / f10;
        }
        return (int) ((size * 8.0f) / b10);
    }

    static float b(ol.e eVar, MediaFormat mediaFormat) {
        if (mediaFormat.containsKey("durationUs")) {
            return f.a(mediaFormat.getLong("durationUs"));
        }
        return f.b(eVar.getDuration());
    }

    private static int c(MediaFormat mediaFormat) {
        if (mediaFormat.containsKey("bitrate")) {
            return mediaFormat.getInteger("bitrate");
        }
        return -1;
    }

    private static long d(com.linkedin.android.litr.b bVar) {
        MediaFormat trackFormat = bVar.c().getTrackFormat(bVar.f());
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            MediaRange selection = bVar.c().getSelection();
            return Math.min(j10, selection.a()) - Math.max(0L, selection.b());
        }
        return -1L;
    }

    public static long e(List list) {
        Iterator it = list.iterator();
        long j10 = 0;
        while (it.hasNext()) {
            j10 = Math.max(d((com.linkedin.android.litr.b) it.next()), j10);
        }
        Iterator it2 = list.iterator();
        float f10 = 0.0f;
        while (it2.hasNext()) {
            com.linkedin.android.litr.b bVar = (com.linkedin.android.litr.b) it2.next();
            MediaFormat trackFormat = bVar.c().getTrackFormat(bVar.f());
            int c10 = c(trackFormat);
            long d10 = d(bVar);
            if (d10 < 0) {
                Log.d(f48343a, "Track duration is not available, using maximum duration");
                d10 = j10;
            }
            String f11 = f(trackFormat);
            if (f11 != null) {
                if (bVar.g() != null) {
                    c10 = c(bVar.g());
                } else if (f11.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND) && c10 < 0) {
                    c10 = 320000;
                }
            }
            if (c10 < 0) {
                Log.d(f48343a, "Bitrate is not available, cannot use that track to estimate size");
                c10 = 0;
            }
            f10 += c10 * f.a(d10);
        }
        return f10 / 8.0f;
    }

    private static String f(MediaFormat mediaFormat) {
        if (mediaFormat.containsKey("mime")) {
            return mediaFormat.getString("mime");
        }
        return null;
    }

    public static long g(Context context, Uri uri) {
        long j10;
        long j11 = -1;
        if ("content".equals(uri.getScheme())) {
            AssetFileDescriptor assetFileDescriptor = null;
            try {
                try {
                    assetFileDescriptor = context.getContentResolver().openAssetFileDescriptor(uri, "r");
                    if (assetFileDescriptor != null) {
                        j10 = assetFileDescriptor.getParcelFileDescriptor().getStatSize();
                    } else {
                        j10 = 0;
                    }
                    if (j10 >= 0) {
                        j11 = j10;
                    }
                    if (assetFileDescriptor != null) {
                        try {
                            return j11;
                        } catch (IOException e10) {
                        }
                    }
                    return j11;
                } finally {
                    if (0 != 0) {
                        try {
                            assetFileDescriptor.close();
                        } catch (IOException e102) {
                            Log.e(f48343a, "Unable to close file descriptor from targetFile: " + uri, e102);
                        }
                    }
                }
            } catch (FileNotFoundException | IllegalStateException e11) {
                Log.e(f48343a, "Unable to extract length from targetFile: " + uri, e11);
                if (assetFileDescriptor != null) {
                    try {
                        assetFileDescriptor.close();
                    } catch (IOException e12) {
                        Log.e(f48343a, "Unable to close file descriptor from targetFile: " + uri, e12);
                    }
                }
                return -1L;
            }
        } else if (!"file".equals(uri.getScheme()) || uri.getPath() == null) {
            return -1L;
        } else {
            return new File(uri.getPath()).length();
        }
    }
}
