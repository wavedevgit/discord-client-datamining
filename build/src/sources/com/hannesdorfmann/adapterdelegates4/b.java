package com.hannesdorfmann.adapterdelegates4;

import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    /* JADX INFO: Access modifiers changed from: protected */
    public abstract boolean isForViewType(Object obj, int i10);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void onBindViewHolder(Object obj, int i10, RecyclerView.ViewHolder viewHolder, List list);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract RecyclerView.ViewHolder onCreateViewHolder(ViewGroup viewGroup);

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean onFailedToRecycleView(@NonNull RecyclerView.ViewHolder viewHolder) {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void onViewAttachedToWindow(@NonNull RecyclerView.ViewHolder viewHolder) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void onViewDetachedFromWindow(@NonNull RecyclerView.ViewHolder viewHolder) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void onViewRecycled(@NonNull RecyclerView.ViewHolder viewHolder) {
    }
}
