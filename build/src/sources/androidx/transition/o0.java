package androidx.transition;

import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o0 extends y {

    /* renamed from: a  reason: collision with root package name */
    private static final String[] f5321a = {"android:visibilityPropagation:visibility", "android:visibilityPropagation:center"};

    private static int d(c0 c0Var, int i10) {
        int[] iArr;
        if (c0Var == null || (iArr = (int[]) c0Var.f5227a.get("android:visibilityPropagation:center")) == null) {
            return -1;
        }
        return iArr[i10];
    }

    @Override // androidx.transition.y
    public void a(c0 c0Var) {
        View view = c0Var.f5228b;
        Integer num = (Integer) c0Var.f5227a.get("android:visibility:visibility");
        if (num == null) {
            num = Integer.valueOf(view.getVisibility());
        }
        c0Var.f5227a.put("android:visibilityPropagation:visibility", num);
        view.getLocationOnScreen(r2);
        int round = r2[0] + Math.round(view.getTranslationX());
        int[] iArr = {round};
        iArr[0] = round + (view.getWidth() / 2);
        int round2 = iArr[1] + Math.round(view.getTranslationY());
        iArr[1] = round2;
        iArr[1] = round2 + (view.getHeight() / 2);
        c0Var.f5227a.put("android:visibilityPropagation:center", iArr);
    }

    @Override // androidx.transition.y
    public String[] b() {
        return f5321a;
    }

    public int e(c0 c0Var) {
        Integer num;
        if (c0Var == null || (num = (Integer) c0Var.f5227a.get("android:visibilityPropagation:visibility")) == null) {
            return 8;
        }
        return num.intValue();
    }

    public int f(c0 c0Var) {
        return d(c0Var, 0);
    }

    public int g(c0 c0Var) {
        return d(c0Var, 1);
    }
}
