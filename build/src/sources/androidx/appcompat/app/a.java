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
    final AlertController f990q;

    /* renamed from: androidx.appcompat.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0017a {

        /* renamed from: a  reason: collision with root package name */
        private final AlertController.b f991a;

        /* renamed from: b  reason: collision with root package name */
        private final int f992b;

        public C0017a(Context context) {
            this(context, a.m(context, 0));
        }

        public C0017a a(ListAdapter listAdapter, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f958w = listAdapter;
            bVar.f959x = onClickListener;
            return this;
        }

        public C0017a b(View view) {
            this.f991a.f942g = view;
            return this;
        }

        public C0017a c(Drawable drawable) {
            this.f991a.f939d = drawable;
            return this;
        }

        @NonNull
        public a create() {
            a aVar = new a(this.f991a.f936a, this.f992b);
            this.f991a.a(aVar.f990q);
            aVar.setCancelable(this.f991a.f953r);
            if (this.f991a.f953r) {
                aVar.setCanceledOnTouchOutside(true);
            }
            aVar.setOnCancelListener(this.f991a.f954s);
            aVar.setOnDismissListener(this.f991a.f955t);
            DialogInterface.OnKeyListener onKeyListener = this.f991a.f956u;
            if (onKeyListener != null) {
                aVar.setOnKeyListener(onKeyListener);
            }
            return aVar;
        }

        public C0017a d(CharSequence[] charSequenceArr, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f957v = charSequenceArr;
            bVar.f959x = onClickListener;
            return this;
        }

        public C0017a e(CharSequence charSequence) {
            this.f991a.f943h = charSequence;
            return this;
        }

        public C0017a f(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f947l = charSequence;
            bVar.f949n = onClickListener;
            return this;
        }

        public C0017a g(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f950o = charSequence;
            bVar.f952q = onClickListener;
            return this;
        }

        @NonNull
        public Context getContext() {
            return this.f991a.f936a;
        }

        public C0017a h(DialogInterface.OnKeyListener onKeyListener) {
            this.f991a.f956u = onKeyListener;
            return this;
        }

        public C0017a i(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f944i = charSequence;
            bVar.f946k = onClickListener;
            return this;
        }

        public C0017a j(ListAdapter listAdapter, int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f958w = listAdapter;
            bVar.f959x = onClickListener;
            bVar.I = i10;
            bVar.H = true;
            return this;
        }

        public C0017a setNegativeButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f947l = bVar.f936a.getText(i10);
            this.f991a.f949n = onClickListener;
            return this;
        }

        public C0017a setPositiveButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f991a;
            bVar.f944i = bVar.f936a.getText(i10);
            this.f991a.f946k = onClickListener;
            return this;
        }

        public C0017a setTitle(CharSequence charSequence) {
            this.f991a.f941f = charSequence;
            return this;
        }

        public C0017a setView(View view) {
            AlertController.b bVar = this.f991a;
            bVar.f961z = view;
            bVar.f960y = 0;
            bVar.E = false;
            return this;
        }

        public C0017a(@NonNull Context context, int i10) {
            this.f991a = new AlertController.b(new ContextThemeWrapper(context, a.m(context, i10)));
            this.f992b = i10;
        }
    }

    protected a(Context context, int i10) {
        super(context, m(context, i10));
        this.f990q = new AlertController(getContext(), this, getWindow());
    }

    static int m(Context context, int i10) {
        if (((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) >= 1) {
            return i10;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(f.a.f22883l, typedValue, true);
        return typedValue.resourceId;
    }

    public Button k(int i10) {
        return this.f990q.c(i10);
    }

    public ListView l() {
        return this.f990q.e();
    }

    public void n(int i10, CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
        this.f990q.k(i10, charSequence, onClickListener, null, null);
    }

    public void o(CharSequence charSequence) {
        this.f990q.o(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f990q.f();
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyDown(int i10, KeyEvent keyEvent) {
        if (this.f990q.g(i10, keyEvent)) {
            return true;
        }
        return super.onKeyDown(i10, keyEvent);
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent keyEvent) {
        if (this.f990q.h(i10, keyEvent)) {
            return true;
        }
        return super.onKeyUp(i10, keyEvent);
    }

    @Override // androidx.appcompat.app.l, android.app.Dialog
    public void setTitle(CharSequence charSequence) {
        super.setTitle(charSequence);
        this.f990q.q(charSequence);
    }
}
