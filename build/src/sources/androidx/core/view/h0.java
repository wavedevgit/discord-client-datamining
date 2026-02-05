package androidx.core.view;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseArray;
import android.view.ContentInfo;
import android.view.Display;
import android.view.KeyEvent;
import android.view.OnReceiveContentListener;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityManager;
import androidx.core.view.a;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityViewCommand;
import androidx.core.view.x0;
import androidx.recyclerview.widget.RecyclerView;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h0 {

    /* renamed from: a  reason: collision with root package name */
    private static WeakHashMap f3474a = null;

    /* renamed from: b  reason: collision with root package name */
    private static Field f3475b = null;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f3476c = false;

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f3477d = {o1.e.f42103b, o1.e.f42104c, o1.e.f42115n, o1.e.f42126y, o1.e.B, o1.e.C, o1.e.D, o1.e.E, o1.e.F, o1.e.G, o1.e.f42105d, o1.e.f42106e, o1.e.f42107f, o1.e.f42108g, o1.e.f42109h, o1.e.f42110i, o1.e.f42111j, o1.e.f42112k, o1.e.f42113l, o1.e.f42114m, o1.e.f42116o, o1.e.f42117p, o1.e.f42118q, o1.e.f42119r, o1.e.f42120s, o1.e.f42121t, o1.e.f42122u, o1.e.f42123v, o1.e.f42124w, o1.e.f42125x, o1.e.f42127z, o1.e.A};

    /* renamed from: e  reason: collision with root package name */
    private static final x f3478e = new x() { // from class: androidx.core.view.g0
        @Override // androidx.core.view.x
        public final ContentInfoCompat onReceiveContent(ContentInfoCompat contentInfoCompat) {
            return h0.a(contentInfoCompat);
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private static final e f3479f = new e();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends f {
        a(int i10, Class cls, int i11) {
            super(i10, cls, i11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: h */
        public Boolean c(View view) {
            return Boolean.valueOf(k.c(view));
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: i */
        public void d(View view, Boolean bool) {
            k.f(view, bool.booleanValue());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: j */
        public boolean g(Boolean bool, Boolean bool2) {
            return !a(bool, bool2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends f {
        b(int i10, Class cls, int i11, int i12) {
            super(i10, cls, i11, i12);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: h */
        public CharSequence c(View view) {
            return k.a(view);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: i */
        public void d(View view, CharSequence charSequence) {
            k.e(view, charSequence);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: j */
        public boolean g(CharSequence charSequence, CharSequence charSequence2) {
            return !TextUtils.equals(charSequence, charSequence2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c extends f {
        c(int i10, Class cls, int i11, int i12) {
            super(i10, cls, i11, i12);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: h */
        public CharSequence c(View view) {
            return m.b(view);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: i */
        public void d(View view, CharSequence charSequence) {
            m.e(view, charSequence);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: j */
        public boolean g(CharSequence charSequence, CharSequence charSequence2) {
            return !TextUtils.equals(charSequence, charSequence2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f {
        d(int i10, Class cls, int i11) {
            super(i10, cls, i11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: h */
        public Boolean c(View view) {
            return Boolean.valueOf(k.b(view));
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: i */
        public void d(View view, Boolean bool) {
            k.d(view, bool.booleanValue());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // androidx.core.view.h0.f
        /* renamed from: j */
        public boolean g(Boolean bool, Boolean bool2) {
            return !a(bool, bool2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e implements ViewTreeObserver.OnGlobalLayoutListener, View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        private final WeakHashMap f3480d = new WeakHashMap();

        e() {
        }

        private void b(Map.Entry entry) {
            boolean z10;
            int i10;
            View view = (View) entry.getKey();
            boolean booleanValue = ((Boolean) entry.getValue()).booleanValue();
            if (view.isShown() && view.getWindowVisibility() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (booleanValue != z10) {
                if (z10) {
                    i10 = 16;
                } else {
                    i10 = 32;
                }
                h0.W(view, i10);
                entry.setValue(Boolean.valueOf(z10));
            }
        }

        private void c(View view) {
            view.getViewTreeObserver().addOnGlobalLayoutListener(this);
        }

        private void e(View view) {
            view.getViewTreeObserver().removeOnGlobalLayoutListener(this);
        }

        void a(View view) {
            boolean z10;
            WeakHashMap weakHashMap = this.f3480d;
            if (view.isShown() && view.getWindowVisibility() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            weakHashMap.put(view, Boolean.valueOf(z10));
            view.addOnAttachStateChangeListener(this);
            if (view.isAttachedToWindow()) {
                c(view);
            }
        }

        void d(View view) {
            this.f3480d.remove(view);
            view.removeOnAttachStateChangeListener(this);
            e(view);
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (Build.VERSION.SDK_INT < 28) {
                for (Map.Entry entry : this.f3480d.entrySet()) {
                    b(entry);
                }
            }
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            c(view);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        private final int f3481a;

        /* renamed from: b  reason: collision with root package name */
        private final Class f3482b;

        /* renamed from: c  reason: collision with root package name */
        private final int f3483c;

        /* renamed from: d  reason: collision with root package name */
        private final int f3484d;

        f(int i10, Class cls, int i11) {
            this(i10, cls, 0, i11);
        }

        private boolean b() {
            if (Build.VERSION.SDK_INT >= this.f3483c) {
                return true;
            }
            return false;
        }

        boolean a(Boolean bool, Boolean bool2) {
            boolean z10;
            boolean z11;
            if (bool != null && bool.booleanValue()) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (bool2 != null && bool2.booleanValue()) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10 != z11) {
                return false;
            }
            return true;
        }

        abstract Object c(View view);

        abstract void d(View view, Object obj);

        Object e(View view) {
            if (b()) {
                return c(view);
            }
            Object tag = view.getTag(this.f3481a);
            if (this.f3482b.isInstance(tag)) {
                return tag;
            }
            return null;
        }

        void f(View view, Object obj) {
            if (b()) {
                d(view, obj);
            } else if (g(e(view), obj)) {
                h0.j(view);
                view.setTag(this.f3481a, obj);
                h0.W(view, this.f3484d);
            }
        }

        abstract boolean g(Object obj, Object obj2);

        f(int i10, Class cls, int i11, int i12) {
            this.f3481a = i10;
            this.f3482b = cls;
            this.f3484d = i11;
            this.f3483c = i12;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {
        static WindowInsets a(View view, WindowInsets windowInsets) {
            if (m0.f3504b) {
                return m0.b(view, windowInsets);
            }
            return view.dispatchApplyWindowInsets(windowInsets);
        }

        static WindowInsets b(View view, WindowInsets windowInsets) {
            return view.onApplyWindowInsets(windowInsets);
        }

        static void c(View view) {
            view.requestApplyInsets();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class h {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class a implements View.OnApplyWindowInsetsListener {

            /* renamed from: a  reason: collision with root package name */
            WindowInsetsCompat f3485a = null;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ View f3486b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ v f3487c;

            a(View view, v vVar) {
                this.f3486b = view;
                this.f3487c = vVar;
            }

            @Override // android.view.View.OnApplyWindowInsetsListener
            public WindowInsets onApplyWindowInsets(View view, WindowInsets windowInsets) {
                WindowInsetsCompat D = WindowInsetsCompat.D(windowInsets, view);
                int i10 = Build.VERSION.SDK_INT;
                if (i10 < 30) {
                    h.a(windowInsets, this.f3486b);
                    if (D.equals(this.f3485a)) {
                        return this.f3487c.a(view, D).B();
                    }
                }
                this.f3485a = D;
                WindowInsetsCompat a10 = this.f3487c.a(view, D);
                if (i10 >= 30) {
                    return a10.B();
                }
                h0.k0(view);
                return a10.B();
            }
        }

        static void a(WindowInsets windowInsets, View view) {
            View.OnApplyWindowInsetsListener onApplyWindowInsetsListener = (View.OnApplyWindowInsetsListener) view.getTag(o1.e.T);
            if (onApplyWindowInsetsListener != null) {
                onApplyWindowInsetsListener.onApplyWindowInsets(view, windowInsets);
            }
        }

        static WindowInsetsCompat b(View view, WindowInsetsCompat windowInsetsCompat, Rect rect) {
            WindowInsets B = windowInsetsCompat.B();
            if (B != null) {
                return WindowInsetsCompat.D(view.computeSystemWindowInsets(B, rect), view);
            }
            rect.setEmpty();
            return windowInsetsCompat;
        }

        static ColorStateList c(View view) {
            return view.getBackgroundTintList();
        }

        static PorterDuff.Mode d(View view) {
            return view.getBackgroundTintMode();
        }

        static float e(View view) {
            return view.getElevation();
        }

        static String f(View view) {
            return view.getTransitionName();
        }

        static float g(View view) {
            return view.getTranslationZ();
        }

        static float h(View view) {
            return view.getZ();
        }

        static boolean i(View view) {
            return view.isNestedScrollingEnabled();
        }

        static void j(View view, ColorStateList colorStateList) {
            view.setBackgroundTintList(colorStateList);
        }

        static void k(View view, PorterDuff.Mode mode) {
            view.setBackgroundTintMode(mode);
        }

        static void l(View view, float f10) {
            view.setElevation(f10);
        }

        static void m(View view, boolean z10) {
            view.setNestedScrollingEnabled(z10);
        }

        static void n(View view, v vVar) {
            View.OnApplyWindowInsetsListener onApplyWindowInsetsListener;
            if (vVar != null) {
                onApplyWindowInsetsListener = new a(view, vVar);
            } else {
                onApplyWindowInsetsListener = null;
            }
            if (Build.VERSION.SDK_INT < 30) {
                view.setTag(o1.e.M, onApplyWindowInsetsListener);
            }
            if (view.getTag(o1.e.L) != null) {
                return;
            }
            if (onApplyWindowInsetsListener != null) {
                view.setOnApplyWindowInsetsListener(onApplyWindowInsetsListener);
            } else {
                view.setOnApplyWindowInsetsListener((View.OnApplyWindowInsetsListener) view.getTag(o1.e.T));
            }
        }

        static void o(View view, String str) {
            view.setTransitionName(str);
        }

        static void p(View view, float f10) {
            view.setTranslationZ(f10);
        }

        static void q(View view, float f10) {
            view.setZ(f10);
        }

        static void r(View view) {
            view.stopNestedScroll();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i {
        public static WindowInsetsCompat a(View view) {
            WindowInsets rootWindowInsets = view.getRootWindowInsets();
            if (rootWindowInsets == null) {
                return null;
            }
            WindowInsetsCompat C = WindowInsetsCompat.C(rootWindowInsets);
            C.y(C);
            C.d(view.getRootView());
            return C;
        }

        static void b(View view, int i10, int i11) {
            view.setScrollIndicators(i10, i11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class j {
        static int a(View view) {
            return view.getImportantForAutofill();
        }

        static void b(View view, int i10) {
            view.setImportantForAutofill(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class k {
        static CharSequence a(View view) {
            return view.getAccessibilityPaneTitle();
        }

        static boolean b(View view) {
            return view.isAccessibilityHeading();
        }

        static boolean c(View view) {
            return view.isScreenReaderFocusable();
        }

        static void d(View view, boolean z10) {
            view.setAccessibilityHeading(z10);
        }

        static void e(View view, CharSequence charSequence) {
            view.setAccessibilityPaneTitle(charSequence);
        }

        static void f(View view, boolean z10) {
            view.setScreenReaderFocusable(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class l {
        static View.AccessibilityDelegate a(View view) {
            return view.getAccessibilityDelegate();
        }

        static void b(View view, Context context, int[] iArr, AttributeSet attributeSet, TypedArray typedArray, int i10, int i11) {
            view.saveAttributeDataForStyleable(context, iArr, attributeSet, typedArray, i10, i11);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class m {
        static WindowInsets a(View view, WindowInsets windowInsets) {
            return view.dispatchApplyWindowInsets(windowInsets);
        }

        static CharSequence b(View view) {
            return view.getStateDescription();
        }

        public static WindowInsetsControllerCompat c(View view) {
            WindowInsetsController windowInsetsController = view.getWindowInsetsController();
            if (windowInsetsController != null) {
                return WindowInsetsControllerCompat.h(windowInsetsController);
            }
            return null;
        }

        static void d(View view, int i10) {
            view.setImportantForContentCapture(i10);
        }

        static void e(View view, CharSequence charSequence) {
            view.setStateDescription(charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class n {
        public static String[] a(View view) {
            return view.getReceiveContentMimeTypes();
        }

        public static ContentInfoCompat b(View view, ContentInfoCompat contentInfoCompat) {
            ContentInfo k10 = contentInfoCompat.k();
            ContentInfo performReceiveContent = view.performReceiveContent(k10);
            if (performReceiveContent == null) {
                return null;
            }
            if (performReceiveContent == k10) {
                return contentInfoCompat;
            }
            return ContentInfoCompat.l(performReceiveContent);
        }

        public static void c(View view, String[] strArr, w wVar) {
            if (wVar == null) {
                view.setOnReceiveContentListener(strArr, null);
            } else {
                view.setOnReceiveContentListener(strArr, new o(wVar));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class o implements OnReceiveContentListener {

        /* renamed from: a  reason: collision with root package name */
        private final w f3488a;

        o(w wVar) {
            this.f3488a = wVar;
        }

        public ContentInfo onReceiveContent(View view, ContentInfo contentInfo) {
            ContentInfoCompat l10 = ContentInfoCompat.l(contentInfo);
            ContentInfoCompat a10 = this.f3488a.a(view, l10);
            if (a10 == null) {
                return null;
            }
            if (a10 == l10) {
                return contentInfo;
            }
            return a10.k();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class p {

        /* renamed from: d  reason: collision with root package name */
        private static final ArrayList f3489d = new ArrayList();

        /* renamed from: a  reason: collision with root package name */
        private WeakHashMap f3490a = null;

        /* renamed from: b  reason: collision with root package name */
        private SparseArray f3491b = null;

        /* renamed from: c  reason: collision with root package name */
        private WeakReference f3492c = null;

        p() {
        }

        static p a(View view) {
            p pVar = (p) view.getTag(o1.e.R);
            if (pVar == null) {
                p pVar2 = new p();
                view.setTag(o1.e.R, pVar2);
                return pVar2;
            }
            return pVar;
        }

        private View c(View view, KeyEvent keyEvent) {
            WeakHashMap weakHashMap = this.f3490a;
            if (weakHashMap != null && weakHashMap.containsKey(view)) {
                if (view instanceof ViewGroup) {
                    ViewGroup viewGroup = (ViewGroup) view;
                    for (int childCount = viewGroup.getChildCount() - 1; childCount >= 0; childCount--) {
                        View c10 = c(viewGroup.getChildAt(childCount), keyEvent);
                        if (c10 != null) {
                            return c10;
                        }
                    }
                }
                if (e(view, keyEvent)) {
                    return view;
                }
            }
            return null;
        }

        private SparseArray d() {
            if (this.f3491b == null) {
                this.f3491b = new SparseArray();
            }
            return this.f3491b;
        }

        private boolean e(View view, KeyEvent keyEvent) {
            int size;
            ArrayList arrayList = (ArrayList) view.getTag(o1.e.S);
            if (arrayList != null && arrayList.size() - 1 >= 0) {
                android.support.v4.media.session.b.a(arrayList.get(size));
                throw null;
            }
            return false;
        }

        private void g() {
            WeakHashMap weakHashMap = this.f3490a;
            if (weakHashMap != null) {
                weakHashMap.clear();
            }
            ArrayList arrayList = f3489d;
            if (arrayList.isEmpty()) {
                return;
            }
            synchronized (arrayList) {
                try {
                    if (this.f3490a == null) {
                        this.f3490a = new WeakHashMap();
                    }
                    for (int size = arrayList.size() - 1; size >= 0; size--) {
                        ArrayList arrayList2 = f3489d;
                        View view = (View) ((WeakReference) arrayList2.get(size)).get();
                        if (view == null) {
                            arrayList2.remove(size);
                        } else {
                            this.f3490a.put(view, Boolean.TRUE);
                            for (ViewParent parent = view.getParent(); parent instanceof View; parent = parent.getParent()) {
                                this.f3490a.put((View) parent, Boolean.TRUE);
                            }
                        }
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        boolean b(View view, KeyEvent keyEvent) {
            if (keyEvent.getAction() == 0) {
                g();
            }
            View c10 = c(view, keyEvent);
            if (keyEvent.getAction() == 0) {
                int keyCode = keyEvent.getKeyCode();
                if (c10 != null && !KeyEvent.isModifierKey(keyCode)) {
                    d().put(keyCode, new WeakReference(c10));
                }
            }
            if (c10 != null) {
                return true;
            }
            return false;
        }

        boolean f(KeyEvent keyEvent) {
            WeakReference weakReference;
            int indexOfKey;
            WeakReference weakReference2 = this.f3492c;
            if (weakReference2 != null && weakReference2.get() == keyEvent) {
                return false;
            }
            this.f3492c = new WeakReference(keyEvent);
            SparseArray d10 = d();
            if (keyEvent.getAction() == 1 && (indexOfKey = d10.indexOfKey(keyEvent.getKeyCode())) >= 0) {
                weakReference = (WeakReference) d10.valueAt(indexOfKey);
                d10.removeAt(indexOfKey);
            } else {
                weakReference = null;
            }
            if (weakReference == null) {
                weakReference = (WeakReference) d10.get(keyEvent.getKeyCode());
            }
            if (weakReference == null) {
                return false;
            }
            View view = (View) weakReference.get();
            if (view != null && view.isAttachedToWindow()) {
                e(view, keyEvent);
            }
            return true;
        }
    }

    public static int A(View view) {
        return view.getMinimumHeight();
    }

    public static void A0(View view, int i10) {
        if (Build.VERSION.SDK_INT >= 30) {
            m.d(view, i10);
        }
    }

    public static int B(View view) {
        return view.getMinimumWidth();
    }

    public static void B0(View view, int i10) {
        view.setLabelFor(i10);
    }

    public static String[] C(View view) {
        if (Build.VERSION.SDK_INT >= 31) {
            return n.a(view);
        }
        return (String[]) view.getTag(o1.e.O);
    }

    public static void C0(View view, boolean z10) {
        h.m(view, z10);
    }

    public static int D(View view) {
        return view.getPaddingEnd();
    }

    public static void D0(View view, v vVar) {
        h.n(view, vVar);
    }

    public static int E(View view) {
        return view.getPaddingStart();
    }

    public static void E0(View view, String[] strArr, w wVar) {
        boolean z10;
        if (Build.VERSION.SDK_INT >= 31) {
            n.c(view, strArr, wVar);
            return;
        }
        strArr = (strArr == null || strArr.length == 0) ? null : null;
        boolean z11 = false;
        if (wVar != null) {
            if (strArr != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.b(z10, "When the listener is set, MIME types must also be set");
        }
        if (strArr != null) {
            int length = strArr.length;
            int i10 = 0;
            while (true) {
                if (i10 >= length) {
                    break;
                } else if (strArr[i10].startsWith("*")) {
                    z11 = true;
                    break;
                } else {
                    i10++;
                }
            }
            b2.e.b(!z11, "A MIME type set here must not start with *: " + Arrays.toString(strArr));
        }
        view.setTag(o1.e.O, strArr);
        view.setTag(o1.e.N, wVar);
    }

    public static ViewParent F(View view) {
        return view.getParentForAccessibility();
    }

    public static void F0(View view, int i10, int i11, int i12, int i13) {
        view.setPaddingRelative(i10, i11, i12, i13);
    }

    public static WindowInsetsCompat G(View view) {
        return i.a(view);
    }

    public static void G0(View view, boolean z10) {
        m0().f(view, Boolean.valueOf(z10));
    }

    public static CharSequence H(View view) {
        return (CharSequence) N0().e(view);
    }

    public static void H0(View view, int i10, int i11) {
        i.b(view, i10, i11);
    }

    public static String I(View view) {
        return h.f(view);
    }

    public static void I0(View view, CharSequence charSequence) {
        N0().f(view, charSequence);
    }

    public static float J(View view) {
        return h.g(view);
    }

    public static void J0(View view, String str) {
        h.o(view, str);
    }

    public static WindowInsetsControllerCompat K(View view) {
        if (Build.VERSION.SDK_INT >= 30) {
            return m.c(view);
        }
        for (Context context = view.getContext(); context instanceof ContextWrapper; context = ((ContextWrapper) context).getBaseContext()) {
            if (context instanceof Activity) {
                Window window = ((Activity) context).getWindow();
                if (window == null) {
                    return null;
                }
                return w0.b(window, view);
            }
        }
        return null;
    }

    public static void K0(View view, float f10) {
        h.p(view, f10);
    }

    public static int L(View view) {
        return view.getWindowSystemUiVisibility();
    }

    public static void L0(View view, x0.b bVar) {
        x0.d(view, bVar);
    }

    public static float M(View view) {
        return h.h(view);
    }

    public static void M0(View view, float f10) {
        h.q(view, f10);
    }

    public static boolean N(View view) {
        if (m(view) != null) {
            return true;
        }
        return false;
    }

    private static f N0() {
        return new c(o1.e.Q, CharSequence.class, 64, 30);
    }

    public static boolean O(View view) {
        return view.hasOnClickListeners();
    }

    public static void O0(View view) {
        h.r(view);
    }

    public static boolean P(View view) {
        return view.hasTransientState();
    }

    public static boolean Q(View view) {
        Boolean bool = (Boolean) b().e(view);
        if (bool != null && bool.booleanValue()) {
            return true;
        }
        return false;
    }

    public static boolean R(View view) {
        return view.isAttachedToWindow();
    }

    public static boolean S(View view) {
        return view.isLaidOut();
    }

    public static boolean T(View view) {
        return h.i(view);
    }

    public static boolean U(View view) {
        return view.isPaddingRelative();
    }

    public static boolean V(View view) {
        Boolean bool = (Boolean) m0().e(view);
        if (bool != null && bool.booleanValue()) {
            return true;
        }
        return false;
    }

    static void W(View view, int i10) {
        boolean z10;
        AccessibilityManager accessibilityManager = (AccessibilityManager) view.getContext().getSystemService("accessibility");
        if (accessibilityManager.isEnabled()) {
            if (o(view) != null && view.isShown() && view.getWindowVisibility() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            int i11 = 32;
            if (view.getAccessibilityLiveRegion() == 0 && !z10) {
                if (i10 == 32) {
                    AccessibilityEvent obtain = AccessibilityEvent.obtain();
                    view.onInitializeAccessibilityEvent(obtain);
                    obtain.setEventType(32);
                    obtain.setContentChangeTypes(i10);
                    obtain.setSource(view);
                    view.onPopulateAccessibilityEvent(obtain);
                    obtain.getText().add(o(view));
                    accessibilityManager.sendAccessibilityEvent(obtain);
                    return;
                } else if (view.getParent() != null) {
                    try {
                        view.getParent().notifySubtreeAccessibilityStateChanged(view, view, i10);
                        return;
                    } catch (AbstractMethodError e10) {
                        Log.e("ViewCompat", view.getParent().getClass().getSimpleName() + " does not fully implement ViewParent", e10);
                        return;
                    }
                } else {
                    return;
                }
            }
            AccessibilityEvent obtain2 = AccessibilityEvent.obtain();
            if (!z10) {
                i11 = RecyclerView.ItemAnimator.FLAG_MOVED;
            }
            obtain2.setEventType(i11);
            obtain2.setContentChangeTypes(i10);
            if (z10) {
                obtain2.getText().add(o(view));
                y0(view);
            }
            view.sendAccessibilityEventUnchecked(obtain2);
        }
    }

    public static void X(View view, int i10) {
        view.offsetLeftAndRight(i10);
    }

    public static void Y(View view, int i10) {
        view.offsetTopAndBottom(i10);
    }

    public static WindowInsetsCompat Z(View view, WindowInsetsCompat windowInsetsCompat) {
        WindowInsets B = windowInsetsCompat.B();
        if (B != null) {
            WindowInsets b10 = g.b(view, B);
            if (!b10.equals(B)) {
                return WindowInsetsCompat.D(b10, view);
            }
        }
        return windowInsetsCompat;
    }

    public static /* synthetic */ ContentInfoCompat a(ContentInfoCompat contentInfoCompat) {
        return contentInfoCompat;
    }

    public static void a0(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        view.onInitializeAccessibilityNodeInfo(accessibilityNodeInfoCompat.g1());
    }

    private static f b() {
        return new d(o1.e.J, Boolean.class, 28);
    }

    private static f b0() {
        return new b(o1.e.K, CharSequence.class, 8, 28);
    }

    public static int c(View view, CharSequence charSequence, AccessibilityViewCommand accessibilityViewCommand) {
        int q10 = q(view, charSequence);
        if (q10 != -1) {
            d(view, new AccessibilityNodeInfoCompat.a(q10, charSequence, accessibilityViewCommand));
        }
        return q10;
    }

    public static boolean c0(View view, int i10, Bundle bundle) {
        return view.performAccessibilityAction(i10, bundle);
    }

    private static void d(View view, AccessibilityNodeInfoCompat.a aVar) {
        j(view);
        i0(aVar.b(), view);
        p(view).add(aVar);
        W(view, 0);
    }

    public static ContentInfoCompat d0(View view, ContentInfoCompat contentInfoCompat) {
        if (Log.isLoggable("ViewCompat", 3)) {
            Log.d("ViewCompat", "performReceiveContent: " + contentInfoCompat + ", view=" + view.getClass().getSimpleName() + "[" + view.getId() + "]");
        }
        if (Build.VERSION.SDK_INT >= 31) {
            return n.b(view, contentInfoCompat);
        }
        w wVar = (w) view.getTag(o1.e.N);
        if (wVar != null) {
            ContentInfoCompat a10 = wVar.a(view, contentInfoCompat);
            if (a10 == null) {
                return null;
            }
            return v(view).onReceiveContent(a10);
        }
        return v(view).onReceiveContent(contentInfoCompat);
    }

    public static r0 e(View view) {
        if (f3474a == null) {
            f3474a = new WeakHashMap();
        }
        r0 r0Var = (r0) f3474a.get(view);
        if (r0Var == null) {
            r0 r0Var2 = new r0(view);
            f3474a.put(view, r0Var2);
            return r0Var2;
        }
        return r0Var;
    }

    public static void e0(View view) {
        view.postInvalidateOnAnimation();
    }

    public static WindowInsetsCompat f(View view, WindowInsetsCompat windowInsetsCompat, Rect rect) {
        return h.b(view, windowInsetsCompat, rect);
    }

    public static void f0(View view, Runnable runnable) {
        view.postOnAnimation(runnable);
    }

    public static WindowInsetsCompat g(View view, WindowInsetsCompat windowInsetsCompat) {
        WindowInsets a10;
        int i10 = Build.VERSION.SDK_INT;
        WindowInsets B = windowInsetsCompat.B();
        if (B != null) {
            if (i10 >= 30) {
                a10 = m.a(view, B);
            } else {
                a10 = g.a(view, B);
            }
            if (!a10.equals(B)) {
                return WindowInsetsCompat.D(a10, view);
            }
        }
        return windowInsetsCompat;
    }

    public static void g0(View view, Runnable runnable, long j10) {
        view.postOnAnimationDelayed(runnable, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h(View view, KeyEvent keyEvent) {
        if (Build.VERSION.SDK_INT >= 28) {
            return false;
        }
        return p.a(view).b(view, keyEvent);
    }

    public static void h0(View view, int i10) {
        i0(i10, view);
        W(view, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean i(View view, KeyEvent keyEvent) {
        if (Build.VERSION.SDK_INT >= 28) {
            return false;
        }
        return p.a(view).f(keyEvent);
    }

    private static void i0(int i10, View view) {
        List p10 = p(view);
        for (int i11 = 0; i11 < p10.size(); i11++) {
            if (((AccessibilityNodeInfoCompat.a) p10.get(i11)).b() == i10) {
                p10.remove(i11);
                return;
            }
        }
    }

    static void j(View view) {
        androidx.core.view.a l10 = l(view);
        if (l10 == null) {
            l10 = new androidx.core.view.a();
        }
        n0(view, l10);
    }

    public static void j0(View view, AccessibilityNodeInfoCompat.a aVar, CharSequence charSequence, AccessibilityViewCommand accessibilityViewCommand) {
        if (accessibilityViewCommand == null && charSequence == null) {
            h0(view, aVar.b());
        } else {
            d(view, aVar.a(charSequence, accessibilityViewCommand));
        }
    }

    public static int k() {
        return View.generateViewId();
    }

    public static void k0(View view) {
        g.c(view);
    }

    public static androidx.core.view.a l(View view) {
        View.AccessibilityDelegate m10 = m(view);
        if (m10 == null) {
            return null;
        }
        if (m10 instanceof a.C0039a) {
            return ((a.C0039a) m10).f3418a;
        }
        return new androidx.core.view.a(m10);
    }

    public static void l0(View view, Context context, int[] iArr, AttributeSet attributeSet, TypedArray typedArray, int i10, int i11) {
        if (Build.VERSION.SDK_INT >= 29) {
            l.b(view, context, iArr, attributeSet, typedArray, i10, i11);
        }
    }

    private static View.AccessibilityDelegate m(View view) {
        if (Build.VERSION.SDK_INT >= 29) {
            return l.a(view);
        }
        return n(view);
    }

    private static f m0() {
        return new a(o1.e.P, Boolean.class, 28);
    }

    private static View.AccessibilityDelegate n(View view) {
        if (f3476c) {
            return null;
        }
        if (f3475b == null) {
            try {
                Field declaredField = View.class.getDeclaredField("mAccessibilityDelegate");
                f3475b = declaredField;
                declaredField.setAccessible(true);
            } catch (Throwable unused) {
                f3476c = true;
                return null;
            }
        }
        try {
            Object obj = f3475b.get(view);
            if (!(obj instanceof View.AccessibilityDelegate)) {
                return null;
            }
            return (View.AccessibilityDelegate) obj;
        } catch (Throwable unused2) {
            f3476c = true;
            return null;
        }
    }

    public static void n0(View view, androidx.core.view.a aVar) {
        View.AccessibilityDelegate bridge;
        if (aVar == null && (m(view) instanceof a.C0039a)) {
            aVar = new androidx.core.view.a();
        }
        y0(view);
        if (aVar == null) {
            bridge = null;
        } else {
            bridge = aVar.getBridge();
        }
        view.setAccessibilityDelegate(bridge);
    }

    public static CharSequence o(View view) {
        return (CharSequence) b0().e(view);
    }

    public static void o0(View view, boolean z10) {
        b().f(view, Boolean.valueOf(z10));
    }

    private static List p(View view) {
        ArrayList arrayList = (ArrayList) view.getTag(o1.e.H);
        if (arrayList == null) {
            ArrayList arrayList2 = new ArrayList();
            view.setTag(o1.e.H, arrayList2);
            return arrayList2;
        }
        return arrayList;
    }

    public static void p0(View view, int i10) {
        view.setAccessibilityLiveRegion(i10);
    }

    private static int q(View view, CharSequence charSequence) {
        boolean z10;
        List p10 = p(view);
        for (int i10 = 0; i10 < p10.size(); i10++) {
            if (TextUtils.equals(charSequence, ((AccessibilityNodeInfoCompat.a) p10.get(i10)).c())) {
                return ((AccessibilityNodeInfoCompat.a) p10.get(i10)).b();
            }
        }
        int i11 = -1;
        int i12 = 0;
        while (true) {
            int[] iArr = f3477d;
            if (i12 >= iArr.length || i11 != -1) {
                break;
            }
            int i13 = iArr[i12];
            boolean z11 = true;
            for (int i14 = 0; i14 < p10.size(); i14++) {
                if (((AccessibilityNodeInfoCompat.a) p10.get(i14)).b() != i13) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                z11 &= z10;
            }
            if (z11) {
                i11 = i13;
            }
            i12++;
        }
        return i11;
    }

    public static void q0(View view, CharSequence charSequence) {
        b0().f(view, charSequence);
        if (charSequence != null) {
            f3479f.a(view);
        } else {
            f3479f.d(view);
        }
    }

    public static ColorStateList r(View view) {
        return h.c(view);
    }

    public static void r0(View view, Drawable drawable) {
        view.setBackground(drawable);
    }

    public static PorterDuff.Mode s(View view) {
        return h.d(view);
    }

    public static void s0(View view, ColorStateList colorStateList) {
        h.j(view, colorStateList);
    }

    public static Display t(View view) {
        return view.getDisplay();
    }

    public static void t0(View view, PorterDuff.Mode mode) {
        h.k(view, mode);
    }

    public static float u(View view) {
        return h.e(view);
    }

    public static void u0(View view, Rect rect) {
        view.setClipBounds(rect);
    }

    private static x v(View view) {
        if (view instanceof x) {
            return (x) view;
        }
        return f3478e;
    }

    public static void v0(View view, float f10) {
        h.l(view, f10);
    }

    public static boolean w(View view) {
        return view.getFitsSystemWindows();
    }

    public static void w0(View view, boolean z10) {
        view.setFitsSystemWindows(z10);
    }

    public static int x(View view) {
        return view.getImportantForAccessibility();
    }

    public static void x0(View view, int i10) {
        view.setImportantForAccessibility(i10);
    }

    public static int y(View view) {
        if (Build.VERSION.SDK_INT >= 26) {
            return j.a(view);
        }
        return 0;
    }

    private static void y0(View view) {
        if (view.getImportantForAccessibility() == 0) {
            view.setImportantForAccessibility(1);
        }
    }

    public static int z(View view) {
        return view.getLayoutDirection();
    }

    public static void z0(View view, int i10) {
        if (Build.VERSION.SDK_INT >= 26) {
            j.b(view, i10);
        }
    }
}
