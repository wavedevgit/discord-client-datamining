package com.android.volley;

import android.os.SystemClock;
import android.util.Log;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class v {

    /* renamed from: a  reason: collision with root package name */
    public static String f8104a = "Volley";

    /* renamed from: b  reason: collision with root package name */
    public static boolean f8105b = Log.isLoggable("Volley", 2);

    /* renamed from: c  reason: collision with root package name */
    private static final String f8106c = v.class.getName();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: c  reason: collision with root package name */
        public static final boolean f8107c = v.f8105b;

        /* renamed from: a  reason: collision with root package name */
        private final List f8108a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f8109b = false;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: com.android.volley.v$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class C0134a {

            /* renamed from: a  reason: collision with root package name */
            public final String f8110a;

            /* renamed from: b  reason: collision with root package name */
            public final long f8111b;

            /* renamed from: c  reason: collision with root package name */
            public final long f8112c;

            public C0134a(String str, long j10, long j11) {
                this.f8110a = str;
                this.f8111b = j10;
                this.f8112c = j11;
            }
        }

        private long c() {
            if (this.f8108a.size() == 0) {
                return 0L;
            }
            long j10 = ((C0134a) this.f8108a.get(0)).f8112c;
            List list = this.f8108a;
            return ((C0134a) list.get(list.size() - 1)).f8112c - j10;
        }

        public synchronized void a(String str, long j10) {
            if (!this.f8109b) {
                this.f8108a.add(new C0134a(str, j10, SystemClock.elapsedRealtime()));
            } else {
                throw new IllegalStateException("Marker added to finished log");
            }
        }

        public synchronized void b(String str) {
            this.f8109b = true;
            long c10 = c();
            if (c10 <= 0) {
                return;
            }
            long j10 = ((C0134a) this.f8108a.get(0)).f8112c;
            v.b("(%-4d ms) %s", Long.valueOf(c10), str);
            for (C0134a c0134a : this.f8108a) {
                long j11 = c0134a.f8112c;
                v.b("(+%-4d) [%2d] %s", Long.valueOf(j11 - j10), Long.valueOf(c0134a.f8111b), c0134a.f8110a);
                j10 = j11;
            }
        }

        protected void finalize() {
            if (!this.f8109b) {
                b("Request on the loose");
                v.c("Marker log finalized without finish() - uncaught exit point for request", new Object[0]);
            }
        }
    }

    private static String a(String str, Object... objArr) {
        String str2;
        if (objArr != null) {
            str = String.format(Locale.US, str, objArr);
        }
        StackTraceElement[] stackTrace = new Throwable().fillInStackTrace().getStackTrace();
        int i10 = 2;
        while (true) {
            if (i10 < stackTrace.length) {
                if (!stackTrace[i10].getClassName().equals(f8106c)) {
                    String className = stackTrace[i10].getClassName();
                    String substring = className.substring(className.lastIndexOf(46) + 1);
                    str2 = substring.substring(substring.lastIndexOf(36) + 1) + "." + stackTrace[i10].getMethodName();
                    break;
                }
                i10++;
            } else {
                str2 = "<unknown>";
                break;
            }
        }
        return String.format(Locale.US, "[%d] %s: %s", Long.valueOf(Thread.currentThread().getId()), str2, str);
    }

    public static void b(String str, Object... objArr) {
        Log.d(f8104a, a(str, objArr));
    }

    public static void c(String str, Object... objArr) {
        Log.e(f8104a, a(str, objArr));
    }

    public static void d(Throwable th2, String str, Object... objArr) {
        Log.e(f8104a, a(str, objArr), th2);
    }

    public static void e(String str, Object... objArr) {
        if (f8105b) {
            Log.v(f8104a, a(str, objArr));
        }
    }
}
