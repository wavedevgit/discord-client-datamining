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
    public static final ScalingUtils$ScaleType f10742t = ScalingUtils$ScaleType.f10638h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10743u = ScalingUtils$ScaleType.f10639i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f10744a;

    /* renamed from: b  reason: collision with root package name */
    private int f10745b;

    /* renamed from: c  reason: collision with root package name */
    private float f10746c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f10747d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f10748e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f10749f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f10750g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f10751h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f10752i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f10753j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f10754k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f10755l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f10756m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f10757n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f10758o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10759p;

    /* renamed from: q  reason: collision with root package name */
    private List f10760q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f10761r;

    /* renamed from: s  reason: collision with root package name */
    private a f10762s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f10744a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f10760q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f10745b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f10746c = 0.0f;
        this.f10747d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f10742t;
        this.f10748e = scalingUtils$ScaleType;
        this.f10749f = null;
        this.f10750g = scalingUtils$ScaleType;
        this.f10751h = null;
        this.f10752i = scalingUtils$ScaleType;
        this.f10753j = null;
        this.f10754k = scalingUtils$ScaleType;
        this.f10755l = f10743u;
        this.f10756m = null;
        this.f10757n = null;
        this.f10758o = null;
        this.f10759p = null;
        this.f10760q = null;
        this.f10761r = null;
        this.f10762s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f10751h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10752i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f10760q = null;
            return this;
        }
        this.f10760q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f10747d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10748e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f10761r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f10761r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f10753j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10754k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f10749f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10750g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f10762s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f10758o;
    }

    public PointF c() {
        return this.f10757n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f10755l;
    }

    public Drawable e() {
        return this.f10759p;
    }

    public float f() {
        return this.f10746c;
    }

    public int g() {
        return this.f10745b;
    }

    public Drawable h() {
        return this.f10751h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f10752i;
    }

    public List j() {
        return this.f10760q;
    }

    public Drawable k() {
        return this.f10747d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f10748e;
    }

    public Drawable m() {
        return this.f10761r;
    }

    public Drawable n() {
        return this.f10753j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f10754k;
    }

    public Resources p() {
        return this.f10744a;
    }

    public Drawable q() {
        return this.f10749f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f10750g;
    }

    public a s() {
        return this.f10762s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f10758o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10755l = scalingUtils$ScaleType;
        this.f10756m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f10759p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f10746c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f10745b = i10;
        return this;
    }
}
