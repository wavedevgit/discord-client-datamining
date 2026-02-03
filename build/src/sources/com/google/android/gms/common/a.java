package com.google.android.gms.common;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.IBinder;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    boolean f13380d = false;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f13381e = new LinkedBlockingQueue();

    public IBinder a(long j10, TimeUnit timeUnit) {
        gf.q.k("BlockingServiceConnection.getServiceWithTimeout() called on main thread");
        if (!this.f13380d) {
            this.f13380d = true;
            IBinder iBinder = (IBinder) this.f13381e.poll(j10, timeUnit);
            if (iBinder != null) {
                return iBinder;
            }
            throw new TimeoutException("Timed out waiting for the service connection");
        }
        throw new IllegalStateException("Cannot call get on this connection more than once");
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        this.f13381e.add(iBinder);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
    }
}
