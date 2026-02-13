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
    private final r4.b f39136a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f39137b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f39138c;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f39139d;

    /* renamed from: e  reason: collision with root package name */
    private Object f39140e;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(Context context, r4.b taskExecutor) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        this.f39136a = taskExecutor;
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "context.applicationContext");
        this.f39137b = applicationContext;
        this.f39138c = new Object();
        this.f39139d = new LinkedHashSet();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(List listenersList, h this$0) {
        Intrinsics.checkNotNullParameter(listenersList, "$listenersList");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Iterator it = listenersList.iterator();
        while (it.hasNext()) {
            ((m4.a) it.next()).a(this$0.f39140e);
        }
    }

    public final void c(m4.a listener) {
        String str;
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f39138c) {
            try {
                if (this.f39139d.add(listener)) {
                    if (this.f39139d.size() == 1) {
                        this.f39140e = e();
                        k4.m e10 = k4.m.e();
                        str = i.f39141a;
                        e10.a(str, getClass().getSimpleName() + ": initial state = " + this.f39140e);
                        h();
                    }
                    listener.a(this.f39140e);
                }
                Unit unit = Unit.f32556a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Context d() {
        return this.f39137b;
    }

    public abstract Object e();

    public final void f(m4.a listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f39138c) {
            try {
                if (this.f39139d.remove(listener) && this.f39139d.isEmpty()) {
                    i();
                }
                Unit unit = Unit.f32556a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void g(Object obj) {
        synchronized (this.f39138c) {
            Object obj2 = this.f39140e;
            if (obj2 != null && Intrinsics.areEqual(obj2, obj)) {
                return;
            }
            this.f39140e = obj;
            final List h12 = CollectionsKt.h1(this.f39139d);
            this.f39136a.a().execute(new Runnable() { // from class: o4.g
                @Override // java.lang.Runnable
                public final void run() {
                    h.b(h12, this);
                }
            });
            Unit unit = Unit.f32556a;
        }
    }

    public abstract void h();

    public abstract void i();
}
