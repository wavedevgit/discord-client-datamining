package androidx.appcompat.widget;

import android.content.Context;
import android.content.DialogInterface;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.database.DataSetObserver;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.widget.AdapterView;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.PopupWindow;
import android.widget.Spinner;
import android.widget.SpinnerAdapter;
import android.widget.ThemedSpinnerAdapter;
import androidx.annotation.NonNull;
import androidx.appcompat.app.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class v extends Spinner {

    /* renamed from: t  reason: collision with root package name */
    private static final int[] f1847t = {16843505};

    /* renamed from: d  reason: collision with root package name */
    private final AppCompatBackgroundHelper f1848d;

    /* renamed from: e  reason: collision with root package name */
    private final Context f1849e;

    /* renamed from: i  reason: collision with root package name */
    private h0 f1850i;

    /* renamed from: o  reason: collision with root package name */
    private SpinnerAdapter f1851o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f1852p;

    /* renamed from: q  reason: collision with root package name */
    private h f1853q;

    /* renamed from: r  reason: collision with root package name */
    int f1854r;

    /* renamed from: s  reason: collision with root package name */
    final Rect f1855s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends h0 {

        /* renamed from: u  reason: collision with root package name */
        final /* synthetic */ f f1856u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(View view, f fVar) {
            super(view);
            this.f1856u = fVar;
        }

        @Override // androidx.appcompat.widget.h0
        public k.e b() {
            return this.f1856u;
        }

        @Override // androidx.appcompat.widget.h0
        public boolean c() {
            if (!v.this.getInternalPopup().isShowing()) {
                v.this.b();
                return true;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements ViewTreeObserver.OnGlobalLayoutListener {
        b() {
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (!v.this.getInternalPopup().isShowing()) {
                v.this.b();
            }
            ViewTreeObserver viewTreeObserver = v.this.getViewTreeObserver();
            if (viewTreeObserver != null) {
                viewTreeObserver.removeOnGlobalLayoutListener(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c {
        static void a(@NonNull ThemedSpinnerAdapter themedSpinnerAdapter, Resources.Theme theme) {
            if (!b2.b.a(themedSpinnerAdapter.getDropDownViewTheme(), theme)) {
                themedSpinnerAdapter.setDropDownViewTheme(theme);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d implements h, DialogInterface.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        androidx.appcompat.app.a f1859d;

        /* renamed from: e  reason: collision with root package name */
        private ListAdapter f1860e;

        /* renamed from: i  reason: collision with root package name */
        private CharSequence f1861i;

        d() {
        }

        @Override // androidx.appcompat.widget.v.h
        public void b(Drawable drawable) {
            Log.e("AppCompatSpinner", "Cannot set popup background for MODE_DIALOG, ignoring");
        }

        @Override // androidx.appcompat.widget.v.h
        public int c() {
            return 0;
        }

        @Override // androidx.appcompat.widget.v.h
        public void d(int i10) {
            Log.e("AppCompatSpinner", "Cannot set horizontal offset for MODE_DIALOG, ignoring");
        }

        @Override // androidx.appcompat.widget.v.h
        public void dismiss() {
            androidx.appcompat.app.a aVar = this.f1859d;
            if (aVar != null) {
                aVar.dismiss();
                this.f1859d = null;
            }
        }

        @Override // androidx.appcompat.widget.v.h
        public CharSequence e() {
            return this.f1861i;
        }

        @Override // androidx.appcompat.widget.v.h
        public Drawable f() {
            return null;
        }

        @Override // androidx.appcompat.widget.v.h
        public void g(CharSequence charSequence) {
            this.f1861i = charSequence;
        }

        @Override // androidx.appcompat.widget.v.h
        public void h(int i10) {
            Log.e("AppCompatSpinner", "Cannot set vertical offset for MODE_DIALOG, ignoring");
        }

        @Override // androidx.appcompat.widget.v.h
        public void i(int i10) {
            Log.e("AppCompatSpinner", "Cannot set horizontal (original) offset for MODE_DIALOG, ignoring");
        }

        @Override // androidx.appcompat.widget.v.h
        public boolean isShowing() {
            androidx.appcompat.app.a aVar = this.f1859d;
            if (aVar != null) {
                return aVar.isShowing();
            }
            return false;
        }

        @Override // androidx.appcompat.widget.v.h
        public void j(int i10, int i11) {
            if (this.f1860e == null) {
                return;
            }
            a.C0019a c0019a = new a.C0019a(v.this.getPopupContext());
            CharSequence charSequence = this.f1861i;
            if (charSequence != null) {
                c0019a.setTitle(charSequence);
            }
            androidx.appcompat.app.a create = c0019a.j(this.f1860e, v.this.getSelectedItemPosition(), this).create();
            this.f1859d = create;
            ListView l10 = create.l();
            l10.setTextDirection(i10);
            l10.setTextAlignment(i11);
            this.f1859d.show();
        }

        @Override // androidx.appcompat.widget.v.h
        public int k() {
            return 0;
        }

        @Override // androidx.appcompat.widget.v.h
        public void l(ListAdapter listAdapter) {
            this.f1860e = listAdapter;
        }

        @Override // android.content.DialogInterface.OnClickListener
        public void onClick(DialogInterface dialogInterface, int i10) {
            v.this.setSelection(i10);
            if (v.this.getOnItemClickListener() != null) {
                v.this.performItemClick(null, i10, this.f1860e.getItemId(i10));
            }
            dismiss();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e implements ListAdapter, SpinnerAdapter {

        /* renamed from: d  reason: collision with root package name */
        private SpinnerAdapter f1863d;

        /* renamed from: e  reason: collision with root package name */
        private ListAdapter f1864e;

        public e(SpinnerAdapter spinnerAdapter, Resources.Theme theme) {
            this.f1863d = spinnerAdapter;
            if (spinnerAdapter instanceof ListAdapter) {
                this.f1864e = (ListAdapter) spinnerAdapter;
            }
            if (theme != null && (spinnerAdapter instanceof ThemedSpinnerAdapter)) {
                c.a((ThemedSpinnerAdapter) spinnerAdapter, theme);
            }
        }

        @Override // android.widget.ListAdapter
        public boolean areAllItemsEnabled() {
            ListAdapter listAdapter = this.f1864e;
            if (listAdapter != null) {
                return listAdapter.areAllItemsEnabled();
            }
            return true;
        }

        @Override // android.widget.Adapter
        public int getCount() {
            SpinnerAdapter spinnerAdapter = this.f1863d;
            if (spinnerAdapter == null) {
                return 0;
            }
            return spinnerAdapter.getCount();
        }

        @Override // android.widget.SpinnerAdapter
        public View getDropDownView(int i10, View view, ViewGroup viewGroup) {
            SpinnerAdapter spinnerAdapter = this.f1863d;
            if (spinnerAdapter == null) {
                return null;
            }
            return spinnerAdapter.getDropDownView(i10, view, viewGroup);
        }

        @Override // android.widget.Adapter
        public Object getItem(int i10) {
            SpinnerAdapter spinnerAdapter = this.f1863d;
            if (spinnerAdapter == null) {
                return null;
            }
            return spinnerAdapter.getItem(i10);
        }

        @Override // android.widget.Adapter
        public long getItemId(int i10) {
            SpinnerAdapter spinnerAdapter = this.f1863d;
            if (spinnerAdapter == null) {
                return -1L;
            }
            return spinnerAdapter.getItemId(i10);
        }

        @Override // android.widget.Adapter
        public int getItemViewType(int i10) {
            return 0;
        }

        @Override // android.widget.Adapter
        public View getView(int i10, View view, ViewGroup viewGroup) {
            return getDropDownView(i10, view, viewGroup);
        }

        @Override // android.widget.Adapter
        public int getViewTypeCount() {
            return 1;
        }

        @Override // android.widget.Adapter
        public boolean hasStableIds() {
            SpinnerAdapter spinnerAdapter = this.f1863d;
            if (spinnerAdapter != null && spinnerAdapter.hasStableIds()) {
                return true;
            }
            return false;
        }

        @Override // android.widget.Adapter
        public boolean isEmpty() {
            if (getCount() == 0) {
                return true;
            }
            return false;
        }

        @Override // android.widget.ListAdapter
        public boolean isEnabled(int i10) {
            ListAdapter listAdapter = this.f1864e;
            if (listAdapter != null) {
                return listAdapter.isEnabled(i10);
            }
            return true;
        }

        @Override // android.widget.Adapter
        public void registerDataSetObserver(DataSetObserver dataSetObserver) {
            SpinnerAdapter spinnerAdapter = this.f1863d;
            if (spinnerAdapter != null) {
                spinnerAdapter.registerDataSetObserver(dataSetObserver);
            }
        }

        @Override // android.widget.Adapter
        public void unregisterDataSetObserver(DataSetObserver dataSetObserver) {
            SpinnerAdapter spinnerAdapter = this.f1863d;
            if (spinnerAdapter != null) {
                spinnerAdapter.unregisterDataSetObserver(dataSetObserver);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f extends j0 implements h {
        private CharSequence T;
        ListAdapter U;
        private final Rect V;
        private int W;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements AdapterView.OnItemClickListener {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ v f1865d;

            a(v vVar) {
                this.f1865d = vVar;
            }

            @Override // android.widget.AdapterView.OnItemClickListener
            public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
                v.this.setSelection(i10);
                if (v.this.getOnItemClickListener() != null) {
                    f fVar = f.this;
                    v.this.performItemClick(view, i10, fVar.U.getItemId(i10));
                }
                f.this.dismiss();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class b implements ViewTreeObserver.OnGlobalLayoutListener {
            b() {
            }

            @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
            public void onGlobalLayout() {
                f fVar = f.this;
                if (!fVar.T(v.this)) {
                    f.this.dismiss();
                    return;
                }
                f.this.R();
                f.super.show();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class c implements PopupWindow.OnDismissListener {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ViewTreeObserver.OnGlobalLayoutListener f1868d;

            c(ViewTreeObserver.OnGlobalLayoutListener onGlobalLayoutListener) {
                this.f1868d = onGlobalLayoutListener;
            }

            @Override // android.widget.PopupWindow.OnDismissListener
            public void onDismiss() {
                ViewTreeObserver viewTreeObserver = v.this.getViewTreeObserver();
                if (viewTreeObserver != null) {
                    viewTreeObserver.removeGlobalOnLayoutListener(this.f1868d);
                }
            }
        }

        public f(Context context, AttributeSet attributeSet, int i10) {
            super(context, attributeSet, i10);
            this.V = new Rect();
            B(v.this);
            H(true);
            N(0);
            J(new a(v.this));
        }

        void R() {
            int i10;
            int S;
            Drawable f10 = f();
            if (f10 != null) {
                f10.getPadding(v.this.f1855s);
                if (g1.b(v.this)) {
                    i10 = v.this.f1855s.right;
                } else {
                    i10 = -v.this.f1855s.left;
                }
            } else {
                Rect rect = v.this.f1855s;
                rect.right = 0;
                rect.left = 0;
                i10 = 0;
            }
            int paddingLeft = v.this.getPaddingLeft();
            int paddingRight = v.this.getPaddingRight();
            int width = v.this.getWidth();
            v vVar = v.this;
            int i11 = vVar.f1854r;
            if (i11 == -2) {
                int a10 = vVar.a((SpinnerAdapter) this.U, f());
                int i12 = v.this.getContext().getResources().getDisplayMetrics().widthPixels;
                Rect rect2 = v.this.f1855s;
                int i13 = (i12 - rect2.left) - rect2.right;
                if (a10 > i13) {
                    a10 = i13;
                }
                D(Math.max(a10, (width - paddingLeft) - paddingRight));
            } else if (i11 == -1) {
                D((width - paddingLeft) - paddingRight);
            } else {
                D(i11);
            }
            if (g1.b(v.this)) {
                S = i10 + (((width - paddingRight) - x()) - S());
            } else {
                S = i10 + paddingLeft + S();
            }
            d(S);
        }

        public int S() {
            return this.W;
        }

        boolean T(View view) {
            if (view.isAttachedToWindow() && view.getGlobalVisibleRect(this.V)) {
                return true;
            }
            return false;
        }

        @Override // androidx.appcompat.widget.v.h
        public CharSequence e() {
            return this.T;
        }

        @Override // androidx.appcompat.widget.v.h
        public void g(CharSequence charSequence) {
            this.T = charSequence;
        }

        @Override // androidx.appcompat.widget.v.h
        public void i(int i10) {
            this.W = i10;
        }

        @Override // androidx.appcompat.widget.v.h
        public void j(int i10, int i11) {
            ViewTreeObserver viewTreeObserver;
            boolean isShowing = isShowing();
            R();
            G(2);
            super.show();
            ListView n10 = n();
            n10.setChoiceMode(1);
            n10.setTextDirection(i10);
            n10.setTextAlignment(i11);
            O(v.this.getSelectedItemPosition());
            if (!isShowing && (viewTreeObserver = v.this.getViewTreeObserver()) != null) {
                b bVar = new b();
                viewTreeObserver.addOnGlobalLayoutListener(bVar);
                I(new c(bVar));
            }
        }

        @Override // androidx.appcompat.widget.j0, androidx.appcompat.widget.v.h
        public void l(ListAdapter listAdapter) {
            super.l(listAdapter);
            this.U = listAdapter;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g extends View.BaseSavedState {
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        boolean f1870d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public g createFromParcel(Parcel parcel) {
                return new g(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public g[] newArray(int i10) {
                return new g[i10];
            }
        }

        g(Parcelable parcelable) {
            super(parcelable);
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeByte(this.f1870d ? (byte) 1 : (byte) 0);
        }

        g(Parcel parcel) {
            super(parcel);
            this.f1870d = parcel.readByte() != 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface h {
        void b(Drawable drawable);

        int c();

        void d(int i10);

        void dismiss();

        CharSequence e();

        Drawable f();

        void g(CharSequence charSequence);

        void h(int i10);

        void i(int i10);

        boolean isShowing();

        void j(int i10, int i11);

        int k();

        void l(ListAdapter listAdapter);
    }

    public v(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.I);
    }

    int a(SpinnerAdapter spinnerAdapter, Drawable drawable) {
        int i10 = 0;
        if (spinnerAdapter == null) {
            return 0;
        }
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(getMeasuredWidth(), 0);
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(getMeasuredHeight(), 0);
        int max = Math.max(0, getSelectedItemPosition());
        int min = Math.min(spinnerAdapter.getCount(), max + 15);
        View view = null;
        int i11 = 0;
        for (int max2 = Math.max(0, max - (15 - (min - max))); max2 < min; max2++) {
            int itemViewType = spinnerAdapter.getItemViewType(max2);
            if (itemViewType != i10) {
                view = null;
                i10 = itemViewType;
            }
            view = spinnerAdapter.getView(max2, view, this);
            if (view.getLayoutParams() == null) {
                view.setLayoutParams(new ViewGroup.LayoutParams(-2, -2));
            }
            view.measure(makeMeasureSpec, makeMeasureSpec2);
            i11 = Math.max(i11, view.getMeasuredWidth());
        }
        if (drawable != null) {
            drawable.getPadding(this.f1855s);
            Rect rect = this.f1855s;
            return i11 + rect.left + rect.right;
        }
        return i11;
    }

    void b() {
        this.f1853q.j(getTextDirection(), getTextAlignment());
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1848d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.b();
        }
    }

    @Override // android.widget.Spinner
    public int getDropDownHorizontalOffset() {
        h hVar = this.f1853q;
        if (hVar != null) {
            return hVar.c();
        }
        return super.getDropDownHorizontalOffset();
    }

    @Override // android.widget.Spinner
    public int getDropDownVerticalOffset() {
        h hVar = this.f1853q;
        if (hVar != null) {
            return hVar.k();
        }
        return super.getDropDownVerticalOffset();
    }

    @Override // android.widget.Spinner
    public int getDropDownWidth() {
        if (this.f1853q != null) {
            return this.f1854r;
        }
        return super.getDropDownWidth();
    }

    final h getInternalPopup() {
        return this.f1853q;
    }

    @Override // android.widget.Spinner
    public Drawable getPopupBackground() {
        h hVar = this.f1853q;
        if (hVar != null) {
            return hVar.f();
        }
        return super.getPopupBackground();
    }

    @Override // android.widget.Spinner
    public Context getPopupContext() {
        return this.f1849e;
    }

    @Override // android.widget.Spinner
    public CharSequence getPrompt() {
        h hVar = this.f1853q;
        if (hVar != null) {
            return hVar.e();
        }
        return super.getPrompt();
    }

    public ColorStateList getSupportBackgroundTintList() {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1848d;
        if (appCompatBackgroundHelper != null) {
            return appCompatBackgroundHelper.c();
        }
        return null;
    }

    public PorterDuff.Mode getSupportBackgroundTintMode() {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1848d;
        if (appCompatBackgroundHelper != null) {
            return appCompatBackgroundHelper.d();
        }
        return null;
    }

    @Override // android.widget.Spinner, android.widget.AdapterView, android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        h hVar = this.f1853q;
        if (hVar != null && hVar.isShowing()) {
            this.f1853q.dismiss();
        }
    }

    @Override // android.widget.Spinner, android.widget.AbsSpinner, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        if (this.f1853q != null && View.MeasureSpec.getMode(i10) == Integer.MIN_VALUE) {
            setMeasuredDimension(Math.min(Math.max(getMeasuredWidth(), a(getAdapter(), getBackground())), View.MeasureSpec.getSize(i10)), getMeasuredHeight());
        }
    }

    @Override // android.widget.Spinner, android.widget.AbsSpinner, android.view.View
    public void onRestoreInstanceState(Parcelable parcelable) {
        ViewTreeObserver viewTreeObserver;
        g gVar = (g) parcelable;
        super.onRestoreInstanceState(gVar.getSuperState());
        if (gVar.f1870d && (viewTreeObserver = getViewTreeObserver()) != null) {
            viewTreeObserver.addOnGlobalLayoutListener(new b());
        }
    }

    @Override // android.widget.Spinner, android.widget.AbsSpinner, android.view.View
    public Parcelable onSaveInstanceState() {
        boolean z10;
        g gVar = new g(super.onSaveInstanceState());
        h hVar = this.f1853q;
        if (hVar != null && hVar.isShowing()) {
            z10 = true;
        } else {
            z10 = false;
        }
        gVar.f1870d = z10;
        return gVar;
    }

    @Override // android.widget.Spinner, android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        h0 h0Var = this.f1850i;
        if (h0Var != null && h0Var.onTouch(this, motionEvent)) {
            return true;
        }
        return super.onTouchEvent(motionEvent);
    }

    @Override // android.widget.Spinner, android.view.View
    public boolean performClick() {
        h hVar = this.f1853q;
        if (hVar != null) {
            if (!hVar.isShowing()) {
                b();
                return true;
            }
            return true;
        }
        return super.performClick();
    }

    @Override // android.view.View
    public void setBackgroundDrawable(Drawable drawable) {
        super.setBackgroundDrawable(drawable);
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1848d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.f(drawable);
        }
    }

    @Override // android.view.View
    public void setBackgroundResource(int i10) {
        super.setBackgroundResource(i10);
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1848d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.g(i10);
        }
    }

    @Override // android.widget.Spinner
    public void setDropDownHorizontalOffset(int i10) {
        h hVar = this.f1853q;
        if (hVar != null) {
            hVar.i(i10);
            this.f1853q.d(i10);
            return;
        }
        super.setDropDownHorizontalOffset(i10);
    }

    @Override // android.widget.Spinner
    public void setDropDownVerticalOffset(int i10) {
        h hVar = this.f1853q;
        if (hVar != null) {
            hVar.h(i10);
        } else {
            super.setDropDownVerticalOffset(i10);
        }
    }

    @Override // android.widget.Spinner
    public void setDropDownWidth(int i10) {
        if (this.f1853q != null) {
            this.f1854r = i10;
        } else {
            super.setDropDownWidth(i10);
        }
    }

    @Override // android.widget.Spinner
    public void setPopupBackgroundDrawable(Drawable drawable) {
        h hVar = this.f1853q;
        if (hVar != null) {
            hVar.b(drawable);
        } else {
            super.setPopupBackgroundDrawable(drawable);
        }
    }

    @Override // android.widget.Spinner
    public void setPopupBackgroundResource(int i10) {
        setPopupBackgroundDrawable(g.a.b(getPopupContext(), i10));
    }

    @Override // android.widget.Spinner
    public void setPrompt(CharSequence charSequence) {
        h hVar = this.f1853q;
        if (hVar != null) {
            hVar.g(charSequence);
        } else {
            super.setPrompt(charSequence);
        }
    }

    public void setSupportBackgroundTintList(ColorStateList colorStateList) {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1848d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.i(colorStateList);
        }
    }

    public void setSupportBackgroundTintMode(PorterDuff.Mode mode) {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1848d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.j(mode);
        }
    }

    public v(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, -1);
    }

    @Override // android.widget.AdapterView
    public void setAdapter(SpinnerAdapter spinnerAdapter) {
        if (!this.f1852p) {
            this.f1851o = spinnerAdapter;
            return;
        }
        super.setAdapter(spinnerAdapter);
        if (this.f1853q != null) {
            Context context = this.f1849e;
            if (context == null) {
                context = getContext();
            }
            this.f1853q.l(new e(spinnerAdapter, context.getTheme()));
        }
    }

    public v(Context context, AttributeSet attributeSet, int i10, int i11) {
        this(context, attributeSet, i10, i11, null);
    }

    /* JADX WARN: Code restructure failed: missing block: B:26:0x0064, code lost:
        if (r11 == null) goto L7;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r11v10 */
    /* JADX WARN: Type inference failed for: r11v11 */
    /* JADX WARN: Type inference failed for: r11v12 */
    /* JADX WARN: Type inference failed for: r11v3 */
    /* JADX WARN: Type inference failed for: r11v4 */
    /* JADX WARN: Type inference failed for: r11v7, types: [android.content.res.TypedArray] */
    /* JADX WARN: Type inference failed for: r6v0, types: [android.view.View, androidx.appcompat.widget.v] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public v(android.content.Context r7, android.util.AttributeSet r8, int r9, int r10, android.content.res.Resources.Theme r11) {
        /*
            Method dump skipped, instructions count: 230
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.widget.v.<init>(android.content.Context, android.util.AttributeSet, int, int, android.content.res.Resources$Theme):void");
    }
}
