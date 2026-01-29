package androidx.appcompat.app;

import android.content.Context;
import android.content.DialogInterface;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.ListAdapter;
import android.widget.ListView;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertController;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends l implements DialogInterface {

    /* renamed from: q  reason: collision with root package name */
    final AlertController f977q;

    /* renamed from: androidx.appcompat.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0015a {

        /* renamed from: a  reason: collision with root package name */
        private final AlertController.b f978a;

        /* renamed from: b  reason: collision with root package name */
        private final int f979b;

        public C0015a(Context context) {
            this(context, a.m(context, 0));
        }

        public C0015a a(ListAdapter listAdapter, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f945w = listAdapter;
            bVar.f946x = onClickListener;
            return this;
        }

        public C0015a b(View view) {
            this.f978a.f929g = view;
            return this;
        }

        public C0015a c(Drawable drawable) {
            this.f978a.f926d = drawable;
            return this;
        }

        @NonNull
        public a create() {
            a aVar = new a(this.f978a.f923a, this.f979b);
            this.f978a.a(aVar.f977q);
            aVar.setCancelable(this.f978a.f940r);
            if (this.f978a.f940r) {
                aVar.setCanceledOnTouchOutside(true);
            }
            aVar.setOnCancelListener(this.f978a.f941s);
            aVar.setOnDismissListener(this.f978a.f942t);
            DialogInterface.OnKeyListener onKeyListener = this.f978a.f943u;
            if (onKeyListener != null) {
                aVar.setOnKeyListener(onKeyListener);
            }
            return aVar;
        }

        public C0015a d(CharSequence[] charSequenceArr, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f944v = charSequenceArr;
            bVar.f946x = onClickListener;
            return this;
        }

        public C0015a e(CharSequence charSequence) {
            this.f978a.f930h = charSequence;
            return this;
        }

        public C0015a f(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f934l = charSequence;
            bVar.f936n = onClickListener;
            return this;
        }

        public C0015a g(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f937o = charSequence;
            bVar.f939q = onClickListener;
            return this;
        }

        @NonNull
        public Context getContext() {
            return this.f978a.f923a;
        }

        public C0015a h(DialogInterface.OnKeyListener onKeyListener) {
            this.f978a.f943u = onKeyListener;
            return this;
        }

        public C0015a i(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f931i = charSequence;
            bVar.f933k = onClickListener;
            return this;
        }

        public C0015a j(ListAdapter listAdapter, int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f945w = listAdapter;
            bVar.f946x = onClickListener;
            bVar.I = i10;
            bVar.H = true;
            return this;
        }

        public C0015a setNegativeButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f934l = bVar.f923a.getText(i10);
            this.f978a.f936n = onClickListener;
            return this;
        }

        public C0015a setPositiveButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f978a;
            bVar.f931i = bVar.f923a.getText(i10);
            this.f978a.f933k = onClickListener;
            return this;
        }

        public C0015a setTitle(CharSequence charSequence) {
            this.f978a.f928f = charSequence;
            return this;
        }

        public C0015a setView(View view) {
            AlertController.b bVar = this.f978a;
            bVar.f948z = view;
            bVar.f947y = 0;
            bVar.E = false;
            return this;
        }

        public C0015a(@NonNull Context context, int i10) {
            this.f978a = new AlertController.b(new ContextThemeWrapper(context, a.m(context, i10)));
            this.f979b = i10;
        }
    }

    protected a(Context context, int i10) {
        super(context, m(context, i10));
        this.f977q = new AlertController(getContext(), this, getWindow());
    }

    static int m(Context context, int i10) {
        if (((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) >= 1) {
            return i10;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(f.a.f24080l, typedValue, true);
        return typedValue.resourceId;
    }

    public Button k(int i10) {
        return this.f977q.c(i10);
    }

    public ListView l() {
        return this.f977q.e();
    }

    public void n(int i10, CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
        this.f977q.k(i10, charSequence, onClickListener, null, null);
    }

    public void o(CharSequence charSequence) {
        this.f977q.o(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f977q.f();
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyDown(int i10, KeyEvent keyEvent) {
        if (this.f977q.g(i10, keyEvent)) {
            return true;
        }
        return super.onKeyDown(i10, keyEvent);
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent keyEvent) {
        if (this.f977q.h(i10, keyEvent)) {
            return true;
        }
        return super.onKeyUp(i10, keyEvent);
    }

    @Override // androidx.appcompat.app.l, android.app.Dialog
    public void setTitle(CharSequence charSequence) {
        super.setTitle(charSequence);
        this.f977q.q(charSequence);
    }
}
