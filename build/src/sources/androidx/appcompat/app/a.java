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
    final AlertController f1021q;

    /* renamed from: androidx.appcompat.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0019a {

        /* renamed from: a  reason: collision with root package name */
        private final AlertController.b f1022a;

        /* renamed from: b  reason: collision with root package name */
        private final int f1023b;

        public C0019a(Context context) {
            this(context, a.m(context, 0));
        }

        public C0019a a(ListAdapter listAdapter, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f989w = listAdapter;
            bVar.f990x = onClickListener;
            return this;
        }

        public C0019a b(View view) {
            this.f1022a.f973g = view;
            return this;
        }

        public C0019a c(Drawable drawable) {
            this.f1022a.f970d = drawable;
            return this;
        }

        @NonNull
        public a create() {
            a aVar = new a(this.f1022a.f967a, this.f1023b);
            this.f1022a.a(aVar.f1021q);
            aVar.setCancelable(this.f1022a.f984r);
            if (this.f1022a.f984r) {
                aVar.setCanceledOnTouchOutside(true);
            }
            aVar.setOnCancelListener(this.f1022a.f985s);
            aVar.setOnDismissListener(this.f1022a.f986t);
            DialogInterface.OnKeyListener onKeyListener = this.f1022a.f987u;
            if (onKeyListener != null) {
                aVar.setOnKeyListener(onKeyListener);
            }
            return aVar;
        }

        public C0019a d(CharSequence[] charSequenceArr, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f988v = charSequenceArr;
            bVar.f990x = onClickListener;
            return this;
        }

        public C0019a e(CharSequence charSequence) {
            this.f1022a.f974h = charSequence;
            return this;
        }

        public C0019a f(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f978l = charSequence;
            bVar.f980n = onClickListener;
            return this;
        }

        public C0019a g(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f981o = charSequence;
            bVar.f983q = onClickListener;
            return this;
        }

        @NonNull
        public Context getContext() {
            return this.f1022a.f967a;
        }

        public C0019a h(DialogInterface.OnKeyListener onKeyListener) {
            this.f1022a.f987u = onKeyListener;
            return this;
        }

        public C0019a i(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f975i = charSequence;
            bVar.f977k = onClickListener;
            return this;
        }

        public C0019a j(ListAdapter listAdapter, int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f989w = listAdapter;
            bVar.f990x = onClickListener;
            bVar.I = i10;
            bVar.H = true;
            return this;
        }

        public C0019a setNegativeButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f978l = bVar.f967a.getText(i10);
            this.f1022a.f980n = onClickListener;
            return this;
        }

        public C0019a setPositiveButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1022a;
            bVar.f975i = bVar.f967a.getText(i10);
            this.f1022a.f977k = onClickListener;
            return this;
        }

        public C0019a setTitle(CharSequence charSequence) {
            this.f1022a.f972f = charSequence;
            return this;
        }

        public C0019a setView(View view) {
            AlertController.b bVar = this.f1022a;
            bVar.f992z = view;
            bVar.f991y = 0;
            bVar.E = false;
            return this;
        }

        public C0019a(@NonNull Context context, int i10) {
            this.f1022a = new AlertController.b(new ContextThemeWrapper(context, a.m(context, i10)));
            this.f1023b = i10;
        }
    }

    protected a(Context context, int i10) {
        super(context, m(context, i10));
        this.f1021q = new AlertController(getContext(), this, getWindow());
    }

    static int m(Context context, int i10) {
        if (((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) >= 1) {
            return i10;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(f.a.f23291l, typedValue, true);
        return typedValue.resourceId;
    }

    public Button k(int i10) {
        return this.f1021q.c(i10);
    }

    public ListView l() {
        return this.f1021q.e();
    }

    public void n(int i10, CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
        this.f1021q.k(i10, charSequence, onClickListener, null, null);
    }

    public void o(CharSequence charSequence) {
        this.f1021q.o(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f1021q.f();
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyDown(int i10, KeyEvent keyEvent) {
        if (this.f1021q.g(i10, keyEvent)) {
            return true;
        }
        return super.onKeyDown(i10, keyEvent);
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent keyEvent) {
        if (this.f1021q.h(i10, keyEvent)) {
            return true;
        }
        return super.onKeyUp(i10, keyEvent);
    }

    @Override // androidx.appcompat.app.l, android.app.Dialog
    public void setTitle(CharSequence charSequence) {
        super.setTitle(charSequence);
        this.f1021q.q(charSequence);
    }
}
