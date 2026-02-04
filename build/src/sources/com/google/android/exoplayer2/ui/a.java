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
    private final List f12867d;

    /* renamed from: e  reason: collision with root package name */
    private List f12868e;

    /* renamed from: i  reason: collision with root package name */
    private int f12869i;

    /* renamed from: o  reason: collision with root package name */
    private float f12870o;

    /* renamed from: p  reason: collision with root package name */
    private ke.b f12871p;

    /* renamed from: q  reason: collision with root package name */
    private float f12872q;

    public a(Context context) {
        this(context, null);
    }

    private static zd.b b(zd.b bVar) {
        b.C0784b p10 = bVar.b().k(-3.4028235E38f).l(Integer.MIN_VALUE).p(null);
        if (bVar.f55875q == 0) {
            p10.h(1.0f - bVar.f55874p, 0);
        } else {
            p10.h((-bVar.f55874p) - 1.0f, 1);
        }
        int i10 = bVar.f55876r;
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
        this.f12868e = list;
        this.f12871p = bVar;
        this.f12870o = f10;
        this.f12869i = i10;
        this.f12872q = f11;
        while (this.f12867d.size() < list.size()) {
            this.f12867d.add(new f(getContext()));
        }
        invalidate();
    }

    @Override // android.view.View
    public void dispatchDraw(Canvas canvas) {
        List list = this.f12868e;
        if (!list.isEmpty()) {
            int height = getHeight();
            int paddingLeft = getPaddingLeft();
            int paddingTop = getPaddingTop();
            int width = getWidth() - getPaddingRight();
            int paddingBottom = height - getPaddingBottom();
            if (paddingBottom > paddingTop && width > paddingLeft) {
                int i10 = paddingBottom - paddingTop;
                float f10 = i.f(this.f12869i, this.f12870o, height, i10);
                if (f10 > 0.0f) {
                    int size = list.size();
                    for (int i11 = 0; i11 < size; i11++) {
                        zd.b bVar = (zd.b) list.get(i11);
                        if (bVar.A != Integer.MIN_VALUE) {
                            bVar = b(bVar);
                        }
                        ((f) this.f12867d.get(i11)).b(bVar, this.f12871p, f10, i.f(bVar.f55883y, bVar.f55884z, height, i10), this.f12872q, canvas, paddingLeft, paddingTop, width, paddingBottom);
                    }
                }
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f12867d = new ArrayList();
        this.f12868e = Collections.EMPTY_LIST;
        this.f12869i = 0;
        this.f12870o = 0.0533f;
        this.f12871p = ke.b.f32244g;
        this.f12872q = 0.08f;
    }
}
