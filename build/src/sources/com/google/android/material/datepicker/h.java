package com.google.android.material.datepicker;

import android.os.Build;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;
import java.util.Calendar;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends BaseAdapter {

    /* renamed from: o  reason: collision with root package name */
    private static final int f14506o;

    /* renamed from: d  reason: collision with root package name */
    private final Calendar f14507d;

    /* renamed from: e  reason: collision with root package name */
    private final int f14508e;

    /* renamed from: i  reason: collision with root package name */
    private final int f14509i;

    static {
        int i10;
        if (Build.VERSION.SDK_INT >= 26) {
            i10 = 4;
        } else {
            i10 = 1;
        }
        f14506o = i10;
    }

    public h() {
        Calendar i10 = t.i();
        this.f14507d = i10;
        this.f14508e = i10.getMaximum(7);
        this.f14509i = i10.getFirstDayOfWeek();
    }

    private int b(int i10) {
        int i11 = i10 + this.f14509i;
        int i12 = this.f14508e;
        if (i11 > i12) {
            return i11 - i12;
        }
        return i11;
    }

    @Override // android.widget.Adapter
    /* renamed from: a */
    public Integer getItem(int i10) {
        if (i10 >= this.f14508e) {
            return null;
        }
        return Integer.valueOf(b(i10));
    }

    @Override // android.widget.Adapter
    public int getCount() {
        return this.f14508e;
    }

    @Override // android.widget.Adapter
    public long getItemId(int i10) {
        return 0L;
    }

    @Override // android.widget.Adapter
    public View getView(int i10, View view, ViewGroup viewGroup) {
        TextView textView = (TextView) view;
        if (view == null) {
            textView = (TextView) LayoutInflater.from(viewGroup.getContext()).inflate(yg.h.f54212o, viewGroup, false);
        }
        this.f14507d.set(7, b(i10));
        textView.setText(this.f14507d.getDisplayName(7, f14506o, textView.getResources().getConfiguration().locale));
        textView.setContentDescription(String.format(viewGroup.getContext().getString(yg.i.f54232l), this.f14507d.getDisplayName(7, 2, Locale.getDefault())));
        return textView;
    }

    public h(int i10) {
        Calendar i11 = t.i();
        this.f14507d = i11;
        this.f14508e = i11.getMaximum(7);
        this.f14509i = i10;
    }
}
