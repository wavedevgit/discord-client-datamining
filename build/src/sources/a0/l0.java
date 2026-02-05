package a0;

import a0.e0;
import a0.l0;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import y.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l0 implements a.InterfaceC0748a {

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f134a = new StringBuilder();

    /* renamed from: b  reason: collision with root package name */
    private final Object f135b;

    /* renamed from: c  reason: collision with root package name */
    private int f136c;

    /* renamed from: d  reason: collision with root package name */
    private final y.a f137d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f138e;

    /* renamed from: f  reason: collision with root package name */
    private int f139f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private e0.a f140a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f141b;

        /* renamed from: c  reason: collision with root package name */
        private final b f142c;

        /* renamed from: d  reason: collision with root package name */
        private final c f143d;

        a(e0.a aVar, Executor executor, b bVar, c cVar) {
            this.f140a = aVar;
            this.f141b = executor;
            this.f142c = bVar;
            this.f143d = cVar;
        }

        e0.a a() {
            return this.f140a;
        }

        void b() {
            try {
                Executor executor = this.f141b;
                final b bVar = this.f142c;
                Objects.requireNonNull(bVar);
                executor.execute(new Runnable() { // from class: a0.k0
                    @Override // java.lang.Runnable
                    public final void run() {
                        l0.b.this.a();
                    }
                });
            } catch (RejectedExecutionException e10) {
                x.y0.d("CameraStateRegistry", "Unable to notify camera to configure.", e10);
            }
        }

        void c() {
            try {
                Executor executor = this.f141b;
                final c cVar = this.f143d;
                Objects.requireNonNull(cVar);
                executor.execute(new Runnable() { // from class: a0.j0
                    @Override // java.lang.Runnable
                    public final void run() {
                        l0.c.this.a();
                    }
                });
            } catch (RejectedExecutionException e10) {
                x.y0.d("CameraStateRegistry", "Unable to notify camera to open.", e10);
            }
        }

        e0.a d(e0.a aVar) {
            e0.a aVar2 = this.f140a;
            this.f140a = aVar;
            return aVar2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        void a();
    }

    public l0(y.a aVar, int i10) {
        Object obj = new Object();
        this.f135b = obj;
        this.f138e = new HashMap();
        this.f136c = i10;
        synchronized (obj) {
            this.f137d = aVar;
            this.f139f = this.f136c;
        }
    }

    private a b(String str) {
        for (x.i iVar : this.f138e.keySet()) {
            if (str.equals(((d0) iVar.b()).b())) {
                return (a) this.f138e.get(iVar);
            }
        }
        return null;
    }

    private static boolean d(e0.a aVar) {
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    private void f() {
        String str;
        if (x.y0.f("CameraStateRegistry")) {
            this.f134a.setLength(0);
            this.f134a.append("Recalculating open cameras:\n");
            this.f134a.append(String.format(Locale.US, "%-45s%-22s\n", "Camera", "State"));
            this.f134a.append("-------------------------------------------------------------------\n");
        }
        int i10 = 0;
        for (Map.Entry entry : this.f138e.entrySet()) {
            if (x.y0.f("CameraStateRegistry")) {
                if (((a) entry.getValue()).a() != null) {
                    str = ((a) entry.getValue()).a().toString();
                } else {
                    str = "UNKNOWN";
                }
                this.f134a.append(String.format(Locale.US, "%-45s%-22s\n", ((x.i) entry.getKey()).toString(), str));
            }
            if (d(((a) entry.getValue()).a())) {
                i10++;
            }
        }
        if (x.y0.f("CameraStateRegistry")) {
            this.f134a.append("-------------------------------------------------------------------\n");
            this.f134a.append(String.format(Locale.US, "Open count: %d (Max allowed: %d)", Integer.valueOf(i10), Integer.valueOf(this.f136c)));
            x.y0.a("CameraStateRegistry", this.f134a.toString());
        }
        this.f139f = Math.max(this.f136c - i10, 0);
    }

    private static void h(x.i iVar, e0.a aVar) {
        if (c4.a.h()) {
            c4.a.j("CX:State[" + iVar + "]", aVar.ordinal());
        }
    }

    private e0.a k(x.i iVar) {
        a aVar = (a) this.f138e.remove(iVar);
        if (aVar != null) {
            f();
            return aVar.a();
        }
        return null;
    }

    private e0.a l(x.i iVar, e0.a aVar) {
        boolean z10;
        e0.a d10 = ((a) b2.e.h((a) this.f138e.get(iVar), "Cannot update state of camera which has not yet been registered. Register with CameraStateRegistry.registerCamera()")).d(aVar);
        e0.a aVar2 = e0.a.OPENING;
        if (aVar == aVar2) {
            if (!d(aVar) && d10 != aVar2) {
                z10 = false;
            } else {
                z10 = true;
            }
            b2.e.j(z10, "Cannot mark camera as opening until camera was successful at calling CameraStateRegistry.tryOpenCamera()");
        }
        if (d10 != aVar) {
            h(iVar, aVar);
            f();
        }
        return d10;
    }

    @Override // y.a.InterfaceC0748a
    public void a(int i10, int i11) {
        int i12;
        boolean z10;
        synchronized (this.f135b) {
            boolean z11 = true;
            if (i11 == 2) {
                i12 = 2;
            } else {
                i12 = 1;
            }
            this.f136c = i12;
            if (i10 != 2 && i11 == 2) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (i10 != 2 || i11 == 2) {
                z11 = false;
            }
            if (z10 || z11) {
                f();
            }
        }
    }

    public boolean c() {
        synchronized (this.f135b) {
            try {
                for (Map.Entry entry : this.f138e.entrySet()) {
                    if (((a) entry.getValue()).a() == e0.a.CLOSING) {
                        return true;
                    }
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00a1  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x00bb  */
    /* JADX WARN: Removed duplicated region for block: B:57:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void e(x.i r7, a0.e0.a r8, boolean r9) {
        /*
            r6 = this;
            java.lang.Object r0 = r6.f135b
            monitor-enter(r0)
            int r1 = r6.f139f     // Catch: java.lang.Throwable -> Le
            a0.e0$a r2 = a0.e0.a.RELEASED     // Catch: java.lang.Throwable -> Le
            if (r8 != r2) goto L11
            a0.e0$a r2 = r6.k(r7)     // Catch: java.lang.Throwable -> Le
            goto L15
        Le:
            r7 = move-exception
            goto Lbf
        L11:
            a0.e0$a r2 = r6.l(r7, r8)     // Catch: java.lang.Throwable -> Le
        L15:
            if (r2 != r8) goto L19
            monitor-exit(r0)     // Catch: java.lang.Throwable -> Le
            return
        L19:
            y.a r2 = r6.f137d     // Catch: java.lang.Throwable -> Le
            int r2 = r2.c()     // Catch: java.lang.Throwable -> Le
            r3 = 2
            r4 = 0
            if (r2 != r3) goto L3e
            a0.e0$a r2 = a0.e0.a.CONFIGURED     // Catch: java.lang.Throwable -> Le
            if (r8 != r2) goto L3e
            x.o r2 = r7.b()     // Catch: java.lang.Throwable -> Le
            a0.d0 r2 = (a0.d0) r2     // Catch: java.lang.Throwable -> Le
            java.lang.String r2 = r2.b()     // Catch: java.lang.Throwable -> Le
            y.a r3 = r6.f137d     // Catch: java.lang.Throwable -> Le
            java.lang.String r2 = r3.b(r2)     // Catch: java.lang.Throwable -> Le
            if (r2 == 0) goto L3e
            a0.l0$a r2 = r6.b(r2)     // Catch: java.lang.Throwable -> Le
            goto L3f
        L3e:
            r2 = r4
        L3f:
            r3 = 1
            if (r1 >= r3) goto L7f
            int r1 = r6.f139f     // Catch: java.lang.Throwable -> Le
            if (r1 <= 0) goto L7f
            java.util.HashMap r4 = new java.util.HashMap     // Catch: java.lang.Throwable -> Le
            r4.<init>()     // Catch: java.lang.Throwable -> Le
            java.util.Map r8 = r6.f138e     // Catch: java.lang.Throwable -> Le
            java.util.Set r8 = r8.entrySet()     // Catch: java.lang.Throwable -> Le
            java.util.Iterator r8 = r8.iterator()     // Catch: java.lang.Throwable -> Le
        L55:
            boolean r1 = r8.hasNext()     // Catch: java.lang.Throwable -> Le
            if (r1 == 0) goto L97
            java.lang.Object r1 = r8.next()     // Catch: java.lang.Throwable -> Le
            java.util.Map$Entry r1 = (java.util.Map.Entry) r1     // Catch: java.lang.Throwable -> Le
            java.lang.Object r3 = r1.getValue()     // Catch: java.lang.Throwable -> Le
            a0.l0$a r3 = (a0.l0.a) r3     // Catch: java.lang.Throwable -> Le
            a0.e0$a r3 = r3.a()     // Catch: java.lang.Throwable -> Le
            a0.e0$a r5 = a0.e0.a.PENDING_OPEN     // Catch: java.lang.Throwable -> Le
            if (r3 != r5) goto L55
            java.lang.Object r3 = r1.getKey()     // Catch: java.lang.Throwable -> Le
            x.i r3 = (x.i) r3     // Catch: java.lang.Throwable -> Le
            java.lang.Object r1 = r1.getValue()     // Catch: java.lang.Throwable -> Le
            a0.l0$a r1 = (a0.l0.a) r1     // Catch: java.lang.Throwable -> Le
            r4.put(r3, r1)     // Catch: java.lang.Throwable -> Le
            goto L55
        L7f:
            a0.e0$a r1 = a0.e0.a.PENDING_OPEN     // Catch: java.lang.Throwable -> Le
            if (r8 != r1) goto L97
            int r8 = r6.f139f     // Catch: java.lang.Throwable -> Le
            if (r8 <= 0) goto L97
            java.util.HashMap r4 = new java.util.HashMap     // Catch: java.lang.Throwable -> Le
            r4.<init>()     // Catch: java.lang.Throwable -> Le
            java.util.Map r8 = r6.f138e     // Catch: java.lang.Throwable -> Le
            java.lang.Object r8 = r8.get(r7)     // Catch: java.lang.Throwable -> Le
            a0.l0$a r8 = (a0.l0.a) r8     // Catch: java.lang.Throwable -> Le
            r4.put(r7, r8)     // Catch: java.lang.Throwable -> Le
        L97:
            if (r4 == 0) goto L9e
            if (r9 != 0) goto L9e
            r4.remove(r7)     // Catch: java.lang.Throwable -> Le
        L9e:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> Le
            if (r4 == 0) goto Lb9
            java.util.Collection r7 = r4.values()
            java.util.Iterator r7 = r7.iterator()
        La9:
            boolean r8 = r7.hasNext()
            if (r8 == 0) goto Lb9
            java.lang.Object r8 = r7.next()
            a0.l0$a r8 = (a0.l0.a) r8
            r8.c()
            goto La9
        Lb9:
            if (r2 == 0) goto Lbe
            r2.b()
        Lbe:
            return
        Lbf:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> Le
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: a0.l0.e(x.i, a0.e0$a, boolean):void");
    }

    public void g(x.i iVar, Executor executor, b bVar, c cVar) {
        synchronized (this.f135b) {
            b2.e.j(!this.f138e.containsKey(iVar), "Camera is already registered: " + iVar);
            this.f138e.put(iVar, new a(null, executor, bVar, cVar));
        }
    }

    public boolean i(x.i iVar) {
        boolean z10;
        String str;
        synchronized (this.f135b) {
            try {
                a aVar = (a) b2.e.h((a) this.f138e.get(iVar), "Camera must first be registered with registerCamera()");
                z10 = false;
                if (x.y0.f("CameraStateRegistry")) {
                    this.f134a.setLength(0);
                    this.f134a.append(String.format(Locale.US, "tryOpenCamera(%s) [Available Cameras: %d, Already Open: %b (Previous state: %s)]", iVar, Integer.valueOf(this.f139f), Boolean.valueOf(d(aVar.a())), aVar.a()));
                }
                if (this.f139f > 0 || d(aVar.a())) {
                    e0.a aVar2 = e0.a.OPENING;
                    aVar.d(aVar2);
                    h(iVar, aVar2);
                    z10 = true;
                }
                if (x.y0.f("CameraStateRegistry")) {
                    StringBuilder sb2 = this.f134a;
                    Locale locale = Locale.US;
                    if (z10) {
                        str = "SUCCESS";
                    } else {
                        str = "FAIL";
                    }
                    sb2.append(String.format(locale, " --> %s", str));
                    x.y0.a("CameraStateRegistry", this.f134a.toString());
                }
                if (z10) {
                    f();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return z10;
    }

    /* JADX WARN: Removed duplicated region for block: B:34:0x0055 A[ADDED_TO_REGION] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean j(java.lang.String r6, java.lang.String r7) {
        /*
            r5 = this;
            java.lang.Object r0 = r5.f135b
            monitor-enter(r0)
            y.a r1 = r5.f137d     // Catch: java.lang.Throwable -> Lf
            int r1 = r1.c()     // Catch: java.lang.Throwable -> Lf
            r2 = 2
            r3 = 1
            if (r1 == r2) goto L11
            monitor-exit(r0)     // Catch: java.lang.Throwable -> Lf
            return r3
        Lf:
            r6 = move-exception
            goto L5b
        L11:
            a0.l0$a r6 = r5.b(r6)     // Catch: java.lang.Throwable -> Lf
            r1 = 0
            if (r6 == 0) goto L1d
            a0.e0$a r6 = r6.a()     // Catch: java.lang.Throwable -> Lf
            goto L1e
        L1d:
            r6 = r1
        L1e:
            if (r7 == 0) goto L25
            a0.l0$a r7 = r5.b(r7)     // Catch: java.lang.Throwable -> Lf
            goto L26
        L25:
            r7 = r1
        L26:
            if (r7 == 0) goto L2c
            a0.e0$a r1 = r7.a()     // Catch: java.lang.Throwable -> Lf
        L2c:
            a0.e0$a r7 = a0.e0.a.OPEN     // Catch: java.lang.Throwable -> Lf
            boolean r2 = r7.equals(r6)     // Catch: java.lang.Throwable -> Lf
            r4 = 0
            if (r2 != 0) goto L40
            a0.e0$a r2 = a0.e0.a.CONFIGURED     // Catch: java.lang.Throwable -> Lf
            boolean r6 = r2.equals(r6)     // Catch: java.lang.Throwable -> Lf
            if (r6 == 0) goto L3e
            goto L40
        L3e:
            r6 = r4
            goto L41
        L40:
            r6 = r3
        L41:
            boolean r7 = r7.equals(r1)     // Catch: java.lang.Throwable -> Lf
            if (r7 != 0) goto L52
            a0.e0$a r7 = a0.e0.a.CONFIGURED     // Catch: java.lang.Throwable -> Lf
            boolean r7 = r7.equals(r1)     // Catch: java.lang.Throwable -> Lf
            if (r7 == 0) goto L50
            goto L52
        L50:
            r7 = r4
            goto L53
        L52:
            r7 = r3
        L53:
            if (r6 == 0) goto L58
            if (r7 == 0) goto L58
            goto L59
        L58:
            r3 = r4
        L59:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> Lf
            return r3
        L5b:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> Lf
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: a0.l0.j(java.lang.String, java.lang.String):boolean");
    }
}
