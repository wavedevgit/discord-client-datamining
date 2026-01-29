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
    private List f14244d;

    /* renamed from: e  reason: collision with root package name */
    private ke.b f14245e;

    /* renamed from: i  reason: collision with root package name */
    private int f14246i;

    /* renamed from: o  reason: collision with root package name */
    private float f14247o;

    /* renamed from: p  reason: collision with root package name */
    private float f14248p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14249q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14250r;

    /* renamed from: s  reason: collision with root package name */
    private int f14251s;

    /* renamed from: t  reason: collision with root package name */
    private a f14252t;

    /* renamed from: u  reason: collision with root package name */
    private View f14253u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(List list, ke.b bVar, float f10, int i10, float f11);
    }

    public SubtitleView(Context context) {
        this(context, null);
    }

    private zd.b a(zd.b bVar) {
        b.C0779b b10 = bVar.b();
        if (!this.f14249q) {
            i.c(b10);
        } else if (!this.f14250r) {
            i.d(b10);
        }
        return b10.a();
    }

    private void c(int i10, float f10) {
        this.f14246i = i10;
        this.f14247o = f10;
        f();
    }

    private void f() {
        this.f14252t.a(getCuesWithStylingPreferencesApplied(), this.f14245e, this.f14247o, this.f14246i, this.f14248p);
    }

    private List<zd.b> getCuesWithStylingPreferencesApplied() {
        if (this.f14249q && this.f14250r) {
            return this.f14244d;
        }
        ArrayList arrayList = new ArrayList(this.f14244d.size());
        for (int i10 = 0; i10 < this.f14244d.size(); i10++) {
            arrayList.add(a((zd.b) this.f14244d.get(i10)));
        }
        return arrayList;
    }

    private float getUserCaptionFontScale() {
        CaptioningManager captioningManager;
        if (w0.f40279a < 19 || isInEditMode() || (captioningManager = (CaptioningManager) getContext().getSystemService("captioning")) == null || !captioningManager.isEnabled()) {
            return 1.0f;
        }
        return captioningManager.getFontScale();
    }

    private ke.b getUserCaptionStyle() {
        if (w0.f40279a >= 19 && !isInEditMode()) {
            CaptioningManager captioningManager = (CaptioningManager) getContext().getSystemService("captioning");
            if (captioningManager != null && captioningManager.isEnabled()) {
                return ke.b.a(captioningManager.getUserStyle());
            }
            return ke.b.f33084g;
        }
        return ke.b.f33084g;
    }

    private <T extends View & a> void setView(T t10) {
        removeView(this.f14253u);
        View view = this.f14253u;
        if (view instanceof k) {
            ((k) view).g();
        }
        this.f14253u = t10;
        this.f14252t = t10;
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
        this.f14250r = z10;
        f();
    }

    public void setApplyEmbeddedStyles(boolean z10) {
        this.f14249q = z10;
        f();
    }

    public void setBottomPaddingFraction(float f10) {
        this.f14248p = f10;
        f();
    }

    public void setCues(List<zd.b> list) {
        if (list == null) {
            list = Collections.EMPTY_LIST;
        }
        this.f14244d = list;
        f();
    }

    public void setFractionalTextSize(float f10) {
        b(f10, false);
    }

    public void setStyle(ke.b bVar) {
        this.f14245e = bVar;
        f();
    }

    public void setViewType(int i10) {
        if (this.f14251s == i10) {
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
        this.f14251s = i10;
    }

    public SubtitleView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f14244d = Collections.EMPTY_LIST;
        this.f14245e = ke.b.f33084g;
        this.f14246i = 0;
        this.f14247o = 0.0533f;
        this.f14248p = 0.08f;
        this.f14249q = true;
        this.f14250r = true;
        com.google.android.exoplayer2.ui.a aVar = new com.google.android.exoplayer2.ui.a(context);
        this.f14252t = aVar;
        this.f14253u = aVar;
        addView(aVar);
        this.f14251s = 1;
    }
}
