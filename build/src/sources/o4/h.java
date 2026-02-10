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
    private final r4.b f38567a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f38568b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f38569c;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f38570d;

    /* renamed from: e  reason: collision with root package name */
    private Object f38571e;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(Context context, r4.b taskExecutor) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        this.f38567a = taskExecutor;
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "context.applicationContext");
        this.f38568b = applicationContext;
        this.f38569c = new Object();
        this.f38570d = new LinkedHashSet();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(List listenersList, h this$0) {
        Intrinsics.checkNotNullParameter(listenersList, "$listenersList");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Iterator it = listenersList.iterator();
        while (it.hasNext()) {
            ((m4.a) it.next()).a(this$0.f38571e);
        }
    }

    public final void c(m4.a listener) {
        String str;
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f38569c) {
            try {
                if (this.f38570d.add(listener)) {
                    if (this.f38570d.size() == 1) {
                        this.f38571e = e();
                        k4.m e10 = k4.m.e();
                        str = i.f38572a;
                        e10.a(str, getClass().getSimpleName() + ": initial state = " + this.f38571e);
                        h();
                    }
                    listener.a(this.f38571e);
                }
                Unit unit = Unit.f31987a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Context d() {
        return this.f38568b;
    }

    public abstract Object e();

    public final void f(m4.a listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (this.f38569c) {
            try {
                if (this.f38570d.remove(listener) && this.f38570d.isEmpty()) {
                    i();
                }
                Unit unit = Unit.f31987a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void g(Object obj) {
        synchronized (this.f38569c) {
            Object obj2 = this.f38571e;
            if (obj2 != null && Intrinsics.areEqual(obj2, obj)) {
                return;
            }
            this.f38571e = obj;
            final List h12 = CollectionsKt.h1(this.f38570d);
            this.f38567a.a().execute(new Runnable() { // from class: o4.g
                @Override // java.lang.Runnable
                public final void run() {
                    h.b(h12, this);
                }
            });
            Unit unit = Unit.f31987a;
        }
    }

    public abstract void h();

    public abstract void i();
}
