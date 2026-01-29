package androidx.constraintlayout.widget;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Arrays;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b extends View {

    /* renamed from: d  reason: collision with root package name */
    protected int[] f2610d;

    /* renamed from: e  reason: collision with root package name */
    protected int f2611e;

    /* renamed from: i  reason: collision with root package name */
    protected Context f2612i;

    /* renamed from: o  reason: collision with root package name */
    protected k1.a f2613o;

    /* renamed from: p  reason: collision with root package name */
    protected boolean f2614p;

    /* renamed from: q  reason: collision with root package name */
    protected String f2615q;

    /* renamed from: r  reason: collision with root package name */
    protected String f2616r;

    /* renamed from: s  reason: collision with root package name */
    private View[] f2617s;

    /* renamed from: t  reason: collision with root package name */
    protected HashMap f2618t;

    public b(Context context) {
        super(context);
        this.f2610d = new int[32];
        this.f2614p = false;
        this.f2617s = null;
        this.f2618t = new HashMap();
        this.f2612i = context;
        i(null);
    }

    private void a(String str) {
        if (str != null && str.length() != 0 && this.f2612i != null) {
            String trim = str.trim();
            int h10 = h(trim);
            if (h10 != 0) {
                this.f2618t.put(Integer.valueOf(h10), trim);
                b(h10);
                return;
            }
            Log.w("ConstraintHelper", "Could not find id of \"" + trim + "\"");
        }
    }

    private void b(int i10) {
        if (i10 == getId()) {
            return;
        }
        int i11 = this.f2611e + 1;
        int[] iArr = this.f2610d;
        if (i11 > iArr.length) {
            this.f2610d = Arrays.copyOf(iArr, iArr.length * 2);
        }
        int[] iArr2 = this.f2610d;
        int i12 = this.f2611e;
        iArr2[i12] = i10;
        this.f2611e = i12 + 1;
    }

    private void c(String str) {
        ConstraintLayout constraintLayout;
        if (str != null && str.length() != 0 && this.f2612i != null) {
            String trim = str.trim();
            if (getParent() instanceof ConstraintLayout) {
                constraintLayout = (ConstraintLayout) getParent();
            } else {
                constraintLayout = null;
            }
            if (constraintLayout == null) {
                Log.w("ConstraintHelper", "Parent not a ConstraintLayout");
                return;
            }
            int childCount = constraintLayout.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = constraintLayout.getChildAt(i10);
                ViewGroup.LayoutParams layoutParams = childAt.getLayoutParams();
                if ((layoutParams instanceof ConstraintLayout.LayoutParams) && trim.equals(((ConstraintLayout.LayoutParams) layoutParams).f2411c0)) {
                    if (childAt.getId() == -1) {
                        Log.w("ConstraintHelper", "to use ConstraintTag view " + childAt.getClass().getSimpleName() + " must have an ID");
                    } else {
                        b(childAt.getId());
                    }
                }
            }
        }
    }

    private int g(ConstraintLayout constraintLayout, String str) {
        Resources resources;
        String str2;
        if (str == null || constraintLayout == null || (resources = this.f2612i.getResources()) == null) {
            return 0;
        }
        int childCount = constraintLayout.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            if (childAt.getId() != -1) {
                try {
                    str2 = resources.getResourceEntryName(childAt.getId());
                } catch (Resources.NotFoundException unused) {
                    str2 = null;
                }
                if (str.equals(str2)) {
                    return childAt.getId();
                }
            }
        }
        return 0;
    }

    private int h(String str) {
        ConstraintLayout constraintLayout;
        if (getParent() instanceof ConstraintLayout) {
            constraintLayout = (ConstraintLayout) getParent();
        } else {
            constraintLayout = null;
        }
        int i10 = 0;
        if (isInEditMode() && constraintLayout != null) {
            Object designInformation = constraintLayout.getDesignInformation(0, str);
            if (designInformation instanceof Integer) {
                i10 = ((Integer) designInformation).intValue();
            }
        }
        if (i10 == 0 && constraintLayout != null) {
            i10 = g(constraintLayout, str);
        }
        if (i10 == 0) {
            try {
                i10 = c.class.getField(str).getInt(null);
            } catch (Exception unused) {
            }
        }
        if (i10 == 0) {
            return this.f2612i.getResources().getIdentifier(str, StackTraceHelper.ID_KEY, this.f2612i.getPackageName());
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d() {
        ViewParent parent = getParent();
        if (parent != null && (parent instanceof ConstraintLayout)) {
            e((ConstraintLayout) parent);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(ConstraintLayout constraintLayout) {
        int visibility = getVisibility();
        float elevation = getElevation();
        for (int i10 = 0; i10 < this.f2611e; i10++) {
            View viewById = constraintLayout.getViewById(this.f2610d[i10]);
            if (viewById != null) {
                viewById.setVisibility(visibility);
                if (elevation > 0.0f) {
                    viewById.setTranslationZ(viewById.getTranslationZ() + elevation);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void f(ConstraintLayout constraintLayout) {
    }

    public int[] getReferencedIds() {
        return Arrays.copyOf(this.f2610d, this.f2611e);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void i(AttributeSet attributeSet) {
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, d.V0);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == d.f2735o1) {
                    String string = obtainStyledAttributes.getString(index);
                    this.f2615q = string;
                    setIds(string);
                } else if (index == d.f2743p1) {
                    String string2 = obtainStyledAttributes.getString(index);
                    this.f2616r = string2;
                    setReferenceTags(string2);
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    public void j(ConstraintWidget constraintWidget, boolean z10) {
    }

    public void k(ConstraintLayout constraintLayout) {
    }

    public void l(ConstraintLayout constraintLayout) {
    }

    public void m(ConstraintLayout constraintLayout) {
    }

    public void n(ConstraintLayout constraintLayout) {
        String str;
        int g10;
        if (isInEditMode()) {
            setIds(this.f2615q);
        }
        k1.a aVar = this.f2613o;
        if (aVar == null) {
            return;
        }
        aVar.b();
        for (int i10 = 0; i10 < this.f2611e; i10++) {
            int i11 = this.f2610d[i10];
            View viewById = constraintLayout.getViewById(i11);
            if (viewById == null && (g10 = g(constraintLayout, (str = (String) this.f2618t.get(Integer.valueOf(i11))))) != 0) {
                this.f2610d[i10] = g10;
                this.f2618t.put(Integer.valueOf(g10), str);
                viewById = constraintLayout.getViewById(g10);
            }
            if (viewById != null) {
                this.f2613o.a(constraintLayout.getViewWidget(viewById));
            }
        }
        this.f2613o.c(constraintLayout.mLayoutWidget);
    }

    public void o() {
        if (this.f2613o != null) {
            ViewGroup.LayoutParams layoutParams = getLayoutParams();
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).f2449v0 = (ConstraintWidget) this.f2613o;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        String str = this.f2615q;
        if (str != null) {
            setIds(str);
        }
        String str2 = this.f2616r;
        if (str2 != null) {
            setReferenceTags(str2);
        }
    }

    @Override // android.view.View
    public void onDraw(Canvas canvas) {
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        if (this.f2614p) {
            super.onMeasure(i10, i11);
        } else {
            setMeasuredDimension(0, 0);
        }
    }

    protected void setIds(String str) {
        this.f2615q = str;
        if (str == null) {
            return;
        }
        int i10 = 0;
        this.f2611e = 0;
        while (true) {
            int indexOf = str.indexOf(44, i10);
            if (indexOf == -1) {
                a(str.substring(i10));
                return;
            } else {
                a(str.substring(i10, indexOf));
                i10 = indexOf + 1;
            }
        }
    }

    protected void setReferenceTags(String str) {
        this.f2616r = str;
        if (str == null) {
            return;
        }
        int i10 = 0;
        this.f2611e = 0;
        while (true) {
            int indexOf = str.indexOf(44, i10);
            if (indexOf == -1) {
                c(str.substring(i10));
                return;
            } else {
                c(str.substring(i10, indexOf));
                i10 = indexOf + 1;
            }
        }
    }

    public void setReferencedIds(int[] iArr) {
        this.f2615q = null;
        this.f2611e = 0;
        for (int i10 : iArr) {
            b(i10);
        }
    }

    @Override // android.view.View
    public void setTag(int i10, Object obj) {
        super.setTag(i10, obj);
        if (obj == null && this.f2615q == null) {
            b(i10);
        }
    }

    public b(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f2610d = new int[32];
        this.f2614p = false;
        this.f2617s = null;
        this.f2618t = new HashMap();
        this.f2612i = context;
        i(attributeSet);
    }
}
