package df;

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
    t f22132i;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ y f22135q;

    /* renamed from: d  reason: collision with root package name */
    int f22130d = 0;

    /* renamed from: e  reason: collision with root package name */
    final Messenger f22131e = new Messenger(new gg.f(Looper.getMainLooper(), new Handler.Callback() { // from class: df.p
        @Override // android.os.Handler.Callback
        public final boolean handleMessage(Message message) {
            int i10 = message.arg1;
            if (Log.isLoggable("MessengerIpcClient", 3)) {
                Log.d("MessengerIpcClient", "Received response to request: " + i10);
            }
            s sVar = s.this;
            synchronized (sVar) {
                try {
                    v vVar = (v) sVar.f22134p.get(i10);
                    if (vVar == null) {
                        Log.w("MessengerIpcClient", "Received response for unknown request: " + i10);
                        return true;
                    }
                    sVar.f22134p.remove(i10);
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
    final Queue f22133o = new ArrayDeque();

    /* renamed from: p  reason: collision with root package name */
    final SparseArray f22134p = new SparseArray();

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ s(y yVar, r rVar) {
        this.f22135q = yVar;
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
            int i11 = this.f22130d;
            if (i11 != 0) {
                if (i11 != 1 && i11 != 2) {
                    if (i11 != 3) {
                        return;
                    }
                    this.f22130d = 4;
                    return;
                }
                if (Log.isLoggable("MessengerIpcClient", 2)) {
                    Log.v("MessengerIpcClient", "Unbinding service");
                }
                this.f22130d = 4;
                nf.a.b().c(y.a(this.f22135q), this);
                w wVar = new w(i10, str, th2);
                for (v vVar : this.f22133o) {
                    vVar.c(wVar);
                }
                this.f22133o.clear();
                for (int i12 = 0; i12 < this.f22134p.size(); i12++) {
                    ((v) this.f22134p.valueAt(i12)).c(wVar);
                }
                this.f22134p.clear();
                return;
            }
            throw new IllegalStateException();
        } catch (Throwable th3) {
            throw th3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        y.e(this.f22135q).execute(new Runnable() { // from class: df.m
            @Override // java.lang.Runnable
            public final void run() {
                final v vVar;
                while (true) {
                    final s sVar = s.this;
                    synchronized (sVar) {
                        try {
                            if (sVar.f22130d == 2) {
                                if (sVar.f22133o.isEmpty()) {
                                    sVar.f();
                                    return;
                                }
                                vVar = (v) sVar.f22133o.poll();
                                sVar.f22134p.put(vVar.f22138a, vVar);
                                y.e(sVar.f22135q).schedule(new Runnable() { // from class: df.q
                                    @Override // java.lang.Runnable
                                    public final void run() {
                                        s.this.e(vVar.f22138a);
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
                    y yVar = sVar.f22135q;
                    Messenger messenger = sVar.f22131e;
                    int i10 = vVar.f22140c;
                    Context a10 = y.a(yVar);
                    Message obtain = Message.obtain();
                    obtain.what = i10;
                    obtain.arg1 = vVar.f22138a;
                    obtain.replyTo = messenger;
                    Bundle bundle = new Bundle();
                    bundle.putBoolean("oneWay", vVar.b());
                    bundle.putString("pkg", a10.getPackageName());
                    bundle.putBundle("data", vVar.f22141d);
                    obtain.setData(bundle);
                    try {
                        sVar.f22132i.a(obtain);
                    } catch (RemoteException e10) {
                        sVar.a(2, e10.getMessage());
                    }
                }
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void d() {
        if (this.f22130d == 1) {
            a(1, "Timed out while binding");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void e(int i10) {
        v vVar = (v) this.f22134p.get(i10);
        if (vVar != null) {
            Log.w("MessengerIpcClient", "Timing out request: " + i10);
            this.f22134p.remove(i10);
            vVar.c(new w(3, "Timed out waiting for response", null));
            f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void f() {
        try {
            if (this.f22130d == 2 && this.f22133o.isEmpty() && this.f22134p.size() == 0) {
                if (Log.isLoggable("MessengerIpcClient", 2)) {
                    Log.v("MessengerIpcClient", "Finished handling requests, unbinding");
                }
                this.f22130d = 3;
                nf.a.b().c(y.a(this.f22135q), this);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized boolean g(v vVar) {
        boolean z10;
        int i10 = this.f22130d;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    return false;
                }
                this.f22133o.add(vVar);
                c();
                return true;
            }
            this.f22133o.add(vVar);
            return true;
        }
        this.f22133o.add(vVar);
        if (this.f22130d == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Starting bind to GmsCore");
        }
        this.f22130d = 1;
        Intent intent = new Intent("com.google.android.c2dm.intent.REGISTER");
        intent.setPackage("com.google.android.gms");
        try {
            if (!nf.a.b().a(y.a(this.f22135q), intent, this, 1)) {
                a(0, "Unable to bind to service");
            } else {
                y.e(this.f22135q).schedule(new Runnable() { // from class: df.n
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
        y.e(this.f22135q).execute(new Runnable() { // from class: df.l
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
                        sVar.f22132i = new t(iBinder2);
                        sVar.f22130d = 2;
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
        y.e(this.f22135q).execute(new Runnable() { // from class: df.o
            @Override // java.lang.Runnable
            public final void run() {
                s.this.a(2, "Service disconnected");
            }
        });
    }
}
