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
    final AlertController f1431q;

    /* renamed from: androidx.appcompat.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0016a {

        /* renamed from: a  reason: collision with root package name */
        private final AlertController.b f1432a;

        /* renamed from: b  reason: collision with root package name */
        private final int f1433b;

        public C0016a(Context context) {
            this(context, a.m(context, 0));
        }

        public C0016a a(ListAdapter listAdapter, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1399w = listAdapter;
            bVar.f1400x = onClickListener;
            return this;
        }

        public C0016a b(View view) {
            this.f1432a.f1383g = view;
            return this;
        }

        public C0016a c(Drawable drawable) {
            this.f1432a.f1380d = drawable;
            return this;
        }

        @NonNull
        public a create() {
            a aVar = new a(this.f1432a.f1377a, this.f1433b);
            this.f1432a.a(aVar.f1431q);
            aVar.setCancelable(this.f1432a.f1394r);
            if (this.f1432a.f1394r) {
                aVar.setCanceledOnTouchOutside(true);
            }
            aVar.setOnCancelListener(this.f1432a.f1395s);
            aVar.setOnDismissListener(this.f1432a.f1396t);
            DialogInterface.OnKeyListener onKeyListener = this.f1432a.f1397u;
            if (onKeyListener != null) {
                aVar.setOnKeyListener(onKeyListener);
            }
            return aVar;
        }

        public C0016a d(CharSequence[] charSequenceArr, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1398v = charSequenceArr;
            bVar.f1400x = onClickListener;
            return this;
        }

        public C0016a e(CharSequence charSequence) {
            this.f1432a.f1384h = charSequence;
            return this;
        }

        public C0016a f(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1388l = charSequence;
            bVar.f1390n = onClickListener;
            return this;
        }

        public C0016a g(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1391o = charSequence;
            bVar.f1393q = onClickListener;
            return this;
        }

        @NonNull
        public Context getContext() {
            return this.f1432a.f1377a;
        }

        public C0016a h(DialogInterface.OnKeyListener onKeyListener) {
            this.f1432a.f1397u = onKeyListener;
            return this;
        }

        public C0016a i(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1385i = charSequence;
            bVar.f1387k = onClickListener;
            return this;
        }

        public C0016a j(ListAdapter listAdapter, int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1399w = listAdapter;
            bVar.f1400x = onClickListener;
            bVar.I = i10;
            bVar.H = true;
            return this;
        }

        public C0016a setNegativeButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1388l = bVar.f1377a.getText(i10);
            this.f1432a.f1390n = onClickListener;
            return this;
        }

        public C0016a setPositiveButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1432a;
            bVar.f1385i = bVar.f1377a.getText(i10);
            this.f1432a.f1387k = onClickListener;
            return this;
        }

        public C0016a setTitle(CharSequence charSequence) {
            this.f1432a.f1382f = charSequence;
            return this;
        }

        public C0016a setView(View view) {
            AlertController.b bVar = this.f1432a;
            bVar.f1402z = view;
            bVar.f1401y = 0;
            bVar.E = false;
            return this;
        }

        public C0016a(@NonNull Context context, int i10) {
            this.f1432a = new AlertController.b(new ContextThemeWrapper(context, a.m(context, i10)));
            this.f1433b = i10;
        }
    }

    protected a(Context context, int i10) {
        super(context, m(context, i10));
        this.f1431q = new AlertController(getContext(), this, getWindow());
    }

    static int m(Context context, int i10) {
        if (((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) >= 1) {
            return i10;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(f.a.f22209l, typedValue, true);
        return typedValue.resourceId;
    }

    public Button k(int i10) {
        return this.f1431q.c(i10);
    }

    public ListView l() {
        return this.f1431q.e();
    }

    public void n(int i10, CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
        this.f1431q.k(i10, charSequence, onClickListener, null, null);
    }

    public void o(CharSequence charSequence) {
        this.f1431q.o(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f1431q.f();
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyDown(int i10, KeyEvent keyEvent) {
        if (this.f1431q.g(i10, keyEvent)) {
            return true;
        }
        return super.onKeyDown(i10, keyEvent);
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent keyEvent) {
        if (this.f1431q.h(i10, keyEvent)) {
            return true;
        }
        return super.onKeyUp(i10, keyEvent);
    }

    @Override // androidx.appcompat.app.l, android.app.Dialog
    public void setTitle(CharSequence charSequence) {
        super.setTitle(charSequence);
        this.f1431q.q(charSequence);
    }
}
