package v4;

import android.content.Context;
import e5.c;
import j5.a;
import j5.c;
import jr.l;
import k5.q;
import k5.u;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import okhttp3.OkHttpClient;
import v4.c;
import v4.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Context f50756a;

        /* renamed from: b  reason: collision with root package name */
        private g5.c f50757b = k5.i.b();

        /* renamed from: c  reason: collision with root package name */
        private Lazy f50758c = null;

        /* renamed from: d  reason: collision with root package name */
        private Lazy f50759d = null;

        /* renamed from: e  reason: collision with root package name */
        private Lazy f50760e = null;

        /* renamed from: f  reason: collision with root package name */
        private c.InterfaceC0680c f50761f = null;

        /* renamed from: g  reason: collision with root package name */
        private b f50762g = null;

        /* renamed from: h  reason: collision with root package name */
        private q f50763h = new q(false, false, false, 0, null, 31, null);

        public a(Context context) {
            this.f50756a = context.getApplicationContext();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final e5.c e(a aVar) {
            return new c.a(aVar.f50756a).a();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final y4.a f(a aVar) {
            return u.f32801a.a(aVar.f50756a);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final OkHttpClient g() {
            return new OkHttpClient();
        }

        public final h d() {
            Context context = this.f50756a;
            g5.c cVar = this.f50757b;
            Lazy lazy = this.f50758c;
            if (lazy == null) {
                lazy = l.b(new Function0() { // from class: v4.e
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        e5.c e10;
                        e10 = h.a.e(h.a.this);
                        return e10;
                    }
                });
            }
            Lazy lazy2 = this.f50759d;
            if (lazy2 == null) {
                lazy2 = l.b(new Function0() { // from class: v4.f
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        y4.a f10;
                        f10 = h.a.f(h.a.this);
                        return f10;
                    }
                });
            }
            Lazy lazy3 = this.f50760e;
            if (lazy3 == null) {
                lazy3 = l.b(new Function0() { // from class: v4.g
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        OkHttpClient g10;
                        g10 = h.a.g();
                        return g10;
                    }
                });
            }
            c.InterfaceC0680c interfaceC0680c = this.f50761f;
            if (interfaceC0680c == null) {
                interfaceC0680c = c.InterfaceC0680c.f50752b;
            }
            b bVar = this.f50762g;
            if (bVar == null) {
                bVar = new b();
            }
            return new j(context, cVar, lazy, lazy2, lazy3, interfaceC0680c, bVar, this.f50763h, null);
        }

        public final a h(b bVar) {
            this.f50762g = bVar;
            return this;
        }

        public final a i(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0422a(i10, false, 2, null);
            } else {
                aVar = c.a.f31614b;
            }
            l(aVar);
            return this;
        }

        public final a j(boolean z10) {
            int i10;
            if (z10) {
                i10 = 100;
            } else {
                i10 = 0;
            }
            return i(i10);
        }

        public final a k(y4.a aVar) {
            this.f50759d = l.c(aVar);
            return this;
        }

        public final a l(c.a aVar) {
            this.f50757b = g5.c.b(this.f50757b, null, null, null, null, aVar, null, null, false, false, null, null, null, null, null, null, 32751, null);
            return this;
        }
    }

    g5.e a(g5.h hVar);

    e5.c b();

    b getComponents();

    void shutdown();
}
