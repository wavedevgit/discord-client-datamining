package k5;

import android.content.ComponentCallbacks2;
import android.content.Context;
import android.content.res.Configuration;
import f5.g;
import java.lang.ref.WeakReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v implements ComponentCallbacks2, g.a {

    /* renamed from: q  reason: collision with root package name */
    public static final a f30724q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final WeakReference f30725d;

    /* renamed from: e  reason: collision with root package name */
    private Context f30726e;

    /* renamed from: i  reason: collision with root package name */
    private f5.g f30727i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f30728o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f30729p = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public v(v4.j jVar) {
        this.f30725d = new WeakReference(jVar);
    }

    private final synchronized void d() {
        f5.g eVar;
        try {
            v4.j jVar = (v4.j) this.f30725d.get();
            if (jVar != null) {
                if (this.f30727i == null) {
                    if (jVar.i().d()) {
                        Context f10 = jVar.f();
                        jVar.h();
                        eVar = f5.h.a(f10, this, null);
                    } else {
                        eVar = new f5.e();
                    }
                    this.f30727i = eVar;
                    this.f30729p = eVar.a();
                }
            } else {
                e();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // f5.g.a
    public synchronized void a(boolean z10) {
        try {
            v4.j jVar = (v4.j) this.f30725d.get();
            if (jVar != null) {
                jVar.h();
                this.f30729p = z10;
            } else {
                e();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized boolean b() {
        d();
        return this.f30729p;
    }

    public final synchronized void c() {
        try {
            v4.j jVar = (v4.j) this.f30725d.get();
            if (jVar != null) {
                if (this.f30726e == null) {
                    Context f10 = jVar.f();
                    this.f30726e = f10;
                    f10.registerComponentCallbacks(this);
                }
            } else {
                e();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void e() {
        try {
            if (this.f30728o) {
                return;
            }
            this.f30728o = true;
            Context context = this.f30726e;
            if (context != null) {
                context.unregisterComponentCallbacks(this);
            }
            f5.g gVar = this.f30727i;
            if (gVar != null) {
                gVar.shutdown();
            }
            this.f30725d.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // android.content.ComponentCallbacks
    public synchronized void onConfigurationChanged(Configuration configuration) {
        if (((v4.j) this.f30725d.get()) == null) {
            e();
        }
    }

    @Override // android.content.ComponentCallbacks
    public synchronized void onLowMemory() {
        onTrimMemory(80);
    }

    @Override // android.content.ComponentCallbacks2
    public synchronized void onTrimMemory(int i10) {
        try {
            v4.j jVar = (v4.j) this.f30725d.get();
            if (jVar != null) {
                jVar.h();
                jVar.m(i10);
            } else {
                e();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
