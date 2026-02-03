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
    public static final ScalingUtils$ScaleType f10773t = ScalingUtils$ScaleType.f10669h;

    /* renamed from: u  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10774u = ScalingUtils$ScaleType.f10670i;

    /* renamed from: a  reason: collision with root package name */
    private Resources f10775a;

    /* renamed from: b  reason: collision with root package name */
    private int f10776b;

    /* renamed from: c  reason: collision with root package name */
    private float f10777c;

    /* renamed from: d  reason: collision with root package name */
    private Drawable f10778d;

    /* renamed from: e  reason: collision with root package name */
    private ScalingUtils$ScaleType f10779e;

    /* renamed from: f  reason: collision with root package name */
    private Drawable f10780f;

    /* renamed from: g  reason: collision with root package name */
    private ScalingUtils$ScaleType f10781g;

    /* renamed from: h  reason: collision with root package name */
    private Drawable f10782h;

    /* renamed from: i  reason: collision with root package name */
    private ScalingUtils$ScaleType f10783i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f10784j;

    /* renamed from: k  reason: collision with root package name */
    private ScalingUtils$ScaleType f10785k;

    /* renamed from: l  reason: collision with root package name */
    private ScalingUtils$ScaleType f10786l;

    /* renamed from: m  reason: collision with root package name */
    private Matrix f10787m;

    /* renamed from: n  reason: collision with root package name */
    private PointF f10788n;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f10789o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10790p;

    /* renamed from: q  reason: collision with root package name */
    private List f10791q;

    /* renamed from: r  reason: collision with root package name */
    private Drawable f10792r;

    /* renamed from: s  reason: collision with root package name */
    private a f10793s;

    public GenericDraweeHierarchyBuilder(Resources resources) {
        this.f10775a = resources;
        t();
    }

    private void L() {
        List<Drawable> list = this.f10791q;
        if (list != null) {
            for (Drawable drawable : list) {
                j.g(drawable);
            }
        }
    }

    private void t() {
        this.f10776b = ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
        this.f10777c = 0.0f;
        this.f10778d = null;
        ScalingUtils$ScaleType scalingUtils$ScaleType = f10773t;
        this.f10779e = scalingUtils$ScaleType;
        this.f10780f = null;
        this.f10781g = scalingUtils$ScaleType;
        this.f10782h = null;
        this.f10783i = scalingUtils$ScaleType;
        this.f10784j = null;
        this.f10785k = scalingUtils$ScaleType;
        this.f10786l = f10774u;
        this.f10787m = null;
        this.f10788n = null;
        this.f10789o = null;
        this.f10790p = null;
        this.f10791q = null;
        this.f10792r = null;
        this.f10793s = null;
    }

    public static GenericDraweeHierarchyBuilder u(Resources resources) {
        return new GenericDraweeHierarchyBuilder(resources);
    }

    public GenericDraweeHierarchyBuilder A(Drawable drawable) {
        this.f10782h = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder B(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10783i = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder C(Drawable drawable) {
        if (drawable == null) {
            this.f10791q = null;
            return this;
        }
        this.f10791q = Arrays.asList(drawable);
        return this;
    }

    public GenericDraweeHierarchyBuilder D(Drawable drawable) {
        this.f10778d = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder E(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10779e = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder F(Drawable drawable) {
        if (drawable == null) {
            this.f10792r = null;
            return this;
        }
        StateListDrawable stateListDrawable = new StateListDrawable();
        stateListDrawable.addState(new int[]{16842919}, drawable);
        this.f10792r = stateListDrawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder G(Drawable drawable) {
        this.f10784j = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder H(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10785k = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder I(Drawable drawable) {
        this.f10780f = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder J(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10781g = scalingUtils$ScaleType;
        return this;
    }

    public GenericDraweeHierarchyBuilder K(a aVar) {
        this.f10793s = aVar;
        return this;
    }

    public GenericDraweeHierarchy a() {
        L();
        return new GenericDraweeHierarchy(this);
    }

    public ColorFilter b() {
        return this.f10789o;
    }

    public PointF c() {
        return this.f10788n;
    }

    public ScalingUtils$ScaleType d() {
        return this.f10786l;
    }

    public Drawable e() {
        return this.f10790p;
    }

    public float f() {
        return this.f10777c;
    }

    public int g() {
        return this.f10776b;
    }

    public Drawable h() {
        return this.f10782h;
    }

    public ScalingUtils$ScaleType i() {
        return this.f10783i;
    }

    public List j() {
        return this.f10791q;
    }

    public Drawable k() {
        return this.f10778d;
    }

    public ScalingUtils$ScaleType l() {
        return this.f10779e;
    }

    public Drawable m() {
        return this.f10792r;
    }

    public Drawable n() {
        return this.f10784j;
    }

    public ScalingUtils$ScaleType o() {
        return this.f10785k;
    }

    public Resources p() {
        return this.f10775a;
    }

    public Drawable q() {
        return this.f10780f;
    }

    public ScalingUtils$ScaleType r() {
        return this.f10781g;
    }

    public a s() {
        return this.f10793s;
    }

    public GenericDraweeHierarchyBuilder v(ColorFilter colorFilter) {
        this.f10789o = colorFilter;
        return this;
    }

    public GenericDraweeHierarchyBuilder w(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f10786l = scalingUtils$ScaleType;
        this.f10787m = null;
        return this;
    }

    public GenericDraweeHierarchyBuilder x(Drawable drawable) {
        this.f10790p = drawable;
        return this;
    }

    public GenericDraweeHierarchyBuilder y(float f10) {
        this.f10777c = f10;
        return this;
    }

    public GenericDraweeHierarchyBuilder z(int i10) {
        this.f10776b = i10;
        return this;
    }
}
