package h9;

import android.os.Handler;
import android.os.Looper;
import h9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends h9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f27560b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f27564f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f27562d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f27563e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f27561c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f27560b) {
                ArrayList arrayList = b.this.f27563e;
                b bVar = b.this;
                bVar.f27563e = bVar.f27562d;
                b.this.f27562d = arrayList;
            }
            int size = b.this.f27563e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0358a) b.this.f27563e.get(i10)).release();
            }
            b.this.f27563e.clear();
        }
    }

    @Override // h9.a
    public void a(a.InterfaceC0358a interfaceC0358a) {
        synchronized (this.f27560b) {
            this.f27562d.remove(interfaceC0358a);
        }
    }

    @Override // h9.a
    public void d(a.InterfaceC0358a interfaceC0358a) {
        if (!h9.a.c()) {
            interfaceC0358a.release();
            return;
        }
        synchronized (this.f27560b) {
            try {
                if (this.f27562d.contains(interfaceC0358a)) {
                    return;
                }
                this.f27562d.add(interfaceC0358a);
                boolean z10 = true;
                if (this.f27562d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f27561c.post(this.f27564f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
