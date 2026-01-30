package o4;

import android.content.Context;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private final r4.b f42406a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f42407b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f42408c;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f42409d;

    /* renamed from: e  reason: collision with root package name */
    private Object f42410e;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(Context context, r4.b taskExecutor) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        this.f42406a = taskExecutor;
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "context.applicationContext");
        this.f42407b = applicationContext;
        this.f42408c = new Object();
        this.f42409d = new LinkedHashSet();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(List listenersList, h this$0) {
        Intrinsics.checkNotNullParameter(listenersList, "$listenersList");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Iterator it = listenersList.iterator();
        while (it.hasNext()) {
            ((m4.a) it.next()).a(this$0.f42410e);
        }
    }

    public final void c(m4.a listener) {
        String str;
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f42408c) {
            try {
                if (this.f42409d.add(listener)) {
                    if (this.f42409d.size() == 1) {
                        this.f42410e = e();
                        k4.m e10 = k4.m.e();
                        str = i.f42411a;
                        e10.a(str, getClass().getSimpleName() + ": initial state = " + this.f42410e);
                        h();
                    }
                    listener.a(this.f42410e);
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Context d() {
        return this.f42407b;
    }

    public abstract Object e();

    public final void f(m4.a listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f42408c) {
            try {
                if (this.f42409d.remove(listener) && this.f42409d.isEmpty()) {
                    i();
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void g(Object obj) {
        synchronized (this.f42408c) {
            Object obj2 = this.f42410e;
            if (obj2 != null && Intrinsics.areEqual(obj2, obj)) {
                return;
            }
            this.f42410e = obj;
            final List h12 = CollectionsKt.h1(this.f42409d);
            this.f42406a.a().execute(new Runnable() { // from class: o4.g
                @Override // java.lang.Runnable
                public final void run() {
                    h.b(h12, this);
                }
            });
            Unit unit = Unit.f33298a;
        }
    }

    public abstract void h();

    public abstract void i();
}
