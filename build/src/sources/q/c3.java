package q;

import android.hardware.camera2.CameraDevice;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Executor;
import q.c3;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c3 {

    /* renamed from: a  reason: collision with root package name */
    final Executor f43267a;

    /* renamed from: b  reason: collision with root package name */
    final Object f43268b = new Object();

    /* renamed from: c  reason: collision with root package name */
    final Set f43269c = new LinkedHashSet();

    /* renamed from: d  reason: collision with root package name */
    final Set f43270d = new LinkedHashSet();

    /* renamed from: e  reason: collision with root package name */
    final Set f43271e = new LinkedHashSet();

    /* renamed from: f  reason: collision with root package name */
    private final CameraDevice.StateCallback f43272f = new a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public c3(Executor executor) {
        this.f43267a = executor;
    }

    private void a(g4 g4Var) {
        g4 g4Var2;
        Iterator it = f().iterator();
        while (it.hasNext() && (g4Var2 = (g4) it.next()) != g4Var) {
            g4Var2.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            g4 g4Var = (g4) it.next();
            g4Var.c().q(g4Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CameraDevice.StateCallback c() {
        return this.f43272f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List d() {
        ArrayList arrayList;
        synchronized (this.f43268b) {
            arrayList = new ArrayList(this.f43269c);
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List e() {
        ArrayList arrayList;
        synchronized (this.f43268b) {
            arrayList = new ArrayList(this.f43271e);
        }
        return arrayList;
    }

    List f() {
        ArrayList arrayList;
        synchronized (this.f43268b) {
            arrayList = new ArrayList();
            arrayList.addAll(d());
            arrayList.addAll(e());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(g4 g4Var) {
        synchronized (this.f43268b) {
            this.f43269c.remove(g4Var);
            this.f43270d.remove(g4Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(g4 g4Var) {
        synchronized (this.f43268b) {
            this.f43270d.add(g4Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(g4 g4Var) {
        a(g4Var);
        synchronized (this.f43268b) {
            this.f43271e.remove(g4Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(g4 g4Var) {
        synchronized (this.f43268b) {
            this.f43269c.add(g4Var);
            this.f43271e.remove(g4Var);
        }
        a(g4Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(g4 g4Var) {
        synchronized (this.f43268b) {
            this.f43271e.add(g4Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends CameraDevice.StateCallback {
        a() {
        }

        public static /* synthetic */ void a(LinkedHashSet linkedHashSet, int i10) {
            Iterator it = linkedHashSet.iterator();
            while (it.hasNext()) {
                ((g4) it.next()).e(i10);
            }
        }

        private void c() {
            List<g4> f10;
            synchronized (c3.this.f43268b) {
                f10 = c3.this.f();
                c3.this.f43271e.clear();
                c3.this.f43269c.clear();
                c3.this.f43270d.clear();
            }
            for (g4 g4Var : f10) {
                g4Var.d();
            }
        }

        private void d(final int i10) {
            final LinkedHashSet linkedHashSet = new LinkedHashSet();
            synchronized (c3.this.f43268b) {
                linkedHashSet.addAll(c3.this.f43271e);
                linkedHashSet.addAll(c3.this.f43269c);
            }
            c3.this.f43267a.execute(new Runnable() { // from class: q.b3
                @Override // java.lang.Runnable
                public final void run() {
                    c3.a.a(linkedHashSet, i10);
                }
            });
        }

        private void e() {
            final LinkedHashSet linkedHashSet = new LinkedHashSet();
            synchronized (c3.this.f43268b) {
                linkedHashSet.addAll(c3.this.f43271e);
                linkedHashSet.addAll(c3.this.f43269c);
            }
            c3.this.f43267a.execute(new Runnable() { // from class: q.a3
                @Override // java.lang.Runnable
                public final void run() {
                    c3.b(linkedHashSet);
                }
            });
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onClosed(CameraDevice cameraDevice) {
            e();
            c();
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(CameraDevice cameraDevice) {
            e();
            c();
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onError(CameraDevice cameraDevice, int i10) {
            e();
            d(i10);
            c();
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(CameraDevice cameraDevice) {
        }
    }
}
