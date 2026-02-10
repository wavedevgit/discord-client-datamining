package androidx.recyclerview.widget;

import androidx.collection.SimpleArrayMap;
import androidx.core.util.Pools$SimplePool;
import androidx.recyclerview.widget.RecyclerView;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ViewInfoStore {

    /* renamed from: a  reason: collision with root package name */
    final SimpleArrayMap f5084a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final u0.j f5085b = new u0.j();

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
        static b2.d f5086d = new Pools$SimplePool(20);

        /* renamed from: a  reason: collision with root package name */
        int f5087a;

        /* renamed from: b  reason: collision with root package name */
        RecyclerView.ItemAnimator.ItemHolderInfo f5088b;

        /* renamed from: c  reason: collision with root package name */
        RecyclerView.ItemAnimator.ItemHolderInfo f5089c;

        private a() {
        }

        static void a() {
            do {
            } while (f5086d.acquire() != null);
        }

        static a b() {
            a aVar = (a) f5086d.acquire();
            if (aVar == null) {
                return new a();
            }
            return aVar;
        }

        static void c(a aVar) {
            aVar.f5087a = 0;
            aVar.f5088b = null;
            aVar.f5089c = null;
            f5086d.release(aVar);
        }
    }

    private RecyclerView.ItemAnimator.ItemHolderInfo l(RecyclerView.ViewHolder viewHolder, int i10) {
        a aVar;
        RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo;
        int d10 = this.f5084a.d(viewHolder);
        if (d10 >= 0 && (aVar = (a) this.f5084a.j(d10)) != null) {
            int i11 = aVar.f5087a;
            if ((i11 & i10) != 0) {
                int i12 = (~i10) & i11;
                aVar.f5087a = i12;
                if (i10 == 4) {
                    itemHolderInfo = aVar.f5088b;
                } else if (i10 == 8) {
                    itemHolderInfo = aVar.f5089c;
                } else {
                    throw new IllegalArgumentException("Must provide flag PRE or POST");
                }
                if ((i12 & 12) == 0) {
                    this.f5084a.h(d10);
                    a.c(aVar);
                }
                return itemHolderInfo;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo) {
        a aVar = (a) this.f5084a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5084a.put(viewHolder, aVar);
        }
        aVar.f5087a |= 2;
        aVar.f5088b = itemHolderInfo;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5084a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5084a.put(viewHolder, aVar);
        }
        aVar.f5087a |= 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(long j10, RecyclerView.ViewHolder viewHolder) {
        this.f5085b.g(j10, viewHolder);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo) {
        a aVar = (a) this.f5084a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5084a.put(viewHolder, aVar);
        }
        aVar.f5089c = itemHolderInfo;
        aVar.f5087a |= 8;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(RecyclerView.ViewHolder viewHolder, RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo) {
        a aVar = (a) this.f5084a.get(viewHolder);
        if (aVar == null) {
            aVar = a.b();
            this.f5084a.put(viewHolder, aVar);
        }
        aVar.f5088b = itemHolderInfo;
        aVar.f5087a |= 4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        this.f5084a.clear();
        this.f5085b.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public RecyclerView.ViewHolder g(long j10) {
        return (RecyclerView.ViewHolder) this.f5085b.d(j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5084a.get(viewHolder);
        if (aVar != null && (aVar.f5087a & 1) != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean i(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5084a.get(viewHolder);
        if (aVar != null && (aVar.f5087a & 4) != 0) {
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
        for (int size = this.f5084a.size() - 1; size >= 0; size--) {
            RecyclerView.ViewHolder viewHolder = (RecyclerView.ViewHolder) this.f5084a.f(size);
            a aVar = (a) this.f5084a.h(size);
            int i10 = aVar.f5087a;
            if ((i10 & 3) == 3) {
                processCallback.b(viewHolder);
            } else if ((i10 & 1) != 0) {
                RecyclerView.ItemAnimator.ItemHolderInfo itemHolderInfo = aVar.f5088b;
                if (itemHolderInfo == null) {
                    processCallback.b(viewHolder);
                } else {
                    processCallback.c(viewHolder, itemHolderInfo, aVar.f5089c);
                }
            } else if ((i10 & 14) == 14) {
                processCallback.a(viewHolder, aVar.f5088b, aVar.f5089c);
            } else if ((i10 & 12) == 12) {
                processCallback.d(viewHolder, aVar.f5088b, aVar.f5089c);
            } else if ((i10 & 4) != 0) {
                processCallback.c(viewHolder, aVar.f5088b, null);
            } else if ((i10 & 8) != 0) {
                processCallback.a(viewHolder, aVar.f5088b, aVar.f5089c);
            }
            a.c(aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(RecyclerView.ViewHolder viewHolder) {
        a aVar = (a) this.f5084a.get(viewHolder);
        if (aVar == null) {
            return;
        }
        aVar.f5087a &= -2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(RecyclerView.ViewHolder viewHolder) {
        int k10 = this.f5085b.k() - 1;
        while (true) {
            if (k10 < 0) {
                break;
            } else if (viewHolder == this.f5085b.l(k10)) {
                this.f5085b.j(k10);
                break;
            } else {
                k10--;
            }
        }
        a aVar = (a) this.f5084a.remove(viewHolder);
        if (aVar != null) {
            a.c(aVar);
        }
    }
}
