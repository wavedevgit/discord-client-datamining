package com.linkedin.android.litr;

import android.content.Context;
import android.media.MediaFormat;
import android.net.Uri;
import android.os.Looper;
import android.text.TextUtils;
import android.util.Log;
import com.linkedin.android.litr.b;
import com.linkedin.android.litr.d;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import jl.c;
import ol.e;
import org.webrtc.MediaStreamTrack;
import rl.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MediaTransformer {

    /* renamed from: e  reason: collision with root package name */
    private static final String f18203e = "MediaTransformer";

    /* renamed from: a  reason: collision with root package name */
    private final Context f18204a;

    /* renamed from: b  reason: collision with root package name */
    private final ExecutorService f18205b;

    /* renamed from: c  reason: collision with root package name */
    private final Looper f18206c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f18207d;

    public MediaTransformer(Context context) {
        this(context, Looper.getMainLooper(), Executors.newSingleThreadExecutor());
    }

    private MediaFormat b(e eVar, int i10, String str) {
        String str2;
        int i11;
        int i12;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("mime")) {
            str2 = trackFormat.getString("mime");
        } else {
            str2 = null;
        }
        if (str2 != null) {
            if (str2.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                MediaFormat createVideoFormat = MediaFormat.createVideoFormat(str2, trackFormat.getInteger("width"), trackFormat.getInteger("height"));
                int a10 = g.a(eVar, i10);
                if (a10 <= 0) {
                    a10 = 10000000;
                }
                createVideoFormat.setInteger("bitrate", a10);
                if (trackFormat.containsKey("i-frame-interval")) {
                    i12 = trackFormat.getInteger("i-frame-interval");
                } else {
                    i12 = 5;
                }
                createVideoFormat.setInteger("i-frame-interval", i12);
                createVideoFormat.setInteger("frame-rate", rl.e.a(trackFormat, 30).intValue());
                return createVideoFormat;
            } else if (str2.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND)) {
                if (d(eVar, i10, str)) {
                    str2 = c(str);
                }
                MediaFormat createAudioFormat = MediaFormat.createAudioFormat(str2, trackFormat.getInteger("sample-rate"), trackFormat.getInteger("channel-count"));
                if (trackFormat.containsKey("bitrate")) {
                    i11 = trackFormat.getInteger("bitrate");
                } else {
                    i11 = 256000;
                }
                createAudioFormat.setInteger("bitrate", i11);
                if (trackFormat.containsKey("durationUs")) {
                    createAudioFormat.setLong("durationUs", trackFormat.getLong("durationUs"));
                }
                return createAudioFormat;
            }
        }
        return null;
    }

    private String c(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1662541442:
                if (str.equals("video/hevc")) {
                    c10 = 0;
                    break;
                }
                break;
            case 1331836730:
                if (str.equals("video/avc")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1599127256:
                if (str.equals("video/x-vnd.on2.vp8")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1599127257:
                if (str.equals("video/x-vnd.on2.vp9")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
                return "audio/mp4a-latm";
            case 2:
            case 3:
                return "audio/opus";
            default:
                return null;
        }
    }

    private boolean d(e eVar, int i10, String str) {
        if (str == null) {
            return false;
        }
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1662541442:
                if (str.equals("video/hevc")) {
                    c10 = 0;
                    break;
                }
                break;
            case 1331836730:
                if (str.equals("video/avc")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1599127256:
                if (str.equals("video/x-vnd.on2.vp8")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1599127257:
                if (str.equals("video/x-vnd.on2.vp9")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
                if (!trackFormat.containsKey("mime") || !TextUtils.equals(trackFormat.getString("mime"), "audio/raw")) {
                    return false;
                }
                return true;
            case 2:
            case 3:
                if (!trackFormat.containsKey("mime") || TextUtils.equals(trackFormat.getString("mime"), "audio/opus") || TextUtils.equals(trackFormat.getString("mime"), "audio/vorbis")) {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }

    private boolean f(MediaFormat mediaFormat, boolean z10, boolean z11) {
        String str;
        if (mediaFormat.containsKey("mime")) {
            str = mediaFormat.getString("mime");
        } else {
            str = null;
        }
        return g(str, z10, z11);
    }

    private boolean g(String str, boolean z10, boolean z11) {
        if (str == null) {
            Log.e(f18203e, "Mime type is null for track ");
            return false;
        } else if ((z10 && str.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND)) || (z11 && !str.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND) && !str.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND))) {
            return false;
        } else {
            return true;
        }
    }

    public void a(String str) {
        Future future = (Future) this.f18207d.get(str);
        if (future != null && !future.isCancelled() && !future.isDone()) {
            future.cancel(true);
        }
    }

    public void e() {
        this.f18205b.shutdownNow();
    }

    public void h(String str, Uri uri, Uri uri2, MediaFormat mediaFormat, MediaFormat mediaFormat2, gl.a aVar, d dVar) {
        d dVar2;
        int i10;
        String str2;
        if (dVar == null) {
            dVar2 = new d.b().a();
        } else {
            dVar2 = dVar;
        }
        try {
            ol.a aVar2 = new ol.a(this.f18204a, uri, dVar2.f18243d);
            int i11 = 0;
            for (int i12 = 0; i12 < aVar2.getTrackCount(); i12++) {
                if (f(aVar2.getTrackFormat(i12), dVar2.f18244e, dVar2.f18245f)) {
                    i11++;
                }
            }
            if (mediaFormat != null && mediaFormat.containsKey("mime") && (TextUtils.equals(mediaFormat.getString("mime"), "video/x-vnd.on2.vp9") || TextUtils.equals(mediaFormat.getString("mime"), "video/x-vnd.on2.vp8"))) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if (i11 > 0) {
                ol.d dVar3 = new ol.d(this.f18204a, uri2, i11, aVar2.getOrientationHint(), i10);
                int trackCount = aVar2.getTrackCount();
                ArrayList arrayList = new ArrayList(trackCount);
                for (int i13 = 0; i13 < trackCount; i13++) {
                    MediaFormat trackFormat = aVar2.getTrackFormat(i13);
                    if (trackFormat.containsKey("mime")) {
                        str2 = trackFormat.getString("mime");
                    } else {
                        str2 = null;
                    }
                    if (g(str2, dVar2.f18244e, dVar2.f18245f)) {
                        b.C0203b f10 = new b.C0203b(aVar2, i13, dVar3).f(arrayList.size());
                        if (str2.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                            f10.b(new il.d()).d(new pl.g(dVar2.f18241b)).c(new il.e()).e(mediaFormat);
                        } else if (str2.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND)) {
                            il.e eVar = new il.e();
                            f10.b(new il.d()).c(eVar).d(new pl.c(eVar, dVar2.f18242c)).e(mediaFormat2);
                        } else {
                            f10.e(null);
                        }
                        arrayList.add(f10.a());
                    }
                }
                i(str, arrayList, aVar, dVar2.f18240a);
                return;
            }
            throw new jl.c(c.a.NO_OUTPUT_TRACKS, uri2, i10, new IllegalArgumentException("No output tracks left"));
        } catch (jl.b | jl.c e10) {
            aVar.onError(str, e10, null);
        }
    }

    public void i(String str, List list, gl.a aVar, int i10) {
        String str2;
        if (!this.f18207d.containsKey(str)) {
            int size = list.size();
            int i11 = 0;
            while (true) {
                if (i11 < size) {
                    b bVar = (b) list.get(i11);
                    MediaFormat trackFormat = bVar.c().getTrackFormat(bVar.f());
                    MediaFormat g10 = bVar.g();
                    if (g10 != null && g10.containsKey("mime") && g10.getString("mime").startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                        str2 = g10.getString("mime");
                        break;
                    } else if (trackFormat.containsKey("mime") && trackFormat.getString("mime").startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                        str2 = trackFormat.getString("mime");
                        break;
                    } else {
                        i11++;
                    }
                } else {
                    str2 = null;
                    break;
                }
            }
            for (int i12 = 0; i12 < size; i12++) {
                b bVar2 = (b) list.get(i12);
                if (bVar2.g() == null && ((bVar2.e() != null && bVar2.e().a()) || d(bVar2.c(), bVar2.f(), str2))) {
                    list.set(i12, new b.C0203b(bVar2.c(), bVar2.f(), bVar2.d()).f(bVar2.h()).b(bVar2.a()).c(bVar2.b()).d(bVar2.e()).e(b(bVar2.c(), bVar2.f(), str2)).a());
                }
            }
            this.f18207d.put(str, this.f18205b.submit(new c(str, list, i10, new a(this.f18207d, aVar, this.f18206c))));
            return;
        }
        throw new IllegalArgumentException("Request with id " + str + " already exists");
    }

    public MediaTransformer(Context context, Looper looper, ExecutorService executorService) {
        this.f18204a = context.getApplicationContext();
        this.f18207d = new HashMap(10);
        this.f18206c = looper;
        this.f18205b = executorService;
    }
}
