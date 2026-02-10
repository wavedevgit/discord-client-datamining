package sc;

import android.net.Uri;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.d;
import java.util.Map;
import oe.w0;
import oi.t0;
import sc.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements x {

    /* renamed from: a  reason: collision with root package name */
    private final Object f49702a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private MediaItem.f f49703b;

    /* renamed from: c  reason: collision with root package name */
    private v f49704c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource.Factory f49705d;

    /* renamed from: e  reason: collision with root package name */
    private String f49706e;

    private v b(MediaItem.f fVar) {
        String uri;
        DataSource.Factory factory = this.f49705d;
        if (factory == null) {
            factory = new d.b().b(this.f49706e);
        }
        Uri uri2 = fVar.f11815i;
        if (uri2 == null) {
            uri = null;
        } else {
            uri = uri2.toString();
        }
        h0 h0Var = new h0(uri, fVar.f11820s, factory);
        t0 s10 = fVar.f11817p.entrySet().s();
        while (s10.hasNext()) {
            Map.Entry entry = (Map.Entry) s10.next();
            h0Var.e((String) entry.getKey(), (String) entry.getValue());
        }
        h a10 = new h.b().e(fVar.f11813d, g0.f49644d).b(fVar.f11818q).c(fVar.f11819r).d(qi.e.l(fVar.f11822u)).a(h0Var);
        a10.F(0, fVar.c());
        return a10;
    }

    @Override // sc.x
    public v a(MediaItem mediaItem) {
        v vVar;
        oe.a.e(mediaItem.f11765e);
        MediaItem.f fVar = mediaItem.f11765e.f11857i;
        if (fVar != null && w0.f40711a >= 18) {
            synchronized (this.f49702a) {
                try {
                    if (!w0.c(fVar, this.f49703b)) {
                        this.f49703b = fVar;
                        this.f49704c = b(fVar);
                    }
                    vVar = (v) oe.a.e(this.f49704c);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return vVar;
        }
        return v.f49737a;
    }
}
