package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.os.Build;
import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextDirectionHeuristic;
import android.text.TextDirectionHeuristics;
import android.text.TextPaint;
import android.text.method.TransformationMethod;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.Log;
import android.util.TypedValue;
import android.widget.TextView;
import androidx.annotation.NonNull;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.ConcurrentHashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: l  reason: collision with root package name */
    private static final RectF f2284l = new RectF();

    /* renamed from: m  reason: collision with root package name */
    private static ConcurrentHashMap f2285m = new ConcurrentHashMap();

    /* renamed from: a  reason: collision with root package name */
    private int f2286a = 0;

    /* renamed from: b  reason: collision with root package name */
    private boolean f2287b = false;

    /* renamed from: c  reason: collision with root package name */
    private float f2288c = -1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f2289d = -1.0f;

    /* renamed from: e  reason: collision with root package name */
    private float f2290e = -1.0f;

    /* renamed from: f  reason: collision with root package name */
    private int[] f2291f = new int[0];

    /* renamed from: g  reason: collision with root package name */
    private boolean f2292g = false;

    /* renamed from: h  reason: collision with root package name */
    private TextPaint f2293h;

    /* renamed from: i  reason: collision with root package name */
    private final TextView f2294i;

    /* renamed from: j  reason: collision with root package name */
    private final Context f2295j;

    /* renamed from: k  reason: collision with root package name */
    private final d f2296k;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        @NonNull
        static StaticLayout a(@NonNull CharSequence charSequence, @NonNull Layout.Alignment alignment, int i10, int i11, @NonNull TextView textView, @NonNull TextPaint textPaint, @NonNull d dVar) {
            StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, 0, charSequence.length(), textPaint, i10);
            StaticLayout.Builder hyphenationFrequency = obtain.setAlignment(alignment).setLineSpacing(textView.getLineSpacingExtra(), textView.getLineSpacingMultiplier()).setIncludePad(textView.getIncludeFontPadding()).setBreakStrategy(textView.getBreakStrategy()).setHyphenationFrequency(textView.getHyphenationFrequency());
            if (i11 == -1) {
                i11 = Integer.MAX_VALUE;
            }
            hyphenationFrequency.setMaxLines(i11);
            try {
                dVar.a(obtain, textView);
            } catch (ClassCastException unused) {
                Log.w("ACTVAutoSizeHelper", "Failed to obtain TextDirectionHeuristic, auto size may be incorrect");
            }
            return obtain.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b extends d {
        b() {
        }

        @Override // androidx.appcompat.widget.w.d
        void a(StaticLayout.Builder builder, TextView textView) {
            builder.setTextDirection((TextDirectionHeuristic) w.m(textView, "getTextDirectionHeuristic", TextDirectionHeuristics.FIRSTSTRONG_LTR));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c extends b {
        c() {
        }

        @Override // androidx.appcompat.widget.w.b, androidx.appcompat.widget.w.d
        void a(StaticLayout.Builder builder, TextView textView) {
            builder.setTextDirection(textView.getTextDirectionHeuristic());
        }

        @Override // androidx.appcompat.widget.w.d
        boolean b(TextView textView) {
            return textView.isHorizontallyScrollable();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        d() {
        }

        abstract void a(StaticLayout.Builder builder, TextView textView);

        boolean b(TextView textView) {
            return ((Boolean) w.m(textView, "getHorizontallyScrolling", Boolean.FALSE)).booleanValue();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(TextView textView) {
        this.f2294i = textView;
        this.f2295j = textView.getContext();
        if (Build.VERSION.SDK_INT >= 29) {
            this.f2296k = new c();
        } else {
            this.f2296k = new b();
        }
    }

    private int[] b(int[] iArr) {
        int length = iArr.length;
        if (length != 0) {
            Arrays.sort(iArr);
            ArrayList arrayList = new ArrayList();
            for (int i10 : iArr) {
                if (i10 > 0 && Collections.binarySearch(arrayList, Integer.valueOf(i10)) < 0) {
                    arrayList.add(Integer.valueOf(i10));
                }
            }
            if (length != arrayList.size()) {
                int size = arrayList.size();
                int[] iArr2 = new int[size];
                for (int i11 = 0; i11 < size; i11++) {
                    iArr2[i11] = ((Integer) arrayList.get(i11)).intValue();
                }
                return iArr2;
            }
        }
        return iArr;
    }

    private void c() {
        this.f2286a = 0;
        this.f2289d = -1.0f;
        this.f2290e = -1.0f;
        this.f2288c = -1.0f;
        this.f2291f = new int[0];
        this.f2287b = false;
    }

    private int e(RectF rectF) {
        int length = this.f2291f.length;
        if (length != 0) {
            int i10 = 1;
            int i11 = length - 1;
            int i12 = 0;
            while (i10 <= i11) {
                int i13 = (i10 + i11) / 2;
                if (x(this.f2291f[i13], rectF)) {
                    int i14 = i13 + 1;
                    i12 = i10;
                    i10 = i14;
                } else {
                    i12 = i13 - 1;
                    i11 = i12;
                }
            }
            return this.f2291f[i12];
        }
        throw new IllegalStateException("No available text sizes to choose from.");
    }

    private static Method k(String str) {
        try {
            Method method = (Method) f2285m.get(str);
            if (method == null && (method = TextView.class.getDeclaredMethod(str, null)) != null) {
                method.setAccessible(true);
                f2285m.put(str, method);
                return method;
            }
            return method;
        } catch (Exception e10) {
            Log.w("ACTVAutoSizeHelper", "Failed to retrieve TextView#" + str + "() method", e10);
            return null;
        }
    }

    static Object m(Object obj, String str, Object obj2) {
        try {
            return k(str).invoke(obj, null);
        } catch (Exception e10) {
            Log.w("ACTVAutoSizeHelper", "Failed to invoke TextView#" + str + "() method", e10);
            return obj2;
        }
    }

    private void s(float f10) {
        if (f10 != this.f2294i.getPaint().getTextSize()) {
            this.f2294i.getPaint().setTextSize(f10);
            boolean isInLayout = this.f2294i.isInLayout();
            if (this.f2294i.getLayout() != null) {
                this.f2287b = false;
                try {
                    Method k10 = k("nullLayouts");
                    if (k10 != null) {
                        k10.invoke(this.f2294i, null);
                    }
                } catch (Exception e10) {
                    Log.w("ACTVAutoSizeHelper", "Failed to invoke TextView#nullLayouts() method", e10);
                }
                if (!isInLayout) {
                    this.f2294i.requestLayout();
                } else {
                    this.f2294i.forceLayout();
                }
                this.f2294i.invalidate();
            }
        }
    }

    private boolean u() {
        if (y() && this.f2286a == 1) {
            if (!this.f2292g || this.f2291f.length == 0) {
                int floor = ((int) Math.floor((this.f2290e - this.f2289d) / this.f2288c)) + 1;
                int[] iArr = new int[floor];
                for (int i10 = 0; i10 < floor; i10++) {
                    iArr[i10] = Math.round(this.f2289d + (i10 * this.f2288c));
                }
                this.f2291f = b(iArr);
            }
            this.f2287b = true;
        } else {
            this.f2287b = false;
        }
        return this.f2287b;
    }

    private void v(TypedArray typedArray) {
        int length = typedArray.length();
        int[] iArr = new int[length];
        if (length > 0) {
            for (int i10 = 0; i10 < length; i10++) {
                iArr[i10] = typedArray.getDimensionPixelSize(i10, -1);
            }
            this.f2291f = b(iArr);
            w();
        }
    }

    private boolean w() {
        int[] iArr;
        int length;
        boolean z10;
        if (this.f2291f.length > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f2292g = z10;
        if (z10) {
            this.f2286a = 1;
            this.f2289d = iArr[0];
            this.f2290e = iArr[length - 1];
            this.f2288c = -1.0f;
        }
        return z10;
    }

    private boolean x(int i10, RectF rectF) {
        CharSequence transformation;
        CharSequence text = this.f2294i.getText();
        TransformationMethod transformationMethod = this.f2294i.getTransformationMethod();
        if (transformationMethod != null && (transformation = transformationMethod.getTransformation(text, this.f2294i)) != null) {
            text = transformation;
        }
        int maxLines = this.f2294i.getMaxLines();
        l(i10);
        StaticLayout d10 = d(text, (Layout.Alignment) m(this.f2294i, "getLayoutAlignment", Layout.Alignment.ALIGN_NORMAL), Math.round(rectF.right), maxLines);
        if ((maxLines != -1 && (d10.getLineCount() > maxLines || d10.getLineEnd(d10.getLineCount() - 1) != text.length())) || d10.getHeight() > rectF.bottom) {
            return false;
        }
        return true;
    }

    private boolean y() {
        return !(this.f2294i instanceof AppCompatEditText);
    }

    private void z(float f10, float f11, float f12) {
        if (f10 > 0.0f) {
            if (f11 > f10) {
                if (f12 > 0.0f) {
                    this.f2286a = 1;
                    this.f2289d = f10;
                    this.f2290e = f11;
                    this.f2288c = f12;
                    this.f2292g = false;
                    return;
                }
                throw new IllegalArgumentException("The auto-size step granularity (" + f12 + "px) is less or equal to (0px)");
            }
            throw new IllegalArgumentException("Maximum auto-size text size (" + f11 + "px) is less or equal to minimum auto-size text size (" + f10 + "px)");
        }
        throw new IllegalArgumentException("Minimum auto-size text size (" + f10 + "px) is less or equal to (0px)");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        int measuredWidth;
        if (n()) {
            if (this.f2287b) {
                if (this.f2294i.getMeasuredHeight() > 0 && this.f2294i.getMeasuredWidth() > 0) {
                    if (this.f2296k.b(this.f2294i)) {
                        measuredWidth = 1048576;
                    } else {
                        measuredWidth = (this.f2294i.getMeasuredWidth() - this.f2294i.getTotalPaddingLeft()) - this.f2294i.getTotalPaddingRight();
                    }
                    int height = (this.f2294i.getHeight() - this.f2294i.getCompoundPaddingBottom()) - this.f2294i.getCompoundPaddingTop();
                    if (measuredWidth > 0 && height > 0) {
                        RectF rectF = f2284l;
                        synchronized (rectF) {
                            try {
                                rectF.setEmpty();
                                rectF.right = measuredWidth;
                                rectF.bottom = height;
                                float e10 = e(rectF);
                                if (e10 != this.f2294i.getTextSize()) {
                                    t(0, e10);
                                }
                            } finally {
                            }
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }
            this.f2287b = true;
        }
    }

    StaticLayout d(CharSequence charSequence, Layout.Alignment alignment, int i10, int i11) {
        return a.a(charSequence, alignment, i10, i11, this.f2294i, this.f2293h, this.f2296k);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return Math.round(this.f2290e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return Math.round(this.f2289d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h() {
        return Math.round(this.f2288c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int[] i() {
        return this.f2291f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f2286a;
    }

    void l(int i10) {
        TextPaint textPaint = this.f2293h;
        if (textPaint == null) {
            this.f2293h = new TextPaint();
        } else {
            textPaint.reset();
        }
        this.f2293h.set(this.f2294i.getPaint());
        this.f2293h.setTextSize(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        if (y() && this.f2286a != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(AttributeSet attributeSet, int i10) {
        float f10;
        float f11;
        float f12;
        int resourceId;
        TypedArray obtainStyledAttributes = this.f2295j.obtainStyledAttributes(attributeSet, f.j.f22367g0, i10, 0);
        TextView textView = this.f2294i;
        androidx.core.view.h0.l0(textView, textView.getContext(), f.j.f22367g0, attributeSet, obtainStyledAttributes, i10, 0);
        if (obtainStyledAttributes.hasValue(f.j.f22392l0)) {
            this.f2286a = obtainStyledAttributes.getInt(f.j.f22392l0, 0);
        }
        if (obtainStyledAttributes.hasValue(f.j.f22387k0)) {
            f10 = obtainStyledAttributes.getDimension(f.j.f22387k0, -1.0f);
        } else {
            f10 = -1.0f;
        }
        if (obtainStyledAttributes.hasValue(f.j.f22377i0)) {
            f11 = obtainStyledAttributes.getDimension(f.j.f22377i0, -1.0f);
        } else {
            f11 = -1.0f;
        }
        if (obtainStyledAttributes.hasValue(f.j.f22372h0)) {
            f12 = obtainStyledAttributes.getDimension(f.j.f22372h0, -1.0f);
        } else {
            f12 = -1.0f;
        }
        if (obtainStyledAttributes.hasValue(f.j.f22382j0) && (resourceId = obtainStyledAttributes.getResourceId(f.j.f22382j0, 0)) > 0) {
            TypedArray obtainTypedArray = obtainStyledAttributes.getResources().obtainTypedArray(resourceId);
            v(obtainTypedArray);
            obtainTypedArray.recycle();
        }
        obtainStyledAttributes.recycle();
        if (y()) {
            if (this.f2286a == 1) {
                if (!this.f2292g) {
                    DisplayMetrics displayMetrics = this.f2295j.getResources().getDisplayMetrics();
                    if (f11 == -1.0f) {
                        f11 = TypedValue.applyDimension(2, 12.0f, displayMetrics);
                    }
                    if (f12 == -1.0f) {
                        f12 = TypedValue.applyDimension(2, 112.0f, displayMetrics);
                    }
                    if (f10 == -1.0f) {
                        f10 = 1.0f;
                    }
                    z(f11, f12, f10);
                }
                u();
                return;
            }
            return;
        }
        this.f2286a = 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(int i10, int i11, int i12, int i13) {
        if (y()) {
            DisplayMetrics displayMetrics = this.f2295j.getResources().getDisplayMetrics();
            z(TypedValue.applyDimension(i13, i10, displayMetrics), TypedValue.applyDimension(i13, i11, displayMetrics), TypedValue.applyDimension(i13, i12, displayMetrics));
            if (u()) {
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(int[] iArr, int i10) {
        if (y()) {
            int length = iArr.length;
            if (length > 0) {
                int[] iArr2 = new int[length];
                if (i10 == 0) {
                    iArr2 = Arrays.copyOf(iArr, length);
                } else {
                    DisplayMetrics displayMetrics = this.f2295j.getResources().getDisplayMetrics();
                    for (int i11 = 0; i11 < length; i11++) {
                        iArr2[i11] = Math.round(TypedValue.applyDimension(i10, iArr[i11], displayMetrics));
                    }
                }
                this.f2291f = b(iArr2);
                if (!w()) {
                    throw new IllegalArgumentException("None of the preset sizes is valid: " + Arrays.toString(iArr));
                }
            } else {
                this.f2292g = false;
            }
            if (u()) {
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(int i10) {
        if (y()) {
            if (i10 != 0) {
                if (i10 == 1) {
                    DisplayMetrics displayMetrics = this.f2295j.getResources().getDisplayMetrics();
                    z(TypedValue.applyDimension(2, 12.0f, displayMetrics), TypedValue.applyDimension(2, 112.0f, displayMetrics), 1.0f);
                    if (u()) {
                        a();
                        return;
                    }
                    return;
                }
                throw new IllegalArgumentException("Unknown auto-size text type: " + i10);
            }
            c();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(int i10, float f10) {
        Resources resources;
        Context context = this.f2295j;
        if (context == null) {
            resources = Resources.getSystem();
        } else {
            resources = context.getResources();
        }
        s(TypedValue.applyDimension(i10, f10, resources.getDisplayMetrics()));
    }
}
