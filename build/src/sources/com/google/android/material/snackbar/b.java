package com.google.android.material.snackbar;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: e  reason: collision with root package name */
    private static b f15392e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f15393a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f15394b = new Handler(Looper.getMainLooper(), new a());

    /* renamed from: c  reason: collision with root package name */
    private c f15395c;

    /* renamed from: d  reason: collision with root package name */
    private c f15396d;

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
    public interface InterfaceC0189b {
        void a(int i10);

        void show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final WeakReference f15398a;

        /* renamed from: b  reason: collision with root package name */
        int f15399b;

        /* renamed from: c  reason: collision with root package name */
        boolean f15400c;

        c(int i10, InterfaceC0189b interfaceC0189b) {
            this.f15398a = new WeakReference(interfaceC0189b);
            this.f15399b = i10;
        }

        boolean a(InterfaceC0189b interfaceC0189b) {
            if (interfaceC0189b != null && this.f15398a.get() == interfaceC0189b) {
                return true;
            }
            return false;
        }
    }

    private b() {
    }

    private boolean a(c cVar, int i10) {
        InterfaceC0189b interfaceC0189b = (InterfaceC0189b) cVar.f15398a.get();
        if (interfaceC0189b != null) {
            this.f15394b.removeCallbacksAndMessages(cVar);
            interfaceC0189b.a(i10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b c() {
        if (f15392e == null) {
            f15392e = new b();
        }
        return f15392e;
    }

    private boolean f(InterfaceC0189b interfaceC0189b) {
        c cVar = this.f15395c;
        if (cVar != null && cVar.a(interfaceC0189b)) {
            return true;
        }
        return false;
    }

    private boolean g(InterfaceC0189b interfaceC0189b) {
        c cVar = this.f15396d;
        if (cVar != null && cVar.a(interfaceC0189b)) {
            return true;
        }
        return false;
    }

    private void l(c cVar) {
        int i10 = cVar.f15399b;
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
        this.f15394b.removeCallbacksAndMessages(cVar);
        Handler handler = this.f15394b;
        handler.sendMessageDelayed(Message.obtain(handler, 0, cVar), i10);
    }

    private void n() {
        c cVar = this.f15396d;
        if (cVar != null) {
            this.f15395c = cVar;
            this.f15396d = null;
            InterfaceC0189b interfaceC0189b = (InterfaceC0189b) cVar.f15398a.get();
            if (interfaceC0189b != null) {
                interfaceC0189b.show();
            } else {
                this.f15395c = null;
            }
        }
    }

    public void b(InterfaceC0189b interfaceC0189b, int i10) {
        synchronized (this.f15393a) {
            try {
                if (f(interfaceC0189b)) {
                    a(this.f15395c, i10);
                } else if (g(interfaceC0189b)) {
                    a(this.f15396d, i10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void d(c cVar) {
        synchronized (this.f15393a) {
            try {
                if (this.f15395c != cVar) {
                    if (this.f15396d == cVar) {
                    }
                }
                a(cVar, 2);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean e(InterfaceC0189b interfaceC0189b) {
        boolean z10;
        synchronized (this.f15393a) {
            try {
                if (!f(interfaceC0189b) && !g(interfaceC0189b)) {
                    z10 = false;
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    public void h(InterfaceC0189b interfaceC0189b) {
        synchronized (this.f15393a) {
            try {
                if (f(interfaceC0189b)) {
                    this.f15395c = null;
                    if (this.f15396d != null) {
                        n();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void i(InterfaceC0189b interfaceC0189b) {
        synchronized (this.f15393a) {
            try {
                if (f(interfaceC0189b)) {
                    l(this.f15395c);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(InterfaceC0189b interfaceC0189b) {
        synchronized (this.f15393a) {
            try {
                if (f(interfaceC0189b)) {
                    c cVar = this.f15395c;
                    if (!cVar.f15400c) {
                        cVar.f15400c = true;
                        this.f15394b.removeCallbacksAndMessages(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(InterfaceC0189b interfaceC0189b) {
        synchronized (this.f15393a) {
            try {
                if (f(interfaceC0189b)) {
                    c cVar = this.f15395c;
                    if (cVar.f15400c) {
                        cVar.f15400c = false;
                        l(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void m(int i10, InterfaceC0189b interfaceC0189b) {
        synchronized (this.f15393a) {
            try {
                if (f(interfaceC0189b)) {
                    c cVar = this.f15395c;
                    cVar.f15399b = i10;
                    this.f15394b.removeCallbacksAndMessages(cVar);
                    l(this.f15395c);
                    return;
                }
                if (g(interfaceC0189b)) {
                    this.f15396d.f15399b = i10;
                } else {
                    this.f15396d = new c(i10, interfaceC0189b);
                }
                c cVar2 = this.f15395c;
                if (cVar2 != null && a(cVar2, 4)) {
                    return;
                }
                this.f15395c = null;
                n();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
