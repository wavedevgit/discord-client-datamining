package androidx.browser.browseractions;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import n.a;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BrowserActionsFallbackMenuView extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private final int f1996d;

    /* renamed from: e  reason: collision with root package name */
    private final int f1997e;

    public BrowserActionsFallbackMenuView(@NonNull Context context, @NonNull AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f1996d = getResources().getDimensionPixelOffset(a.f38973b);
        this.f1997e = getResources().getDimensionPixelOffset(a.f38972a);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(View.MeasureSpec.makeMeasureSpec(Math.min(getResources().getDisplayMetrics().widthPixels - (this.f1996d * 2), this.f1997e), 1073741824), i11);
    }
}
