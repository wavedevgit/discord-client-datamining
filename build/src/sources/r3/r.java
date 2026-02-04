package r3;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.RemoteException;
import android.util.Log;
import java.util.Arrays;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.jvm.internal.Intrinsics;
import r3.j;
import r3.k;
import r3.o;
import r3.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f48458a;

    /* renamed from: b  reason: collision with root package name */
    private final o f48459b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f48460c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f48461d;

    /* renamed from: e  reason: collision with root package name */
    private int f48462e;

    /* renamed from: f  reason: collision with root package name */
    public o.c f48463f;

    /* renamed from: g  reason: collision with root package name */
    private k f48464g;

    /* renamed from: h  reason: collision with root package name */
    private final j f48465h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f48466i;

    /* renamed from: j  reason: collision with root package name */
    private final ServiceConnection f48467j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f48468k;

    /* renamed from: l  reason: collision with root package name */
    private final Runnable f48469l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends o.c {
        a(String[] strArr) {
            super(strArr);
        }

        @Override // r3.o.c
        public boolean b() {
            return true;
        }

        @Override // r3.o.c
        public void c(Set tables) {
            Intrinsics.checkNotNullParameter(tables, "tables");
            if (!r.this.j().get()) {
                try {
                    k h10 = r.this.h();
                    if (h10 != null) {
                        int c10 = r.this.c();
                        Object[] array = tables.toArray(new String[0]);
                        Intrinsics.checkNotNull(array, "null cannot be cast to non-null type kotlin.Array<T of kotlin.collections.ArraysKt__ArraysJVMKt.toTypedArray>");
                        h10.Q(c10, (String[]) array);
                    }
                } catch (RemoteException e10) {
                    Log.w("ROOM", "Cannot broadcast invalidation", e10);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends j.a {
        b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void h(r this$0, String[] tables) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(tables, "$tables");
            this$0.e().j((String[]) Arrays.copyOf(tables, tables.length));
        }

        @Override // r3.j
        public void m(final String[] tables) {
            Intrinsics.checkNotNullParameter(tables, "tables");
            Executor d10 = r.this.d();
            final r rVar = r.this;
            d10.execute(new Runnable() { // from class: r3.s
                @Override // java.lang.Runnable
                public final void run() {
                    r.b.h(r.this, tables);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements ServiceConnection {
        c() {
        }

        @Override // android.content.ServiceConnection
        public void onServiceConnected(ComponentName name, IBinder service) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(service, "service");
            r.this.m(k.a.e(service));
            r.this.d().execute(r.this.i());
        }

        @Override // android.content.ServiceConnection
        public void onServiceDisconnected(ComponentName name) {
            Intrinsics.checkNotNullParameter(name, "name");
            r.this.d().execute(r.this.g());
            r.this.m(null);
        }
    }

    public r(Context context, String name, Intent serviceIntent, o invalidationTracker, Executor executor) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(serviceIntent, "serviceIntent");
        Intrinsics.checkNotNullParameter(invalidationTracker, "invalidationTracker");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f48458a = name;
        this.f48459b = invalidationTracker;
        this.f48460c = executor;
        Context applicationContext = context.getApplicationContext();
        this.f48461d = applicationContext;
        this.f48465h = new b();
        this.f48466i = new AtomicBoolean(false);
        c cVar = new c();
        this.f48467j = cVar;
        this.f48468k = new Runnable() { // from class: r3.p
            @Override // java.lang.Runnable
            public final void run() {
                r.n(r.this);
            }
        };
        this.f48469l = new Runnable() { // from class: r3.q
            @Override // java.lang.Runnable
            public final void run() {
                r.k(r.this);
            }
        };
        Object[] array = invalidationTracker.h().keySet().toArray(new String[0]);
        Intrinsics.checkNotNull(array, "null cannot be cast to non-null type kotlin.Array<T of kotlin.collections.ArraysKt__ArraysJVMKt.toTypedArray>");
        l(new a((String[]) array));
        applicationContext.bindService(serviceIntent, cVar, 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(r this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        this$0.f48459b.m(this$0.f());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(r this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        try {
            k kVar = this$0.f48464g;
            if (kVar != null) {
                this$0.f48462e = kVar.x(this$0.f48465h, this$0.f48458a);
                this$0.f48459b.b(this$0.f());
            }
        } catch (RemoteException e10) {
            Log.w("ROOM", "Cannot register multi-instance invalidation callback", e10);
        }
    }

    public final int c() {
        return this.f48462e;
    }

    public final Executor d() {
        return this.f48460c;
    }

    public final o e() {
        return this.f48459b;
    }

    public final o.c f() {
        o.c cVar = this.f48463f;
        if (cVar != null) {
            return cVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("observer");
        return null;
    }

    public final Runnable g() {
        return this.f48469l;
    }

    public final k h() {
        return this.f48464g;
    }

    public final Runnable i() {
        return this.f48468k;
    }

    public final AtomicBoolean j() {
        return this.f48466i;
    }

    public final void l(o.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<set-?>");
        this.f48463f = cVar;
    }

    public final void m(k kVar) {
        this.f48464g = kVar;
    }
}
