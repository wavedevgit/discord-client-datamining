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
    private List f12841d;

    /* renamed from: e  reason: collision with root package name */
    private ke.b f12842e;

    /* renamed from: i  reason: collision with root package name */
    private int f12843i;

    /* renamed from: o  reason: collision with root package name */
    private float f12844o;

    /* renamed from: p  reason: collision with root package name */
    private float f12845p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12846q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f12847r;

    /* renamed from: s  reason: collision with root package name */
    private int f12848s;

    /* renamed from: t  reason: collision with root package name */
    private a f12849t;

    /* renamed from: u  reason: collision with root package name */
    private View f12850u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(List list, ke.b bVar, float f10, int i10, float f11);
    }

    public SubtitleView(Context context) {
        this(context, null);
    }

    private zd.b a(zd.b bVar) {
        b.C0784b b10 = bVar.b();
        if (!this.f12846q) {
            i.c(b10);
        } else if (!this.f12847r) {
            i.d(b10);
        }
        return b10.a();
    }

    private void c(int i10, float f10) {
        this.f12843i = i10;
        this.f12844o = f10;
        f();
    }

    private void f() {
        this.f12849t.a(getCuesWithStylingPreferencesApplied(), this.f12842e, this.f12844o, this.f12843i, this.f12845p);
    }

    private List<zd.b> getCuesWithStylingPreferencesApplied() {
        if (this.f12846q && this.f12847r) {
            return this.f12841d;
        }
        ArrayList arrayList = new ArrayList(this.f12841d.size());
        for (int i10 = 0; i10 < this.f12841d.size(); i10++) {
            arrayList.add(a((zd.b) this.f12841d.get(i10)));
        }
        return arrayList;
    }

    private float getUserCaptionFontScale() {
        CaptioningManager captioningManager;
        if (w0.f40197a < 19 || isInEditMode() || (captioningManager = (CaptioningManager) getContext().getSystemService("captioning")) == null || !captioningManager.isEnabled()) {
            return 1.0f;
        }
        return captioningManager.getFontScale();
    }

    private ke.b getUserCaptionStyle() {
        if (w0.f40197a >= 19 && !isInEditMode()) {
            CaptioningManager captioningManager = (CaptioningManager) getContext().getSystemService("captioning");
            if (captioningManager != null && captioningManager.isEnabled()) {
                return ke.b.a(captioningManager.getUserStyle());
            }
            return ke.b.f32244g;
        }
        return ke.b.f32244g;
    }

    private <T extends View & a> void setView(T t10) {
        removeView(this.f12850u);
        View view = this.f12850u;
        if (view instanceof k) {
            ((k) view).g();
        }
        this.f12850u = t10;
        this.f12849t = t10;
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
        this.f12847r = z10;
        f();
    }

    public void setApplyEmbeddedStyles(boolean z10) {
        this.f12846q = z10;
        f();
    }

    public void setBottomPaddingFraction(float f10) {
        this.f12845p = f10;
        f();
    }

    public void setCues(List<zd.b> list) {
        if (list == null) {
            list = Collections.EMPTY_LIST;
        }
        this.f12841d = list;
        f();
    }

    public void setFractionalTextSize(float f10) {
        b(f10, false);
    }

    public void setStyle(ke.b bVar) {
        this.f12842e = bVar;
        f();
    }

    public void setViewType(int i10) {
        if (this.f12848s == i10) {
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
        this.f12848s = i10;
    }

    public SubtitleView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f12841d = Collections.EMPTY_LIST;
        this.f12842e = ke.b.f32244g;
        this.f12843i = 0;
        this.f12844o = 0.0533f;
        this.f12845p = 0.08f;
        this.f12846q = true;
        this.f12847r = true;
        com.google.android.exoplayer2.ui.a aVar = new com.google.android.exoplayer2.ui.a(context);
        this.f12849t = aVar;
        this.f12850u = aVar;
        addView(aVar);
        this.f12848s = 1;
    }
}
