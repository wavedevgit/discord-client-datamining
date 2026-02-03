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
    private final Object f48429a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private MediaItem.f f48430b;

    /* renamed from: c  reason: collision with root package name */
    private v f48431c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource.Factory f48432d;

    /* renamed from: e  reason: collision with root package name */
    private String f48433e;

    private v b(MediaItem.f fVar) {
        String uri;
        DataSource.Factory factory = this.f48432d;
        if (factory == null) {
            factory = new DefaultHttpDataSource.Factory().b(this.f48433e);
        }
        Uri uri2 = fVar.f12423i;
        if (uri2 == null) {
            uri = null;
        } else {
            uri = uri2.toString();
        }
        h0 h0Var = new h0(uri, fVar.f12428s, factory);
        t0 q10 = fVar.f12425p.entrySet().q();
        while (q10.hasNext()) {
            Map.Entry entry = (Map.Entry) q10.next();
            h0Var.e((String) entry.getKey(), (String) entry.getValue());
        }
        h a10 = new h.b().e(fVar.f12421d, g0.f48371d).b(fVar.f12426q).c(fVar.f12427r).d(li.e.l(fVar.f12430u)).a(h0Var);
        a10.F(0, fVar.c());
        return a10;
    }

    @Override // rc.x
    public v a(MediaItem mediaItem) {
        v vVar;
        ne.a.e(mediaItem.f12373e);
        MediaItem.f fVar = mediaItem.f12373e.f12465i;
        if (fVar != null && w0.f40158a >= 18) {
            synchronized (this.f48429a) {
                try {
                    if (!w0.c(fVar, this.f48430b)) {
                        this.f48430b = fVar;
                        this.f48431c = b(fVar);
                    }
                    vVar = (v) ne.a.e(this.f48431c);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return vVar;
        }
        return v.f48464a;
    }
}
