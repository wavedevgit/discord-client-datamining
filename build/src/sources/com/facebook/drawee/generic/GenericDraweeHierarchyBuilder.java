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
    public static final ScalingUtils$ScaleType f11144t = ScalingUtils$ScaleType.f11040h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f11145u = ScalingUtils$ScaleType.f11041i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f11146a;

    /* renamed from: b  reason: collision with root package name */
    private int f11147b;

    /* renamed from: c  reason: collision with root package name */
    private float f11148c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f11149d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f11150e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f11151f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f11152g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f11153h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f11154i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f11155j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f11156k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f11157l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f11158m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f11159n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f11160o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f11161p;

    /* renamed from: q  reason: collision with root package name */
    private List f11162q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f11163r;

    /* renamed from: s  reason: collision with root package name */
    private a f11164s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f11146a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f11162q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f11147b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f11148c = 0.0f;
        this.f11149d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f11144t;
        this.f11150e = scalingUtils$ScaleType;
        this.f11151f = null;
        this.f11152g = scalingUtils$ScaleType;
        this.f11153h = null;
        this.f11154i = scalingUtils$ScaleType;
        this.f11155j = null;
        this.f11156k = scalingUtils$ScaleType;
        this.f11157l = f11145u;
        this.f11158m = null;
        this.f11159n = null;
        this.f11160o = null;
        this.f11161p = null;
        this.f11162q = null;
        this.f11163r = null;
        this.f11164s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f11153h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f11154i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f11162q = null;
            return this;
        }
        this.f11162q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f11149d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f11150e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f11163r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f11163r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f11155j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f11156k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f11151f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f11152g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f11164s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f11160o;
    }

    public PointF c() {
        return this.f11159n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f11157l;
    }

    public Drawable e() {
        return this.f11161p;
    }

    public float f() {
        return this.f11148c;
    }

    public int g() {
        return this.f11147b;
    }

    public Drawable h() {
        return this.f11153h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f11154i;
    }

    public List j() {
        return this.f11162q;
    }

    public Drawable k() {
        return this.f11149d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f11150e;
    }

    public Drawable m() {
        return this.f11163r;
    }

    public Drawable n() {
        return this.f11155j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f11156k;
    }

    public Resources p() {
        return this.f11146a;
    }

    public Drawable q() {
        return this.f11151f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f11152g;
    }

    public a s() {
        return this.f11164s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f11160o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f11157l = scalingUtils$ScaleType;
        this.f11158m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f11161p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f11148c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f11147b = i10;
        return this;
    }
}
