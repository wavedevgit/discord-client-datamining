package q;

import android.hardware.camera2.CameraCharacteristics;
import android.util.Pair;
import android.util.Size;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.Observer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Executor;
import q.s0;
import x.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s0 implements a0.d0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f47049a;

    /* renamed from: b  reason: collision with root package name */
    private final r.a0 f47050b;

    /* renamed from: c  reason: collision with root package name */
    private final w.h f47051c;

    /* renamed from: e  reason: collision with root package name */
    private u f47053e;

    /* renamed from: h  reason: collision with root package name */
    private final a f47056h;

    /* renamed from: j  reason: collision with root package name */
    private final a0.d2 f47058j;

    /* renamed from: k  reason: collision with root package name */
    private final a0.a1 f47059k;

    /* renamed from: l  reason: collision with root package name */
    private final r.n0 f47060l;

    /* renamed from: d  reason: collision with root package name */
    private final Object f47052d = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a f47054f = null;

    /* renamed from: g  reason: collision with root package name */
    private a f47055g = null;

    /* renamed from: i  reason: collision with root package name */
    private List f47057i = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends androidx.lifecycle.u {

        /* renamed from: m  reason: collision with root package name */
        private LiveData f47061m;

        /* renamed from: n  reason: collision with root package name */
        private final Object f47062n;

        a(Object obj) {
            this.f47062n = obj;
        }

        @Override // androidx.lifecycle.LiveData
        public Object f() {
            LiveData liveData = this.f47061m;
            if (liveData == null) {
                return this.f47062n;
            }
            return liveData.f();
        }

        void r(LiveData liveData) {
            LiveData liveData2 = this.f47061m;
            if (liveData2 != null) {
                super.q(liveData2);
            }
            this.f47061m = liveData;
            super.p(liveData, new Observer() { // from class: q.r0
                @Override // androidx.lifecycle.Observer
                public final void a(Object obj) {
                    s0.a.this.o(obj);
                }
            });
        }
    }

    public s0(String str, r.n0 n0Var) {
        String str2 = (String) b2.e.g(str);
        this.f47049a = str2;
        this.f47060l = n0Var;
        r.a0 c10 = n0Var.c(str2);
        this.f47050b = c10;
        this.f47051c = new w.h(this);
        a0.d2 a10 = androidx.camera.camera2.internal.compat.quirk.a.a(str, c10);
        this.f47058j = a10;
        this.f47059k = new f2(str, a10);
        this.f47056h = new a(x.q.a(q.b.CLOSED));
    }

    private void q() {
        r();
    }

    private void r() {
        String str;
        int o10 = o();
        if (o10 != 0) {
            if (o10 != 1) {
                if (o10 != 2) {
                    if (o10 != 3) {
                        if (o10 != 4) {
                            str = "Unknown value: " + o10;
                        } else {
                            str = "INFO_SUPPORTED_HARDWARE_LEVEL_EXTERNAL";
                        }
                    } else {
                        str = "INFO_SUPPORTED_HARDWARE_LEVEL_3";
                    }
                } else {
                    str = "INFO_SUPPORTED_HARDWARE_LEVEL_LEGACY";
                }
            } else {
                str = "INFO_SUPPORTED_HARDWARE_LEVEL_FULL";
            }
        } else {
            str = "INFO_SUPPORTED_HARDWARE_LEVEL_LIMITED";
        }
        x.y0.e("Camera2CameraInfo", "Device Level: " + str);
    }

    @Override // x.o
    public int a() {
        return j(0);
    }

    @Override // a0.d0
    public String b() {
        return this.f47049a;
    }

    @Override // x.o
    public int c() {
        boolean z10;
        Integer num = (Integer) this.f47050b.a(CameraCharacteristics.LENS_FACING);
        if (num != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "Unable to get the lens facing of the camera.");
        return y3.a(num.intValue());
    }

    @Override // a0.d0
    public List d(int i10) {
        Size[] a10 = this.f47050b.b().a(i10);
        if (a10 != null) {
            return Arrays.asList(a10);
        }
        return Collections.EMPTY_LIST;
    }

    @Override // a0.d0
    public a0.d2 e() {
        return this.f47058j;
    }

    @Override // a0.d0
    public List f(int i10) {
        Size[] c10 = this.f47050b.b().c(i10);
        if (c10 != null) {
            return Arrays.asList(c10);
        }
        return Collections.EMPTY_LIST;
    }

    @Override // a0.d0
    public void g(Executor executor, a0.k kVar) {
        synchronized (this.f47052d) {
            try {
                u uVar = this.f47053e;
                if (uVar == null) {
                    if (this.f47057i == null) {
                        this.f47057i = new ArrayList();
                    }
                    this.f47057i.add(new Pair(kVar, executor));
                    return;
                }
                uVar.w(executor, kVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // x.o
    public String i() {
        if (o() == 2) {
            return "androidx.camera.camera2.legacy";
        }
        return "androidx.camera.camera2";
    }

    @Override // x.o
    public int j(int i10) {
        int n10 = n();
        int b10 = b0.c.b(i10);
        boolean z10 = true;
        if (1 != c()) {
            z10 = false;
        }
        return b0.c.a(b10, n10, z10);
    }

    @Override // a0.d0
    public void k(a0.k kVar) {
        synchronized (this.f47052d) {
            try {
                u uVar = this.f47053e;
                if (uVar == null) {
                    List list = this.f47057i;
                    if (list == null) {
                        return;
                    }
                    Iterator it = list.iterator();
                    while (it.hasNext()) {
                        if (((Pair) it.next()).first == kVar) {
                            it.remove();
                        }
                    }
                    return;
                }
                uVar.X(kVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public w.h l() {
        return this.f47051c;
    }

    public r.a0 m() {
        return this.f47050b;
    }

    int n() {
        Integer num = (Integer) this.f47050b.a(CameraCharacteristics.SENSOR_ORIENTATION);
        b2.e.g(num);
        return num.intValue();
    }

    int o() {
        Integer num = (Integer) this.f47050b.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        b2.e.g(num);
        return num.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(u uVar) {
        synchronized (this.f47052d) {
            try {
                this.f47053e = uVar;
                a aVar = this.f47055g;
                if (aVar != null) {
                    aVar.r(uVar.O().e());
                }
                a aVar2 = this.f47054f;
                if (aVar2 != null) {
                    aVar2.r(this.f47053e.M().f());
                }
                List<Pair> list = this.f47057i;
                if (list != null) {
                    for (Pair pair : list) {
                        this.f47053e.w((Executor) pair.second, (a0.k) pair.first);
                    }
                    this.f47057i = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        q();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(LiveData liveData) {
        this.f47056h.r(liveData);
    }
}
