package sc;

import android.net.Uri;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.d;
import java.util.Map;
import oe.w0;
import qi.t0;
import sc.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements x {

    /* renamed from: a  reason: collision with root package name */
    private final Object f48019a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private MediaItem.f f48020b;

    /* renamed from: c  reason: collision with root package name */
    private v f48021c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource.Factory f48022d;

    /* renamed from: e  reason: collision with root package name */
    private String f48023e;

    private v b(MediaItem.f fVar) {
        String uri;
        DataSource.Factory factory = this.f48022d;
        if (factory == null) {
            factory = new d.b().b(this.f48023e);
        }
        Uri uri2 = fVar.f12393i;
        if (uri2 == null) {
            uri = null;
        } else {
            uri = uri2.toString();
        }
        h0 h0Var = new h0(uri, fVar.f12398s, factory);
        t0 s10 = fVar.f12395p.entrySet().s();
        while (s10.hasNext()) {
            Map.Entry entry = (Map.Entry) s10.next();
            h0Var.e((String) entry.getKey(), (String) entry.getValue());
        }
        h a10 = new h.b().e(fVar.f12391d, g0.f47961d).b(fVar.f12396q).c(fVar.f12397r).d(si.e.l(fVar.f12400u)).a(h0Var);
        a10.F(0, fVar.c());
        return a10;
    }

    @Override // sc.x
    public v a(MediaItem mediaItem) {
        v vVar;
        oe.a.e(mediaItem.f12343e);
        MediaItem.f fVar = mediaItem.f12343e.f12435i;
        if (fVar != null && w0.f39038a >= 18) {
            synchronized (this.f48019a) {
                try {
                    if (!w0.c(fVar, this.f48020b)) {
                        this.f48020b = fVar;
                        this.f48021c = b(fVar);
                    }
                    vVar = (v) oe.a.e(this.f48021c);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return vVar;
        }
        return v.f48054a;
    }
}
