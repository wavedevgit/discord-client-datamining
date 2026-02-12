package com.google.android.material.datepicker;

import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class u extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final i f15730a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends RecyclerView.ViewHolder {

        /* renamed from: d  reason: collision with root package name */
        final TextView f15731d;

        a(TextView textView) {
            super(textView);
            this.f15731d = textView;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(i iVar) {
        this.f15730a = iVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a(int i10) {
        return i10 - this.f15730a.I().l().f15706i;
    }

    int b(int i10) {
        return this.f15730a.I().l().f15706i + i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: c */
    public void onBindViewHolder(a aVar, int i10) {
        int b10 = b(i10);
        aVar.f15731d.setText(String.format(Locale.getDefault(), "%d", Integer.valueOf(b10)));
        TextView textView = aVar.f15731d;
        textView.setContentDescription(e.e(textView.getContext(), b10));
        c J = this.f15730a.J();
        if (t.g().get(1) == b10) {
            b bVar = J.f15635f;
        } else {
            b bVar2 = J.f15633d;
        }
        this.f15730a.L();
        throw null;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: d */
    public a onCreateViewHolder(ViewGroup viewGroup, int i10) {
        return new a((TextView) LayoutInflater.from(viewGroup.getContext()).inflate(bh.h.f6894v, viewGroup, false));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f15730a.I().o();
    }
}
