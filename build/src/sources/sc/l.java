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
    private final Object f48018a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private MediaItem.f f48019b;

    /* renamed from: c  reason: collision with root package name */
    private v f48020c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource.Factory f48021d;

    /* renamed from: e  reason: collision with root package name */
    private String f48022e;

    private v b(MediaItem.f fVar) {
        String uri;
        DataSource.Factory factory = this.f48021d;
        if (factory == null) {
            factory = new d.b().b(this.f48022e);
        }
        Uri uri2 = fVar.f12392i;
        if (uri2 == null) {
            uri = null;
        } else {
            uri = uri2.toString();
        }
        h0 h0Var = new h0(uri, fVar.f12397s, factory);
        t0 s10 = fVar.f12394p.entrySet().s();
        while (s10.hasNext()) {
            Map.Entry entry = (Map.Entry) s10.next();
            h0Var.e((String) entry.getKey(), (String) entry.getValue());
        }
        h a10 = new h.b().e(fVar.f12390d, g0.f47960d).b(fVar.f12395q).c(fVar.f12396r).d(si.e.l(fVar.f12399u)).a(h0Var);
        a10.F(0, fVar.c());
        return a10;
    }

    @Override // sc.x
    public v a(MediaItem mediaItem) {
        v vVar;
        oe.a.e(mediaItem.f12342e);
        MediaItem.f fVar = mediaItem.f12342e.f12434i;
        if (fVar != null && w0.f39037a >= 18) {
            synchronized (this.f48018a) {
                try {
                    if (!w0.c(fVar, this.f48019b)) {
                        this.f48019b = fVar;
                        this.f48020c = b(fVar);
                    }
                    vVar = (v) oe.a.e(this.f48020c);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return vVar;
        }
        return v.f48053a;
    }
}
