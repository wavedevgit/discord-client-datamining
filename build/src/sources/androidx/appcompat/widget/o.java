package androidx.appcompat.widget;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.PopupWindow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o extends PopupWindow {

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f1763b = false;

    /* renamed from: a  reason: collision with root package name */
    private boolean f1764a;

    public o(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        a(context, attributeSet, i10, i11);
    }

    private void a(Context context, AttributeSet attributeSet, int i10, int i11) {
        v0 v10 = v0.v(context, attributeSet, f.j.Y1, i10, i11);
        if (v10.s(f.j.f23013a2)) {
            b(v10.a(f.j.f23013a2, false));
        }
        setBackgroundDrawable(v10.g(f.j.Z1));
        v10.x();
    }

    private void b(boolean z10) {
        if (f1763b) {
            this.f1764a = z10;
        } else {
            androidx.core.widget.i.a(this, z10);
        }
    }

    @Override // android.widget.PopupWindow
    public void showAsDropDown(View view, int i10, int i11) {
        if (f1763b && this.f1764a) {
            i11 -= view.getHeight();
        }
        super.showAsDropDown(view, i10, i11);
    }

    @Override // android.widget.PopupWindow
    public void update(View view, int i10, int i11, int i12, int i13) {
        if (f1763b && this.f1764a) {
            i11 -= view.getHeight();
        }
        super.update(view, i10, i11, i12, i13);
    }

    @Override // android.widget.PopupWindow
    public void showAsDropDown(View view, int i10, int i11, int i12) {
        if (f1763b && this.f1764a) {
            i11 -= view.getHeight();
        }
        super.showAsDropDown(view, i10, i11, i12);
    }
}
