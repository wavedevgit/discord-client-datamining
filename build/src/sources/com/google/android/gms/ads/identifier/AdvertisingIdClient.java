package com.google.android.gms.ads.identifier;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import com.google.android.gms.common.g;
import com.google.android.gms.common.h;
import com.google.android.gms.common.j;
import gf.q;
import java.io.IOException;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;
import zf.e;
import zf.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AdvertisingIdClient {

    /* renamed from: a  reason: collision with root package name */
    com.google.android.gms.common.a f14691a;

    /* renamed from: b  reason: collision with root package name */
    f f14692b;

    /* renamed from: c  reason: collision with root package name */
    boolean f14693c;

    /* renamed from: d  reason: collision with root package name */
    final Object f14694d = new Object();

    /* renamed from: e  reason: collision with root package name */
    b f14695e;

    /* renamed from: f  reason: collision with root package name */
    private final Context f14696f;

    /* renamed from: g  reason: collision with root package name */
    final long f14697g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Info {

        /* renamed from: a  reason: collision with root package name */
        private final String f14698a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f14699b;

        public Info(String str, boolean z10) {
            this.f14698a = str;
            this.f14699b = z10;
        }

        public String a() {
            return this.f14698a;
        }

        public boolean b() {
            return this.f14699b;
        }

        public String toString() {
            String str = this.f14698a;
            boolean z10 = this.f14699b;
            StringBuilder sb2 = new StringBuilder(String.valueOf(str).length() + 7);
            sb2.append("{");
            sb2.append(str);
            sb2.append("}");
            sb2.append(z10);
            return sb2.toString();
        }
    }

    public AdvertisingIdClient(Context context, long j10, boolean z10, boolean z11) {
        Context applicationContext;
        q.l(context);
        if (z10 && (applicationContext = context.getApplicationContext()) != null) {
            context = applicationContext;
        }
        this.f14696f = context;
        this.f14693c = false;
        this.f14697g = j10;
    }

    public static Info a(Context context) {
        AdvertisingIdClient advertisingIdClient = new AdvertisingIdClient(context, -1L, true, false);
        try {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            advertisingIdClient.c(false);
            Info e10 = advertisingIdClient.e(-1);
            advertisingIdClient.d(e10, true, 0.0f, SystemClock.elapsedRealtime() - elapsedRealtime, "", null);
            return e10;
        } finally {
        }
    }

    private final Info e(int i10) {
        Info info;
        q.k("Calling this from your main thread can lead to deadlock");
        synchronized (this) {
            try {
                if (!this.f14693c) {
                    synchronized (this.f14694d) {
                        b bVar = this.f14695e;
                        if (bVar == null || !bVar.f14704o) {
                            throw new IOException("AdvertisingIdClient is not connected.");
                        }
                    }
                    try {
                        c(false);
                        if (!this.f14693c) {
                            throw new IOException("AdvertisingIdClient cannot reconnect.");
                        }
                    } catch (Exception e10) {
                        throw new IOException("AdvertisingIdClient cannot reconnect.", e10);
                    }
                }
                q.l(this.f14691a);
                q.l(this.f14692b);
                try {
                    info = new Info(this.f14692b.a(), this.f14692b.o(true));
                } catch (RemoteException e11) {
                    Log.i("AdvertisingIdClient", "GMS remote exception ", e11);
                    throw new IOException("Remote exception");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        f();
        return info;
    }

    private final void f() {
        synchronized (this.f14694d) {
            b bVar = this.f14695e;
            if (bVar != null) {
                bVar.f14703i.countDown();
                try {
                    this.f14695e.join();
                } catch (InterruptedException unused) {
                }
            }
            long j10 = this.f14697g;
            if (j10 > 0) {
                this.f14695e = new b(this, j10);
            }
        }
    }

    public final void b() {
        q.k("Calling this from your main thread can lead to deadlock");
        synchronized (this) {
            try {
                if (this.f14696f != null && this.f14691a != null) {
                    if (this.f14693c) {
                        nf.a.b().c(this.f14696f, this.f14691a);
                    }
                    this.f14693c = false;
                    this.f14692b = null;
                    this.f14691a = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    protected final void c(boolean z10) {
        q.k("Calling this from your main thread can lead to deadlock");
        synchronized (this) {
            try {
                if (this.f14693c) {
                    b();
                }
                Context context = this.f14696f;
                try {
                    context.getPackageManager().getPackageInfo("com.android.vending", 0);
                    int h10 = g.f().h(context, j.f14821a);
                    if (h10 != 0 && h10 != 2) {
                        throw new IOException("Google Play services not available");
                    }
                    com.google.android.gms.common.a aVar = new com.google.android.gms.common.a();
                    Intent intent = new Intent("com.google.android.gms.ads.identifier.service.START");
                    intent.setPackage("com.google.android.gms");
                    if (nf.a.b().a(context, intent, aVar, 1)) {
                        this.f14691a = aVar;
                        try {
                            this.f14692b = e.e(aVar.a(10000L, TimeUnit.MILLISECONDS));
                            this.f14693c = true;
                            if (z10) {
                                f();
                            }
                        } catch (InterruptedException unused) {
                            throw new IOException("Interrupted exception");
                        } catch (Throwable th2) {
                            throw new IOException(th2);
                        }
                    } else {
                        throw new IOException("Connection failure");
                    }
                } catch (PackageManager.NameNotFoundException unused2) {
                    throw new h(9);
                }
            } catch (Throwable th3) {
                throw th3;
            }
        }
    }

    final boolean d(Info info, boolean z10, float f10, long j10, String str, Throwable th2) {
        if (Math.random() <= 0.0d) {
            HashMap hashMap = new HashMap();
            String str2 = "1";
            hashMap.put("app_context", "1");
            if (info != null) {
                if (true != info.b()) {
                    str2 = "0";
                }
                hashMap.put("limit_ad_tracking", str2);
                String a10 = info.a();
                if (a10 != null) {
                    hashMap.put("ad_id_size", Integer.toString(a10.length()));
                }
            }
            if (th2 != null) {
                hashMap.put("error", th2.getClass().getName());
            }
            hashMap.put("tag", "AdvertisingIdClient");
            hashMap.put("time_spent", Long.toString(j10));
            new a(this, hashMap).start();
            return true;
        }
        return false;
    }

    protected final void finalize() {
        b();
        super.finalize();
    }
}
