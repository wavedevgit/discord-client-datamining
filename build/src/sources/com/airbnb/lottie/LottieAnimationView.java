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
    private static final String f8450y = "LottieAnimationView";

    /* renamed from: z  reason: collision with root package name */
    private static final x f8451z = new x() { // from class: l5.g
        @Override // l5.x
        public final void onResult(Object obj) {
            LottieAnimationView.d((Throwable) obj);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final x f8452d;

    /* renamed from: e  reason: collision with root package name */
    private final x f8453e;

    /* renamed from: i  reason: collision with root package name */
    private x f8454i;

    /* renamed from: o  reason: collision with root package name */
    private int f8455o;

    /* renamed from: p  reason: collision with root package name */
    private final n f8456p;

    /* renamed from: q  reason: collision with root package name */
    private String f8457q;

    /* renamed from: r  reason: collision with root package name */
    private int f8458r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f8459s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f8460t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f8461u;

    /* renamed from: v  reason: collision with root package name */
    private final Set f8462v;

    /* renamed from: w  reason: collision with root package name */
    private final Set f8463w;

    /* renamed from: x  reason: collision with root package name */
    private o f8464x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.e f8465d;

        a(y5.e eVar) {
            this.f8465d = eVar;
        }

        @Override // y5.c
        public Object a(y5.b bVar) {
            return this.f8465d.a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends View.BaseSavedState {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        String f8467d;

        /* renamed from: e  reason: collision with root package name */
        int f8468e;

        /* renamed from: i  reason: collision with root package name */
        float f8469i;

        /* renamed from: o  reason: collision with root package name */
        boolean f8470o;

        /* renamed from: p  reason: collision with root package name */
        String f8471p;

        /* renamed from: q  reason: collision with root package name */
        int f8472q;

        /* renamed from: r  reason: collision with root package name */
        int f8473r;

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
            parcel.writeString(this.f8467d);
            parcel.writeFloat(this.f8469i);
            parcel.writeInt(this.f8470o ? 1 : 0);
            parcel.writeString(this.f8471p);
            parcel.writeInt(this.f8472q);
            parcel.writeInt(this.f8473r);
        }

        b(Parcelable parcelable) {
            super(parcelable);
        }

        private b(Parcel parcel) {
            super(parcel);
            this.f8467d = parcel.readString();
            this.f8469i = parcel.readFloat();
            this.f8470o = parcel.readInt() == 1;
            this.f8471p = parcel.readString();
            this.f8472q = parcel.readInt();
            this.f8473r = parcel.readInt();
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
        private final WeakReference f8481a;

        public d(LottieAnimationView lottieAnimationView) {
            this.f8481a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.x
        /* renamed from: a */
        public void onResult(Throwable th2) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f8481a.get();
            if (lottieAnimationView == null) {
                return;
            }
            if (lottieAnimationView.f8455o != 0) {
                lottieAnimationView.setImageResource(lottieAnimationView.f8455o);
            }
            (lottieAnimationView.f8454i == null ? LottieAnimationView.f8451z : lottieAnimationView.f8454i).onResult(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e implements x {

        /* renamed from: a  reason: collision with root package name */
        private final WeakReference f8482a;

        public e(LottieAnimationView lottieAnimationView) {
            this.f8482a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.x
        /* renamed from: a */
        public void onResult(l5.i iVar) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f8482a.get();
            if (lottieAnimationView == null) {
                return;
            }
            lottieAnimationView.setComposition(iVar);
        }
    }

    public LottieAnimationView(Context context) {
        super(context);
        this.f8452d = new e(this);
        this.f8453e = new d(this);
        this.f8455o = 0;
        this.f8456p = new n();
        this.f8459s = false;
        this.f8460t = false;
        this.f8461u = true;
        this.f8462v = new HashSet();
        this.f8463w = new HashSet();
        s(null, e0.f37021a);
    }

    private void C() {
        boolean t10 = t();
        setImageDrawable(null);
        setImageDrawable(this.f8456p);
        if (t10) {
            this.f8456p.n0();
        }
    }

    private void E(float f10, boolean z10) {
        if (z10) {
            this.f8462v.add(c.SET_PROGRESS);
        }
        this.f8456p.N0(f10);
    }

    public static /* synthetic */ b0 c(LottieAnimationView lottieAnimationView, String str) {
        if (lottieAnimationView.f8461u) {
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
        if (lottieAnimationView.f8461u) {
            return s.w(lottieAnimationView.getContext(), i10);
        }
        return s.x(lottieAnimationView.getContext(), i10, null);
    }

    private void n() {
        o oVar = this.f8464x;
        if (oVar != null) {
            oVar.k(this.f8452d);
            this.f8464x.j(this.f8453e);
        }
    }

    private void o() {
        this.f8456p.v();
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
        if (this.f8461u) {
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
        if (this.f8461u) {
            return s.u(getContext(), i10);
        }
        return s.v(getContext(), i10, null);
    }

    private void s(AttributeSet attributeSet, int i10) {
        String string;
        boolean z10 = false;
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, f0.f37024a, i10, 0);
        this.f8461u = obtainStyledAttributes.getBoolean(f0.f37027d, true);
        boolean hasValue = obtainStyledAttributes.hasValue(f0.f37039p);
        boolean hasValue2 = obtainStyledAttributes.hasValue(f0.f37034k);
        boolean hasValue3 = obtainStyledAttributes.hasValue(f0.f37044u);
        if (hasValue && hasValue2) {
            throw new IllegalArgumentException("lottie_rawRes and lottie_fileName cannot be used at the same time. Please use only one at once.");
        }
        if (hasValue) {
            int resourceId = obtainStyledAttributes.getResourceId(f0.f37039p, 0);
            if (resourceId != 0) {
                setAnimation(resourceId);
            }
        } else if (hasValue2) {
            String string2 = obtainStyledAttributes.getString(f0.f37034k);
            if (string2 != null) {
                setAnimation(string2);
            }
        } else if (hasValue3 && (string = obtainStyledAttributes.getString(f0.f37044u)) != null) {
            setAnimationFromUrl(string);
        }
        setFallbackResource(obtainStyledAttributes.getResourceId(f0.f37033j, 0));
        if (obtainStyledAttributes.getBoolean(f0.f37026c, false)) {
            this.f8460t = true;
        }
        if (obtainStyledAttributes.getBoolean(f0.f37037n, false)) {
            this.f8456p.P0(-1);
        }
        if (obtainStyledAttributes.hasValue(f0.f37042s)) {
            setRepeatMode(obtainStyledAttributes.getInt(f0.f37042s, 1));
        }
        if (obtainStyledAttributes.hasValue(f0.f37041r)) {
            setRepeatCount(obtainStyledAttributes.getInt(f0.f37041r, -1));
        }
        if (obtainStyledAttributes.hasValue(f0.f37043t)) {
            setSpeed(obtainStyledAttributes.getFloat(f0.f37043t, 1.0f));
        }
        if (obtainStyledAttributes.hasValue(f0.f37029f)) {
            setClipToCompositionBounds(obtainStyledAttributes.getBoolean(f0.f37029f, true));
        }
        if (obtainStyledAttributes.hasValue(f0.f37028e)) {
            setClipTextToBoundingBox(obtainStyledAttributes.getBoolean(f0.f37028e, false));
        }
        if (obtainStyledAttributes.hasValue(f0.f37031h)) {
            setDefaultFontFileExtension(obtainStyledAttributes.getString(f0.f37031h));
        }
        setImageAssetsFolder(obtainStyledAttributes.getString(f0.f37036m));
        E(obtainStyledAttributes.getFloat(f0.f37038o, 0.0f), obtainStyledAttributes.hasValue(f0.f37038o));
        p(obtainStyledAttributes.getBoolean(f0.f37032i, false));
        if (obtainStyledAttributes.hasValue(f0.f37030g)) {
            k(new q5.e("**"), a0.K, new y5.c(new h0(g.a.a(getContext(), obtainStyledAttributes.getResourceId(f0.f37030g, -1)).getDefaultColor())));
        }
        if (obtainStyledAttributes.hasValue(f0.f37040q)) {
            int i11 = f0.f37040q;
            g0 g0Var = g0.AUTOMATIC;
            int i12 = obtainStyledAttributes.getInt(i11, g0Var.ordinal());
            if (i12 >= g0.values().length) {
                i12 = g0Var.ordinal();
            }
            setRenderMode(g0.values()[i12]);
        }
        if (obtainStyledAttributes.hasValue(f0.f37025b)) {
            int i13 = f0.f37025b;
            l5.a aVar = l5.a.AUTOMATIC;
            int i14 = obtainStyledAttributes.getInt(i13, aVar.ordinal());
            if (i14 >= g0.values().length) {
                i14 = aVar.ordinal();
            }
            setAsyncUpdates(l5.a.values()[i14]);
        }
        setIgnoreDisabledSystemAnimations(obtainStyledAttributes.getBoolean(f0.f37035l, false));
        if (obtainStyledAttributes.hasValue(f0.f37045v)) {
            setUseCompositionFrameRate(obtainStyledAttributes.getBoolean(f0.f37045v, false));
        }
        obtainStyledAttributes.recycle();
        n nVar = this.f8456p;
        if (x5.j.f(getContext()) != 0.0f) {
            z10 = true;
        }
        nVar.T0(Boolean.valueOf(z10));
    }

    private void setCompositionTask(o oVar) {
        b0 e10 = oVar.e();
        n nVar = this.f8456p;
        if (e10 != null && nVar == getDrawable() && nVar.K() == e10.b()) {
            return;
        }
        this.f8462v.add(c.SET_ANIMATION);
        o();
        n();
        this.f8464x = oVar.d(this.f8452d).c(this.f8453e);
    }

    public void A(String str, String str2) {
        y(new ByteArrayInputStream(str.getBytes()), str2);
    }

    public void B(String str, String str2) {
        setCompositionTask(s.z(getContext(), str, str2));
    }

    public void D(int i10, int i11) {
        this.f8456p.G0(i10, i11);
    }

    public l5.a getAsyncUpdates() {
        return this.f8456p.F();
    }

    public boolean getAsyncUpdatesEnabled() {
        return this.f8456p.G();
    }

    public boolean getClipTextToBoundingBox() {
        return this.f8456p.I();
    }

    public boolean getClipToCompositionBounds() {
        return this.f8456p.J();
    }

    public l5.i getComposition() {
        Drawable drawable = getDrawable();
        n nVar = this.f8456p;
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
        return this.f8456p.N();
    }

    public String getImageAssetsFolder() {
        return this.f8456p.P();
    }

    public boolean getMaintainOriginalImageBounds() {
        return this.f8456p.R();
    }

    public float getMaxFrame() {
        return this.f8456p.T();
    }

    public float getMinFrame() {
        return this.f8456p.U();
    }

    public d0 getPerformanceTracker() {
        return this.f8456p.V();
    }

    public float getProgress() {
        return this.f8456p.W();
    }

    public g0 getRenderMode() {
        return this.f8456p.X();
    }

    public int getRepeatCount() {
        return this.f8456p.Y();
    }

    public int getRepeatMode() {
        return this.f8456p.Z();
    }

    public float getSpeed() {
        return this.f8456p.a0();
    }

    public void i(Animator.AnimatorListener animatorListener) {
        this.f8456p.q(animatorListener);
    }

    @Override // android.view.View
    public void invalidate() {
        super.invalidate();
        Drawable drawable = getDrawable();
        if ((drawable instanceof n) && ((n) drawable).X() == g0.SOFTWARE) {
            this.f8456p.invalidateSelf();
        }
    }

    @Override // android.widget.ImageView, android.view.View, android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        Drawable drawable2 = getDrawable();
        n nVar = this.f8456p;
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
        return this.f8463w.add(zVar);
    }

    public void k(q5.e eVar, Object obj, y5.c cVar) {
        this.f8456p.r(eVar, obj, cVar);
    }

    public void l(q5.e eVar, Object obj, y5.e eVar2) {
        this.f8456p.r(eVar, obj, new a(eVar2));
    }

    public void m() {
        this.f8460t = false;
        this.f8462v.add(c.PLAY_OPTION);
        this.f8456p.u();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (!isInEditMode() && this.f8460t) {
            this.f8456p.i0();
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
        this.f8457q = bVar.f8467d;
        Set set = this.f8462v;
        c cVar = c.SET_ANIMATION;
        if (!set.contains(cVar) && !TextUtils.isEmpty(this.f8457q)) {
            setAnimation(this.f8457q);
        }
        this.f8458r = bVar.f8468e;
        if (!this.f8462v.contains(cVar) && (i10 = this.f8458r) != 0) {
            setAnimation(i10);
        }
        if (!this.f8462v.contains(c.SET_PROGRESS)) {
            E(bVar.f8469i, false);
        }
        if (!this.f8462v.contains(c.PLAY_OPTION) && bVar.f8470o) {
            playAnimation();
        }
        if (!this.f8462v.contains(c.SET_IMAGE_ASSETS)) {
            setImageAssetsFolder(bVar.f8471p);
        }
        if (!this.f8462v.contains(c.SET_REPEAT_MODE)) {
            setRepeatMode(bVar.f8472q);
        }
        if (!this.f8462v.contains(c.SET_REPEAT_COUNT)) {
            setRepeatCount(bVar.f8473r);
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        b bVar = new b(super.onSaveInstanceState());
        bVar.f8467d = this.f8457q;
        bVar.f8468e = this.f8458r;
        bVar.f8469i = this.f8456p.W();
        bVar.f8470o = this.f8456p.f0();
        bVar.f8471p = this.f8456p.P();
        bVar.f8472q = this.f8456p.Z();
        bVar.f8473r = this.f8456p.Y();
        return bVar;
    }

    public void p(boolean z10) {
        this.f8456p.A(z10);
    }

    public void pauseAnimation() {
        this.f8460t = false;
        this.f8456p.h0();
    }

    public void playAnimation() {
        this.f8462v.add(c.PLAY_OPTION);
        this.f8456p.i0();
    }

    public void setAnimation(int i10) {
        this.f8458r = i10;
        this.f8457q = null;
        setCompositionTask(r(i10));
    }

    @Deprecated
    public void setAnimationFromJson(String str) {
        A(str, null);
    }

    public void setAnimationFromUrl(String str) {
        o z10;
        if (this.f8461u) {
            z10 = s.y(getContext(), str);
        } else {
            z10 = s.z(getContext(), str, null);
        }
        setCompositionTask(z10);
    }

    public void setApplyingOpacityToLayersEnabled(boolean z10) {
        this.f8456p.q0(z10);
    }

    public void setAsyncUpdates(l5.a aVar) {
        this.f8456p.r0(aVar);
    }

    public void setCacheComposition(boolean z10) {
        this.f8461u = z10;
    }

    public void setClipTextToBoundingBox(boolean z10) {
        this.f8456p.s0(z10);
    }

    public void setClipToCompositionBounds(boolean z10) {
        this.f8456p.t0(z10);
    }

    public void setComposition(@NonNull l5.i iVar) {
        if (l5.e.f37011a) {
            String str = f8450y;
            Log.v(str, "Set Composition \n" + iVar);
        }
        this.f8456p.setCallback(this);
        this.f8459s = true;
        boolean u02 = this.f8456p.u0(iVar);
        if (this.f8460t) {
            this.f8456p.i0();
        }
        this.f8459s = false;
        if (getDrawable() != this.f8456p || u02) {
            if (!u02) {
                C();
            }
            onVisibilityChanged(this, getVisibility());
            requestLayout();
            for (z zVar : this.f8463w) {
                zVar.a(iVar);
            }
        }
    }

    public void setDefaultFontFileExtension(String str) {
        this.f8456p.v0(str);
    }

    public void setFailureListener(x xVar) {
        this.f8454i = xVar;
    }

    public void setFallbackResource(int i10) {
        this.f8455o = i10;
    }

    public void setFontAssetDelegate(l5.b bVar) {
        this.f8456p.w0(bVar);
    }

    public void setFontMap(Map<String, Typeface> map) {
        this.f8456p.x0(map);
    }

    public void setFrame(int i10) {
        this.f8456p.y0(i10);
    }

    public void setIgnoreDisabledSystemAnimations(boolean z10) {
        this.f8456p.z0(z10);
    }

    public void setImageAssetDelegate(l5.c cVar) {
        this.f8456p.A0(cVar);
    }

    public void setImageAssetsFolder(String str) {
        this.f8456p.B0(str);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        this.f8458r = 0;
        this.f8457q = null;
        n();
        super.setImageBitmap(bitmap);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageDrawable(Drawable drawable) {
        this.f8458r = 0;
        this.f8457q = null;
        n();
        super.setImageDrawable(drawable);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageResource(int i10) {
        this.f8458r = 0;
        this.f8457q = null;
        n();
        super.setImageResource(i10);
    }

    public void setMaintainOriginalImageBounds(boolean z10) {
        this.f8456p.C0(z10);
    }

    public void setMaxFrame(int i10) {
        this.f8456p.D0(i10);
    }

    public void setMaxProgress(float f10) {
        this.f8456p.F0(f10);
    }

    public void setMinAndMaxFrame(String str) {
        this.f8456p.H0(str);
    }

    public void setMinFrame(int i10) {
        this.f8456p.I0(i10);
    }

    public void setMinProgress(float f10) {
        this.f8456p.K0(f10);
    }

    public void setOutlineMasksAndMattes(boolean z10) {
        this.f8456p.L0(z10);
    }

    public void setPerformanceTrackingEnabled(boolean z10) {
        this.f8456p.M0(z10);
    }

    public void setProgress(float f10) {
        E(f10, true);
    }

    public void setRenderMode(g0 g0Var) {
        this.f8456p.O0(g0Var);
    }

    public void setRepeatCount(int i10) {
        this.f8462v.add(c.SET_REPEAT_COUNT);
        this.f8456p.P0(i10);
    }

    public void setRepeatMode(int i10) {
        this.f8462v.add(c.SET_REPEAT_MODE);
        this.f8456p.Q0(i10);
    }

    public void setSafeMode(boolean z10) {
        this.f8456p.R0(z10);
    }

    public void setSpeed(float f10) {
        this.f8456p.S0(f10);
    }

    public void setTextDelegate(i0 i0Var) {
        this.f8456p.U0(i0Var);
    }

    public void setUseCompositionFrameRate(boolean z10) {
        this.f8456p.V0(z10);
    }

    public boolean t() {
        return this.f8456p.e0();
    }

    public void u() {
        this.f8456p.j0();
    }

    @Override // android.view.View
    public void unscheduleDrawable(Drawable drawable) {
        n nVar;
        if (!this.f8459s && drawable == (nVar = this.f8456p) && nVar.e0()) {
            pauseAnimation();
        } else if (!this.f8459s && (drawable instanceof n)) {
            n nVar2 = (n) drawable;
            if (nVar2.e0()) {
                nVar2.h0();
            }
        }
        super.unscheduleDrawable(drawable);
    }

    public void v() {
        this.f8456p.k0();
    }

    public void w() {
        this.f8462v.add(c.PLAY_OPTION);
        this.f8456p.n0();
    }

    public void x() {
        this.f8456p.o0();
    }

    public void y(InputStream inputStream, String str) {
        setCompositionTask(s.p(inputStream, str));
    }

    public void z(ZipInputStream zipInputStream, String str) {
        setCompositionTask(s.B(zipInputStream, str));
    }

    public void setMaxFrame(String str) {
        this.f8456p.E0(str);
    }

    public void setMinFrame(String str) {
        this.f8456p.J0(str);
    }

    public void setAnimation(String str) {
        this.f8457q = str;
        this.f8458r = 0;
        setCompositionTask(q(str));
    }

    public LottieAnimationView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f8452d = new e(this);
        this.f8453e = new d(this);
        this.f8455o = 0;
        this.f8456p = new n();
        this.f8459s = false;
        this.f8460t = false;
        this.f8461u = true;
        this.f8462v = new HashSet();
        this.f8463w = new HashSet();
        s(attributeSet, e0.f37021a);
    }
}
