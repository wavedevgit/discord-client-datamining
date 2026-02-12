package com.google.android.material.datepicker;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.TextView;
import androidx.core.view.i0;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.datepicker.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class o extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.material.datepicker.a f15717a;

    /* renamed from: b  reason: collision with root package name */
    private final i.m f15718b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15719c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements AdapterView.OnItemClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ MaterialCalendarGridView f15720d;

        a(MaterialCalendarGridView materialCalendarGridView) {
            this.f15720d = materialCalendarGridView;
        }

        @Override // android.widget.AdapterView.OnItemClickListener
        public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
            if (this.f15720d.getAdapter2().p(i10)) {
                o.this.f15718b.a(this.f15720d.getAdapter2().getItem(i10).longValue());
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends RecyclerView.ViewHolder {

        /* renamed from: d  reason: collision with root package name */
        final TextView f15722d;

        /* renamed from: e  reason: collision with root package name */
        final MaterialCalendarGridView f15723e;

        b(LinearLayout linearLayout, boolean z10) {
            super(linearLayout);
            TextView textView = (TextView) linearLayout.findViewById(bh.f.f6864w);
            this.f15722d = textView;
            i0.l0(textView, true);
            this.f15723e = (MaterialCalendarGridView) linearLayout.findViewById(bh.f.f6860s);
            if (!z10) {
                textView.setVisibility(8);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Context context, d dVar, com.google.android.material.datepicker.a aVar, g gVar, i.m mVar) {
        int i10;
        m l10 = aVar.l();
        m g10 = aVar.g();
        m k10 = aVar.k();
        if (l10.compareTo(k10) <= 0) {
            if (k10.compareTo(g10) <= 0) {
                int M = n.f15711p * i.M(context);
                if (k.J(context)) {
                    i10 = i.M(context);
                } else {
                    i10 = 0;
                }
                this.f15719c = M + i10;
                this.f15717a = aVar;
                this.f15718b = mVar;
                setHasStableIds(true);
                return;
            }
            throw new IllegalArgumentException("currentPage cannot be after lastPage");
        }
        throw new IllegalArgumentException("firstPage cannot be after currentPage");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m b(int i10) {
        return this.f15717a.l().q(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence c(int i10) {
        return b(i10).l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d(m mVar) {
        return this.f15717a.l().r(mVar);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: e */
    public void onBindViewHolder(b bVar, int i10) {
        m q10 = this.f15717a.l().q(i10);
        bVar.f15722d.setText(q10.l());
        MaterialCalendarGridView materialCalendarGridView = (MaterialCalendarGridView) bVar.f15723e.findViewById(bh.f.f6860s);
        if (materialCalendarGridView.getAdapter2() != null && q10.equals(materialCalendarGridView.getAdapter2().f15713d)) {
            materialCalendarGridView.invalidate();
            materialCalendarGridView.getAdapter2().o(materialCalendarGridView);
        } else {
            n nVar = new n(q10, null, this.f15717a, null);
            materialCalendarGridView.setNumColumns(q10.f15707o);
            materialCalendarGridView.setAdapter((ListAdapter) nVar);
        }
        materialCalendarGridView.setOnItemClickListener(new a(materialCalendarGridView));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: f */
    public b onCreateViewHolder(ViewGroup viewGroup, int i10) {
        LinearLayout linearLayout = (LinearLayout) LayoutInflater.from(viewGroup.getContext()).inflate(bh.h.f6892t, viewGroup, false);
        if (k.J(viewGroup.getContext())) {
            linearLayout.setLayoutParams(new RecyclerView.LayoutParams(-1, this.f15719c));
            return new b(linearLayout, true);
        }
        return new b(linearLayout, false);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f15717a.j();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public long getItemId(int i10) {
        return this.f15717a.l().q(i10).o();
    }
}
