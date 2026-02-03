package h9;

import android.os.Handler;
import android.os.Looper;
import h9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends h9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f26845b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f26849f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f26847d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f26848e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f26846c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f26845b) {
                ArrayList arrayList = b.this.f26848e;
                b bVar = b.this;
                bVar.f26848e = bVar.f26847d;
                b.this.f26847d = arrayList;
            }
            int size = b.this.f26848e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0345a) b.this.f26848e.get(i10)).release();
            }
            b.this.f26848e.clear();
        }
    }

    @Override // h9.a
    public void a(a.InterfaceC0345a interfaceC0345a) {
        synchronized (this.f26845b) {
            this.f26847d.remove(interfaceC0345a);
        }
    }

    @Override // h9.a
    public void d(a.InterfaceC0345a interfaceC0345a) {
        if (!h9.a.c()) {
            interfaceC0345a.release();
            return;
        }
        synchronized (this.f26845b) {
            try {
                if (this.f26847d.contains(interfaceC0345a)) {
                    return;
                }
                this.f26847d.add(interfaceC0345a);
                boolean z10 = true;
                if (this.f26847d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f26846c.post(this.f26849f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
