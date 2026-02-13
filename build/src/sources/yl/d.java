package yl;

import android.media.MediaFormat;
import android.util.Log;
import org.webrtc.MediaStreamTrack;
import rl.e;
import wl.f;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private static final String f56193a = "d";

    public c a(int i10, int i11, wl.e eVar, ql.a aVar, i iVar, ql.b bVar, f fVar, MediaFormat mediaFormat) {
        if (mediaFormat == null) {
            return new b(eVar, i10, fVar, i11);
        }
        String string = mediaFormat.getString("mime");
        if (string != null) {
            if (string.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND) || string.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND)) {
                if (aVar != null) {
                    if (bVar == null) {
                        throw new rl.e(e.a.ENCODER_NOT_PROVIDED, mediaFormat, null, null);
                    }
                } else {
                    throw new rl.e(e.a.DECODER_NOT_PROVIDED, mediaFormat, null, null);
                }
            }
            if (string.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                if (iVar != null) {
                    return new e(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
                }
                throw new rl.e(e.a.RENDERER_NOT_PROVIDED, mediaFormat, null, null);
            } else if (string.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND)) {
                if (iVar == null) {
                    iVar = new xl.c(bVar);
                }
                return new a(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
            } else {
                String str = f56193a;
                Log.i(str, "Unsupported track mime type: " + string + ", will use passthrough transcoder");
                return new b(eVar, i10, fVar, i11);
            }
        }
        throw new rl.e(e.a.SOURCE_TRACK_MIME_TYPE_NOT_FOUND, mediaFormat, null, null);
    }
}
