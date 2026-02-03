package q;

import a0.i2;
import a0.p0;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import android.hardware.camera2.params.DynamicRangeProfiles;
import android.hardware.camera2.params.OutputConfiguration;
import android.os.Build;
import android.view.Surface;
import androidx.camera.camera2.internal.compat.quirk.CaptureNoResponseQuirk;
import androidx.camera.core.impl.utils.SurfaceUtil;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CancellationException;
import q.g4;
import q.i2;
import q.r4;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y2 implements z2 {

    /* renamed from: a  reason: collision with root package name */
    final Object f47117a;

    /* renamed from: b  reason: collision with root package name */
    private final List f47118b;

    /* renamed from: c  reason: collision with root package name */
    private final d f47119c;

    /* renamed from: d  reason: collision with root package name */
    g4.a f47120d;

    /* renamed from: e  reason: collision with root package name */
    g4 f47121e;

    /* renamed from: f  reason: collision with root package name */
    a0.i2 f47122f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f47123g;

    /* renamed from: h  reason: collision with root package name */
    List f47124h;

    /* renamed from: i  reason: collision with root package name */
    c f47125i;

    /* renamed from: j  reason: collision with root package name */
    ListenableFuture f47126j;

    /* renamed from: k  reason: collision with root package name */
    c.a f47127k;

    /* renamed from: l  reason: collision with root package name */
    private Map f47128l;

    /* renamed from: m  reason: collision with root package name */
    private final u.w f47129m;

    /* renamed from: n  reason: collision with root package name */
    private final u.a0 f47130n;

    /* renamed from: o  reason: collision with root package name */
    private final u.t f47131o;

    /* renamed from: p  reason: collision with root package name */
    private final s.f f47132p;

    /* renamed from: q  reason: collision with root package name */
    private final u.z f47133q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f47134r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends CameraCaptureSession.CaptureCallback {
        b() {
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureCompleted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, TotalCaptureResult totalCaptureResult) {
            synchronized (y2.this.f47117a) {
                try {
                    a0.i2 i2Var = y2.this.f47122f;
                    if (i2Var == null) {
                        return;
                    }
                    a0.p0 j10 = i2Var.j();
                    x.y0.a("CaptureSession", "Submit FLASH_MODE_OFF request");
                    y2 y2Var = y2.this;
                    y2Var.a(Collections.singletonList(y2Var.f47130n.a(j10)));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        UNINITIALIZED,
        INITIALIZED,
        GET_SURFACE,
        OPENING,
        OPENED,
        CLOSED,
        RELEASING,
        RELEASED
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d extends g4.c {
        d() {
        }

        @Override // q.g4.c
        public void r(g4 g4Var) {
            synchronized (y2.this.f47117a) {
                try {
                    switch (y2.this.f47125i.ordinal()) {
                        case 0:
                        case 1:
                        case 2:
                        case 4:
                            throw new IllegalStateException("onConfigureFailed() should not be possible in state: " + y2.this.f47125i);
                        case 3:
                        case 5:
                        case 6:
                            y2.this.r();
                            break;
                        case 7:
                            x.y0.a("CaptureSession", "ConfigureFailed callback after change to RELEASED state");
                            break;
                    }
                    x.y0.c("CaptureSession", "CameraCaptureSession.onConfigureFailed() " + y2.this.f47125i);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // q.g4.c
        public void s(g4 g4Var) {
            synchronized (y2.this.f47117a) {
                try {
                    switch (y2.this.f47125i.ordinal()) {
                        case 0:
                        case 1:
                        case 2:
                        case 4:
                        case 7:
                            throw new IllegalStateException("onConfigured() should not be possible in state: " + y2.this.f47125i);
                        case 3:
                            y2 y2Var = y2.this;
                            y2Var.f47125i = c.OPENED;
                            y2Var.f47121e = g4Var;
                            x.y0.a("CaptureSession", "Attempting to send capture request onConfigured");
                            y2 y2Var2 = y2.this;
                            y2Var2.x(y2Var2.f47122f);
                            y2.this.w();
                            break;
                        case 5:
                            y2.this.f47121e = g4Var;
                            break;
                        case 6:
                            g4Var.close();
                            break;
                    }
                    x.y0.a("CaptureSession", "CameraCaptureSession.onConfigured() mState=" + y2.this.f47125i);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // q.g4.c
        public void t(g4 g4Var) {
            synchronized (y2.this.f47117a) {
                try {
                    if (y2.this.f47125i.ordinal() != 0) {
                        x.y0.a("CaptureSession", "CameraCaptureSession.onReady() " + y2.this.f47125i);
                    } else {
                        throw new IllegalStateException("onReady() should not be possible in state: " + y2.this.f47125i);
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // q.g4.c
        public void u(g4 g4Var) {
            synchronized (y2.this.f47117a) {
                try {
                    if (y2.this.f47125i != c.UNINITIALIZED) {
                        x.y0.a("CaptureSession", "onSessionFinished()");
                        y2.this.r();
                    } else {
                        throw new IllegalStateException("onSessionFinished() should not be possible in state: " + y2.this.f47125i);
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y2(s.f fVar) {
        this(fVar, false);
    }

    public static /* synthetic */ void j(y2 y2Var) {
        synchronized (y2Var.f47117a) {
            if (y2Var.f47118b.isEmpty()) {
                return;
            }
            y2Var.v(y2Var.f47118b);
            y2Var.f47118b.clear();
        }
    }

    public static /* synthetic */ Object k(y2 y2Var, c.a aVar) {
        boolean z10;
        String str;
        synchronized (y2Var.f47117a) {
            if (y2Var.f47127k == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "Release completer expected to be null");
            y2Var.f47127k = aVar;
            str = "Release[session=" + y2Var + "]";
        }
        return str;
    }

    public static /* synthetic */ void m(y2 y2Var, CameraCaptureSession cameraCaptureSession, int i10, boolean z10) {
        synchronized (y2Var.f47117a) {
            try {
                if (y2Var.f47125i == c.OPENED) {
                    y2Var.x(y2Var.f47122f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private CameraCaptureSession.CaptureCallback o(List list, CameraCaptureSession.CaptureCallback... captureCallbackArr) {
        ArrayList arrayList = new ArrayList(list.size() + captureCallbackArr.length);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(r2.a((a0.k) it.next()));
        }
        Collections.addAll(arrayList, captureCallbackArr);
        return t0.a(arrayList);
    }

    private static List p(List list, int i10) {
        try {
            return (List) OutputConfiguration.class.getMethod("createInstancesForMultiResolutionOutput", Collection.class, Integer.TYPE).invoke(null, list, Integer.valueOf(i10));
        } catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException e10) {
            x.y0.c("CaptureSession", "Failed to create instances for multi-resolution output, " + e10.getMessage());
            return null;
        }
    }

    private static Map q(Map map, Map map2) {
        HashMap hashMap = new HashMap();
        for (Integer num : map.keySet()) {
            num.intValue();
            ArrayList arrayList = new ArrayList();
            int i10 = 0;
            for (i2.f fVar : (List) map.get(num)) {
                SurfaceUtil.a a10 = SurfaceUtil.a((Surface) map2.get(fVar.f()));
                if (i10 == 0) {
                    i10 = a10.f2006a;
                }
                t2.a();
                int i11 = a10.f2007b;
                int i12 = a10.f2008c;
                String d10 = fVar.d();
                Objects.requireNonNull(d10);
                arrayList.add(s2.a(i11, i12, d10));
            }
            if (i10 != 0 && !arrayList.isEmpty()) {
                List p10 = p(arrayList, i10);
                if (p10 != null) {
                    for (i2.f fVar2 : (List) map.get(num)) {
                        OutputConfiguration outputConfiguration = (OutputConfiguration) p10.remove(0);
                        outputConfiguration.addSurface((Surface) map2.get(fVar2.f()));
                        hashMap.put(fVar2, new s.j(outputConfiguration));
                    }
                }
            } else {
                x.y0.c("CaptureSession", "Skips to create instances for multi-resolution output. imageFormat: " + i10 + ", streamInfos size: " + arrayList.size());
            }
        }
        return hashMap;
    }

    private s.j s(i2.f fVar, Map map, String str) {
        long j10;
        DynamicRangeProfiles d10;
        Surface surface = (Surface) map.get(fVar.f());
        b2.e.h(surface, "Surface in OutputConfig not found in configuredSurfaceMap.");
        s.j jVar = new s.j(fVar.g(), surface);
        if (str != null) {
            jVar.g(str);
        } else {
            jVar.g(fVar.d());
        }
        if (fVar.c() == 0) {
            jVar.f(1);
        } else if (fVar.c() == 1) {
            jVar.f(2);
        }
        if (!fVar.e().isEmpty()) {
            jVar.b();
            for (a0.w0 w0Var : fVar.e()) {
                Surface surface2 = (Surface) map.get(w0Var);
                b2.e.h(surface2, "Surface in OutputConfig not found in configuredSurfaceMap.");
                jVar.a(surface2);
            }
        }
        if (Build.VERSION.SDK_INT >= 33 && (d10 = this.f47132p.d()) != null) {
            x.z b10 = fVar.b();
            Long a10 = s.c.a(b10, d10);
            if (a10 == null) {
                x.y0.c("CaptureSession", "Requested dynamic range is not supported. Defaulting to STANDARD dynamic range profile.\nRequested dynamic range:\n  " + b10);
            } else {
                j10 = a10.longValue();
                jVar.e(j10);
                return jVar;
            }
        }
        j10 = 1;
        jVar.e(j10);
        return jVar;
    }

    private List t(List list) {
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            s.j jVar = (s.j) it.next();
            if (!arrayList.contains(jVar.d())) {
                arrayList.add(jVar.d());
                arrayList2.add(jVar);
            }
        }
        return arrayList2;
    }

    private static Map u(Collection collection) {
        HashMap hashMap = new HashMap();
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            i2.f fVar = (i2.f) it.next();
            if (fVar.g() > 0 && fVar.e().isEmpty()) {
                List list = (List) hashMap.get(Integer.valueOf(fVar.g()));
                if (list == null) {
                    list = new ArrayList();
                    hashMap.put(Integer.valueOf(fVar.g()), list);
                }
                list.add(fVar);
            }
        }
        HashMap hashMap2 = new HashMap();
        for (Integer num : hashMap.keySet()) {
            num.intValue();
            if (((List) hashMap.get(num)).size() >= 2) {
                hashMap2.put(num, (List) hashMap.get(num));
            }
        }
        return hashMap2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ListenableFuture y(List list, a0.i2 i2Var, CameraDevice cameraDevice) {
        s.j jVar;
        synchronized (this.f47117a) {
            try {
                int ordinal = this.f47125i.ordinal();
                if (ordinal != 0 && ordinal != 1) {
                    if (ordinal != 2) {
                        if (ordinal != 4) {
                            return d0.n.n(new CancellationException("openCaptureSession() not execute in state: " + this.f47125i));
                        }
                    } else {
                        this.f47123g.clear();
                        for (int i10 = 0; i10 < list.size(); i10++) {
                            this.f47123g.put((a0.w0) this.f47124h.get(i10), (Surface) list.get(i10));
                        }
                        this.f47125i = c.OPENING;
                        x.y0.a("CaptureSession", "Opening capture session.");
                        g4.c w10 = r4.w(this.f47119c, new r4.a(i2Var.k()));
                        p.a aVar = new p.a(i2Var.f());
                        p0.a j10 = p0.a.j(i2Var.j());
                        Map hashMap = new HashMap();
                        if (this.f47134r && Build.VERSION.SDK_INT >= 35) {
                            hashMap = q(u(i2Var.h()), this.f47123g);
                        }
                        ArrayList arrayList = new ArrayList();
                        String a02 = aVar.a0(null);
                        for (i2.f fVar : i2Var.h()) {
                            if (this.f47134r && Build.VERSION.SDK_INT >= 35) {
                                jVar = (s.j) hashMap.get(fVar);
                            } else {
                                jVar = null;
                            }
                            if (jVar == null) {
                                jVar = s(fVar, this.f47123g, a02);
                                if (this.f47128l.containsKey(fVar.f())) {
                                    jVar.h(((Long) this.f47128l.get(fVar.f())).longValue());
                                }
                            }
                            arrayList.add(jVar);
                        }
                        s.p l10 = this.f47120d.l(i2Var.l(), t(arrayList), w10);
                        if (i2Var.o() == 5 && i2Var.g() != null) {
                            l10.f(s.i.b(i2Var.g()));
                        }
                        try {
                            CaptureRequest f10 = d2.f(j10.h(), cameraDevice, this.f47133q);
                            if (f10 != null) {
                                l10.g(f10);
                            }
                            return this.f47120d.i(cameraDevice, l10, this.f47124h);
                        } catch (CameraAccessException e10) {
                            return d0.n.n(e10);
                        }
                    }
                }
                return d0.n.n(new IllegalStateException("openCaptureSession() should not be possible in state: " + this.f47125i));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // q.z2
    public void a(List list) {
        synchronized (this.f47117a) {
            try {
                switch (this.f47125i.ordinal()) {
                    case 0:
                        throw new IllegalStateException("issueCaptureRequests() should not be possible in state: " + this.f47125i);
                    case 1:
                    case 2:
                    case 3:
                        this.f47118b.addAll(list);
                        break;
                    case 4:
                        this.f47118b.addAll(list);
                        w();
                        break;
                    case 5:
                    case 6:
                    case 7:
                        throw new IllegalStateException("Cannot issue capture request on a closed/released session.");
                }
            } finally {
            }
        }
    }

    @Override // q.z2
    public boolean b() {
        boolean z10;
        synchronized (this.f47117a) {
            try {
                c cVar = this.f47125i;
                if (cVar != c.OPENED && cVar != c.OPENING) {
                    z10 = false;
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    @Override // q.z2
    public ListenableFuture c(final a0.i2 i2Var, final CameraDevice cameraDevice, g4.a aVar) {
        synchronized (this.f47117a) {
            try {
                if (this.f47125i.ordinal() != 1) {
                    x.y0.c("CaptureSession", "Open not allowed in state: " + this.f47125i);
                    return d0.n.n(new IllegalStateException("open() should not allow the state: " + this.f47125i));
                }
                this.f47125i = c.GET_SURFACE;
                ArrayList arrayList = new ArrayList(i2Var.n());
                this.f47124h = arrayList;
                this.f47120d = aVar;
                d0.d f10 = d0.d.b(aVar.b(arrayList, 5000L)).f(new d0.a() { // from class: q.w2
                    @Override // d0.a
                    public final ListenableFuture apply(Object obj) {
                        ListenableFuture y10;
                        y10 = y2.this.y((List) obj, i2Var, cameraDevice);
                        return y10;
                    }
                }, this.f47120d.a());
                d0.n.j(f10, new a(), this.f47120d.a());
                return d0.n.s(f10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // q.z2
    public void close() {
        synchronized (this.f47117a) {
            try {
                int ordinal = this.f47125i.ordinal();
                if (ordinal != 0) {
                    if (ordinal != 1) {
                        if (ordinal != 2) {
                            if (ordinal == 3 || ordinal == 4) {
                                g4.a aVar = this.f47120d;
                                b2.e.h(aVar, "The Opener shouldn't null in state:" + this.f47125i);
                                this.f47120d.stop();
                                this.f47125i = c.CLOSED;
                                this.f47131o.g();
                                this.f47122f = null;
                            }
                        } else {
                            g4.a aVar2 = this.f47120d;
                            b2.e.h(aVar2, "The Opener shouldn't null in state:" + this.f47125i);
                            this.f47120d.stop();
                        }
                    }
                    this.f47125i = c.RELEASED;
                } else {
                    throw new IllegalStateException("close() should not be possible in state: " + this.f47125i);
                }
            } finally {
            }
        }
    }

    @Override // q.z2
    public void d() {
        ArrayList<a0.p0> arrayList;
        synchronized (this.f47117a) {
            try {
                if (!this.f47118b.isEmpty()) {
                    arrayList = new ArrayList(this.f47118b);
                    this.f47118b.clear();
                } else {
                    arrayList = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (arrayList != null) {
            for (a0.p0 p0Var : arrayList) {
                for (a0.k kVar : p0Var.c()) {
                    kVar.a(p0Var.f());
                }
            }
        }
    }

    @Override // q.z2
    public void e(a0.i2 i2Var) {
        synchronized (this.f47117a) {
            try {
                switch (this.f47125i.ordinal()) {
                    case 0:
                        throw new IllegalStateException("setSessionConfig() should not be possible in state: " + this.f47125i);
                    case 1:
                    case 2:
                    case 3:
                        this.f47122f = i2Var;
                        break;
                    case 4:
                        this.f47122f = i2Var;
                        if (i2Var == null) {
                            return;
                        }
                        if (!this.f47123g.keySet().containsAll(i2Var.n())) {
                            x.y0.c("CaptureSession", "Does not have the proper configured lists");
                            return;
                        }
                        x.y0.a("CaptureSession", "Attempting to submit CaptureRequest after setting");
                        x(this.f47122f);
                        break;
                    case 5:
                    case 6:
                    case 7:
                        throw new IllegalStateException("Session configuration cannot be set on a closed/released session.");
                }
            } finally {
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x0051 A[Catch: all -> 0x0018, TryCatch #0 {, blocks: (B:4:0x0003, B:5:0x0009, B:28:0x0089, B:7:0x000e, B:10:0x0014, B:16:0x0023, B:15:0x001c, B:17:0x0028, B:19:0x0051, B:20:0x0055, B:22:0x0059, B:23:0x0064, B:24:0x0066, B:26:0x0068, B:27:0x0085, B:31:0x0090, B:32:0x00a8), top: B:35:0x0003, inners: #1 }] */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0059 A[Catch: all -> 0x0018, TryCatch #0 {, blocks: (B:4:0x0003, B:5:0x0009, B:28:0x0089, B:7:0x000e, B:10:0x0014, B:16:0x0023, B:15:0x001c, B:17:0x0028, B:19:0x0051, B:20:0x0055, B:22:0x0059, B:23:0x0064, B:24:0x0066, B:26:0x0068, B:27:0x0085, B:31:0x0090, B:32:0x00a8), top: B:35:0x0003, inners: #1 }] */
    @Override // q.z2
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.common.util.concurrent.ListenableFuture f(boolean r4) {
        /*
            r3 = this;
            java.lang.Object r0 = r3.f47117a
            monitor-enter(r0)
            q.y2$c r1 = r3.f47125i     // Catch: java.lang.Throwable -> L18
            int r1 = r1.ordinal()     // Catch: java.lang.Throwable -> L18
            switch(r1) {
                case 0: goto L90;
                case 1: goto L85;
                case 2: goto L68;
                case 3: goto L28;
                case 4: goto Le;
                case 5: goto Le;
                case 6: goto L55;
                default: goto Lc;
            }     // Catch: java.lang.Throwable -> L18
        Lc:
            goto L89
        Le:
            q.g4 r1 = r3.f47121e     // Catch: java.lang.Throwable -> L18
            if (r1 == 0) goto L28
            if (r4 == 0) goto L23
            r1.f()     // Catch: java.lang.Throwable -> L18 android.hardware.camera2.CameraAccessException -> L1b
            goto L23
        L18:
            r4 = move-exception
            goto La9
        L1b:
            r4 = move-exception
            java.lang.String r1 = "CaptureSession"
            java.lang.String r2 = "Unable to abort captures."
            x.y0.d(r1, r2, r4)     // Catch: java.lang.Throwable -> L18
        L23:
            q.g4 r4 = r3.f47121e     // Catch: java.lang.Throwable -> L18
            r4.close()     // Catch: java.lang.Throwable -> L18
        L28:
            q.y2$c r4 = q.y2.c.RELEASING     // Catch: java.lang.Throwable -> L18
            r3.f47125i = r4     // Catch: java.lang.Throwable -> L18
            u.t r4 = r3.f47131o     // Catch: java.lang.Throwable -> L18
            r4.g()     // Catch: java.lang.Throwable -> L18
            q.g4$a r4 = r3.f47120d     // Catch: java.lang.Throwable -> L18
            java.lang.StringBuilder r1 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L18
            r1.<init>()     // Catch: java.lang.Throwable -> L18
            java.lang.String r2 = "The Opener shouldn't null in state:"
            r1.append(r2)     // Catch: java.lang.Throwable -> L18
            q.y2$c r2 = r3.f47125i     // Catch: java.lang.Throwable -> L18
            r1.append(r2)     // Catch: java.lang.Throwable -> L18
            java.lang.String r1 = r1.toString()     // Catch: java.lang.Throwable -> L18
            b2.e.h(r4, r1)     // Catch: java.lang.Throwable -> L18
            q.g4$a r4 = r3.f47120d     // Catch: java.lang.Throwable -> L18
            boolean r4 = r4.stop()     // Catch: java.lang.Throwable -> L18
            if (r4 == 0) goto L55
            r3.r()     // Catch: java.lang.Throwable -> L18
            goto L89
        L55:
            com.google.common.util.concurrent.ListenableFuture r4 = r3.f47126j     // Catch: java.lang.Throwable -> L18
            if (r4 != 0) goto L64
            q.v2 r4 = new q.v2     // Catch: java.lang.Throwable -> L18
            r4.<init>()     // Catch: java.lang.Throwable -> L18
            com.google.common.util.concurrent.ListenableFuture r4 = androidx.concurrent.futures.c.a(r4)     // Catch: java.lang.Throwable -> L18
            r3.f47126j = r4     // Catch: java.lang.Throwable -> L18
        L64:
            com.google.common.util.concurrent.ListenableFuture r4 = r3.f47126j     // Catch: java.lang.Throwable -> L18
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L18
            return r4
        L68:
            q.g4$a r4 = r3.f47120d     // Catch: java.lang.Throwable -> L18
            java.lang.StringBuilder r1 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L18
            r1.<init>()     // Catch: java.lang.Throwable -> L18
            java.lang.String r2 = "The Opener shouldn't null in state:"
            r1.append(r2)     // Catch: java.lang.Throwable -> L18
            q.y2$c r2 = r3.f47125i     // Catch: java.lang.Throwable -> L18
            r1.append(r2)     // Catch: java.lang.Throwable -> L18
            java.lang.String r1 = r1.toString()     // Catch: java.lang.Throwable -> L18
            b2.e.h(r4, r1)     // Catch: java.lang.Throwable -> L18
            q.g4$a r4 = r3.f47120d     // Catch: java.lang.Throwable -> L18
            r4.stop()     // Catch: java.lang.Throwable -> L18
        L85:
            q.y2$c r4 = q.y2.c.RELEASED     // Catch: java.lang.Throwable -> L18
            r3.f47125i = r4     // Catch: java.lang.Throwable -> L18
        L89:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L18
            r4 = 0
            com.google.common.util.concurrent.ListenableFuture r4 = d0.n.p(r4)
            return r4
        L90:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException     // Catch: java.lang.Throwable -> L18
            java.lang.StringBuilder r1 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L18
            r1.<init>()     // Catch: java.lang.Throwable -> L18
            java.lang.String r2 = "release() should not be possible in state: "
            r1.append(r2)     // Catch: java.lang.Throwable -> L18
            q.y2$c r2 = r3.f47125i     // Catch: java.lang.Throwable -> L18
            r1.append(r2)     // Catch: java.lang.Throwable -> L18
            java.lang.String r1 = r1.toString()     // Catch: java.lang.Throwable -> L18
            r4.<init>(r1)     // Catch: java.lang.Throwable -> L18
            throw r4     // Catch: java.lang.Throwable -> L18
        La9:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L18
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: q.y2.f(boolean):com.google.common.util.concurrent.ListenableFuture");
    }

    @Override // q.z2
    public List g() {
        List unmodifiableList;
        synchronized (this.f47117a) {
            unmodifiableList = Collections.unmodifiableList(this.f47118b);
        }
        return unmodifiableList;
    }

    @Override // q.z2
    public a0.i2 h() {
        a0.i2 i2Var;
        synchronized (this.f47117a) {
            i2Var = this.f47122f;
        }
        return i2Var;
    }

    @Override // q.z2
    public void i(Map map) {
        synchronized (this.f47117a) {
            this.f47128l = map;
        }
    }

    void r() {
        c cVar = this.f47125i;
        c cVar2 = c.RELEASED;
        if (cVar == cVar2) {
            x.y0.a("CaptureSession", "Skipping finishClose due to being state RELEASED.");
            return;
        }
        this.f47125i = cVar2;
        this.f47121e = null;
        c.a aVar = this.f47127k;
        if (aVar != null) {
            aVar.c(null);
            this.f47127k = null;
        }
    }

    int v(List list) {
        i2 i2Var;
        ArrayList arrayList;
        boolean z10;
        synchronized (this.f47117a) {
            try {
                if (this.f47125i != c.OPENED) {
                    x.y0.a("CaptureSession", "Skipping issueBurstCaptureRequest due to session closed");
                    return -1;
                } else if (list.isEmpty()) {
                    return -1;
                } else {
                    try {
                        i2Var = new i2();
                        arrayList = new ArrayList();
                        x.y0.a("CaptureSession", "Issuing capture request.");
                        Iterator it = list.iterator();
                        z10 = false;
                        while (it.hasNext()) {
                            a0.p0 p0Var = (a0.p0) it.next();
                            if (p0Var.i().isEmpty()) {
                                x.y0.a("CaptureSession", "Skipping issuing empty capture request.");
                            } else {
                                Iterator it2 = p0Var.i().iterator();
                                while (true) {
                                    if (it2.hasNext()) {
                                        a0.w0 w0Var = (a0.w0) it2.next();
                                        if (!this.f47123g.containsKey(w0Var)) {
                                            x.y0.a("CaptureSession", "Skipping capture request with invalid surface: " + w0Var);
                                            break;
                                        }
                                    } else {
                                        if (p0Var.k() == 2) {
                                            z10 = true;
                                        }
                                        p0.a j10 = p0.a.j(p0Var);
                                        if (p0Var.k() == 5 && p0Var.d() != null) {
                                            j10.n(p0Var.d());
                                        }
                                        a0.i2 i2Var2 = this.f47122f;
                                        if (i2Var2 != null) {
                                            j10.e(i2Var2.j().g());
                                        }
                                        j10.e(p0Var.g());
                                        CaptureRequest e10 = d2.e(j10.h(), this.f47121e.g(), this.f47123g, false, this.f47133q);
                                        if (e10 == null) {
                                            x.y0.a("CaptureSession", "Skipping issuing request without surface.");
                                            return -1;
                                        }
                                        ArrayList arrayList2 = new ArrayList();
                                        for (a0.k kVar : p0Var.c()) {
                                            r2.b(kVar, arrayList2);
                                        }
                                        i2Var.a(e10, arrayList2);
                                        arrayList.add(e10);
                                    }
                                }
                            }
                        }
                    } catch (CameraAccessException e11) {
                        x.y0.c("CaptureSession", "Unable to access camera: " + e11.getMessage());
                        Thread.dumpStack();
                    }
                    if (!arrayList.isEmpty()) {
                        if (this.f47129m.a(arrayList, z10)) {
                            this.f47121e.m();
                            i2Var.c(new i2.a() { // from class: q.u2
                                @Override // q.i2.a
                                public final void a(CameraCaptureSession cameraCaptureSession, int i10, boolean z11) {
                                    y2.m(y2.this, cameraCaptureSession, i10, z11);
                                }
                            });
                        }
                        if (this.f47130n.b(arrayList, z10)) {
                            i2Var.a((CaptureRequest) arrayList.get(arrayList.size() - 1), Collections.singletonList(new b()));
                        }
                        return this.f47121e.j(arrayList, i2Var);
                    }
                    x.y0.a("CaptureSession", "Skipping issuing burst request due to no valid request elements");
                    return -1;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void w() {
        this.f47131o.e().a(new Runnable() { // from class: q.x2
            @Override // java.lang.Runnable
            public final void run() {
                y2.j(y2.this);
            }
        }, c0.a.a());
    }

    int x(a0.i2 i2Var) {
        synchronized (this.f47117a) {
            try {
            } catch (Throwable th2) {
                throw th2;
            }
            if (i2Var == null) {
                x.y0.a("CaptureSession", "Skipping issueRepeatingCaptureRequests for no configuration case.");
                return -1;
            } else if (this.f47125i != c.OPENED) {
                x.y0.a("CaptureSession", "Skipping issueRepeatingCaptureRequests due to session closed");
                return -1;
            } else {
                a0.p0 j10 = i2Var.j();
                if (j10.i().isEmpty()) {
                    x.y0.a("CaptureSession", "Skipping issueRepeatingCaptureRequests for no surface.");
                    try {
                        this.f47121e.m();
                    } catch (CameraAccessException e10) {
                        x.y0.c("CaptureSession", "Unable to access camera: " + e10.getMessage());
                        Thread.dumpStack();
                    }
                    return -1;
                }
                try {
                    x.y0.a("CaptureSession", "Issuing request for session.");
                    CaptureRequest e11 = d2.e(j10, this.f47121e.g(), this.f47123g, true, this.f47133q);
                    if (e11 == null) {
                        x.y0.a("CaptureSession", "Skipping issuing empty request for session.");
                        return -1;
                    }
                    return this.f47121e.h(e11, this.f47131o.d(o(j10.c(), new CameraCaptureSession.CaptureCallback[0])));
                } catch (CameraAccessException e12) {
                    x.y0.c("CaptureSession", "Unable to access camera: " + e12.getMessage());
                    Thread.dumpStack();
                    return -1;
                }
                throw th2;
            }
        }
    }

    y2(s.f fVar, boolean z10) {
        this(fVar, new a0.d2(Collections.EMPTY_LIST), z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y2(s.f fVar, a0.d2 d2Var) {
        this(fVar, d2Var, false);
    }

    y2(s.f fVar, a0.d2 d2Var, boolean z10) {
        this.f47117a = new Object();
        this.f47118b = new ArrayList();
        this.f47123g = new HashMap();
        this.f47124h = Collections.EMPTY_LIST;
        this.f47125i = c.UNINITIALIZED;
        this.f47128l = new HashMap();
        this.f47129m = new u.w();
        this.f47130n = new u.a0();
        this.f47125i = c.INITIALIZED;
        this.f47132p = fVar;
        this.f47119c = new d();
        this.f47131o = new u.t(d2Var.a(CaptureNoResponseQuirk.class));
        this.f47133q = new u.z(d2Var);
        this.f47134r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {
        a() {
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            synchronized (y2.this.f47117a) {
                try {
                    y2.this.f47120d.stop();
                    int ordinal = y2.this.f47125i.ordinal();
                    if ((ordinal == 3 || ordinal == 5 || ordinal == 6) && !(th2 instanceof CancellationException)) {
                        x.y0.m("CaptureSession", "Opening session with fail " + y2.this.f47125i, th2);
                        y2.this.r();
                    }
                } finally {
                }
            }
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
        }
    }
}
