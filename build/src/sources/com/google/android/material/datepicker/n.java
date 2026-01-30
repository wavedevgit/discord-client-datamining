package com.google.android.material.datepicker;

import android.content.Context;
import android.widget.BaseAdapter;
import android.widget.TextView;
import java.util.Collection;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n extends BaseAdapter {

    /* renamed from: p  reason: collision with root package name */
    static final int f15980p = t.i().getMaximum(4);

    /* renamed from: q  reason: collision with root package name */
    private static final int f15981q = (t.i().getMaximum(5) + t.i().getMaximum(7)) - 1;

    /* renamed from: d  reason: collision with root package name */
    final m f15982d;

    /* renamed from: e  reason: collision with root package name */
    private Collection f15983e;

    /* renamed from: i  reason: collision with root package name */
    c f15984i;

    /* renamed from: o  reason: collision with root package name */
    final a f15985o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(m mVar, d dVar, a aVar, g gVar) {
        this.f15982d = mVar;
        this.f15985o = aVar;
        this.f15983e = dVar.U1();
    }

    private String c(Context context, long j10) {
        return e.a(context, j10, j(j10), i(j10), g(j10));
    }

    private void f(Context context) {
        if (this.f15984i == null) {
            this.f15984i = new c(context);
        }
    }

    private boolean h(long j10) {
        throw null;
    }

    private boolean j(long j10) {
        if (t.g().getTimeInMillis() == j10) {
            return true;
        }
        return false;
    }

    private void m(TextView textView, long j10, int i10) {
        b bVar;
        if (textView == null) {
            return;
        }
        textView.setContentDescription(c(textView.getContext(), j10));
        if (this.f15985o.f().D0(j10)) {
            textView.setEnabled(true);
            boolean h10 = h(j10);
            textView.setSelected(h10);
            if (h10) {
                bVar = this.f15984i.f15901b;
            } else if (j(j10)) {
                bVar = this.f15984i.f15902c;
            } else {
                bVar = this.f15984i.f15900a;
            }
        } else {
            textView.setEnabled(false);
            bVar = this.f15984i.f15906g;
        }
        bVar.b(textView);
    }

    private void n(MaterialCalendarGridView materialCalendarGridView, long j10) {
        if (m.e(j10).equals(this.f15982d)) {
            int j11 = this.f15982d.j(j10);
            m((TextView) materialCalendarGridView.getChildAt(materialCalendarGridView.getAdapter2().a(j11) - materialCalendarGridView.getFirstVisiblePosition()), j10, j11);
        }
    }

    int a(int i10) {
        return b() + (i10 - 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f15982d.g(this.f15985o.i());
    }

    @Override // android.widget.Adapter
    /* renamed from: d */
    public Long getItem(int i10) {
        if (i10 >= b() && i10 <= k()) {
            return Long.valueOf(this.f15982d.i(l(i10)));
        }
        return null;
    }

    /* JADX WARN: Removed duplicated region for block: B:14:0x0063 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0064  */
    @Override // android.widget.Adapter
    /* renamed from: e */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public android.widget.TextView getView(int r6, android.view.View r7, android.view.ViewGroup r8) {
        /*
            r5 = this;
            android.content.Context r0 = r8.getContext()
            r5.f(r0)
            r0 = r7
            android.widget.TextView r0 = (android.widget.TextView) r0
            r1 = 0
            if (r7 != 0) goto L1e
            android.content.Context r7 = r8.getContext()
            android.view.LayoutInflater r7 = android.view.LayoutInflater.from(r7)
            int r0 = yg.h.f54481n
            android.view.View r7 = r7.inflate(r0, r8, r1)
            r0 = r7
            android.widget.TextView r0 = (android.widget.TextView) r0
        L1e:
            int r7 = r5.b()
            int r7 = r6 - r7
            if (r7 < 0) goto L54
            com.google.android.material.datepicker.m r8 = r5.f15982d
            int r2 = r8.f15977p
            if (r7 < r2) goto L2d
            goto L54
        L2d:
            r2 = 1
            int r7 = r7 + r2
            r0.setTag(r8)
            android.content.res.Resources r8 = r0.getResources()
            android.content.res.Configuration r8 = r8.getConfiguration()
            java.util.Locale r8 = r8.locale
            java.lang.Integer r3 = java.lang.Integer.valueOf(r7)
            java.lang.Object[] r3 = new java.lang.Object[]{r3}
            java.lang.String r4 = "%d"
            java.lang.String r8 = java.lang.String.format(r8, r4, r3)
            r0.setText(r8)
            r0.setVisibility(r1)
            r0.setEnabled(r2)
            goto L5d
        L54:
            r7 = 8
            r0.setVisibility(r7)
            r0.setEnabled(r1)
            r7 = -1
        L5d:
            java.lang.Long r6 = r5.getItem(r6)
            if (r6 != 0) goto L64
            return r0
        L64:
            long r1 = r6.longValue()
            r5.m(r0, r1, r7)
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.datepicker.n.getView(int, android.view.View, android.view.ViewGroup):android.widget.TextView");
    }

    boolean g(long j10) {
        throw null;
    }

    @Override // android.widget.Adapter
    public int getCount() {
        return f15981q;
    }

    @Override // android.widget.Adapter
    public long getItemId(int i10) {
        return i10 / this.f15982d.f15976o;
    }

    @Override // android.widget.BaseAdapter, android.widget.Adapter
    public boolean hasStableIds() {
        return true;
    }

    boolean i(long j10) {
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return (b() + this.f15982d.f15977p) - 1;
    }

    int l(int i10) {
        return (i10 - b()) + 1;
    }

    public void o(MaterialCalendarGridView materialCalendarGridView) {
        for (Long l10 : this.f15983e) {
            n(materialCalendarGridView, l10.longValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p(int i10) {
        if (i10 >= b() && i10 <= k()) {
            return true;
        }
        return false;
    }
}
