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
    private final List f13213d;

    /* renamed from: e  reason: collision with root package name */
    private List f13214e;

    /* renamed from: i  reason: collision with root package name */
    private int f13215i;

    /* renamed from: o  reason: collision with root package name */
    private float f13216o;

    /* renamed from: p  reason: collision with root package name */
    private ke.b f13217p;

    /* renamed from: q  reason: collision with root package name */
    private float f13218q;

    public a(Context context) {
        this(context, null);
    }

    private static zd.b b(zd.b bVar) {
        b.C0770b p10 = bVar.b().k(-3.4028235E38f).l(Integer.MIN_VALUE).p(null);
        if (bVar.f56195q == 0) {
            p10.h(1.0f - bVar.f56194p, 0);
        } else {
            p10.h((-bVar.f56194p) - 1.0f, 1);
        }
        int i10 = bVar.f56196r;
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
        this.f13214e = list;
        this.f13217p = bVar;
        this.f13216o = f10;
        this.f13215i = i10;
        this.f13218q = f11;
        while (this.f13213d.size() < list.size()) {
            this.f13213d.add(new f(getContext()));
        }
        invalidate();
    }

    @Override // android.view.View
    public void dispatchDraw(Canvas canvas) {
        List list = this.f13214e;
        if (!list.isEmpty()) {
            int height = getHeight();
            int paddingLeft = getPaddingLeft();
            int paddingTop = getPaddingTop();
            int width = getWidth() - getPaddingRight();
            int paddingBottom = height - getPaddingBottom();
            if (paddingBottom > paddingTop && width > paddingLeft) {
                int i10 = paddingBottom - paddingTop;
                float f10 = i.f(this.f13215i, this.f13216o, height, i10);
                if (f10 > 0.0f) {
                    int size = list.size();
                    for (int i11 = 0; i11 < size; i11++) {
                        zd.b bVar = (zd.b) list.get(i11);
                        if (bVar.A != Integer.MIN_VALUE) {
                            bVar = b(bVar);
                        }
                        ((f) this.f13213d.get(i11)).b(bVar, this.f13217p, f10, i.f(bVar.f56203y, bVar.f56204z, height, i10), this.f13218q, canvas, paddingLeft, paddingTop, width, paddingBottom);
                    }
                }
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f13213d = new ArrayList();
        this.f13214e = Collections.EMPTY_LIST;
        this.f13215i = 0;
        this.f13216o = 0.0533f;
        this.f13217p = ke.b.f31551g;
        this.f13218q = 0.08f;
    }
}
