package i9;

import android.os.Handler;
import android.os.Looper;
import i9.a;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends i9.a {

    /* renamed from: b  reason: collision with root package name */
    private final Object f26676b = new Object();

    /* renamed from: f  reason: collision with root package name */
    private final Runnable f26680f = new a();

    /* renamed from: d  reason: collision with root package name */
    private ArrayList f26678d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f26679e = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Handler f26677c = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (b.this.f26676b) {
                ArrayList arrayList = b.this.f26679e;
                b bVar = b.this;
                bVar.f26679e = bVar.f26678d;
                b.this.f26678d = arrayList;
            }
            int size = b.this.f26679e.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((a.InterfaceC0399a) b.this.f26679e.get(i10)).release();
            }
            b.this.f26679e.clear();
        }
    }

    @Override // i9.a
    public void a(a.InterfaceC0399a interfaceC0399a) {
        synchronized (this.f26676b) {
            this.f26678d.remove(interfaceC0399a);
        }
    }

    @Override // i9.a
    public void d(a.InterfaceC0399a interfaceC0399a) {
        if (!i9.a.c()) {
            interfaceC0399a.release();
            return;
        }
        synchronized (this.f26676b) {
            try {
                if (this.f26678d.contains(interfaceC0399a)) {
                    return;
                }
                this.f26678d.add(interfaceC0399a);
                boolean z10 = true;
                if (this.f26678d.size() != 1) {
                    z10 = false;
                }
                if (z10) {
                    this.f26677c.post(this.f26680f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
