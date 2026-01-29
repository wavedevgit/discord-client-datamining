package androidx.metrics.performance;

import android.app.Activity;
import android.content.Context;
import android.view.Choreographer;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.Window;
import androidx.metrics.performance.f;
import java.lang.reflect.Field;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b implements ViewTreeObserver.OnPreDrawListener {

    /* renamed from: d  reason: collision with root package name */
    public static final a f4608d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Field f4609e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Field a() {
            return b.f4609e;
        }

        public final long b(View view) {
            Context context;
            float f10;
            f.a aVar = f.f4627b;
            if (aVar.a() < 0) {
                Window window = null;
                if (view != null) {
                    context = view.getContext();
                } else {
                    context = null;
                }
                if (context instanceof Activity) {
                    Context context2 = view.getContext();
                    Intrinsics.checkNotNull(context2, "null cannot be cast to non-null type android.app.Activity");
                    window = ((Activity) context2).getWindow();
                }
                float f11 = 60.0f;
                if (window != null) {
                    f10 = window.getWindowManager().getDefaultDisplay().getRefreshRate();
                } else {
                    f10 = 60.0f;
                }
                if (f10 >= 30.0f && f10 <= 200.0f) {
                    f11 = f10;
                }
                aVar.b((1000 / f11) * 1000000);
            }
            return aVar.a();
        }

        private a() {
        }
    }

    static {
        Field declaredField = Choreographer.class.getDeclaredField("mLastFrameTimeNanos");
        Intrinsics.checkNotNullExpressionValue(declaredField, "Choreographer::class.jav…ld(\"mLastFrameTimeNanos\")");
        f4609e = declaredField;
        declaredField.setAccessible(true);
    }
}
