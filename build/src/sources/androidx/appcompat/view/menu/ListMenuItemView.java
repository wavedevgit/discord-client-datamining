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
    private g f1267d;

    /* renamed from: e  reason: collision with root package name */
    private ImageView f1268e;

    /* renamed from: i  reason: collision with root package name */
    private RadioButton f1269i;

    /* renamed from: o  reason: collision with root package name */
    private TextView f1270o;

    /* renamed from: p  reason: collision with root package name */
    private CheckBox f1271p;

    /* renamed from: q  reason: collision with root package name */
    private TextView f1272q;

    /* renamed from: r  reason: collision with root package name */
    private ImageView f1273r;

    /* renamed from: s  reason: collision with root package name */
    private ImageView f1274s;

    /* renamed from: t  reason: collision with root package name */
    private LinearLayout f1275t;

    /* renamed from: u  reason: collision with root package name */
    private Drawable f1276u;

    /* renamed from: v  reason: collision with root package name */
    private int f1277v;

    /* renamed from: w  reason: collision with root package name */
    private Context f1278w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f1279x;

    /* renamed from: y  reason: collision with root package name */
    private Drawable f1280y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f1281z;

    public ListMenuItemView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.B);
    }

    private void a(View view) {
        b(view, -1);
    }

    private void b(View view, int i10) {
        LinearLayout linearLayout = this.f1275t;
        if (linearLayout != null) {
            linearLayout.addView(view, i10);
        } else {
            addView(view, i10);
        }
    }

    private void e() {
        CheckBox checkBox = (CheckBox) getInflater().inflate(f.g.f23387h, (ViewGroup) this, false);
        this.f1271p = checkBox;
        a(checkBox);
    }

    private void f() {
        ImageView imageView = (ImageView) getInflater().inflate(f.g.f23388i, (ViewGroup) this, false);
        this.f1268e = imageView;
        b(imageView, 0);
    }

    private void g() {
        RadioButton radioButton = (RadioButton) getInflater().inflate(f.g.f23390k, (ViewGroup) this, false);
        this.f1269i = radioButton;
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
        ImageView imageView = this.f1273r;
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
        ImageView imageView = this.f1274s;
        if (imageView != null && imageView.getVisibility() == 0) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.f1274s.getLayoutParams();
            rect.top += this.f1274s.getHeight() + layoutParams.topMargin + layoutParams.bottomMargin;
        }
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(g gVar, int i10) {
        int i11;
        this.f1267d = gVar;
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
        return this.f1267d;
    }

    public void h(boolean z10, char c10) {
        int i10;
        if (z10 && this.f1267d.A()) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (i10 == 0) {
            this.f1272q.setText(this.f1267d.h());
        }
        if (this.f1272q.getVisibility() != i10) {
            this.f1272q.setVisibility(i10);
        }
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        setBackground(this.f1276u);
        TextView textView = (TextView) findViewById(f.f.N);
        this.f1270o = textView;
        int i10 = this.f1277v;
        if (i10 != -1) {
            textView.setTextAppearance(this.f1278w, i10);
        }
        this.f1272q = (TextView) findViewById(f.f.G);
        ImageView imageView = (ImageView) findViewById(f.f.J);
        this.f1273r = imageView;
        if (imageView != null) {
            imageView.setImageDrawable(this.f1280y);
        }
        this.f1274s = (ImageView) findViewById(f.f.f23372s);
        this.f1275t = (LinearLayout) findViewById(f.f.f23366m);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        if (this.f1268e != null && this.f1279x) {
            ViewGroup.LayoutParams layoutParams = getLayoutParams();
            LinearLayout.LayoutParams layoutParams2 = (LinearLayout.LayoutParams) this.f1268e.getLayoutParams();
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
        if (z10 || this.f1269i != null || this.f1271p != null) {
            if (this.f1267d.m()) {
                if (this.f1269i == null) {
                    g();
                }
                compoundButton = this.f1269i;
                view = this.f1271p;
            } else {
                if (this.f1271p == null) {
                    e();
                }
                compoundButton = this.f1271p;
                view = this.f1269i;
            }
            if (z10) {
                compoundButton.setChecked(this.f1267d.isChecked());
                if (compoundButton.getVisibility() != 0) {
                    compoundButton.setVisibility(0);
                }
                if (view != null && view.getVisibility() != 8) {
                    view.setVisibility(8);
                    return;
                }
                return;
            }
            CheckBox checkBox = this.f1271p;
            if (checkBox != null) {
                checkBox.setVisibility(8);
            }
            RadioButton radioButton = this.f1269i;
            if (radioButton != null) {
                radioButton.setVisibility(8);
            }
        }
    }

    public void setChecked(boolean z10) {
        CompoundButton compoundButton;
        if (this.f1267d.m()) {
            if (this.f1269i == null) {
                g();
            }
            compoundButton = this.f1269i;
        } else {
            if (this.f1271p == null) {
                e();
            }
            compoundButton = this.f1271p;
        }
        compoundButton.setChecked(z10);
    }

    public void setForceShowIcon(boolean z10) {
        this.B = z10;
        this.f1279x = z10;
    }

    public void setGroupDividerEnabled(boolean z10) {
        int i10;
        ImageView imageView = this.f1274s;
        if (imageView != null) {
            if (!this.f1281z && z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            imageView.setVisibility(i10);
        }
    }

    public void setIcon(Drawable drawable) {
        boolean z10;
        if (!this.f1267d.z() && !this.B) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10 || this.f1279x) {
            ImageView imageView = this.f1268e;
            if (imageView != null || drawable != null || this.f1279x) {
                if (imageView == null) {
                    f();
                }
                if (drawable == null && !this.f1279x) {
                    this.f1268e.setVisibility(8);
                    return;
                }
                ImageView imageView2 = this.f1268e;
                if (!z10) {
                    drawable = null;
                }
                imageView2.setImageDrawable(drawable);
                if (this.f1268e.getVisibility() != 0) {
                    this.f1268e.setVisibility(0);
                }
            }
        }
    }

    public void setTitle(CharSequence charSequence) {
        if (charSequence != null) {
            this.f1270o.setText(charSequence);
            if (this.f1270o.getVisibility() != 0) {
                this.f1270o.setVisibility(0);
            }
        } else if (this.f1270o.getVisibility() != 8) {
            this.f1270o.setVisibility(8);
        }
    }

    public ListMenuItemView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet);
        v0 v10 = v0.v(getContext(), attributeSet, f.j.T1, i10, 0);
        this.f1276u = v10.g(f.j.V1);
        this.f1277v = v10.n(f.j.U1, -1);
        this.f1279x = v10.a(f.j.W1, false);
        this.f1278w = context;
        this.f1280y = v10.g(f.j.X1);
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(null, new int[]{16843049}, f.a.f23304y, 0);
        this.f1281z = obtainStyledAttributes.hasValue(0);
        v10.x();
        obtainStyledAttributes.recycle();
    }
}
