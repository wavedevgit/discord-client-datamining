package rc;

import android.net.Uri;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.d;
import java.util.Map;
import ne.w0;
import ni.t0;
import rc.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements x {

    /* renamed from: a  reason: collision with root package name */
    private final Object f48829a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private MediaItem.f f48830b;

    /* renamed from: c  reason: collision with root package name */
    private v f48831c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource.Factory f48832d;

    /* renamed from: e  reason: collision with root package name */
    private String f48833e;

    private v b(MediaItem.f fVar) {
        String uri;
        DataSource.Factory factory = this.f48832d;
        if (factory == null) {
            factory = new d.b().b(this.f48833e);
        }
        Uri uri2 = fVar.f11675i;
        if (uri2 == null) {
            uri = null;
        } else {
            uri = uri2.toString();
        }
        h0 h0Var = new h0(uri, fVar.f11680s, factory);
        t0 s10 = fVar.f11677p.entrySet().s();
        while (s10.hasNext()) {
            Map.Entry entry = (Map.Entry) s10.next();
            h0Var.e((String) entry.getKey(), (String) entry.getValue());
        }
        h a10 = new h.b().e(fVar.f11673d, g0.f48771d).b(fVar.f11678q).c(fVar.f11679r).d(pi.e.l(fVar.f11682u)).a(h0Var);
        a10.F(0, fVar.c());
        return a10;
    }

    @Override // rc.x
    public v a(MediaItem mediaItem) {
        v vVar;
        ne.a.e(mediaItem.f11625e);
        MediaItem.f fVar = mediaItem.f11625e.f11717i;
        if (fVar != null && w0.f39012a >= 18) {
            synchronized (this.f48829a) {
                try {
                    if (!w0.c(fVar, this.f48830b)) {
                        this.f48830b = fVar;
                        this.f48831c = b(fVar);
                    }
                    vVar = (v) ne.a.e(this.f48831c);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return vVar;
        }
        return v.f48864a;
    }
}
