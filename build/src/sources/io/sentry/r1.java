package io.sentry;

import java.util.ArrayList;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r1 {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f29524a = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f29525a;

        static {
            int[] iArr = new int[io.sentry.vendor.gson.stream.b.values().length];
            f29525a = iArr;
            try {
                iArr[io.sentry.vendor.gson.stream.b.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.END_ARRAY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.BEGIN_OBJECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.END_OBJECT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.NAME.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.STRING.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.NUMBER.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.BOOLEAN.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.NULL.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f29525a[io.sentry.vendor.gson.stream.b.END_DOCUMENT.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        Object a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        Object getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements c {

        /* renamed from: a  reason: collision with root package name */
        final String f29528a;

        f(String str) {
            this.f29528a = str;
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f29528a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements c {

        /* renamed from: a  reason: collision with root package name */
        final Object f29529a;

        g(Object obj) {
            this.f29529a = obj;
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f29529a;
        }
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    private c f() {
        if (this.f29524a.isEmpty()) {
            return null;
        }
        ArrayList arrayList = this.f29524a;
        return (c) arrayList.get(arrayList.size() - 1);
    }

    private boolean g() {
        if (i()) {
            return true;
        }
        c f10 = f();
        l();
        if (f() instanceof f) {
            f fVar = (f) f();
            l();
            e eVar = (e) f();
            if (fVar != null && f10 != null && eVar != null) {
                eVar.f29527a.put(fVar.f29528a, f10.getValue());
                return false;
            }
            return false;
        } else if (f() instanceof d) {
            d dVar = (d) f();
            if (f10 != null && dVar != null) {
                dVar.f29526a.add(f10.getValue());
                return false;
            }
            return false;
        } else {
            return false;
        }
    }

    private boolean h(b bVar) {
        Object a10 = bVar.a();
        if (f() == null && a10 != null) {
            m(new g(a10));
            return true;
        } else if (f() instanceof f) {
            l();
            ((e) f()).f29527a.put(((f) f()).f29528a, a10);
            return false;
        } else if (f() instanceof d) {
            ((d) f()).f29526a.add(a10);
            return false;
        } else {
            return false;
        }
    }

    private boolean i() {
        if (this.f29524a.size() == 1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object j(s1 s1Var) {
        try {
            try {
                return Integer.valueOf(s1Var.nextInt());
            } catch (Exception unused) {
                return Double.valueOf(s1Var.nextDouble());
            }
        } catch (Exception unused2) {
            return Long.valueOf(s1Var.nextLong());
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    private void k(final s1 s1Var) {
        boolean z10;
        switch (a.f29525a[s1Var.peek().ordinal()]) {
            case 1:
                s1Var.v();
                m(new d(null));
                z10 = false;
                break;
            case 2:
                s1Var.t();
                z10 = g();
                break;
            case 3:
                s1Var.s();
                m(new e(null));
                z10 = false;
                break;
            case 4:
                s1Var.z();
                z10 = g();
                break;
            case 5:
                m(new f(s1Var.m0()));
                z10 = false;
                break;
            case 6:
                z10 = h(new b() { // from class: io.sentry.n1
                    @Override // io.sentry.r1.b
                    public final Object a() {
                        Object f12;
                        f12 = s1.this.f1();
                        return f12;
                    }
                });
                break;
            case 7:
                z10 = h(new b() { // from class: io.sentry.o1
                    @Override // io.sentry.r1.b
                    public final Object a() {
                        Object j10;
                        j10 = r1.this.j(s1Var);
                        return j10;
                    }
                });
                break;
            case 8:
                z10 = h(new b() { // from class: io.sentry.p1
                    @Override // io.sentry.r1.b
                    public final Object a() {
                        Object valueOf;
                        valueOf = Boolean.valueOf(s1.this.a());
                        return valueOf;
                    }
                });
                break;
            case 9:
                s1Var.h();
                z10 = h(new b() { // from class: io.sentry.q1
                    @Override // io.sentry.r1.b
                    public final Object a() {
                        return r1.a();
                    }
                });
                break;
            case 10:
                z10 = true;
                break;
            default:
                z10 = false;
                break;
        }
        if (!z10) {
            k(s1Var);
        }
    }

    private void l() {
        if (this.f29524a.isEmpty()) {
            return;
        }
        ArrayList arrayList = this.f29524a;
        arrayList.remove(arrayList.size() - 1);
    }

    private void m(c cVar) {
        this.f29524a.add(cVar);
    }

    public Object e(s1 s1Var) {
        k(s1Var);
        c f10 = f();
        if (f10 != null) {
            return f10.getValue();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements c {

        /* renamed from: a  reason: collision with root package name */
        final ArrayList f29526a;

        private d() {
            this.f29526a = new ArrayList();
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f29526a;
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements c {

        /* renamed from: a  reason: collision with root package name */
        final HashMap f29527a;

        private e() {
            this.f29527a = new HashMap();
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f29527a;
        }

        /* synthetic */ e(a aVar) {
            this();
        }
    }
}
