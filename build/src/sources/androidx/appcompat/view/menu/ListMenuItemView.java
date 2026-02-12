package androidx.appcompat.view.menu;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RadioButton;
import android.widget.TextView;
import androidx.appcompat.view.menu.k;
import androidx.appcompat.widget.v0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ListMenuItemView extends LinearLayout implements k.a, AbsListView.SelectionBoundsAdjuster {
    private LayoutInflater A;
    private boolean B;

    /* renamed from: d  reason: collision with root package name */
    private g f1375d;

    /* renamed from: e  reason: collision with root package name */
    private ImageView f1376e;

    /* renamed from: i  reason: collision with root package name */
    private RadioButton f1377i;

    /* renamed from: o  reason: collision with root package name */
    private TextView f1378o;

    /* renamed from: p  reason: collision with root package name */
    private CheckBox f1379p;

    /* renamed from: q  reason: collision with root package name */
    private TextView f1380q;

    /* renamed from: r  reason: collision with root package name */
    private ImageView f1381r;

    /* renamed from: s  reason: collision with root package name */
    private ImageView f1382s;

    /* renamed from: t  reason: collision with root package name */
    private LinearLayout f1383t;

    /* renamed from: u  reason: collision with root package name */
    private Drawable f1384u;

    /* renamed from: v  reason: collision with root package name */
    private int f1385v;

    /* renamed from: w  reason: collision with root package name */
    private Context f1386w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f1387x;

    /* renamed from: y  reason: collision with root package name */
    private Drawable f1388y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f1389z;

    public ListMenuItemView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.C);
    }

    private void a(View view) {
        b(view, -1);
    }

    private void b(View view, int i10) {
        LinearLayout linearLayout = this.f1383t;
        if (linearLayout != null) {
            linearLayout.addView(view, i10);
        } else {
            addView(view, i10);
        }
    }

    private void e() {
        CheckBox checkBox = (CheckBox) getInflater().inflate(f.g.f23384h, (ViewGroup) this, false);
        this.f1379p = checkBox;
        a(checkBox);
    }

    private void f() {
        ImageView imageView = (ImageView) getInflater().inflate(f.g.f23385i, (ViewGroup) this, false);
        this.f1376e = imageView;
        b(imageView, 0);
    }

    private void g() {
        RadioButton radioButton = (RadioButton) getInflater().inflate(f.g.f23387k, (ViewGroup) this, false);
        this.f1377i = radioButton;
        a(radioButton);
    }

    private LayoutInflater getInflater() {
        if (this.A == null) {
            this.A = LayoutInflater.from(getContext());
        }
        return this.A;
    }

    private void setSubMenuArrowVisible(boolean z10) {
        int i10;
        ImageView imageView = this.f1381r;
        if (imageView != null) {
            if (z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            imageView.setVisibility(i10);
        }
    }

    @Override // android.widget.AbsListView.SelectionBoundsAdjuster
    public void adjustListItemSelectionBounds(Rect rect) {
        ImageView imageView = this.f1382s;
        if (imageView != null && imageView.getVisibility() == 0) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.f1382s.getLayoutParams();
            rect.top += this.f1382s.getHeight() + layoutParams.topMargin + layoutParams.bottomMargin;
        }
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(g gVar, int i10) {
        int i11;
        this.f1375d = gVar;
        if (gVar.isVisible()) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        setVisibility(i11);
        setTitle(gVar.i(this));
        setCheckable(gVar.isCheckable());
        h(gVar.A(), gVar.g());
        setIcon(gVar.getIcon());
        setEnabled(gVar.isEnabled());
        setSubMenuArrowVisible(gVar.hasSubMenu());
        setContentDescription(gVar.getContentDescription());
    }

    @Override // androidx.appcompat.view.menu.k.a
    public boolean d() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.k.a
    public g getItemData() {
        return this.f1375d;
    }

    public void h(boolean z10, char c10) {
        int i10;
        if (z10 && this.f1375d.A()) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (i10 == 0) {
            this.f1380q.setText(this.f1375d.h());
        }
        if (this.f1380q.getVisibility() != i10) {
            this.f1380q.setVisibility(i10);
        }
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        setBackground(this.f1384u);
        TextView textView = (TextView) findViewById(f.f.N);
        this.f1378o = textView;
        int i10 = this.f1385v;
        if (i10 != -1) {
            textView.setTextAppearance(this.f1386w, i10);
        }
        this.f1380q = (TextView) findViewById(f.f.G);
        ImageView imageView = (ImageView) findViewById(f.f.J);
        this.f1381r = imageView;
        if (imageView != null) {
            imageView.setImageDrawable(this.f1388y);
        }
        this.f1382s = (ImageView) findViewById(f.f.f23369s);
        this.f1383t = (LinearLayout) findViewById(f.f.f23363m);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        if (this.f1376e != null && this.f1387x) {
            ViewGroup.LayoutParams layoutParams = getLayoutParams();
            LinearLayout.LayoutParams layoutParams2 = (LinearLayout.LayoutParams) this.f1376e.getLayoutParams();
            int i12 = layoutParams.height;
            if (i12 > 0 && layoutParams2.width <= 0) {
                layoutParams2.width = i12;
            }
        }
        super.onMeasure(i10, i11);
    }

    public void setCheckable(boolean z10) {
        CompoundButton compoundButton;
        View view;
        if (z10 || this.f1377i != null || this.f1379p != null) {
            if (this.f1375d.m()) {
                if (this.f1377i == null) {
                    g();
                }
                compoundButton = this.f1377i;
                view = this.f1379p;
            } else {
                if (this.f1379p == null) {
                    e();
                }
                compoundButton = this.f1379p;
                view = this.f1377i;
            }
            if (z10) {
                compoundButton.setChecked(this.f1375d.isChecked());
                if (compoundButton.getVisibility() != 0) {
                    compoundButton.setVisibility(0);
                }
                if (view != null && view.getVisibility() != 8) {
                    view.setVisibility(8);
                    return;
                }
                return;
            }
            CheckBox checkBox = this.f1379p;
            if (checkBox != null) {
                checkBox.setVisibility(8);
            }
            RadioButton radioButton = this.f1377i;
            if (radioButton != null) {
                radioButton.setVisibility(8);
            }
        }
    }

    public void setChecked(boolean z10) {
        CompoundButton compoundButton;
        if (this.f1375d.m()) {
            if (this.f1377i == null) {
                g();
            }
            compoundButton = this.f1377i;
        } else {
            if (this.f1379p == null) {
                e();
            }
            compoundButton = this.f1379p;
        }
        compoundButton.setChecked(z10);
    }

    public void setForceShowIcon(boolean z10) {
        this.B = z10;
        this.f1387x = z10;
    }

    public void setGroupDividerEnabled(boolean z10) {
        int i10;
        ImageView imageView = this.f1382s;
        if (imageView != null) {
            if (!this.f1389z && z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            imageView.setVisibility(i10);
        }
    }

    public void setIcon(Drawable drawable) {
        boolean z10;
        if (!this.f1375d.z() && !this.B) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10 || this.f1387x) {
            ImageView imageView = this.f1376e;
            if (imageView != null || drawable != null || this.f1387x) {
                if (imageView == null) {
                    f();
                }
                if (drawable == null && !this.f1387x) {
                    this.f1376e.setVisibility(8);
                    return;
                }
                ImageView imageView2 = this.f1376e;
                if (!z10) {
                    drawable = null;
                }
                imageView2.setImageDrawable(drawable);
                if (this.f1376e.getVisibility() != 0) {
                    this.f1376e.setVisibility(0);
                }
            }
        }
    }

    public void setTitle(CharSequence charSequence) {
        if (charSequence != null) {
            this.f1378o.setText(charSequence);
            if (this.f1378o.getVisibility() != 0) {
                this.f1378o.setVisibility(0);
            }
        } else if (this.f1378o.getVisibility() != 8) {
            this.f1378o.setVisibility(8);
        }
    }

    public ListMenuItemView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet);
        v0 v10 = v0.v(getContext(), attributeSet, f.j.T1, i10, 0);
        this.f1384u = v10.g(f.j.V1);
        this.f1385v = v10.n(f.j.U1, -1);
        this.f1387x = v10.a(f.j.W1, false);
        this.f1386w = context;
        this.f1388y = v10.g(f.j.X1);
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(null, new int[]{16843049}, f.a.f23302z, 0);
        this.f1389z = obtainStyledAttributes.hasValue(0);
        v10.x();
        obtainStyledAttributes.recycle();
    }
}
