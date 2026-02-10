package i9;

import android.os.Handler;
import android.os.Looper;
import i9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends i9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f27795b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f27799f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f27797d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f27798e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f27796c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f27795b) {
                ArrayList arrayList = b.this.f27798e;
                b bVar = b.this;
                bVar.f27798e = bVar.f27797d;
                b.this.f27797d = arrayList;
            }
            int size = b.this.f27798e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0378a) b.this.f27798e.get(i10)).release();
            }
            b.this.f27798e.clear();
        }
    }

    @Override // i9.a
    public void a(a.InterfaceC0378a interfaceC0378a) {
        synchronized (this.f27795b) {
            this.f27797d.remove(interfaceC0378a);
        }
    }

    @Override // i9.a
    public void d(a.InterfaceC0378a interfaceC0378a) {
        if (!i9.a.c()) {
            interfaceC0378a.release();
            return;
        }
        synchronized (this.f27795b) {
            try {
                if (this.f27797d.contains(interfaceC0378a)) {
                    return;
                }
                this.f27797d.add(interfaceC0378a);
                boolean z10 = true;
                if (this.f27797d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f27796c.post(this.f27799f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
