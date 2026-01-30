package k4;

import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f32988a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile m f32989b = null;

    /* renamed from: c  reason: collision with root package name */
    private static final int f32990c = 20;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends m {

        /* renamed from: d  reason: collision with root package name */
        private final int f32991d;

        public a(int i10) {
            super(i10);
            this.f32991d = i10;
        }

        @Override // k4.m
        public void a(String str, String str2) {
            if (this.f32991d <= 3) {
                Log.d(str, str2);
            }
        }

        @Override // k4.m
        public void b(String str, String str2, Throwable th2) {
            if (this.f32991d <= 3) {
                Log.d(str, str2, th2);
            }
        }

        @Override // k4.m
        public void c(String str, String str2) {
            if (this.f32991d <= 6) {
                Log.e(str, str2);
            }
        }

        @Override // k4.m
        public void d(String str, String str2, Throwable th2) {
            if (this.f32991d <= 6) {
                Log.e(str, str2, th2);
            }
        }

        @Override // k4.m
        public void f(String str, String str2) {
            if (this.f32991d <= 4) {
                Log.i(str, str2);
            }
        }

        @Override // k4.m
        public void g(String str, String str2, Throwable th2) {
            if (this.f32991d <= 4) {
                Log.i(str, str2, th2);
            }
        }

        @Override // k4.m
        public void j(String str, String str2) {
            if (this.f32991d <= 2) {
                Log.v(str, str2);
            }
        }

        @Override // k4.m
        public void k(String str, String str2) {
            if (this.f32991d <= 5) {
                Log.w(str, str2);
            }
        }

        @Override // k4.m
        public void l(String str, String str2, Throwable th2) {
            if (this.f32991d <= 5) {
                Log.w(str, str2, th2);
            }
        }
    }

    public m(int i10) {
    }

    public static m e() {
        m mVar;
        synchronized (f32988a) {
            try {
                if (f32989b == null) {
                    f32989b = new a(3);
                }
                mVar = f32989b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return mVar;
    }

    public static void h(m mVar) {
        synchronized (f32988a) {
            f32989b = mVar;
        }
    }

    public static String i(String str) {
        int length = str.length();
        StringBuilder sb2 = new StringBuilder(23);
        sb2.append("WM-");
        int i10 = f32990c;
        if (length >= i10) {
            sb2.append(str.substring(0, i10));
        } else {
            sb2.append(str);
        }
        return sb2.toString();
    }

    public abstract void a(String str, String str2);

    public abstract void b(String str, String str2, Throwable th2);

    public abstract void c(String str, String str2);

    public abstract void d(String str, String str2, Throwable th2);

    public abstract void f(String str, String str2);

    public abstract void g(String str, String str2, Throwable th2);

    public abstract void j(String str, String str2);

    public abstract void k(String str, String str2);

    public abstract void l(String str, String str2, Throwable th2);
}
