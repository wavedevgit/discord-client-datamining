package androidx.transition;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.os.Build;
import android.util.Property;
import android.view.View;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h0 {

    /* renamed from: a  reason: collision with root package name */
    private static final i0 f5276a;

    /* renamed from: b  reason: collision with root package name */
    static final Property f5277b;

    /* renamed from: c  reason: collision with root package name */
    static final Property f5278c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends Property {
        a(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(View view) {
            return Float.valueOf(h0.b(view));
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, Float f10) {
            h0.e(view, f10.floatValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends Property {
        b(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Rect get(View view) {
            return view.getClipBounds();
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, Rect rect) {
            view.setClipBounds(rect);
        }
    }

    static {
        if (Build.VERSION.SDK_INT >= 29) {
            f5276a = new m0();
        } else {
            f5276a = new l0();
        }
        f5277b = new a(Float.class, "translationAlpha");
        f5278c = new b(Rect.class, "clipBounds");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(View view) {
        f5276a.a(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float b(View view) {
        return f5276a.b(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(View view) {
        f5276a.c(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void d(View view, int i10, int i11, int i12, int i13) {
        f5276a.d(view, i10, i11, i12, i13);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(View view, float f10) {
        f5276a.e(view, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(View view, int i10) {
        f5276a.f(view, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void g(View view, Matrix matrix) {
        f5276a.g(view, matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void h(View view, Matrix matrix) {
        f5276a.h(view, matrix);
    }
}
