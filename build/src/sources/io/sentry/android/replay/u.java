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
    public static final u f28640a = new u();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f28641b;

    /* renamed from: c  reason: collision with root package name */
    private static final Lazy f28642c;

    /* renamed from: d  reason: collision with root package name */
    private static final Lazy f28643d;

    /* renamed from: e  reason: collision with root package name */
    public static final int f28644e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f28645d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Field invoke() {
            Class c10 = u.f28640a.c();
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
        public static final b f28646d = new b();

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
        public static final c f28647d = new c();

        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Method method;
            Class c10 = u.f28640a.c();
            if (c10 == null || (method = c10.getMethod("getInstance", null)) == null) {
                return null;
            }
            return method.invoke(null, null);
        }
    }

    static {
        or.o oVar = or.o.f44233i;
        f28641b = or.l.b(oVar, b.f28646d);
        f28642c = or.l.b(oVar, c.f28647d);
        f28643d = or.l.b(oVar, a.f28645d);
        f28644e = 8;
    }

    private u() {
    }

    private final Field b() {
        return (Field) f28643d.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Class c() {
        return (Class) f28641b.getValue();
    }

    private final Object d() {
        return f28642c.getValue();
    }

    public final void e(Function1 swap) {
        Field b10;
        Intrinsics.checkNotNullParameter(swap, "swap");
        try {
            Object d10 = d();
            if (d10 != null && (b10 = f28640a.b()) != null) {
                Object obj = b10.get(d10);
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.util.ArrayList<android.view.View>{ kotlin.collections.TypeAliasesKt.ArrayList<android.view.View> }");
                b10.set(d10, swap.invoke((ArrayList) obj));
            }
        } catch (Throwable th2) {
            Log.w("WindowManagerSpy", th2);
        }
    }
}
