package androidx.core.view;

import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class NestedScrollingParentHelper {

    /* renamed from: a  reason: collision with root package name */
    private int f3703a;

    /* renamed from: b  reason: collision with root package name */
    private int f3704b;

    public NestedScrollingParentHelper(ViewGroup viewGroup) {
    }

    public int a() {
        return this.f3703a | this.f3704b;
    }

    public void b(View view, View view2, int i10) {
        c(view, view2, i10, 0);
    }

    public void c(View view, View view2, int i10, int i11) {
        if (i11 == 1) {
            this.f3704b = i10;
        } else {
            this.f3703a = i10;
        }
    }

    public void d(View view) {
        e(view, 0);
    }

    public void e(View view, int i10) {
        if (i10 == 1) {
            this.f3704b = 0;
        } else {
            this.f3703a = 0;
        }
    }
}
