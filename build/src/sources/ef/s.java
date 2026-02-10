package ef;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;
import android.util.Log;
import android.util.SparseArray;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.TimeUnit;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements ServiceConnection {

    /* renamed from: i  reason: collision with root package name */
    t f21627i;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ y f21630q;

    /* renamed from: d  reason: collision with root package name */
    int f21625d = 0;

    /* renamed from: e  reason: collision with root package name */
    final Messenger f21626e = new Messenger(new hg.f(Looper.getMainLooper(), new Handler.Callback() { // from class: ef.p
        @Override // android.os.Handler.Callback
        public final boolean handleMessage(Message message) {
            int i10 = message.arg1;
            if (Log.isLoggable("MessengerIpcClient", 3)) {
                Log.d("MessengerIpcClient", "Received response to request: " + i10);
            }
            s sVar = s.this;
            synchronized (sVar) {
                try {
                    v vVar = (v) sVar.f21629p.get(i10);
                    if (vVar == null) {
                        Log.w("MessengerIpcClient", "Received response for unknown request: " + i10);
                        return true;
                    }
                    sVar.f21629p.remove(i10);
                    sVar.f();
                    Bundle data = message.getData();
                    if (data.getBoolean("unsupported", false)) {
                        vVar.c(new w(4, "Not supported by GmsCore", null));
                        return true;
                    }
                    vVar.a(data);
                    return true;
                } finally {
                }
            }
        }
    }));

    /* renamed from: o  reason: collision with root package name */
    final Queue f21628o = new ArrayDeque();

    /* renamed from: p  reason: collision with root package name */
    final SparseArray f21629p = new SparseArray();

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ s(y yVar, r rVar) {
        this.f21630q = yVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void a(int i10, String str) {
        b(i10, str, null);
    }

    final synchronized void b(int i10, String str, Throwable th2) {
        try {
            if (Log.isLoggable("MessengerIpcClient", 3)) {
                Log.d("MessengerIpcClient", "Disconnected: ".concat(String.valueOf(str)));
            }
            int i11 = this.f21625d;
            if (i11 != 0) {
                if (i11 != 1 && i11 != 2) {
                    if (i11 != 3) {
                        return;
                    }
                    this.f21625d = 4;
                    return;
                }
                if (Log.isLoggable("MessengerIpcClient", 2)) {
                    Log.v("MessengerIpcClient", "Unbinding service");
                }
                this.f21625d = 4;
                of.a.b().c(y.a(this.f21630q), this);
                w wVar = new w(i10, str, th2);
                for (v vVar : this.f21628o) {
                    vVar.c(wVar);
                }
                this.f21628o.clear();
                for (int i12 = 0; i12 < this.f21629p.size(); i12++) {
                    ((v) this.f21629p.valueAt(i12)).c(wVar);
                }
                this.f21629p.clear();
                return;
            }
            throw new IllegalStateException();
        } catch (Throwable th3) {
            throw th3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        y.e(this.f21630q).execute(new Runnable() { // from class: ef.m
            @Override // java.lang.Runnable
            public final void run() {
                final v vVar;
                while (true) {
                    final s sVar = s.this;
                    synchronized (sVar) {
                        try {
                            if (sVar.f21625d == 2) {
                                if (sVar.f21628o.isEmpty()) {
                                    sVar.f();
                                    return;
                                }
                                vVar = (v) sVar.f21628o.poll();
                                sVar.f21629p.put(vVar.f21633a, vVar);
                                y.e(sVar.f21630q).schedule(new Runnable() { // from class: ef.q
                                    @Override // java.lang.Runnable
                                    public final void run() {
                                        s.this.e(vVar.f21633a);
                                    }
                                }, 30L, TimeUnit.SECONDS);
                            } else {
                                return;
                            }
                        } finally {
                        }
                    }
                    if (Log.isLoggable("MessengerIpcClient", 3)) {
                        Log.d("MessengerIpcClient", "Sending ".concat(String.valueOf(vVar)));
                    }
                    y yVar = sVar.f21630q;
                    Messenger messenger = sVar.f21626e;
                    int i10 = vVar.f21635c;
                    Context a10 = y.a(yVar);
                    Message obtain = Message.obtain();
                    obtain.what = i10;
                    obtain.arg1 = vVar.f21633a;
                    obtain.replyTo = messenger;
                    Bundle bundle = new Bundle();
                    bundle.putBoolean("oneWay", vVar.b());
                    bundle.putString("pkg", a10.getPackageName());
                    bundle.putBundle("data", vVar.f21636d);
                    obtain.setData(bundle);
                    try {
                        sVar.f21627i.a(obtain);
                    } catch (RemoteException e10) {
                        sVar.a(2, e10.getMessage());
                    }
                }
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void d() {
        if (this.f21625d == 1) {
            a(1, "Timed out while binding");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void e(int i10) {
        v vVar = (v) this.f21629p.get(i10);
        if (vVar != null) {
            Log.w("MessengerIpcClient", "Timing out request: " + i10);
            this.f21629p.remove(i10);
            vVar.c(new w(3, "Timed out waiting for response", null));
            f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void f() {
        try {
            if (this.f21625d == 2 && this.f21628o.isEmpty() && this.f21629p.size() == 0) {
                if (Log.isLoggable("MessengerIpcClient", 2)) {
                    Log.v("MessengerIpcClient", "Finished handling requests, unbinding");
                }
                this.f21625d = 3;
                of.a.b().c(y.a(this.f21630q), this);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized boolean g(v vVar) {
        boolean z10;
        int i10 = this.f21625d;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    return false;
                }
                this.f21628o.add(vVar);
                c();
                return true;
            }
            this.f21628o.add(vVar);
            return true;
        }
        this.f21628o.add(vVar);
        if (this.f21625d == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        hf.q.n(z10);
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Starting bind to GmsCore");
        }
        this.f21625d = 1;
        Intent intent = new Intent("com.google.android.c2dm.intent.REGISTER");
        intent.setPackage("com.google.android.gms");
        try {
            if (!of.a.b().a(y.a(this.f21630q), intent, this, 1)) {
                a(0, "Unable to bind to service");
            } else {
                y.e(this.f21630q).schedule(new Runnable() { // from class: ef.n
                    @Override // java.lang.Runnable
                    public final void run() {
                        s.this.d();
                    }
                }, 30L, TimeUnit.SECONDS);
            }
        } catch (SecurityException e10) {
            b(0, "Unable to bind to service", e10);
        }
        return true;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, final IBinder iBinder) {
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Service connected");
        }
        y.e(this.f21630q).execute(new Runnable() { // from class: ef.l
            @Override // java.lang.Runnable
            public final void run() {
                s sVar = s.this;
                IBinder iBinder2 = iBinder;
                synchronized (sVar) {
                    if (iBinder2 == null) {
                        sVar.a(0, "Null service connection");
                        return;
                    }
                    try {
                        sVar.f21627i = new t(iBinder2);
                        sVar.f21625d = 2;
                        sVar.c();
                    } catch (RemoteException e10) {
                        sVar.a(0, e10.getMessage());
                    }
                }
            }
        });
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Service disconnected");
        }
        y.e(this.f21630q).execute(new Runnable() { // from class: ef.o
            @Override // java.lang.Runnable
            public final void run() {
                s.this.a(2, "Service disconnected");
            }
        });
    }
}
