package com.swmansion.gesturehandler.react;

import android.annotation.TargetApi;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.DashPathEffect;
import android.graphics.Paint;
import android.graphics.PathEffect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.PaintDrawable;
import android.graphics.drawable.RippleDrawable;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.drawable.shapes.RectShape;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityNodeInfo;
import androidx.core.view.n0;
import com.facebook.react.R;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerDelegate;
import com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface;
import com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager;
import in.q;
import java.util.ArrayList;
import java.util.Iterator;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.sequences.Sequence;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = RNGestureHandlerButtonViewManager.REACT_CLASS)
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u0007\n\u0002\b\u001d\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u0000 >2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0002?@B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\u000b\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\tH\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\u0011\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u000eH\u0017¢\u0006\u0004\b\u0011\u0010\u0012J\u001f\u0010\u0015\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u0013H\u0017¢\u0006\u0004\b\u0015\u0010\u0016J\u001f\u0010\u0018\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u0017\u001a\u00020\u000eH\u0017¢\u0006\u0004\b\u0018\u0010\u0012J\u001f\u0010\u001a\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020\u000eH\u0017¢\u0006\u0004\b\u001a\u0010\u0012J\u001f\u0010\u001d\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u001c\u001a\u00020\u001bH\u0017¢\u0006\u0004\b\u001d\u0010\u001eJ\u001f\u0010 \u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u001f\u001a\u00020\u001bH\u0017¢\u0006\u0004\b \u0010\u001eJ\u001f\u0010\"\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010!\u001a\u00020\u001bH\u0017¢\u0006\u0004\b\"\u0010\u001eJ\u001f\u0010$\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010#\u001a\u00020\u001bH\u0017¢\u0006\u0004\b$\u0010\u001eJ\u001f\u0010&\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010%\u001a\u00020\u001bH\u0017¢\u0006\u0004\b&\u0010\u001eJ\u001f\u0010(\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010'\u001a\u00020\u001bH\u0017¢\u0006\u0004\b(\u0010\u001eJ!\u0010*\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\b\u0010)\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b*\u0010+J!\u0010-\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\b\u0010,\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b-\u0010.J!\u00100\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\b\u0010/\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b0\u0010+J\u001f\u00102\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u00101\u001a\u00020\u0013H\u0017¢\u0006\u0004\b2\u0010\u0016J\u001f\u00104\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u00103\u001a\u00020\u000eH\u0017¢\u0006\u0004\b4\u0010\u0012J\u001f\u00106\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u00022\u0006\u00105\u001a\u00020\u000eH\u0017¢\u0006\u0004\b6\u0010\u0012J\u0017\u00107\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u0002H\u0014¢\u0006\u0004\b7\u00108J\u0017\u0010:\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u000109H\u0014¢\u0006\u0004\b:\u0010;R\u001a\u0010<\u001a\b\u0012\u0004\u0012\u00020\u0002098\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b<\u0010=¨\u0006A"}, d2 = {"Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;", "Lcom/facebook/react/viewmanagers/RNGestureHandlerButtonManagerInterface;", "<init>", "()V", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "context", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;", "view", "", "useDrawableOnForeground", "", "setForeground", "(Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;Z)V", "", ViewProps.BACKGROUND_COLOR, "setBackgroundColor", "(Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;I)V", "useBorderlessDrawable", "setBorderless", ViewProps.ENABLED, "setEnabled", "", "borderRadius", "setBorderRadius", "(Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;F)V", "borderTopLeftRadius", "setBorderTopLeftRadius", "borderTopRightRadius", "setBorderTopRightRadius", "borderBottomLeftRadius", "setBorderBottomLeftRadius", "borderBottomRightRadius", "setBorderBottomRightRadius", ViewProps.BORDER_WIDTH, "setBorderWidth", ViewProps.BORDER_COLOR, "setBorderColor", "(Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;Ljava/lang/Integer;)V", "borderStyle", "setBorderStyle", "(Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;Ljava/lang/String;)V", "rippleColor", "setRippleColor", "rippleRadius", "setRippleRadius", "exclusive", "setExclusive", "touchSoundDisabled", "setTouchSoundDisabled", "onAfterUpdateTransaction", "(Lcom/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager$a;)V", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "mDelegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "Companion", "a", "b", "react-native-gesture-handler_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RNGestureHandlerButtonViewManager extends ViewGroupManager<a> implements RNGestureHandlerButtonManagerInterface<a> {
    @NotNull
    public static final b Companion = new b(null);
    @NotNull
    public static final String REACT_CLASS = "RNGestureHandlerButton";
    @NotNull
    private final ViewManagerDelegate<a> mDelegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends ViewGroup implements q.e {
        private static a G;
        private static a H;
        private long A;
        private int B;
        private boolean C;
        private boolean D;

        /* renamed from: d  reason: collision with root package name */
        private Integer f18077d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f18078e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f18079i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f18080o;

        /* renamed from: p  reason: collision with root package name */
        private float f18081p;

        /* renamed from: q  reason: collision with root package name */
        private float f18082q;

        /* renamed from: r  reason: collision with root package name */
        private float f18083r;

        /* renamed from: s  reason: collision with root package name */
        private float f18084s;

        /* renamed from: t  reason: collision with root package name */
        private float f18085t;

        /* renamed from: u  reason: collision with root package name */
        private float f18086u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f18087v;

        /* renamed from: w  reason: collision with root package name */
        private String f18088w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f18089x;

        /* renamed from: y  reason: collision with root package name */
        private int f18090y;

        /* renamed from: z  reason: collision with root package name */
        private boolean f18091z;
        public static final C0227a E = new C0227a(null);
        private static TypedValue F = new TypedValue();
        private static View.OnClickListener I = new View.OnClickListener() { // from class: com.swmansion.gesturehandler.react.b
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                RNGestureHandlerButtonViewManager.a.n(view);
            }
        };

        /* renamed from: com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0227a {
            public /* synthetic */ C0227a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private C0227a() {
            }
        }

        public a(Context context) {
            super(context);
            this.f18088w = "solid";
            this.f18089x = true;
            this.A = -1L;
            this.B = -1;
            setOnClickListener(I);
            setClickable(true);
            setFocusable(true);
            this.f18091z = true;
            setClipChildren(false);
        }

        private final boolean getHasBorderRadii() {
            if (this.f18081p == 0.0f && this.f18082q == 0.0f && this.f18083r == 0.0f && this.f18084s == 0.0f && this.f18085t == 0.0f) {
                return false;
            }
            return true;
        }

        private final float[] j() {
            float f10 = this.f18082q;
            float f11 = this.f18083r;
            float f12 = this.f18085t;
            float f13 = this.f18084s;
            float[] fArr = {f10, f10, f11, f11, f12, f12, f13, f13};
            ArrayList arrayList = new ArrayList(8);
            for (int i10 = 0; i10 < 8; i10++) {
                float f14 = fArr[i10];
                if (f14 == 0.0f) {
                    f14 = this.f18081p;
                }
                arrayList.add(Float.valueOf(f14));
            }
            return CollectionsKt.e1(arrayList);
        }

        private final PathEffect k() {
            String str = this.f18088w;
            if (Intrinsics.areEqual(str, "dotted")) {
                float f10 = this.f18086u;
                return new DashPathEffect(new float[]{f10, f10, f10, f10}, 0.0f);
            } else if (Intrinsics.areEqual(str, "dashed")) {
                float f11 = this.f18086u;
                float f12 = 3;
                return new DashPathEffect(new float[]{f11 * f12, f11 * f12, f11 * f12, f11 * f12}, 0.0f);
            } else {
                return null;
            }
        }

        private final Drawable l() {
            int i10;
            PaintDrawable paintDrawable = new PaintDrawable(0);
            if (getHasBorderRadii()) {
                paintDrawable.setCornerRadii(j());
            }
            if (this.f18086u > 0.0f) {
                Paint paint = paintDrawable.getPaint();
                paint.setStyle(Paint.Style.STROKE);
                paint.setStrokeWidth(this.f18086u);
                Integer num = this.f18087v;
                if (num != null) {
                    i10 = num.intValue();
                } else {
                    i10 = -16777216;
                }
                paint.setColor(i10);
                paint.setPathEffect(k());
            }
            return paintDrawable;
        }

        private final Drawable m() {
            ColorStateList colorStateList;
            ShapeDrawable shapeDrawable;
            Integer num = this.f18077d;
            if (num != null && num.intValue() == 0) {
                return null;
            }
            int[][] iArr = {new int[]{16842910}};
            Integer num2 = this.f18078e;
            Integer num3 = this.f18077d;
            if (num3 != null) {
                Intrinsics.checkNotNull(num3);
                colorStateList = new ColorStateList(iArr, new int[]{num3.intValue()});
            } else {
                getContext().getTheme().resolveAttribute(16843820, F, true);
                colorStateList = new ColorStateList(iArr, new int[]{F.data});
            }
            if (this.f18080o) {
                shapeDrawable = null;
            } else {
                shapeDrawable = new ShapeDrawable(new RectShape());
            }
            RippleDrawable rippleDrawable = new RippleDrawable(colorStateList, null, shapeDrawable);
            if (num2 != null) {
                rippleDrawable.setRadius((int) PixelUtil.toPixelFromDIP(num2.intValue()));
            }
            return rippleDrawable;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void n(View view) {
        }

        private final RNGestureHandlerRootView o() {
            RNGestureHandlerRootView rNGestureHandlerRootView = null;
            for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
                if (parent instanceof RNGestureHandlerRootView) {
                    rNGestureHandlerRootView = (RNGestureHandlerRootView) parent;
                }
            }
            return rNGestureHandlerRootView;
        }

        private final boolean p(Sequence sequence) {
            Iterator it = sequence.iterator();
            while (it.hasNext()) {
                View view = (View) it.next();
                if (view instanceof a) {
                    a aVar = (a) view;
                    if (aVar.D || aVar.isPressed()) {
                        return true;
                    }
                }
                if ((view instanceof ViewGroup) && p(n0.a((ViewGroup) view))) {
                    return true;
                }
            }
            return false;
        }

        static /* synthetic */ boolean q(a aVar, Sequence sequence, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                sequence = n0.a(aVar);
            }
            return aVar.p(sequence);
        }

        private final void r() {
            if (G == this) {
                G = null;
                H = this;
            }
        }

        private final boolean s() {
            boolean z10;
            if (q(this, null, 1, null)) {
                return false;
            }
            a aVar = G;
            if (aVar == null) {
                G = this;
                return true;
            } else if (this.f18089x) {
                if (aVar == this) {
                    return true;
                }
                return false;
            } else {
                if (aVar != null) {
                    z10 = aVar.f18089x;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    return true;
                }
                return false;
            }
        }

        private final void u(int i10, Drawable drawable, Drawable drawable2) {
            PaintDrawable paintDrawable = new PaintDrawable(i10);
            if (getHasBorderRadii()) {
                paintDrawable.setCornerRadii(j());
            }
            setBackground(new LayerDrawable(drawable2 != null ? new Drawable[]{paintDrawable, drawable2, drawable} : new Drawable[]{paintDrawable, drawable}));
        }

        @Override // in.q.e
        public boolean a() {
            return q.e.a.f(this);
        }

        @Override // in.q.e
        public boolean b(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            if (event.getAction() != 3 && event.getAction() != 1 && event.getActionMasked() != 6) {
                boolean s10 = s();
                if (s10) {
                    this.D = true;
                }
                return s10;
            }
            return false;
        }

        @Override // in.q.e
        public boolean c() {
            return q.e.a.h(this);
        }

        @Override // in.q.e
        public boolean d(View view) {
            return q.e.a.b(this, view);
        }

        @Override // android.view.ViewGroup, android.view.View
        public void dispatchDrawableHotspotChanged(float f10, float f11) {
        }

        @Override // android.view.View
        public void drawableHotspotChanged(float f10, float f11) {
            a aVar = G;
            if (aVar != null && aVar != this) {
                return;
            }
            super.drawableHotspotChanged(f10, f11);
        }

        @Override // in.q.e
        public Boolean e(in.d dVar) {
            return q.e.a.g(this, dVar);
        }

        @Override // in.q.e
        public Boolean f(View view, MotionEvent motionEvent) {
            return q.e.a.e(this, view, motionEvent);
        }

        @Override // in.q.e
        public void g(MotionEvent motionEvent) {
            q.e.a.d(this, motionEvent);
        }

        public final float getBorderBottomLeftRadius() {
            return this.f18084s;
        }

        public final float getBorderBottomRightRadius() {
            return this.f18085t;
        }

        public final Integer getBorderColor() {
            return this.f18087v;
        }

        public final float getBorderRadius() {
            return this.f18081p;
        }

        public final String getBorderStyle() {
            return this.f18088w;
        }

        public final float getBorderTopLeftRadius() {
            return this.f18082q;
        }

        public final float getBorderTopRightRadius() {
            return this.f18083r;
        }

        public final float getBorderWidth() {
            return this.f18086u;
        }

        public final boolean getExclusive() {
            return this.f18089x;
        }

        public final Integer getRippleColor() {
            return this.f18077d;
        }

        public final Integer getRippleRadius() {
            return this.f18078e;
        }

        public final boolean getUseBorderlessDrawable() {
            return this.f18080o;
        }

        public final boolean getUseDrawableOnForeground() {
            return this.f18079i;
        }

        @Override // in.q.e
        public void h(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            r();
            this.D = false;
        }

        @Override // android.view.View
        public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info) {
            Intrinsics.checkNotNullParameter(info, "info");
            super.onInitializeAccessibilityNodeInfo(info);
            Object tag = super.getTag(R.id.react_test_id);
            if (tag instanceof String) {
                info.setViewIdResourceName((String) tag);
            }
        }

        @Override // android.view.ViewGroup
        public boolean onInterceptTouchEvent(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            if (super.onInterceptTouchEvent(event)) {
                return true;
            }
            onTouchEvent(event);
            return isPressed();
        }

        @Override // android.view.View, android.view.KeyEvent.Callback
        public boolean onKeyUp(int i10, KeyEvent keyEvent) {
            this.C = true;
            return super.onKeyUp(i10, keyEvent);
        }

        @Override // android.view.ViewGroup, android.view.View
        protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        }

        @Override // android.view.View
        public boolean onTouchEvent(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            long eventTime = event.getEventTime();
            int action = event.getAction();
            a aVar = G;
            if (aVar != null && aVar != this) {
                Intrinsics.checkNotNull(aVar);
                if (aVar.f18089x) {
                    if (isPressed()) {
                        setPressed(false);
                    }
                    this.A = eventTime;
                    this.B = action;
                    return false;
                }
            }
            if (event.getAction() == 3) {
                r();
            }
            if (this.A == eventTime && this.B == action && action != 3) {
                return false;
            }
            this.A = eventTime;
            this.B = action;
            return super.onTouchEvent(event);
        }

        @Override // android.view.View
        public boolean performClick() {
            if (!q(this, null, 1, null)) {
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                if (com.swmansion.gesturehandler.react.a.d(context)) {
                    RNGestureHandlerRootView o10 = o();
                    if (o10 != null) {
                        o10.activateNativeHandlers(this);
                    }
                } else if (this.C) {
                    RNGestureHandlerRootView o11 = o();
                    if (o11 != null) {
                        o11.activateNativeHandlers(this);
                    }
                    this.C = false;
                }
                if (H == this) {
                    r();
                    H = null;
                    return super.performClick();
                }
            }
            return false;
        }

        @Override // android.view.View
        public void setBackgroundColor(int i10) {
            this.f18090y = i10;
            this.f18091z = true;
        }

        public final void setBorderBottomLeftRadius(float f10) {
            this.f18084s = f10 * getResources().getDisplayMetrics().density;
            this.f18091z = true;
        }

        public final void setBorderBottomRightRadius(float f10) {
            this.f18085t = f10 * getResources().getDisplayMetrics().density;
            this.f18091z = true;
        }

        public final void setBorderColor(Integer num) {
            this.f18087v = num;
            this.f18091z = true;
        }

        public final void setBorderRadius(float f10) {
            this.f18081p = f10 * getResources().getDisplayMetrics().density;
            this.f18091z = true;
        }

        public final void setBorderStyle(String str) {
            this.f18088w = str;
            this.f18091z = true;
        }

        public final void setBorderTopLeftRadius(float f10) {
            this.f18082q = f10 * getResources().getDisplayMetrics().density;
            this.f18091z = true;
        }

        public final void setBorderTopRightRadius(float f10) {
            this.f18083r = f10 * getResources().getDisplayMetrics().density;
            this.f18091z = true;
        }

        public final void setBorderWidth(float f10) {
            this.f18086u = f10 * getResources().getDisplayMetrics().density;
            this.f18091z = true;
        }

        public final void setExclusive(boolean z10) {
            this.f18089x = z10;
        }

        /* JADX WARN: Code restructure failed: missing block: B:10:0x0014, code lost:
            if (q(r3, null, 1, null) != false) goto L22;
         */
        /* JADX WARN: Code restructure failed: missing block: B:7:0x000c, code lost:
            if (r0.f18089x == true) goto L22;
         */
        @Override // android.view.View
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void setPressed(boolean r4) {
            /*
                r3 = this;
                boolean r0 = r3.f18089x
                r1 = 0
                if (r0 != 0) goto L17
                com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager$a r0 = com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager.a.G
                r2 = 1
                if (r0 == 0) goto Lf
                boolean r0 = r0.f18089x
                if (r0 != r2) goto Lf
                goto L17
            Lf:
                r0 = 0
                boolean r0 = q(r3, r0, r2, r0)
                if (r0 != 0) goto L17
                goto L18
            L17:
                r2 = r1
            L18:
                if (r4 == 0) goto L20
                com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager$a r0 = com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager.a.G
                if (r0 == r3) goto L20
                if (r2 == 0) goto L25
            L20:
                r3.D = r4
                super.setPressed(r4)
            L25:
                if (r4 != 0) goto L2d
                com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager$a r4 = com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager.a.G
                if (r4 != r3) goto L2d
                r3.D = r1
            L2d:
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager.a.setPressed(boolean):void");
        }

        public final void setRippleColor(Integer num) {
            this.f18077d = num;
            this.f18091z = true;
        }

        public final void setRippleRadius(Integer num) {
            this.f18078e = num;
            this.f18091z = true;
        }

        public final void setTouched(boolean z10) {
            this.D = z10;
        }

        public final void setUseBorderlessDrawable(boolean z10) {
            this.f18080o = z10;
        }

        public final void setUseDrawableOnForeground(boolean z10) {
            this.f18079i = z10;
            this.f18091z = true;
        }

        public final void t() {
            if (this.f18091z) {
                this.f18091z = false;
                if (this.f18090y == 0) {
                    setBackground(null);
                }
                setForeground(null);
                Drawable m10 = m();
                Drawable l10 = l();
                if (getHasBorderRadii() && (m10 instanceof RippleDrawable)) {
                    PaintDrawable paintDrawable = new PaintDrawable(-1);
                    paintDrawable.setCornerRadii(j());
                    ((RippleDrawable) m10).setDrawableByLayerId(16908334, paintDrawable);
                }
                if (this.f18079i) {
                    setForeground(m10);
                    int i10 = this.f18090y;
                    if (i10 != 0) {
                        u(i10, l10, null);
                        return;
                    }
                    return;
                }
                int i11 = this.f18090y;
                if (i11 == 0 && this.f18077d == null) {
                    setBackground(new LayerDrawable(new Drawable[]{m10, l10}));
                } else {
                    u(i11, l10, m10);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public RNGestureHandlerButtonViewManager() {
        super(null, 1, null);
        this.mDelegate = new RNGestureHandlerButtonManagerDelegate(this);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    protected ViewManagerDelegate<a> getDelegate() {
        return this.mDelegate;
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public a createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return new a(context);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull a view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((RNGestureHandlerButtonViewManager) view);
        view.t();
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = ViewProps.BACKGROUND_COLOR)
    public void setBackgroundColor(@NotNull a view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBackgroundColor(i10);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = "borderBottomLeftRadius")
    public void setBorderBottomLeftRadius(@NotNull a view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderBottomLeftRadius(f10);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = "borderBottomRightRadius")
    public void setBorderBottomRightRadius(@NotNull a view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderBottomRightRadius(f10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = ViewProps.BORDER_COLOR)
    public void setBorderColor(@NotNull a view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderColor(num);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = "borderRadius")
    public void setBorderRadius(@NotNull a view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderRadius(f10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = "borderStyle")
    public void setBorderStyle(@NotNull a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderStyle(str);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = "borderTopLeftRadius")
    public void setBorderTopLeftRadius(@NotNull a view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderTopLeftRadius(f10);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = "borderTopRightRadius")
    public void setBorderTopRightRadius(@NotNull a view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderTopRightRadius(f10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = ViewProps.BORDER_WIDTH)
    public void setBorderWidth(@NotNull a view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBorderWidth(f10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = "borderless")
    public void setBorderless(@NotNull a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setUseBorderlessDrawable(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = ViewProps.ENABLED)
    public void setEnabled(@NotNull a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = "exclusive")
    public void setExclusive(@NotNull a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setExclusive(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = "foreground")
    @TargetApi(23)
    public void setForeground(@NotNull a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setUseDrawableOnForeground(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = "rippleColor")
    public void setRippleColor(@NotNull a view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setRippleColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = "rippleRadius")
    public void setRippleRadius(@NotNull a view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setRippleRadius(Integer.valueOf(i10));
    }

    @Override // com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface
    @ReactProp(name = "touchSoundDisabled")
    public void setTouchSoundDisabled(@NotNull a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSoundEffectsEnabled(!z10);
    }
}
