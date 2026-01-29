package qd;

import android.os.Handler;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import mc.t1;
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

    void a(c cVar);

    void c(p pVar);

    void d(rc.u uVar);

    void e(Handler handler, rc.u uVar);

    MediaItem f();

    void g(Handler handler, y yVar);

    p h(b bVar, le.b bVar2, long j10);

    void k(y yVar);

    void m(c cVar);

    void o();

    default boolean p() {
        return true;
    }

    default Timeline q() {
        return null;
    }

    void r(c cVar, le.c0 c0Var, t1 t1Var);

    void s(c cVar);
}
