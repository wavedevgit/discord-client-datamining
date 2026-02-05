package androidx.appcompat.view.menu;

import android.content.Context;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.view.menu.k;
import androidx.appcompat.widget.ActionMenuView;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.appcompat.widget.a1;
import androidx.appcompat.widget.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ActionMenuItemView extends AppCompatTextView implements k.a, View.OnClickListener, ActionMenuView.a {

    /* renamed from: d  reason: collision with root package name */
    g f1333d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f1334e;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f1335i;

    /* renamed from: o  reason: collision with root package name */
    e.b f1336o;

    /* renamed from: p  reason: collision with root package name */
    private h0 f1337p;

    /* renamed from: q  reason: collision with root package name */
    b f1338q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f1339r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f1340s;

    /* renamed from: t  reason: collision with root package name */
    private int f1341t;

    /* renamed from: u  reason: collision with root package name */
    private int f1342u;

    /* renamed from: v  reason: collision with root package name */
    private int f1343v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class a extends h0 {
        public a() {
            super(ActionMenuItemView.this);
        }

        @Override // androidx.appcompat.widget.h0
        public k.e b() {
            b bVar = ActionMenuItemView.this.f1338q;
            if (bVar != null) {
                return bVar.a();
            }
            return null;
        }

        @Override // androidx.appcompat.widget.h0
        protected boolean c() {
            k.e b10;
            ActionMenuItemView actionMenuItemView = ActionMenuItemView.this;
            e.b bVar = actionMenuItemView.f1336o;
            if (bVar == null || !bVar.b(actionMenuItemView.f1333d) || (b10 = b()) == null || !b10.isShowing()) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public abstract k.e a();
    }

    public ActionMenuItemView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private boolean g() {
        Configuration configuration = getContext().getResources().getConfiguration();
        int i10 = configuration.screenWidthDp;
        int i11 = configuration.screenHeightDp;
        if (i10 < 480) {
            if ((i10 < 640 || i11 < 480) && configuration.orientation != 2) {
                return false;
            }
            return true;
        }
        return true;
    }

    private void h() {
        CharSequence charSequence;
        CharSequence title;
        boolean z10 = true;
        boolean z11 = !TextUtils.isEmpty(this.f1334e);
        if (this.f1335i != null && (!this.f1333d.B() || (!this.f1339r && !this.f1340s))) {
            z10 = false;
        }
        boolean z12 = z11 & z10;
        CharSequence charSequence2 = null;
        if (z12) {
            charSequence = this.f1334e;
        } else {
            charSequence = null;
        }
        setText(charSequence);
        CharSequence contentDescription = this.f1333d.getContentDescription();
        if (TextUtils.isEmpty(contentDescription)) {
            if (z12) {
                title = null;
            } else {
                title = this.f1333d.getTitle();
            }
            setContentDescription(title);
        } else {
            setContentDescription(contentDescription);
        }
        CharSequence tooltipText = this.f1333d.getTooltipText();
        if (TextUtils.isEmpty(tooltipText)) {
            if (!z12) {
                charSequence2 = this.f1333d.getTitle();
            }
            a1.a(this, charSequence2);
            return;
        }
        a1.a(this, tooltipText);
    }

    @Override // androidx.appcompat.widget.ActionMenuView.a
    public boolean a() {
        return f();
    }

    @Override // androidx.appcompat.widget.ActionMenuView.a
    public boolean b() {
        if (f() && this.f1333d.getIcon() == null) {
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(g gVar, int i10) {
        int i11;
        this.f1333d = gVar;
        setIcon(gVar.getIcon());
        setTitle(gVar.i(this));
        setId(gVar.getItemId());
        if (gVar.isVisible()) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        setVisibility(i11);
        setEnabled(gVar.isEnabled());
        if (gVar.hasSubMenu() && this.f1337p == null) {
            this.f1337p = new a();
        }
    }

    @Override // androidx.appcompat.view.menu.k.a
    public boolean d() {
        return true;
    }

    public boolean f() {
        return !TextUtils.isEmpty(getText());
    }

    @Override // android.widget.TextView, android.view.View
    public CharSequence getAccessibilityClassName() {
        return Button.class.getName();
    }

    @Override // androidx.appcompat.view.menu.k.a
    public g getItemData() {
        return this.f1333d;
    }

    @Override // android.view.View.OnClickListener
    public void onClick(View view) {
        e.b bVar = this.f1336o;
        if (bVar != null) {
            bVar.b(this.f1333d);
        }
    }

    @Override // android.widget.TextView, android.view.View
    public void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        this.f1339r = g();
        h();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.AppCompatTextView, android.widget.TextView, android.view.View
    public void onMeasure(int i10, int i11) {
        int i12;
        int i13;
        boolean f10 = f();
        if (f10 && (i13 = this.f1342u) >= 0) {
            super.setPadding(i13, getPaddingTop(), getPaddingRight(), getPaddingBottom());
        }
        super.onMeasure(i10, i11);
        int mode = View.MeasureSpec.getMode(i10);
        int size = View.MeasureSpec.getSize(i10);
        int measuredWidth = getMeasuredWidth();
        if (mode == Integer.MIN_VALUE) {
            i12 = Math.min(size, this.f1341t);
        } else {
            i12 = this.f1341t;
        }
        if (mode != 1073741824 && this.f1341t > 0 && measuredWidth < i12) {
            super.onMeasure(View.MeasureSpec.makeMeasureSpec(i12, 1073741824), i11);
        }
        if (!f10 && this.f1335i != null) {
            super.setPadding((getMeasuredWidth() - this.f1335i.getBounds().width()) / 2, getPaddingTop(), getPaddingRight(), getPaddingBottom());
        }
    }

    @Override // android.widget.TextView, android.view.View
    public void onRestoreInstanceState(Parcelable parcelable) {
        super.onRestoreInstanceState(null);
    }

    @Override // android.widget.TextView, android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        h0 h0Var;
        if (this.f1333d.hasSubMenu() && (h0Var = this.f1337p) != null && h0Var.onTouch(this, motionEvent)) {
            return true;
        }
        return super.onTouchEvent(motionEvent);
    }

    public void setCheckable(boolean z10) {
    }

    public void setChecked(boolean z10) {
    }

    public void setExpandedFormat(boolean z10) {
        if (this.f1340s != z10) {
            this.f1340s = z10;
            g gVar = this.f1333d;
            if (gVar != null) {
                gVar.c();
            }
        }
    }

    public void setIcon(Drawable drawable) {
        this.f1335i = drawable;
        if (drawable != null) {
            int intrinsicWidth = drawable.getIntrinsicWidth();
            int intrinsicHeight = drawable.getIntrinsicHeight();
            int i10 = this.f1343v;
            if (intrinsicWidth > i10) {
                intrinsicHeight = (int) (intrinsicHeight * (i10 / intrinsicWidth));
                intrinsicWidth = i10;
            }
            if (intrinsicHeight > i10) {
                intrinsicWidth = (int) (intrinsicWidth * (i10 / intrinsicHeight));
            } else {
                i10 = intrinsicHeight;
            }
            drawable.setBounds(0, 0, intrinsicWidth, i10);
        }
        setCompoundDrawables(drawable, null, null, null);
        h();
    }

    public void setItemInvoker(e.b bVar) {
        this.f1336o = bVar;
    }

    @Override // android.widget.TextView, android.view.View
    public void setPadding(int i10, int i11, int i12, int i13) {
        this.f1342u = i10;
        super.setPadding(i10, i11, i12, i13);
    }

    public void setPopupCallback(b bVar) {
        this.f1338q = bVar;
    }

    public void setTitle(CharSequence charSequence) {
        this.f1334e = charSequence;
        h();
    }

    public ActionMenuItemView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Resources resources = context.getResources();
        this.f1339r = g();
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f.j.f22140v, i10, 0);
        this.f1341t = obtainStyledAttributes.getDimensionPixelSize(f.j.f22145w, 0);
        obtainStyledAttributes.recycle();
        this.f1343v = (int) ((resources.getDisplayMetrics().density * 32.0f) + 0.5f);
        setOnClickListener(this);
        this.f1342u = -1;
        setSaveEnabled(false);
    }
}
