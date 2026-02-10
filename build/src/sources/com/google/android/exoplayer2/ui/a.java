package com.google.android.exoplayer2.ui;

import ae.b;
import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.View;
import com.google.android.exoplayer2.ui.SubtitleView;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends View implements SubtitleView.a {

    /* renamed from: d  reason: collision with root package name */
    private final List f13930d;

    /* renamed from: e  reason: collision with root package name */
    private List f13931e;

    /* renamed from: i  reason: collision with root package name */
    private int f13932i;

    /* renamed from: o  reason: collision with root package name */
    private float f13933o;

    /* renamed from: p  reason: collision with root package name */
    private le.b f13934p;

    /* renamed from: q  reason: collision with root package name */
    private float f13935q;

    public a(Context context) {
        this(context, null);
    }

    private static ae.b b(ae.b bVar) {
        b.C0009b p10 = bVar.b().k(-3.4028235E38f).l(Integer.MIN_VALUE).p(null);
        if (bVar.f711q == 0) {
            p10.h(1.0f - bVar.f710p, 0);
        } else {
            p10.h((-bVar.f710p) - 1.0f, 1);
        }
        int i10 = bVar.f712r;
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
    public void a(List list, le.b bVar, float f10, int i10, float f11) {
        this.f13931e = list;
        this.f13934p = bVar;
        this.f13933o = f10;
        this.f13932i = i10;
        this.f13935q = f11;
        while (this.f13930d.size() < list.size()) {
            this.f13930d.add(new f(getContext()));
        }
        invalidate();
    }

    @Override // android.view.View
    public void dispatchDraw(Canvas canvas) {
        List list = this.f13931e;
        if (!list.isEmpty()) {
            int height = getHeight();
            int paddingLeft = getPaddingLeft();
            int paddingTop = getPaddingTop();
            int width = getWidth() - getPaddingRight();
            int paddingBottom = height - getPaddingBottom();
            if (paddingBottom > paddingTop && width > paddingLeft) {
                int i10 = paddingBottom - paddingTop;
                float f10 = i.f(this.f13932i, this.f13933o, height, i10);
                if (f10 > 0.0f) {
                    int size = list.size();
                    for (int i11 = 0; i11 < size; i11++) {
                        ae.b bVar = (ae.b) list.get(i11);
                        if (bVar.A != Integer.MIN_VALUE) {
                            bVar = b(bVar);
                        }
                        ((f) this.f13930d.get(i11)).b(bVar, this.f13934p, f10, i.f(bVar.f719y, bVar.f720z, height, i10), this.f13935q, canvas, paddingLeft, paddingTop, width, paddingBottom);
                    }
                }
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f13930d = new ArrayList();
        this.f13931e = Collections.EMPTY_LIST;
        this.f13932i = 0;
        this.f13933o = 0.0533f;
        this.f13934p = le.b.f35716g;
        this.f13935q = 0.08f;
    }
}
