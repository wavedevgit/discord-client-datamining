package h9;

import android.os.Handler;
import android.os.Looper;
import h9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends h9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f25686b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f25690f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f25688d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f25689e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f25687c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f25686b) {
                ArrayList arrayList = b.this.f25689e;
                b bVar = b.this;
                bVar.f25689e = bVar.f25688d;
                b.this.f25688d = arrayList;
            }
            int size = b.this.f25689e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0347a) b.this.f25689e.get(i10)).release();
            }
            b.this.f25689e.clear();
        }
    }

    @Override // h9.a
    public void a(a.InterfaceC0347a interfaceC0347a) {
        synchronized (this.f25686b) {
            this.f25688d.remove(interfaceC0347a);
        }
    }

    @Override // h9.a
    public void d(a.InterfaceC0347a interfaceC0347a) {
        if (!h9.a.c()) {
            interfaceC0347a.release();
            return;
        }
        synchronized (this.f25686b) {
            try {
                if (this.f25688d.contains(interfaceC0347a)) {
                    return;
                }
                this.f25688d.add(interfaceC0347a);
                boolean z10 = true;
                if (this.f25688d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f25687c.post(this.f25690f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
