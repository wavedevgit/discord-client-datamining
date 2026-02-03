package com.henninghall.date_picker.generated;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.icu.text.DecimalFormatSymbols;
import android.os.Build;
import android.text.Editable;
import android.text.InputFilter;
import android.text.Spanned;
import android.text.TextUtils;
import android.text.method.NumberKeyListener;
import android.util.AttributeSet;
import android.util.SparseArray;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.view.accessibility.AccessibilityNodeProvider;
import android.view.animation.DecelerateInterpolator;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.Scroller;
import android.widget.TextView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.image.ReactImageView;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Formatter;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends LinearLayout {

    /* renamed from: u0  reason: collision with root package name */
    private static final m f17252u0 = new m();

    /* renamed from: v0  reason: collision with root package name */
    private static final char[] f17253v0 = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311};
    private int A;
    private j B;
    private i C;
    private g D;
    private long E;
    private final SparseArray F;
    private final int[] G;
    private final Paint H;
    private final Drawable I;
    private int J;
    private int K;
    private int L;
    private final Scroller M;
    private final Scroller N;
    private int O;
    private l P;
    private f Q;
    private e R;
    private float S;
    private long T;
    private float U;
    private VelocityTracker V;
    private int W;

    /* renamed from: a0  reason: collision with root package name */
    private int f17254a0;

    /* renamed from: b0  reason: collision with root package name */
    private int f17255b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f17256c0;

    /* renamed from: d  reason: collision with root package name */
    private boolean f17257d;

    /* renamed from: d0  reason: collision with root package name */
    private final int f17258d0;

    /* renamed from: e  reason: collision with root package name */
    private final ImageButton f17259e;

    /* renamed from: e0  reason: collision with root package name */
    private final boolean f17260e0;

    /* renamed from: f0  reason: collision with root package name */
    private final Drawable f17261f0;

    /* renamed from: g0  reason: collision with root package name */
    private int f17262g0;

    /* renamed from: h0  reason: collision with root package name */
    private int f17263h0;

    /* renamed from: i  reason: collision with root package name */
    private final ImageButton f17264i;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f17265i0;

    /* renamed from: j0  reason: collision with root package name */
    private boolean f17266j0;

    /* renamed from: k0  reason: collision with root package name */
    private int f17267k0;

    /* renamed from: l0  reason: collision with root package name */
    private int f17268l0;

    /* renamed from: m0  reason: collision with root package name */
    private int f17269m0;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f17270n0;

    /* renamed from: o  reason: collision with root package name */
    private final EditText f17271o;

    /* renamed from: o0  reason: collision with root package name */
    private boolean f17272o0;

    /* renamed from: p  reason: collision with root package name */
    private final int f17273p;

    /* renamed from: p0  reason: collision with root package name */
    private d f17274p0;

    /* renamed from: q  reason: collision with root package name */
    private final int f17275q;

    /* renamed from: q0  reason: collision with root package name */
    private final k f17276q0;

    /* renamed from: r  reason: collision with root package name */
    private final int f17277r;

    /* renamed from: r0  reason: collision with root package name */
    private int f17278r0;

    /* renamed from: s  reason: collision with root package name */
    private final int f17279s;

    /* renamed from: s0  reason: collision with root package name */
    private boolean f17280s0;

    /* renamed from: t  reason: collision with root package name */
    private int f17281t;

    /* renamed from: t0  reason: collision with root package name */
    private long f17282t0;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f17283u;

    /* renamed from: v  reason: collision with root package name */
    private final int f17284v;

    /* renamed from: w  reason: collision with root package name */
    private int f17285w;

    /* renamed from: x  reason: collision with root package name */
    private String[] f17286x;

    /* renamed from: y  reason: collision with root package name */
    private int f17287y;

    /* renamed from: z  reason: collision with root package name */
    private int f17288z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements View.OnClickListener {
        a() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            b.this.J();
            b.this.f17271o.clearFocus();
        }
    }

    /* renamed from: com.henninghall.date_picker.generated.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class View$OnLongClickListenerC0202b implements View.OnLongClickListener {
        View$OnLongClickListenerC0202b() {
        }

        @Override // android.view.View.OnLongClickListener
        public boolean onLongClick(View view) {
            b.this.J();
            b.this.f17271o.clearFocus();
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c implements View.OnFocusChangeListener {
        c() {
        }

        @Override // android.view.View.OnFocusChangeListener
        public void onFocusChange(View view, boolean z10) {
            if (z10) {
                b.this.f17271o.selectAll();
                return;
            }
            b.this.f17271o.setSelection(0, 0);
            b.this.f0(view);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d extends AccessibilityNodeProvider {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f17292a = new Rect();

        /* renamed from: b  reason: collision with root package name */
        private final int[] f17293b = new int[2];

        /* renamed from: c  reason: collision with root package name */
        private int f17294c = Integer.MIN_VALUE;

        d() {
        }

        private AccessibilityNodeInfo a(int i10, int i11, int i12, int i13) {
            boolean z10;
            AccessibilityNodeInfo obtain = AccessibilityNodeInfo.obtain();
            obtain.setClassName(b.class.getName());
            obtain.setPackageName(b.this.getContext().getPackageName());
            obtain.setSource(b.this);
            if (g()) {
                obtain.addChild(b.this, 3);
            }
            obtain.addChild(b.this, 2);
            if (h()) {
                obtain.addChild(b.this, 1);
            }
            obtain.setParent((View) b.this.getParentForAccessibility());
            obtain.setEnabled(b.this.isEnabled());
            obtain.setScrollable(true);
            if (this.f17294c == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            obtain.setAccessibilityFocused(z10);
            Rect rect = this.f17292a;
            rect.set(i10, i11, i12, i13);
            obtain.setBoundsInParent(rect);
            obtain.setVisibleToUser(true);
            int[] iArr = this.f17293b;
            b.this.getLocationOnScreen(iArr);
            rect.offset(iArr[0], iArr[1]);
            obtain.setBoundsInScreen(rect);
            if (this.f17294c != -1) {
                obtain.addAction(64);
            }
            if (this.f17294c == -1) {
                obtain.addAction(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            }
            if (b.this.isEnabled()) {
                if (b.this.getWrapSelectorWheel() || b.this.getValue() < b.this.getMaxValue()) {
                    obtain.addAction(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_FORWARD);
                    obtain.addAction(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_DOWN);
                }
                if (b.this.getWrapSelectorWheel() || b.this.getValue() > b.this.getMinValue()) {
                    obtain.addAction(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_BACKWARD);
                    obtain.addAction(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_UP);
                }
            }
            return obtain;
        }

        private AccessibilityNodeInfo b(int i10, String str, int i11, int i12, int i13, int i14) {
            boolean z10;
            AccessibilityNodeInfo obtain = AccessibilityNodeInfo.obtain();
            obtain.setClassName(Button.class.getName());
            obtain.setPackageName(b.this.getContext().getPackageName());
            obtain.setSource(b.this, i10);
            obtain.setParent(b.this);
            obtain.setText(str);
            obtain.setClickable(true);
            obtain.setLongClickable(true);
            obtain.setEnabled(b.this.isEnabled());
            if (this.f17294c == i10) {
                z10 = true;
            } else {
                z10 = false;
            }
            obtain.setAccessibilityFocused(z10);
            Rect rect = this.f17292a;
            rect.set(i11, i12, i13, i14);
            obtain.setVisibleToUser(true);
            obtain.setBoundsInParent(rect);
            int[] iArr = this.f17293b;
            b.this.getLocationOnScreen(iArr);
            rect.offset(iArr[0], iArr[1]);
            obtain.setBoundsInScreen(rect);
            if (this.f17294c != i10) {
                obtain.addAction(64);
            }
            if (this.f17294c == i10) {
                obtain.addAction(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            }
            if (b.this.isEnabled()) {
                obtain.addAction(16);
            }
            return obtain;
        }

        private AccessibilityNodeInfo c(int i10, int i11, int i12, int i13) {
            boolean z10;
            AccessibilityNodeInfo createAccessibilityNodeInfo = b.this.f17271o.createAccessibilityNodeInfo();
            createAccessibilityNodeInfo.setSource(b.this, 2);
            if (this.f17294c == 2) {
                z10 = true;
            } else {
                z10 = false;
            }
            createAccessibilityNodeInfo.setAccessibilityFocused(z10);
            if (this.f17294c != 2) {
                createAccessibilityNodeInfo.addAction(64);
            }
            if (this.f17294c == 2) {
                createAccessibilityNodeInfo.addAction(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            }
            Rect rect = this.f17292a;
            rect.set(i10, i11, i12, i13);
            createAccessibilityNodeInfo.setVisibleToUser(true);
            createAccessibilityNodeInfo.setBoundsInParent(rect);
            int[] iArr = this.f17293b;
            b.this.getLocationOnScreen(iArr);
            rect.offset(iArr[0], iArr[1]);
            createAccessibilityNodeInfo.setBoundsInScreen(rect);
            return createAccessibilityNodeInfo;
        }

        private void d(String str, int i10, List list) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        String e10 = e();
                        if (!TextUtils.isEmpty(e10) && e10.toString().toLowerCase().contains(str)) {
                            list.add(createAccessibilityNodeInfo(3));
                            return;
                        }
                        return;
                    }
                    return;
                }
                Editable text = b.this.f17271o.getText();
                if (!TextUtils.isEmpty(text) && text.toString().toLowerCase().contains(str)) {
                    list.add(createAccessibilityNodeInfo(2));
                    return;
                }
                Editable text2 = b.this.f17271o.getText();
                if (!TextUtils.isEmpty(text2) && text2.toString().toLowerCase().contains(str)) {
                    list.add(createAccessibilityNodeInfo(2));
                    return;
                }
                return;
            }
            String f10 = f();
            if (!TextUtils.isEmpty(f10) && f10.toString().toLowerCase().contains(str)) {
                list.add(createAccessibilityNodeInfo(1));
            }
        }

        private String e() {
            int i10 = b.this.A - 1;
            if (b.this.f17256c0) {
                i10 = b.this.I(i10);
            }
            if (i10 >= b.this.f17287y) {
                if (b.this.f17286x == null) {
                    return b.this.F(i10);
                }
                return b.this.f17286x[i10 - b.this.f17287y];
            }
            return null;
        }

        private String f() {
            int i10 = b.this.A + 1;
            if (b.this.f17256c0) {
                i10 = b.this.I(i10);
            }
            if (i10 <= b.this.f17288z) {
                if (b.this.f17286x == null) {
                    return b.this.F(i10);
                }
                return b.this.f17286x[i10 - b.this.f17287y];
            }
            return null;
        }

        private boolean g() {
            if (!b.this.getWrapSelectorWheel() && b.this.getValue() <= b.this.getMinValue()) {
                return false;
            }
            return true;
        }

        private boolean h() {
            if (!b.this.getWrapSelectorWheel() && b.this.getValue() >= b.this.getMaxValue()) {
                return false;
            }
            return true;
        }

        private void i(int i10, int i11, String str) {
            if (com.henninghall.date_picker.generated.a.a(b.this.getContext()).isEnabled()) {
                AccessibilityEvent obtain = AccessibilityEvent.obtain(i11);
                obtain.setClassName(Button.class.getName());
                obtain.setPackageName(b.this.getContext().getPackageName());
                obtain.getText().add(str);
                obtain.setEnabled(b.this.isEnabled());
                obtain.setSource(b.this, i10);
                b bVar = b.this;
                bVar.requestSendAccessibilityEvent(bVar, obtain);
            }
        }

        private void j(int i10) {
            if (com.henninghall.date_picker.generated.a.a(b.this.getContext()).isEnabled()) {
                AccessibilityEvent obtain = AccessibilityEvent.obtain(i10);
                b.this.f17271o.onInitializeAccessibilityEvent(obtain);
                b.this.f17271o.onPopulateAccessibilityEvent(obtain);
                obtain.setSource(b.this, 2);
                b bVar = b.this;
                bVar.requestSendAccessibilityEvent(bVar, obtain);
            }
        }

        @Override // android.view.accessibility.AccessibilityNodeProvider
        public AccessibilityNodeInfo createAccessibilityNodeInfo(int i10) {
            if (i10 != -1) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return super.createAccessibilityNodeInfo(i10);
                        }
                        return b(3, e(), b.this.getScrollX(), b.this.getScrollY(), b.this.getScrollX() + (b.this.getRight() - b.this.getLeft()), b.this.f17267k0 + b.this.f17262g0);
                    }
                    return c(b.this.getScrollX(), b.this.f17267k0 + b.this.f17262g0, b.this.getScrollX() + (b.this.getRight() - b.this.getLeft()), b.this.f17268l0 - b.this.f17262g0);
                }
                return b(1, f(), b.this.getScrollX(), b.this.f17268l0 - b.this.f17262g0, b.this.getScrollX() + (b.this.getRight() - b.this.getLeft()), b.this.getScrollY() + (b.this.getBottom() - b.this.getTop()));
            }
            return a(b.this.getScrollX(), b.this.getScrollY(), b.this.getScrollX() + (b.this.getRight() - b.this.getLeft()), b.this.getScrollY() + (b.this.getBottom() - b.this.getTop()));
        }

        @Override // android.view.accessibility.AccessibilityNodeProvider
        public List findAccessibilityNodeInfosByText(String str, int i10) {
            if (TextUtils.isEmpty(str)) {
                return Collections.EMPTY_LIST;
            }
            String lowerCase = str.toLowerCase();
            ArrayList arrayList = new ArrayList();
            if (i10 != -1) {
                if (i10 != 1 && i10 != 2 && i10 != 3) {
                    return super.findAccessibilityNodeInfosByText(str, i10);
                }
                d(lowerCase, i10, arrayList);
                return arrayList;
            }
            d(lowerCase, 3, arrayList);
            d(lowerCase, 2, arrayList);
            d(lowerCase, 1, arrayList);
            return arrayList;
        }

        public void k(int i10, int i11) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3 && g()) {
                        i(i10, i11, e());
                        return;
                    }
                    return;
                }
                j(i11);
            } else if (h()) {
                i(i10, i11, f());
            }
        }

        /* JADX WARN: Code restructure failed: missing block: B:103:0x0177, code lost:
            if (r11 != 16908346) goto L31;
         */
        @Override // android.view.accessibility.AccessibilityNodeProvider
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public boolean performAction(int r10, int r11, android.os.Bundle r12) {
            /*
                Method dump skipped, instructions count: 472
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.henninghall.date_picker.generated.b.d.performAction(int, int, android.os.Bundle):boolean");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements Runnable {
        e() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.performLongClick();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private boolean f17297d;

        f() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void b(boolean z10) {
            this.f17297d = z10;
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.A(this.f17297d);
            b bVar = b.this;
            bVar.postDelayed(this, bVar.E);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface g {
        String format(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class h extends NumberKeyListener {
        h() {
        }

        @Override // android.text.method.NumberKeyListener, android.text.InputFilter
        public CharSequence filter(CharSequence charSequence, int i10, int i11, Spanned spanned, int i12, int i13) {
            String valueOf;
            String[] strArr;
            if (b.this.P != null) {
                b.this.P.a();
            }
            if (b.this.f17286x == null) {
                CharSequence filter = super.filter(charSequence, i10, i11, spanned, i12, i13);
                if (filter == null) {
                    filter = charSequence.subSequence(i10, i11);
                }
                String str = String.valueOf(spanned.subSequence(0, i12)) + ((Object) filter) + ((Object) spanned.subSequence(i13, spanned.length()));
                if ("".equals(str)) {
                    return str;
                }
                if (b.this.H(str) > b.this.f17288z || str.length() > String.valueOf(b.this.f17288z).length()) {
                    return "";
                }
                return filter;
            }
            if (TextUtils.isEmpty(String.valueOf(charSequence.subSequence(i10, i11)))) {
                return "";
            }
            String str2 = String.valueOf(spanned.subSequence(0, i12)) + ((Object) valueOf) + ((Object) spanned.subSequence(i13, spanned.length()));
            String lowerCase = String.valueOf(str2).toLowerCase();
            for (String str3 : b.this.f17286x) {
                if (str3.toLowerCase().startsWith(lowerCase)) {
                    b.this.V(str2.length(), str3.length());
                    return str3.subSequence(i12, str3.length());
                }
            }
            return "";
        }

        @Override // android.text.method.NumberKeyListener
        protected char[] getAcceptedChars() {
            return b.f17253v0;
        }

        @Override // android.text.method.KeyListener
        public int getInputType() {
            return 1;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface i {
        void a(b bVar, int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface j {
        void a(b bVar, int i10, int i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final int f17300d = 1;

        /* renamed from: e  reason: collision with root package name */
        private final int f17301e = 2;

        /* renamed from: i  reason: collision with root package name */
        private int f17302i;

        /* renamed from: o  reason: collision with root package name */
        private int f17303o;

        k() {
        }

        public void a(int i10) {
            c();
            this.f17303o = 1;
            this.f17302i = i10;
            b.this.postDelayed(this, ViewConfiguration.getTapTimeout());
        }

        public void b(int i10) {
            c();
            this.f17303o = 2;
            this.f17302i = i10;
            b.this.post(this);
        }

        public void c() {
            this.f17303o = 0;
            this.f17302i = 0;
            b.this.removeCallbacks(this);
            if (b.this.f17270n0) {
                b.this.f17270n0 = false;
                b bVar = b.this;
                bVar.invalidate(0, bVar.f17268l0, b.this.getRight(), b.this.getBottom());
            }
            b.this.f17272o0 = false;
            if (b.this.f17272o0) {
                b bVar2 = b.this;
                bVar2.invalidate(0, 0, bVar2.getRight(), b.this.f17267k0);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = this.f17303o;
            if (i10 != 1) {
                if (i10 == 2) {
                    int i11 = this.f17302i;
                    if (i11 != 1) {
                        if (i11 == 2) {
                            if (!b.this.f17272o0) {
                                b.this.postDelayed(this, ViewConfiguration.getPressedStateDuration());
                            }
                            b bVar = b.this;
                            bVar.f17272o0 = !bVar.f17272o0;
                            b bVar2 = b.this;
                            bVar2.invalidate(0, 0, bVar2.getRight(), b.this.f17267k0);
                            return;
                        }
                        return;
                    }
                    if (!b.this.f17270n0) {
                        b.this.postDelayed(this, ViewConfiguration.getPressedStateDuration());
                    }
                    b bVar3 = b.this;
                    bVar3.f17270n0 = !bVar3.f17270n0;
                    b bVar4 = b.this;
                    bVar4.invalidate(0, bVar4.f17268l0, b.this.getRight(), b.this.getBottom());
                    return;
                }
                return;
            }
            int i12 = this.f17302i;
            if (i12 == 1) {
                b.this.f17270n0 = true;
                b bVar5 = b.this;
                bVar5.invalidate(0, bVar5.f17268l0, b.this.getRight(), b.this.getBottom());
            } else if (i12 == 2) {
                b.this.f17272o0 = true;
                b bVar6 = b.this;
                bVar6.invalidate(0, 0, bVar6.getRight(), b.this.f17267k0);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class l implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final EditText f17305d;

        /* renamed from: e  reason: collision with root package name */
        private int f17306e;

        /* renamed from: i  reason: collision with root package name */
        private int f17307i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f17308o;

        public l(EditText editText) {
            this.f17305d = editText;
        }

        public void a() {
            if (this.f17308o) {
                this.f17305d.removeCallbacks(this);
                this.f17308o = false;
            }
        }

        public void b(int i10, int i11) {
            this.f17306e = i10;
            this.f17307i = i11;
            if (!this.f17308o) {
                this.f17305d.post(this);
                this.f17308o = true;
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f17308o = false;
            this.f17305d.setSelection(this.f17306e, this.f17307i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class m implements g {

        /* renamed from: b  reason: collision with root package name */
        char f17310b;

        /* renamed from: c  reason: collision with root package name */
        Formatter f17311c;

        /* renamed from: a  reason: collision with root package name */
        final StringBuilder f17309a = new StringBuilder();

        /* renamed from: d  reason: collision with root package name */
        final Object[] f17312d = new Object[1];

        m() {
            c(Locale.getDefault());
        }

        private Formatter a(Locale locale) {
            return new Formatter(this.f17309a, locale);
        }

        private static char b(Locale locale) {
            return DecimalFormatSymbols.getInstance(locale).getZeroDigit();
        }

        private void c(Locale locale) {
            this.f17311c = a(locale);
            this.f17310b = b(locale);
        }

        @Override // com.henninghall.date_picker.generated.b.g
        public String format(int i10) {
            Locale locale = Locale.getDefault();
            if (this.f17310b != b(locale)) {
                c(locale);
            }
            this.f17312d[0] = Integer.valueOf(i10);
            StringBuilder sb2 = this.f17309a;
            sb2.delete(0, sb2.length());
            this.f17311c.format("%02d", this.f17312d);
            return this.f17311c.toString();
        }
    }

    public b(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 16844068);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void A(boolean z10) {
        if (this.f17260e0) {
            J();
            if (!P(this.M)) {
                P(this.N);
            }
            this.O = 0;
            if (z10) {
                this.M.startScroll(0, 0, 0, -this.J, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
            } else {
                this.M.startScroll(0, 0, 0, this.J, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
            }
            invalidate();
        } else if (z10) {
            a0(this.A + 1, true);
        } else {
            a0(this.A - 1, true);
        }
    }

    private void B(int[] iArr) {
        for (int length = iArr.length - 1; length > 0; length--) {
            iArr[length] = iArr[length - 1];
        }
        int i10 = iArr[1] - 1;
        if (this.f17256c0 && i10 < this.f17287y) {
            i10 = this.f17288z;
        }
        iArr[0] = i10;
        C(i10);
    }

    private void C(int i10) {
        String str;
        SparseArray sparseArray = this.F;
        if (((String) sparseArray.get(i10)) != null) {
            return;
        }
        int i11 = this.f17287y;
        if (i10 >= i11 && i10 <= this.f17288z) {
            String[] strArr = this.f17286x;
            if (strArr != null) {
                str = strArr[i10 - i11];
            } else {
                str = F(i10);
            }
        } else {
            str = "";
        }
        sparseArray.put(i10, str);
    }

    private boolean D() {
        int i10 = this.K - this.L;
        if (i10 == 0) {
            return false;
        }
        this.O = 0;
        int abs = Math.abs(i10);
        int i11 = this.J;
        if (abs > i11 / 2) {
            if (i10 > 0) {
                i11 = -i11;
            }
            i10 += i11;
        }
        this.N.startScroll(0, 0, 0, i10, 800);
        invalidate();
        return true;
    }

    private void E(int i10) {
        this.O = 0;
        if (i10 > 0) {
            this.M.fling(0, 0, 0, i10, 0, 0, 0, Integer.MAX_VALUE);
        } else {
            this.M.fling(0, Integer.MAX_VALUE, 0, i10, 0, 0, 0, Integer.MAX_VALUE);
        }
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String F(int i10) {
        g gVar = this.D;
        if (gVar != null) {
            return gVar.format(i10);
        }
        return G(i10);
    }

    private static String G(int i10) {
        return String.format(Locale.getDefault(), "%d", Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int H(String str) {
        try {
            if (this.f17286x == null) {
                return Integer.parseInt(str);
            }
            for (int i10 = 0; i10 < this.f17286x.length; i10++) {
                str = str.toLowerCase();
                if (this.f17286x[i10].toLowerCase().startsWith(str)) {
                    return this.f17287y + i10;
                }
            }
            return Integer.parseInt(str);
        } catch (NumberFormatException unused) {
            return this.f17287y;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int I(int i10) {
        int i11 = this.f17288z;
        if (i10 > i11) {
            int i12 = this.f17287y;
            return (i12 + ((i10 - i11) % (i11 - i12))) - 1;
        }
        int i13 = this.f17287y;
        if (i10 < i13) {
            return (i11 - ((i13 - i10) % (i11 - i13))) + 1;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        InputMethodManager inputMethodManager = (InputMethodManager) getContext().getSystemService(InputMethodManager.class);
        if (inputMethodManager != null && inputMethodManager.isActive(this.f17271o)) {
            inputMethodManager.hideSoftInputFromWindow(getWindowToken(), 0);
        }
        if (this.f17260e0) {
            this.f17271o.setVisibility(4);
        }
    }

    private void K(int[] iArr) {
        int i10 = 0;
        while (i10 < iArr.length - 1) {
            int i11 = i10 + 1;
            iArr[i10] = iArr[i11];
            i10 = i11;
        }
        int i12 = iArr[iArr.length - 2] + 1;
        if (this.f17256c0 && i12 > this.f17288z) {
            i12 = this.f17287y;
        }
        iArr[iArr.length - 1] = i12;
        C(i12);
    }

    private void L() {
        setVerticalFadingEdgeEnabled(true);
        setFadingEdgeLength(((getBottom() - getTop()) - this.f17284v) / 2);
    }

    private void M() {
        N();
        int[] iArr = this.G;
        int bottom = (int) ((((getBottom() - getTop()) - (iArr.length * this.f17284v)) / iArr.length) + 0.5f);
        this.f17285w = bottom;
        this.J = this.f17284v + bottom;
        int baseline = (this.f17271o.getBaseline() + this.f17271o.getTop()) - this.J;
        this.K = baseline;
        this.L = baseline;
        d0();
    }

    private void N() {
        this.F.clear();
        int[] iArr = this.G;
        int value = getValue();
        for (int i10 = 0; i10 < this.G.length; i10++) {
            int i11 = (i10 - 1) + value;
            if (this.f17256c0) {
                i11 = I(i11);
            }
            iArr[i10] = i11;
            C(i11);
        }
    }

    private int O(int i10, int i11) {
        if (i11 != -1) {
            int size = View.MeasureSpec.getSize(i10);
            int mode = View.MeasureSpec.getMode(i10);
            if (mode != Integer.MIN_VALUE) {
                if (mode != 0) {
                    if (mode != 1073741824) {
                        throw new IllegalArgumentException("Unknown measure mode: " + mode);
                    }
                } else {
                    return View.MeasureSpec.makeMeasureSpec(i11, 1073741824);
                }
            } else {
                return View.MeasureSpec.makeMeasureSpec(Math.min(size, i11), 1073741824);
            }
        }
        return i10;
    }

    private boolean P(Scroller scroller) {
        scroller.forceFinished(true);
        int finalY = scroller.getFinalY() - scroller.getCurrY();
        int i10 = this.K - ((this.L + finalY) % this.J);
        if (i10 == 0) {
            return false;
        }
        int abs = Math.abs(i10);
        int i11 = this.J;
        if (abs > i11 / 2) {
            if (i10 > 0) {
                i10 -= i11;
            } else {
                i10 += i11;
            }
        }
        scrollBy(0, finalY + i10);
        return true;
    }

    private void Q(int i10, int i11) {
        j jVar = this.B;
        if (jVar != null) {
            jVar.a(this, i10, this.A);
        }
    }

    private void R(int i10) {
        if (this.f17263h0 != i10) {
            this.f17263h0 = i10;
            i iVar = this.C;
            if (iVar != null) {
                iVar.a(this, i10);
            }
        }
    }

    private void S(Scroller scroller) {
        if (scroller == this.M) {
            D();
            d0();
            R(0);
        } else if (this.f17263h0 != 1) {
            d0();
        }
    }

    private void T() {
        e eVar = this.R;
        if (eVar == null) {
            this.R = new e();
        } else {
            removeCallbacks(eVar);
        }
        postDelayed(this.R, ViewConfiguration.getLongPressTimeout());
    }

    private void U(boolean z10, long j10) {
        f fVar = this.Q;
        if (fVar == null) {
            this.Q = new f();
        } else {
            removeCallbacks(fVar);
        }
        this.Q.b(z10);
        postDelayed(this.Q, j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V(int i10, int i11) {
        if (this.P == null) {
            this.P = new l(this.f17271o);
        }
        this.P.b(i10, i11);
    }

    private void W() {
        f fVar = this.Q;
        if (fVar != null) {
            removeCallbacks(fVar);
        }
        l lVar = this.P;
        if (lVar != null) {
            lVar.a();
        }
        e eVar = this.R;
        if (eVar != null) {
            removeCallbacks(eVar);
        }
        this.f17276q0.c();
    }

    private void X() {
        e eVar = this.R;
        if (eVar != null) {
            removeCallbacks(eVar);
        }
    }

    private void Y() {
        f fVar = this.Q;
        if (fVar != null) {
            removeCallbacks(fVar);
        }
    }

    private int Z(int i10, int i11, int i12) {
        if (i10 != -1) {
            return View.resolveSizeAndState(Math.max(i10, i11), i12, 0);
        }
        return i11;
    }

    private void a0(int i10, boolean z10) {
        int min;
        if (this.A == i10) {
            return;
        }
        if (this.f17256c0) {
            min = I(i10);
        } else {
            min = Math.min(Math.max(i10, this.f17287y), this.f17288z);
        }
        int i11 = this.A;
        this.A = min;
        if (this.f17263h0 != 2) {
            d0();
        }
        if (z10) {
            Q(i11, min);
        }
        N();
        invalidate();
    }

    private void b0() {
        InputMethodManager inputMethodManager = (InputMethodManager) getContext().getSystemService(InputMethodManager.class);
        if (inputMethodManager != null) {
            if (this.f17260e0) {
                this.f17271o.setVisibility(0);
            }
            this.f17271o.requestFocus();
            inputMethodManager.showSoftInput(this.f17271o, 0);
        }
    }

    private void c0() {
        int i10;
        if (this.f17283u) {
            String[] strArr = this.f17286x;
            int i11 = 0;
            if (strArr == null) {
                float f10 = 0.0f;
                for (int i12 = 0; i12 <= 9; i12++) {
                    float measureText = this.H.measureText(G(i12));
                    if (measureText > f10) {
                        f10 = measureText;
                    }
                }
                for (int i13 = this.f17288z; i13 > 0; i13 /= 10) {
                    i11++;
                }
                i10 = (int) (i11 * f10);
            } else {
                int length = strArr.length;
                int i14 = 0;
                while (i11 < length) {
                    float measureText2 = this.H.measureText(this.f17286x[i11]);
                    if (measureText2 > i14) {
                        i14 = (int) measureText2;
                    }
                    i11++;
                }
                i10 = i14;
            }
            int paddingLeft = i10 + this.f17271o.getPaddingLeft() + this.f17271o.getPaddingRight();
            if (this.f17281t != paddingLeft) {
                int i15 = this.f17279s;
                if (paddingLeft > i15) {
                    this.f17281t = paddingLeft;
                } else {
                    this.f17281t = i15;
                }
                invalidate();
            }
        }
    }

    private boolean d0() {
        String str;
        String[] strArr = this.f17286x;
        if (strArr == null) {
            str = F(this.A);
        } else {
            str = strArr[this.A - this.f17287y];
        }
        if (!TextUtils.isEmpty(str)) {
            Editable text = this.f17271o.getText();
            if (!str.equals(text.toString())) {
                this.f17271o.setText(str);
                if (com.henninghall.date_picker.generated.a.a(getContext()).isEnabled()) {
                    AccessibilityEvent obtain = AccessibilityEvent.obtain(16);
                    this.f17271o.onInitializeAccessibilityEvent(obtain);
                    this.f17271o.onPopulateAccessibilityEvent(obtain);
                    obtain.setFromIndex(0);
                    obtain.setRemovedCount(text.length());
                    obtain.setAddedCount(str.length());
                    obtain.setBeforeText(text);
                    obtain.setSource(this, 2);
                    requestSendAccessibilityEvent(this, obtain);
                    return true;
                }
                return true;
            }
        }
        return false;
    }

    private void e0() {
        boolean z10;
        if (this.f17288z - this.f17287y >= this.G.length && this.f17257d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f17256c0 = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void f0(View view) {
        String valueOf = String.valueOf(((TextView) view).getText());
        if (TextUtils.isEmpty(valueOf)) {
            d0();
        } else {
            a0(H(valueOf.toString()), true);
        }
    }

    public static final g getTwoDigitFormatter() {
        return f17252u0;
    }

    @Override // android.view.View
    public void computeScroll() {
        Scroller scroller = this.M;
        if (scroller.isFinished()) {
            scroller = this.N;
            if (scroller.isFinished()) {
                return;
            }
        }
        scroller.computeScrollOffset();
        int currY = scroller.getCurrY();
        if (this.O == 0) {
            this.O = scroller.getStartY();
        }
        scrollBy(0, currY - this.O);
        this.O = currY;
        if (scroller.isFinished()) {
            S(scroller);
        } else {
            invalidate();
        }
    }

    @Override // android.view.View
    protected int computeVerticalScrollExtent() {
        return getHeight();
    }

    @Override // android.view.View
    protected int computeVerticalScrollOffset() {
        return this.L;
    }

    @Override // android.view.View
    protected int computeVerticalScrollRange() {
        return ((this.f17288z - this.f17287y) + 1) * this.J;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected boolean dispatchHoverEvent(MotionEvent motionEvent) {
        int i10;
        if (!this.f17260e0) {
            return super.dispatchHoverEvent(motionEvent);
        }
        if (com.henninghall.date_picker.generated.a.a(getContext()).isEnabled()) {
            int y10 = (int) motionEvent.getY();
            if (y10 < this.f17267k0) {
                i10 = 3;
            } else if (y10 > this.f17268l0) {
                i10 = 1;
            } else {
                i10 = 2;
            }
            int actionMasked = motionEvent.getActionMasked();
            d dVar = (d) getAccessibilityNodeProvider();
            if (actionMasked != 7) {
                if (actionMasked != 9) {
                    if (actionMasked == 10) {
                        dVar.k(i10, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
                        this.f17269m0 = -1;
                        return false;
                    }
                    return false;
                }
                dVar.k(i10, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                this.f17269m0 = i10;
                dVar.performAction(i10, 64, null);
                return false;
            }
            int i11 = this.f17269m0;
            if (i11 != i10 && i11 != -1) {
                dVar.k(i11, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
                dVar.k(i10, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                this.f17269m0 = i10;
                dVar.performAction(i10, 64, null);
                return false;
            }
            return false;
        }
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        boolean z10;
        int keyCode = keyEvent.getKeyCode();
        if (keyCode != 19 && keyCode != 20) {
            if (keyCode == 23 || keyCode == 66 || keyCode == 160) {
                W();
            }
        } else if (this.f17260e0) {
            int action = keyEvent.getAction();
            if (action != 0) {
                if (action == 1 && this.f17278r0 == keyCode) {
                    this.f17278r0 = -1;
                    return true;
                }
            } else {
                if (!this.f17256c0) {
                    if (keyCode == 20) {
                    }
                }
                requestFocus();
                this.f17278r0 = keyCode;
                W();
                if (this.M.isFinished()) {
                    if (keyCode == 20) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    A(z10);
                }
                return true;
            }
        }
        return super.dispatchKeyEvent(keyEvent);
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 1 || actionMasked == 3) {
            W();
        }
        return super.dispatchTouchEvent(motionEvent);
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTrackballEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 1 || actionMasked == 3) {
            W();
        }
        return super.dispatchTrackballEvent(motionEvent);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        Drawable drawable = this.f17261f0;
        if (drawable != null && drawable.isStateful() && drawable.setState(getDrawableState())) {
            invalidateDrawable(drawable);
        }
    }

    @Override // android.view.View
    public AccessibilityNodeProvider getAccessibilityNodeProvider() {
        if (!this.f17260e0) {
            return super.getAccessibilityNodeProvider();
        }
        if (this.f17274p0 == null) {
            this.f17274p0 = new d();
        }
        return this.f17274p0;
    }

    @Override // android.view.View
    protected float getBottomFadingEdgeStrength() {
        return 0.9f;
    }

    public CharSequence getDisplayedValueForCurrentSelection() {
        return (CharSequence) this.F.get(getValue());
    }

    public String[] getDisplayedValues() {
        return this.f17286x;
    }

    public int getMaxValue() {
        return this.f17288z;
    }

    public int getMinValue() {
        return this.f17287y;
    }

    public int getSelectionDividerHeight() {
        return this.f17262g0;
    }

    @Override // android.view.View
    public int getSolidColor() {
        return this.f17258d0;
    }

    public int getTextColor() {
        return this.H.getColor();
    }

    public float getTextSize() {
        return this.H.getTextSize();
    }

    @Override // android.view.View
    protected float getTopFadingEdgeStrength() {
        return 0.9f;
    }

    public int getValue() {
        return this.A;
    }

    public boolean getWrapSelectorWheel() {
        return this.f17256c0;
    }

    @Override // android.view.ViewGroup, android.view.View
    public void jumpDrawablesToCurrentState() {
        super.jumpDrawablesToCurrentState();
        Drawable drawable = this.f17261f0;
        if (drawable != null) {
            drawable.jumpToCurrentState();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        W();
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onDraw(Canvas canvas) {
        boolean z10;
        Drawable drawable;
        Drawable drawable2;
        if (!this.f17260e0) {
            super.onDraw(canvas);
            return;
        }
        if (this.f17280s0) {
            z10 = hasFocus();
        } else {
            z10 = true;
        }
        float right = (getRight() - getLeft()) / 2;
        float f10 = this.L;
        if (z10 && (drawable2 = this.I) != null && this.f17263h0 == 0) {
            boolean z11 = this.f17272o0;
            int[] iArr = LinearLayout.PRESSED_STATE_SET;
            if (z11) {
                drawable2.setState(iArr);
                this.I.setBounds(0, 0, getRight(), this.f17267k0);
                this.I.draw(canvas);
            }
            if (this.f17270n0) {
                this.I.setState(iArr);
                this.I.setBounds(0, this.f17268l0, getRight(), getBottom());
                this.I.draw(canvas);
            }
        }
        int[] iArr2 = this.G;
        for (int i10 = 0; i10 < iArr2.length; i10++) {
            String str = (String) this.F.get(iArr2[i10]);
            if ((z10 && i10 != 1) || (i10 == 1 && this.f17271o.getVisibility() != 0)) {
                canvas.drawText(str, right, f10, this.H);
            }
            f10 += this.J;
        }
        if (z10 && (drawable = this.f17261f0) != null) {
            int i11 = this.f17267k0;
            drawable.setBounds(0, i11, getRight(), this.f17262g0 + i11);
            this.f17261f0.draw(canvas);
            int i12 = this.f17268l0;
            this.f17261f0.setBounds(0, i12 - this.f17262g0, getRight(), i12);
            this.f17261f0.draw(canvas);
        }
    }

    @Override // android.view.View
    public boolean onGenericMotionEvent(MotionEvent motionEvent) {
        if (this.f17260e0 && isEnabled()) {
            int actionMasked = motionEvent.getActionMasked();
            motionEvent.getSource();
            if (actionMasked == 8) {
                float axisValue = motionEvent.getAxisValue(9);
                if (axisValue != 0.0f) {
                    long currentTimeMillis = System.currentTimeMillis();
                    if (currentTimeMillis - this.f17282t0 < 150) {
                        return true;
                    }
                    this.f17282t0 = currentTimeMillis;
                    if (axisValue < 0.0f) {
                        if (this.f17256c0 || getValue() < getMaxValue()) {
                            A(true);
                        }
                    } else if (this.f17256c0 || getValue() > getMinValue()) {
                        A(false);
                    }
                    return true;
                }
            }
            return super.onGenericMotionEvent(motionEvent);
        }
        return super.onGenericMotionEvent(motionEvent);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent motionEvent) {
        if (!this.f17260e0 || !isEnabled() || motionEvent.getActionMasked() != 0) {
            return false;
        }
        W();
        J();
        float y10 = motionEvent.getY();
        this.S = y10;
        this.U = y10;
        this.T = motionEvent.getEventTime();
        this.f17265i0 = false;
        this.f17266j0 = false;
        float f10 = this.S;
        if (f10 < this.f17267k0) {
            if (this.f17263h0 == 0) {
                this.f17276q0.a(2);
            }
        } else if (f10 > this.f17268l0 && this.f17263h0 == 0) {
            this.f17276q0.a(1);
        }
        getParent().requestDisallowInterceptTouchEvent(true);
        if (!this.M.isFinished()) {
            this.M.forceFinished(true);
            this.N.forceFinished(true);
            S(this.M);
            R(0);
        } else if (!this.N.isFinished()) {
            this.M.forceFinished(true);
            this.N.forceFinished(true);
            S(this.N);
        } else {
            float f11 = this.S;
            if (f11 < this.f17267k0) {
                U(false, ViewConfiguration.getLongPressTimeout());
            } else if (f11 > this.f17268l0) {
                U(true, ViewConfiguration.getLongPressTimeout());
            } else {
                this.f17266j0 = true;
                T();
            }
        }
        return true;
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        if (!this.f17260e0) {
            super.onLayout(z10, i10, i11, i12, i13);
            return;
        }
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        int measuredWidth2 = this.f17271o.getMeasuredWidth();
        int measuredHeight2 = this.f17271o.getMeasuredHeight();
        int i14 = (measuredWidth - measuredWidth2) / 2;
        int i15 = (measuredHeight - measuredHeight2) / 2;
        this.f17271o.layout(i14, i15, measuredWidth2 + i14, measuredHeight2 + i15);
        if (z10) {
            M();
            L();
            int height = getHeight();
            int i16 = this.f17273p;
            int i17 = this.f17262g0;
            int i18 = ((height - i16) / 2) - i17;
            this.f17267k0 = i18;
            this.f17268l0 = i18 + (i17 * 2) + i16;
        }
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        if (!this.f17260e0) {
            super.onMeasure(i10, i11);
            return;
        }
        super.onMeasure(O(i10, this.f17281t), O(i11, this.f17277r));
        setMeasuredDimension(Z(this.f17279s, getMeasuredWidth(), i10), Z(this.f17275q, getMeasuredHeight(), i11));
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (!isEnabled() || !this.f17260e0) {
            return false;
        }
        if (this.V == null) {
            this.V = VelocityTracker.obtain();
        }
        this.V.addMovement(motionEvent);
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 1) {
            if (actionMasked == 2 && !this.f17265i0) {
                float y10 = motionEvent.getY();
                if (this.f17263h0 != 1) {
                    if (((int) Math.abs(y10 - this.S)) > this.W) {
                        W();
                        R(1);
                    }
                } else {
                    scrollBy(0, (int) (y10 - this.U));
                    invalidate();
                }
                this.U = y10;
            }
        } else {
            X();
            Y();
            this.f17276q0.c();
            VelocityTracker velocityTracker = this.V;
            velocityTracker.computeCurrentVelocity(1000, this.f17255b0);
            int yVelocity = (int) velocityTracker.getYVelocity();
            if (Math.abs(yVelocity) > this.f17254a0) {
                E(yVelocity);
                R(2);
            } else {
                int y11 = (int) motionEvent.getY();
                int abs = (int) Math.abs(y11 - this.S);
                long eventTime = motionEvent.getEventTime() - this.T;
                if (abs <= this.W && eventTime < ViewConfiguration.getTapTimeout()) {
                    if (this.f17266j0) {
                        this.f17266j0 = false;
                        performClick();
                    } else {
                        int i10 = (y11 / this.J) - 1;
                        if (i10 > 0) {
                            A(true);
                            this.f17276q0.b(1);
                        } else if (i10 < 0) {
                            A(false);
                            this.f17276q0.b(2);
                        }
                    }
                } else {
                    D();
                }
                R(0);
            }
            this.V.recycle();
            this.V = null;
        }
        return true;
    }

    @Override // android.view.View
    public boolean performClick() {
        if (!this.f17260e0) {
            return super.performClick();
        }
        if (!super.performClick()) {
            b0();
            return true;
        }
        return true;
    }

    @Override // android.view.View
    public boolean performLongClick() {
        if (!this.f17260e0) {
            return super.performLongClick();
        }
        if (!super.performLongClick()) {
            b0();
            this.f17265i0 = true;
        }
        return true;
    }

    @Override // android.view.View
    public void scrollBy(int i10, int i11) {
        int i12;
        int[] iArr = this.G;
        int i13 = this.L;
        boolean z10 = this.f17256c0;
        if (!z10 && i11 > 0 && iArr[1] <= this.f17287y) {
            this.L = this.K;
        } else if (!z10 && i11 < 0 && iArr[1] >= this.f17288z) {
            this.L = this.K;
        } else {
            this.L = i11 + i13;
            while (true) {
                int i14 = this.L;
                if (i14 - this.K <= this.f17285w) {
                    break;
                }
                this.L = i14 - this.J;
                B(iArr);
                a0(iArr[1], true);
                if (!this.f17256c0 && iArr[1] <= this.f17287y) {
                    this.L = this.K;
                }
            }
            while (true) {
                i12 = this.L;
                if (i12 - this.K >= (-this.f17285w)) {
                    break;
                }
                this.L = i12 + this.J;
                K(iArr);
                a0(iArr[1], true);
                if (!this.f17256c0 && iArr[1] >= this.f17288z) {
                    this.L = this.K;
                }
            }
            if (i13 != i12) {
                onScrollChanged(0, i12, 0, i13);
            }
        }
    }

    public void setDisplayedValues(String[] strArr) {
        if (this.f17286x == strArr) {
            return;
        }
        this.f17286x = strArr;
        if (strArr != null) {
            this.f17271o.setRawInputType(524289);
        } else {
            this.f17271o.setRawInputType(2);
        }
        d0();
        N();
        c0();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void setDividerTint(int i10) {
        this.f17261f0.setTint(i10);
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        super.setEnabled(z10);
        if (!this.f17260e0) {
            this.f17259e.setEnabled(z10);
        }
        if (!this.f17260e0) {
            this.f17264i.setEnabled(z10);
        }
        this.f17271o.setEnabled(z10);
    }

    public void setFormatter(g gVar) {
        if (gVar == this.D) {
            return;
        }
        this.D = gVar;
        N();
        d0();
    }

    public void setMaxValue(int i10) {
        if (this.f17288z == i10) {
            return;
        }
        if (i10 >= 0) {
            this.f17288z = i10;
            if (i10 < this.A) {
                this.A = i10;
            }
            e0();
            N();
            d0();
            c0();
            invalidate();
            return;
        }
        throw new IllegalArgumentException("maxValue must be >= 0");
    }

    public void setMinValue(int i10) {
        if (this.f17287y == i10) {
            return;
        }
        if (i10 >= 0) {
            this.f17287y = i10;
            if (i10 > this.A) {
                this.A = i10;
            }
            e0();
            N();
            d0();
            c0();
            invalidate();
            return;
        }
        throw new IllegalArgumentException("minValue must be >= 0");
    }

    public void setOnLongPressUpdateInterval(long j10) {
        this.E = j10;
    }

    public void setOnScrollListener(i iVar) {
        this.C = iVar;
    }

    public void setOnValueChangedListener(j jVar) {
        this.B = jVar;
    }

    public void setSelectionDividerHeight(int i10) {
        this.f17262g0 = i10;
        invalidate();
    }

    public void setTextColor(int i10) {
        this.H.setColor(i10);
        this.f17271o.setTextColor(i10);
        invalidate();
    }

    public void setTextSize(float f10) {
        this.H.setTextSize(f10);
        this.f17271o.setTextSize(0, f10);
        invalidate();
    }

    public void setValue(int i10) {
        a0(i10, false);
    }

    public void setWrapSelectorWheel(boolean z10) {
        this.f17257d = z10;
        e0();
    }

    public b(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, 0);
    }

    public b(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        b bVar;
        Context context2;
        this.f17257d = true;
        this.E = 300L;
        this.F = new SparseArray();
        this.G = new int[3];
        this.K = Integer.MIN_VALUE;
        this.f17263h0 = 0;
        this.f17278r0 = -1;
        this.f17282t0 = 0L;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, com.henninghall.date_picker.m.f17330a, i10, i11);
        int i12 = Build.VERSION.SDK_INT;
        if (i12 >= 29) {
            bVar = this;
            context2 = context;
            bVar.saveAttributeDataForStyleable(context2, com.henninghall.date_picker.m.f17330a, attributeSet, obtainStyledAttributes, i10, i11);
        } else {
            bVar = this;
            context2 = context;
        }
        int i13 = com.henninghall.date_picker.l.f17329b;
        bVar.f17260e0 = true;
        bVar.f17280s0 = obtainStyledAttributes.getBoolean(com.henninghall.date_picker.m.f17331b, false);
        bVar.f17258d0 = obtainStyledAttributes.getColor(com.henninghall.date_picker.m.f17338i, 0);
        Drawable drawable = getResources().getDrawable(com.henninghall.date_picker.j.f17318a);
        if (drawable != null) {
            drawable.setCallback(this);
            drawable.setLayoutDirection(getLayoutDirection());
            if (drawable.isStateful()) {
                drawable.setState(getDrawableState());
            }
        }
        bVar.f17261f0 = drawable;
        bVar.f17262g0 = obtainStyledAttributes.getDimensionPixelSize(com.henninghall.date_picker.m.f17336g, (int) TypedValue.applyDimension(1, 2.0f, getResources().getDisplayMetrics()));
        bVar.f17273p = obtainStyledAttributes.getDimensionPixelSize(com.henninghall.date_picker.m.f17337h, (int) TypedValue.applyDimension(1, 48.0f, getResources().getDisplayMetrics()));
        int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(com.henninghall.date_picker.m.f17334e, -1);
        bVar.f17275q = dimensionPixelSize;
        int dimensionPixelSize2 = obtainStyledAttributes.getDimensionPixelSize(com.henninghall.date_picker.m.f17332c, -1);
        bVar.f17277r = dimensionPixelSize2;
        if (dimensionPixelSize != -1 && dimensionPixelSize2 != -1 && dimensionPixelSize > dimensionPixelSize2) {
            throw new IllegalArgumentException("minHeight > maxHeight");
        }
        int dimensionPixelSize3 = obtainStyledAttributes.getDimensionPixelSize(com.henninghall.date_picker.m.f17335f, -1);
        bVar.f17279s = dimensionPixelSize3;
        int dimensionPixelSize4 = obtainStyledAttributes.getDimensionPixelSize(com.henninghall.date_picker.m.f17333d, -1);
        bVar.f17281t = dimensionPixelSize4;
        if (dimensionPixelSize3 != -1 && dimensionPixelSize4 != -1 && dimensionPixelSize3 > dimensionPixelSize4) {
            throw new IllegalArgumentException("minWidth > maxWidth");
        }
        bVar.f17283u = dimensionPixelSize4 == -1;
        bVar.I = obtainStyledAttributes.getDrawable(com.henninghall.date_picker.m.f17339j);
        obtainStyledAttributes.recycle();
        bVar.f17276q0 = new k();
        setWillNotDraw(!true);
        ((LayoutInflater) getContext().getSystemService("layout_inflater")).inflate(i13, (ViewGroup) this, true);
        new a();
        new View$OnLongClickListenerC0202b();
        bVar.f17259e = null;
        bVar.f17264i = null;
        EditText editText = (EditText) findViewById(com.henninghall.date_picker.k.f17325g);
        bVar.f17271o = editText;
        editText.setOnFocusChangeListener(new c());
        editText.setFilters(new InputFilter[]{new h()});
        editText.setRawInputType(2);
        editText.setImeOptions(6);
        ViewConfiguration viewConfiguration = ViewConfiguration.get(context2);
        bVar.W = viewConfiguration.getScaledTouchSlop();
        bVar.f17254a0 = viewConfiguration.getScaledMinimumFlingVelocity();
        bVar.f17255b0 = viewConfiguration.getScaledMaximumFlingVelocity();
        int textSize = (int) editText.getTextSize();
        bVar.f17284v = textSize;
        Paint paint = new Paint();
        paint.setAntiAlias(true);
        paint.setTextAlign(Paint.Align.CENTER);
        paint.setTextSize(textSize);
        paint.setTypeface(editText.getTypeface());
        paint.setColor(editText.getTextColors().getColorForState(LinearLayout.ENABLED_STATE_SET, -1));
        bVar.H = paint;
        bVar.M = new Scroller(getContext(), null, true);
        bVar.N = new Scroller(getContext(), new DecelerateInterpolator(2.5f));
        d0();
        if (getImportantForAccessibility() == 0) {
            setImportantForAccessibility(1);
        }
        if (i12 < 26 || getFocusable() != 16) {
            return;
        }
        setFocusable(1);
        setFocusableInTouchMode(true);
    }
}
