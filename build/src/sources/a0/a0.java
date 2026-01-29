package a0;

import a0.i2;
import android.graphics.Rect;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collections;
import java.util.List;
import x.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a0 extends x.j {

    /* renamed from: a  reason: collision with root package name */
    public static final a0 f5a = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements z.k {
        a() {
        }

        @Override // z.k
        public ListenableFuture a() {
            return d0.n.p(null);
        }

        @Override // z.k
        public ListenableFuture b() {
            return d0.n.p(null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends Exception {

        /* renamed from: d  reason: collision with root package name */
        private m f7d;

        public c(m mVar) {
            this.f7d = mVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface d {
        void a();

        void b(List list);
    }

    void b(i2.b bVar);

    ListenableFuture c(List list, int i10, int i11);

    Rect d();

    void f(int i10);

    r0 g();

    default ListenableFuture i(int i10, int i11) {
        return d0.n.p(new a());
    }

    void j();

    void k(r0 r0Var);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements a0 {
        b() {
        }

        @Override // x.j
        public ListenableFuture a(boolean z10) {
            return d0.n.p(null);
        }

        @Override // a0.a0
        public ListenableFuture c(List list, int i10, int i11) {
            return d0.n.p(Collections.EMPTY_LIST);
        }

        @Override // a0.a0
        public Rect d() {
            return new Rect();
        }

        @Override // a0.a0
        public r0 g() {
            return null;
        }

        @Override // x.j
        public ListenableFuture h(x.b0 b0Var) {
            return d0.n.p(x.c0.b());
        }

        @Override // a0.a0
        public void j() {
        }

        @Override // a0.a0
        public void b(i2.b bVar) {
        }

        @Override // a0.a0
        public void f(int i10) {
        }

        @Override // a0.a0
        public void k(r0 r0Var) {
        }
    }

    default void e(n0.i iVar) {
    }
}
