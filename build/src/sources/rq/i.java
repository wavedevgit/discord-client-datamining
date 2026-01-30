package rq;

import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.StateListDrawable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i extends StateListDrawable {

    /* renamed from: d  reason: collision with root package name */
    private int f48480d;

    public i(Drawable drawable, int i10) {
        this.f48480d = i10;
        addState(new int[]{16842913}, drawable);
        addState(new int[0], drawable);
    }

    @Override // android.graphics.drawable.StateListDrawable, android.graphics.drawable.DrawableContainer, android.graphics.drawable.Drawable
    public boolean isStateful() {
        return true;
    }

    @Override // android.graphics.drawable.StateListDrawable, android.graphics.drawable.DrawableContainer, android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10 = false;
        for (int i10 : iArr) {
            if (i10 == 16842913) {
                z10 = true;
            }
        }
        if (z10) {
            super.setColorFilter(this.f48480d, PorterDuff.Mode.SRC_ATOP);
        } else {
            super.clearColorFilter();
        }
        return super.onStateChange(iArr);
    }
}
