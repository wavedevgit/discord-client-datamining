package io.sentry.android.replay;

import android.util.Log;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u {

    /* renamed from: a  reason: collision with root package name */
    public static final u f29582a = new u();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f29583b;

    /* renamed from: c  reason: collision with root package name */
    private static final Lazy f29584c;

    /* renamed from: d  reason: collision with root package name */
    private static final Lazy f29585d;

    /* renamed from: e  reason: collision with root package name */
    public static final int f29586e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f29587d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Field invoke() {
            Class c10 = u.f29582a.c();
            if (c10 != null) {
                Field declaredField = c10.getDeclaredField("mViews");
                declaredField.setAccessible(true);
                return declaredField;
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f29588d = new b();

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Class invoke() {
            try {
                return Class.forName("android.view.WindowManagerGlobal");
            } catch (Throwable th2) {
                Log.w("WindowManagerSpy", th2);
                return null;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f29589d = new c();

        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Method method;
            Class c10 = u.f29582a.c();
            if (c10 == null || (method = c10.getMethod("getInstance", null)) == null) {
                return null;
            }
            return method.invoke(null, null);
        }
    }

    static {
        lr.o oVar = lr.o.f37121i;
        f29583b = lr.l.b(oVar, b.f29588d);
        f29584c = lr.l.b(oVar, c.f29589d);
        f29585d = lr.l.b(oVar, a.f29587d);
        f29586e = 8;
    }

    private u() {
    }

    private final Field b() {
        return (Field) f29585d.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Class c() {
        return (Class) f29583b.getValue();
    }

    private final Object d() {
        return f29584c.getValue();
    }

    public final void e(Function1 swap) {
        Field b10;
        Intrinsics.checkNotNullParameter(swap, "swap");
        try {
            Object d10 = d();
            if (d10 != null && (b10 = f29582a.b()) != null) {
                Object obj = b10.get(d10);
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.util.ArrayList<android.view.View>{ kotlin.collections.TypeAliasesKt.ArrayList<android.view.View> }");
                b10.set(d10, swap.invoke((ArrayList) obj));
            }
        } catch (Throwable th2) {
            Log.w("WindowManagerSpy", th2);
        }
    }
}
