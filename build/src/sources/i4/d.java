package i4;

import android.app.Activity;
import android.content.Context;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.Point;
import android.graphics.Rect;
import android.os.Build;
import android.util.Log;
import android.view.Display;
import android.view.DisplayCutout;
import androidx.core.view.WindowInsetsCompat;
import androidx.window.layout.WindowMetrics;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements a {

    /* renamed from: b  reason: collision with root package name */
    public static final d f28366b = new d();

    /* renamed from: c  reason: collision with root package name */
    private static final String f28367c;

    /* renamed from: d  reason: collision with root package name */
    private static final ArrayList f28368d;

    static {
        String simpleName = d.class.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "WindowMetricsCalculatorC…at::class.java.simpleName");
        f28367c = simpleName;
        f28368d = CollectionsKt.g(Integer.valueOf(WindowInsetsCompat.p.g()), Integer.valueOf(WindowInsetsCompat.p.f()), Integer.valueOf(WindowInsetsCompat.p.a()), Integer.valueOf(WindowInsetsCompat.p.c()), Integer.valueOf(WindowInsetsCompat.p.i()), Integer.valueOf(WindowInsetsCompat.p.e()), Integer.valueOf(WindowInsetsCompat.p.j()), Integer.valueOf(WindowInsetsCompat.p.b()));
    }

    private d() {
    }

    private final DisplayCutout f(Display display) {
        try {
            Constructor<?> constructor = Class.forName("android.view.DisplayInfo").getConstructor(null);
            constructor.setAccessible(true);
            Object newInstance = constructor.newInstance(null);
            Method declaredMethod = display.getClass().getDeclaredMethod("getDisplayInfo", newInstance.getClass());
            declaredMethod.setAccessible(true);
            declaredMethod.invoke(display, newInstance);
            Field declaredField = newInstance.getClass().getDeclaredField("displayCutout");
            declaredField.setAccessible(true);
            Object obj = declaredField.get(newInstance);
            if (b.a(obj)) {
                return c.a(obj);
            }
        } catch (ClassNotFoundException e10) {
            Log.w(f28367c, e10);
        } catch (IllegalAccessException e11) {
            Log.w(f28367c, e11);
        } catch (InstantiationException e12) {
            Log.w(f28367c, e12);
        } catch (NoSuchFieldException e13) {
            Log.w(f28367c, e13);
        } catch (NoSuchMethodException e14) {
            Log.w(f28367c, e14);
        } catch (InvocationTargetException e15) {
            Log.w(f28367c, e15);
        }
        return null;
    }

    private final int g(Context context) {
        Resources resources = context.getResources();
        int identifier = resources.getIdentifier("navigation_bar_height", "dimen", "android");
        if (identifier > 0) {
            return resources.getDimensionPixelSize(identifier);
        }
        return 0;
    }

    private final void i(Activity activity, Rect rect) {
        activity.getWindowManager().getDefaultDisplay().getRectSize(rect);
    }

    @Override // i4.a
    public WindowMetrics a(Activity activity) {
        Rect b10;
        WindowInsetsCompat a10;
        Intrinsics.checkNotNullParameter(activity, "activity");
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 30) {
            b10 = j4.b.f31849a.a(activity);
        } else if (i10 >= 29) {
            b10 = d(activity);
        } else if (i10 >= 28) {
            b10 = c(activity);
        } else {
            b10 = b(activity);
        }
        if (i10 >= 30) {
            a10 = e(activity);
        } else {
            a10 = new WindowInsetsCompat.a().a();
            Intrinsics.checkNotNullExpressionValue(a10, "{\n            WindowInse…ilder().build()\n        }");
        }
        return new WindowMetrics(new h4.a(b10), a10);
    }

    public final Rect b(Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        Rect rect = new Rect();
        Display defaultDisplay = activity.getWindowManager().getDefaultDisplay();
        defaultDisplay.getRectSize(rect);
        if (!j4.a.f31848a.a(activity)) {
            Intrinsics.checkNotNullExpressionValue(defaultDisplay, "defaultDisplay");
            Point h10 = h(defaultDisplay);
            int g10 = g(activity);
            int i10 = rect.bottom;
            if (i10 + g10 == h10.y) {
                rect.bottom = i10 + g10;
                return rect;
            }
            int i11 = rect.right;
            if (i11 + g10 == h10.x) {
                rect.right = i11 + g10;
            }
        }
        return rect;
    }

    public final Rect c(Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        Rect rect = new Rect();
        Configuration configuration = activity.getResources().getConfiguration();
        try {
            Field declaredField = Configuration.class.getDeclaredField("windowConfiguration");
            declaredField.setAccessible(true);
            Object obj = declaredField.get(configuration);
            if (j4.a.f31848a.a(activity)) {
                Object invoke = obj.getClass().getDeclaredMethod("getBounds", null).invoke(obj, null);
                Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type android.graphics.Rect");
                rect.set((Rect) invoke);
            } else {
                Object invoke2 = obj.getClass().getDeclaredMethod("getAppBounds", null).invoke(obj, null);
                Intrinsics.checkNotNull(invoke2, "null cannot be cast to non-null type android.graphics.Rect");
                rect.set((Rect) invoke2);
            }
        } catch (IllegalAccessException e10) {
            Log.w(f28367c, e10);
            i(activity, rect);
        } catch (NoSuchFieldException e11) {
            Log.w(f28367c, e11);
            i(activity, rect);
        } catch (NoSuchMethodException e12) {
            Log.w(f28367c, e12);
            i(activity, rect);
        } catch (InvocationTargetException e13) {
            Log.w(f28367c, e13);
            i(activity, rect);
        }
        Display currentDisplay = activity.getWindowManager().getDefaultDisplay();
        Point point = new Point();
        currentDisplay.getRealSize(point);
        j4.a aVar = j4.a.f31848a;
        if (!aVar.a(activity)) {
            int g10 = g(activity);
            int i10 = rect.bottom;
            if (i10 + g10 == point.y) {
                rect.bottom = i10 + g10;
            } else {
                int i11 = rect.right;
                if (i11 + g10 == point.x) {
                    rect.right = i11 + g10;
                } else if (rect.left == g10) {
                    rect.left = 0;
                }
            }
        }
        if ((rect.width() < point.x || rect.height() < point.y) && !aVar.a(activity)) {
            Intrinsics.checkNotNullExpressionValue(currentDisplay, "currentDisplay");
            DisplayCutout f10 = f(currentDisplay);
            if (f10 != null) {
                int i12 = rect.left;
                j4.c cVar = j4.c.f31850a;
                if (i12 == cVar.b(f10)) {
                    rect.left = 0;
                }
                if (point.x - rect.right == cVar.c(f10)) {
                    rect.right += cVar.c(f10);
                }
                if (rect.top == cVar.d(f10)) {
                    rect.top = 0;
                }
                if (point.y - rect.bottom == cVar.a(f10)) {
                    rect.bottom += cVar.a(f10);
                }
            }
        }
        return rect;
    }

    public final Rect d(Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        Configuration configuration = activity.getResources().getConfiguration();
        try {
            Field declaredField = Configuration.class.getDeclaredField("windowConfiguration");
            declaredField.setAccessible(true);
            Object obj = declaredField.get(configuration);
            Object invoke = obj.getClass().getDeclaredMethod("getBounds", null).invoke(obj, null);
            Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type android.graphics.Rect");
            return new Rect((Rect) invoke);
        } catch (IllegalAccessException e10) {
            Log.w(f28367c, e10);
            return c(activity);
        } catch (NoSuchFieldException e11) {
            Log.w(f28367c, e11);
            return c(activity);
        } catch (NoSuchMethodException e12) {
            Log.w(f28367c, e12);
            return c(activity);
        } catch (InvocationTargetException e13) {
            Log.w(f28367c, e13);
            return c(activity);
        }
    }

    public final WindowInsetsCompat e(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (Build.VERSION.SDK_INT >= 30) {
            return j4.b.f31849a.b(context);
        }
        throw new Exception("Incompatible SDK version");
    }

    public final Point h(Display display) {
        Intrinsics.checkNotNullParameter(display, "display");
        Point point = new Point();
        display.getRealSize(point);
        return point;
    }
}
