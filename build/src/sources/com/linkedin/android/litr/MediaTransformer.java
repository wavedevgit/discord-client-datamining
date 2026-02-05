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
import ml.c;
import org.webrtc.MediaStreamTrack;
import rl.e;
import ul.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MediaTransformer {

    /* renamed from: e  reason: collision with root package name */
    private static final String f17194e = "MediaTransformer";

    /* renamed from: a  reason: collision with root package name */
    private final Context f17195a;

    /* renamed from: b  reason: collision with root package name */
    private final ExecutorService f17196b;

    /* renamed from: c  reason: collision with root package name */
    private final Looper f17197c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f17198d;

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
                createVideoFormat.setInteger("frame-rate", ul.e.a(trackFormat, 30).intValue());
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
            Log.e(f17194e, "Mime type is null for track ");
            return false;
        } else if ((z10 && str.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND)) || (z11 && !str.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND) && !str.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND))) {
            return false;
        } else {
            return true;
        }
    }

    public void a(String str) {
        Future future = (Future) this.f17198d.get(str);
        if (future != null && !future.isCancelled() && !future.isDone()) {
            future.cancel(true);
        }
    }

    public void e() {
        this.f17196b.shutdownNow();
    }

    public void h(String str, Uri uri, Uri uri2, MediaFormat mediaFormat, MediaFormat mediaFormat2, jl.a aVar, d dVar) {
        d dVar2;
        int i10;
        String str2;
        if (dVar == null) {
            dVar2 = new d.b().a();
        } else {
            dVar2 = dVar;
        }
        try {
            rl.a aVar2 = new rl.a(this.f17195a, uri, dVar2.f17234d);
            int i11 = 0;
            for (int i12 = 0; i12 < aVar2.getTrackCount(); i12++) {
                if (f(aVar2.getTrackFormat(i12), dVar2.f17235e, dVar2.f17236f)) {
                    i11++;
                }
            }
            if (mediaFormat != null && mediaFormat.containsKey("mime") && (TextUtils.equals(mediaFormat.getString("mime"), "video/x-vnd.on2.vp9") || TextUtils.equals(mediaFormat.getString("mime"), "video/x-vnd.on2.vp8"))) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if (i11 > 0) {
                rl.d dVar3 = new rl.d(this.f17195a, uri2, i11, aVar2.getOrientationHint(), i10);
                int trackCount = aVar2.getTrackCount();
                ArrayList arrayList = new ArrayList(trackCount);
                for (int i13 = 0; i13 < trackCount; i13++) {
                    MediaFormat trackFormat = aVar2.getTrackFormat(i13);
                    if (trackFormat.containsKey("mime")) {
                        str2 = trackFormat.getString("mime");
                    } else {
                        str2 = null;
                    }
                    if (g(str2, dVar2.f17235e, dVar2.f17236f)) {
                        b.C0205b f10 = new b.C0205b(aVar2, i13, dVar3).f(arrayList.size());
                        if (str2.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                            f10.b(new ll.d()).d(new sl.g(dVar2.f17232b)).c(new ll.e()).e(mediaFormat);
                        } else if (str2.startsWith(MediaStreamTrack.AUDIO_TRACK_KIND)) {
                            ll.e eVar = new ll.e();
                            f10.b(new ll.d()).c(eVar).d(new sl.c(eVar, dVar2.f17233c)).e(mediaFormat2);
                        } else {
                            f10.e(null);
                        }
                        arrayList.add(f10.a());
                    }
                }
                i(str, arrayList, aVar, dVar2.f17231a);
                return;
            }
            throw new ml.c(c.a.NO_OUTPUT_TRACKS, uri2, i10, new IllegalArgumentException("No output tracks left"));
        } catch (ml.b | ml.c e10) {
            aVar.onError(str, e10, null);
        }
    }

    public void i(String str, List list, jl.a aVar, int i10) {
        String str2;
        if (!this.f17198d.containsKey(str)) {
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
                    list.set(i12, new b.C0205b(bVar2.c(), bVar2.f(), bVar2.d()).f(bVar2.h()).b(bVar2.a()).c(bVar2.b()).d(bVar2.e()).e(b(bVar2.c(), bVar2.f(), str2)).a());
                }
            }
            this.f17198d.put(str, this.f17196b.submit(new c(str, list, i10, new a(this.f17198d, aVar, this.f17197c))));
            return;
        }
        throw new IllegalArgumentException("Request with id " + str + " already exists");
    }

    public MediaTransformer(Context context, Looper looper, ExecutorService executorService) {
        this.f17195a = context.getApplicationContext();
        this.f17198d = new HashMap(10);
        this.f17197c = looper;
        this.f17196b = executorService;
    }
}
