package i9;

import android.os.Handler;
import android.os.Looper;
import i9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends i9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f28364b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f28368f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f28366d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f28367e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f28365c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f28364b) {
                ArrayList arrayList = b.this.f28367e;
                b bVar = b.this;
                bVar.f28367e = bVar.f28366d;
                b.this.f28366d = arrayList;
            }
            int size = b.this.f28367e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0378a) b.this.f28367e.get(i10)).release();
            }
            b.this.f28367e.clear();
        }
    }

    @Override // i9.a
    public void a(a.InterfaceC0378a interfaceC0378a) {
        synchronized (this.f28364b) {
            this.f28366d.remove(interfaceC0378a);
        }
    }

    @Override // i9.a
    public void d(a.InterfaceC0378a interfaceC0378a) {
        if (!i9.a.c()) {
            interfaceC0378a.release();
            return;
        }
        synchronized (this.f28364b) {
            try {
                if (this.f28366d.contains(interfaceC0378a)) {
                    return;
                }
                this.f28366d.add(interfaceC0378a);
                boolean z10 = true;
                if (this.f28366d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f28365c.post(this.f28368f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
