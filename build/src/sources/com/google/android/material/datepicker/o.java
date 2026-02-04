package com.google.android.material.datepicker;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.TextView;
import androidx.core.view.h0;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.datepicker.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class o extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.material.datepicker.a f14583a;

    /* renamed from: b  reason: collision with root package name */
    private final i.m f14584b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14585c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements AdapterView.OnItemClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ MaterialCalendarGridView f14586d;

        a(MaterialCalendarGridView materialCalendarGridView) {
            this.f14586d = materialCalendarGridView;
        }

        @Override // android.widget.AdapterView.OnItemClickListener
        public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
            if (this.f14586d.getAdapter2().p(i10)) {
                o.this.f14584b.a(this.f14586d.getAdapter2().getItem(i10).longValue());
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends RecyclerView.ViewHolder {

        /* renamed from: d  reason: collision with root package name */
        final TextView f14588d;

        /* renamed from: e  reason: collision with root package name */
        final MaterialCalendarGridView f14589e;

        b(LinearLayout linearLayout, boolean z10) {
            super(linearLayout);
            TextView textView = (TextView) linearLayout.findViewById(yg.f.f54189w);
            this.f14588d = textView;
            h0.o0(textView, true);
            this.f14589e = (MaterialCalendarGridView) linearLayout.findViewById(yg.f.f54185s);
            if (!z10) {
                textView.setVisibility(8);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Context context, d dVar, com.google.android.material.datepicker.a aVar, g gVar, i.m mVar) {
        int i10;
        m m10 = aVar.m();
        m g10 = aVar.g();
        m k10 = aVar.k();
        if (m10.compareTo(k10) <= 0) {
            if (k10.compareTo(g10) <= 0) {
                int K = n.f14577p * i.K(context);
                if (k.J(context)) {
                    i10 = i.K(context);
                } else {
                    i10 = 0;
                }
                this.f14585c = K + i10;
                this.f14583a = aVar;
                this.f14584b = mVar;
                setHasStableIds(true);
                return;
            }
            throw new IllegalArgumentException("currentPage cannot be after lastPage");
        }
        throw new IllegalArgumentException("firstPage cannot be after currentPage");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m b(int i10) {
        return this.f14583a.m().p(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence c(int i10) {
        return b(i10).k();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d(m mVar) {
        return this.f14583a.m().q(mVar);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: e */
    public void onBindViewHolder(b bVar, int i10) {
        m p10 = this.f14583a.m().p(i10);
        bVar.f14588d.setText(p10.k());
        MaterialCalendarGridView materialCalendarGridView = (MaterialCalendarGridView) bVar.f14589e.findViewById(yg.f.f54185s);
        if (materialCalendarGridView.getAdapter2() != null && p10.equals(materialCalendarGridView.getAdapter2().f14579d)) {
            materialCalendarGridView.invalidate();
            materialCalendarGridView.getAdapter2().o(materialCalendarGridView);
        } else {
            n nVar = new n(p10, null, this.f14583a, null);
            materialCalendarGridView.setNumColumns(p10.f14573o);
            materialCalendarGridView.setAdapter((ListAdapter) nVar);
        }
        materialCalendarGridView.setOnItemClickListener(new a(materialCalendarGridView));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: f */
    public b onCreateViewHolder(ViewGroup viewGroup, int i10) {
        LinearLayout linearLayout = (LinearLayout) LayoutInflater.from(viewGroup.getContext()).inflate(yg.h.f54214q, viewGroup, false);
        if (k.J(viewGroup.getContext())) {
            linearLayout.setLayoutParams(new RecyclerView.LayoutParams(-1, this.f14585c));
            return new b(linearLayout, true);
        }
        return new b(linearLayout, false);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f14583a.j();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public long getItemId(int i10) {
        return this.f14583a.m().p(i10).o();
    }
}
