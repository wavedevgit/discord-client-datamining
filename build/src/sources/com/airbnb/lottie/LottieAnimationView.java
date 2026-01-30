package com.airbnb.lottie;

import android.animation.Animator;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import androidx.annotation.NonNull;
import com.airbnb.lottie.LottieAnimationView;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.zip.ZipInputStream;
import l5.a0;
import l5.b0;
import l5.d0;
import l5.e0;
import l5.f0;
import l5.g0;
import l5.h0;
import l5.i0;
import l5.s;
import l5.x;
import l5.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class LottieAnimationView extends androidx.appcompat.widget.m {

    /* renamed from: y  reason: collision with root package name */
    private static final String f8821y = "LottieAnimationView";

    /* renamed from: z  reason: collision with root package name */
    private static final x f8822z = new x() { // from class: l5.g
        @Override // l5.x
        public final void onResult(Object obj) {
            LottieAnimationView.d((Throwable) obj);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final x f8823d;

    /* renamed from: e  reason: collision with root package name */
    private final x f8824e;

    /* renamed from: i  reason: collision with root package name */
    private x f8825i;

    /* renamed from: o  reason: collision with root package name */
    private int f8826o;

    /* renamed from: p  reason: collision with root package name */
    private final n f8827p;

    /* renamed from: q  reason: collision with root package name */
    private String f8828q;

    /* renamed from: r  reason: collision with root package name */
    private int f8829r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f8830s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f8831t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f8832u;

    /* renamed from: v  reason: collision with root package name */
    private final Set f8833v;

    /* renamed from: w  reason: collision with root package name */
    private final Set f8834w;

    /* renamed from: x  reason: collision with root package name */
    private o f8835x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.e f8836d;

        a(y5.e eVar) {
            this.f8836d = eVar;
        }

        @Override // y5.c
        public Object a(y5.b bVar) {
            return this.f8836d.a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends View.BaseSavedState {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        String f8838d;

        /* renamed from: e  reason: collision with root package name */
        int f8839e;

        /* renamed from: i  reason: collision with root package name */
        float f8840i;

        /* renamed from: o  reason: collision with root package name */
        boolean f8841o;

        /* renamed from: p  reason: collision with root package name */
        String f8842p;

        /* renamed from: q  reason: collision with root package name */
        int f8843q;

        /* renamed from: r  reason: collision with root package name */
        int f8844r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public b createFromParcel(Parcel parcel) {
                return new b(parcel, null);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* synthetic */ b(Parcel parcel, a aVar) {
            this(parcel);
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeString(this.f8838d);
            parcel.writeFloat(this.f8840i);
            parcel.writeInt(this.f8841o ? 1 : 0);
            parcel.writeString(this.f8842p);
            parcel.writeInt(this.f8843q);
            parcel.writeInt(this.f8844r);
        }

        b(Parcelable parcelable) {
            super(parcelable);
        }

        private b(Parcel parcel) {
            super(parcel);
            this.f8838d = parcel.readString();
            this.f8840i = parcel.readFloat();
            this.f8841o = parcel.readInt() == 1;
            this.f8842p = parcel.readString();
            this.f8843q = parcel.readInt();
            this.f8844r = parcel.readInt();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        SET_ANIMATION,
        SET_PROGRESS,
        SET_REPEAT_MODE,
        SET_REPEAT_COUNT,
        SET_IMAGE_ASSETS,
        PLAY_OPTION
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class d implements x {

        /* renamed from: a  reason: collision with root package name */
        private final WeakReference f8852a;

        public d(LottieAnimationView lottieAnimationView) {
            this.f8852a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.x
        /* renamed from: a */
        public void onResult(Throwable th2) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f8852a.get();
            if (lottieAnimationView == null) {
                return;
            }
            if (lottieAnimationView.f8826o != 0) {
                lottieAnimationView.setImageResource(lottieAnimationView.f8826o);
            }
            (lottieAnimationView.f8825i == null ? LottieAnimationView.f8822z : lottieAnimationView.f8825i).onResult(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e implements x {

        /* renamed from: a  reason: collision with root package name */
        private final WeakReference f8853a;

        public e(LottieAnimationView lottieAnimationView) {
            this.f8853a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.x
        /* renamed from: a */
        public void onResult(l5.i iVar) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f8853a.get();
            if (lottieAnimationView == null) {
                return;
            }
            lottieAnimationView.setComposition(iVar);
        }
    }

    public LottieAnimationView(Context context) {
        super(context);
        this.f8823d = new e(this);
        this.f8824e = new d(this);
        this.f8826o = 0;
        this.f8827p = new n();
        this.f8830s = false;
        this.f8831t = false;
        this.f8832u = true;
        this.f8833v = new HashSet();
        this.f8834w = new HashSet();
        s(null, e0.f36907a);
    }

    private void C() {
        boolean t10 = t();
        setImageDrawable(null);
        setImageDrawable(this.f8827p);
        if (t10) {
            this.f8827p.n0();
        }
    }

    private void E(float f10, boolean z10) {
        if (z10) {
            this.f8833v.add(c.SET_PROGRESS);
        }
        this.f8827p.N0(f10);
    }

    public static /* synthetic */ b0 c(LottieAnimationView lottieAnimationView, String str) {
        if (lottieAnimationView.f8832u) {
            return s.n(lottieAnimationView.getContext(), str);
        }
        return s.o(lottieAnimationView.getContext(), str, null);
    }

    public static /* synthetic */ void d(Throwable th2) {
        if (x5.j.k(th2)) {
            x5.d.d("Unable to load composition.", th2);
            return;
        }
        throw new IllegalStateException("Unable to parse composition", th2);
    }

    public static /* synthetic */ b0 e(LottieAnimationView lottieAnimationView, int i10) {
        if (lottieAnimationView.f8832u) {
            return s.w(lottieAnimationView.getContext(), i10);
        }
        return s.x(lottieAnimationView.getContext(), i10, null);
    }

    private void n() {
        o oVar = this.f8835x;
        if (oVar != null) {
            oVar.k(this.f8823d);
            this.f8835x.j(this.f8824e);
        }
    }

    private void o() {
        this.f8827p.v();
    }

    private o q(final String str) {
        if (isInEditMode()) {
            return new o(new Callable() { // from class: l5.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return LottieAnimationView.c(LottieAnimationView.this, str);
                }
            }, true);
        }
        if (this.f8832u) {
            return s.l(getContext(), str);
        }
        return s.m(getContext(), str, null);
    }

    private o r(final int i10) {
        if (isInEditMode()) {
            return new o(new Callable() { // from class: l5.h
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return LottieAnimationView.e(LottieAnimationView.this, i10);
                }
            }, true);
        }
        if (this.f8832u) {
            return s.u(getContext(), i10);
        }
        return s.v(getContext(), i10, null);
    }

    private void s(AttributeSet attributeSet, int i10) {
        String string;
        boolean z10 = false;
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, f0.f36910a, i10, 0);
        this.f8832u = obtainStyledAttributes.getBoolean(f0.f36913d, true);
        boolean hasValue = obtainStyledAttributes.hasValue(f0.f36925p);
        boolean hasValue2 = obtainStyledAttributes.hasValue(f0.f36920k);
        boolean hasValue3 = obtainStyledAttributes.hasValue(f0.f36930u);
        if (hasValue && hasValue2) {
            throw new IllegalArgumentException("lottie_rawRes and lottie_fileName cannot be used at the same time. Please use only one at once.");
        }
        if (hasValue) {
            int resourceId = obtainStyledAttributes.getResourceId(f0.f36925p, 0);
            if (resourceId != 0) {
                setAnimation(resourceId);
            }
        } else if (hasValue2) {
            String string2 = obtainStyledAttributes.getString(f0.f36920k);
            if (string2 != null) {
                setAnimation(string2);
            }
        } else if (hasValue3 && (string = obtainStyledAttributes.getString(f0.f36930u)) != null) {
            setAnimationFromUrl(string);
        }
        setFallbackResource(obtainStyledAttributes.getResourceId(f0.f36919j, 0));
        if (obtainStyledAttributes.getBoolean(f0.f36912c, false)) {
            this.f8831t = true;
        }
        if (obtainStyledAttributes.getBoolean(f0.f36923n, false)) {
            this.f8827p.P0(-1);
        }
        if (obtainStyledAttributes.hasValue(f0.f36928s)) {
            setRepeatMode(obtainStyledAttributes.getInt(f0.f36928s, 1));
        }
        if (obtainStyledAttributes.hasValue(f0.f36927r)) {
            setRepeatCount(obtainStyledAttributes.getInt(f0.f36927r, -1));
        }
        if (obtainStyledAttributes.hasValue(f0.f36929t)) {
            setSpeed(obtainStyledAttributes.getFloat(f0.f36929t, 1.0f));
        }
        if (obtainStyledAttributes.hasValue(f0.f36915f)) {
            setClipToCompositionBounds(obtainStyledAttributes.getBoolean(f0.f36915f, true));
        }
        if (obtainStyledAttributes.hasValue(f0.f36914e)) {
            setClipTextToBoundingBox(obtainStyledAttributes.getBoolean(f0.f36914e, false));
        }
        if (obtainStyledAttributes.hasValue(f0.f36917h)) {
            setDefaultFontFileExtension(obtainStyledAttributes.getString(f0.f36917h));
        }
        setImageAssetsFolder(obtainStyledAttributes.getString(f0.f36922m));
        E(obtainStyledAttributes.getFloat(f0.f36924o, 0.0f), obtainStyledAttributes.hasValue(f0.f36924o));
        p(obtainStyledAttributes.getBoolean(f0.f36918i, false));
        if (obtainStyledAttributes.hasValue(f0.f36916g)) {
            k(new q5.e("**"), a0.K, new y5.c(new h0(g.a.a(getContext(), obtainStyledAttributes.getResourceId(f0.f36916g, -1)).getDefaultColor())));
        }
        if (obtainStyledAttributes.hasValue(f0.f36926q)) {
            int i11 = f0.f36926q;
            g0 g0Var = g0.AUTOMATIC;
            int i12 = obtainStyledAttributes.getInt(i11, g0Var.ordinal());
            if (i12 >= g0.values().length) {
                i12 = g0Var.ordinal();
            }
            setRenderMode(g0.values()[i12]);
        }
        if (obtainStyledAttributes.hasValue(f0.f36911b)) {
            int i13 = f0.f36911b;
            l5.a aVar = l5.a.AUTOMATIC;
            int i14 = obtainStyledAttributes.getInt(i13, aVar.ordinal());
            if (i14 >= g0.values().length) {
                i14 = aVar.ordinal();
            }
            setAsyncUpdates(l5.a.values()[i14]);
        }
        setIgnoreDisabledSystemAnimations(obtainStyledAttributes.getBoolean(f0.f36921l, false));
        if (obtainStyledAttributes.hasValue(f0.f36931v)) {
            setUseCompositionFrameRate(obtainStyledAttributes.getBoolean(f0.f36931v, false));
        }
        obtainStyledAttributes.recycle();
        n nVar = this.f8827p;
        if (x5.j.f(getContext()) != 0.0f) {
            z10 = true;
        }
        nVar.T0(Boolean.valueOf(z10));
    }

    private void setCompositionTask(o oVar) {
        b0 e10 = oVar.e();
        n nVar = this.f8827p;
        if (e10 != null && nVar == getDrawable() && nVar.K() == e10.b()) {
            return;
        }
        this.f8833v.add(c.SET_ANIMATION);
        o();
        n();
        this.f8835x = oVar.d(this.f8823d).c(this.f8824e);
    }

    public void A(String str, String str2) {
        y(new ByteArrayInputStream(str.getBytes()), str2);
    }

    public void B(String str, String str2) {
        setCompositionTask(s.z(getContext(), str, str2));
    }

    public void D(int i10, int i11) {
        this.f8827p.G0(i10, i11);
    }

    public l5.a getAsyncUpdates() {
        return this.f8827p.F();
    }

    public boolean getAsyncUpdatesEnabled() {
        return this.f8827p.G();
    }

    public boolean getClipTextToBoundingBox() {
        return this.f8827p.I();
    }

    public boolean getClipToCompositionBounds() {
        return this.f8827p.J();
    }

    public l5.i getComposition() {
        Drawable drawable = getDrawable();
        n nVar = this.f8827p;
        if (drawable == nVar) {
            return nVar.K();
        }
        return null;
    }

    public long getDuration() {
        l5.i composition = getComposition();
        if (composition != null) {
            return composition.d();
        }
        return 0L;
    }

    public int getFrame() {
        return this.f8827p.N();
    }

    public String getImageAssetsFolder() {
        return this.f8827p.P();
    }

    public boolean getMaintainOriginalImageBounds() {
        return this.f8827p.R();
    }

    public float getMaxFrame() {
        return this.f8827p.T();
    }

    public float getMinFrame() {
        return this.f8827p.U();
    }

    public d0 getPerformanceTracker() {
        return this.f8827p.V();
    }

    public float getProgress() {
        return this.f8827p.W();
    }

    public g0 getRenderMode() {
        return this.f8827p.X();
    }

    public int getRepeatCount() {
        return this.f8827p.Y();
    }

    public int getRepeatMode() {
        return this.f8827p.Z();
    }

    public float getSpeed() {
        return this.f8827p.a0();
    }

    public void i(Animator.AnimatorListener animatorListener) {
        this.f8827p.q(animatorListener);
    }

    @Override // android.view.View
    public void invalidate() {
        super.invalidate();
        Drawable drawable = getDrawable();
        if ((drawable instanceof n) && ((n) drawable).X() == g0.SOFTWARE) {
            this.f8827p.invalidateSelf();
        }
    }

    @Override // android.widget.ImageView, android.view.View, android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        Drawable drawable2 = getDrawable();
        n nVar = this.f8827p;
        if (drawable2 == nVar) {
            super.invalidateDrawable(nVar);
        } else {
            super.invalidateDrawable(drawable);
        }
    }

    public boolean j(z zVar) {
        l5.i composition = getComposition();
        if (composition != null) {
            zVar.a(composition);
        }
        return this.f8834w.add(zVar);
    }

    public void k(q5.e eVar, Object obj, y5.c cVar) {
        this.f8827p.r(eVar, obj, cVar);
    }

    public void l(q5.e eVar, Object obj, y5.e eVar2) {
        this.f8827p.r(eVar, obj, new a(eVar2));
    }

    public void m() {
        this.f8831t = false;
        this.f8833v.add(c.PLAY_OPTION);
        this.f8827p.u();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (!isInEditMode() && this.f8831t) {
            this.f8827p.i0();
        }
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        int i10;
        if (!(parcelable instanceof b)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        b bVar = (b) parcelable;
        super.onRestoreInstanceState(bVar.getSuperState());
        this.f8828q = bVar.f8838d;
        Set set = this.f8833v;
        c cVar = c.SET_ANIMATION;
        if (!set.contains(cVar) && !TextUtils.isEmpty(this.f8828q)) {
            setAnimation(this.f8828q);
        }
        this.f8829r = bVar.f8839e;
        if (!this.f8833v.contains(cVar) && (i10 = this.f8829r) != 0) {
            setAnimation(i10);
        }
        if (!this.f8833v.contains(c.SET_PROGRESS)) {
            E(bVar.f8840i, false);
        }
        if (!this.f8833v.contains(c.PLAY_OPTION) && bVar.f8841o) {
            playAnimation();
        }
        if (!this.f8833v.contains(c.SET_IMAGE_ASSETS)) {
            setImageAssetsFolder(bVar.f8842p);
        }
        if (!this.f8833v.contains(c.SET_REPEAT_MODE)) {
            setRepeatMode(bVar.f8843q);
        }
        if (!this.f8833v.contains(c.SET_REPEAT_COUNT)) {
            setRepeatCount(bVar.f8844r);
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        b bVar = new b(super.onSaveInstanceState());
        bVar.f8838d = this.f8828q;
        bVar.f8839e = this.f8829r;
        bVar.f8840i = this.f8827p.W();
        bVar.f8841o = this.f8827p.f0();
        bVar.f8842p = this.f8827p.P();
        bVar.f8843q = this.f8827p.Z();
        bVar.f8844r = this.f8827p.Y();
        return bVar;
    }

    public void p(boolean z10) {
        this.f8827p.A(z10);
    }

    public void pauseAnimation() {
        this.f8831t = false;
        this.f8827p.h0();
    }

    public void playAnimation() {
        this.f8833v.add(c.PLAY_OPTION);
        this.f8827p.i0();
    }

    public void setAnimation(int i10) {
        this.f8829r = i10;
        this.f8828q = null;
        setCompositionTask(r(i10));
    }

    @Deprecated
    public void setAnimationFromJson(String str) {
        A(str, null);
    }

    public void setAnimationFromUrl(String str) {
        o z10;
        if (this.f8832u) {
            z10 = s.y(getContext(), str);
        } else {
            z10 = s.z(getContext(), str, null);
        }
        setCompositionTask(z10);
    }

    public void setApplyingOpacityToLayersEnabled(boolean z10) {
        this.f8827p.q0(z10);
    }

    public void setAsyncUpdates(l5.a aVar) {
        this.f8827p.r0(aVar);
    }

    public void setCacheComposition(boolean z10) {
        this.f8832u = z10;
    }

    public void setClipTextToBoundingBox(boolean z10) {
        this.f8827p.s0(z10);
    }

    public void setClipToCompositionBounds(boolean z10) {
        this.f8827p.t0(z10);
    }

    public void setComposition(@NonNull l5.i iVar) {
        if (l5.e.f36897a) {
            String str = f8821y;
            Log.v(str, "Set Composition \n" + iVar);
        }
        this.f8827p.setCallback(this);
        this.f8830s = true;
        boolean u02 = this.f8827p.u0(iVar);
        if (this.f8831t) {
            this.f8827p.i0();
        }
        this.f8830s = false;
        if (getDrawable() != this.f8827p || u02) {
            if (!u02) {
                C();
            }
            onVisibilityChanged(this, getVisibility());
            requestLayout();
            for (z zVar : this.f8834w) {
                zVar.a(iVar);
            }
        }
    }

    public void setDefaultFontFileExtension(String str) {
        this.f8827p.v0(str);
    }

    public void setFailureListener(x xVar) {
        this.f8825i = xVar;
    }

    public void setFallbackResource(int i10) {
        this.f8826o = i10;
    }

    public void setFontAssetDelegate(l5.b bVar) {
        this.f8827p.w0(bVar);
    }

    public void setFontMap(Map<String, Typeface> map) {
        this.f8827p.x0(map);
    }

    public void setFrame(int i10) {
        this.f8827p.y0(i10);
    }

    public void setIgnoreDisabledSystemAnimations(boolean z10) {
        this.f8827p.z0(z10);
    }

    public void setImageAssetDelegate(l5.c cVar) {
        this.f8827p.A0(cVar);
    }

    public void setImageAssetsFolder(String str) {
        this.f8827p.B0(str);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        this.f8829r = 0;
        this.f8828q = null;
        n();
        super.setImageBitmap(bitmap);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageDrawable(Drawable drawable) {
        this.f8829r = 0;
        this.f8828q = null;
        n();
        super.setImageDrawable(drawable);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageResource(int i10) {
        this.f8829r = 0;
        this.f8828q = null;
        n();
        super.setImageResource(i10);
    }

    public void setMaintainOriginalImageBounds(boolean z10) {
        this.f8827p.C0(z10);
    }

    public void setMaxFrame(int i10) {
        this.f8827p.D0(i10);
    }

    public void setMaxProgress(float f10) {
        this.f8827p.F0(f10);
    }

    public void setMinAndMaxFrame(String str) {
        this.f8827p.H0(str);
    }

    public void setMinFrame(int i10) {
        this.f8827p.I0(i10);
    }

    public void setMinProgress(float f10) {
        this.f8827p.K0(f10);
    }

    public void setOutlineMasksAndMattes(boolean z10) {
        this.f8827p.L0(z10);
    }

    public void setPerformanceTrackingEnabled(boolean z10) {
        this.f8827p.M0(z10);
    }

    public void setProgress(float f10) {
        E(f10, true);
    }

    public void setRenderMode(g0 g0Var) {
        this.f8827p.O0(g0Var);
    }

    public void setRepeatCount(int i10) {
        this.f8833v.add(c.SET_REPEAT_COUNT);
        this.f8827p.P0(i10);
    }

    public void setRepeatMode(int i10) {
        this.f8833v.add(c.SET_REPEAT_MODE);
        this.f8827p.Q0(i10);
    }

    public void setSafeMode(boolean z10) {
        this.f8827p.R0(z10);
    }

    public void setSpeed(float f10) {
        this.f8827p.S0(f10);
    }

    public void setTextDelegate(i0 i0Var) {
        this.f8827p.U0(i0Var);
    }

    public void setUseCompositionFrameRate(boolean z10) {
        this.f8827p.V0(z10);
    }

    public boolean t() {
        return this.f8827p.e0();
    }

    public void u() {
        this.f8827p.j0();
    }

    @Override // android.view.View
    public void unscheduleDrawable(Drawable drawable) {
        n nVar;
        if (!this.f8830s && drawable == (nVar = this.f8827p) && nVar.e0()) {
            pauseAnimation();
        } else if (!this.f8830s && (drawable instanceof n)) {
            n nVar2 = (n) drawable;
            if (nVar2.e0()) {
                nVar2.h0();
            }
        }
        super.unscheduleDrawable(drawable);
    }

    public void v() {
        this.f8827p.k0();
    }

    public void w() {
        this.f8833v.add(c.PLAY_OPTION);
        this.f8827p.n0();
    }

    public void x() {
        this.f8827p.o0();
    }

    public void y(InputStream inputStream, String str) {
        setCompositionTask(s.p(inputStream, str));
    }

    public void z(ZipInputStream zipInputStream, String str) {
        setCompositionTask(s.B(zipInputStream, str));
    }

    public void setMaxFrame(String str) {
        this.f8827p.E0(str);
    }

    public void setMinFrame(String str) {
        this.f8827p.J0(str);
    }

    public void setAnimation(String str) {
        this.f8828q = str;
        this.f8829r = 0;
        setCompositionTask(q(str));
    }

    public LottieAnimationView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f8823d = new e(this);
        this.f8824e = new d(this);
        this.f8826o = 0;
        this.f8827p = new n();
        this.f8830s = false;
        this.f8831t = false;
        this.f8832u = true;
        this.f8833v = new HashSet();
        this.f8834w = new HashSet();
        s(attributeSet, e0.f36907a);
    }
}
