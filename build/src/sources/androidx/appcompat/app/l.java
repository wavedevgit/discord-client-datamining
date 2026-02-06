package androidx.appcompat.app;

import android.content.Context;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import androidx.activity.ComponentDialog;
import androidx.activity.d0;
import androidx.appcompat.view.ActionMode;
import androidx.core.view.k;
import androidx.lifecycle.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends ComponentDialog implements b {

    /* renamed from: o  reason: collision with root package name */
    private AppCompatDelegate f1513o;

    /* renamed from: p  reason: collision with root package name */
    private final k.a f1514p;

    public l(Context context, int i10) {
        super(context, g(context, i10));
        this.f1514p = new k.a() { // from class: androidx.appcompat.app.k
            @Override // androidx.core.view.k.a
            public final boolean superDispatchKeyEvent(KeyEvent keyEvent) {
                return l.this.i(keyEvent);
            }
        };
        AppCompatDelegate f10 = f();
        f10.Q(g(context, i10));
        f10.z(null);
    }

    private static int g(Context context, int i10) {
        if (i10 == 0) {
            TypedValue typedValue = new TypedValue();
            context.getTheme().resolveAttribute(f.a.f22221x, typedValue, true);
            return typedValue.resourceId;
        }
        return i10;
    }

    private void h() {
        r0.b(getWindow().getDecorView(), this);
        u3.j.b(getWindow().getDecorView(), this);
        d0.a(getWindow().getDecorView(), this);
    }

    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void addContentView(View view, ViewGroup.LayoutParams layoutParams) {
        f().e(view, layoutParams);
    }

    @Override // android.app.Dialog, android.content.DialogInterface
    public void dismiss() {
        super.dismiss();
        f().A();
    }

    @Override // android.app.Dialog, android.view.Window.Callback
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        return androidx.core.view.k.e(this.f1514p, getWindow().getDecorView(), this, keyEvent);
    }

    public AppCompatDelegate f() {
        if (this.f1513o == null) {
            this.f1513o = AppCompatDelegate.k(this, this);
        }
        return this.f1513o;
    }

    @Override // android.app.Dialog
    public View findViewById(int i10) {
        return f().l(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean i(KeyEvent keyEvent) {
        return super.dispatchKeyEvent(keyEvent);
    }

    @Override // android.app.Dialog
    public void invalidateOptionsMenu() {
        f().w();
    }

    public boolean j(int i10) {
        return f().I(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        f().v();
        super.onCreate(bundle);
        f().z(bundle);
    }

    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    protected void onStop() {
        super.onStop();
        f().F();
    }

    @Override // androidx.appcompat.app.b
    public void onSupportActionModeFinished(ActionMode actionMode) {
    }

    @Override // androidx.appcompat.app.b
    public void onSupportActionModeStarted(ActionMode actionMode) {
    }

    @Override // androidx.appcompat.app.b
    public ActionMode onWindowStartingSupportActionMode(ActionMode.Callback callback) {
        return null;
    }

    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(int i10) {
        h();
        f().K(i10);
    }

    @Override // android.app.Dialog
    public void setTitle(CharSequence charSequence) {
        super.setTitle(charSequence);
        f().R(charSequence);
    }

    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(View view) {
        h();
        f().L(view);
    }

    @Override // android.app.Dialog
    public void setTitle(int i10) {
        super.setTitle(i10);
        f().R(getContext().getString(i10));
    }

    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(View view, ViewGroup.LayoutParams layoutParams) {
        h();
        f().M(view, layoutParams);
    }
}
