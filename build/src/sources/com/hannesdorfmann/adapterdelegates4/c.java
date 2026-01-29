package com.hannesdorfmann.adapterdelegates4;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c extends a {
    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        Object obj = this.items;
        if (obj == null) {
            return 0;
        }
        return ((List) obj).size();
    }
}
