package io.sentry.android.replay;

import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.Window;
import java.lang.reflect.Field;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    public static final w f29752a = new w();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f29753b;

    /* renamed from: c  reason: collision with root package name */
    private static final Lazy f29754c;

    /* renamed from: d  reason: collision with root package name */
    public static final int f29755d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f29756d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Class invoke() {
            try {
                return Class.forName("com.android.internal.policy.DecorView");
            } catch (Throwable th2) {
                Log.d("WindowSpy", "Unexpected exception loading DecorView on API " + Build.VERSION.SDK_INT, th2);
                return null;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f29757d = new b();

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Field invoke() {
            Class b10 = w.f29752a.b();
            if (b10 == null) {
                return null;
            }
            try {
                Field declaredField = b10.getDeclaredField("mWindow");
                declaredField.setAccessible(true);
                return declaredField;
            } catch (NoSuchFieldException e10) {
                Log.d("WindowSpy", "Unexpected exception retrieving " + b10 + "#mWindow on API " + Build.VERSION.SDK_INT, e10);
                return null;
            }
        }
    }

    static {
        ir.o oVar = ir.o.f31120i;
        f29753b = ir.l.a(oVar, a.f29756d);
        f29754c = ir.l.a(oVar, b.f29757d);
        f29755d = 8;
    }

    private w() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Class b() {
        return (Class) f29753b.getValue();
    }

    private final Field c() {
        return (Field) f29754c.getValue();
    }

    public final Window d(View maybeDecorView) {
        Field c10;
        Intrinsics.checkNotNullParameter(maybeDecorView, "maybeDecorView");
        Class b10 = b();
        if (b10 == null || !b10.isInstance(maybeDecorView) || (c10 = f29752a.c()) == null) {
            return null;
        }
        Object obj = c10.get(maybeDecorView);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type android.view.Window");
        return (Window) obj;
    }
}
