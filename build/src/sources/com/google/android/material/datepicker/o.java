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
    private final com.google.android.material.datepicker.a f14957a;

    /* renamed from: b  reason: collision with root package name */
    private final i.m f14958b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14959c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements AdapterView.OnItemClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ MaterialCalendarGridView f14960d;

        a(MaterialCalendarGridView materialCalendarGridView) {
            this.f14960d = materialCalendarGridView;
        }

        @Override // android.widget.AdapterView.OnItemClickListener
        public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
            if (this.f14960d.getAdapter2().p(i10)) {
                o.this.f14958b.a(this.f14960d.getAdapter2().getItem(i10).longValue());
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends RecyclerView.ViewHolder {

        /* renamed from: d  reason: collision with root package name */
        final TextView f14962d;

        /* renamed from: e  reason: collision with root package name */
        final MaterialCalendarGridView f14963e;

        b(LinearLayout linearLayout, boolean z10) {
            super(linearLayout);
            TextView textView = (TextView) linearLayout.findViewById(ah.f.f742w);
            this.f14962d = textView;
            h0.o0(textView, true);
            this.f14963e = (MaterialCalendarGridView) linearLayout.findViewById(ah.f.f738s);
            if (!z10) {
                textView.setVisibility(8);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Context context, d dVar, com.google.android.material.datepicker.a aVar, g gVar, i.m mVar) {
        int i10;
        m o10 = aVar.o();
        m h10 = aVar.h();
        m l10 = aVar.l();
        if (o10.compareTo(l10) <= 0) {
            if (l10.compareTo(h10) <= 0) {
                int K = n.f14951p * i.K(context);
                if (k.J(context)) {
                    i10 = i.K(context);
                } else {
                    i10 = 0;
                }
                this.f14959c = K + i10;
                this.f14957a = aVar;
                this.f14958b = mVar;
                setHasStableIds(true);
                return;
            }
            throw new IllegalArgumentException("currentPage cannot be after lastPage");
        }
        throw new IllegalArgumentException("firstPage cannot be after currentPage");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m b(int i10) {
        return this.f14957a.o().r(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence c(int i10) {
        return b(i10).o();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d(m mVar) {
        return this.f14957a.o().t(mVar);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: e */
    public void onBindViewHolder(b bVar, int i10) {
        m r10 = this.f14957a.o().r(i10);
        bVar.f14962d.setText(r10.o());
        MaterialCalendarGridView materialCalendarGridView = (MaterialCalendarGridView) bVar.f14963e.findViewById(ah.f.f738s);
        if (materialCalendarGridView.getAdapter2() != null && r10.equals(materialCalendarGridView.getAdapter2().f14953d)) {
            materialCalendarGridView.invalidate();
            materialCalendarGridView.getAdapter2().o(materialCalendarGridView);
        } else {
            n nVar = new n(r10, null, this.f14957a, null);
            materialCalendarGridView.setNumColumns(r10.f14947o);
            materialCalendarGridView.setAdapter((ListAdapter) nVar);
        }
        materialCalendarGridView.setOnItemClickListener(new a(materialCalendarGridView));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: f */
    public b onCreateViewHolder(ViewGroup viewGroup, int i10) {
        LinearLayout linearLayout = (LinearLayout) LayoutInflater.from(viewGroup.getContext()).inflate(ah.h.f767q, viewGroup, false);
        if (k.J(viewGroup.getContext())) {
            linearLayout.setLayoutParams(new RecyclerView.LayoutParams(-1, this.f14959c));
            return new b(linearLayout, true);
        }
        return new b(linearLayout, false);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f14957a.j();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public long getItemId(int i10) {
        return this.f14957a.o().r(i10).q();
    }
}
