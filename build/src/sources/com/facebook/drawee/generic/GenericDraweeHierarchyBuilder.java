package com.facebook.drawee.generic;

import android.content.res.Resources;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.StateListDrawable;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.react.views.image.ReactImageView;
import java.util.Arrays;
import java.util.List;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GenericDraweeHierarchyBuilder {

    /* renamed from: t  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10165t = ScalingUtils$ScaleType.f10061h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10166u = ScalingUtils$ScaleType.f10062i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f10167a;

    /* renamed from: b  reason: collision with root package name */
    private int f10168b;

    /* renamed from: c  reason: collision with root package name */
    private float f10169c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f10170d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f10171e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f10172f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f10173g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f10174h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f10175i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f10176j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f10177k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f10178l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f10179m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f10180n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f10181o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10182p;

    /* renamed from: q  reason: collision with root package name */
    private List f10183q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f10184r;

    /* renamed from: s  reason: collision with root package name */
    private a f10185s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f10167a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f10183q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f10168b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f10169c = 0.0f;
        this.f10170d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f10165t;
        this.f10171e = scalingUtils$ScaleType;
        this.f10172f = null;
        this.f10173g = scalingUtils$ScaleType;
        this.f10174h = null;
        this.f10175i = scalingUtils$ScaleType;
        this.f10176j = null;
        this.f10177k = scalingUtils$ScaleType;
        this.f10178l = f10166u;
        this.f10179m = null;
        this.f10180n = null;
        this.f10181o = null;
        this.f10182p = null;
        this.f10183q = null;
        this.f10184r = null;
        this.f10185s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f10174h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10175i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f10183q = null;
            return this;
        }
        this.f10183q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f10170d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10171e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f10184r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f10184r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f10176j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10177k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f10172f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10173g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f10185s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f10181o;
    }

    public PointF c() {
        return this.f10180n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f10178l;
    }

    public Drawable e() {
        return this.f10182p;
    }

    public float f() {
        return this.f10169c;
    }

    public int g() {
        return this.f10168b;
    }

    public Drawable h() {
        return this.f10174h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f10175i;
    }

    public List j() {
        return this.f10183q;
    }

    public Drawable k() {
        return this.f10170d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f10171e;
    }

    public Drawable m() {
        return this.f10184r;
    }

    public Drawable n() {
        return this.f10176j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f10177k;
    }

    public Resources p() {
        return this.f10167a;
    }

    public Drawable q() {
        return this.f10172f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f10173g;
    }

    public a s() {
        return this.f10185s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f10181o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10178l = scalingUtils$ScaleType;
        this.f10179m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f10182p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f10169c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f10168b = i10;
        return this;
    }
}
