package rd;

import android.os.Handler;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import nc.t1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface r {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends q {
        public b(Object obj) {
            super(obj);
        }

        public b c(Object obj) {
            return new b(super.a(obj));
        }

        public b(Object obj, long j10) {
            super(obj, j10);
        }

        public b(Object obj, long j10, int i10) {
            super(obj, j10, i10);
        }

        public b(Object obj, int i10, int i11, long j10) {
            super(obj, i10, i11, j10);
        }

        public b(q qVar) {
            super(qVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        void a(r rVar, Timeline timeline);
    }

    void a(p pVar);

    void b(Handler handler, sc.u uVar);

    MediaItem d();

    void e(c cVar);

    p f(b bVar, me.b bVar2, long j10);

    void g(c cVar, me.c0 c0Var, t1 t1Var);

    void h(y yVar);

    void j(Handler handler, y yVar);

    void l(sc.u uVar);

    void m(c cVar);

    void p(c cVar);

    void q();

    default boolean r() {
        return true;
    }

    default Timeline s() {
        return null;
    }
}
