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
    private final i f14596a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends RecyclerView.ViewHolder {

        /* renamed from: d  reason: collision with root package name */
        final TextView f14597d;

        a(TextView textView) {
            super(textView);
            this.f14597d = textView;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(i iVar) {
        this.f14596a = iVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a(int i10) {
        return i10 - this.f14596a.G().m().f14572i;
    }

    int b(int i10) {
        return this.f14596a.G().m().f14572i + i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: c */
    public void onBindViewHolder(a aVar, int i10) {
        int b10 = b(i10);
        aVar.f14597d.setText(String.format(Locale.getDefault(), "%d", Integer.valueOf(b10)));
        TextView textView = aVar.f14597d;
        textView.setContentDescription(e.e(textView.getContext(), b10));
        c H = this.f14596a.H();
        if (t.g().get(1) == b10) {
            b bVar = H.f14502f;
        } else {
            b bVar2 = H.f14500d;
        }
        this.f14596a.J();
        throw null;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: d */
    public a onCreateViewHolder(ViewGroup viewGroup, int i10) {
        return new a((TextView) LayoutInflater.from(viewGroup.getContext()).inflate(yg.h.f54216s, viewGroup, false));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f14596a.G().n();
    }
}
