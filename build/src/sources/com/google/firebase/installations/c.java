package com.google.firebase.installations;

import android.text.TextUtils;
import com.google.android.gms.tasks.Task;
import com.google.firebase.installations.d;
import hf.q;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
import jj.d;
import jj.f;
import vi.w;
import zg.k;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements hj.e {

    /* renamed from: m  reason: collision with root package name */
    private static final Object f16471m = new Object();

    /* renamed from: n  reason: collision with root package name */
    private static final ThreadFactory f16472n = new a();

    /* renamed from: a  reason: collision with root package name */
    private final si.e f16473a;

    /* renamed from: b  reason: collision with root package name */
    private final jj.c f16474b;

    /* renamed from: c  reason: collision with root package name */
    private final ij.c f16475c;

    /* renamed from: d  reason: collision with root package name */
    private final i f16476d;

    /* renamed from: e  reason: collision with root package name */
    private final w f16477e;

    /* renamed from: f  reason: collision with root package name */
    private final hj.g f16478f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f16479g;

    /* renamed from: h  reason: collision with root package name */
    private final ExecutorService f16480h;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f16481i;

    /* renamed from: j  reason: collision with root package name */
    private String f16482j;

    /* renamed from: k  reason: collision with root package name */
    private Set f16483k;

    /* renamed from: l  reason: collision with root package name */
    private final List f16484l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicInteger f16485a = new AtomicInteger(1);

        a() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            return new Thread(runnable, String.format("firebase-installations-executor-%d", Integer.valueOf(this.f16485a.getAndIncrement())));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16486a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f16487b;

        static {
            int[] iArr = new int[f.b.values().length];
            f16487b = iArr;
            try {
                iArr[f.b.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16487b[f.b.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16487b[f.b.AUTH_ERROR.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[d.b.values().length];
            f16486a = iArr2;
            try {
                iArr2[d.b.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f16486a[d.b.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(final si.e eVar, gj.b bVar, ExecutorService executorService, Executor executor) {
        this(executorService, executor, eVar, new jj.c(eVar.j(), bVar), new ij.c(eVar), i.c(), new w(new gj.b() { // from class: hj.a
            @Override // gj.b
            public final Object get() {
                return com.google.firebase.installations.c.e(si.e.this);
            }
        }), new hj.g());
    }

    private synchronized void A(ij.d dVar, ij.d dVar2) {
        if (this.f16483k.size() != 0 && !TextUtils.equals(dVar.d(), dVar2.d())) {
            Iterator it = this.f16483k.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                dVar2.d();
                throw null;
            }
        }
    }

    public static /* synthetic */ ij.b e(si.e eVar) {
        return new ij.b(eVar);
    }

    private Task f() {
        k kVar = new k();
        h(new e(this.f16476d, kVar));
        return kVar.a();
    }

    private Task g() {
        k kVar = new k();
        h(new f(kVar));
        return kVar.a();
    }

    private void h(h hVar) {
        synchronized (this.f16479g) {
            this.f16484l.add(hVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0034  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0041  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x004c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void i(boolean r3) {
        /*
            r2 = this;
            ij.d r0 = r2.q()
            boolean r1 = r0.i()     // Catch: com.google.firebase.installations.d -> L1d
            if (r1 != 0) goto L24
            boolean r1 = r0.l()     // Catch: com.google.firebase.installations.d -> L1d
            if (r1 == 0) goto L11
            goto L24
        L11:
            if (r3 != 0) goto L1f
            com.google.firebase.installations.i r3 = r2.f16476d     // Catch: com.google.firebase.installations.d -> L1d
            boolean r3 = r3.f(r0)     // Catch: com.google.firebase.installations.d -> L1d
            if (r3 == 0) goto L1c
            goto L1f
        L1c:
            return
        L1d:
            r3 = move-exception
            goto L61
        L1f:
            ij.d r3 = r2.k(r0)     // Catch: com.google.firebase.installations.d -> L1d
            goto L28
        L24:
            ij.d r3 = r2.w(r0)     // Catch: com.google.firebase.installations.d -> L1d
        L28:
            r2.t(r3)
            r2.A(r0, r3)
            boolean r0 = r3.k()
            if (r0 == 0) goto L3b
            java.lang.String r0 = r3.d()
            r2.z(r0)
        L3b:
            boolean r0 = r3.i()
            if (r0 == 0) goto L4c
            com.google.firebase.installations.d r3 = new com.google.firebase.installations.d
            com.google.firebase.installations.d$a r0 = com.google.firebase.installations.d.a.BAD_CONFIG
            r3.<init>(r0)
            r2.x(r3)
            return
        L4c:
            boolean r0 = r3.j()
            if (r0 == 0) goto L5d
            java.io.IOException r3 = new java.io.IOException
            java.lang.String r0 = "Installation ID could not be validated with the Firebase servers (maybe it was deleted). Firebase Installations will need to create a new Installation ID and auth token. Please retry your last request."
            r3.<init>(r0)
            r2.x(r3)
            return
        L5d:
            r2.y(r3)
            return
        L61:
            r2.x(r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.firebase.installations.c.i(boolean):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void j(final boolean z10) {
        ij.d r10 = r();
        if (z10) {
            r10 = r10.p();
        }
        y(r10);
        this.f16481i.execute(new Runnable() { // from class: hj.c
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.i(z10);
            }
        });
    }

    private ij.d k(ij.d dVar) {
        jj.f e10 = this.f16474b.e(l(), dVar.d(), s(), dVar.f());
        int i10 = b.f16487b[e10.b().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    z(null);
                    return dVar.r();
                }
                throw new d("Firebase Installations Service is unavailable. Please try again later.", d.a.UNAVAILABLE);
            }
            return dVar.q("BAD CONFIG");
        }
        return dVar.o(e10.c(), e10.d(), this.f16476d.b());
    }

    private synchronized String n() {
        return this.f16482j;
    }

    private ij.b o() {
        return (ij.b) this.f16477e.get();
    }

    public static c p(si.e eVar) {
        boolean z10;
        if (eVar != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        q.b(z10, "Null is not a valid value of FirebaseApp.");
        return (c) eVar.i(hj.e.class);
    }

    private ij.d q() {
        ij.d d10;
        synchronized (f16471m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f16473a.j(), "generatefid.lock");
                d10 = this.f16475c.d();
                if (a10 != null) {
                    a10.b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return d10;
    }

    private ij.d r() {
        ij.d d10;
        synchronized (f16471m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f16473a.j(), "generatefid.lock");
                d10 = this.f16475c.d();
                if (d10.j()) {
                    d10 = this.f16475c.b(d10.t(v(d10)));
                }
                if (a10 != null) {
                    a10.b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return d10;
    }

    private void t(ij.d dVar) {
        synchronized (f16471m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f16473a.j(), "generatefid.lock");
                this.f16475c.b(dVar);
                if (a10 != null) {
                    a10.b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void u() {
        q.g(m(), "Please set your Application ID. A valid Firebase App ID is required to communicate with Firebase server APIs: It identifies your application with Firebase.Please refer to https://firebase.google.com/support/privacy/init-options.");
        q.g(s(), "Please set your Project ID. A valid Firebase Project ID is required to communicate with Firebase server APIs: It identifies your application with Firebase.Please refer to https://firebase.google.com/support/privacy/init-options.");
        q.g(l(), "Please set a valid API key. A Firebase API key is required to communicate with Firebase server APIs: It authenticates your project with Google.Please refer to https://firebase.google.com/support/privacy/init-options.");
        q.b(i.h(m()), "Please set your Application ID. A valid Firebase App ID is required to communicate with Firebase server APIs: It identifies your application with Firebase.Please refer to https://firebase.google.com/support/privacy/init-options.");
        q.b(i.g(l()), "Please set a valid API key. A Firebase API key is required to communicate with Firebase server APIs: It authenticates your project with Google.Please refer to https://firebase.google.com/support/privacy/init-options.");
    }

    private String v(ij.d dVar) {
        if ((!this.f16473a.l().equals("CHIME_ANDROID_SDK") && !this.f16473a.t()) || !dVar.m()) {
            return this.f16478f.a();
        }
        String f10 = o().f();
        if (TextUtils.isEmpty(f10)) {
            return this.f16478f.a();
        }
        return f10;
    }

    private ij.d w(ij.d dVar) {
        String str;
        if (dVar.d() != null && dVar.d().length() == 11) {
            str = o().i();
        } else {
            str = null;
        }
        jj.d d10 = this.f16474b.d(l(), dVar.d(), s(), m(), str);
        int i10 = b.f16486a[d10.e().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return dVar.q("BAD CONFIG");
            }
            throw new d("Firebase Installations Service is unavailable. Please try again later.", d.a.UNAVAILABLE);
        }
        return dVar.s(d10.c(), d10.d(), this.f16476d.b(), d10.b().c(), d10.b().d());
    }

    private void x(Exception exc) {
        synchronized (this.f16479g) {
            try {
                Iterator it = this.f16484l.iterator();
                while (it.hasNext()) {
                    if (((h) it.next()).a(exc)) {
                        it.remove();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void y(ij.d dVar) {
        synchronized (this.f16479g) {
            try {
                Iterator it = this.f16484l.iterator();
                while (it.hasNext()) {
                    if (((h) it.next()).b(dVar)) {
                        it.remove();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private synchronized void z(String str) {
        this.f16482j = str;
    }

    @Override // hj.e
    public Task a(final boolean z10) {
        u();
        Task f10 = f();
        this.f16480h.execute(new Runnable() { // from class: hj.d
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.j(z10);
            }
        });
        return f10;
    }

    @Override // hj.e
    public Task getId() {
        u();
        String n10 = n();
        if (n10 != null) {
            return m.f(n10);
        }
        Task g10 = g();
        this.f16480h.execute(new Runnable() { // from class: hj.b
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.j(false);
            }
        });
        return g10;
    }

    String l() {
        return this.f16473a.m().b();
    }

    String m() {
        return this.f16473a.m().c();
    }

    String s() {
        return this.f16473a.m().e();
    }

    c(ExecutorService executorService, Executor executor, si.e eVar, jj.c cVar, ij.c cVar2, i iVar, w wVar, hj.g gVar) {
        this.f16479g = new Object();
        this.f16483k = new HashSet();
        this.f16484l = new ArrayList();
        this.f16473a = eVar;
        this.f16474b = cVar;
        this.f16475c = cVar2;
        this.f16476d = iVar;
        this.f16477e = wVar;
        this.f16478f = gVar;
        this.f16480h = executorService;
        this.f16481i = executor;
    }
}
