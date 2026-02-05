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
    final AlertController f1102q;

    /* renamed from: androidx.appcompat.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0018a {

        /* renamed from: a  reason: collision with root package name */
        private final AlertController.b f1103a;

        /* renamed from: b  reason: collision with root package name */
        private final int f1104b;

        public C0018a(Context context) {
            this(context, a.m(context, 0));
        }

        public C0018a a(ListAdapter listAdapter, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1070w = listAdapter;
            bVar.f1071x = onClickListener;
            return this;
        }

        public C0018a b(View view) {
            this.f1103a.f1054g = view;
            return this;
        }

        public C0018a c(Drawable drawable) {
            this.f1103a.f1051d = drawable;
            return this;
        }

        @NonNull
        public a create() {
            a aVar = new a(this.f1103a.f1048a, this.f1104b);
            this.f1103a.a(aVar.f1102q);
            aVar.setCancelable(this.f1103a.f1065r);
            if (this.f1103a.f1065r) {
                aVar.setCanceledOnTouchOutside(true);
            }
            aVar.setOnCancelListener(this.f1103a.f1066s);
            aVar.setOnDismissListener(this.f1103a.f1067t);
            DialogInterface.OnKeyListener onKeyListener = this.f1103a.f1068u;
            if (onKeyListener != null) {
                aVar.setOnKeyListener(onKeyListener);
            }
            return aVar;
        }

        public C0018a d(CharSequence[] charSequenceArr, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1069v = charSequenceArr;
            bVar.f1071x = onClickListener;
            return this;
        }

        public C0018a e(CharSequence charSequence) {
            this.f1103a.f1055h = charSequence;
            return this;
        }

        public C0018a f(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1059l = charSequence;
            bVar.f1061n = onClickListener;
            return this;
        }

        public C0018a g(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1062o = charSequence;
            bVar.f1064q = onClickListener;
            return this;
        }

        @NonNull
        public Context getContext() {
            return this.f1103a.f1048a;
        }

        public C0018a h(DialogInterface.OnKeyListener onKeyListener) {
            this.f1103a.f1068u = onKeyListener;
            return this;
        }

        public C0018a i(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1056i = charSequence;
            bVar.f1058k = onClickListener;
            return this;
        }

        public C0018a j(ListAdapter listAdapter, int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1070w = listAdapter;
            bVar.f1071x = onClickListener;
            bVar.I = i10;
            bVar.H = true;
            return this;
        }

        public C0018a setNegativeButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1059l = bVar.f1048a.getText(i10);
            this.f1103a.f1061n = onClickListener;
            return this;
        }

        public C0018a setPositiveButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1103a;
            bVar.f1056i = bVar.f1048a.getText(i10);
            this.f1103a.f1058k = onClickListener;
            return this;
        }

        public C0018a setTitle(CharSequence charSequence) {
            this.f1103a.f1053f = charSequence;
            return this;
        }

        public C0018a setView(View view) {
            AlertController.b bVar = this.f1103a;
            bVar.f1073z = view;
            bVar.f1072y = 0;
            bVar.E = false;
            return this;
        }

        public C0018a(@NonNull Context context, int i10) {
            this.f1103a = new AlertController.b(new ContextThemeWrapper(context, a.m(context, i10)));
            this.f1104b = i10;
        }
    }

    protected a(Context context, int i10) {
        super(context, m(context, i10));
        this.f1102q = new AlertController(getContext(), this, getWindow());
    }

    static int m(Context context, int i10) {
        if (((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) >= 1) {
            return i10;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(f.a.f21908l, typedValue, true);
        return typedValue.resourceId;
    }

    public Button k(int i10) {
        return this.f1102q.c(i10);
    }

    public ListView l() {
        return this.f1102q.e();
    }

    public void n(int i10, CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
        this.f1102q.k(i10, charSequence, onClickListener, null, null);
    }

    public void o(CharSequence charSequence) {
        this.f1102q.o(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f1102q.f();
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyDown(int i10, KeyEvent keyEvent) {
        if (this.f1102q.g(i10, keyEvent)) {
            return true;
        }
        return super.onKeyDown(i10, keyEvent);
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent keyEvent) {
        if (this.f1102q.h(i10, keyEvent)) {
            return true;
        }
        return super.onKeyUp(i10, keyEvent);
    }

    @Override // androidx.appcompat.app.l, android.app.Dialog
    public void setTitle(CharSequence charSequence) {
        super.setTitle(charSequence);
        this.f1102q.q(charSequence);
    }
}
