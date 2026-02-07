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
    private final int f2325d;

    /* renamed from: e  reason: collision with root package name */
    private final int f2326e;

    public BrowserActionsFallbackMenuView(@NonNull Context context, @NonNull AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f2325d = getResources().getDimensionPixelOffset(a.f38376b);
        this.f2326e = getResources().getDimensionPixelOffset(a.f38375a);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(View.MeasureSpec.makeMeasureSpec(Math.min(getResources().getDisplayMetrics().widthPixels - (this.f2325d * 2), this.f2326e), 1073741824), i11);
    }
}
