package h9;

import android.os.Handler;
import android.os.Looper;
import h9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends h9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f27371b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f27375f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f27373d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f27374e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f27372c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f27371b) {
                ArrayList arrayList = b.this.f27374e;
                b bVar = b.this;
                bVar.f27374e = bVar.f27373d;
                b.this.f27373d = arrayList;
            }
            int size = b.this.f27374e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0348a) b.this.f27374e.get(i10)).release();
            }
            b.this.f27374e.clear();
        }
    }

    @Override // h9.a
    public void a(a.InterfaceC0348a interfaceC0348a) {
        synchronized (this.f27371b) {
            this.f27373d.remove(interfaceC0348a);
        }
    }

    @Override // h9.a
    public void d(a.InterfaceC0348a interfaceC0348a) {
        if (!h9.a.c()) {
            interfaceC0348a.release();
            return;
        }
        synchronized (this.f27371b) {
            try {
                if (this.f27373d.contains(interfaceC0348a)) {
                    return;
                }
                this.f27373d.add(interfaceC0348a);
                boolean z10 = true;
                if (this.f27373d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f27372c.post(this.f27375f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
