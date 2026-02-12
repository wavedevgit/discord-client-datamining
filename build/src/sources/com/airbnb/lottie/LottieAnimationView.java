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
import l5.c0;
import l5.e0;
import l5.f0;
import l5.g0;
import l5.h0;
import l5.i0;
import l5.j0;
import l5.s;
import l5.w;
import l5.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class LottieAnimationView extends androidx.appcompat.widget.m {

    /* renamed from: y  reason: collision with root package name */
    private static final String f8419y = "LottieAnimationView";

    /* renamed from: z  reason: collision with root package name */
    private static final y f8420z = new y() { // from class: l5.g
        @Override // l5.y
        public final void onResult(Object obj) {
            LottieAnimationView.d((Throwable) obj);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final y f8421d;

    /* renamed from: e  reason: collision with root package name */
    private final y f8422e;

    /* renamed from: i  reason: collision with root package name */
    private y f8423i;

    /* renamed from: o  reason: collision with root package name */
    private int f8424o;

    /* renamed from: p  reason: collision with root package name */
    private final n f8425p;

    /* renamed from: q  reason: collision with root package name */
    private String f8426q;

    /* renamed from: r  reason: collision with root package name */
    private int f8427r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f8428s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f8429t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f8430u;

    /* renamed from: v  reason: collision with root package name */
    private final Set f8431v;

    /* renamed from: w  reason: collision with root package name */
    private final Set f8432w;

    /* renamed from: x  reason: collision with root package name */
    private p f8433x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends z5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ z5.e f8434d;

        a(z5.e eVar) {
            this.f8434d = eVar;
        }

        @Override // z5.c
        public Object a(z5.b bVar) {
            return this.f8434d.a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends View.BaseSavedState {
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        String f8436d;

        /* renamed from: e  reason: collision with root package name */
        int f8437e;

        /* renamed from: i  reason: collision with root package name */
        float f8438i;

        /* renamed from: o  reason: collision with root package name */
        boolean f8439o;

        /* renamed from: p  reason: collision with root package name */
        String f8440p;

        /* renamed from: q  reason: collision with root package name */
        int f8441q;

        /* renamed from: r  reason: collision with root package name */
        int f8442r;

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
            parcel.writeString(this.f8436d);
            parcel.writeFloat(this.f8438i);
            parcel.writeInt(this.f8439o ? 1 : 0);
            parcel.writeString(this.f8440p);
            parcel.writeInt(this.f8441q);
            parcel.writeInt(this.f8442r);
        }

        b(Parcelable parcelable) {
            super(parcelable);
        }

        private b(Parcel parcel) {
            super(parcel);
            this.f8436d = parcel.readString();
            this.f8438i = parcel.readFloat();
            this.f8439o = parcel.readInt() == 1;
            this.f8440p = parcel.readString();
            this.f8441q = parcel.readInt();
            this.f8442r = parcel.readInt();
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
    private static class d implements y {

        /* renamed from: a  reason: collision with root package name */
        private final WeakReference f8450a;

        public d(LottieAnimationView lottieAnimationView) {
            this.f8450a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.y
        /* renamed from: a */
        public void onResult(Throwable th2) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f8450a.get();
            if (lottieAnimationView == null) {
                return;
            }
            if (lottieAnimationView.f8424o != 0) {
                lottieAnimationView.setImageResource(lottieAnimationView.f8424o);
            }
            (lottieAnimationView.f8423i == null ? LottieAnimationView.f8420z : lottieAnimationView.f8423i).onResult(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e implements y {

        /* renamed from: a  reason: collision with root package name */
        private final WeakReference f8451a;

        public e(LottieAnimationView lottieAnimationView) {
            this.f8451a = new WeakReference(lottieAnimationView);
        }

        @Override // l5.y
        /* renamed from: a */
        public void onResult(l5.i iVar) {
            LottieAnimationView lottieAnimationView = (LottieAnimationView) this.f8451a.get();
            if (lottieAnimationView == null) {
                return;
            }
            lottieAnimationView.setComposition(iVar);
        }
    }

    public LottieAnimationView(Context context) {
        super(context);
        this.f8421d = new e(this);
        this.f8422e = new d(this);
        this.f8424o = 0;
        this.f8425p = new n();
        this.f8428s = false;
        this.f8429t = false;
        this.f8430u = true;
        this.f8431v = new HashSet();
        this.f8432w = new HashSet();
        s(null, f0.f35594a);
    }

    private void C() {
        boolean t10 = t();
        setImageDrawable(null);
        setImageDrawable(this.f8425p);
        if (t10) {
            this.f8425p.n0();
        }
    }

    private void E(float f10, boolean z10) {
        if (z10) {
            this.f8431v.add(c.SET_PROGRESS);
        }
        this.f8425p.N0(f10);
    }

    public static /* synthetic */ c0 c(LottieAnimationView lottieAnimationView, String str) {
        if (lottieAnimationView.f8430u) {
            return s.n(lottieAnimationView.getContext(), str);
        }
        return s.o(lottieAnimationView.getContext(), str, null);
    }

    public static /* synthetic */ void d(Throwable th2) {
        if (y5.j.k(th2)) {
            y5.d.d("Unable to load composition.", th2);
            return;
        }
        throw new IllegalStateException("Unable to parse composition", th2);
    }

    public static /* synthetic */ c0 e(LottieAnimationView lottieAnimationView, int i10) {
        if (lottieAnimationView.f8430u) {
            return s.y(lottieAnimationView.getContext(), i10);
        }
        return s.z(lottieAnimationView.getContext(), i10, null);
    }

    private void n() {
        p pVar = this.f8433x;
        if (pVar != null) {
            pVar.k(this.f8421d);
            this.f8433x.j(this.f8422e);
        }
    }

    private void o() {
        this.f8425p.v();
    }

    private p q(final String str) {
        if (isInEditMode()) {
            return new p(new Callable() { // from class: l5.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return LottieAnimationView.c(LottieAnimationView.this, str);
                }
            }, true);
        }
        if (this.f8430u) {
            return s.l(getContext(), str);
        }
        return s.m(getContext(), str, null);
    }

    private p r(final int i10) {
        if (isInEditMode()) {
            return new p(new Callable() { // from class: l5.h
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return LottieAnimationView.e(LottieAnimationView.this, i10);
                }
            }, true);
        }
        if (this.f8430u) {
            return s.w(getContext(), i10);
        }
        return s.x(getContext(), i10, null);
    }

    private void s(AttributeSet attributeSet, int i10) {
        String string;
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, g0.f35595a, i10, 0);
        this.f8430u = obtainStyledAttributes.getBoolean(g0.f35598d, true);
        boolean hasValue = obtainStyledAttributes.hasValue(g0.f35610p);
        boolean hasValue2 = obtainStyledAttributes.hasValue(g0.f35605k);
        boolean hasValue3 = obtainStyledAttributes.hasValue(g0.f35615u);
        if (hasValue && hasValue2) {
            throw new IllegalArgumentException("lottie_rawRes and lottie_fileName cannot be used at the same time. Please use only one at once.");
        }
        if (hasValue) {
            int resourceId = obtainStyledAttributes.getResourceId(g0.f35610p, 0);
            if (resourceId != 0) {
                setAnimation(resourceId);
            }
        } else if (hasValue2) {
            String string2 = obtainStyledAttributes.getString(g0.f35605k);
            if (string2 != null) {
                setAnimation(string2);
            }
        } else if (hasValue3 && (string = obtainStyledAttributes.getString(g0.f35615u)) != null) {
            setAnimationFromUrl(string);
        }
        setFallbackResource(obtainStyledAttributes.getResourceId(g0.f35604j, 0));
        if (obtainStyledAttributes.getBoolean(g0.f35597c, false)) {
            this.f8429t = true;
        }
        if (obtainStyledAttributes.getBoolean(g0.f35608n, false)) {
            this.f8425p.P0(-1);
        }
        if (obtainStyledAttributes.hasValue(g0.f35613s)) {
            setRepeatMode(obtainStyledAttributes.getInt(g0.f35613s, 1));
        }
        if (obtainStyledAttributes.hasValue(g0.f35612r)) {
            setRepeatCount(obtainStyledAttributes.getInt(g0.f35612r, -1));
        }
        if (obtainStyledAttributes.hasValue(g0.f35614t)) {
            setSpeed(obtainStyledAttributes.getFloat(g0.f35614t, 1.0f));
        }
        if (obtainStyledAttributes.hasValue(g0.f35600f)) {
            setClipToCompositionBounds(obtainStyledAttributes.getBoolean(g0.f35600f, true));
        }
        if (obtainStyledAttributes.hasValue(g0.f35599e)) {
            setClipTextToBoundingBox(obtainStyledAttributes.getBoolean(g0.f35599e, false));
        }
        if (obtainStyledAttributes.hasValue(g0.f35602h)) {
            setDefaultFontFileExtension(obtainStyledAttributes.getString(g0.f35602h));
        }
        setImageAssetsFolder(obtainStyledAttributes.getString(g0.f35607m));
        E(obtainStyledAttributes.getFloat(g0.f35609o, 0.0f), obtainStyledAttributes.hasValue(g0.f35609o));
        p(obtainStyledAttributes.getBoolean(g0.f35603i, false));
        if (obtainStyledAttributes.hasValue(g0.f35601g)) {
            k(new r5.e("**"), b0.K, new z5.c(new i0(g.a.a(getContext(), obtainStyledAttributes.getResourceId(g0.f35601g, -1)).getDefaultColor())));
        }
        if (obtainStyledAttributes.hasValue(g0.f35611q)) {
            int i11 = g0.f35611q;
            h0 h0Var = h0.AUTOMATIC;
            int i12 = obtainStyledAttributes.getInt(i11, h0Var.ordinal());
            if (i12 >= h0.values().length) {
                i12 = h0Var.ordinal();
            }
            setRenderMode(h0.values()[i12]);
        }
        if (obtainStyledAttributes.hasValue(g0.f35596b)) {
            int i13 = g0.f35596b;
            l5.a aVar = l5.a.AUTOMATIC;
            int i14 = obtainStyledAttributes.getInt(i13, aVar.ordinal());
            if (i14 >= h0.values().length) {
                i14 = aVar.ordinal();
            }
            setAsyncUpdates(l5.a.values()[i14]);
        }
        setIgnoreDisabledSystemAnimations(obtainStyledAttributes.getBoolean(g0.f35606l, false));
        if (obtainStyledAttributes.hasValue(g0.f35616v)) {
            setUseCompositionFrameRate(obtainStyledAttributes.getBoolean(g0.f35616v, false));
        }
        obtainStyledAttributes.recycle();
    }

    private void setCompositionTask(p pVar) {
        c0 e10 = pVar.e();
        n nVar = this.f8425p;
        if (e10 != null && nVar == getDrawable() && nVar.J() == e10.b()) {
            return;
        }
        this.f8431v.add(c.SET_ANIMATION);
        o();
        n();
        this.f8433x = pVar.d(this.f8421d).c(this.f8422e);
    }

    public void A(String str, String str2) {
        y(new ByteArrayInputStream(str.getBytes()), str2);
    }

    public void B(String str, String str2) {
        setCompositionTask(s.B(getContext(), str, str2));
    }

    public void D(int i10, int i11) {
        this.f8425p.G0(i10, i11);
    }

    public l5.a getAsyncUpdates() {
        return this.f8425p.E();
    }

    public boolean getAsyncUpdatesEnabled() {
        return this.f8425p.F();
    }

    public boolean getClipTextToBoundingBox() {
        return this.f8425p.H();
    }

    public boolean getClipToCompositionBounds() {
        return this.f8425p.I();
    }

    public l5.i getComposition() {
        Drawable drawable = getDrawable();
        n nVar = this.f8425p;
        if (drawable == nVar) {
            return nVar.J();
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
        return this.f8425p.M();
    }

    public String getImageAssetsFolder() {
        return this.f8425p.O();
    }

    public boolean getMaintainOriginalImageBounds() {
        return this.f8425p.Q();
    }

    public float getMaxFrame() {
        return this.f8425p.S();
    }

    public float getMinFrame() {
        return this.f8425p.T();
    }

    public e0 getPerformanceTracker() {
        return this.f8425p.U();
    }

    public float getProgress() {
        return this.f8425p.V();
    }

    public h0 getRenderMode() {
        return this.f8425p.W();
    }

    public int getRepeatCount() {
        return this.f8425p.X();
    }

    public int getRepeatMode() {
        return this.f8425p.Y();
    }

    public float getSpeed() {
        return this.f8425p.Z();
    }

    public void i(Animator.AnimatorListener animatorListener) {
        this.f8425p.q(animatorListener);
    }

    @Override // android.view.View
    public void invalidate() {
        super.invalidate();
        Drawable drawable = getDrawable();
        if ((drawable instanceof n) && ((n) drawable).W() == h0.SOFTWARE) {
            this.f8425p.invalidateSelf();
        }
    }

    @Override // android.widget.ImageView, android.view.View, android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        Drawable drawable2 = getDrawable();
        n nVar = this.f8425p;
        if (drawable2 == nVar) {
            super.invalidateDrawable(nVar);
        } else {
            super.invalidateDrawable(drawable);
        }
    }

    public boolean j(a0 a0Var) {
        l5.i composition = getComposition();
        if (composition != null) {
            a0Var.a(composition);
        }
        return this.f8432w.add(a0Var);
    }

    public void k(r5.e eVar, Object obj, z5.c cVar) {
        this.f8425p.r(eVar, obj, cVar);
    }

    public void l(r5.e eVar, Object obj, z5.e eVar2) {
        this.f8425p.r(eVar, obj, new a(eVar2));
    }

    public void m() {
        this.f8429t = false;
        this.f8431v.add(c.PLAY_OPTION);
        this.f8425p.u();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (!isInEditMode() && this.f8429t) {
            this.f8425p.i0();
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
        this.f8426q = bVar.f8436d;
        Set set = this.f8431v;
        c cVar = c.SET_ANIMATION;
        if (!set.contains(cVar) && !TextUtils.isEmpty(this.f8426q)) {
            setAnimation(this.f8426q);
        }
        this.f8427r = bVar.f8437e;
        if (!this.f8431v.contains(cVar) && (i10 = this.f8427r) != 0) {
            setAnimation(i10);
        }
        if (!this.f8431v.contains(c.SET_PROGRESS)) {
            E(bVar.f8438i, false);
        }
        if (!this.f8431v.contains(c.PLAY_OPTION) && bVar.f8439o) {
            playAnimation();
        }
        if (!this.f8431v.contains(c.SET_IMAGE_ASSETS)) {
            setImageAssetsFolder(bVar.f8440p);
        }
        if (!this.f8431v.contains(c.SET_REPEAT_MODE)) {
            setRepeatMode(bVar.f8441q);
        }
        if (!this.f8431v.contains(c.SET_REPEAT_COUNT)) {
            setRepeatCount(bVar.f8442r);
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        b bVar = new b(super.onSaveInstanceState());
        bVar.f8436d = this.f8426q;
        bVar.f8437e = this.f8427r;
        bVar.f8438i = this.f8425p.V();
        bVar.f8439o = this.f8425p.e0();
        bVar.f8440p = this.f8425p.O();
        bVar.f8441q = this.f8425p.Y();
        bVar.f8442r = this.f8425p.X();
        return bVar;
    }

    public void p(boolean z10) {
        this.f8425p.A(w.MergePathsApi19, z10);
    }

    public void pauseAnimation() {
        this.f8429t = false;
        this.f8425p.h0();
    }

    public void playAnimation() {
        this.f8431v.add(c.PLAY_OPTION);
        this.f8425p.i0();
    }

    public void setAnimation(int i10) {
        this.f8427r = i10;
        this.f8426q = null;
        setCompositionTask(r(i10));
    }

    @Deprecated
    public void setAnimationFromJson(String str) {
        A(str, null);
    }

    public void setAnimationFromUrl(String str) {
        p B;
        if (this.f8430u) {
            B = s.A(getContext(), str);
        } else {
            B = s.B(getContext(), str, null);
        }
        setCompositionTask(B);
    }

    public void setApplyingOpacityToLayersEnabled(boolean z10) {
        this.f8425p.q0(z10);
    }

    public void setAsyncUpdates(l5.a aVar) {
        this.f8425p.r0(aVar);
    }

    public void setCacheComposition(boolean z10) {
        this.f8430u = z10;
    }

    public void setClipTextToBoundingBox(boolean z10) {
        this.f8425p.s0(z10);
    }

    public void setClipToCompositionBounds(boolean z10) {
        this.f8425p.t0(z10);
    }

    public void setComposition(@NonNull l5.i iVar) {
        if (l5.e.f35576a) {
            String str = f8419y;
            Log.v(str, "Set Composition \n" + iVar);
        }
        this.f8425p.setCallback(this);
        this.f8428s = true;
        boolean u02 = this.f8425p.u0(iVar);
        if (this.f8429t) {
            this.f8425p.i0();
        }
        this.f8428s = false;
        if (getDrawable() != this.f8425p || u02) {
            if (!u02) {
                C();
            }
            onVisibilityChanged(this, getVisibility());
            requestLayout();
            for (a0 a0Var : this.f8432w) {
                a0Var.a(iVar);
            }
        }
    }

    public void setDefaultFontFileExtension(String str) {
        this.f8425p.v0(str);
    }

    public void setFailureListener(y yVar) {
        this.f8423i = yVar;
    }

    public void setFallbackResource(int i10) {
        this.f8424o = i10;
    }

    public void setFontAssetDelegate(l5.b bVar) {
        this.f8425p.w0(bVar);
    }

    public void setFontMap(Map<String, Typeface> map) {
        this.f8425p.x0(map);
    }

    public void setFrame(int i10) {
        this.f8425p.y0(i10);
    }

    @Deprecated
    public void setIgnoreDisabledSystemAnimations(boolean z10) {
        this.f8425p.z0(z10);
    }

    public void setImageAssetDelegate(l5.c cVar) {
        this.f8425p.A0(cVar);
    }

    public void setImageAssetsFolder(String str) {
        this.f8425p.B0(str);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        this.f8427r = 0;
        this.f8426q = null;
        n();
        super.setImageBitmap(bitmap);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageDrawable(Drawable drawable) {
        this.f8427r = 0;
        this.f8426q = null;
        n();
        super.setImageDrawable(drawable);
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageResource(int i10) {
        this.f8427r = 0;
        this.f8426q = null;
        n();
        super.setImageResource(i10);
    }

    public void setMaintainOriginalImageBounds(boolean z10) {
        this.f8425p.C0(z10);
    }

    public void setMaxFrame(int i10) {
        this.f8425p.D0(i10);
    }

    public void setMaxProgress(float f10) {
        this.f8425p.F0(f10);
    }

    public void setMinAndMaxFrame(String str) {
        this.f8425p.H0(str);
    }

    public void setMinFrame(int i10) {
        this.f8425p.I0(i10);
    }

    public void setMinProgress(float f10) {
        this.f8425p.K0(f10);
    }

    public void setOutlineMasksAndMattes(boolean z10) {
        this.f8425p.L0(z10);
    }

    public void setPerformanceTrackingEnabled(boolean z10) {
        this.f8425p.M0(z10);
    }

    public void setProgress(float f10) {
        E(f10, true);
    }

    public void setRenderMode(h0 h0Var) {
        this.f8425p.O0(h0Var);
    }

    public void setRepeatCount(int i10) {
        this.f8431v.add(c.SET_REPEAT_COUNT);
        this.f8425p.P0(i10);
    }

    public void setRepeatMode(int i10) {
        this.f8431v.add(c.SET_REPEAT_MODE);
        this.f8425p.Q0(i10);
    }

    public void setSafeMode(boolean z10) {
        this.f8425p.R0(z10);
    }

    public void setSpeed(float f10) {
        this.f8425p.S0(f10);
    }

    public void setTextDelegate(j0 j0Var) {
        this.f8425p.T0(j0Var);
    }

    public void setUseCompositionFrameRate(boolean z10) {
        this.f8425p.U0(z10);
    }

    public boolean t() {
        return this.f8425p.d0();
    }

    public void u() {
        this.f8425p.j0();
    }

    @Override // android.view.View
    public void unscheduleDrawable(Drawable drawable) {
        n nVar;
        if (!this.f8428s && drawable == (nVar = this.f8425p) && nVar.d0()) {
            pauseAnimation();
        } else if (!this.f8428s && (drawable instanceof n)) {
            n nVar2 = (n) drawable;
            if (nVar2.d0()) {
                nVar2.h0();
            }
        }
        super.unscheduleDrawable(drawable);
    }

    public void v() {
        this.f8425p.k0();
    }

    public void w() {
        this.f8431v.add(c.PLAY_OPTION);
        this.f8425p.n0();
    }

    public void x() {
        this.f8425p.o0();
    }

    public void y(InputStream inputStream, String str) {
        setCompositionTask(s.p(inputStream, str));
    }

    public void z(ZipInputStream zipInputStream, String str) {
        setCompositionTask(s.D(zipInputStream, str));
    }

    public void setMaxFrame(String str) {
        this.f8425p.E0(str);
    }

    public void setMinFrame(String str) {
        this.f8425p.J0(str);
    }

    public void setAnimation(String str) {
        this.f8426q = str;
        this.f8427r = 0;
        setCompositionTask(q(str));
    }

    public LottieAnimationView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f8421d = new e(this);
        this.f8422e = new d(this);
        this.f8424o = 0;
        this.f8425p = new n();
        this.f8428s = false;
        this.f8429t = false;
        this.f8430u = true;
        this.f8431v = new HashSet();
        this.f8432w = new HashSet();
        s(attributeSet, f0.f35594a);
    }
}
