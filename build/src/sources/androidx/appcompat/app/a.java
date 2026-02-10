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
    final AlertController f1128q;

    /* renamed from: androidx.appcompat.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0018a {

        /* renamed from: a  reason: collision with root package name */
        private final AlertController.b f1129a;

        /* renamed from: b  reason: collision with root package name */
        private final int f1130b;

        public C0018a(Context context) {
            this(context, a.m(context, 0));
        }

        public C0018a a(ListAdapter listAdapter, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1096w = listAdapter;
            bVar.f1097x = onClickListener;
            return this;
        }

        public C0018a b(View view) {
            this.f1129a.f1080g = view;
            return this;
        }

        public C0018a c(Drawable drawable) {
            this.f1129a.f1077d = drawable;
            return this;
        }

        @NonNull
        public a create() {
            a aVar = new a(this.f1129a.f1074a, this.f1130b);
            this.f1129a.a(aVar.f1128q);
            aVar.setCancelable(this.f1129a.f1091r);
            if (this.f1129a.f1091r) {
                aVar.setCanceledOnTouchOutside(true);
            }
            aVar.setOnCancelListener(this.f1129a.f1092s);
            aVar.setOnDismissListener(this.f1129a.f1093t);
            DialogInterface.OnKeyListener onKeyListener = this.f1129a.f1094u;
            if (onKeyListener != null) {
                aVar.setOnKeyListener(onKeyListener);
            }
            return aVar;
        }

        public C0018a d(CharSequence[] charSequenceArr, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1095v = charSequenceArr;
            bVar.f1097x = onClickListener;
            return this;
        }

        public C0018a e(CharSequence charSequence) {
            this.f1129a.f1081h = charSequence;
            return this;
        }

        public C0018a f(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1085l = charSequence;
            bVar.f1087n = onClickListener;
            return this;
        }

        public C0018a g(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1088o = charSequence;
            bVar.f1090q = onClickListener;
            return this;
        }

        @NonNull
        public Context getContext() {
            return this.f1129a.f1074a;
        }

        public C0018a h(DialogInterface.OnKeyListener onKeyListener) {
            this.f1129a.f1094u = onKeyListener;
            return this;
        }

        public C0018a i(CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1082i = charSequence;
            bVar.f1084k = onClickListener;
            return this;
        }

        public C0018a j(ListAdapter listAdapter, int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1096w = listAdapter;
            bVar.f1097x = onClickListener;
            bVar.I = i10;
            bVar.H = true;
            return this;
        }

        public C0018a setNegativeButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1085l = bVar.f1074a.getText(i10);
            this.f1129a.f1087n = onClickListener;
            return this;
        }

        public C0018a setPositiveButton(int i10, DialogInterface.OnClickListener onClickListener) {
            AlertController.b bVar = this.f1129a;
            bVar.f1082i = bVar.f1074a.getText(i10);
            this.f1129a.f1084k = onClickListener;
            return this;
        }

        public C0018a setTitle(CharSequence charSequence) {
            this.f1129a.f1079f = charSequence;
            return this;
        }

        public C0018a setView(View view) {
            AlertController.b bVar = this.f1129a;
            bVar.f1099z = view;
            bVar.f1098y = 0;
            bVar.E = false;
            return this;
        }

        public C0018a(@NonNull Context context, int i10) {
            this.f1129a = new AlertController.b(new ContextThemeWrapper(context, a.m(context, i10)));
            this.f1130b = i10;
        }
    }

    protected a(Context context, int i10) {
        super(context, m(context, i10));
        this.f1128q = new AlertController(getContext(), this, getWindow());
    }

    static int m(Context context, int i10) {
        if (((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) >= 1) {
            return i10;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(f.a.f22164l, typedValue, true);
        return typedValue.resourceId;
    }

    public Button k(int i10) {
        return this.f1128q.c(i10);
    }

    public ListView l() {
        return this.f1128q.e();
    }

    public void n(int i10, CharSequence charSequence, DialogInterface.OnClickListener onClickListener) {
        this.f1128q.k(i10, charSequence, onClickListener, null, null);
    }

    public void o(CharSequence charSequence) {
        this.f1128q.o(charSequence);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f1128q.f();
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyDown(int i10, KeyEvent keyEvent) {
        if (this.f1128q.g(i10, keyEvent)) {
            return true;
        }
        return super.onKeyDown(i10, keyEvent);
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent keyEvent) {
        if (this.f1128q.h(i10, keyEvent)) {
            return true;
        }
        return super.onKeyUp(i10, keyEvent);
    }

    @Override // androidx.appcompat.app.l, android.app.Dialog
    public void setTitle(CharSequence charSequence) {
        super.setTitle(charSequence);
        this.f1128q.q(charSequence);
    }
}
