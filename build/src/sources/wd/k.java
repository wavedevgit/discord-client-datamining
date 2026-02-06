package wd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import qd.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface k {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        k a(vd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a();

        boolean c(Uri uri, i.c cVar, boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends IOException {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f53663d;

        public c(Uri uri) {
            this.f53663d = uri;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends IOException {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f53664d;

        public d(Uri uri) {
            this.f53664d = uri;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface e {
        void b(f fVar);
    }

    void a(Uri uri, y.a aVar, e eVar);

    void b(Uri uri);

    long c();

    g d();

    void e(Uri uri);

    void f(b bVar);

    boolean g(Uri uri);

    boolean h();

    boolean k(Uri uri, long j10);

    void l();

    f m(Uri uri, boolean z10);

    void o(b bVar);

    void stop();
}
