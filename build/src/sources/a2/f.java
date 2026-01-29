package a2;

import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    public static final a2.e f362a = new e(null, false);

    /* renamed from: b  reason: collision with root package name */
    public static final a2.e f363b = new e(null, true);

    /* renamed from: c  reason: collision with root package name */
    public static final a2.e f364c;

    /* renamed from: d  reason: collision with root package name */
    public static final a2.e f365d;

    /* renamed from: e  reason: collision with root package name */
    public static final a2.e f366e;

    /* renamed from: f  reason: collision with root package name */
    public static final a2.e f367f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements c {

        /* renamed from: b  reason: collision with root package name */
        static final a f368b = new a(true);

        /* renamed from: a  reason: collision with root package name */
        private final boolean f369a;

        private a(boolean z10) {
            this.f369a = z10;
        }

        @Override // a2.f.c
        public int a(CharSequence charSequence, int i10, int i11) {
            int i12 = i11 + i10;
            boolean z10 = false;
            while (i10 < i12) {
                int a10 = f.a(Character.getDirectionality(charSequence.charAt(i10)));
                if (a10 != 0) {
                    if (a10 == 1) {
                        if (!this.f369a) {
                            return 1;
                        }
                    } else {
                        continue;
                        i10++;
                        z10 = z10;
                    }
                } else if (this.f369a) {
                    return 0;
                }
                z10 = true;
                i10++;
                z10 = z10;
            }
            if (z10) {
                return this.f369a ? 1 : 0;
            }
            return 2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b implements c {

        /* renamed from: a  reason: collision with root package name */
        static final b f370a = new b();

        private b() {
        }

        @Override // a2.f.c
        public int a(CharSequence charSequence, int i10, int i11) {
            int i12 = i11 + i10;
            int i13 = 2;
            while (i10 < i12 && i13 == 2) {
                i13 = f.b(Character.getDirectionality(charSequence.charAt(i10)));
                i10++;
            }
            return i13;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        int a(CharSequence charSequence, int i10, int i11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class d implements a2.e {

        /* renamed from: a  reason: collision with root package name */
        private final c f371a;

        d(c cVar) {
            this.f371a = cVar;
        }

        private boolean b(CharSequence charSequence, int i10, int i11) {
            int a10 = this.f371a.a(charSequence, i10, i11);
            if (a10 == 0) {
                return true;
            }
            if (a10 != 1) {
                return a();
            }
            return false;
        }

        protected abstract boolean a();

        @Override // a2.e
        public boolean isRtl(CharSequence charSequence, int i10, int i11) {
            if (charSequence != null && i10 >= 0 && i11 >= 0 && charSequence.length() - i11 >= i10) {
                if (this.f371a == null) {
                    return a();
                }
                return b(charSequence, i10, i11);
            }
            throw new IllegalArgumentException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e extends d {

        /* renamed from: b  reason: collision with root package name */
        private final boolean f372b;

        e(c cVar, boolean z10) {
            super(cVar);
            this.f372b = z10;
        }

        @Override // a2.f.d
        protected boolean a() {
            return this.f372b;
        }
    }

    /* renamed from: a2.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0002f extends d {

        /* renamed from: b  reason: collision with root package name */
        static final C0002f f373b = new C0002f();

        C0002f() {
            super(null);
        }

        @Override // a2.f.d
        protected boolean a() {
            if (g.a(Locale.getDefault()) == 1) {
                return true;
            }
            return false;
        }
    }

    static {
        b bVar = b.f370a;
        f364c = new e(bVar, false);
        f365d = new e(bVar, true);
        f366e = new e(a.f368b, false);
        f367f = C0002f.f373b;
    }

    static int a(int i10) {
        if (i10 == 0) {
            return 1;
        }
        if (i10 != 1 && i10 != 2) {
            return 2;
        }
        return 0;
    }

    static int b(int i10) {
        if (i10 != 0) {
            if (i10 == 1 || i10 == 2) {
                return 0;
            }
            switch (i10) {
                case 14:
                case 15:
                    break;
                case 16:
                case 17:
                    return 0;
                default:
                    return 2;
            }
        }
        return 1;
    }
}
