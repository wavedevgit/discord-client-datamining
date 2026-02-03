package androidx.appcompat.app;

import android.content.Context;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.ViewGroup;
import androidx.appcompat.view.ActionMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ActionBar {
    public boolean f() {
        return false;
    }

    public boolean g() {
        return false;
    }

    public void h(boolean z10) {
    }

    public abstract int i();

    public Context j() {
        return null;
    }

    public abstract void k();

    public boolean l() {
        return false;
    }

    public void m(Configuration configuration) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
    }

    public boolean o(int i10, KeyEvent keyEvent) {
        return false;
    }

    public boolean p(KeyEvent keyEvent) {
        return false;
    }

    public boolean q() {
        return false;
    }

    public void r(boolean z10) {
    }

    public abstract void s(boolean z10);

    public abstract void t(boolean z10);

    public void u(Drawable drawable) {
    }

    public void v(boolean z10) {
    }

    public abstract void w(CharSequence charSequence);

    public void x(CharSequence charSequence) {
    }

    public ActionMode y(ActionMode.Callback callback) {
        return null;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends ViewGroup.MarginLayoutParams {

        /* renamed from: a  reason: collision with root package name */
        public int f906a;

        public a(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f906a = 0;
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f.j.f23105t);
            this.f906a = obtainStyledAttributes.getInt(f.j.f23110u, 0);
            obtainStyledAttributes.recycle();
        }

        public a(int i10, int i11) {
            super(i10, i11);
            this.f906a = 8388627;
        }

        public a(a aVar) {
            super((ViewGroup.MarginLayoutParams) aVar);
            this.f906a = 0;
            this.f906a = aVar.f906a;
        }

        public a(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f906a = 0;
        }
    }
}
