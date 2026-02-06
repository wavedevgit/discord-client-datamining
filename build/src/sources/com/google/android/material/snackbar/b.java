package com.google.android.material.snackbar;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: e  reason: collision with root package name */
    private static b f15372e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f15373a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f15374b = new Handler(Looper.getMainLooper(), new a());

    /* renamed from: c  reason: collision with root package name */
    private c f15375c;

    /* renamed from: d  reason: collision with root package name */
    private c f15376d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Handler.Callback {
        a() {
        }

        @Override // android.os.Handler.Callback
        public boolean handleMessage(Message message) {
            if (message.what != 0) {
                return false;
            }
            b.this.d((c) message.obj);
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.snackbar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0181b {
        void a(int i10);

        void show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final WeakReference f15378a;

        /* renamed from: b  reason: collision with root package name */
        int f15379b;

        /* renamed from: c  reason: collision with root package name */
        boolean f15380c;

        c(int i10, InterfaceC0181b interfaceC0181b) {
            this.f15378a = new WeakReference(interfaceC0181b);
            this.f15379b = i10;
        }

        boolean a(InterfaceC0181b interfaceC0181b) {
            if (interfaceC0181b != null && this.f15378a.get() == interfaceC0181b) {
                return true;
            }
            return false;
        }
    }

    private b() {
    }

    private boolean a(c cVar, int i10) {
        InterfaceC0181b interfaceC0181b = (InterfaceC0181b) cVar.f15378a.get();
        if (interfaceC0181b != null) {
            this.f15374b.removeCallbacksAndMessages(cVar);
            interfaceC0181b.a(i10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b c() {
        if (f15372e == null) {
            f15372e = new b();
        }
        return f15372e;
    }

    private boolean f(InterfaceC0181b interfaceC0181b) {
        c cVar = this.f15375c;
        if (cVar != null && cVar.a(interfaceC0181b)) {
            return true;
        }
        return false;
    }

    private boolean g(InterfaceC0181b interfaceC0181b) {
        c cVar = this.f15376d;
        if (cVar != null && cVar.a(interfaceC0181b)) {
            return true;
        }
        return false;
    }

    private void l(c cVar) {
        int i10 = cVar.f15379b;
        if (i10 == -2) {
            return;
        }
        if (i10 <= 0) {
            if (i10 == -1) {
                i10 = JSWatchdogManagerKt.FREEZE_CHECK_DELAY_MS;
            } else {
                i10 = 2750;
            }
        }
        this.f15374b.removeCallbacksAndMessages(cVar);
        Handler handler = this.f15374b;
        handler.sendMessageDelayed(Message.obtain(handler, 0, cVar), i10);
    }

    private void n() {
        c cVar = this.f15376d;
        if (cVar != null) {
            this.f15375c = cVar;
            this.f15376d = null;
            InterfaceC0181b interfaceC0181b = (InterfaceC0181b) cVar.f15378a.get();
            if (interfaceC0181b != null) {
                interfaceC0181b.show();
            } else {
                this.f15375c = null;
            }
        }
    }

    public void b(InterfaceC0181b interfaceC0181b, int i10) {
        synchronized (this.f15373a) {
            try {
                if (f(interfaceC0181b)) {
                    a(this.f15375c, i10);
                } else if (g(interfaceC0181b)) {
                    a(this.f15376d, i10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void d(c cVar) {
        synchronized (this.f15373a) {
            try {
                if (this.f15375c != cVar) {
                    if (this.f15376d == cVar) {
                    }
                }
                a(cVar, 2);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean e(InterfaceC0181b interfaceC0181b) {
        boolean z10;
        synchronized (this.f15373a) {
            try {
                if (!f(interfaceC0181b) && !g(interfaceC0181b)) {
                    z10 = false;
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    public void h(InterfaceC0181b interfaceC0181b) {
        synchronized (this.f15373a) {
            try {
                if (f(interfaceC0181b)) {
                    this.f15375c = null;
                    if (this.f15376d != null) {
                        n();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void i(InterfaceC0181b interfaceC0181b) {
        synchronized (this.f15373a) {
            try {
                if (f(interfaceC0181b)) {
                    l(this.f15375c);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(InterfaceC0181b interfaceC0181b) {
        synchronized (this.f15373a) {
            try {
                if (f(interfaceC0181b)) {
                    c cVar = this.f15375c;
                    if (!cVar.f15380c) {
                        cVar.f15380c = true;
                        this.f15374b.removeCallbacksAndMessages(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(InterfaceC0181b interfaceC0181b) {
        synchronized (this.f15373a) {
            try {
                if (f(interfaceC0181b)) {
                    c cVar = this.f15375c;
                    if (cVar.f15380c) {
                        cVar.f15380c = false;
                        l(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void m(int i10, InterfaceC0181b interfaceC0181b) {
        synchronized (this.f15373a) {
            try {
                if (f(interfaceC0181b)) {
                    c cVar = this.f15375c;
                    cVar.f15379b = i10;
                    this.f15374b.removeCallbacksAndMessages(cVar);
                    l(this.f15375c);
                    return;
                }
                if (g(interfaceC0181b)) {
                    this.f15376d.f15379b = i10;
                } else {
                    this.f15376d = new c(i10, interfaceC0181b);
                }
                c cVar2 = this.f15375c;
                if (cVar2 != null && a(cVar2, 4)) {
                    return;
                }
                this.f15375c = null;
                n();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
