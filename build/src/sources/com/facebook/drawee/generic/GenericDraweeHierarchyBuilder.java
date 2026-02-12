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
    public static final ScalingUtils$ScaleType f10743t = ScalingUtils$ScaleType.f10639h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10744u = ScalingUtils$ScaleType.f10640i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f10745a;

    /* renamed from: b  reason: collision with root package name */
    private int f10746b;

    /* renamed from: c  reason: collision with root package name */
    private float f10747c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f10748d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f10749e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f10750f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f10751g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f10752h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f10753i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f10754j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f10755k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f10756l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f10757m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f10758n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f10759o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10760p;

    /* renamed from: q  reason: collision with root package name */
    private List f10761q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f10762r;

    /* renamed from: s  reason: collision with root package name */
    private a f10763s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f10745a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f10761q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f10746b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f10747c = 0.0f;
        this.f10748d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f10743t;
        this.f10749e = scalingUtils$ScaleType;
        this.f10750f = null;
        this.f10751g = scalingUtils$ScaleType;
        this.f10752h = null;
        this.f10753i = scalingUtils$ScaleType;
        this.f10754j = null;
        this.f10755k = scalingUtils$ScaleType;
        this.f10756l = f10744u;
        this.f10757m = null;
        this.f10758n = null;
        this.f10759o = null;
        this.f10760p = null;
        this.f10761q = null;
        this.f10762r = null;
        this.f10763s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f10752h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10753i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f10761q = null;
            return this;
        }
        this.f10761q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f10748d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10749e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f10762r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f10762r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f10754j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10755k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f10750f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10751g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f10763s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f10759o;
    }

    public PointF c() {
        return this.f10758n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f10756l;
    }

    public Drawable e() {
        return this.f10760p;
    }

    public float f() {
        return this.f10747c;
    }

    public int g() {
        return this.f10746b;
    }

    public Drawable h() {
        return this.f10752h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f10753i;
    }

    public List j() {
        return this.f10761q;
    }

    public Drawable k() {
        return this.f10748d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f10749e;
    }

    public Drawable m() {
        return this.f10762r;
    }

    public Drawable n() {
        return this.f10754j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f10755k;
    }

    public Resources p() {
        return this.f10745a;
    }

    public Drawable q() {
        return this.f10750f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f10751g;
    }

    public a s() {
        return this.f10763s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f10759o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10756l = scalingUtils$ScaleType;
        this.f10757m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f10760p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f10747c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f10746b = i10;
        return this;
    }
}
