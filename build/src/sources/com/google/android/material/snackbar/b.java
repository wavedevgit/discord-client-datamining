package com.google.android.material.snackbar;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: e  reason: collision with root package name */
    private static b f14998e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f14999a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f15000b = new Handler(Looper.getMainLooper(), new a());

    /* renamed from: c  reason: collision with root package name */
    private c f15001c;

    /* renamed from: d  reason: collision with root package name */
    private c f15002d;

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
    public interface InterfaceC0173b {
        void a(int i10);

        void show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final WeakReference f15004a;

        /* renamed from: b  reason: collision with root package name */
        int f15005b;

        /* renamed from: c  reason: collision with root package name */
        boolean f15006c;

        c(int i10, InterfaceC0173b interfaceC0173b) {
            this.f15004a = new WeakReference(interfaceC0173b);
            this.f15005b = i10;
        }

        boolean a(InterfaceC0173b interfaceC0173b) {
            if (interfaceC0173b != null && this.f15004a.get() == interfaceC0173b) {
                return true;
            }
            return false;
        }
    }

    private b() {
    }

    private boolean a(c cVar, int i10) {
        InterfaceC0173b interfaceC0173b = (InterfaceC0173b) cVar.f15004a.get();
        if (interfaceC0173b != null) {
            this.f15000b.removeCallbacksAndMessages(cVar);
            interfaceC0173b.a(i10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b c() {
        if (f14998e == null) {
            f14998e = new b();
        }
        return f14998e;
    }

    private boolean f(InterfaceC0173b interfaceC0173b) {
        c cVar = this.f15001c;
        if (cVar != null && cVar.a(interfaceC0173b)) {
            return true;
        }
        return false;
    }

    private boolean g(InterfaceC0173b interfaceC0173b) {
        c cVar = this.f15002d;
        if (cVar != null && cVar.a(interfaceC0173b)) {
            return true;
        }
        return false;
    }

    private void l(c cVar) {
        int i10 = cVar.f15005b;
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
        this.f15000b.removeCallbacksAndMessages(cVar);
        Handler handler = this.f15000b;
        handler.sendMessageDelayed(Message.obtain(handler, 0, cVar), i10);
    }

    private void n() {
        c cVar = this.f15002d;
        if (cVar != null) {
            this.f15001c = cVar;
            this.f15002d = null;
            InterfaceC0173b interfaceC0173b = (InterfaceC0173b) cVar.f15004a.get();
            if (interfaceC0173b != null) {
                interfaceC0173b.show();
            } else {
                this.f15001c = null;
            }
        }
    }

    public void b(InterfaceC0173b interfaceC0173b, int i10) {
        synchronized (this.f14999a) {
            try {
                if (f(interfaceC0173b)) {
                    a(this.f15001c, i10);
                } else if (g(interfaceC0173b)) {
                    a(this.f15002d, i10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void d(c cVar) {
        synchronized (this.f14999a) {
            try {
                if (this.f15001c != cVar) {
                    if (this.f15002d == cVar) {
                    }
                }
                a(cVar, 2);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean e(InterfaceC0173b interfaceC0173b) {
        boolean z10;
        synchronized (this.f14999a) {
            try {
                if (!f(interfaceC0173b) && !g(interfaceC0173b)) {
                    z10 = false;
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    public void h(InterfaceC0173b interfaceC0173b) {
        synchronized (this.f14999a) {
            try {
                if (f(interfaceC0173b)) {
                    this.f15001c = null;
                    if (this.f15002d != null) {
                        n();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void i(InterfaceC0173b interfaceC0173b) {
        synchronized (this.f14999a) {
            try {
                if (f(interfaceC0173b)) {
                    l(this.f15001c);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(InterfaceC0173b interfaceC0173b) {
        synchronized (this.f14999a) {
            try {
                if (f(interfaceC0173b)) {
                    c cVar = this.f15001c;
                    if (!cVar.f15006c) {
                        cVar.f15006c = true;
                        this.f15000b.removeCallbacksAndMessages(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(InterfaceC0173b interfaceC0173b) {
        synchronized (this.f14999a) {
            try {
                if (f(interfaceC0173b)) {
                    c cVar = this.f15001c;
                    if (cVar.f15006c) {
                        cVar.f15006c = false;
                        l(cVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void m(int i10, InterfaceC0173b interfaceC0173b) {
        synchronized (this.f14999a) {
            try {
                if (f(interfaceC0173b)) {
                    c cVar = this.f15001c;
                    cVar.f15005b = i10;
                    this.f15000b.removeCallbacksAndMessages(cVar);
                    l(this.f15001c);
                    return;
                }
                if (g(interfaceC0173b)) {
                    this.f15002d.f15005b = i10;
                } else {
                    this.f15002d = new c(i10, interfaceC0173b);
                }
                c cVar2 = this.f15001c;
                if (cVar2 != null && a(cVar2, 4)) {
                    return;
                }
                this.f15001c = null;
                n();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
