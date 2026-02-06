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
    private static final String f7702y = "LottieAnimationView";

    /* renamed from: z  reason: collision with root package name */
    private static final x f7703z = new x() { // from class: l5.g
        @Override // l5.x
        public final void onResult(Object obj) {
            LottieAnimationView.d((Throwable) obj);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final x f7704d;

    /* renamed from: e  reason: collision with root package name */
    private final x f7705e;

    /* renamed from: i  reason: collision with root package name */
    private x f7706i;

    /* renamed from: o  reason: collision with root package name */
    private int f7707o;

    /* renamed from: p  reason: collision with root package name */
    private final n f7708p;

    /* renamed from: q  reason: collision with root package name */
    private String f7709q;

    /* renamed from: r  reason: collision with root package name */
    private int f7710r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f7711s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f7712t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f7713u;

    /* renamed from: v  reason: collision with root package name */
    private final Set f7714v;

    /* renamed from: w  reason: collision with root package name */
    private final Set f7715w;

    /* renamed from: x  reason: collision with root package name */
    private o f7716x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.e f7717d;

        a(y5.e eVar) {
            this.f7717d = eVar;
        }

        @Override // y5.c
        public Object a(y5.b bVar) {
            return this.f7717d.a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends View.BaseSavedState {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        String f7719d;

        /* renamed from: e  reason: collision with root package name */
        int f7720e;

        /* renamed from: i  reason: collision with root package name */
        float f7721i;

        /* renamed from: o  reason: collision with root package name */
        boolean f7722o;

        /* renamed from: p  reason: collision with root package name */
        String f7723p;

        /* renamed from: q  reason: collision with root package name */
        int f7724q;

        /* renamed from: r  reason: collision with root package name */
        int f7725r;

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
            parcel.writeString(this.f7719d);
            parcel.writeFloat(this.f7721i);
            parcel.writeInt(this.f7722o ? 1 : 0);
            parcel.writeString(this.f7723p);
            parcel.writeInt(this.f7724q);
            parcel.writeInt(this.f7725r);
        }

        b(Parcelable parcelable) {
            super(parcelable);
        }

        private b(Parcel parcel) {
            super(parcel);
            this.f7719d = parcel.readString();
            this.f7721i = parcel.readFloat();
            this.f7722o = parcel.readInt() == 1;
            this.f7723p = parcel.readString();
            this.f7724q = parcel.readInt();
            this.f7725r = parcel.readInt();
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
        private final WeakReference f7733a;

        public d(LottieAnimationView lottieAnimationView) {
            this.f7733a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.x
        /* renamed from: a */
        public void onResult(Throwable th2) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f7733a.get();
            if (lottieAnimationView == null) {
                return;
            }
            if (lottieAnimationView.f7707o != 0) {
                lottieAnimationView.setImageResource(lottieAnimationView.f7707o);
            }
            (lottieAnimationView.f7706i == null ? LottieAnimationView.f7703z : lottieAnimationView.f7706i).onResult(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e implements x {

        /* renamed from: a  reason: collision with root package name */
        private final WeakReference f7734a;

        public e(LottieAnimationView lottieAnimationView) {
            this.f7734a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.x
        /* renamed from: a */
        public void onResult(l5.i iVar) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f7734a.get();
            if (lottieAnimationView == null) {
                return;
            }
            lottieAnimationView.setComposition(iVar);
        }
    }

    public LottieAnimationView(Context context) {
        super(context);
        this.f7704d = new e(this);
        this.f7705e = new d(this);
        this.f7707o = 0;
        this.f7708p = new n();
        this.f7711s = false;
        this.f7712t = false;
        this.f7713u = true;
        this.f7714v = new HashSet();
        this.f7715w = new HashSet();
        s(null, e0.f35810a);
    }

    private void C() {
        boolean t10 = t();
        setImageDrawable(null);
        setImageDrawable(this.f7708p);
        if (t10) {
            this.f7708p.n0();
        }
    }

    private void E(float f10, boolean z10) {
        if (z10) {
            this.f7714v.add(c.SET_PROGRESS);
        }
        this.f7708p.N0(f10);
    }

    public static /* synthetic */ b0 c(LottieAnimationView lottieAnimationView, String str) {
        if (lottieAnimationView.f7713u) {
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
        if (lottieAnimationView.f7713u) {
            return s.w(lottieAnimationView.getContext(), i10);
        }
        return s.x(lottieAnimationView.getContext(), i10, null);
    }

    private void n() {
        o oVar = this.f7716x;
        if (oVar != null) {
            oVar.k(this.f7704d);
            this.f7716x.j(this.f7705e);
        }
    }

    private void o() {
        this.f7708p.v();
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
        if (this.f7713u) {
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
        if (this.f7713u) {
            return s.u(getContext(), i10);
        }
        return s.v(getContext(), i10, null);
    }

    private void s(AttributeSet attributeSet, int i10) {
        String string;
        boolean z10 = false;
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, f0.f35813a, i10, 0);
        this.f7713u = obtainStyledAttributes.getBoolean(f0.f35816d, true);
        boolean hasValue = obtainStyledAttributes.hasValue(f0.f35828p);
        boolean hasValue2 = obtainStyledAttributes.hasValue(f0.f35823k);
        boolean hasValue3 = obtainStyledAttributes.hasValue(f0.f35833u);
        if (hasValue && hasValue2) {
            throw new IllegalArgumentException("lottie_rawRes and lottie_fileName cannot be used at the same time. Please use only one at once.");
        }
        if (hasValue) {
            int resourceId = obtainStyledAttributes.getResourceId(f0.f35828p, 0);
            if (resourceId != 0) {
                setAnimation(resourceId);
            }
        } else if (hasValue2) {
            String string2 = obtainStyledAttributes.getString(f0.f35823k);
            if (string2 != null) {
                setAnimation(string2);
            }
        } else if (hasValue3 && (string = obtainStyledAttributes.getString(f0.f35833u)) != null) {
            setAnimationFromUrl(string);
        }
        setFallbackResource(obtainStyledAttributes.getResourceId(f0.f35822j, 0));
        if (obtainStyledAttributes.getBoolean(f0.f35815c, false)) {
            this.f7712t = true;
        }
        if (obtainStyledAttributes.getBoolean(f0.f35826n, false)) {
            this.f7708p.P0(-1);
        }
        if (obtainStyledAttributes.hasValue(f0.f35831s)) {
            setRepeatMode(obtainStyledAttributes.getInt(f0.f35831s, 1));
        }
        if (obtainStyledAttributes.hasValue(f0.f35830r)) {
            setRepeatCount(obtainStyledAttributes.getInt(f0.f35830r, -1));
        }
        if (obtainStyledAttributes.hasValue(f0.f35832t)) {
            setSpeed(obtainStyledAttributes.getFloat(f0.f35832t, 1.0f));
        }
        if (obtainStyledAttributes.hasValue(f0.f35818f)) {
            setClipToCompositionBounds(obtainStyledAttributes.getBoolean(f0.f35818f, true));
        }
        if (obtainStyledAttributes.hasValue(f0.f35817e)) {
            setClipTextToBoundingBox(obtainStyledAttributes.getBoolean(f0.f35817e, false));
        }
        if (obtainStyledAttributes.hasValue(f0.f35820h)) {
            setDefaultFontFileExtension(obtainStyledAttributes.getString(f0.f35820h));
        }
        setImageAssetsFolder(obtainStyledAttributes.getString(f0.f35825m));
        E(obtainStyledAttributes.getFloat(f0.f35827o, 0.0f), obtainStyledAttributes.hasValue(f0.f35827o));
        p(obtainStyledAttributes.getBoolean(f0.f35821i, false));
        if (obtainStyledAttributes.hasValue(f0.f35819g)) {
            k(new q5.e("**"), a0.K, new y5.c(new h0(g.a.a(getContext(), obtainStyledAttributes.getResourceId(f0.f35819g, -1)).getDefaultColor())));
        }
        if (obtainStyledAttributes.hasValue(f0.f35829q)) {
            int i11 = f0.f35829q;
            g0 g0Var = g0.AUTOMATIC;
            int i12 = obtainStyledAttributes.getInt(i11, g0Var.ordinal());
            if (i12 >= g0.values().length) {
                i12 = g0Var.ordinal();
            }
            setRenderMode(g0.values()[i12]);
        }
        if (obtainStyledAttributes.hasValue(f0.f35814b)) {
            int i13 = f0.f35814b;
            l5.a aVar = l5.a.AUTOMATIC;
            int i14 = obtainStyledAttributes.getInt(i13, aVar.ordinal());
            if (i14 >= g0.values().length) {
                i14 = aVar.ordinal();
            }
            setAsyncUpdates(l5.a.values()[i14]);
        }
        setIgnoreDisabledSystemAnimations(obtainStyledAttributes.getBoolean(f0.f35824l, false));
        if (obtainStyledAttributes.hasValue(f0.f35834v)) {
            setUseCompositionFrameRate(obtainStyledAttributes.getBoolean(f0.f35834v, false));
        }
        obtainStyledAttributes.recycle();
        n nVar = this.f7708p;
        if (x5.j.f(getContext()) != 0.0f) {
            z10 = true;
        }
        nVar.T0(Boolean.valueOf(z10));
    }

    private void setCompositionTask(o oVar) {
        b0 e10 = oVar.e();
        n nVar = this.f7708p;
        if (e10 != null && nVar == getDrawable() && nVar.K() == e10.b()) {
            return;
        }
        this.f7714v.add(c.SET_ANIMATION);
        o();
        n();
        this.f7716x = oVar.d(this.f7704d).c(this.f7705e);
    }

    public void A(String str, String str2) {
        y(new ByteArrayInputStream(str.getBytes()), str2);
    }

    public void B(String str, String str2) {
        setCompositionTask(s.z(getContext(), str, str2));
    }

    public void D(int i10, int i11) {
        this.f7708p.G0(i10, i11);
    }

    public l5.a getAsyncUpdates() {
        return this.f7708p.F();
    }

    public boolean getAsyncUpdatesEnabled() {
        return this.f7708p.G();
    }

    public boolean getClipTextToBoundingBox() {
        return this.f7708p.I();
    }

    public boolean getClipToCompositionBounds() {
        return this.f7708p.J();
    }

    public l5.i getComposition() {
        Drawable drawable = getDrawable();
        n nVar = this.f7708p;
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
        return this.f7708p.N();
    }

    public String getImageAssetsFolder() {
        return this.f7708p.P();
    }

    public boolean getMaintainOriginalImageBounds() {
        return this.f7708p.R();
    }

    public float getMaxFrame() {
        return this.f7708p.T();
    }

    public float getMinFrame() {
        return this.f7708p.U();
    }

    public d0 getPerformanceTracker() {
        return this.f7708p.V();
    }

    public float getProgress() {
        return this.f7708p.W();
    }

    public g0 getRenderMode() {
        return this.f7708p.X();
    }

    public int getRepeatCount() {
        return this.f7708p.Y();
    }

    public int getRepeatMode() {
        return this.f7708p.Z();
    }

    public float getSpeed() {
        return this.f7708p.a0();
    }

    public void i(Animator.AnimatorListener animatorListener) {
        this.f7708p.q(animatorListener);
    }

    @Override // android.view.View
    public void invalidate() {
        super.invalidate();
        Drawable drawable = getDrawable();
        if ((drawable instanceof n) && ((n) drawable).X() == g0.SOFTWARE) {
            this.f7708p.invalidateSelf();
        }
    }

    @Override // android.widget.ImageView, android.view.View, android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        Drawable drawable2 = getDrawable();
        n nVar = this.f7708p;
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
        return this.f7715w.add(zVar);
    }

    public void k(q5.e eVar, Object obj, y5.c cVar) {
        this.f7708p.r(eVar, obj, cVar);
    }

    public void l(q5.e eVar, Object obj, y5.e eVar2) {
        this.f7708p.r(eVar, obj, new a(eVar2));
    }

    public void m() {
        this.f7712t = false;
        this.f7714v.add(c.PLAY_OPTION);
        this.f7708p.u();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (!isInEditMode() && this.f7712t) {
            this.f7708p.i0();
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
        this.f7709q = bVar.f7719d;
        Set set = this.f7714v;
        c cVar = c.SET_ANIMATION;
        if (!set.contains(cVar) && !TextUtils.isEmpty(this.f7709q)) {
            setAnimation(this.f7709q);
        }
        this.f7710r = bVar.f7720e;
        if (!this.f7714v.contains(cVar) && (i10 = this.f7710r) != 0) {
            setAnimation(i10);
        }
        if (!this.f7714v.contains(c.SET_PROGRESS)) {
            E(bVar.f7721i, false);
        }
        if (!this.f7714v.contains(c.PLAY_OPTION) && bVar.f7722o) {
            playAnimation();
        }
        if (!this.f7714v.contains(c.SET_IMAGE_ASSETS)) {
            setImageAssetsFolder(bVar.f7723p);
        }
        if (!this.f7714v.contains(c.SET_REPEAT_MODE)) {
            setRepeatMode(bVar.f7724q);
        }
        if (!this.f7714v.contains(c.SET_REPEAT_COUNT)) {
            setRepeatCount(bVar.f7725r);
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        b bVar = new b(super.onSaveInstanceState());
        bVar.f7719d = this.f7709q;
        bVar.f7720e = this.f7710r;
        bVar.f7721i = this.f7708p.W();
        bVar.f7722o = this.f7708p.f0();
        bVar.f7723p = this.f7708p.P();
        bVar.f7724q = this.f7708p.Z();
        bVar.f7725r = this.f7708p.Y();
        return bVar;
    }

    public void p(boolean z10) {
        this.f7708p.A(z10);
    }

    public void pauseAnimation() {
        this.f7712t = false;
        this.f7708p.h0();
    }

    public void playAnimation() {
        this.f7714v.add(c.PLAY_OPTION);
        this.f7708p.i0();
    }

    public void setAnimation(int i10) {
        this.f7710r = i10;
        this.f7709q = null;
        setCompositionTask(r(i10));
    }

    @Deprecated
    public void setAnimationFromJson(String str) {
        A(str, null);
    }

    public void setAnimationFromUrl(String str) {
        o z10;
        if (this.f7713u) {
            z10 = s.y(getContext(), str);
        } else {
            z10 = s.z(getContext(), str, null);
        }
        setCompositionTask(z10);
    }

    public void setApplyingOpacityToLayersEnabled(boolean z10) {
        this.f7708p.q0(z10);
    }

    public void setAsyncUpdates(l5.a aVar) {
        this.f7708p.r0(aVar);
    }

    public void setCacheComposition(boolean z10) {
        this.f7713u = z10;
    }

    public void setClipTextToBoundingBox(boolean z10) {
        this.f7708p.s0(z10);
    }

    public void setClipToCompositionBounds(boolean z10) {
        this.f7708p.t0(z10);
    }

    public void setComposition(@NonNull l5.i iVar) {
        if (l5.e.f35800a) {
            String str = f7702y;
            Log.v(str, "Set Composition \n" + iVar);
        }
        this.f7708p.setCallback(this);
        this.f7711s = true;
        boolean u02 = this.f7708p.u0(iVar);
        if (this.f7712t) {
            this.f7708p.i0();
        }
        this.f7711s = false;
        if (getDrawable() != this.f7708p || u02) {
            if (!u02) {
                C();
            }
            onVisibilityChanged(this, getVisibility());
            requestLayout();
            for (z zVar : this.f7715w) {
                zVar.a(iVar);
            }
        }
    }

    public void setDefaultFontFileExtension(String str) {
        this.f7708p.v0(str);
    }

    public void setFailureListener(x xVar) {
        this.f7706i = xVar;
    }

    public void setFallbackResource(int i10) {
        this.f7707o = i10;
    }

    public void setFontAssetDelegate(l5.b bVar) {
        this.f7708p.w0(bVar);
    }

    public void setFontMap(Map<String, Typeface> map) {
        this.f7708p.x0(map);
    }

    public void setFrame(int i10) {
        this.f7708p.y0(i10);
    }

    public void setIgnoreDisabledSystemAnimations(boolean z10) {
        this.f7708p.z0(z10);
    }

    public void setImageAssetDelegate(l5.c cVar) {
        this.f7708p.A0(cVar);
    }

    public void setImageAssetsFolder(String str) {
        this.f7708p.B0(str);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        this.f7710r = 0;
        this.f7709q = null;
        n();
        super.setImageBitmap(bitmap);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageDrawable(Drawable drawable) {
        this.f7710r = 0;
        this.f7709q = null;
        n();
        super.setImageDrawable(drawable);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageResource(int i10) {
        this.f7710r = 0;
        this.f7709q = null;
        n();
        super.setImageResource(i10);
    }

    public void setMaintainOriginalImageBounds(boolean z10) {
        this.f7708p.C0(z10);
    }

    public void setMaxFrame(int i10) {
        this.f7708p.D0(i10);
    }

    public void setMaxProgress(float f10) {
        this.f7708p.F0(f10);
    }

    public void setMinAndMaxFrame(String str) {
        this.f7708p.H0(str);
    }

    public void setMinFrame(int i10) {
        this.f7708p.I0(i10);
    }

    public void setMinProgress(float f10) {
        this.f7708p.K0(f10);
    }

    public void setOutlineMasksAndMattes(boolean z10) {
        this.f7708p.L0(z10);
    }

    public void setPerformanceTrackingEnabled(boolean z10) {
        this.f7708p.M0(z10);
    }

    public void setProgress(float f10) {
        E(f10, true);
    }

    public void setRenderMode(g0 g0Var) {
        this.f7708p.O0(g0Var);
    }

    public void setRepeatCount(int i10) {
        this.f7714v.add(c.SET_REPEAT_COUNT);
        this.f7708p.P0(i10);
    }

    public void setRepeatMode(int i10) {
        this.f7714v.add(c.SET_REPEAT_MODE);
        this.f7708p.Q0(i10);
    }

    public void setSafeMode(boolean z10) {
        this.f7708p.R0(z10);
    }

    public void setSpeed(float f10) {
        this.f7708p.S0(f10);
    }

    public void setTextDelegate(i0 i0Var) {
        this.f7708p.U0(i0Var);
    }

    public void setUseCompositionFrameRate(boolean z10) {
        this.f7708p.V0(z10);
    }

    public boolean t() {
        return this.f7708p.e0();
    }

    public void u() {
        this.f7708p.j0();
    }

    @Override // android.view.View
    public void unscheduleDrawable(Drawable drawable) {
        n nVar;
        if (!this.f7711s && drawable == (nVar = this.f7708p) && nVar.e0()) {
            pauseAnimation();
        } else if (!this.f7711s && (drawable instanceof n)) {
            n nVar2 = (n) drawable;
            if (nVar2.e0()) {
                nVar2.h0();
            }
        }
        super.unscheduleDrawable(drawable);
    }

    public void v() {
        this.f7708p.k0();
    }

    public void w() {
        this.f7714v.add(c.PLAY_OPTION);
        this.f7708p.n0();
    }

    public void x() {
        this.f7708p.o0();
    }

    public void y(InputStream inputStream, String str) {
        setCompositionTask(s.p(inputStream, str));
    }

    public void z(ZipInputStream zipInputStream, String str) {
        setCompositionTask(s.B(zipInputStream, str));
    }

    public void setMaxFrame(String str) {
        this.f7708p.E0(str);
    }

    public void setMinFrame(String str) {
        this.f7708p.J0(str);
    }

    public void setAnimation(String str) {
        this.f7709q = str;
        this.f7710r = 0;
        setCompositionTask(q(str));
    }

    public LottieAnimationView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f7704d = new e(this);
        this.f7705e = new d(this);
        this.f7707o = 0;
        this.f7708p = new n();
        this.f7711s = false;
        this.f7712t = false;
        this.f7713u = true;
        this.f7714v = new HashSet();
        this.f7715w = new HashSet();
        s(attributeSet, e0.f35810a);
    }
}
