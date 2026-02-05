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
    public static final ScalingUtils$ScaleType f10126t = ScalingUtils$ScaleType.f10022h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10127u = ScalingUtils$ScaleType.f10023i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f10128a;

    /* renamed from: b  reason: collision with root package name */
    private int f10129b;

    /* renamed from: c  reason: collision with root package name */
    private float f10130c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f10131d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f10132e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f10133f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f10134g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f10135h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f10136i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f10137j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f10138k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f10139l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f10140m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f10141n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f10142o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10143p;

    /* renamed from: q  reason: collision with root package name */
    private List f10144q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f10145r;

    /* renamed from: s  reason: collision with root package name */
    private a f10146s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f10128a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f10144q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f10129b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f10130c = 0.0f;
        this.f10131d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f10126t;
        this.f10132e = scalingUtils$ScaleType;
        this.f10133f = null;
        this.f10134g = scalingUtils$ScaleType;
        this.f10135h = null;
        this.f10136i = scalingUtils$ScaleType;
        this.f10137j = null;
        this.f10138k = scalingUtils$ScaleType;
        this.f10139l = f10127u;
        this.f10140m = null;
        this.f10141n = null;
        this.f10142o = null;
        this.f10143p = null;
        this.f10144q = null;
        this.f10145r = null;
        this.f10146s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f10135h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10136i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f10144q = null;
            return this;
        }
        this.f10144q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f10131d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10132e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f10145r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f10145r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f10137j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10138k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f10133f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10134g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f10146s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f10142o;
    }

    public PointF c() {
        return this.f10141n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f10139l;
    }

    public Drawable e() {
        return this.f10143p;
    }

    public float f() {
        return this.f10130c;
    }

    public int g() {
        return this.f10129b;
    }

    public Drawable h() {
        return this.f10135h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f10136i;
    }

    public List j() {
        return this.f10144q;
    }

    public Drawable k() {
        return this.f10131d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f10132e;
    }

    public Drawable m() {
        return this.f10145r;
    }

    public Drawable n() {
        return this.f10137j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f10138k;
    }

    public Resources p() {
        return this.f10128a;
    }

    public Drawable q() {
        return this.f10133f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f10134g;
    }

    public a s() {
        return this.f10146s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f10142o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10139l = scalingUtils$ScaleType;
        this.f10140m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f10143p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f10130c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f10129b = i10;
        return this;
    }
}
