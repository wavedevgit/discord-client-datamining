package h9;

import android.os.Handler;
import android.os.Looper;
import h9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends h9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f25814b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f25818f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f25816d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f25817e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f25815c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f25814b) {
                ArrayList arrayList = b.this.f25817e;
                b bVar = b.this;
                bVar.f25817e = bVar.f25816d;
                b.this.f25816d = arrayList;
            }
            int size = b.this.f25817e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0351a) b.this.f25817e.get(i10)).release();
            }
            b.this.f25817e.clear();
        }
    }

    @Override // h9.a
    public void a(a.InterfaceC0351a interfaceC0351a) {
        synchronized (this.f25814b) {
            this.f25816d.remove(interfaceC0351a);
        }
    }

    @Override // h9.a
    public void d(a.InterfaceC0351a interfaceC0351a) {
        if (!h9.a.c()) {
            interfaceC0351a.release();
            return;
        }
        synchronized (this.f25814b) {
            try {
                if (this.f25816d.contains(interfaceC0351a)) {
                    return;
                }
                this.f25816d.add(interfaceC0351a);
                boolean z10 = true;
                if (this.f25816d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f25815c.post(this.f25818f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
