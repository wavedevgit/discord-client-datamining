package com.hannesdorfmann.adapterdelegates4;

import android.view.ViewGroup;
import androidx.collection.SparseArrayCompat;
import androidx.recyclerview.widget.RecyclerView;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AdapterDelegatesManager {

    /* renamed from: c  reason: collision with root package name */
    private static final List f17589c = Collections.EMPTY_LIST;

    /* renamed from: a  reason: collision with root package name */
    protected SparseArrayCompat f17590a = new SparseArrayCompat();

    /* renamed from: b  reason: collision with root package name */
    protected b f17591b;

    public AdapterDelegatesManager a(int i10, boolean z10, b bVar) {
        if (bVar != null) {
            if (i10 != 2147483646) {
                if (!z10 && this.f17590a.e(i10) != null) {
                    throw new IllegalArgumentException("An AdapterDelegate is already registered for the viewType = " + i10 + ". Already registered AdapterDelegate is " + this.f17590a.e(i10));
                }
                this.f17590a.k(i10, bVar);
                return this;
            }
            throw new IllegalArgumentException("The view type = 2147483646 is reserved for fallback adapter delegate (see setFallbackDelegate() ). Please use another view type.");
        }
        throw new NullPointerException("AdapterDelegate is null!");
    }

    public AdapterDelegatesManager b(b bVar) {
        int l10 = this.f17590a.l();
        while (this.f17590a.e(l10) != null) {
            l10++;
            if (l10 == 2147483646) {
                throw new IllegalArgumentException("Oops, we are very close to Integer.MAX_VALUE. It seems that there are no more free and unused view type integers left to add another AdapterDelegate.");
            }
        }
        return a(l10, false, bVar);
    }

    public b c(int i10) {
        return (b) this.f17590a.f(i10, this.f17591b);
    }

    public int d(Object obj, int i10) {
        String str;
        if (obj != null) {
            int l10 = this.f17590a.l();
            for (int i11 = 0; i11 < l10; i11++) {
                if (((b) this.f17590a.m(i11)).isForViewType(obj, i10)) {
                    return this.f17590a.j(i11);
                }
            }
            if (this.f17591b != null) {
                return 2147483646;
            }
            if (obj instanceof List) {
                str = "No AdapterDelegate added that matches item=" + ((List) obj).get(i10).toString() + " at position=" + i10 + " in data source";
            } else {
                str = "No AdapterDelegate added for item at position=" + i10 + ". items=" + obj;
            }
            throw new NullPointerException(str);
        }
        throw new NullPointerException("Items datasource is null!");
    }

    public int e(b bVar) {
        if (bVar != null) {
            int i10 = this.f17590a.i(bVar);
            if (i10 == -1) {
                return -1;
            }
            return this.f17590a.j(i10);
        }
        throw new NullPointerException("Delegate is null");
    }

    public void f(Object obj, int i10, RecyclerView.ViewHolder viewHolder, List list) {
        b c10 = c(viewHolder.getItemViewType());
        if (c10 != null) {
            if (list == null) {
                list = f17589c;
            }
            c10.onBindViewHolder(obj, i10, viewHolder, list);
            return;
        }
        throw new NullPointerException("No delegate found for item at position = " + i10 + " for viewType = " + viewHolder.getItemViewType());
    }

    public RecyclerView.ViewHolder g(ViewGroup viewGroup, int i10) {
        b c10 = c(i10);
        if (c10 != null) {
            RecyclerView.ViewHolder onCreateViewHolder = c10.onCreateViewHolder(viewGroup);
            if (onCreateViewHolder != null) {
                return onCreateViewHolder;
            }
            throw new NullPointerException("ViewHolder returned from AdapterDelegate " + c10 + " for ViewType =" + i10 + " is null!");
        }
        throw new NullPointerException("No AdapterDelegate added for ViewType " + i10);
    }

    public boolean h(RecyclerView.ViewHolder viewHolder) {
        b c10 = c(viewHolder.getItemViewType());
        if (c10 != null) {
            return c10.onFailedToRecycleView(viewHolder);
        }
        throw new NullPointerException("No delegate found for " + viewHolder + " for item at position = " + viewHolder.getAdapterPosition() + " for viewType = " + viewHolder.getItemViewType());
    }

    public void i(RecyclerView.ViewHolder viewHolder) {
        b c10 = c(viewHolder.getItemViewType());
        if (c10 != null) {
            c10.onViewAttachedToWindow(viewHolder);
            return;
        }
        throw new NullPointerException("No delegate found for " + viewHolder + " for item at position = " + viewHolder.getAdapterPosition() + " for viewType = " + viewHolder.getItemViewType());
    }

    public void j(RecyclerView.ViewHolder viewHolder) {
        b c10 = c(viewHolder.getItemViewType());
        if (c10 != null) {
            c10.onViewDetachedFromWindow(viewHolder);
            return;
        }
        throw new NullPointerException("No delegate found for " + viewHolder + " for item at position = " + viewHolder.getAdapterPosition() + " for viewType = " + viewHolder.getItemViewType());
    }

    public void k(RecyclerView.ViewHolder viewHolder) {
        b c10 = c(viewHolder.getItemViewType());
        if (c10 != null) {
            c10.onViewRecycled(viewHolder);
            return;
        }
        throw new NullPointerException("No delegate found for " + viewHolder + " for item at position = " + viewHolder.getAdapterPosition() + " for viewType = " + viewHolder.getItemViewType());
    }
}
