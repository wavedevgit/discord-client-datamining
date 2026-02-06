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
    private List f13187d;

    /* renamed from: e  reason: collision with root package name */
    private ke.b f13188e;

    /* renamed from: i  reason: collision with root package name */
    private int f13189i;

    /* renamed from: o  reason: collision with root package name */
    private float f13190o;

    /* renamed from: p  reason: collision with root package name */
    private float f13191p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13192q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f13193r;

    /* renamed from: s  reason: collision with root package name */
    private int f13194s;

    /* renamed from: t  reason: collision with root package name */
    private a f13195t;

    /* renamed from: u  reason: collision with root package name */
    private View f13196u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(List list, ke.b bVar, float f10, int i10, float f11);
    }

    public SubtitleView(Context context) {
        this(context, null);
    }

    private zd.b a(zd.b bVar) {
        b.C0770b b10 = bVar.b();
        if (!this.f13192q) {
            i.c(b10);
        } else if (!this.f13193r) {
            i.d(b10);
        }
        return b10.a();
    }

    private void c(int i10, float f10) {
        this.f13189i = i10;
        this.f13190o = f10;
        f();
    }

    private void f() {
        this.f13195t.a(getCuesWithStylingPreferencesApplied(), this.f13188e, this.f13190o, this.f13189i, this.f13191p);
    }

    private List<zd.b> getCuesWithStylingPreferencesApplied() {
        if (this.f13192q && this.f13193r) {
            return this.f13187d;
        }
        ArrayList arrayList = new ArrayList(this.f13187d.size());
        for (int i10 = 0; i10 < this.f13187d.size(); i10++) {
            arrayList.add(a((zd.b) this.f13187d.get(i10)));
        }
        return arrayList;
    }

    private float getUserCaptionFontScale() {
        CaptioningManager captioningManager;
        if (w0.f39012a < 19 || isInEditMode() || (captioningManager = (CaptioningManager) getContext().getSystemService("captioning")) == null || !captioningManager.isEnabled()) {
            return 1.0f;
        }
        return captioningManager.getFontScale();
    }

    private ke.b getUserCaptionStyle() {
        if (w0.f39012a >= 19 && !isInEditMode()) {
            CaptioningManager captioningManager = (CaptioningManager) getContext().getSystemService("captioning");
            if (captioningManager != null && captioningManager.isEnabled()) {
                return ke.b.a(captioningManager.getUserStyle());
            }
            return ke.b.f31551g;
        }
        return ke.b.f31551g;
    }

    private <T extends View & a> void setView(T t10) {
        removeView(this.f13196u);
        View view = this.f13196u;
        if (view instanceof k) {
            ((k) view).g();
        }
        this.f13196u = t10;
        this.f13195t = t10;
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
        this.f13193r = z10;
        f();
    }

    public void setApplyEmbeddedStyles(boolean z10) {
        this.f13192q = z10;
        f();
    }

    public void setBottomPaddingFraction(float f10) {
        this.f13191p = f10;
        f();
    }

    public void setCues(List<zd.b> list) {
        if (list == null) {
            list = Collections.EMPTY_LIST;
        }
        this.f13187d = list;
        f();
    }

    public void setFractionalTextSize(float f10) {
        b(f10, false);
    }

    public void setStyle(ke.b bVar) {
        this.f13188e = bVar;
        f();
    }

    public void setViewType(int i10) {
        if (this.f13194s == i10) {
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
        this.f13194s = i10;
    }

    public SubtitleView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f13187d = Collections.EMPTY_LIST;
        this.f13188e = ke.b.f31551g;
        this.f13189i = 0;
        this.f13190o = 0.0533f;
        this.f13191p = 0.08f;
        this.f13192q = true;
        this.f13193r = true;
        com.google.android.exoplayer2.ui.a aVar = new com.google.android.exoplayer2.ui.a(context);
        this.f13195t = aVar;
        this.f13196u = aVar;
        addView(aVar);
        this.f13194s = 1;
    }
}
