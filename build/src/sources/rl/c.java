package rl;

import android.media.MediaCodec;
import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.os.Build;
import android.view.Surface;
import androidx.recyclerview.widget.RecyclerView;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;
import jl.e;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static Map f48558a = new HashMap();

    static {
        int i10 = Build.VERSION.SDK_INT;
        f48558a.put("video/avc", i10 >= 27 ? new int[]{65536, 1, 4, 2, 524288, 8, 16, 32, 64} : new int[]{1, 4, 2, 8, 16, 32, 64});
        f48558a.put("video/x-vnd.on2.vp8", new int[]{1});
        f48558a.put("video/hevc", i10 >= 29 ? new int[]{1, 2, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 8192} : new int[]{1, 2, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT});
        f48558a.put("video/x-vnd.on2.vp9", i10 >= 29 ? new int[]{1, 2, 4, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 16384, 8, 8192, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS} : new int[]{1, 2, 4, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 8, 8192});
        if (i10 >= 29) {
            f48558a.put("video/av01", new int[]{1, 2, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 8192});
        }
    }

    private static void b(MediaCodec mediaCodec, MediaFormat mediaFormat, Surface surface, boolean z10) {
        mediaCodec.configure(mediaFormat, surface, (MediaCrypto) null, z10 ? 1 : 0);
    }

    private static MediaCodec c(MediaFormat mediaFormat, Surface surface, boolean z10, List list) {
        MediaCodec mediaCodec;
        Exception e10;
        Iterator it = list.iterator();
        MediaCodec mediaCodec2 = null;
        IOException iOException = null;
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            try {
                mediaCodec = (MediaCodec) ((Callable) it.next()).call();
            } catch (Exception e11) {
                mediaCodec = mediaCodec2;
                e10 = e11;
            }
            if (mediaCodec != null) {
                try {
                    b(mediaCodec, mediaFormat, surface, z10);
                    mediaCodec2 = mediaCodec;
                    break;
                } catch (Exception e12) {
                    e10 = e12;
                    if (mediaCodec != null) {
                        mediaCodec.release();
                        mediaCodec = null;
                    }
                    if (e10 instanceof IOException) {
                        iOException = (IOException) e10;
                    }
                    mediaCodec2 = mediaCodec;
                }
            } else {
                continue;
                mediaCodec2 = mediaCodec;
            }
        }
        if (mediaCodec2 == null) {
            if (iOException != null) {
                throw iOException;
            }
            throw new IllegalStateException();
        }
        return mediaCodec2;
    }

    private static List d(boolean z10, String str, MediaFormat mediaFormat) {
        MediaCodecInfo[] codecInfos;
        ArrayList arrayList = new ArrayList();
        for (final MediaCodecInfo mediaCodecInfo : new MediaCodecList(1).getCodecInfos()) {
            if (mediaCodecInfo.isEncoder() == z10) {
                try {
                    MediaCodecInfo.CodecCapabilities capabilitiesForType = mediaCodecInfo.getCapabilitiesForType(str);
                    if (capabilitiesForType != null && (mediaFormat == null || capabilitiesForType.isFormatSupported(mediaFormat))) {
                        arrayList.add(new Callable() { // from class: rl.b
                            @Override // java.util.concurrent.Callable
                            public final Object call() {
                                MediaCodec createByCodecName;
                                createByCodecName = MediaCodec.createByCodecName(mediaCodecInfo.getName());
                                return createByCodecName;
                            }
                        });
                    }
                } catch (IllegalArgumentException unused) {
                }
            }
        }
        return arrayList;
    }

    public static MediaCodec e(MediaFormat mediaFormat, Surface surface, boolean z10, e.a aVar, e.a aVar2, e.a aVar3) {
        try {
            try {
                MediaCodec f10 = f(mediaFormat, surface, z10);
                if (f10 != null) {
                    return f10;
                }
                throw new IllegalStateException("Try fallbackToGetCodecByType");
            } catch (IOException | IllegalStateException unused) {
                MediaCodec g10 = g(mediaFormat, surface, z10);
                if (g10 != null) {
                    return g10;
                }
                throw new jl.e(aVar, mediaFormat, null, null);
            }
        } catch (IOException | IllegalStateException e10) {
            if (e10 instanceof IOException) {
                throw new jl.e(aVar2, mediaFormat, null, null, e10);
            }
            throw new jl.e(aVar3, mediaFormat, null, null, e10);
        }
    }

    private static MediaCodec f(MediaFormat mediaFormat, Surface surface, boolean z10) {
        List d10 = d(z10, mediaFormat.getString("mime"), mediaFormat);
        if (!d10.isEmpty()) {
            return c(mediaFormat, surface, z10, d10);
        }
        return null;
    }

    private static MediaCodec g(MediaFormat mediaFormat, Surface surface, boolean z10) {
        List d10 = d(z10, mediaFormat.getString("mime"), null);
        if (d10.isEmpty()) {
            return null;
        }
        return c(mediaFormat, surface, z10, d10);
    }
}
