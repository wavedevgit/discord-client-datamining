package xd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import rd.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface k {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        k a(wd.g gVar, com.google.android.exoplayer2.upstream.i iVar, j jVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a();

        boolean c(Uri uri, i.c cVar, boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends IOException {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f54606d;

        public c(Uri uri) {
            this.f54606d = uri;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends IOException {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f54607d;

        public d(Uri uri) {
            this.f54607d = uri;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface e {
        void c(f fVar);
    }

    void a(Uri uri);

    void b(Uri uri, y.a aVar, e eVar);

    long c();

    g d();

    void e(b bVar);

    void f(Uri uri);

    void g(b bVar);

    boolean h(Uri uri);

    boolean j();

    boolean l(Uri uri, long j10);

    void m();

    f o(Uri uri, boolean z10);

    void stop();
}
