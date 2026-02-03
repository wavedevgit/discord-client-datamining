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
    private g f1236d;

    /* renamed from: e  reason: collision with root package name */
    private ImageView f1237e;

    /* renamed from: i  reason: collision with root package name */
    private RadioButton f1238i;

    /* renamed from: o  reason: collision with root package name */
    private TextView f1239o;

    /* renamed from: p  reason: collision with root package name */
    private CheckBox f1240p;

    /* renamed from: q  reason: collision with root package name */
    private TextView f1241q;

    /* renamed from: r  reason: collision with root package name */
    private ImageView f1242r;

    /* renamed from: s  reason: collision with root package name */
    private ImageView f1243s;

    /* renamed from: t  reason: collision with root package name */
    private LinearLayout f1244t;

    /* renamed from: u  reason: collision with root package name */
    private Drawable f1245u;

    /* renamed from: v  reason: collision with root package name */
    private int f1246v;

    /* renamed from: w  reason: collision with root package name */
    private Context f1247w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f1248x;

    /* renamed from: y  reason: collision with root package name */
    private Drawable f1249y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f1250z;

    public ListMenuItemView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.B);
    }

    private void a(View view) {
        b(view, -1);
    }

    private void b(View view, int i10) {
        LinearLayout linearLayout = this.f1244t;
        if (linearLayout != null) {
            linearLayout.addView(view, i10);
        } else {
            addView(view, i10);
        }
    }

    private void e() {
        CheckBox checkBox = (CheckBox) getInflater().inflate(f.g.f22979h, (ViewGroup) this, false);
        this.f1240p = checkBox;
        a(checkBox);
    }

    private void f() {
        ImageView imageView = (ImageView) getInflater().inflate(f.g.f22980i, (ViewGroup) this, false);
        this.f1237e = imageView;
        b(imageView, 0);
    }

    private void g() {
        RadioButton radioButton = (RadioButton) getInflater().inflate(f.g.f22982k, (ViewGroup) this, false);
        this.f1238i = radioButton;
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
        ImageView imageView = this.f1242r;
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
        ImageView imageView = this.f1243s;
        if (imageView != null && imageView.getVisibility() == 0) {
            LinearLayout.LayoutParams layoutParams = (LinearLayout.LayoutParams) this.f1243s.getLayoutParams();
            rect.top += this.f1243s.getHeight() + layoutParams.topMargin + layoutParams.bottomMargin;
        }
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(g gVar, int i10) {
        int i11;
        this.f1236d = gVar;
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
        return this.f1236d;
    }

    public void h(boolean z10, char c10) {
        int i10;
        if (z10 && this.f1236d.A()) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        if (i10 == 0) {
            this.f1241q.setText(this.f1236d.h());
        }
        if (this.f1241q.getVisibility() != i10) {
            this.f1241q.setVisibility(i10);
        }
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        setBackground(this.f1245u);
        TextView textView = (TextView) findViewById(f.f.N);
        this.f1239o = textView;
        int i10 = this.f1246v;
        if (i10 != -1) {
            textView.setTextAppearance(this.f1247w, i10);
        }
        this.f1241q = (TextView) findViewById(f.f.G);
        ImageView imageView = (ImageView) findViewById(f.f.J);
        this.f1242r = imageView;
        if (imageView != null) {
            imageView.setImageDrawable(this.f1249y);
        }
        this.f1243s = (ImageView) findViewById(f.f.f22964s);
        this.f1244t = (LinearLayout) findViewById(f.f.f22958m);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        if (this.f1237e != null && this.f1248x) {
            ViewGroup.LayoutParams layoutParams = getLayoutParams();
            LinearLayout.LayoutParams layoutParams2 = (LinearLayout.LayoutParams) this.f1237e.getLayoutParams();
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
        if (z10 || this.f1238i != null || this.f1240p != null) {
            if (this.f1236d.m()) {
                if (this.f1238i == null) {
                    g();
                }
                compoundButton = this.f1238i;
                view = this.f1240p;
            } else {
                if (this.f1240p == null) {
                    e();
                }
                compoundButton = this.f1240p;
                view = this.f1238i;
            }
            if (z10) {
                compoundButton.setChecked(this.f1236d.isChecked());
                if (compoundButton.getVisibility() != 0) {
                    compoundButton.setVisibility(0);
                }
                if (view != null && view.getVisibility() != 8) {
                    view.setVisibility(8);
                    return;
                }
                return;
            }
            CheckBox checkBox = this.f1240p;
            if (checkBox != null) {
                checkBox.setVisibility(8);
            }
            RadioButton radioButton = this.f1238i;
            if (radioButton != null) {
                radioButton.setVisibility(8);
            }
        }
    }

    public void setChecked(boolean z10) {
        CompoundButton compoundButton;
        if (this.f1236d.m()) {
            if (this.f1238i == null) {
                g();
            }
            compoundButton = this.f1238i;
        } else {
            if (this.f1240p == null) {
                e();
            }
            compoundButton = this.f1240p;
        }
        compoundButton.setChecked(z10);
    }

    public void setForceShowIcon(boolean z10) {
        this.B = z10;
        this.f1248x = z10;
    }

    public void setGroupDividerEnabled(boolean z10) {
        int i10;
        ImageView imageView = this.f1243s;
        if (imageView != null) {
            if (!this.f1250z && z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            imageView.setVisibility(i10);
        }
    }

    public void setIcon(Drawable drawable) {
        boolean z10;
        if (!this.f1236d.z() && !this.B) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10 || this.f1248x) {
            ImageView imageView = this.f1237e;
            if (imageView != null || drawable != null || this.f1248x) {
                if (imageView == null) {
                    f();
                }
                if (drawable == null && !this.f1248x) {
                    this.f1237e.setVisibility(8);
                    return;
                }
                ImageView imageView2 = this.f1237e;
                if (!z10) {
                    drawable = null;
                }
                imageView2.setImageDrawable(drawable);
                if (this.f1237e.getVisibility() != 0) {
                    this.f1237e.setVisibility(0);
                }
            }
        }
    }

    public void setTitle(CharSequence charSequence) {
        if (charSequence != null) {
            this.f1239o.setText(charSequence);
            if (this.f1239o.getVisibility() != 0) {
                this.f1239o.setVisibility(0);
            }
        } else if (this.f1239o.getVisibility() != 8) {
            this.f1239o.setVisibility(8);
        }
    }

    public ListMenuItemView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet);
        v0 v10 = v0.v(getContext(), attributeSet, f.j.T1, i10, 0);
        this.f1245u = v10.g(f.j.V1);
        this.f1246v = v10.n(f.j.U1, -1);
        this.f1248x = v10.a(f.j.W1, false);
        this.f1247w = context;
        this.f1249y = v10.g(f.j.X1);
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(null, new int[]{16843049}, f.a.f22896y, 0);
        this.f1250z = obtainStyledAttributes.hasValue(0);
        v10.x();
        obtainStyledAttributes.recycle();
    }
}
