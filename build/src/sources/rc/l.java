package rc;

import android.net.Uri;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
import java.util.Map;
import mi.t0;
import ne.w0;
import rc.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements x {

    /* renamed from: a  reason: collision with root package name */
    private final Object f48745a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private MediaItem.f f48746b;

    /* renamed from: c  reason: collision with root package name */
    private v f48747c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource.Factory f48748d;

    /* renamed from: e  reason: collision with root package name */
    private String f48749e;

    private v b(MediaItem.f fVar) {
        String uri;
        DataSource.Factory factory = this.f48748d;
        if (factory == null) {
            factory = new DefaultHttpDataSource.Factory().b(this.f48749e);
        }
        Uri uri2 = fVar.f11776i;
        if (uri2 == null) {
            uri = null;
        } else {
            uri = uri2.toString();
        }
        h0 h0Var = new h0(uri, fVar.f11781s, factory);
        t0 r10 = fVar.f11778p.entrySet().r();
        while (r10.hasNext()) {
            Map.Entry entry = (Map.Entry) r10.next();
            h0Var.e((String) entry.getKey(), (String) entry.getValue());
        }
        h a10 = new h.b().e(fVar.f11774d, g0.f48687d).b(fVar.f11779q).c(fVar.f11780r).d(oi.e.l(fVar.f11783u)).a(h0Var);
        a10.F(0, fVar.c());
        return a10;
    }

    @Override // rc.x
    public v a(MediaItem mediaItem) {
        v vVar;
        ne.a.e(mediaItem.f11726e);
        MediaItem.f fVar = mediaItem.f11726e.f11818i;
        if (fVar != null && w0.f39657a >= 18) {
            synchronized (this.f48745a) {
                try {
                    if (!w0.c(fVar, this.f48746b)) {
                        this.f48746b = fVar;
                        this.f48747c = b(fVar);
                    }
                    vVar = (v) ne.a.e(this.f48747c);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return vVar;
        }
        return v.f48780a;
    }
}
