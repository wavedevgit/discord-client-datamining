package qd;

import android.os.Handler;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import qd.r;
import qd.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f46899a;

        /* renamed from: b  reason: collision with root package name */
        public final r.b f46900b;

        /* renamed from: c  reason: collision with root package name */
        private final CopyOnWriteArrayList f46901c;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: qd.y$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0602a {

            /* renamed from: a  reason: collision with root package name */
            public Handler f46902a;

            /* renamed from: b  reason: collision with root package name */
            public y f46903b;

            public C0602a(Handler handler, y yVar) {
                this.f46902a = handler;
                this.f46903b = yVar;
            }
        }

        public a() {
            this(new CopyOnWriteArrayList(), 0, null);
        }

        public void g(Handler handler, y yVar) {
            ne.a.e(handler);
            ne.a.e(yVar);
            this.f46901c.add(new C0602a(handler, yVar));
        }

        public void h(int i10, Format format, int i11, Object obj, long j10) {
            i(new MediaLoadData(1, i10, format, i11, obj, ne.w0.p1(j10), -9223372036854775807L));
        }

        public void i(final MediaLoadData mediaLoadData) {
            Iterator it = this.f46901c.iterator();
            while (it.hasNext()) {
                C0602a c0602a = (C0602a) it.next();
                final y yVar = c0602a.f46903b;
                ne.w0.T0(c0602a.f46902a, new Runnable() { // from class: qd.x
                    @Override // java.lang.Runnable
                    public final void run() {
                        yVar.g(r0.f46899a, y.a.this.f46900b, mediaLoadData);
                    }
                });
            }
        }

        public void j(LoadEventInfo loadEventInfo, int i10) {
            k(loadEventInfo, i10, -1, null, 0, null, -9223372036854775807L, -9223372036854775807L);
        }

        public void k(LoadEventInfo loadEventInfo, int i10, int i11, Format format, int i12, Object obj, long j10, long j11) {
            l(loadEventInfo, new MediaLoadData(i10, i11, format, i12, obj, ne.w0.p1(j10), ne.w0.p1(j11)));
        }

        public void l(final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            Iterator it = this.f46901c.iterator();
            while (it.hasNext()) {
                C0602a c0602a = (C0602a) it.next();
                final y yVar = c0602a.f46903b;
                ne.w0.T0(c0602a.f46902a, new Runnable() { // from class: qd.u
                    @Override // java.lang.Runnable
                    public final void run() {
                        yVar.G(r0.f46899a, y.a.this.f46900b, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        public void m(LoadEventInfo loadEventInfo, int i10) {
            n(loadEventInfo, i10, -1, null, 0, null, -9223372036854775807L, -9223372036854775807L);
        }

        public void n(LoadEventInfo loadEventInfo, int i10, int i11, Format format, int i12, Object obj, long j10, long j11) {
            o(loadEventInfo, new MediaLoadData(i10, i11, format, i12, obj, ne.w0.p1(j10), ne.w0.p1(j11)));
        }

        public void o(final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            Iterator it = this.f46901c.iterator();
            while (it.hasNext()) {
                C0602a c0602a = (C0602a) it.next();
                final y yVar = c0602a.f46903b;
                ne.w0.T0(c0602a.f46902a, new Runnable() { // from class: qd.s
                    @Override // java.lang.Runnable
                    public final void run() {
                        yVar.H(r0.f46899a, y.a.this.f46900b, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        public void p(LoadEventInfo loadEventInfo, int i10, int i11, Format format, int i12, Object obj, long j10, long j11, IOException iOException, boolean z10) {
            r(loadEventInfo, new MediaLoadData(i10, i11, format, i12, obj, ne.w0.p1(j10), ne.w0.p1(j11)), iOException, z10);
        }

        public void q(LoadEventInfo loadEventInfo, int i10, IOException iOException, boolean z10) {
            p(loadEventInfo, i10, -1, null, 0, null, -9223372036854775807L, -9223372036854775807L, iOException, z10);
        }

        public void r(final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
            Iterator it = this.f46901c.iterator();
            while (it.hasNext()) {
                C0602a c0602a = (C0602a) it.next();
                final y yVar = c0602a.f46903b;
                ne.w0.T0(c0602a.f46902a, new Runnable() { // from class: qd.t
                    @Override // java.lang.Runnable
                    public final void run() {
                        yVar.t(r0.f46899a, y.a.this.f46900b, loadEventInfo, mediaLoadData, iOException, z10);
                    }
                });
            }
        }

        public void s(LoadEventInfo loadEventInfo, int i10) {
            t(loadEventInfo, i10, -1, null, 0, null, -9223372036854775807L, -9223372036854775807L);
        }

        public void t(LoadEventInfo loadEventInfo, int i10, int i11, Format format, int i12, Object obj, long j10, long j11) {
            u(loadEventInfo, new MediaLoadData(i10, i11, format, i12, obj, ne.w0.p1(j10), ne.w0.p1(j11)));
        }

        public void u(final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            Iterator it = this.f46901c.iterator();
            while (it.hasNext()) {
                C0602a c0602a = (C0602a) it.next();
                final y yVar = c0602a.f46903b;
                ne.w0.T0(c0602a.f46902a, new Runnable() { // from class: qd.v
                    @Override // java.lang.Runnable
                    public final void run() {
                        yVar.C(r0.f46899a, y.a.this.f46900b, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        public void v(y yVar) {
            Iterator it = this.f46901c.iterator();
            while (it.hasNext()) {
                C0602a c0602a = (C0602a) it.next();
                if (c0602a.f46903b == yVar) {
                    this.f46901c.remove(c0602a);
                }
            }
        }

        public void w(int i10, long j10, long j11) {
            x(new MediaLoadData(1, i10, null, 3, null, ne.w0.p1(j10), ne.w0.p1(j11)));
        }

        public void x(final MediaLoadData mediaLoadData) {
            final r.b bVar = (r.b) ne.a.e(this.f46900b);
            Iterator it = this.f46901c.iterator();
            while (it.hasNext()) {
                C0602a c0602a = (C0602a) it.next();
                final y yVar = c0602a.f46903b;
                ne.w0.T0(c0602a.f46902a, new Runnable() { // from class: qd.w
                    @Override // java.lang.Runnable
                    public final void run() {
                        yVar.D(y.a.this.f46899a, bVar, mediaLoadData);
                    }
                });
            }
        }

        public a y(int i10, r.b bVar) {
            return new a(this.f46901c, i10, bVar);
        }

        private a(CopyOnWriteArrayList copyOnWriteArrayList, int i10, r.b bVar) {
            this.f46901c = copyOnWriteArrayList;
            this.f46899a = i10;
            this.f46900b = bVar;
        }
    }

    void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData);

    void D(int i10, r.b bVar, MediaLoadData mediaLoadData);

    void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData);

    void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData);

    void g(int i10, r.b bVar, MediaLoadData mediaLoadData);

    void t(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10);
}
