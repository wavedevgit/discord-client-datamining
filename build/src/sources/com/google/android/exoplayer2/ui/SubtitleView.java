package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.accessibility.CaptioningManager;
import android.widget.FrameLayout;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import ne.w0;
import zd.b;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SubtitleView extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private List f13873d;

    /* renamed from: e  reason: collision with root package name */
    private ke.b f13874e;

    /* renamed from: i  reason: collision with root package name */
    private int f13875i;

    /* renamed from: o  reason: collision with root package name */
    private float f13876o;

    /* renamed from: p  reason: collision with root package name */
    private float f13877p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13878q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f13879r;

    /* renamed from: s  reason: collision with root package name */
    private int f13880s;

    /* renamed from: t  reason: collision with root package name */
    private a f13881t;

    /* renamed from: u  reason: collision with root package name */
    private View f13882u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(List list, ke.b bVar, float f10, int i10, float f11);
    }

    public SubtitleView(Context context) {
        this(context, null);
    }

    private zd.b a(zd.b bVar) {
        b.C0790b b10 = bVar.b();
        if (!this.f13878q) {
            i.c(b10);
        } else if (!this.f13879r) {
            i.d(b10);
        }
        return b10.a();
    }

    private void c(int i10, float f10) {
        this.f13875i = i10;
        this.f13876o = f10;
        f();
    }

    private void f() {
        this.f13881t.a(getCuesWithStylingPreferencesApplied(), this.f13874e, this.f13876o, this.f13875i, this.f13877p);
    }

    private List<zd.b> getCuesWithStylingPreferencesApplied() {
        if (this.f13878q && this.f13879r) {
            return this.f13873d;
        }
        ArrayList arrayList = new ArrayList(this.f13873d.size());
        for (int i10 = 0; i10 < this.f13873d.size(); i10++) {
            arrayList.add(a((zd.b) this.f13873d.get(i10)));
        }
        return arrayList;
    }

    private float getUserCaptionFontScale() {
        CaptioningManager captioningManager;
        if (w0.f40158a < 19 || isInEditMode() || (captioningManager = (CaptioningManager) getContext().getSystemService("captioning")) == null || !captioningManager.isEnabled()) {
            return 1.0f;
        }
        return captioningManager.getFontScale();
    }

    private ke.b getUserCaptionStyle() {
        if (w0.f40158a >= 19 && !isInEditMode()) {
            CaptioningManager captioningManager = (CaptioningManager) getContext().getSystemService("captioning");
            if (captioningManager != null && captioningManager.isEnabled()) {
                return ke.b.a(captioningManager.getUserStyle());
            }
            return ke.b.f32846g;
        }
        return ke.b.f32846g;
    }

    private <T extends View & a> void setView(T t10) {
        removeView(this.f13882u);
        View view = this.f13882u;
        if (view instanceof k) {
            ((k) view).g();
        }
        this.f13882u = t10;
        this.f13881t = t10;
        addView(t10);
    }

    public void b(float f10, boolean z10) {
        c(z10 ? 1 : 0, f10);
    }

    public void d() {
        setStyle(getUserCaptionStyle());
    }

    public void e() {
        setFractionalTextSize(getUserCaptionFontScale() * 0.0533f);
    }

    public void setApplyEmbeddedFontSizes(boolean z10) {
        this.f13879r = z10;
        f();
    }

    public void setApplyEmbeddedStyles(boolean z10) {
        this.f13878q = z10;
        f();
    }

    public void setBottomPaddingFraction(float f10) {
        this.f13877p = f10;
        f();
    }

    public void setCues(List<zd.b> list) {
        if (list == null) {
            list = Collections.EMPTY_LIST;
        }
        this.f13873d = list;
        f();
    }

    public void setFractionalTextSize(float f10) {
        b(f10, false);
    }

    public void setStyle(ke.b bVar) {
        this.f13874e = bVar;
        f();
    }

    public void setViewType(int i10) {
        if (this.f13880s == i10) {
            return;
        }
        if (i10 != 1) {
            if (i10 == 2) {
                setView(new k(getContext()));
            } else {
                throw new IllegalArgumentException();
            }
        } else {
            setView(new com.google.android.exoplayer2.ui.a(getContext()));
        }
        this.f13880s = i10;
    }

    public SubtitleView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f13873d = Collections.EMPTY_LIST;
        this.f13874e = ke.b.f32846g;
        this.f13875i = 0;
        this.f13876o = 0.0533f;
        this.f13877p = 0.08f;
        this.f13878q = true;
        this.f13879r = true;
        com.google.android.exoplayer2.ui.a aVar = new com.google.android.exoplayer2.ui.a(context);
        this.f13881t = aVar;
        this.f13882u = aVar;
        addView(aVar);
        this.f13880s = 1;
    }
}
