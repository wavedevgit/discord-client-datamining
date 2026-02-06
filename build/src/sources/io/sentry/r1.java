package io.sentry;

import java.util.ArrayList;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r1 {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f28668a = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28669a;

        static {
            int[] iArr = new int[io.sentry.vendor.gson.stream.b.values().length];
            f28669a = iArr;
            try {
                iArr[io.sentry.vendor.gson.stream.b.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.END_ARRAY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.BEGIN_OBJECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.END_OBJECT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.NAME.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.STRING.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.NUMBER.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.BOOLEAN.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.NULL.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f28669a[io.sentry.vendor.gson.stream.b.END_DOCUMENT.ordinal()] = 10;
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
        final String f28672a;

        f(String str) {
            this.f28672a = str;
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f28672a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements c {

        /* renamed from: a  reason: collision with root package name */
        final Object f28673a;

        g(Object obj) {
            this.f28673a = obj;
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f28673a;
        }
    }

    public static /* synthetic */ Object a() {
        return null;
    }

    private c f() {
        if (this.f28668a.isEmpty()) {
            return null;
        }
        ArrayList arrayList = this.f28668a;
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
                eVar.f28671a.put(fVar.f28672a, f10.getValue());
                return false;
            }
            return false;
        } else if (f() instanceof d) {
            d dVar = (d) f();
            if (f10 != null && dVar != null) {
                dVar.f28670a.add(f10.getValue());
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
            ((e) f()).f28671a.put(((f) f()).f28672a, a10);
            return false;
        } else if (f() instanceof d) {
            ((d) f()).f28670a.add(a10);
            return false;
        } else {
            return false;
        }
    }

    private boolean i() {
        if (this.f28668a.size() == 1) {
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
        switch (a.f28669a[s1Var.peek().ordinal()]) {
            case 1:
                s1Var.x();
                m(new d(null));
                z10 = false;
                break;
            case 2:
                s1Var.v();
                z10 = g();
                break;
            case 3:
                s1Var.u();
                m(new e(null));
                z10 = false;
                break;
            case 4:
                s1Var.D();
                z10 = g();
                break;
            case 5:
                m(new f(s1Var.o0()));
                z10 = false;
                break;
            case 6:
                z10 = h(new b() { // from class: io.sentry.n1
                    @Override // io.sentry.r1.b
                    public final Object a() {
                        Object e12;
                        e12 = s1.this.e1();
                        return e12;
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
                s1Var.g();
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
        if (this.f28668a.isEmpty()) {
            return;
        }
        ArrayList arrayList = this.f28668a;
        arrayList.remove(arrayList.size() - 1);
    }

    private void m(c cVar) {
        this.f28668a.add(cVar);
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
        final ArrayList f28670a;

        private d() {
            this.f28670a = new ArrayList();
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f28670a;
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements c {

        /* renamed from: a  reason: collision with root package name */
        final HashMap f28671a;

        private e() {
            this.f28671a = new HashMap();
        }

        @Override // io.sentry.r1.c
        public Object getValue() {
            return this.f28671a;
        }

        /* synthetic */ e(a aVar) {
            this();
        }
    }
}
