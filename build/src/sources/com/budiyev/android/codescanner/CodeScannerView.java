package com.budiyev.android.codescanner;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.annotation.NonNull;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CodeScannerView extends ViewGroup {
    private static final com.budiyev.android.codescanner.b F = com.budiyev.android.codescanner.b.TOP_START;
    private static final com.budiyev.android.codescanner.b G = com.budiyev.android.codescanner.b.TOP_END;
    private Drawable A;
    private i B;
    private e C;
    private CodeScanner D;
    private int E;

    /* renamed from: d  reason: collision with root package name */
    private SurfaceView f9027d;

    /* renamed from: e  reason: collision with root package name */
    private o f9028e;

    /* renamed from: i  reason: collision with root package name */
    private ImageView f9029i;

    /* renamed from: o  reason: collision with root package name */
    private com.budiyev.android.codescanner.b f9030o;

    /* renamed from: p  reason: collision with root package name */
    private int f9031p;

    /* renamed from: q  reason: collision with root package name */
    private int f9032q;

    /* renamed from: r  reason: collision with root package name */
    private int f9033r;

    /* renamed from: s  reason: collision with root package name */
    private Drawable f9034s;

    /* renamed from: t  reason: collision with root package name */
    private Drawable f9035t;

    /* renamed from: u  reason: collision with root package name */
    private ImageView f9036u;

    /* renamed from: v  reason: collision with root package name */
    private com.budiyev.android.codescanner.b f9037v;

    /* renamed from: w  reason: collision with root package name */
    private int f9038w;

    /* renamed from: x  reason: collision with root package name */
    private int f9039x;

    /* renamed from: y  reason: collision with root package name */
    private int f9040y;

    /* renamed from: z  reason: collision with root package name */
    private Drawable f9041z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f9042a;

        static {
            int[] iArr = new int[com.budiyev.android.codescanner.b.values().length];
            f9042a = iArr;
            try {
                iArr[com.budiyev.android.codescanner.b.TOP_START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f9042a[com.budiyev.android.codescanner.b.TOP_END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f9042a[com.budiyev.android.codescanner.b.BOTTOM_START.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f9042a[com.budiyev.android.codescanner.b.BOTTOM_END.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class b implements View.OnClickListener {
        private b() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            CodeScanner codeScanner = CodeScannerView.this.D;
            if (codeScanner != null && codeScanner.P()) {
                boolean z10 = !codeScanner.O();
                codeScanner.Y(z10);
                CodeScannerView.this.setAutoFocusEnabled(z10);
            }
        }

        /* synthetic */ b(CodeScannerView codeScannerView, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class c implements View.OnClickListener {
        private c() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            CodeScanner codeScanner = CodeScannerView.this.D;
            if (codeScanner != null && codeScanner.R()) {
                boolean z10 = !codeScanner.Q();
                codeScanner.d0(z10);
                CodeScannerView.this.setFlashEnabled(z10);
            }
        }

        /* synthetic */ c(CodeScannerView codeScannerView, a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends ViewGroup.MarginLayoutParams {
        public d(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        public d(int i10, int i11) {
            super(i10, i11);
        }

        public d(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
        }

        public d(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface e {
        void a(int i10, int i11);
    }

    public CodeScannerView(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        d(context, attributeSet, 0, 0);
    }

    private static com.budiyev.android.codescanner.b b(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return com.budiyev.android.codescanner.b.TOP_START;
                }
                return com.budiyev.android.codescanner.b.BOTTOM_END;
            }
            return com.budiyev.android.codescanner.b.BOTTOM_START;
        }
        return com.budiyev.android.codescanner.b.TOP_END;
    }

    private static int c(com.budiyev.android.codescanner.b bVar) {
        int i10 = a.f9042a[bVar.ordinal()];
        if (i10 != 2) {
            if (i10 == 3) {
                return 2;
            }
            if (i10 == 4) {
                return 3;
            }
            return 0;
        }
        return 1;
    }

    private void d(Context context, AttributeSet attributeSet, int i10, int i11) {
        TypedArray typedArray;
        this.f9027d = new SurfaceView(context);
        this.f9028e = new o(context);
        float f10 = context.getResources().getDisplayMetrics().density;
        int round = Math.round(16.0f * f10);
        this.E = Math.round(20.0f * f10);
        ImageView imageView = new ImageView(context);
        this.f9029i = imageView;
        ImageView.ScaleType scaleType = ImageView.ScaleType.CENTER;
        imageView.setScaleType(scaleType);
        this.f9029i.setOnClickListener(new b(this, null));
        ImageView imageView2 = new ImageView(context);
        this.f9036u = imageView2;
        imageView2.setScaleType(scaleType);
        this.f9036u.setOnClickListener(new c(this, null));
        if (attributeSet == null) {
            h(1.0f, 1.0f);
            setMaskColor(1996488704);
            setMaskVisible(true);
            setFrameColor(-1);
            setFrameVisible(true);
            setFrameThickness(Math.round(2.0f * f10));
            setFrameCornersSize(Math.round(50.0f * f10));
            setFrameCornersRadius(Math.round(f10 * 0.0f));
            setFrameCornersCapRounded(false);
            setFrameSize(0.75f);
            setFrameVerticalBias(0.5f);
            setAutoFocusButtonColor(-1);
            setFlashButtonColor(-1);
            setAutoFocusButtonVisible(true);
            setAutoFocusButtonPosition(F);
            setFlashButtonVisible(true);
            setFlashButtonPosition(G);
            setAutoFocusButtonPaddingHorizontal(round);
            setAutoFocusButtonPaddingVertical(round);
            setFlashButtonPaddingHorizontal(round);
            setFlashButtonPaddingVertical(round);
            setAutoFocusButtonOnIcon(n.l(context, j.f9088b));
            setAutoFocusButtonOffIcon(n.l(context, j.f9087a));
            setFlashButtonOnIcon(n.l(context, j.f9090d));
            setFlashButtonOffIcon(n.l(context, j.f9089c));
        } else {
            try {
                typedArray = context.getTheme().obtainStyledAttributes(attributeSet, k.f9091a, i10, i11);
                try {
                    setMaskColor(typedArray.getColor(k.f9116z, 1996488704));
                    setMaskVisible(typedArray.getBoolean(k.A, true));
                    setFrameColor(typedArray.getColor(k.f9108r, -1));
                    setFrameVisible(typedArray.getBoolean(k.f9115y, true));
                    setFrameThickness(typedArray.getDimensionPixelOffset(k.f9113w, Math.round(f10 * 2.0f)));
                    setFrameCornersSize(typedArray.getDimensionPixelOffset(k.f9111u, Math.round(f10 * 50.0f)));
                    setFrameCornersRadius(typedArray.getDimensionPixelOffset(k.f9110t, Math.round(f10 * 0.0f)));
                    setFrameCornersCapRounded(typedArray.getBoolean(k.f9109s, false));
                    h(typedArray.getFloat(k.f9107q, 1.0f), typedArray.getFloat(k.f9106p, 1.0f));
                    setFrameSize(typedArray.getFloat(k.f9112v, 0.75f));
                    setFrameVerticalBias(typedArray.getFloat(k.f9114x, 0.5f));
                    setAutoFocusButtonVisible(typedArray.getBoolean(k.f9098h, true));
                    setAutoFocusButtonColor(typedArray.getColor(k.f9092b, -1));
                    setAutoFocusButtonPosition(b(typedArray.getInt(k.f9097g, c(F))));
                    setAutoFocusButtonPaddingHorizontal(typedArray.getDimensionPixelOffset(k.f9095e, round));
                    setAutoFocusButtonPaddingVertical(typedArray.getDimensionPixelOffset(k.f9096f, round));
                    Drawable drawable = typedArray.getDrawable(k.f9094d);
                    if (drawable == null) {
                        drawable = n.l(context, j.f9088b);
                    }
                    setAutoFocusButtonOnIcon(drawable);
                    Drawable drawable2 = typedArray.getDrawable(k.f9093c);
                    if (drawable2 == null) {
                        drawable2 = n.l(context, j.f9087a);
                    }
                    setAutoFocusButtonOffIcon(drawable2);
                    setFlashButtonVisible(typedArray.getBoolean(k.f9105o, true));
                    setFlashButtonColor(typedArray.getColor(k.f9099i, -1));
                    setFlashButtonPosition(b(typedArray.getInt(k.f9104n, c(G))));
                    setFlashButtonPaddingHorizontal(typedArray.getDimensionPixelOffset(k.f9102l, round));
                    setFlashButtonPaddingVertical(typedArray.getDimensionPixelOffset(k.f9103m, round));
                    Drawable drawable3 = typedArray.getDrawable(k.f9101k);
                    if (drawable3 == null) {
                        drawable3 = n.l(context, j.f9090d);
                    }
                    setFlashButtonOnIcon(drawable3);
                    Drawable drawable4 = typedArray.getDrawable(k.f9100j);
                    if (drawable4 == null) {
                        drawable4 = n.l(context, j.f9089c);
                    }
                    setFlashButtonOffIcon(drawable4);
                    typedArray.recycle();
                } catch (Throwable th2) {
                    th = th2;
                    if (typedArray != null) {
                        typedArray.recycle();
                    }
                    throw th;
                }
            } catch (Throwable th3) {
                th = th3;
                typedArray = null;
            }
        }
        if (isInEditMode()) {
            setAutoFocusEnabled(true);
            setFlashEnabled(true);
        }
        addView(this.f9027d, new d(-1, -1));
        addView(this.f9028e, new d(-1, -1));
        addView(this.f9029i, new d(-2, -2));
        addView(this.f9036u, new d(-2, -2));
    }

    private void e() {
        int i10 = this.f9031p;
        int i11 = this.f9032q;
        this.f9029i.setPadding(i10, i11, i10, i11);
    }

    private void f() {
        int i10 = this.f9038w;
        int i11 = this.f9039x;
        this.f9036u.setPadding(i10, i11, i10, i11);
    }

    private void g(View view, com.budiyev.android.codescanner.b bVar, int i10, int i11) {
        int measuredWidth = view.getMeasuredWidth();
        int measuredHeight = view.getMeasuredHeight();
        int layoutDirection = getLayoutDirection();
        int i12 = a.f9042a[bVar.ordinal()];
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 != 3) {
                    if (i12 != 4) {
                        return;
                    }
                    if (layoutDirection == 1) {
                        view.layout(0, i11 - measuredHeight, measuredWidth, i11);
                    } else {
                        view.layout(i10 - measuredWidth, i11 - measuredHeight, i10, i11);
                    }
                } else if (layoutDirection == 1) {
                    view.layout(i10 - measuredWidth, i11 - measuredHeight, i10, i11);
                } else {
                    view.layout(0, i11 - measuredHeight, measuredWidth, i11);
                }
            } else if (layoutDirection == 1) {
                view.layout(0, 0, measuredWidth, measuredHeight);
            } else {
                view.layout(i10 - measuredWidth, 0, i10, measuredHeight);
            }
        } else if (layoutDirection == 1) {
            view.layout(i10 - measuredWidth, 0, i10, measuredHeight);
        } else {
            view.layout(0, 0, measuredWidth, measuredHeight);
        }
    }

    @Override // android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        return layoutParams instanceof d;
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateDefaultLayoutParams() {
        return new d(-2, -2);
    }

    @Override // android.view.ViewGroup
    public ViewGroup.LayoutParams generateLayoutParams(AttributeSet attributeSet) {
        return new d(getContext(), attributeSet);
    }

    public int getAutoFocusButtonColor() {
        return this.f9033r;
    }

    @NonNull
    public Drawable getAutoFocusButtonOffIcon() {
        return this.f9035t;
    }

    @NonNull
    public Drawable getAutoFocusButtonOnIcon() {
        return this.f9034s;
    }

    public int getAutoFocusButtonPaddingHorizontal() {
        return this.f9031p;
    }

    public int getAutoFocusButtonPaddingVertical() {
        return this.f9032q;
    }

    @NonNull
    public com.budiyev.android.codescanner.b getAutoFocusButtonPosition() {
        return this.f9030o;
    }

    public int getFlashButtonColor() {
        return this.f9040y;
    }

    @NonNull
    public Drawable getFlashButtonOffIcon() {
        return this.A;
    }

    @NonNull
    public Drawable getFlashButtonOnIcon() {
        return this.f9041z;
    }

    public int getFlashButtonPaddingHorizontal() {
        return this.f9038w;
    }

    public int getFlashButtonPaddingVertical() {
        return this.f9039x;
    }

    @NonNull
    public com.budiyev.android.codescanner.b getFlashButtonPosition() {
        return this.f9037v;
    }

    public float getFrameAspectRatioHeight() {
        return this.f9028e.a();
    }

    public float getFrameAspectRatioWidth() {
        return this.f9028e.b();
    }

    public int getFrameColor() {
        return this.f9028e.c();
    }

    public int getFrameCornersRadius() {
        return this.f9028e.d();
    }

    public int getFrameCornersSize() {
        return this.f9028e.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l getFrameRect() {
        return this.f9028e.f();
    }

    public float getFrameSize() {
        return this.f9028e.g();
    }

    public int getFrameThickness() {
        return this.f9028e.h();
    }

    public float getFrameVerticalBias() {
        return this.f9028e.i();
    }

    public int getMaskColor() {
        return this.f9028e.j();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @NonNull
    public SurfaceView getPreviewView() {
        return this.f9027d;
    }

    @NonNull
    o getViewFinderView() {
        return this.f9028e;
    }

    public void h(float f10, float f11) {
        if (f10 > 0.0f && f11 > 0.0f) {
            this.f9028e.m(f10, f11);
            return;
        }
        throw new IllegalArgumentException("Frame aspect ratio values should be greater than zero");
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int i14;
        int i15;
        int i16;
        int i17;
        int childCount = getChildCount();
        if (childCount <= 5) {
            int i18 = i12 - i10;
            int i19 = i13 - i11;
            i iVar = this.B;
            int i20 = 0;
            if (iVar == null) {
                this.f9027d.layout(0, 0, i18, i19);
            } else {
                int a10 = iVar.a();
                if (a10 > i18) {
                    int i21 = (a10 - i18) / 2;
                    i14 = 0 - i21;
                    i15 = i21 + i18;
                } else {
                    i14 = 0;
                    i15 = i18;
                }
                int b10 = iVar.b();
                if (b10 > i19) {
                    int i22 = (b10 - i19) / 2;
                    i16 = 0 - i22;
                    i17 = i22 + i19;
                } else {
                    i16 = 0;
                    i17 = i19;
                }
                this.f9027d.layout(i14, i16, i15, i17);
            }
            this.f9028e.layout(0, 0, i18, i19);
            g(this.f9029i, this.f9030o, i18, i19);
            g(this.f9036u, this.f9037v, i18, i19);
            if (childCount == 5) {
                l f10 = this.f9028e.f();
                if (f10 != null) {
                    i20 = f10.c();
                }
                View childAt = getChildAt(4);
                int paddingLeft = getPaddingLeft();
                int paddingTop = getPaddingTop();
                if (childAt.getVisibility() != 8) {
                    d dVar = (d) childAt.getLayoutParams();
                    int i23 = paddingLeft + ((ViewGroup.MarginLayoutParams) dVar).leftMargin;
                    int i24 = paddingTop + ((ViewGroup.MarginLayoutParams) dVar).topMargin + i20;
                    childAt.layout(i23, i24, childAt.getMeasuredWidth() + i23, childAt.getMeasuredHeight() + i24);
                    return;
                }
                return;
            }
            return;
        }
        throw new IllegalStateException("CodeScannerView can have zero or one child");
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int i12;
        int childCount = getChildCount();
        if (childCount <= 5) {
            measureChildWithMargins(this.f9027d, i10, 0, i11, 0);
            measureChildWithMargins(this.f9028e, i10, 0, i11, 0);
            measureChildWithMargins(this.f9029i, i10, 0, i11, 0);
            measureChildWithMargins(this.f9036u, i10, 0, i11, 0);
            if (childCount == 5) {
                l f10 = this.f9028e.f();
                View childAt = getChildAt(4);
                if (f10 != null) {
                    i12 = f10.c();
                } else {
                    i12 = 0;
                }
                measureChildWithMargins(childAt, i10, 0, i11, i12);
            }
            setMeasuredDimension(View.getDefaultSize(getSuggestedMinimumWidth(), i10), View.getDefaultSize(getSuggestedMinimumHeight(), i11));
            return;
        }
        throw new IllegalStateException("CodeScannerView can have zero or one child");
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        e eVar = this.C;
        if (eVar != null) {
            eVar.a(i10, i11);
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        CodeScanner codeScanner = this.D;
        l frameRect = getFrameRect();
        int x10 = (int) motionEvent.getX();
        int y10 = (int) motionEvent.getY();
        if (codeScanner != null && frameRect != null && codeScanner.P() && codeScanner.S() && motionEvent.getAction() == 0 && frameRect.i(x10, y10)) {
            int i10 = this.E;
            codeScanner.T(new l(x10 - i10, y10 - i10, x10 + i10, y10 + i10).b(frameRect));
        }
        return super.onTouchEvent(motionEvent);
    }

    public void setAutoFocusButtonColor(int i10) {
        this.f9033r = i10;
        this.f9029i.setColorFilter(i10);
    }

    public void setAutoFocusButtonOffIcon(@NonNull Drawable drawable) {
        boolean z10;
        Objects.requireNonNull(drawable);
        if (drawable != this.f9035t) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f9035t = drawable;
        CodeScanner codeScanner = this.D;
        if (z10 && codeScanner != null) {
            setAutoFocusEnabled(codeScanner.O());
        }
    }

    public void setAutoFocusButtonOnIcon(@NonNull Drawable drawable) {
        boolean z10;
        Objects.requireNonNull(drawable);
        if (drawable != this.f9034s) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f9034s = drawable;
        CodeScanner codeScanner = this.D;
        if (z10 && codeScanner != null) {
            setAutoFocusEnabled(codeScanner.O());
        }
    }

    public void setAutoFocusButtonPaddingHorizontal(int i10) {
        boolean z10;
        if (i10 >= 0) {
            if (i10 != this.f9031p) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f9031p = i10;
            if (z10) {
                e();
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Padding should be equal to or grater then zero");
    }

    public void setAutoFocusButtonPaddingVertical(int i10) {
        boolean z10;
        if (i10 >= 0) {
            if (i10 != this.f9032q) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f9032q = i10;
            if (z10) {
                e();
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Padding should be equal to or grater then zero");
    }

    public void setAutoFocusButtonPosition(@NonNull com.budiyev.android.codescanner.b bVar) {
        boolean z10;
        Objects.requireNonNull(bVar);
        if (bVar != this.f9030o) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f9030o = bVar;
        if (z10 && isLaidOut()) {
            requestLayout();
        }
    }

    public void setAutoFocusButtonVisible(boolean z10) {
        int i10;
        ImageView imageView = this.f9029i;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        imageView.setVisibility(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAutoFocusEnabled(boolean z10) {
        Drawable drawable;
        ImageView imageView = this.f9029i;
        if (z10) {
            drawable = this.f9034s;
        } else {
            drawable = this.f9035t;
        }
        imageView.setImageDrawable(drawable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setCodeScanner(@NonNull CodeScanner codeScanner) {
        if (this.D == null) {
            this.D = codeScanner;
            setAutoFocusEnabled(codeScanner.O());
            setFlashEnabled(codeScanner.Q());
            return;
        }
        throw new IllegalStateException("Code scanner has already been set");
    }

    public void setFlashButtonColor(int i10) {
        this.f9040y = i10;
        this.f9036u.setColorFilter(i10);
    }

    public void setFlashButtonOffIcon(@NonNull Drawable drawable) {
        boolean z10;
        Objects.requireNonNull(drawable);
        if (drawable != this.A) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.A = drawable;
        CodeScanner codeScanner = this.D;
        if (z10 && codeScanner != null) {
            setFlashEnabled(codeScanner.Q());
        }
    }

    public void setFlashButtonOnIcon(@NonNull Drawable drawable) {
        boolean z10;
        Objects.requireNonNull(drawable);
        if (drawable != this.f9041z) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f9041z = drawable;
        CodeScanner codeScanner = this.D;
        if (z10 && codeScanner != null) {
            setFlashEnabled(codeScanner.Q());
        }
    }

    public void setFlashButtonPaddingHorizontal(int i10) {
        boolean z10;
        if (i10 >= 0) {
            if (i10 != this.f9038w) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f9038w = i10;
            if (z10) {
                f();
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Padding should be equal to or grater then zero");
    }

    public void setFlashButtonPaddingVertical(int i10) {
        boolean z10;
        if (i10 >= 0) {
            if (i10 != this.f9039x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f9039x = i10;
            if (z10) {
                f();
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Padding should be equal to or grater then zero");
    }

    public void setFlashButtonPosition(@NonNull com.budiyev.android.codescanner.b bVar) {
        boolean z10;
        Objects.requireNonNull(bVar);
        if (bVar != this.f9037v) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f9037v = bVar;
        if (z10) {
            requestLayout();
        }
    }

    public void setFlashButtonVisible(boolean z10) {
        int i10;
        ImageView imageView = this.f9036u;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        imageView.setVisibility(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setFlashEnabled(boolean z10) {
        Drawable drawable;
        ImageView imageView = this.f9036u;
        if (z10) {
            drawable = this.f9041z;
        } else {
            drawable = this.A;
        }
        imageView.setImageDrawable(drawable);
    }

    public void setFrameAspectRatioHeight(float f10) {
        if (f10 > 0.0f) {
            this.f9028e.n(f10);
            return;
        }
        throw new IllegalArgumentException("Frame aspect ratio values should be greater than zero");
    }

    public void setFrameAspectRatioWidth(float f10) {
        if (f10 > 0.0f) {
            this.f9028e.o(f10);
            return;
        }
        throw new IllegalArgumentException("Frame aspect ratio values should be greater than zero");
    }

    public void setFrameColor(int i10) {
        this.f9028e.p(i10);
    }

    public void setFrameCornersCapRounded(boolean z10) {
        this.f9028e.q(z10);
    }

    public void setFrameCornersRadius(int i10) {
        if (i10 >= 0) {
            this.f9028e.r(i10);
            return;
        }
        throw new IllegalArgumentException("Frame corners radius can't be negative");
    }

    public void setFrameCornersSize(int i10) {
        if (i10 >= 0) {
            this.f9028e.s(i10);
            return;
        }
        throw new IllegalArgumentException("Frame corners size can't be negative");
    }

    public void setFrameSize(float f10) {
        if (f10 >= 0.1d && f10 <= 1.0f) {
            this.f9028e.t(f10);
            return;
        }
        throw new IllegalArgumentException("Max frame size value should be between 0.1 and 1, inclusive");
    }

    public void setFrameThickness(int i10) {
        if (i10 >= 0) {
            this.f9028e.u(i10);
            return;
        }
        throw new IllegalArgumentException("Frame thickness can't be negative");
    }

    public void setFrameVerticalBias(float f10) {
        if (f10 >= 0.0f && f10 <= 1.0f) {
            this.f9028e.v(f10);
            return;
        }
        throw new IllegalArgumentException("Max frame size value should be between 0 and 1, inclusive");
    }

    public void setFrameVisible(boolean z10) {
        this.f9028e.w(z10);
    }

    public void setMaskColor(int i10) {
        this.f9028e.x(i10);
    }

    public void setMaskVisible(boolean z10) {
        this.f9028e.y(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setPreviewSize(i iVar) {
        this.B = iVar;
        requestLayout();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setSizeListener(e eVar) {
        this.C = eVar;
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new d((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new d(layoutParams);
    }
}
