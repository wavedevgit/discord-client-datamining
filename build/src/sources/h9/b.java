package h9;

import android.os.Handler;
import android.os.Looper;
import h9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends h9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f25862b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f25866f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f25864d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f25865e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f25863c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f25862b) {
                ArrayList arrayList = b.this.f25865e;
                b bVar = b.this;
                bVar.f25865e = bVar.f25864d;
                b.this.f25864d = arrayList;
            }
            int size = b.this.f25865e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0351a) b.this.f25865e.get(i10)).release();
            }
            b.this.f25865e.clear();
        }
    }

    @Override // h9.a
    public void a(a.InterfaceC0351a interfaceC0351a) {
        synchronized (this.f25862b) {
            this.f25864d.remove(interfaceC0351a);
        }
    }

    @Override // h9.a
    public void d(a.InterfaceC0351a interfaceC0351a) {
        if (!h9.a.c()) {
            interfaceC0351a.release();
            return;
        }
        synchronized (this.f25862b) {
            try {
                if (this.f25864d.contains(interfaceC0351a)) {
                    return;
                }
                this.f25864d.add(interfaceC0351a);
                boolean z10 = true;
                if (this.f25864d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f25863c.post(this.f25866f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
