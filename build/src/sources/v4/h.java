package v4;

import android.content.Context;
import as.l;
import e5.c;
import j5.a;
import j5.c;
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
        private final Context f51915a;

        /* renamed from: b  reason: collision with root package name */
        private g5.c f51916b = k5.i.b();

        /* renamed from: c  reason: collision with root package name */
        private Lazy f51917c = null;

        /* renamed from: d  reason: collision with root package name */
        private Lazy f51918d = null;

        /* renamed from: e  reason: collision with root package name */
        private Lazy f51919e = null;

        /* renamed from: f  reason: collision with root package name */
        private c.InterfaceC0708c f51920f = null;

        /* renamed from: g  reason: collision with root package name */
        private b f51921g = null;

        /* renamed from: h  reason: collision with root package name */
        private q f51922h = new q(false, false, false, 0, null, 31, null);

        public a(Context context) {
            this.f51915a = context.getApplicationContext();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final e5.c e(a aVar) {
            return new c.a(aVar.f51915a).a();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final y4.a f(a aVar) {
            return u.f32149a.a(aVar.f51915a);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final OkHttpClient g() {
            return new OkHttpClient();
        }

        public final h d() {
            Context context = this.f51915a;
            g5.c cVar = this.f51916b;
            Lazy lazy = this.f51917c;
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
            Lazy lazy2 = this.f51918d;
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
            Lazy lazy3 = this.f51919e;
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
            c.InterfaceC0708c interfaceC0708c = this.f51920f;
            if (interfaceC0708c == null) {
                interfaceC0708c = c.InterfaceC0708c.f51911b;
            }
            b bVar = this.f51921g;
            if (bVar == null) {
                bVar = new b();
            }
            return new j(context, cVar, lazy, lazy2, lazy3, interfaceC0708c, bVar, this.f51922h, null);
        }

        public final a h(b bVar) {
            this.f51921g = bVar;
            return this;
        }

        public final a i(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0416a(i10, false, 2, null);
            } else {
                aVar = c.a.f31403b;
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
            this.f51918d = l.c(aVar);
            return this;
        }

        public final a l(c.a aVar) {
            this.f51916b = g5.c.b(this.f51916b, null, null, null, null, aVar, null, null, false, false, null, null, null, null, null, null, 32751, null);
            return this;
        }
    }

    g5.e a(g5.h hVar);

    e5.c b();

    b getComponents();

    void shutdown();
}
