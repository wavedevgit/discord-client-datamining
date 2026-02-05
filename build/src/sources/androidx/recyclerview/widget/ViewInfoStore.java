package androidx.recyclerview.widget;

import androidx.collection.SimpleArrayMap;
import androidx.core.util.Pools$SimplePool;
import androidx.recyclerview.widget.RecyclerView;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ViewInfoStore {

    /* renamed from: a  reason: collision with root package name */
    final SimpleArrayMap f5048a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final u0.j f5049b = new u0.j();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface ProcessCallback {
        void a(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo2);

        void b(RecyclerView.ViewHolder viewHolder);

        void c(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo2);

        void d(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: d  reason: collision with root package name */
        static b2.d f5050d = new Pools$SimplePool(20);

        /* renamed from: a  reason: collision with root package name */
        int f5051a;

        /* renamed from: b  reason: collision with root package name */
        RecyclerView.ItemAnimator.ItemHolderInfo f5052b;

        /* renamed from: c  reason: collision with root package name */
        RecyclerView.ItemAnimator.ItemHolderInfo f5053c;

        private a() {
        }

        static void a() {
            do {
            } while (f5050d.acquire() != null);
        }

        static a b() {
            a aVar = (a) f5050d.acquire();
            if (aVar == null) {
                return new a();
            }
            return aVar;
        }

        static void c(a aVar) {
            aVar.f5051a = 0;
            aVar.f5052b = null;
            aVar.f5053c = null;
            f5050d.release(aVar);
        }
    }

    private RecyclerView.ItemAnimator.ItemHolderInfo l(RecyclerView.ViewHolder viewHolder, int i10) {
        a aVar;
        RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo;
        int d10 = this.f5048a.d(viewHolder);
        if (d10 >= 0 && (aVar = (a) this.f5048a.j(d10)) != null) {
            int i11 = aVar.f5051a;
            if ((i11 & i10) != 0) {
                int i12 = (~i10) & i11;
                aVar.f5051a = i12;
                if (i10 == 4) {
                    itemHolderInfo = aVar.f5052b;
                } else if (i10 == 8) {
                    itemHolderInfo = aVar.f5053c;
                } else {
                    throw new IllegalArgumentException("Must provide flag PRE or POST");
                }
                if ((i12 & 12) == 0) {
                    this.f5048a.h(d10);
                    a.c(aVar);
                }
                return itemHolderInfo;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo) {
        a aVar = (a) this.f5048a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5048a.put(viewHolder, aVar);
        }
        aVar.f5051a |= 2;
        aVar.f5052b = itemHolderInfo;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5048a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5048a.put(viewHolder, aVar);
        }
        aVar.f5051a |= 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(long j10, RecyclerView.ViewHolder viewHolder) {
        this.f5049b.g(j10, viewHolder);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo) {
        a aVar = (a) this.f5048a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5048a.put(viewHolder, aVar);
        }
        aVar.f5053c = itemHolderInfo;
        aVar.f5051a |= 8;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo) {
        a aVar = (a) this.f5048a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5048a.put(viewHolder, aVar);
        }
        aVar.f5052b = itemHolderInfo;
        aVar.f5051a |= 4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        this.f5048a.clear();
        this.f5049b.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public RecyclerView.ViewHolder g(long j10) {
        return (RecyclerView.ViewHolder) this.f5049b.d(j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5048a.get(viewHolder);
        if (aVar != null && (aVar.f5051a & 1) != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean i(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5048a.get(viewHolder);
        if (aVar != null && (aVar.f5051a & 4) != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        a.a();
    }

    public void k(RecyclerView.ViewHolder viewHolder) {
        p(viewHolder);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public RecyclerView.ItemAnimator.ItemHolderInfo m(RecyclerView.ViewHolder viewHolder) {
        return l(viewHolder, 8);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public RecyclerView.ItemAnimator.ItemHolderInfo n(RecyclerView.ViewHolder viewHolder) {
        return l(viewHolder, 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(ProcessCallback processCallback) {
        for (int size = this.f5048a.size() - 1; size >= 0; size--) {
            RecyclerView.ViewHolder viewHolder = (RecyclerView.ViewHolder) this.f5048a.f(size);
            a aVar = (a) this.f5048a.h(size);
            int i10 = aVar.f5051a;
            if ((i10 & 3) == 3) {
                processCallback.b(viewHolder);
            } else if ((i10 & 1) != 0) {
                RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo = aVar.f5052b;
                if (itemHolderInfo == null) {
                    processCallback.b(viewHolder);
                } else {
                    processCallback.c(viewHolder, itemHolderInfo, aVar.f5053c);
                }
            } else if ((i10 & 14) == 14) {
                processCallback.a(viewHolder, aVar.f5052b, aVar.f5053c);
            } else if ((i10 & 12) == 12) {
                processCallback.d(viewHolder, aVar.f5052b, aVar.f5053c);
            } else if ((i10 & 4) != 0) {
                processCallback.c(viewHolder, aVar.f5052b, null);
            } else if ((i10 & 8) != 0) {
                processCallback.a(viewHolder, aVar.f5052b, aVar.f5053c);
            }
            a.c(aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5048a.get(viewHolder);
        if (aVar == null) {
            return;
        }
        aVar.f5051a &= -2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(RecyclerView.ViewHolder viewHolder) {
        int k10 = this.f5049b.k() - 1;
        while (true) {
            if (k10 < 0) {
                break;
            } else if (viewHolder == this.f5049b.l(k10)) {
                this.f5049b.j(k10);
                break;
            } else {
                k10--;
            }
        }
        a aVar = (a) this.f5048a.remove(viewHolder);
        if (aVar != null) {
            a.c(aVar);
        }
    }
}
