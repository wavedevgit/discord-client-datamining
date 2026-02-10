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
    private final String f44900a;

    /* renamed from: b  reason: collision with root package name */
    private final r.a0 f44901b;

    /* renamed from: c  reason: collision with root package name */
    private final w.h f44902c;

    /* renamed from: e  reason: collision with root package name */
    private u f44904e;

    /* renamed from: h  reason: collision with root package name */
    private final a f44907h;

    /* renamed from: j  reason: collision with root package name */
    private final a0.d2 f44909j;

    /* renamed from: k  reason: collision with root package name */
    private final a0.a1 f44910k;

    /* renamed from: l  reason: collision with root package name */
    private final r.n0 f44911l;

    /* renamed from: d  reason: collision with root package name */
    private final Object f44903d = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a f44905f = null;

    /* renamed from: g  reason: collision with root package name */
    private a f44906g = null;

    /* renamed from: i  reason: collision with root package name */
    private List f44908i = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends androidx.lifecycle.u {

        /* renamed from: m  reason: collision with root package name */
        private LiveData f44912m;

        /* renamed from: n  reason: collision with root package name */
        private final Object f44913n;

        a(Object obj) {
            this.f44913n = obj;
        }

        @Override // androidx.lifecycle.LiveData
        public Object f() {
            LiveData liveData = this.f44912m;
            if (liveData == null) {
                return this.f44913n;
            }
            return liveData.f();
        }

        void r(LiveData liveData) {
            LiveData liveData2 = this.f44912m;
            if (liveData2 != null) {
                super.q(liveData2);
            }
            this.f44912m = liveData;
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
        this.f44900a = str2;
        this.f44911l = n0Var;
        r.a0 c10 = n0Var.c(str2);
        this.f44901b = c10;
        this.f44902c = new w.h(this);
        a0.d2 a10 = androidx.camera.camera2.internal.compat.quirk.a.a(str, c10);
        this.f44909j = a10;
        this.f44910k = new f2(str, a10);
        this.f44907h = new a(x.q.a(q.b.CLOSED));
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
        return this.f44900a;
    }

    @Override // x.o
    public int c() {
        boolean z10;
        Integer num = (Integer) this.f44901b.a(CameraCharacteristics.LENS_FACING);
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
        Size[] a10 = this.f44901b.b().a(i10);
        if (a10 != null) {
            return Arrays.asList(a10);
        }
        return Collections.EMPTY_LIST;
    }

    @Override // a0.d0
    public a0.d2 e() {
        return this.f44909j;
    }

    @Override // a0.d0
    public List f(int i10) {
        Size[] c10 = this.f44901b.b().c(i10);
        if (c10 != null) {
            return Arrays.asList(c10);
        }
        return Collections.EMPTY_LIST;
    }

    @Override // a0.d0
    public void g(Executor executor, a0.k kVar) {
        synchronized (this.f44903d) {
            try {
                u uVar = this.f44904e;
                if (uVar == null) {
                    if (this.f44908i == null) {
                        this.f44908i = new ArrayList();
                    }
                    this.f44908i.add(new Pair(kVar, executor));
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
        synchronized (this.f44903d) {
            try {
                u uVar = this.f44904e;
                if (uVar == null) {
                    List list = this.f44908i;
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
        return this.f44902c;
    }

    public r.a0 m() {
        return this.f44901b;
    }

    int n() {
        Integer num = (Integer) this.f44901b.a(CameraCharacteristics.SENSOR_ORIENTATION);
        b2.e.g(num);
        return num.intValue();
    }

    int o() {
        Integer num = (Integer) this.f44901b.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        b2.e.g(num);
        return num.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(u uVar) {
        synchronized (this.f44903d) {
            try {
                this.f44904e = uVar;
                a aVar = this.f44906g;
                if (aVar != null) {
                    aVar.r(uVar.O().e());
                }
                a aVar2 = this.f44905f;
                if (aVar2 != null) {
                    aVar2.r(this.f44904e.M().f());
                }
                List<Pair> list = this.f44908i;
                if (list != null) {
                    for (Pair pair : list) {
                        this.f44904e.w((Executor) pair.second, (a0.k) pair.first);
                    }
                    this.f44908i = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        q();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(LiveData liveData) {
        this.f44907h.r(liveData);
    }
}
