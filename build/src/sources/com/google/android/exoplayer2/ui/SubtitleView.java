package com.google.android.exoplayer2.ui;

import ae.b;
import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.accessibility.CaptioningManager;
import android.widget.FrameLayout;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import oe.w0;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SubtitleView extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private List f13904d;

    /* renamed from: e  reason: collision with root package name */
    private le.b f13905e;

    /* renamed from: i  reason: collision with root package name */
    private int f13906i;

    /* renamed from: o  reason: collision with root package name */
    private float f13907o;

    /* renamed from: p  reason: collision with root package name */
    private float f13908p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13909q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f13910r;

    /* renamed from: s  reason: collision with root package name */
    private int f13911s;

    /* renamed from: t  reason: collision with root package name */
    private a f13912t;

    /* renamed from: u  reason: collision with root package name */
    private View f13913u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(List list, le.b bVar, float f10, int i10, float f11);
    }

    public SubtitleView(Context context) {
        this(context, null);
    }

    private ae.b a(ae.b bVar) {
        b.C0009b b10 = bVar.b();
        if (!this.f13909q) {
            i.c(b10);
        } else if (!this.f13910r) {
            i.d(b10);
        }
        return b10.a();
    }

    private void c(int i10, float f10) {
        this.f13906i = i10;
        this.f13907o = f10;
        f();
    }

    private void f() {
        this.f13912t.a(getCuesWithStylingPreferencesApplied(), this.f13905e, this.f13907o, this.f13906i, this.f13908p);
    }

    private List<ae.b> getCuesWithStylingPreferencesApplied() {
        if (this.f13909q && this.f13910r) {
            return this.f13904d;
        }
        ArrayList arrayList = new ArrayList(this.f13904d.size());
        for (int i10 = 0; i10 < this.f13904d.size(); i10++) {
            arrayList.add(a((ae.b) this.f13904d.get(i10)));
        }
        return arrayList;
    }

    private float getUserCaptionFontScale() {
        CaptioningManager captioningManager;
        if (w0.f39037a < 19 || isInEditMode() || (captioningManager = (CaptioningManager) getContext().getSystemService("captioning")) == null || !captioningManager.isEnabled()) {
            return 1.0f;
        }
        return captioningManager.getFontScale();
    }

    private le.b getUserCaptionStyle() {
        if (w0.f39037a >= 19 && !isInEditMode()) {
            CaptioningManager captioningManager = (CaptioningManager) getContext().getSystemService("captioning");
            if (captioningManager != null && captioningManager.isEnabled()) {
                return le.b.a(captioningManager.getUserStyle());
            }
            return le.b.f35716g;
        }
        return le.b.f35716g;
    }

    private <T extends View & a> void setView(T t10) {
        removeView(this.f13913u);
        View view = this.f13913u;
        if (view instanceof k) {
            ((k) view).g();
        }
        this.f13913u = t10;
        this.f13912t = t10;
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
        this.f13910r = z10;
        f();
    }

    public void setApplyEmbeddedStyles(boolean z10) {
        this.f13909q = z10;
        f();
    }

    public void setBottomPaddingFraction(float f10) {
        this.f13908p = f10;
        f();
    }

    public void setCues(List<ae.b> list) {
        if (list == null) {
            list = Collections.EMPTY_LIST;
        }
        this.f13904d = list;
        f();
    }

    public void setFractionalTextSize(float f10) {
        b(f10, false);
    }

    public void setStyle(le.b bVar) {
        this.f13905e = bVar;
        f();
    }

    public void setViewType(int i10) {
        if (this.f13911s == i10) {
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
        this.f13911s = i10;
    }

    public SubtitleView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f13904d = Collections.EMPTY_LIST;
        this.f13905e = le.b.f35716g;
        this.f13906i = 0;
        this.f13907o = 0.0533f;
        this.f13908p = 0.08f;
        this.f13909q = true;
        this.f13910r = true;
        com.google.android.exoplayer2.ui.a aVar = new com.google.android.exoplayer2.ui.a(context);
        this.f13912t = aVar;
        this.f13913u = aVar;
        addView(aVar);
        this.f13911s = 1;
    }
}
