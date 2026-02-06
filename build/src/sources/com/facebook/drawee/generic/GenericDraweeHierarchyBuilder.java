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
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GenericDraweeHierarchyBuilder {

    /* renamed from: t  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10025t = ScalingUtils$ScaleType.f9921h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10026u = ScalingUtils$ScaleType.f9922i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f10027a;

    /* renamed from: b  reason: collision with root package name */
    private int f10028b;

    /* renamed from: c  reason: collision with root package name */
    private float f10029c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f10030d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f10031e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f10032f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f10033g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f10034h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f10035i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f10036j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f10037k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f10038l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f10039m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f10040n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f10041o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10042p;

    /* renamed from: q  reason: collision with root package name */
    private List f10043q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f10044r;

    /* renamed from: s  reason: collision with root package name */
    private a f10045s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f10027a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f10043q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f10028b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f10029c = 0.0f;
        this.f10030d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f10025t;
        this.f10031e = scalingUtils$ScaleType;
        this.f10032f = null;
        this.f10033g = scalingUtils$ScaleType;
        this.f10034h = null;
        this.f10035i = scalingUtils$ScaleType;
        this.f10036j = null;
        this.f10037k = scalingUtils$ScaleType;
        this.f10038l = f10026u;
        this.f10039m = null;
        this.f10040n = null;
        this.f10041o = null;
        this.f10042p = null;
        this.f10043q = null;
        this.f10044r = null;
        this.f10045s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f10034h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10035i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f10043q = null;
            return this;
        }
        this.f10043q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f10030d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10031e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f10044r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f10044r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f10036j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10037k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f10032f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10033g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f10045s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f10041o;
    }

    public PointF c() {
        return this.f10040n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f10038l;
    }

    public Drawable e() {
        return this.f10042p;
    }

    public float f() {
        return this.f10029c;
    }

    public int g() {
        return this.f10028b;
    }

    public Drawable h() {
        return this.f10034h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f10035i;
    }

    public List j() {
        return this.f10043q;
    }

    public Drawable k() {
        return this.f10030d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f10031e;
    }

    public Drawable m() {
        return this.f10044r;
    }

    public Drawable n() {
        return this.f10036j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f10037k;
    }

    public Resources p() {
        return this.f10027a;
    }

    public Drawable q() {
        return this.f10032f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f10033g;
    }

    public a s() {
        return this.f10045s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f10041o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10038l = scalingUtils$ScaleType;
        this.f10039m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f10042p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f10029c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f10028b = i10;
        return this;
    }
}
