package rc;

import android.net.Uri;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
import java.util.Map;
import ji.t0;
import ne.w0;
import rc.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements x {

    /* renamed from: a  reason: collision with root package name */
    private final Object f48227a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private MediaItem.f f48228b;

    /* renamed from: c  reason: collision with root package name */
    private v f48229c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource.Factory f48230d;

    /* renamed from: e  reason: collision with root package name */
    private String f48231e;

    private v b(MediaItem.f fVar) {
        String uri;
        DataSource.Factory factory = this.f48230d;
        if (factory == null) {
            factory = new DefaultHttpDataSource.Factory().b(this.f48231e);
        }
        Uri uri2 = fVar.f12794i;
        if (uri2 == null) {
            uri = null;
        } else {
            uri = uri2.toString();
        }
        h0 h0Var = new h0(uri, fVar.f12799s, factory);
        t0 q10 = fVar.f12796p.entrySet().q();
        while (q10.hasNext()) {
            Map.Entry entry = (Map.Entry) q10.next();
            h0Var.e((String) entry.getKey(), (String) entry.getValue());
        }
        h a10 = new h.b().e(fVar.f12792d, g0.f48169d).b(fVar.f12797q).c(fVar.f12798r).d(li.e.l(fVar.f12801u)).a(h0Var);
        a10.F(0, fVar.c());
        return a10;
    }

    @Override // rc.x
    public v a(MediaItem mediaItem) {
        v vVar;
        ne.a.e(mediaItem.f12744e);
        MediaItem.f fVar = mediaItem.f12744e.f12836i;
        if (fVar != null && w0.f40295a >= 18) {
            synchronized (this.f48227a) {
                try {
                    if (!w0.c(fVar, this.f48228b)) {
                        this.f48228b = fVar;
                        this.f48229c = b(fVar);
                    }
                    vVar = (v) ne.a.e(this.f48229c);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return vVar;
        }
        return v.f48262a;
    }
}
