package gf;

import android.util.Log;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a1 {

    /* renamed from: a  reason: collision with root package name */
    private Object f26837a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f26838b = false;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ c f26839c;

    public a1(c cVar, Object obj) {
        this.f26839c = cVar;
        this.f26837a = obj;
    }

    protected abstract void a(Object obj);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b();

    public final void c() {
        Object obj;
        synchronized (this) {
            try {
                obj = this.f26837a;
                if (this.f26838b) {
                    String obj2 = toString();
                    Log.w("GmsClient", "Callback proxy " + obj2 + " being reused. This is not safe.");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (obj != null) {
            a(obj);
        }
        synchronized (this) {
            this.f26838b = true;
        }
        e();
    }

    public final void d() {
        synchronized (this) {
            this.f26837a = null;
        }
    }

    public final void e() {
        ArrayList arrayList;
        ArrayList arrayList2;
        d();
        arrayList = this.f26839c.C;
        synchronized (arrayList) {
            arrayList2 = this.f26839c.C;
            arrayList2.remove(this);
        }
    }
}
