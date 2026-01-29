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
    private final r4.b f42390a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f42391b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f42392c;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f42393d;

    /* renamed from: e  reason: collision with root package name */
    private Object f42394e;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(Context context, r4.b taskExecutor) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        this.f42390a = taskExecutor;
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "context.applicationContext");
        this.f42391b = applicationContext;
        this.f42392c = new Object();
        this.f42393d = new LinkedHashSet();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(List listenersList, h this$0) {
        Intrinsics.checkNotNullParameter(listenersList, "$listenersList");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Iterator it = listenersList.iterator();
        while (it.hasNext()) {
            ((m4.a) it.next()).a(this$0.f42394e);
        }
    }

    public final void c(m4.a listener) {
        String str;
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f42392c) {
            try {
                if (this.f42393d.add(listener)) {
                    if (this.f42393d.size() == 1) {
                        this.f42394e = e();
                        k4.m e10 = k4.m.e();
                        str = i.f42395a;
                        e10.a(str, getClass().getSimpleName() + ": initial state = " + this.f42394e);
                        h();
                    }
                    listener.a(this.f42394e);
                }
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Context d() {
        return this.f42391b;
    }

    public abstract Object e();

    public final void f(m4.a listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f42392c) {
            try {
                if (this.f42393d.remove(listener) && this.f42393d.isEmpty()) {
                    i();
                }
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void g(Object obj) {
        synchronized (this.f42392c) {
            Object obj2 = this.f42394e;
            if (obj2 != null && Intrinsics.areEqual(obj2, obj)) {
                return;
            }
            this.f42394e = obj;
            final List h12 = CollectionsKt.h1(this.f42393d);
            this.f42390a.a().execute(new Runnable() { // from class: o4.g
                @Override // java.lang.Runnable
                public final void run() {
                    h.b(h12, this);
                }
            });
            Unit unit = Unit.f33282a;
        }
    }

    public abstract void h();

    public abstract void i();
}
