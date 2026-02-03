package com.google.android.material.snackbar;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: e  reason: collision with root package name */
    private static b f16030e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f16031a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f16032b = new Handler(Looper.getMainLooper(), new a());

    /* renamed from: c  reason: collision with root package name */
    private c f16033c;

    /* renamed from: d  reason: collision with root package name */
    private c f16034d;

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
    public interface InterfaceC0192b {
        void a(int i10);

        void show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final WeakReference f16036a;

        /* renamed from: b  reason: collision with root package name */
        int f16037b;

        /* renamed from: c  reason: collision with root package name */
        boolean f16038c;

        c(int i10, InterfaceC0192b interfaceC0192b) {
            this.f16036a = new WeakReference(interfaceC0192b);
            this.f16037b = i10;
        }

        boolean a(InterfaceC0192b interfaceC0192b) {
            if (interfaceC0192b != null && this.f16036a.get() == interfaceC0192b) {
                return true;
            }
            return false;
        }
    }

    private b() {
    }

    private boolean a(c cVar, int i10) {
        InterfaceC0192b interfaceC0192b = (InterfaceC0192b) cVar.f16036a.get();
        if (interfaceC0192b != null) {
            this.f16032b.removeCallbacksAndMessages(cVar);
            interfaceC0192b.a(i10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b c() {
        if (f16030e == null) {
            f16030e = new b();
        }
        return f16030e;
    }

    private boolean f(InterfaceC0192b interfaceC0192b) {
        c cVar = this.f16033c;
        if (cVar != null && cVar.a(interfaceC0192b)) {
            return true;
        }
        return false;
    }

    private boolean g(InterfaceC0192b interfaceC0192b) {
        c cVar = this.f16034d;
        if (cVar != null && cVar.a(interfaceC0192b)) {
            return true;
        }
        return false;
    }

    private void l(c cVar) {
        int i10 = cVar.f16037b;
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
        this.f16032b.removeCallbacksAndMessages(cVar);
        Handler handler = this.f16032b;
        handler.sendMessageDelayed(Message.obtain(handler, 0, cVar), i10);
    }

    private void n() {
        c cVar = this.f16034d;
        if (cVar != null) {
            this.f16033c = cVar;
            this.f16034d = null;
            InterfaceC0192b interfaceC0192b = (InterfaceC0192b) cVar.f16036a.get();
            if (interfaceC0192b != null) {
                interfaceC0192b.show();
            } else {
                this.f16033c = null;
            }
        }
    }

    public void b(InterfaceC0192b interfaceC0192b, int i10) {
        synchronized (this.f16031a) {
            try {
                if (f(interfaceC0192b)) {
                    a(this.f16033c, i10);
                } else if (g(interfaceC0192b)) {
                    a(this.f16034d, i10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void d(c cVar) {
        synchronized (this.f16031a) {
            try {
                if (this.f16033c != cVar) {
                    if (this.f16034d == cVar) {
                    }
                }
                a(cVar, 2);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean e(InterfaceC0192b interfaceC0192b) {
        boolean z10;
        synchronized (this.f16031a) {
            try {
                if (!f(interfaceC0192b) && !g(interfaceC0192b)) {
                    z10 = false;
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    public void h(InterfaceC0192b interfaceC0192b) {
        synchronized (this.f16031a) {
            try {
                if (f(interfaceC0192b)) {
                    this.f16033c = null;
                    if (this.f16034d != null) {
                        n();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void i(InterfaceC0192b interfaceC0192b) {
        synchronized (this.f16031a) {
            try {
                if (f(interfaceC0192b)) {
                    l(this.f16033c);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(InterfaceC0192b interfaceC0192b) {
        synchronized (this.f16031a) {
            try {
                if (f(interfaceC0192b)) {
                    c cVar = this.f16033c;
                    if (!cVar.f16038c) {
                        cVar.f16038c = true;
                        this.f16032b.removeCallbacksAndMessages(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(InterfaceC0192b interfaceC0192b) {
        synchronized (this.f16031a) {
            try {
                if (f(interfaceC0192b)) {
                    c cVar = this.f16033c;
                    if (cVar.f16038c) {
                        cVar.f16038c = false;
                        l(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void m(int i10, InterfaceC0192b interfaceC0192b) {
        synchronized (this.f16031a) {
            try {
                if (f(interfaceC0192b)) {
                    c cVar = this.f16033c;
                    cVar.f16037b = i10;
                    this.f16032b.removeCallbacksAndMessages(cVar);
                    l(this.f16033c);
                    return;
                }
                if (g(interfaceC0192b)) {
                    this.f16034d.f16037b = i10;
                } else {
                    this.f16034d = new c(i10, interfaceC0192b);
                }
                c cVar2 = this.f16033c;
                if (cVar2 != null && a(cVar2, 4)) {
                    return;
                }
                this.f16033c = null;
                n();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
