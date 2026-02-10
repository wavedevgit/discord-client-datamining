package com.google.android.material.snackbar;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: e  reason: collision with root package name */
    private static b f15512e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f15513a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f15514b = new Handler(Looper.getMainLooper(), new a());

    /* renamed from: c  reason: collision with root package name */
    private c f15515c;

    /* renamed from: d  reason: collision with root package name */
    private c f15516d;

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
    public interface InterfaceC0208b {
        void a(int i10);

        void show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final WeakReference f15518a;

        /* renamed from: b  reason: collision with root package name */
        int f15519b;

        /* renamed from: c  reason: collision with root package name */
        boolean f15520c;

        c(int i10, InterfaceC0208b interfaceC0208b) {
            this.f15518a = new WeakReference(interfaceC0208b);
            this.f15519b = i10;
        }

        boolean a(InterfaceC0208b interfaceC0208b) {
            if (interfaceC0208b != null && this.f15518a.get() == interfaceC0208b) {
                return true;
            }
            return false;
        }
    }

    private b() {
    }

    private boolean a(c cVar, int i10) {
        InterfaceC0208b interfaceC0208b = (InterfaceC0208b) cVar.f15518a.get();
        if (interfaceC0208b != null) {
            this.f15514b.removeCallbacksAndMessages(cVar);
            interfaceC0208b.a(i10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b c() {
        if (f15512e == null) {
            f15512e = new b();
        }
        return f15512e;
    }

    private boolean f(InterfaceC0208b interfaceC0208b) {
        c cVar = this.f15515c;
        if (cVar != null && cVar.a(interfaceC0208b)) {
            return true;
        }
        return false;
    }

    private boolean g(InterfaceC0208b interfaceC0208b) {
        c cVar = this.f15516d;
        if (cVar != null && cVar.a(interfaceC0208b)) {
            return true;
        }
        return false;
    }

    private void l(c cVar) {
        int i10 = cVar.f15519b;
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
        this.f15514b.removeCallbacksAndMessages(cVar);
        Handler handler = this.f15514b;
        handler.sendMessageDelayed(Message.obtain(handler, 0, cVar), i10);
    }

    private void n() {
        c cVar = this.f15516d;
        if (cVar != null) {
            this.f15515c = cVar;
            this.f15516d = null;
            InterfaceC0208b interfaceC0208b = (InterfaceC0208b) cVar.f15518a.get();
            if (interfaceC0208b != null) {
                interfaceC0208b.show();
            } else {
                this.f15515c = null;
            }
        }
    }

    public void b(InterfaceC0208b interfaceC0208b, int i10) {
        synchronized (this.f15513a) {
            try {
                if (f(interfaceC0208b)) {
                    a(this.f15515c, i10);
                } else if (g(interfaceC0208b)) {
                    a(this.f15516d, i10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void d(c cVar) {
        synchronized (this.f15513a) {
            try {
                if (this.f15515c != cVar) {
                    if (this.f15516d == cVar) {
                    }
                }
                a(cVar, 2);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean e(InterfaceC0208b interfaceC0208b) {
        boolean z10;
        synchronized (this.f15513a) {
            try {
                if (!f(interfaceC0208b) && !g(interfaceC0208b)) {
                    z10 = false;
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    public void h(InterfaceC0208b interfaceC0208b) {
        synchronized (this.f15513a) {
            try {
                if (f(interfaceC0208b)) {
                    this.f15515c = null;
                    if (this.f15516d != null) {
                        n();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void i(InterfaceC0208b interfaceC0208b) {
        synchronized (this.f15513a) {
            try {
                if (f(interfaceC0208b)) {
                    l(this.f15515c);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(InterfaceC0208b interfaceC0208b) {
        synchronized (this.f15513a) {
            try {
                if (f(interfaceC0208b)) {
                    c cVar = this.f15515c;
                    if (!cVar.f15520c) {
                        cVar.f15520c = true;
                        this.f15514b.removeCallbacksAndMessages(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(InterfaceC0208b interfaceC0208b) {
        synchronized (this.f15513a) {
            try {
                if (f(interfaceC0208b)) {
                    c cVar = this.f15515c;
                    if (cVar.f15520c) {
                        cVar.f15520c = false;
                        l(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void m(int i10, InterfaceC0208b interfaceC0208b) {
        synchronized (this.f15513a) {
            try {
                if (f(interfaceC0208b)) {
                    c cVar = this.f15515c;
                    cVar.f15519b = i10;
                    this.f15514b.removeCallbacksAndMessages(cVar);
                    l(this.f15515c);
                    return;
                }
                if (g(interfaceC0208b)) {
                    this.f15516d.f15519b = i10;
                } else {
                    this.f15516d = new c(i10, interfaceC0208b);
                }
                c cVar2 = this.f15515c;
                if (cVar2 != null && a(cVar2, 4)) {
                    return;
                }
                this.f15515c = null;
                n();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
