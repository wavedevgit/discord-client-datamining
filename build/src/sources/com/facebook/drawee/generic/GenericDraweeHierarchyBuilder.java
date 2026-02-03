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
    public static final ScalingUtils$ScaleType f9741t = ScalingUtils$ScaleType.f9637h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f9742u = ScalingUtils$ScaleType.f9638i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f9743a;

    /* renamed from: b  reason: collision with root package name */
    private int f9744b;

    /* renamed from: c  reason: collision with root package name */
    private float f9745c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f9746d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f9747e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f9748f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f9749g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f9750h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f9751i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f9752j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f9753k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f9754l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f9755m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f9756n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f9757o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f9758p;

    /* renamed from: q  reason: collision with root package name */
    private List f9759q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f9760r;

    /* renamed from: s  reason: collision with root package name */
    private a f9761s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f9743a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f9759q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f9744b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f9745c = 0.0f;
        this.f9746d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f9741t;
        this.f9747e = scalingUtils$ScaleType;
        this.f9748f = null;
        this.f9749g = scalingUtils$ScaleType;
        this.f9750h = null;
        this.f9751i = scalingUtils$ScaleType;
        this.f9752j = null;
        this.f9753k = scalingUtils$ScaleType;
        this.f9754l = f9742u;
        this.f9755m = null;
        this.f9756n = null;
        this.f9757o = null;
        this.f9758p = null;
        this.f9759q = null;
        this.f9760r = null;
        this.f9761s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f9750h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f9751i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f9759q = null;
            return this;
        }
        this.f9759q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f9746d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f9747e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f9760r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f9760r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f9752j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f9753k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f9748f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f9749g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f9761s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f9757o;
    }

    public PointF c() {
        return this.f9756n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f9754l;
    }

    public Drawable e() {
        return this.f9758p;
    }

    public float f() {
        return this.f9745c;
    }

    public int g() {
        return this.f9744b;
    }

    public Drawable h() {
        return this.f9750h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f9751i;
    }

    public List j() {
        return this.f9759q;
    }

    public Drawable k() {
        return this.f9746d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f9747e;
    }

    public Drawable m() {
        return this.f9760r;
    }

    public Drawable n() {
        return this.f9752j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f9753k;
    }

    public Resources p() {
        return this.f9743a;
    }

    public Drawable q() {
        return this.f9748f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f9749g;
    }

    public a s() {
        return this.f9761s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f9757o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f9754l = scalingUtils$ScaleType;
        this.f9755m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f9758p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f9745c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f9744b = i10;
        return this;
    }
}
