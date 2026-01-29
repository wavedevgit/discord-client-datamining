package com.google.android.material.snackbar;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: e  reason: collision with root package name */
    private static b f16401e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f16402a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f16403b = new Handler(Looper.getMainLooper(), new a());

    /* renamed from: c  reason: collision with root package name */
    private c f16404c;

    /* renamed from: d  reason: collision with root package name */
    private c f16405d;

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
    public interface InterfaceC0187b {
        void a(int i10);

        void show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final WeakReference f16407a;

        /* renamed from: b  reason: collision with root package name */
        int f16408b;

        /* renamed from: c  reason: collision with root package name */
        boolean f16409c;

        c(int i10, InterfaceC0187b interfaceC0187b) {
            this.f16407a = new WeakReference(interfaceC0187b);
            this.f16408b = i10;
        }

        boolean a(InterfaceC0187b interfaceC0187b) {
            if (interfaceC0187b != null && this.f16407a.get() == interfaceC0187b) {
                return true;
            }
            return false;
        }
    }

    private b() {
    }

    private boolean a(c cVar, int i10) {
        InterfaceC0187b interfaceC0187b = (InterfaceC0187b) cVar.f16407a.get();
        if (interfaceC0187b != null) {
            this.f16403b.removeCallbacksAndMessages(cVar);
            interfaceC0187b.a(i10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b c() {
        if (f16401e == null) {
            f16401e = new b();
        }
        return f16401e;
    }

    private boolean f(InterfaceC0187b interfaceC0187b) {
        c cVar = this.f16404c;
        if (cVar != null && cVar.a(interfaceC0187b)) {
            return true;
        }
        return false;
    }

    private boolean g(InterfaceC0187b interfaceC0187b) {
        c cVar = this.f16405d;
        if (cVar != null && cVar.a(interfaceC0187b)) {
            return true;
        }
        return false;
    }

    private void l(c cVar) {
        int i10 = cVar.f16408b;
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
        this.f16403b.removeCallbacksAndMessages(cVar);
        Handler handler = this.f16403b;
        handler.sendMessageDelayed(Message.obtain(handler, 0, cVar), i10);
    }

    private void n() {
        c cVar = this.f16405d;
        if (cVar != null) {
            this.f16404c = cVar;
            this.f16405d = null;
            InterfaceC0187b interfaceC0187b = (InterfaceC0187b) cVar.f16407a.get();
            if (interfaceC0187b != null) {
                interfaceC0187b.show();
            } else {
                this.f16404c = null;
            }
        }
    }

    public void b(InterfaceC0187b interfaceC0187b, int i10) {
        synchronized (this.f16402a) {
            try {
                if (f(interfaceC0187b)) {
                    a(this.f16404c, i10);
                } else if (g(interfaceC0187b)) {
                    a(this.f16405d, i10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void d(c cVar) {
        synchronized (this.f16402a) {
            try {
                if (this.f16404c != cVar) {
                    if (this.f16405d == cVar) {
                    }
                }
                a(cVar, 2);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean e(InterfaceC0187b interfaceC0187b) {
        boolean z10;
        synchronized (this.f16402a) {
            try {
                if (!f(interfaceC0187b) && !g(interfaceC0187b)) {
                    z10 = false;
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    public void h(InterfaceC0187b interfaceC0187b) {
        synchronized (this.f16402a) {
            try {
                if (f(interfaceC0187b)) {
                    this.f16404c = null;
                    if (this.f16405d != null) {
                        n();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void i(InterfaceC0187b interfaceC0187b) {
        synchronized (this.f16402a) {
            try {
                if (f(interfaceC0187b)) {
                    l(this.f16404c);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(InterfaceC0187b interfaceC0187b) {
        synchronized (this.f16402a) {
            try {
                if (f(interfaceC0187b)) {
                    c cVar = this.f16404c;
                    if (!cVar.f16409c) {
                        cVar.f16409c = true;
                        this.f16403b.removeCallbacksAndMessages(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(InterfaceC0187b interfaceC0187b) {
        synchronized (this.f16402a) {
            try {
                if (f(interfaceC0187b)) {
                    c cVar = this.f16404c;
                    if (cVar.f16409c) {
                        cVar.f16409c = false;
                        l(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void m(int i10, InterfaceC0187b interfaceC0187b) {
        synchronized (this.f16402a) {
            try {
                if (f(interfaceC0187b)) {
                    c cVar = this.f16404c;
                    cVar.f16408b = i10;
                    this.f16403b.removeCallbacksAndMessages(cVar);
                    l(this.f16404c);
                    return;
                }
                if (g(interfaceC0187b)) {
                    this.f16405d.f16408b = i10;
                } else {
                    this.f16405d = new c(i10, interfaceC0187b);
                }
                c cVar2 = this.f16404c;
                if (cVar2 != null && a(cVar2, 4)) {
                    return;
                }
                this.f16404c = null;
                n();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
