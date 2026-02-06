package androidx.transition;

import android.graphics.Matrix;
import android.util.Log;
import android.view.View;
import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class i0 {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f5721a = true;

    /* renamed from: b  reason: collision with root package name */
    private static Field f5722b;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f5723c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static float a(View view) {
            return view.getTransitionAlpha();
        }

        static void b(View view, float f10) {
            view.setTransitionAlpha(f10);
        }
    }

    public void a(View view) {
    }

    public float b(View view) {
        if (f5721a) {
            try {
                return a.a(view);
            } catch (NoSuchMethodError unused) {
                f5721a = false;
            }
        }
        return view.getAlpha();
    }

    public void c(View view) {
    }

    public abstract void d(View view, int i10, int i11, int i12, int i13);

    public void e(View view, float f10) {
        if (f5721a) {
            try {
                a.b(view, f10);
                return;
            } catch (NoSuchMethodError unused) {
                f5721a = false;
            }
        }
        view.setAlpha(f10);
    }

    public void f(View view, int i10) {
        if (!f5723c) {
            try {
                Field declaredField = View.class.getDeclaredField("mViewFlags");
                f5722b = declaredField;
                declaredField.setAccessible(true);
            } catch (NoSuchFieldException unused) {
                Log.i("ViewUtilsApi19", "fetchViewFlagsField: ");
            }
            f5723c = true;
        }
        Field field = f5722b;
        if (field != null) {
            try {
                f5722b.setInt(view, i10 | (field.getInt(view) & (-13)));
            } catch (IllegalAccessException unused2) {
            }
        }
    }

    public abstract void g(View view, Matrix matrix);

    public abstract void h(View view, Matrix matrix);
}
