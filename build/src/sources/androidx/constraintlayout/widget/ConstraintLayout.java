package androidx.constraintlayout.widget;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseArray;
import android.util.SparseIntArray;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.constraintlayout.core.Metrics;
import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import androidx.constraintlayout.core.widgets.d;
import androidx.constraintlayout.core.widgets.f;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.uimanager.events.PointerEventHelper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import l1.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ConstraintLayout extends ViewGroup {
    private static final boolean DEBUG = false;
    private static final boolean DEBUG_DRAW_CONSTRAINTS = false;
    public static final int DESIGN_INFO_ID = 0;
    private static final boolean OPTIMIZE_HEIGHT_CHANGE = false;
    private static final String TAG = "ConstraintLayout";
    private static final boolean USE_CONSTRAINTS_HELPER = true;
    public static final String VERSION = "ConstraintLayout-2.2.0-alpha04";
    private static SharedValues sSharedValues;
    SparseArray<View> mChildrenByIds;
    private ArrayList<b> mConstraintHelpers;
    protected ConstraintLayoutStates mConstraintLayoutSpec;
    private ConstraintSet mConstraintSet;
    private int mConstraintSetId;
    private HashMap<String, Integer> mDesignIds;
    protected boolean mDirtyHierarchy;
    private int mLastMeasureHeight;
    int mLastMeasureHeightMode;
    int mLastMeasureHeightSize;
    private int mLastMeasureWidth;
    int mLastMeasureWidthMode;
    int mLastMeasureWidthSize;
    protected ConstraintWidgetContainer mLayoutWidget;
    private int mMaxHeight;
    private int mMaxWidth;
    Measurer mMeasurer;
    private Metrics mMetrics;
    private int mMinHeight;
    private int mMinWidth;
    private ArrayList<ValueModifier> mModifiers;
    private int mOnMeasureHeightMeasureSpec;
    private int mOnMeasureWidthMeasureSpec;
    private int mOptimizationLevel;
    private SparseArray<ConstraintWidget> mTempMapIdToWidget;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class Measurer implements b.InterfaceC0479b {

        /* renamed from: a  reason: collision with root package name */
        ConstraintLayout f2500a;

        /* renamed from: b  reason: collision with root package name */
        int f2501b;

        /* renamed from: c  reason: collision with root package name */
        int f2502c;

        /* renamed from: d  reason: collision with root package name */
        int f2503d;

        /* renamed from: e  reason: collision with root package name */
        int f2504e;

        /* renamed from: f  reason: collision with root package name */
        int f2505f;

        /* renamed from: g  reason: collision with root package name */
        int f2506g;

        Measurer(ConstraintLayout constraintLayout) {
            this.f2500a = constraintLayout;
        }

        private boolean d(int i10, int i11, int i12) {
            if (i10 == i11) {
                return true;
            }
            int mode = View.MeasureSpec.getMode(i10);
            int mode2 = View.MeasureSpec.getMode(i11);
            int size = View.MeasureSpec.getSize(i11);
            if (mode2 == 1073741824) {
                if ((mode == Integer.MIN_VALUE || mode == 0) && i12 == size) {
                    return true;
                }
                return false;
            }
            return false;
        }

        @Override // l1.b.InterfaceC0479b
        public final void a() {
            int childCount = this.f2500a.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                this.f2500a.getChildAt(i10);
            }
            int size = this.f2500a.mConstraintHelpers.size();
            if (size > 0) {
                for (int i11 = 0; i11 < size; i11++) {
                    ((b) this.f2500a.mConstraintHelpers.get(i11)).l(this.f2500a);
                }
            }
        }

        /* JADX WARN: Removed duplicated region for block: B:107:0x01c7  */
        /* JADX WARN: Removed duplicated region for block: B:108:0x01c9  */
        /* JADX WARN: Removed duplicated region for block: B:110:0x01cc  */
        /* JADX WARN: Removed duplicated region for block: B:111:0x01ce  */
        /* JADX WARN: Removed duplicated region for block: B:138:0x0200  */
        /* JADX WARN: Removed duplicated region for block: B:219:? A[RETURN, SYNTHETIC] */
        /* JADX WARN: Removed duplicated region for block: B:53:0x00da  */
        /* JADX WARN: Removed duplicated region for block: B:82:0x0140  */
        @Override // l1.b.InterfaceC0479b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final void b(androidx.constraintlayout.core.widgets.ConstraintWidget r22, l1.b.a r23) {
            /*
                Method dump skipped, instructions count: 785
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.widget.ConstraintLayout.Measurer.b(androidx.constraintlayout.core.widgets.ConstraintWidget, l1.b$a):void");
        }

        public void c(int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f2501b = i12;
            this.f2502c = i13;
            this.f2503d = i14;
            this.f2504e = i15;
            this.f2505f = i10;
            this.f2506g = i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface ValueModifier {
        boolean a(int i10, int i11, int i12, View view, LayoutParams layoutParams);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f2508a;

        static {
            int[] iArr = new int[ConstraintWidget.b.values().length];
            f2508a = iArr;
            try {
                iArr[ConstraintWidget.b.FIXED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f2508a[ConstraintWidget.b.WRAP_CONTENT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f2508a[ConstraintWidget.b.MATCH_PARENT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f2508a[ConstraintWidget.b.MATCH_CONSTRAINT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public ConstraintLayout(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.mChildrenByIds = new SparseArray<>();
        this.mConstraintHelpers = new ArrayList<>(4);
        this.mLayoutWidget = new ConstraintWidgetContainer();
        this.mMinWidth = 0;
        this.mMinHeight = 0;
        this.mMaxWidth = Integer.MAX_VALUE;
        this.mMaxHeight = Integer.MAX_VALUE;
        this.mDirtyHierarchy = true;
        this.mOptimizationLevel = 257;
        this.mConstraintSet = null;
        this.mConstraintLayoutSpec = null;
        this.mConstraintSetId = -1;
        this.mDesignIds = new HashMap<>();
        this.mLastMeasureWidth = -1;
        this.mLastMeasureHeight = -1;
        this.mLastMeasureWidthSize = -1;
        this.mLastMeasureHeightSize = -1;
        this.mLastMeasureWidthMode = 0;
        this.mLastMeasureHeightMode = 0;
        this.mTempMapIdToWidget = new SparseArray<>();
        this.mMeasurer = new Measurer(this);
        this.mOnMeasureWidthMeasureSpec = 0;
        this.mOnMeasureHeightMeasureSpec = 0;
        c(attributeSet, 0, 0);
    }

    private ConstraintWidget b(int i10) {
        if (i10 == 0) {
            return this.mLayoutWidget;
        }
        View view = this.mChildrenByIds.get(i10);
        if (view == null && (view = findViewById(i10)) != null && view != this && view.getParent() == this) {
            onViewAdded(view);
        }
        if (view == this) {
            return this.mLayoutWidget;
        }
        if (view == null) {
            return null;
        }
        return ((LayoutParams) view.getLayoutParams()).f2493v0;
    }

    private void c(AttributeSet attributeSet, int i10, int i11) {
        this.mLayoutWidget.C0(this);
        this.mLayoutWidget.X1(this.mMeasurer);
        this.mChildrenByIds.put(getId(), this);
        this.mConstraintSet = null;
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, d.V0, i10, i11);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i12 = 0; i12 < indexCount; i12++) {
                int index = obtainStyledAttributes.getIndex(i12);
                if (index == d.f2707f1) {
                    this.mMinWidth = obtainStyledAttributes.getDimensionPixelOffset(index, this.mMinWidth);
                } else if (index == d.f2715g1) {
                    this.mMinHeight = obtainStyledAttributes.getDimensionPixelOffset(index, this.mMinHeight);
                } else if (index == d.f2691d1) {
                    this.mMaxWidth = obtainStyledAttributes.getDimensionPixelOffset(index, this.mMaxWidth);
                } else if (index == d.f2699e1) {
                    this.mMaxHeight = obtainStyledAttributes.getDimensionPixelOffset(index, this.mMaxHeight);
                } else if (index == d.O2) {
                    this.mOptimizationLevel = obtainStyledAttributes.getInt(index, this.mOptimizationLevel);
                } else if (index == d.J1) {
                    int resourceId = obtainStyledAttributes.getResourceId(index, 0);
                    if (resourceId != 0) {
                        try {
                            parseLayoutDescription(resourceId);
                        } catch (Resources.NotFoundException unused) {
                            this.mConstraintLayoutSpec = null;
                        }
                    }
                } else if (index == d.f2771n1) {
                    int resourceId2 = obtainStyledAttributes.getResourceId(index, 0);
                    try {
                        ConstraintSet constraintSet = new ConstraintSet();
                        this.mConstraintSet = constraintSet;
                        constraintSet.s(getContext(), resourceId2);
                    } catch (Resources.NotFoundException unused2) {
                        this.mConstraintSet = null;
                    }
                    this.mConstraintSetId = resourceId2;
                }
            }
            obtainStyledAttributes.recycle();
        }
        this.mLayoutWidget.Y1(this.mOptimizationLevel);
    }

    private void d() {
        this.mDirtyHierarchy = true;
        this.mLastMeasureWidth = -1;
        this.mLastMeasureHeight = -1;
        this.mLastMeasureWidthSize = -1;
        this.mLastMeasureHeightSize = -1;
        this.mLastMeasureWidthMode = 0;
        this.mLastMeasureHeightMode = 0;
    }

    private void e() {
        boolean isInEditMode = isInEditMode();
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            ConstraintWidget viewWidget = getViewWidget(getChildAt(i10));
            if (viewWidget != null) {
                viewWidget.t0();
            }
        }
        if (isInEditMode) {
            for (int i11 = 0; i11 < childCount; i11++) {
                View childAt = getChildAt(i11);
                try {
                    String resourceName = getResources().getResourceName(childAt.getId());
                    setDesignInformation(0, resourceName, Integer.valueOf(childAt.getId()));
                    int indexOf = resourceName.indexOf(47);
                    if (indexOf != -1) {
                        resourceName = resourceName.substring(indexOf + 1);
                    }
                    b(childAt.getId()).D0(resourceName);
                } catch (Resources.NotFoundException unused) {
                }
            }
        }
        if (this.mConstraintSetId != -1) {
            for (int i12 = 0; i12 < childCount; i12++) {
                getChildAt(i12).getId();
            }
        }
        ConstraintSet constraintSet = this.mConstraintSet;
        if (constraintSet != null) {
            constraintSet.d(this, true);
        }
        this.mLayoutWidget.v1();
        int size = this.mConstraintHelpers.size();
        if (size > 0) {
            for (int i13 = 0; i13 < size; i13++) {
                this.mConstraintHelpers.get(i13).n(this);
            }
        }
        for (int i14 = 0; i14 < childCount; i14++) {
            getChildAt(i14);
        }
        this.mTempMapIdToWidget.clear();
        this.mTempMapIdToWidget.put(0, this.mLayoutWidget);
        this.mTempMapIdToWidget.put(getId(), this.mLayoutWidget);
        for (int i15 = 0; i15 < childCount; i15++) {
            View childAt2 = getChildAt(i15);
            this.mTempMapIdToWidget.put(childAt2.getId(), getViewWidget(childAt2));
        }
        for (int i16 = 0; i16 < childCount; i16++) {
            View childAt3 = getChildAt(i16);
            ConstraintWidget viewWidget2 = getViewWidget(childAt3);
            if (viewWidget2 != null) {
                LayoutParams layoutParams = (LayoutParams) childAt3.getLayoutParams();
                this.mLayoutWidget.a(viewWidget2);
                applyConstraintsFromLayoutParams(isInEditMode, childAt3, viewWidget2, layoutParams, this.mTempMapIdToWidget);
            }
        }
    }

    private void f(ConstraintWidget constraintWidget, LayoutParams layoutParams, SparseArray sparseArray, int i10, d.a aVar) {
        View view = this.mChildrenByIds.get(i10);
        ConstraintWidget constraintWidget2 = (ConstraintWidget) sparseArray.get(i10);
        if (constraintWidget2 != null && view != null && (view.getLayoutParams() instanceof LayoutParams)) {
            layoutParams.f2463g0 = true;
            d.a aVar2 = d.a.BASELINE;
            if (aVar == aVar2) {
                LayoutParams layoutParams2 = (LayoutParams) view.getLayoutParams();
                layoutParams2.f2463g0 = true;
                layoutParams2.f2493v0.L0(true);
            }
            constraintWidget.o(aVar2).b(constraintWidget2.o(aVar), layoutParams.D, layoutParams.C, true);
            constraintWidget.L0(true);
            constraintWidget.o(d.a.TOP).q();
            constraintWidget.o(d.a.BOTTOM).q();
        }
    }

    private boolean g() {
        int childCount = getChildCount();
        boolean z10 = false;
        int i10 = 0;
        while (true) {
            if (i10 >= childCount) {
                break;
            } else if (getChildAt(i10).isLayoutRequested()) {
                z10 = true;
                break;
            } else {
                i10++;
            }
        }
        if (z10) {
            e();
        }
        return z10;
    }

    private int getPaddingWidth() {
        int max = Math.max(0, getPaddingLeft()) + Math.max(0, getPaddingRight());
        int max2 = Math.max(0, getPaddingStart()) + Math.max(0, getPaddingEnd());
        if (max2 > 0) {
            return max2;
        }
        return max;
    }

    public static SharedValues getSharedValues() {
        if (sSharedValues == null) {
            sSharedValues = new SharedValues();
        }
        return sSharedValues;
    }

    public void addValueModifier(ValueModifier valueModifier) {
        if (this.mModifiers == null) {
            this.mModifiers = new ArrayList<>();
        }
        this.mModifiers.add(valueModifier);
    }

    /* JADX WARN: Removed duplicated region for block: B:75:0x0174  */
    /* JADX WARN: Removed duplicated region for block: B:78:0x017d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void applyConstraintsFromLayoutParams(boolean r15, android.view.View r16, androidx.constraintlayout.core.widgets.ConstraintWidget r17, androidx.constraintlayout.widget.ConstraintLayout.LayoutParams r18, android.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget> r19) {
        /*
            Method dump skipped, instructions count: 597
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.widget.ConstraintLayout.applyConstraintsFromLayoutParams(boolean, android.view.View, androidx.constraintlayout.core.widgets.ConstraintWidget, androidx.constraintlayout.widget.ConstraintLayout$LayoutParams, android.util.SparseArray):void");
    }

    @Override // android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return layoutParams instanceof LayoutParams;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchDraw(Canvas canvas) {
        Object tag;
        int size;
        ArrayList<b> arrayList = this.mConstraintHelpers;
        if (arrayList != null && (size = arrayList.size()) > 0) {
            for (int i10 = 0; i10 < size; i10++) {
                this.mConstraintHelpers.get(i10).m(this);
            }
        }
        super.dispatchDraw(canvas);
        if (isInEditMode()) {
            float width = getWidth();
            float height = getHeight();
            int childCount = getChildCount();
            for (int i11 = 0; i11 < childCount; i11++) {
                View childAt = getChildAt(i11);
                if (childAt.getVisibility() != 8 && (tag = childAt.getTag()) != null && (tag instanceof String)) {
                    String[] split = ((String) tag).split(",");
                    if (split.length == 4) {
                        int parseInt = Integer.parseInt(split[0]);
                        int parseInt2 = Integer.parseInt(split[1]);
                        int parseInt3 = Integer.parseInt(split[2]);
                        int i12 = (int) ((parseInt / 1080.0f) * width);
                        int i13 = (int) ((parseInt2 / 1920.0f) * height);
                        Paint paint = new Paint();
                        paint.setColor(-65536);
                        float f10 = i12;
                        float f11 = i13;
                        float f12 = i12 + ((int) ((parseInt3 / 1080.0f) * width));
                        canvas.drawLine(f10, f11, f12, f11, paint);
                        float parseInt4 = i13 + ((int) ((Integer.parseInt(split[3]) / 1920.0f) * height));
                        canvas.drawLine(f12, f11, f12, parseInt4, paint);
                        canvas.drawLine(f12, parseInt4, f10, parseInt4, paint);
                        canvas.drawLine(f10, parseInt4, f10, f11, paint);
                        paint.setColor(-16711936);
                        canvas.drawLine(f10, f11, f12, parseInt4, paint);
                        canvas.drawLine(f10, parseInt4, f12, f11, paint);
                    }
                }
            }
        }
    }

    protected boolean dynamicUpdateConstraints(int i10, int i11) {
        boolean z10 = false;
        if (this.mModifiers == null) {
            return false;
        }
        int size = View.MeasureSpec.getSize(i10);
        int size2 = View.MeasureSpec.getSize(i11);
        Iterator<ValueModifier> it = this.mModifiers.iterator();
        while (it.hasNext()) {
            ValueModifier next = it.next();
            Iterator it2 = this.mLayoutWidget.s1().iterator();
            while (it2.hasNext()) {
                View view = (View) ((ConstraintWidget) it2.next()).s();
                z10 |= next.a(size, size2, view.getId(), view, (LayoutParams) view.getLayoutParams());
            }
        }
        return z10;
    }

    public void fillMetrics(Metrics metrics) {
        this.mMetrics = metrics;
        this.mLayoutWidget.J1(metrics);
    }

    @Override // android.view.View
    public void forceLayout() {
        d();
        super.forceLayout();
    }

    public Object getDesignInformation(int i10, Object obj) {
        if (i10 == 0 && (obj instanceof String)) {
            String str = (String) obj;
            HashMap<String, Integer> hashMap = this.mDesignIds;
            if (hashMap != null && hashMap.containsKey(str)) {
                return this.mDesignIds.get(str);
            }
            return null;
        }
        return null;
    }

    public int getMaxHeight() {
        return this.mMaxHeight;
    }

    public int getMaxWidth() {
        return this.mMaxWidth;
    }

    public int getMinHeight() {
        return this.mMinHeight;
    }

    public int getMinWidth() {
        return this.mMinWidth;
    }

    public int getOptimizationLevel() {
        return this.mLayoutWidget.L1();
    }

    public String getSceneString() {
        int id2;
        StringBuilder sb2 = new StringBuilder();
        if (this.mLayoutWidget.f2313o == null) {
            int id3 = getId();
            if (id3 != -1) {
                this.mLayoutWidget.f2313o = getContext().getResources().getResourceEntryName(id3);
            } else {
                this.mLayoutWidget.f2313o = "parent";
            }
        }
        if (this.mLayoutWidget.t() == null) {
            ConstraintWidgetContainer constraintWidgetContainer = this.mLayoutWidget;
            constraintWidgetContainer.D0(constraintWidgetContainer.f2313o);
            Log.v(TAG, " setDebugName " + this.mLayoutWidget.t());
        }
        Iterator it = this.mLayoutWidget.s1().iterator();
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            View view = (View) constraintWidget.s();
            if (view != null) {
                if (constraintWidget.f2313o == null && (id2 = view.getId()) != -1) {
                    constraintWidget.f2313o = getContext().getResources().getResourceEntryName(id2);
                }
                if (constraintWidget.t() == null) {
                    constraintWidget.D0(constraintWidget.f2313o);
                    Log.v(TAG, " setDebugName " + constraintWidget.t());
                }
            }
        }
        this.mLayoutWidget.O(sb2);
        return sb2.toString();
    }

    public View getViewById(int i10) {
        return this.mChildrenByIds.get(i10);
    }

    public final ConstraintWidget getViewWidget(View view) {
        if (view == this) {
            return this.mLayoutWidget;
        }
        if (view != null) {
            if (view.getLayoutParams() instanceof LayoutParams) {
                return ((LayoutParams) view.getLayoutParams()).f2493v0;
            }
            view.setLayoutParams(generateLayoutParams(view.getLayoutParams()));
            if (view.getLayoutParams() instanceof LayoutParams) {
                return ((LayoutParams) view.getLayoutParams()).f2493v0;
            }
            return null;
        }
        return null;
    }

    protected boolean isRtl() {
        if ((getContext().getApplicationInfo().flags & 4194304) != 0 && 1 == getLayoutDirection()) {
            return true;
        }
        return false;
    }

    public void loadLayoutDescription(int i10) {
        if (i10 != 0) {
            try {
                this.mConstraintLayoutSpec = new ConstraintLayoutStates(getContext(), this, i10);
                return;
            } catch (Resources.NotFoundException unused) {
                this.mConstraintLayoutSpec = null;
                return;
            }
        }
        this.mConstraintLayoutSpec = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        Metrics metrics = this.mMetrics;
        if (metrics != null) {
            metrics.H++;
        }
        int childCount = getChildCount();
        boolean isInEditMode = isInEditMode();
        for (int i14 = 0; i14 < childCount; i14++) {
            View childAt = getChildAt(i14);
            LayoutParams layoutParams = (LayoutParams) childAt.getLayoutParams();
            ConstraintWidget constraintWidget = layoutParams.f2493v0;
            if ((childAt.getVisibility() != 8 || layoutParams.f2465h0 || layoutParams.f2467i0 || layoutParams.f2471k0 || isInEditMode) && !layoutParams.f2469j0) {
                int X = constraintWidget.X();
                int Y = constraintWidget.Y();
                childAt.layout(X, Y, constraintWidget.W() + X, constraintWidget.x() + Y);
            }
        }
        int size = this.mConstraintHelpers.size();
        if (size > 0) {
            for (int i15 = 0; i15 < size; i15++) {
                this.mConstraintHelpers.get(i15).k(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.View
    public void onMeasure(int i10, int i11) {
        long j10;
        if (this.mMetrics != null) {
            j10 = System.nanoTime();
            this.mMetrics.K = getChildCount();
            this.mMetrics.L++;
        } else {
            j10 = 0;
        }
        boolean dynamicUpdateConstraints = this.mDirtyHierarchy | dynamicUpdateConstraints(i10, i11);
        this.mDirtyHierarchy = dynamicUpdateConstraints;
        if (!dynamicUpdateConstraints) {
            int childCount = getChildCount();
            int i12 = 0;
            while (true) {
                if (i12 >= childCount) {
                    break;
                } else if (getChildAt(i12).isLayoutRequested()) {
                    this.mDirtyHierarchy = true;
                    break;
                } else {
                    i12++;
                }
            }
        }
        this.mOnMeasureWidthMeasureSpec = i10;
        this.mOnMeasureHeightMeasureSpec = i11;
        this.mLayoutWidget.a2(isRtl());
        if (this.mDirtyHierarchy) {
            this.mDirtyHierarchy = false;
            if (g()) {
                this.mLayoutWidget.c2();
            }
        }
        this.mLayoutWidget.J1(this.mMetrics);
        resolveSystem(this.mLayoutWidget, this.mOptimizationLevel, i10, i11);
        resolveMeasuredDimension(i10, i11, this.mLayoutWidget.W(), this.mLayoutWidget.x(), this.mLayoutWidget.S1(), this.mLayoutWidget.Q1());
        Metrics metrics = this.mMetrics;
        if (metrics != null) {
            metrics.J += System.nanoTime() - j10;
        }
    }

    @Override // android.view.ViewGroup
    public void onViewAdded(View view) {
        super.onViewAdded(view);
        ConstraintWidget viewWidget = getViewWidget(view);
        if ((view instanceof Guideline) && !(viewWidget instanceof f)) {
            LayoutParams layoutParams = (LayoutParams) view.getLayoutParams();
            f fVar = new f();
            layoutParams.f2493v0 = fVar;
            layoutParams.f2465h0 = true;
            fVar.B1(layoutParams.Z);
        }
        if (view instanceof b) {
            b bVar = (b) view;
            bVar.o();
            ((LayoutParams) view.getLayoutParams()).f2467i0 = true;
            if (!this.mConstraintHelpers.contains(bVar)) {
                this.mConstraintHelpers.add(bVar);
            }
        }
        this.mChildrenByIds.put(view.getId(), view);
        this.mDirtyHierarchy = true;
    }

    @Override // android.view.ViewGroup
    public void onViewRemoved(View view) {
        super.onViewRemoved(view);
        this.mChildrenByIds.remove(view.getId());
        this.mLayoutWidget.u1(getViewWidget(view));
        this.mConstraintHelpers.remove(view);
        this.mDirtyHierarchy = true;
    }

    protected void parseLayoutDescription(int i10) {
        this.mConstraintLayoutSpec = new ConstraintLayoutStates(getContext(), this, i10);
    }

    void removeValueModifier(ValueModifier valueModifier) {
        if (valueModifier == null) {
            return;
        }
        this.mModifiers.remove(valueModifier);
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        d();
        super.requestLayout();
    }

    protected void resolveMeasuredDimension(int i10, int i11, int i12, int i13, boolean z10, boolean z11) {
        Measurer measurer = this.mMeasurer;
        int i14 = measurer.f2504e;
        int resolveSizeAndState = View.resolveSizeAndState(i12 + measurer.f2503d, i10, 0);
        int min = Math.min(this.mMaxWidth, resolveSizeAndState & 16777215);
        int min2 = Math.min(this.mMaxHeight, View.resolveSizeAndState(i13 + i14, i11, 0) & 16777215);
        if (z10) {
            min |= PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
        }
        if (z11) {
            min2 |= PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
        }
        setMeasuredDimension(min, min2);
        this.mLastMeasureWidth = min;
        this.mLastMeasureHeight = min2;
    }

    protected void resolveSystem(ConstraintWidgetContainer constraintWidgetContainer, int i10, int i11, int i12) {
        int i13;
        int mode = View.MeasureSpec.getMode(i11);
        int size = View.MeasureSpec.getSize(i11);
        int mode2 = View.MeasureSpec.getMode(i12);
        int size2 = View.MeasureSpec.getSize(i12);
        int max = Math.max(0, getPaddingTop());
        int max2 = Math.max(0, getPaddingBottom());
        int i14 = max + max2;
        int paddingWidth = getPaddingWidth();
        this.mMeasurer.c(i11, i12, max, max2, paddingWidth, i14);
        int max3 = Math.max(0, getPaddingStart());
        int max4 = Math.max(0, getPaddingEnd());
        if (max3 <= 0 && max4 <= 0) {
            max3 = Math.max(0, getPaddingLeft());
        } else if (isRtl()) {
            i13 = max4;
            int i15 = size - paddingWidth;
            int i16 = size2 - i14;
            setSelfDimensionBehaviour(constraintWidgetContainer, mode, i15, mode2, i16);
            constraintWidgetContainer.T1(i10, mode, i15, mode2, i16, this.mLastMeasureWidth, this.mLastMeasureHeight, i13, max);
        }
        i13 = max3;
        int i152 = size - paddingWidth;
        int i162 = size2 - i14;
        setSelfDimensionBehaviour(constraintWidgetContainer, mode, i152, mode2, i162);
        constraintWidgetContainer.T1(i10, mode, i152, mode2, i162, this.mLastMeasureWidth, this.mLastMeasureHeight, i13, max);
    }

    public void setConstraintSet(ConstraintSet constraintSet) {
        this.mConstraintSet = constraintSet;
    }

    public void setDesignInformation(int i10, Object obj, Object obj2) {
        if (i10 == 0 && (obj instanceof String) && (obj2 instanceof Integer)) {
            if (this.mDesignIds == null) {
                this.mDesignIds = new HashMap<>();
            }
            String str = (String) obj;
            int indexOf = str.indexOf("/");
            if (indexOf != -1) {
                str = str.substring(indexOf + 1);
            }
            this.mDesignIds.put(str, (Integer) obj2);
        }
    }

    @Override // android.view.View
    public void setId(int i10) {
        this.mChildrenByIds.remove(getId());
        super.setId(i10);
        this.mChildrenByIds.put(getId(), this);
    }

    public void setMaxHeight(int i10) {
        if (i10 == this.mMaxHeight) {
            return;
        }
        this.mMaxHeight = i10;
        requestLayout();
    }

    public void setMaxWidth(int i10) {
        if (i10 == this.mMaxWidth) {
            return;
        }
        this.mMaxWidth = i10;
        requestLayout();
    }

    public void setMinHeight(int i10) {
        if (i10 == this.mMinHeight) {
            return;
        }
        this.mMinHeight = i10;
        requestLayout();
    }

    public void setMinWidth(int i10) {
        if (i10 == this.mMinWidth) {
            return;
        }
        this.mMinWidth = i10;
        requestLayout();
    }

    public void setOnConstraintsChanged(ConstraintsChangedListener constraintsChangedListener) {
        ConstraintLayoutStates constraintLayoutStates = this.mConstraintLayoutSpec;
        if (constraintLayoutStates != null) {
            constraintLayoutStates.c(constraintsChangedListener);
        }
    }

    public void setOptimizationLevel(int i10) {
        this.mOptimizationLevel = i10;
        this.mLayoutWidget.Y1(i10);
    }

    protected void setSelfDimensionBehaviour(ConstraintWidgetContainer constraintWidgetContainer, int i10, int i11, int i12, int i13) {
        ConstraintWidget.b bVar;
        Measurer measurer = this.mMeasurer;
        int i14 = measurer.f2504e;
        int i15 = measurer.f2503d;
        ConstraintWidget.b bVar2 = ConstraintWidget.b.FIXED;
        int childCount = getChildCount();
        if (i10 != Integer.MIN_VALUE) {
            if (i10 != 0) {
                if (i10 != 1073741824) {
                    bVar = bVar2;
                    i11 = 0;
                } else {
                    i11 = Math.min(this.mMaxWidth - i15, i11);
                    bVar = bVar2;
                }
            } else {
                bVar = ConstraintWidget.b.WRAP_CONTENT;
                if (childCount == 0) {
                    i11 = Math.max(0, this.mMinWidth);
                }
                i11 = 0;
            }
        } else {
            bVar = ConstraintWidget.b.WRAP_CONTENT;
            if (childCount == 0) {
                i11 = Math.max(0, this.mMinWidth);
            }
        }
        if (i12 != Integer.MIN_VALUE) {
            if (i12 != 0) {
                if (i12 == 1073741824) {
                    i13 = Math.min(this.mMaxHeight - i14, i13);
                }
                i13 = 0;
            } else {
                bVar2 = ConstraintWidget.b.WRAP_CONTENT;
                if (childCount == 0) {
                    i13 = Math.max(0, this.mMinHeight);
                }
                i13 = 0;
            }
        } else {
            bVar2 = ConstraintWidget.b.WRAP_CONTENT;
            if (childCount == 0) {
                i13 = Math.max(0, this.mMinHeight);
            }
        }
        if (i11 != constraintWidgetContainer.W() || i13 != constraintWidgetContainer.x()) {
            constraintWidgetContainer.P1();
        }
        constraintWidgetContainer.n1(0);
        constraintWidgetContainer.o1(0);
        constraintWidgetContainer.Y0(this.mMaxWidth - i15);
        constraintWidgetContainer.X0(this.mMaxHeight - i14);
        constraintWidgetContainer.b1(0);
        constraintWidgetContainer.a1(0);
        constraintWidgetContainer.Q0(bVar);
        constraintWidgetContainer.l1(i11);
        constraintWidgetContainer.h1(bVar2);
        constraintWidgetContainer.M0(i13);
        constraintWidgetContainer.b1(this.mMinWidth - i15);
        constraintWidgetContainer.a1(this.mMinHeight - i14);
    }

    public void setState(int i10, int i11, int i12) {
        ConstraintLayoutStates constraintLayoutStates = this.mConstraintLayoutSpec;
        if (constraintLayoutStates != null) {
            constraintLayoutStates.d(i10, i11, i12);
        }
    }

    @Override // android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup
    public LayoutParams generateDefaultLayoutParams() {
        return new LayoutParams(-2, -2);
    }

    @Override // android.view.ViewGroup
    public LayoutParams generateLayoutParams(AttributeSet attributeSet) {
        return new LayoutParams(getContext(), attributeSet);
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return new LayoutParams(layoutParams);
    }

    public ConstraintLayout(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.mChildrenByIds = new SparseArray<>();
        this.mConstraintHelpers = new ArrayList<>(4);
        this.mLayoutWidget = new ConstraintWidgetContainer();
        this.mMinWidth = 0;
        this.mMinHeight = 0;
        this.mMaxWidth = Integer.MAX_VALUE;
        this.mMaxHeight = Integer.MAX_VALUE;
        this.mDirtyHierarchy = true;
        this.mOptimizationLevel = 257;
        this.mConstraintSet = null;
        this.mConstraintLayoutSpec = null;
        this.mConstraintSetId = -1;
        this.mDesignIds = new HashMap<>();
        this.mLastMeasureWidth = -1;
        this.mLastMeasureHeight = -1;
        this.mLastMeasureWidthSize = -1;
        this.mLastMeasureHeightSize = -1;
        this.mLastMeasureWidthMode = 0;
        this.mLastMeasureHeightMode = 0;
        this.mTempMapIdToWidget = new SparseArray<>();
        this.mMeasurer = new Measurer(this);
        this.mOnMeasureWidthMeasureSpec = 0;
        this.mOnMeasureHeightMeasureSpec = 0;
        c(attributeSet, i10, 0);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class LayoutParams extends ViewGroup.MarginLayoutParams {
        public int A;
        public int B;
        public int C;
        public int D;
        boolean E;
        boolean F;
        public float G;
        public float H;
        public String I;
        float J;
        int K;
        public float L;
        public float M;
        public int N;
        public int O;
        public int P;
        public int Q;
        public int R;
        public int S;
        public int T;
        public int U;
        public float V;
        public float W;
        public int X;
        public int Y;
        public int Z;

        /* renamed from: a  reason: collision with root package name */
        public int f2450a;

        /* renamed from: a0  reason: collision with root package name */
        public boolean f2451a0;

        /* renamed from: b  reason: collision with root package name */
        public int f2452b;

        /* renamed from: b0  reason: collision with root package name */
        public boolean f2453b0;

        /* renamed from: c  reason: collision with root package name */
        public float f2454c;

        /* renamed from: c0  reason: collision with root package name */
        public String f2455c0;

        /* renamed from: d  reason: collision with root package name */
        public boolean f2456d;

        /* renamed from: d0  reason: collision with root package name */
        public int f2457d0;

        /* renamed from: e  reason: collision with root package name */
        public int f2458e;

        /* renamed from: e0  reason: collision with root package name */
        boolean f2459e0;

        /* renamed from: f  reason: collision with root package name */
        public int f2460f;

        /* renamed from: f0  reason: collision with root package name */
        boolean f2461f0;

        /* renamed from: g  reason: collision with root package name */
        public int f2462g;

        /* renamed from: g0  reason: collision with root package name */
        boolean f2463g0;

        /* renamed from: h  reason: collision with root package name */
        public int f2464h;

        /* renamed from: h0  reason: collision with root package name */
        boolean f2465h0;

        /* renamed from: i  reason: collision with root package name */
        public int f2466i;

        /* renamed from: i0  reason: collision with root package name */
        boolean f2467i0;

        /* renamed from: j  reason: collision with root package name */
        public int f2468j;

        /* renamed from: j0  reason: collision with root package name */
        boolean f2469j0;

        /* renamed from: k  reason: collision with root package name */
        public int f2470k;

        /* renamed from: k0  reason: collision with root package name */
        boolean f2471k0;

        /* renamed from: l  reason: collision with root package name */
        public int f2472l;

        /* renamed from: l0  reason: collision with root package name */
        int f2473l0;

        /* renamed from: m  reason: collision with root package name */
        public int f2474m;

        /* renamed from: m0  reason: collision with root package name */
        int f2475m0;

        /* renamed from: n  reason: collision with root package name */
        public int f2476n;

        /* renamed from: n0  reason: collision with root package name */
        int f2477n0;

        /* renamed from: o  reason: collision with root package name */
        public int f2478o;

        /* renamed from: o0  reason: collision with root package name */
        int f2479o0;

        /* renamed from: p  reason: collision with root package name */
        public int f2480p;

        /* renamed from: p0  reason: collision with root package name */
        int f2481p0;

        /* renamed from: q  reason: collision with root package name */
        public int f2482q;

        /* renamed from: q0  reason: collision with root package name */
        int f2483q0;

        /* renamed from: r  reason: collision with root package name */
        public float f2484r;

        /* renamed from: r0  reason: collision with root package name */
        float f2485r0;

        /* renamed from: s  reason: collision with root package name */
        public int f2486s;

        /* renamed from: s0  reason: collision with root package name */
        int f2487s0;

        /* renamed from: t  reason: collision with root package name */
        public int f2488t;

        /* renamed from: t0  reason: collision with root package name */
        int f2489t0;

        /* renamed from: u  reason: collision with root package name */
        public int f2490u;

        /* renamed from: u0  reason: collision with root package name */
        float f2491u0;

        /* renamed from: v  reason: collision with root package name */
        public int f2492v;

        /* renamed from: v0  reason: collision with root package name */
        ConstraintWidget f2493v0;

        /* renamed from: w  reason: collision with root package name */
        public int f2494w;

        /* renamed from: w0  reason: collision with root package name */
        public boolean f2495w0;

        /* renamed from: x  reason: collision with root package name */
        public int f2496x;

        /* renamed from: y  reason: collision with root package name */
        public int f2497y;

        /* renamed from: z  reason: collision with root package name */
        public int f2498z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        private static class a {

            /* renamed from: a  reason: collision with root package name */
            public static final SparseIntArray f2499a;

            static {
                SparseIntArray sparseIntArray = new SparseIntArray();
                f2499a = sparseIntArray;
                sparseIntArray.append(d.f2868z2, 64);
                sparseIntArray.append(d.f2684c2, 65);
                sparseIntArray.append(d.f2756l2, 8);
                sparseIntArray.append(d.f2764m2, 9);
                sparseIntArray.append(d.f2780o2, 10);
                sparseIntArray.append(d.f2788p2, 11);
                sparseIntArray.append(d.f2836v2, 12);
                sparseIntArray.append(d.f2828u2, 13);
                sparseIntArray.append(d.S1, 14);
                sparseIntArray.append(d.R1, 15);
                sparseIntArray.append(d.N1, 16);
                sparseIntArray.append(d.P1, 52);
                sparseIntArray.append(d.O1, 53);
                sparseIntArray.append(d.T1, 2);
                sparseIntArray.append(d.V1, 3);
                sparseIntArray.append(d.U1, 4);
                sparseIntArray.append(d.E2, 49);
                sparseIntArray.append(d.F2, 50);
                sparseIntArray.append(d.Z1, 5);
                sparseIntArray.append(d.f2666a2, 6);
                sparseIntArray.append(d.f2675b2, 7);
                sparseIntArray.append(d.I1, 67);
                sparseIntArray.append(d.W0, 1);
                sparseIntArray.append(d.f2796q2, 17);
                sparseIntArray.append(d.f2804r2, 18);
                sparseIntArray.append(d.Y1, 19);
                sparseIntArray.append(d.X1, 20);
                sparseIntArray.append(d.J2, 21);
                sparseIntArray.append(d.M2, 22);
                sparseIntArray.append(d.K2, 23);
                sparseIntArray.append(d.H2, 24);
                sparseIntArray.append(d.L2, 25);
                sparseIntArray.append(d.I2, 26);
                sparseIntArray.append(d.G2, 55);
                sparseIntArray.append(d.N2, 54);
                sparseIntArray.append(d.f2724h2, 29);
                sparseIntArray.append(d.f2844w2, 30);
                sparseIntArray.append(d.W1, 44);
                sparseIntArray.append(d.f2740j2, 45);
                sparseIntArray.append(d.f2860y2, 46);
                sparseIntArray.append(d.f2732i2, 47);
                sparseIntArray.append(d.f2852x2, 48);
                sparseIntArray.append(d.L1, 27);
                sparseIntArray.append(d.K1, 28);
                sparseIntArray.append(d.A2, 31);
                sparseIntArray.append(d.f2692d2, 32);
                sparseIntArray.append(d.C2, 33);
                sparseIntArray.append(d.B2, 34);
                sparseIntArray.append(d.D2, 35);
                sparseIntArray.append(d.f2708f2, 36);
                sparseIntArray.append(d.f2700e2, 37);
                sparseIntArray.append(d.f2716g2, 38);
                sparseIntArray.append(d.f2748k2, 39);
                sparseIntArray.append(d.f2820t2, 40);
                sparseIntArray.append(d.f2772n2, 41);
                sparseIntArray.append(d.Q1, 42);
                sparseIntArray.append(d.M1, 43);
                sparseIntArray.append(d.f2812s2, 51);
                sparseIntArray.append(d.P2, 66);
            }
        }

        public LayoutParams(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f2450a = -1;
            this.f2452b = -1;
            this.f2454c = -1.0f;
            this.f2456d = true;
            this.f2458e = -1;
            this.f2460f = -1;
            this.f2462g = -1;
            this.f2464h = -1;
            this.f2466i = -1;
            this.f2468j = -1;
            this.f2470k = -1;
            this.f2472l = -1;
            this.f2474m = -1;
            this.f2476n = -1;
            this.f2478o = -1;
            this.f2480p = -1;
            this.f2482q = 0;
            this.f2484r = 0.0f;
            this.f2486s = -1;
            this.f2488t = -1;
            this.f2490u = -1;
            this.f2492v = -1;
            this.f2494w = Integer.MIN_VALUE;
            this.f2496x = Integer.MIN_VALUE;
            this.f2497y = Integer.MIN_VALUE;
            this.f2498z = Integer.MIN_VALUE;
            this.A = Integer.MIN_VALUE;
            this.B = Integer.MIN_VALUE;
            this.C = Integer.MIN_VALUE;
            this.D = 0;
            this.E = true;
            this.F = true;
            this.G = 0.5f;
            this.H = 0.5f;
            this.I = null;
            this.J = 0.0f;
            this.K = 1;
            this.L = -1.0f;
            this.M = -1.0f;
            this.N = 0;
            this.O = 0;
            this.P = 0;
            this.Q = 0;
            this.R = 0;
            this.S = 0;
            this.T = 0;
            this.U = 0;
            this.V = 1.0f;
            this.W = 1.0f;
            this.X = -1;
            this.Y = -1;
            this.Z = -1;
            this.f2451a0 = false;
            this.f2453b0 = false;
            this.f2455c0 = null;
            this.f2457d0 = 0;
            this.f2459e0 = true;
            this.f2461f0 = true;
            this.f2463g0 = false;
            this.f2465h0 = false;
            this.f2467i0 = false;
            this.f2469j0 = false;
            this.f2471k0 = false;
            this.f2473l0 = -1;
            this.f2475m0 = -1;
            this.f2477n0 = -1;
            this.f2479o0 = -1;
            this.f2481p0 = Integer.MIN_VALUE;
            this.f2483q0 = Integer.MIN_VALUE;
            this.f2485r0 = 0.5f;
            this.f2493v0 = new ConstraintWidget();
            this.f2495w0 = false;
            if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                ((ViewGroup.MarginLayoutParams) this).leftMargin = marginLayoutParams.leftMargin;
                ((ViewGroup.MarginLayoutParams) this).rightMargin = marginLayoutParams.rightMargin;
                ((ViewGroup.MarginLayoutParams) this).topMargin = marginLayoutParams.topMargin;
                ((ViewGroup.MarginLayoutParams) this).bottomMargin = marginLayoutParams.bottomMargin;
                setMarginStart(marginLayoutParams.getMarginStart());
                setMarginEnd(marginLayoutParams.getMarginEnd());
            }
            if (layoutParams instanceof LayoutParams) {
                LayoutParams layoutParams2 = (LayoutParams) layoutParams;
                this.f2450a = layoutParams2.f2450a;
                this.f2452b = layoutParams2.f2452b;
                this.f2454c = layoutParams2.f2454c;
                this.f2456d = layoutParams2.f2456d;
                this.f2458e = layoutParams2.f2458e;
                this.f2460f = layoutParams2.f2460f;
                this.f2462g = layoutParams2.f2462g;
                this.f2464h = layoutParams2.f2464h;
                this.f2466i = layoutParams2.f2466i;
                this.f2468j = layoutParams2.f2468j;
                this.f2470k = layoutParams2.f2470k;
                this.f2472l = layoutParams2.f2472l;
                this.f2474m = layoutParams2.f2474m;
                this.f2476n = layoutParams2.f2476n;
                this.f2478o = layoutParams2.f2478o;
                this.f2480p = layoutParams2.f2480p;
                this.f2482q = layoutParams2.f2482q;
                this.f2484r = layoutParams2.f2484r;
                this.f2486s = layoutParams2.f2486s;
                this.f2488t = layoutParams2.f2488t;
                this.f2490u = layoutParams2.f2490u;
                this.f2492v = layoutParams2.f2492v;
                this.f2494w = layoutParams2.f2494w;
                this.f2496x = layoutParams2.f2496x;
                this.f2497y = layoutParams2.f2497y;
                this.f2498z = layoutParams2.f2498z;
                this.A = layoutParams2.A;
                this.B = layoutParams2.B;
                this.C = layoutParams2.C;
                this.D = layoutParams2.D;
                this.G = layoutParams2.G;
                this.H = layoutParams2.H;
                this.I = layoutParams2.I;
                this.J = layoutParams2.J;
                this.K = layoutParams2.K;
                this.L = layoutParams2.L;
                this.M = layoutParams2.M;
                this.N = layoutParams2.N;
                this.O = layoutParams2.O;
                this.f2451a0 = layoutParams2.f2451a0;
                this.f2453b0 = layoutParams2.f2453b0;
                this.P = layoutParams2.P;
                this.Q = layoutParams2.Q;
                this.R = layoutParams2.R;
                this.T = layoutParams2.T;
                this.S = layoutParams2.S;
                this.U = layoutParams2.U;
                this.V = layoutParams2.V;
                this.W = layoutParams2.W;
                this.X = layoutParams2.X;
                this.Y = layoutParams2.Y;
                this.Z = layoutParams2.Z;
                this.f2459e0 = layoutParams2.f2459e0;
                this.f2461f0 = layoutParams2.f2461f0;
                this.f2463g0 = layoutParams2.f2463g0;
                this.f2465h0 = layoutParams2.f2465h0;
                this.f2473l0 = layoutParams2.f2473l0;
                this.f2475m0 = layoutParams2.f2475m0;
                this.f2477n0 = layoutParams2.f2477n0;
                this.f2479o0 = layoutParams2.f2479o0;
                this.f2481p0 = layoutParams2.f2481p0;
                this.f2483q0 = layoutParams2.f2483q0;
                this.f2485r0 = layoutParams2.f2485r0;
                this.f2455c0 = layoutParams2.f2455c0;
                this.f2457d0 = layoutParams2.f2457d0;
                this.f2493v0 = layoutParams2.f2493v0;
                this.E = layoutParams2.E;
                this.F = layoutParams2.F;
            }
        }

        public void a() {
            this.f2465h0 = false;
            this.f2459e0 = true;
            this.f2461f0 = true;
            int i10 = ((ViewGroup.MarginLayoutParams) this).width;
            if (i10 == -2 && this.f2451a0) {
                this.f2459e0 = false;
                if (this.P == 0) {
                    this.P = 1;
                }
            }
            int i11 = ((ViewGroup.MarginLayoutParams) this).height;
            if (i11 == -2 && this.f2453b0) {
                this.f2461f0 = false;
                if (this.Q == 0) {
                    this.Q = 1;
                }
            }
            if (i10 == 0 || i10 == -1) {
                this.f2459e0 = false;
                if (i10 == 0 && this.P == 1) {
                    ((ViewGroup.MarginLayoutParams) this).width = -2;
                    this.f2451a0 = true;
                }
            }
            if (i11 == 0 || i11 == -1) {
                this.f2461f0 = false;
                if (i11 == 0 && this.Q == 1) {
                    ((ViewGroup.MarginLayoutParams) this).height = -2;
                    this.f2453b0 = true;
                }
            }
            if (this.f2454c == -1.0f && this.f2450a == -1 && this.f2452b == -1) {
                return;
            }
            this.f2465h0 = true;
            this.f2459e0 = true;
            this.f2461f0 = true;
            if (!(this.f2493v0 instanceof f)) {
                this.f2493v0 = new f();
            }
            ((f) this.f2493v0).B1(this.Z);
        }

        /* JADX WARN: Removed duplicated region for block: B:17:0x004a  */
        /* JADX WARN: Removed duplicated region for block: B:20:0x0051  */
        /* JADX WARN: Removed duplicated region for block: B:23:0x0058  */
        /* JADX WARN: Removed duplicated region for block: B:26:0x005e  */
        /* JADX WARN: Removed duplicated region for block: B:29:0x0064  */
        /* JADX WARN: Removed duplicated region for block: B:38:0x007a  */
        /* JADX WARN: Removed duplicated region for block: B:39:0x0082  */
        @Override // android.view.ViewGroup.MarginLayoutParams, android.view.ViewGroup.LayoutParams
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void resolveLayoutDirection(int r11) {
            /*
                Method dump skipped, instructions count: 259
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.resolveLayoutDirection(int):void");
        }

        public LayoutParams(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f2450a = -1;
            this.f2452b = -1;
            this.f2454c = -1.0f;
            this.f2456d = true;
            this.f2458e = -1;
            this.f2460f = -1;
            this.f2462g = -1;
            this.f2464h = -1;
            this.f2466i = -1;
            this.f2468j = -1;
            this.f2470k = -1;
            this.f2472l = -1;
            this.f2474m = -1;
            this.f2476n = -1;
            this.f2478o = -1;
            this.f2480p = -1;
            this.f2482q = 0;
            this.f2484r = 0.0f;
            this.f2486s = -1;
            this.f2488t = -1;
            this.f2490u = -1;
            this.f2492v = -1;
            this.f2494w = Integer.MIN_VALUE;
            this.f2496x = Integer.MIN_VALUE;
            this.f2497y = Integer.MIN_VALUE;
            this.f2498z = Integer.MIN_VALUE;
            this.A = Integer.MIN_VALUE;
            this.B = Integer.MIN_VALUE;
            this.C = Integer.MIN_VALUE;
            this.D = 0;
            this.E = true;
            this.F = true;
            this.G = 0.5f;
            this.H = 0.5f;
            this.I = null;
            this.J = 0.0f;
            this.K = 1;
            this.L = -1.0f;
            this.M = -1.0f;
            this.N = 0;
            this.O = 0;
            this.P = 0;
            this.Q = 0;
            this.R = 0;
            this.S = 0;
            this.T = 0;
            this.U = 0;
            this.V = 1.0f;
            this.W = 1.0f;
            this.X = -1;
            this.Y = -1;
            this.Z = -1;
            this.f2451a0 = false;
            this.f2453b0 = false;
            this.f2455c0 = null;
            this.f2457d0 = 0;
            this.f2459e0 = true;
            this.f2461f0 = true;
            this.f2463g0 = false;
            this.f2465h0 = false;
            this.f2467i0 = false;
            this.f2469j0 = false;
            this.f2471k0 = false;
            this.f2473l0 = -1;
            this.f2475m0 = -1;
            this.f2477n0 = -1;
            this.f2479o0 = -1;
            this.f2481p0 = Integer.MIN_VALUE;
            this.f2483q0 = Integer.MIN_VALUE;
            this.f2485r0 = 0.5f;
            this.f2493v0 = new ConstraintWidget();
            this.f2495w0 = false;
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, d.V0);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                int i11 = a.f2499a.get(index);
                switch (i11) {
                    case 1:
                        this.Z = obtainStyledAttributes.getInt(index, this.Z);
                        break;
                    case 2:
                        int resourceId = obtainStyledAttributes.getResourceId(index, this.f2480p);
                        this.f2480p = resourceId;
                        if (resourceId == -1) {
                            this.f2480p = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 3:
                        this.f2482q = obtainStyledAttributes.getDimensionPixelSize(index, this.f2482q);
                        break;
                    case 4:
                        float f10 = obtainStyledAttributes.getFloat(index, this.f2484r) % 360.0f;
                        this.f2484r = f10;
                        if (f10 < 0.0f) {
                            this.f2484r = (360.0f - f10) % 360.0f;
                            break;
                        } else {
                            break;
                        }
                    case 5:
                        this.f2450a = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2450a);
                        break;
                    case 6:
                        this.f2452b = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2452b);
                        break;
                    case 7:
                        this.f2454c = obtainStyledAttributes.getFloat(index, this.f2454c);
                        break;
                    case 8:
                        int resourceId2 = obtainStyledAttributes.getResourceId(index, this.f2458e);
                        this.f2458e = resourceId2;
                        if (resourceId2 == -1) {
                            this.f2458e = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 9:
                        int resourceId3 = obtainStyledAttributes.getResourceId(index, this.f2460f);
                        this.f2460f = resourceId3;
                        if (resourceId3 == -1) {
                            this.f2460f = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 10:
                        int resourceId4 = obtainStyledAttributes.getResourceId(index, this.f2462g);
                        this.f2462g = resourceId4;
                        if (resourceId4 == -1) {
                            this.f2462g = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 11:
                        int resourceId5 = obtainStyledAttributes.getResourceId(index, this.f2464h);
                        this.f2464h = resourceId5;
                        if (resourceId5 == -1) {
                            this.f2464h = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 12:
                        int resourceId6 = obtainStyledAttributes.getResourceId(index, this.f2466i);
                        this.f2466i = resourceId6;
                        if (resourceId6 == -1) {
                            this.f2466i = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 13:
                        int resourceId7 = obtainStyledAttributes.getResourceId(index, this.f2468j);
                        this.f2468j = resourceId7;
                        if (resourceId7 == -1) {
                            this.f2468j = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 14:
                        int resourceId8 = obtainStyledAttributes.getResourceId(index, this.f2470k);
                        this.f2470k = resourceId8;
                        if (resourceId8 == -1) {
                            this.f2470k = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 15:
                        int resourceId9 = obtainStyledAttributes.getResourceId(index, this.f2472l);
                        this.f2472l = resourceId9;
                        if (resourceId9 == -1) {
                            this.f2472l = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 16:
                        int resourceId10 = obtainStyledAttributes.getResourceId(index, this.f2474m);
                        this.f2474m = resourceId10;
                        if (resourceId10 == -1) {
                            this.f2474m = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 17:
                        int resourceId11 = obtainStyledAttributes.getResourceId(index, this.f2486s);
                        this.f2486s = resourceId11;
                        if (resourceId11 == -1) {
                            this.f2486s = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        int resourceId12 = obtainStyledAttributes.getResourceId(index, this.f2488t);
                        this.f2488t = resourceId12;
                        if (resourceId12 == -1) {
                            this.f2488t = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        int resourceId13 = obtainStyledAttributes.getResourceId(index, this.f2490u);
                        this.f2490u = resourceId13;
                        if (resourceId13 == -1) {
                            this.f2490u = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case 20:
                        int resourceId14 = obtainStyledAttributes.getResourceId(index, this.f2492v);
                        this.f2492v = resourceId14;
                        if (resourceId14 == -1) {
                            this.f2492v = obtainStyledAttributes.getInt(index, -1);
                            break;
                        } else {
                            break;
                        }
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        this.f2494w = obtainStyledAttributes.getDimensionPixelSize(index, this.f2494w);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        this.f2496x = obtainStyledAttributes.getDimensionPixelSize(index, this.f2496x);
                        break;
                    case 23:
                        this.f2497y = obtainStyledAttributes.getDimensionPixelSize(index, this.f2497y);
                        break;
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        this.f2498z = obtainStyledAttributes.getDimensionPixelSize(index, this.f2498z);
                        break;
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        this.A = obtainStyledAttributes.getDimensionPixelSize(index, this.A);
                        break;
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        this.B = obtainStyledAttributes.getDimensionPixelSize(index, this.B);
                        break;
                    case 27:
                        this.f2451a0 = obtainStyledAttributes.getBoolean(index, this.f2451a0);
                        break;
                    case 28:
                        this.f2453b0 = obtainStyledAttributes.getBoolean(index, this.f2453b0);
                        break;
                    case 29:
                        this.G = obtainStyledAttributes.getFloat(index, this.G);
                        break;
                    case 30:
                        this.H = obtainStyledAttributes.getFloat(index, this.H);
                        break;
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        int i12 = obtainStyledAttributes.getInt(index, 0);
                        this.P = i12;
                        if (i12 == 1) {
                            Log.e(ConstraintLayout.TAG, "layout_constraintWidth_default=\"wrap\" is deprecated.\nUse layout_width=\"WRAP_CONTENT\" and layout_constrainedWidth=\"true\" instead.");
                            break;
                        } else {
                            break;
                        }
                    case 32:
                        int i13 = obtainStyledAttributes.getInt(index, 0);
                        this.Q = i13;
                        if (i13 == 1) {
                            Log.e(ConstraintLayout.TAG, "layout_constraintHeight_default=\"wrap\" is deprecated.\nUse layout_height=\"WRAP_CONTENT\" and layout_constrainedHeight=\"true\" instead.");
                            break;
                        } else {
                            break;
                        }
                    case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                        try {
                            this.R = obtainStyledAttributes.getDimensionPixelSize(index, this.R);
                            break;
                        } catch (Exception unused) {
                            if (obtainStyledAttributes.getInt(index, this.R) == -2) {
                                this.R = -2;
                                break;
                            } else {
                                break;
                            }
                        }
                    case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                        try {
                            this.T = obtainStyledAttributes.getDimensionPixelSize(index, this.T);
                            break;
                        } catch (Exception unused2) {
                            if (obtainStyledAttributes.getInt(index, this.T) == -2) {
                                this.T = -2;
                                break;
                            } else {
                                break;
                            }
                        }
                    case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                        this.V = Math.max(0.0f, obtainStyledAttributes.getFloat(index, this.V));
                        this.P = 2;
                        break;
                    case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                        try {
                            this.S = obtainStyledAttributes.getDimensionPixelSize(index, this.S);
                            break;
                        } catch (Exception unused3) {
                            if (obtainStyledAttributes.getInt(index, this.S) == -2) {
                                this.S = -2;
                                break;
                            } else {
                                break;
                            }
                        }
                    case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                        try {
                            this.U = obtainStyledAttributes.getDimensionPixelSize(index, this.U);
                            break;
                        } catch (Exception unused4) {
                            if (obtainStyledAttributes.getInt(index, this.U) == -2) {
                                this.U = -2;
                                break;
                            } else {
                                break;
                            }
                        }
                    case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                        this.W = Math.max(0.0f, obtainStyledAttributes.getFloat(index, this.W));
                        this.Q = 2;
                        break;
                    default:
                        switch (i11) {
                            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                                ConstraintSet.x(this, obtainStyledAttributes.getString(index));
                                continue;
                            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                                this.L = obtainStyledAttributes.getFloat(index, this.L);
                                continue;
                            case 46:
                                this.M = obtainStyledAttributes.getFloat(index, this.M);
                                continue;
                            case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                                this.N = obtainStyledAttributes.getInt(index, 0);
                                continue;
                            case 48:
                                this.O = obtainStyledAttributes.getInt(index, 0);
                                continue;
                            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                                this.X = obtainStyledAttributes.getDimensionPixelOffset(index, this.X);
                                continue;
                            case 50:
                                this.Y = obtainStyledAttributes.getDimensionPixelOffset(index, this.Y);
                                continue;
                            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                                this.f2455c0 = obtainStyledAttributes.getString(index);
                                continue;
                            case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                                int resourceId15 = obtainStyledAttributes.getResourceId(index, this.f2476n);
                                this.f2476n = resourceId15;
                                if (resourceId15 == -1) {
                                    this.f2476n = obtainStyledAttributes.getInt(index, -1);
                                    break;
                                } else {
                                    continue;
                                }
                            case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                                int resourceId16 = obtainStyledAttributes.getResourceId(index, this.f2478o);
                                this.f2478o = resourceId16;
                                if (resourceId16 == -1) {
                                    this.f2478o = obtainStyledAttributes.getInt(index, -1);
                                    break;
                                } else {
                                    continue;
                                }
                            case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                                this.D = obtainStyledAttributes.getDimensionPixelSize(index, this.D);
                                continue;
                            case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                                this.C = obtainStyledAttributes.getDimensionPixelSize(index, this.C);
                                continue;
                            default:
                                switch (i11) {
                                    case 64:
                                        ConstraintSet.v(this, obtainStyledAttributes, index, 0);
                                        this.E = true;
                                        continue;
                                    case 65:
                                        ConstraintSet.v(this, obtainStyledAttributes, index, 1);
                                        this.F = true;
                                        continue;
                                    case 66:
                                        this.f2457d0 = obtainStyledAttributes.getInt(index, this.f2457d0);
                                        continue;
                                    case 67:
                                        this.f2456d = obtainStyledAttributes.getBoolean(index, this.f2456d);
                                        continue;
                                        continue;
                                }
                        }
                }
            }
            obtainStyledAttributes.recycle();
            a();
        }

        public LayoutParams(int i10, int i11) {
            super(i10, i11);
            this.f2450a = -1;
            this.f2452b = -1;
            this.f2454c = -1.0f;
            this.f2456d = true;
            this.f2458e = -1;
            this.f2460f = -1;
            this.f2462g = -1;
            this.f2464h = -1;
            this.f2466i = -1;
            this.f2468j = -1;
            this.f2470k = -1;
            this.f2472l = -1;
            this.f2474m = -1;
            this.f2476n = -1;
            this.f2478o = -1;
            this.f2480p = -1;
            this.f2482q = 0;
            this.f2484r = 0.0f;
            this.f2486s = -1;
            this.f2488t = -1;
            this.f2490u = -1;
            this.f2492v = -1;
            this.f2494w = Integer.MIN_VALUE;
            this.f2496x = Integer.MIN_VALUE;
            this.f2497y = Integer.MIN_VALUE;
            this.f2498z = Integer.MIN_VALUE;
            this.A = Integer.MIN_VALUE;
            this.B = Integer.MIN_VALUE;
            this.C = Integer.MIN_VALUE;
            this.D = 0;
            this.E = true;
            this.F = true;
            this.G = 0.5f;
            this.H = 0.5f;
            this.I = null;
            this.J = 0.0f;
            this.K = 1;
            this.L = -1.0f;
            this.M = -1.0f;
            this.N = 0;
            this.O = 0;
            this.P = 0;
            this.Q = 0;
            this.R = 0;
            this.S = 0;
            this.T = 0;
            this.U = 0;
            this.V = 1.0f;
            this.W = 1.0f;
            this.X = -1;
            this.Y = -1;
            this.Z = -1;
            this.f2451a0 = false;
            this.f2453b0 = false;
            this.f2455c0 = null;
            this.f2457d0 = 0;
            this.f2459e0 = true;
            this.f2461f0 = true;
            this.f2463g0 = false;
            this.f2465h0 = false;
            this.f2467i0 = false;
            this.f2469j0 = false;
            this.f2471k0 = false;
            this.f2473l0 = -1;
            this.f2475m0 = -1;
            this.f2477n0 = -1;
            this.f2479o0 = -1;
            this.f2481p0 = Integer.MIN_VALUE;
            this.f2483q0 = Integer.MIN_VALUE;
            this.f2485r0 = 0.5f;
            this.f2493v0 = new ConstraintWidget();
            this.f2495w0 = false;
        }
    }
}
