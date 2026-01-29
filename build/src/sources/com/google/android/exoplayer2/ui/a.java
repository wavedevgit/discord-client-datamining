package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.View;
import com.google.android.exoplayer2.ui.SubtitleView;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import zd.b;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends View implements SubtitleView.a {

    /* renamed from: d  reason: collision with root package name */
    private final List f14270d;

    /* renamed from: e  reason: collision with root package name */
    private List f14271e;

    /* renamed from: i  reason: collision with root package name */
    private int f14272i;

    /* renamed from: o  reason: collision with root package name */
    private float f14273o;

    /* renamed from: p  reason: collision with root package name */
    private ke.b f14274p;

    /* renamed from: q  reason: collision with root package name */
    private float f14275q;

    public a(Context context) {
        this(context, null);
    }

    private static zd.b b(zd.b bVar) {
        b.C0779b p10 = bVar.b().k(-3.4028235E38f).l(Integer.MIN_VALUE).p(null);
        if (bVar.f55592q == 0) {
            p10.h(1.0f - bVar.f55591p, 0);
        } else {
            p10.h((-bVar.f55591p) - 1.0f, 1);
        }
        int i10 = bVar.f55593r;
        if (i10 != 0) {
            if (i10 == 2) {
                p10.i(0);
            }
        } else {
            p10.i(2);
        }
        return p10.a();
    }

    @Override // com.google.android.exoplayer2.ui.SubtitleView.a
    public void a(List list, ke.b bVar, float f10, int i10, float f11) {
        this.f14271e = list;
        this.f14274p = bVar;
        this.f14273o = f10;
        this.f14272i = i10;
        this.f14275q = f11;
        while (this.f14270d.size() < list.size()) {
            this.f14270d.add(new f(getContext()));
        }
        invalidate();
    }

    @Override // android.view.View
    public void dispatchDraw(Canvas canvas) {
        List list = this.f14271e;
        if (!list.isEmpty()) {
            int height = getHeight();
            int paddingLeft = getPaddingLeft();
            int paddingTop = getPaddingTop();
            int width = getWidth() - getPaddingRight();
            int paddingBottom = height - getPaddingBottom();
            if (paddingBottom > paddingTop && width > paddingLeft) {
                int i10 = paddingBottom - paddingTop;
                float f10 = i.f(this.f14272i, this.f14273o, height, i10);
                if (f10 > 0.0f) {
                    int size = list.size();
                    for (int i11 = 0; i11 < size; i11++) {
                        zd.b bVar = (zd.b) list.get(i11);
                        if (bVar.A != Integer.MIN_VALUE) {
                            bVar = b(bVar);
                        }
                        ((f) this.f14270d.get(i11)).b(bVar, this.f14274p, f10, i.f(bVar.f55600y, bVar.f55601z, height, i10), this.f14275q, canvas, paddingLeft, paddingTop, width, paddingBottom);
                    }
                }
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f14270d = new ArrayList();
        this.f14271e = Collections.EMPTY_LIST;
        this.f14272i = 0;
        this.f14273o = 0.0533f;
        this.f14274p = ke.b.f33084g;
        this.f14275q = 0.08f;
    }
}
