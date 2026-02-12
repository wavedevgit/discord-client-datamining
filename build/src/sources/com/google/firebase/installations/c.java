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
import lj.d;
import lj.f;
import xi.w;
import zg.k;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements jj.e {

    /* renamed from: m  reason: collision with root package name */
    private static final Object f17221m = new Object();

    /* renamed from: n  reason: collision with root package name */
    private static final ThreadFactory f17222n = new a();

    /* renamed from: a  reason: collision with root package name */
    private final ui.e f17223a;

    /* renamed from: b  reason: collision with root package name */
    private final lj.c f17224b;

    /* renamed from: c  reason: collision with root package name */
    private final kj.c f17225c;

    /* renamed from: d  reason: collision with root package name */
    private final i f17226d;

    /* renamed from: e  reason: collision with root package name */
    private final w f17227e;

    /* renamed from: f  reason: collision with root package name */
    private final jj.g f17228f;

    /* renamed from: g  reason: collision with root package name */
    private final Object f17229g;

    /* renamed from: h  reason: collision with root package name */
    private final ExecutorService f17230h;

    /* renamed from: i  reason: collision with root package name */
    private final Executor f17231i;

    /* renamed from: j  reason: collision with root package name */
    private String f17232j;

    /* renamed from: k  reason: collision with root package name */
    private Set f17233k;

    /* renamed from: l  reason: collision with root package name */
    private final List f17234l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicInteger f17235a = new AtomicInteger(1);

        a() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            return new Thread(runnable, String.format("firebase-installations-executor-%d", Integer.valueOf(this.f17235a.getAndIncrement())));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17236a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f17237b;

        static {
            int[] iArr = new int[f.b.values().length];
            f17237b = iArr;
            try {
                iArr[f.b.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17237b[f.b.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17237b[f.b.AUTH_ERROR.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[d.b.values().length];
            f17236a = iArr2;
            try {
                iArr2[d.b.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17236a[d.b.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(final ui.e eVar, ij.b bVar, ExecutorService executorService, Executor executor) {
        this(executorService, executor, eVar, new lj.c(eVar.j(), bVar), new kj.c(eVar), i.c(), new w(new ij.b() { // from class: jj.a
            @Override // ij.b
            public final Object get() {
                return com.google.firebase.installations.c.e(ui.e.this);
            }
        }), new jj.g());
    }

    private synchronized void A(kj.d dVar, kj.d dVar2) {
        if (this.f17233k.size() != 0 && !TextUtils.equals(dVar.d(), dVar2.d())) {
            Iterator it = this.f17233k.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                dVar2.d();
                throw null;
            }
        }
    }

    public static /* synthetic */ kj.b e(ui.e eVar) {
        return new kj.b(eVar);
    }

    private Task f() {
        k kVar = new k();
        h(new e(this.f17226d, kVar));
        return kVar.a();
    }

    private Task g() {
        k kVar = new k();
        h(new f(kVar));
        return kVar.a();
    }

    private void h(h hVar) {
        synchronized (this.f17229g) {
            this.f17234l.add(hVar);
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
            kj.d r0 = r2.q()
            boolean r1 = r0.i()     // Catch: com.google.firebase.installations.d -> L1d
            if (r1 != 0) goto L24
            boolean r1 = r0.l()     // Catch: com.google.firebase.installations.d -> L1d
            if (r1 == 0) goto L11
            goto L24
        L11:
            if (r3 != 0) goto L1f
            com.google.firebase.installations.i r3 = r2.f17226d     // Catch: com.google.firebase.installations.d -> L1d
            boolean r3 = r3.f(r0)     // Catch: com.google.firebase.installations.d -> L1d
            if (r3 == 0) goto L1c
            goto L1f
        L1c:
            return
        L1d:
            r3 = move-exception
            goto L61
        L1f:
            kj.d r3 = r2.k(r0)     // Catch: com.google.firebase.installations.d -> L1d
            goto L28
        L24:
            kj.d r3 = r2.w(r0)     // Catch: com.google.firebase.installations.d -> L1d
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
        kj.d r10 = r();
        if (z10) {
            r10 = r10.p();
        }
        y(r10);
        this.f17231i.execute(new Runnable() { // from class: jj.c
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.i(z10);
            }
        });
    }

    private kj.d k(kj.d dVar) {
        lj.f e10 = this.f17224b.e(l(), dVar.d(), s(), dVar.f());
        int i10 = b.f17237b[e10.b().ordinal()];
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
        return dVar.o(e10.c(), e10.d(), this.f17226d.b());
    }

    private synchronized String n() {
        return this.f17232j;
    }

    private kj.b o() {
        return (kj.b) this.f17227e.get();
    }

    public static c p(ui.e eVar) {
        boolean z10;
        if (eVar != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        q.b(z10, "Null is not a valid value of FirebaseApp.");
        return (c) eVar.i(jj.e.class);
    }

    private kj.d q() {
        kj.d d10;
        synchronized (f17221m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f17223a.j(), "generatefid.lock");
                d10 = this.f17225c.d();
                if (a10 != null) {
                    a10.b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return d10;
    }

    private kj.d r() {
        kj.d d10;
        synchronized (f17221m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f17223a.j(), "generatefid.lock");
                d10 = this.f17225c.d();
                if (d10.j()) {
                    d10 = this.f17225c.b(d10.t(v(d10)));
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

    private void t(kj.d dVar) {
        synchronized (f17221m) {
            try {
                com.google.firebase.installations.b a10 = com.google.firebase.installations.b.a(this.f17223a.j(), "generatefid.lock");
                this.f17225c.b(dVar);
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

    private String v(kj.d dVar) {
        if ((!this.f17223a.l().equals("CHIME_ANDROID_SDK") && !this.f17223a.t()) || !dVar.m()) {
            return this.f17228f.a();
        }
        String f10 = o().f();
        if (TextUtils.isEmpty(f10)) {
            return this.f17228f.a();
        }
        return f10;
    }

    private kj.d w(kj.d dVar) {
        String str;
        if (dVar.d() != null && dVar.d().length() == 11) {
            str = o().i();
        } else {
            str = null;
        }
        lj.d d10 = this.f17224b.d(l(), dVar.d(), s(), m(), str);
        int i10 = b.f17236a[d10.e().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return dVar.q("BAD CONFIG");
            }
            throw new d("Firebase Installations Service is unavailable. Please try again later.", d.a.UNAVAILABLE);
        }
        return dVar.s(d10.c(), d10.d(), this.f17226d.b(), d10.b().c(), d10.b().d());
    }

    private void x(Exception exc) {
        synchronized (this.f17229g) {
            try {
                Iterator it = this.f17234l.iterator();
                while (it.hasNext()) {
                    if (((h) it.next()).b(exc)) {
                        it.remove();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void y(kj.d dVar) {
        synchronized (this.f17229g) {
            try {
                Iterator it = this.f17234l.iterator();
                while (it.hasNext()) {
                    if (((h) it.next()).a(dVar)) {
                        it.remove();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private synchronized void z(String str) {
        this.f17232j = str;
    }

    @Override // jj.e
    public Task a(final boolean z10) {
        u();
        Task f10 = f();
        this.f17230h.execute(new Runnable() { // from class: jj.d
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.j(z10);
            }
        });
        return f10;
    }

    @Override // jj.e
    public Task getId() {
        u();
        String n10 = n();
        if (n10 != null) {
            return m.f(n10);
        }
        Task g10 = g();
        this.f17230h.execute(new Runnable() { // from class: jj.b
            @Override // java.lang.Runnable
            public final void run() {
                com.google.firebase.installations.c.this.j(false);
            }
        });
        return g10;
    }

    String l() {
        return this.f17223a.m().b();
    }

    String m() {
        return this.f17223a.m().c();
    }

    String s() {
        return this.f17223a.m().e();
    }

    c(ExecutorService executorService, Executor executor, ui.e eVar, lj.c cVar, kj.c cVar2, i iVar, w wVar, jj.g gVar) {
        this.f17229g = new Object();
        this.f17233k = new HashSet();
        this.f17234l = new ArrayList();
        this.f17223a = eVar;
        this.f17224b = cVar;
        this.f17225c = cVar2;
        this.f17226d = iVar;
        this.f17227e = wVar;
        this.f17228f = gVar;
        this.f17230h = executorService;
        this.f17231i = executor;
    }
}
