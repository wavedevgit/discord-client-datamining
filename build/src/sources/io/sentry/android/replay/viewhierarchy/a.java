package io.sentry.android.replay.viewhierarchy;

import android.view.View;
import io.sentry.k7;
import java.lang.reflect.Method;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
import qr.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f27907a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f27908b = l.a(C0396a.f27910d);

    /* renamed from: c  reason: collision with root package name */
    public static final int f27909c = 8;

    /* renamed from: io.sentry.android.replay.viewhierarchy.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0396a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0396a f27910d = new C0396a();

        C0396a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Method invoke() {
            try {
                Method declaredMethod = f1.a.class.getDeclaredMethod("getSemanticsConfiguration", null);
                declaredMethod.setAccessible(true);
                return declaredMethod;
            } catch (Throwable unused) {
                return null;
            }
        }
    }

    private a() {
    }

    public final boolean a(View view, b bVar, k7 options) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(options, "options");
        String name = view.getClass().getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        StringsKt.V(name, "AndroidComposeView", false, 2, null);
        return false;
    }
}
