package com.google.firebase.installations;

import android.text.TextUtils;
import com.google.android.gms.tasks.Task;
import com.google.firebase.installations.d;
import ej.d;
import ej.f;
import gf.q;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
import qi.w;
import wg.k;
import wg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements cj.e {

    /* renamed from: m  reason: collision with root package name */
    private static final Object f15957m = new Object();

    /* renamed from: n  reason: collision with root package name */
    private static final ThreadFactory f15958n = new a();

    /* renamed from: a  reason: collision with root package name */
    private final ni.e f15959a;

    /* renamed from: b  reason: collision with root package name */
    private final ej.c f15960b;

    /* renamed from: c  reason: collision with root package name */
    private final dj.c f15961c;

    /* renamed from: d  reason: collision with root package name */
    private final i f15962d;

    /* renamed from: e  reason: collision with root package name */
    private final w f15963e;

    /* renamed from: f  reason: collision with root package name */
    private final cj.g f15964f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f15965g;

    /* renamed from: h  reason: collision with root package name */
    private final ExecutorService f15966h;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f15967i;

    /* renamed from: j  reason: collision with root package name */
    private String f15968j;

    /* renamed from: k  reason: collision with root package name */
    private Set f15969k;

    /* renamed from: l  reason: collision with root package name */
    private final List f15970l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicInteger f15971a = new AtomicInteger(1);

        a() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            return new Thread(runnable, String.format("firebase-installations-executor-%d", Integer.valueOf(this.f15971a.getAndIncrement())));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f15972a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f15973b;

        static {
            int[] iArr = new int[f.b.values().length];
            f15973b = iArr;
            try {
                iArr[f.b.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f15973b[f.b.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f15973b[f.b.AUTH_ERROR.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[d.b.values().length];
            f15972a = iArr2;
            try {
                iArr2[d.b.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f15972a[d.b.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(final ni.e eVar, bj.b bVar, ExecutorService executorService, Executor executor) {
        this(executorService, executor, eVar, new ej.c(eVar.j(), bVar), new dj.c(eVar), i.c(), new w(new bj.b() { // from class: cj.a
            @Override // bj.b
            public final Object get() {
                return com.google.firebase.installations.c.e(ni.e.this);
            }
        }), new cj.g());
    }

    private synchronized void A(dj.d dVar, dj.d dVar2) {
        if (this.f15969k.size() != 0 && !TextUtils.equals(dVar.d(), dVar2.d())) {
            Iterator it = this.f15969k.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                dVar2.d();
                throw null;
            }
        }
    }

    public static /* synthetic */ dj.b e(ni.e eVar) {
        return new dj.b(eVar);
    }

    private Task f() {
        k kVar = new k();
        h(new e(this.f15962d, kVar));
        return kVar.a();
    }

    private Task g() {
        k kVar = new k();
        h(new f(kVar));
        return kVar.a();
    }

    private void h(h hVar) {
        synchronized (this.f15965g) {
            this.f15970l.add(hVar);
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
            dj.d r0 = r2.q()
            boolean r1 = r0.i()     // Catch: com.google.firebase.installations.d -> L1d
            if (r1 != 0) goto L24
            boolean r1 = r0.l()     // Catch: com.google.firebase.installations.d -> L1d
            if (r1 == 0) goto L11
            goto L24
        L11:
            if (r3 != 0) goto L1f
            com.google.firebase.installations.i r3 = r2.f15962d     // Catch: com.google.firebase.installations.d -> L1d
            boolean r3 = r3.f(r0)     // Catch: com.google.firebase.installations.d -> L1d
            if (r3 == 0) goto L1c
            goto L1f
        L1c:
            return
        L1d:
            r3 = move-exception
            goto L61
        L1f:
            dj.d r3 = r2.k(r0)     // Catch: com.google.firebase.installations.d -> L1d
            goto L28
        L24:
            dj.d r3 = r2.w(r0)     // Catch: com.google.firebase.installations.d -> L1d
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
        dj.d r10 = r();
        if (z10) {
            r10 = r10.p();
        }
        y(r10);
        this.f15967i.execute(new Runnable() { // from class: cj.c
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.i(z10);
            }
        });
    }

    private dj.d k(dj.d dVar) {
        ej.f e10 = this.f15960b.e(l(), dVar.d(), s(), dVar.f());
        int i10 = b.f15973b[e10.b().ordinal()];
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
        return dVar.o(e10.c(), e10.d(), this.f15962d.b());
    }

    private synchronized String n() {
        return this.f15968j;
    }

    private dj.b o() {
        return (dj.b) this.f15963e.get();
    }

    public static c p(ni.e eVar) {
        boolean z10;
        if (eVar != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        q.b(z10, "Null is not a valid value of FirebaseApp.");
        return (c) eVar.i(cj.e.class);
    }

    private dj.d q() {
        dj.d d10;
        synchronized (f15957m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f15959a.j(), "generatefid.lock");
                d10 = this.f15961c.d();
                if (a10 != null) {
                    a10.b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return d10;
    }

    private dj.d r() {
        dj.d d10;
        synchronized (f15957m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f15959a.j(), "generatefid.lock");
                d10 = this.f15961c.d();
                if (d10.j()) {
                    d10 = this.f15961c.b(d10.t(v(d10)));
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

    private void t(dj.d dVar) {
        synchronized (f15957m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f15959a.j(), "generatefid.lock");
                this.f15961c.b(dVar);
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

    private String v(dj.d dVar) {
        if ((!this.f15959a.l().equals("CHIME_ANDROID_SDK") && !this.f15959a.t()) || !dVar.m()) {
            return this.f15964f.a();
        }
        String f10 = o().f();
        if (TextUtils.isEmpty(f10)) {
            return this.f15964f.a();
        }
        return f10;
    }

    private dj.d w(dj.d dVar) {
        String str;
        if (dVar.d() != null && dVar.d().length() == 11) {
            str = o().i();
        } else {
            str = null;
        }
        ej.d d10 = this.f15960b.d(l(), dVar.d(), s(), m(), str);
        int i10 = b.f15972a[d10.e().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return dVar.q("BAD CONFIG");
            }
            throw new d("Firebase Installations Service is unavailable. Please try again later.", d.a.UNAVAILABLE);
        }
        return dVar.s(d10.c(), d10.d(), this.f15962d.b(), d10.b().c(), d10.b().d());
    }

    private void x(Exception exc) {
        synchronized (this.f15965g) {
            try {
                Iterator it = this.f15970l.iterator();
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

    private void y(dj.d dVar) {
        synchronized (this.f15965g) {
            try {
                Iterator it = this.f15970l.iterator();
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
        this.f15968j = str;
    }

    @Override // cj.e
    public Task a(final boolean z10) {
        u();
        Task f10 = f();
        this.f15966h.execute(new Runnable() { // from class: cj.d
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.j(z10);
            }
        });
        return f10;
    }

    @Override // cj.e
    public Task getId() {
        u();
        String n10 = n();
        if (n10 != null) {
            return m.f(n10);
        }
        Task g10 = g();
        this.f15966h.execute(new Runnable() { // from class: cj.b
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.j(false);
            }
        });
        return g10;
    }

    String l() {
        return this.f15959a.m().b();
    }

    String m() {
        return this.f15959a.m().c();
    }

    String s() {
        return this.f15959a.m().e();
    }

    c(ExecutorService executorService, Executor executor, ni.e eVar, ej.c cVar, dj.c cVar2, i iVar, w wVar, cj.g gVar) {
        this.f15965g = new Object();
        this.f15969k = new HashSet();
        this.f15970l = new ArrayList();
        this.f15959a = eVar;
        this.f15960b = cVar;
        this.f15961c = cVar2;
        this.f15962d = iVar;
        this.f15963e = wVar;
        this.f15964f = gVar;
        this.f15966h = executorService;
        this.f15967i = executor;
    }
}
