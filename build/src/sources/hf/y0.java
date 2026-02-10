package hf;

import android.util.Log;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private Object f26119a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f26120b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ c f26121c;

    public y0(c cVar, Object obj) {
        Objects.requireNonNull(cVar);
        this.f26121c = cVar;
        this.f26119a = obj;
        this.f26120b = false;
    }

    protected abstract void a(Object obj);

    public final void b() {
        Object obj;
        synchronized (this) {
            try {
                obj = this.f26119a;
                if (this.f26120b) {
                    String obj2 = toString();
                    StringBuilder sb2 = new StringBuilder(obj2.length() + 47);
                    sb2.append("Callback proxy ");
                    sb2.append(obj2);
                    sb2.append(" being reused. This is not safe.");
                    Log.w("GmsClient", sb2.toString());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (obj != null) {
            a(obj);
        }
        synchronized (this) {
            this.f26120b = true;
        }
        c();
    }

    public final void c() {
        d();
        c cVar = this.f26121c;
        synchronized (cVar.a0()) {
            cVar.a0().remove(this);
        }
    }

    public final void d() {
        synchronized (this) {
            this.f26119a = null;
        }
    }
}
