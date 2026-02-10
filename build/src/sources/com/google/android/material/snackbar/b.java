package com.google.android.material.snackbar;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: e  reason: collision with root package name */
    private static b f16260e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f16261a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f16262b = new Handler(Looper.getMainLooper(), new a());

    /* renamed from: c  reason: collision with root package name */
    private c f16263c;

    /* renamed from: d  reason: collision with root package name */
    private c f16264d;

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
        final WeakReference f16266a;

        /* renamed from: b  reason: collision with root package name */
        int f16267b;

        /* renamed from: c  reason: collision with root package name */
        boolean f16268c;

        c(int i10, InterfaceC0189b interfaceC0189b) {
            this.f16266a = new WeakReference(interfaceC0189b);
            this.f16267b = i10;
        }

        boolean a(InterfaceC0189b interfaceC0189b) {
            if (interfaceC0189b != null && this.f16266a.get() == interfaceC0189b) {
                return true;
            }
            return false;
        }
    }

    private b() {
    }

    private boolean a(c cVar, int i10) {
        InterfaceC0189b interfaceC0189b = (InterfaceC0189b) cVar.f16266a.get();
        if (interfaceC0189b != null) {
            this.f16262b.removeCallbacksAndMessages(cVar);
            interfaceC0189b.a(i10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b c() {
        if (f16260e == null) {
            f16260e = new b();
        }
        return f16260e;
    }

    private boolean f(InterfaceC0189b interfaceC0189b) {
        c cVar = this.f16263c;
        if (cVar != null && cVar.a(interfaceC0189b)) {
            return true;
        }
        return false;
    }

    private boolean g(InterfaceC0189b interfaceC0189b) {
        c cVar = this.f16264d;
        if (cVar != null && cVar.a(interfaceC0189b)) {
            return true;
        }
        return false;
    }

    private void l(c cVar) {
        int i10 = cVar.f16267b;
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
        this.f16262b.removeCallbacksAndMessages(cVar);
        Handler handler = this.f16262b;
        handler.sendMessageDelayed(Message.obtain(handler, 0, cVar), i10);
    }

    private void n() {
        c cVar = this.f16264d;
        if (cVar != null) {
            this.f16263c = cVar;
            this.f16264d = null;
            InterfaceC0189b interfaceC0189b = (InterfaceC0189b) cVar.f16266a.get();
            if (interfaceC0189b != null) {
                interfaceC0189b.show();
            } else {
                this.f16263c = null;
            }
        }
    }

    public void b(InterfaceC0189b interfaceC0189b, int i10) {
        synchronized (this.f16261a) {
            try {
                if (f(interfaceC0189b)) {
                    a(this.f16263c, i10);
                } else if (g(interfaceC0189b)) {
                    a(this.f16264d, i10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void d(c cVar) {
        synchronized (this.f16261a) {
            try {
                if (this.f16263c != cVar) {
                    if (this.f16264d == cVar) {
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
        synchronized (this.f16261a) {
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
        synchronized (this.f16261a) {
            try {
                if (f(interfaceC0189b)) {
                    this.f16263c = null;
                    if (this.f16264d != null) {
                        n();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void i(InterfaceC0189b interfaceC0189b) {
        synchronized (this.f16261a) {
            try {
                if (f(interfaceC0189b)) {
                    l(this.f16263c);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(InterfaceC0189b interfaceC0189b) {
        synchronized (this.f16261a) {
            try {
                if (f(interfaceC0189b)) {
                    c cVar = this.f16263c;
                    if (!cVar.f16268c) {
                        cVar.f16268c = true;
                        this.f16262b.removeCallbacksAndMessages(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(InterfaceC0189b interfaceC0189b) {
        synchronized (this.f16261a) {
            try {
                if (f(interfaceC0189b)) {
                    c cVar = this.f16263c;
                    if (cVar.f16268c) {
                        cVar.f16268c = false;
                        l(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void m(int i10, InterfaceC0189b interfaceC0189b) {
        synchronized (this.f16261a) {
            try {
                if (f(interfaceC0189b)) {
                    c cVar = this.f16263c;
                    cVar.f16267b = i10;
                    this.f16262b.removeCallbacksAndMessages(cVar);
                    l(this.f16263c);
                    return;
                }
                if (g(interfaceC0189b)) {
                    this.f16264d.f16267b = i10;
                } else {
                    this.f16264d = new c(i10, interfaceC0189b);
                }
                c cVar2 = this.f16263c;
                if (cVar2 != null && a(cVar2, 4)) {
                    return;
                }
                this.f16263c = null;
                n();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
