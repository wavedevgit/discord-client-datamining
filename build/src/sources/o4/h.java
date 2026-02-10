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
    private final r4.b f40241a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f40242b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f40243c;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f40244d;

    /* renamed from: e  reason: collision with root package name */
    private Object f40245e;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(Context context, r4.b taskExecutor) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        this.f40241a = taskExecutor;
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "context.applicationContext");
        this.f40242b = applicationContext;
        this.f40243c = new Object();
        this.f40244d = new LinkedHashSet();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(List listenersList, h this$0) {
        Intrinsics.checkNotNullParameter(listenersList, "$listenersList");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Iterator it = listenersList.iterator();
        while (it.hasNext()) {
            ((m4.a) it.next()).a(this$0.f40245e);
        }
    }

    public final void c(m4.a listener) {
        String str;
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f40243c) {
            try {
                if (this.f40244d.add(listener)) {
                    if (this.f40244d.size() == 1) {
                        this.f40245e = e();
                        k4.m e10 = k4.m.e();
                        str = i.f40246a;
                        e10.a(str, getClass().getSimpleName() + ": initial state = " + this.f40245e);
                        h();
                    }
                    listener.a(this.f40245e);
                }
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Context d() {
        return this.f40242b;
    }

    public abstract Object e();

    public final void f(m4.a listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f40243c) {
            try {
                if (this.f40244d.remove(listener) && this.f40244d.isEmpty()) {
                    i();
                }
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void g(Object obj) {
        synchronized (this.f40243c) {
            Object obj2 = this.f40245e;
            if (obj2 != null && Intrinsics.areEqual(obj2, obj)) {
                return;
            }
            this.f40245e = obj;
            final List h12 = CollectionsKt.h1(this.f40244d);
            this.f40241a.a().execute(new Runnable() { // from class: o4.g
                @Override // java.lang.Runnable
                public final void run() {
                    h.b(h12, this);
                }
            });
            Unit unit = Unit.f31765a;
        }
    }

    public abstract void h();

    public abstract void i();
}
