package x;

import a0.b2;
import a0.y2;
import android.app.Application;
import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.SystemClock;
import android.util.SparseArray;
import androidx.arch.core.util.Function;
import androidx.camera.core.impl.MetadataHolderService;
import androidx.concurrent.futures.c;
import com.discord.media.utils.DiscordVideoMediaSource;
import com.google.common.util.concurrent.ListenableFuture;
import java.lang.reflect.InvocationTargetException;
import java.util.concurrent.Executor;
import x.i1;
import x.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v {

    /* renamed from: o  reason: collision with root package name */
    private static final Object f53001o = new Object();

    /* renamed from: p  reason: collision with root package name */
    private static final SparseArray f53002p = new SparseArray();

    /* renamed from: a  reason: collision with root package name */
    final a0.i0 f53003a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53004b;

    /* renamed from: c  reason: collision with root package name */
    private final w f53005c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f53006d;

    /* renamed from: e  reason: collision with root package name */
    private final Handler f53007e;

    /* renamed from: f  reason: collision with root package name */
    private final HandlerThread f53008f;

    /* renamed from: g  reason: collision with root package name */
    private a0.c0 f53009g;

    /* renamed from: h  reason: collision with root package name */
    private a0.b0 f53010h;

    /* renamed from: i  reason: collision with root package name */
    private y2 f53011i;

    /* renamed from: j  reason: collision with root package name */
    private final i1 f53012j;

    /* renamed from: k  reason: collision with root package name */
    private final ListenableFuture f53013k;

    /* renamed from: l  reason: collision with root package name */
    private a f53014l;

    /* renamed from: m  reason: collision with root package name */
    private ListenableFuture f53015m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f53016n;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        UNINITIALIZED,
        INITIALIZING,
        INITIALIZING_ERROR,
        INITIALIZED,
        SHUTDOWN
    }

    public v(Context context, w.b bVar) {
        this(context, bVar, new b2());
    }

    /* JADX WARN: Removed duplicated region for block: B:32:0x00c9  */
    /* JADX WARN: Removed duplicated region for block: B:37:0x0106 A[Catch: all -> 0x015c, TRY_ENTER, TryCatch #4 {all -> 0x0160, blocks: (B:3:0x0015, B:5:0x001d, B:7:0x003f, B:9:0x0059, B:11:0x0063, B:18:0x0072, B:20:0x0081, B:21:0x0084, B:24:0x008e, B:25:0x009a, B:26:0x009b, B:27:0x00a7, B:28:0x00a8, B:29:0x00b4, B:30:0x00b5, B:34:0x00ce, B:35:0x0103, B:36:0x0105, B:39:0x010b, B:41:0x0111, B:42:0x0118, B:44:0x011c, B:45:0x0148, B:47:0x014c, B:48:0x0150, B:37:0x0106, B:38:0x010a), top: B:58:0x0015 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static /* synthetic */ void a(final x.v r14, android.content.Context r15, final java.util.concurrent.Executor r16, final int r17, final androidx.concurrent.futures.c.a r18, final long r19) {
        /*
            Method dump skipped, instructions count: 358
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: x.v.a(x.v, android.content.Context, java.util.concurrent.Executor, int, androidx.concurrent.futures.c$a, long):void");
    }

    public static /* synthetic */ Object b(v vVar, Context context, c.a aVar) {
        vVar.k(vVar.f53006d, SystemClock.elapsedRealtime(), 1, context, aVar);
        return "CameraX initInternal";
    }

    private static w.b g(Context context) {
        String str;
        Application b10 = b0.e.b(context);
        if (b10 instanceof w.b) {
            return (w.b) b10;
        }
        try {
            Context a10 = b0.e.a(context);
            Bundle bundle = a10.getPackageManager().getServiceInfo(new ComponentName(a10, MetadataHolderService.class), DiscordVideoMediaSource.DEFAULT_WIDTH).metaData;
            if (bundle != null) {
                str = bundle.getString("androidx.camera.core.impl.MetadataHolderService.DEFAULT_CONFIG_PROVIDER");
            } else {
                str = null;
            }
            if (str == null) {
                y0.c("CameraX", "No default CameraXConfig.Provider specified in meta-data. The most likely cause is you did not include a default implementation in your build such as 'camera-camera2'.");
                return null;
            }
            return (w.b) Class.forName(str).getDeclaredConstructor(null).newInstance(null);
        } catch (PackageManager.NameNotFoundException e10) {
            e = e10;
            y0.d("CameraX", "Failed to retrieve default CameraXConfig.Provider from meta-data", e);
            return null;
        } catch (ClassNotFoundException e11) {
            e = e11;
            y0.d("CameraX", "Failed to retrieve default CameraXConfig.Provider from meta-data", e);
            return null;
        } catch (IllegalAccessException e12) {
            e = e12;
            y0.d("CameraX", "Failed to retrieve default CameraXConfig.Provider from meta-data", e);
            return null;
        } catch (InstantiationException e13) {
            e = e13;
            y0.d("CameraX", "Failed to retrieve default CameraXConfig.Provider from meta-data", e);
            return null;
        } catch (NoSuchMethodException e14) {
            e = e14;
            y0.d("CameraX", "Failed to retrieve default CameraXConfig.Provider from meta-data", e);
            return null;
        } catch (NullPointerException e15) {
            e = e15;
            y0.d("CameraX", "Failed to retrieve default CameraXConfig.Provider from meta-data", e);
            return null;
        } catch (InvocationTargetException e16) {
            e = e16;
            y0.d("CameraX", "Failed to retrieve default CameraXConfig.Provider from meta-data", e);
            return null;
        }
    }

    private static void j(Integer num) {
        synchronized (f53001o) {
            try {
                if (num == null) {
                    return;
                }
                b2.e.c(num.intValue(), 3, 6, "minLogLevel");
                SparseArray sparseArray = f53002p;
                int i10 = 1;
                if (sparseArray.get(num.intValue()) != null) {
                    i10 = 1 + ((Integer) sparseArray.get(num.intValue())).intValue();
                }
                sparseArray.put(num.intValue(), Integer.valueOf(i10));
                o();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void k(final Executor executor, final long j10, final int i10, final Context context, final c.a aVar) {
        executor.execute(new Runnable() { // from class: x.t
            @Override // java.lang.Runnable
            public final void run() {
                v.a(v.this, context, executor, i10, aVar, j10);
            }
        });
    }

    private ListenableFuture l(final Context context) {
        boolean z10;
        ListenableFuture a10;
        synchronized (this.f53004b) {
            if (this.f53014l == a.UNINITIALIZED) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "CameraX.initInternal() should only be called once per instance");
            this.f53014l = a.INITIALIZING;
            a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: x.s
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return v.b(v.this, context, aVar);
                }
            });
        }
        return a10;
    }

    private void m() {
        synchronized (this.f53004b) {
            this.f53014l = a.INITIALIZED;
        }
    }

    private void n(i1.b bVar) {
        int i10;
        if (c4.a.h()) {
            if (bVar != null) {
                i10 = bVar.a();
            } else {
                i10 = -1;
            }
            c4.a.j("CX:CameraProvider-RetryStatus", i10);
        }
    }

    private static void o() {
        SparseArray sparseArray = f53002p;
        if (sparseArray.size() == 0) {
            y0.i();
        } else if (sparseArray.get(3) != null) {
            y0.j(3);
        } else if (sparseArray.get(4) != null) {
            y0.j(4);
        } else if (sparseArray.get(5) != null) {
            y0.j(5);
        } else if (sparseArray.get(6) != null) {
            y0.j(6);
        }
    }

    private static void p(Context context, a0.z1 z1Var, Function function) {
        if (z1Var != null) {
            y0.a("CameraX", "QuirkSettings from CameraXConfig: " + z1Var);
        } else {
            z1Var = (a0.z1) function.apply(context);
            y0.a("CameraX", "QuirkSettings from app metadata: " + z1Var);
        }
        if (z1Var == null) {
            z1Var = a0.a2.f8b;
            y0.a("CameraX", "QuirkSettings by default: " + z1Var);
        }
        a0.a2.b().d(z1Var);
    }

    public a0.b0 d() {
        a0.b0 b0Var = this.f53010h;
        if (b0Var != null) {
            return b0Var;
        }
        throw new IllegalStateException("CameraX not initialized yet.");
    }

    public a0.c0 e() {
        a0.c0 c0Var = this.f53009g;
        if (c0Var != null) {
            return c0Var;
        }
        throw new IllegalStateException("CameraX not initialized yet.");
    }

    public a0.i0 f() {
        return this.f53003a;
    }

    public y2 h() {
        y2 y2Var = this.f53011i;
        if (y2Var != null) {
            return y2Var;
        }
        throw new IllegalStateException("CameraX not initialized yet.");
    }

    public ListenableFuture i() {
        return this.f53013k;
    }

    v(Context context, w.b bVar, Function function) {
        this.f53003a = new a0.i0();
        this.f53004b = new Object();
        this.f53014l = a.UNINITIALIZED;
        this.f53015m = d0.n.p(null);
        if (bVar != null) {
            this.f53005c = bVar.getCameraXConfig();
        } else {
            w.b g10 = g(context);
            if (g10 != null) {
                this.f53005c = g10.getCameraXConfig();
            } else {
                throw new IllegalStateException("CameraX is not configured properly. The most likely cause is you did not include a default implementation in your build such as 'camera-camera2'.");
            }
        }
        p(context, this.f53005c.c0(), function);
        Executor X = this.f53005c.X(null);
        Handler d02 = this.f53005c.d0(null);
        this.f53006d = X == null ? new m() : X;
        if (d02 == null) {
            HandlerThread handlerThread = new HandlerThread("CameraX-scheduler", 10);
            this.f53008f = handlerThread;
            handlerThread.start();
            this.f53007e = w1.g.a(handlerThread.getLooper());
        } else {
            this.f53008f = null;
            this.f53007e = d02;
        }
        Integer num = (Integer) this.f53005c.e(w.O, null);
        this.f53016n = num;
        j(num);
        this.f53012j = new i1.a(this.f53005c.a0()).a();
        this.f53013k = l(context);
    }
}
