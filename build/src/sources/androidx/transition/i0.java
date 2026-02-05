package androidx.transition;

import android.graphics.Matrix;
import android.util.Log;
import android.view.View;
import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class i0 {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f5392a = true;

    /* renamed from: b  reason: collision with root package name */
    private static Field f5393b;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f5394c;

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
        if (f5392a) {
            try {
                return a.a(view);
            } catch (NoSuchMethodError unused) {
                f5392a = false;
            }
        }
        return view.getAlpha();
    }

    public void c(View view) {
    }

    public abstract void d(View view, int i10, int i11, int i12, int i13);

    public void e(View view, float f10) {
        if (f5392a) {
            try {
                a.b(view, f10);
                return;
            } catch (NoSuchMethodError unused) {
                f5392a = false;
            }
        }
        view.setAlpha(f10);
    }

    public void f(View view, int i10) {
        if (!f5394c) {
            try {
                Field declaredField = View.class.getDeclaredField("mViewFlags");
                f5393b = declaredField;
                declaredField.setAccessible(true);
            } catch (NoSuchFieldException unused) {
                Log.i("ViewUtilsApi19", "fetchViewFlagsField: ");
            }
            f5394c = true;
        }
        Field field = f5393b;
        if (field != null) {
            try {
                f5393b.setInt(view, i10 | (field.getInt(view) & (-13)));
            } catch (IllegalAccessException unused2) {
            }
        }
    }

    public abstract void g(View view, Matrix matrix);

    public abstract void h(View view, Matrix matrix);
}
