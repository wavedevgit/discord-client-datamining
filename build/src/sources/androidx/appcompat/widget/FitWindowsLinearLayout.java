package androidx.appcompat.widget;

import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FitWindowsLinearLayout extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private g0 f1488d;

    public FitWindowsLinearLayout(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    @Override // android.view.View
    protected boolean fitSystemWindows(Rect rect) {
        g0 g0Var = this.f1488d;
        if (g0Var != null) {
            g0Var.a(rect);
        }
        return super.fitSystemWindows(rect);
    }

    public void setOnFitSystemWindowsListener(g0 g0Var) {
        this.f1488d = g0Var;
    }
}
