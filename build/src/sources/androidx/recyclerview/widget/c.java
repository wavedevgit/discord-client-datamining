package androidx.recyclerview.widget;

import android.os.Handler;
import android.os.Looper;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.b;
import androidx.recyclerview.widget.e;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: h  reason: collision with root package name */
    private static final Executor f4982h = new b();

    /* renamed from: a  reason: collision with root package name */
    private final m f4983a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.recyclerview.widget.b f4984b;

    /* renamed from: c  reason: collision with root package name */
    Executor f4985c;

    /* renamed from: d  reason: collision with root package name */
    private final List f4986d;

    /* renamed from: e  reason: collision with root package name */
    private List f4987e;

    /* renamed from: f  reason: collision with root package name */
    private List f4988f;

    /* renamed from: g  reason: collision with root package name */
    int f4989g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f4990d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f4991e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f4992i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Runnable f4993o;

        /* renamed from: androidx.recyclerview.widget.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0068a extends e.b {
            C0068a() {
            }

            @Override // androidx.recyclerview.widget.e.b
            public boolean areContentsTheSame(int i10, int i11) {
                Object obj = a.this.f4990d.get(i10);
                Object obj2 = a.this.f4991e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f4984b.b().a(obj, obj2);
                }
                if (obj == null && obj2 == null) {
                    return true;
                }
                throw new AssertionError();
            }

            @Override // androidx.recyclerview.widget.e.b
            public boolean areItemsTheSame(int i10, int i11) {
                Object obj = a.this.f4990d.get(i10);
                Object obj2 = a.this.f4991e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f4984b.b().b(obj, obj2);
                }
                if (obj == null && obj2 == null) {
                    return true;
                }
                return false;
            }

            @Override // androidx.recyclerview.widget.e.b
            public Object getChangePayload(int i10, int i11) {
                Object obj = a.this.f4990d.get(i10);
                Object obj2 = a.this.f4991e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f4984b.b().c(obj, obj2);
                }
                throw new AssertionError();
            }

            @Override // androidx.recyclerview.widget.e.b
            public int getNewListSize() {
                return a.this.f4991e.size();
            }

            @Override // androidx.recyclerview.widget.e.b
            public int getOldListSize() {
                return a.this.f4990d.size();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class b implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e.C0069e f4996d;

            b(e.C0069e c0069e) {
                this.f4996d = c0069e;
            }

            @Override // java.lang.Runnable
            public void run() {
                a aVar = a.this;
                c cVar = c.this;
                if (cVar.f4989g == aVar.f4992i) {
                    cVar.b(aVar.f4991e, this.f4996d, aVar.f4993o);
                }
            }
        }

        a(List list, List list2, int i10, Runnable runnable) {
            this.f4990d = list;
            this.f4991e = list2;
            this.f4992i = i10;
            this.f4993o = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            c.this.f4985c.execute(new b(e.b(new C0068a())));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final Handler f4998d = new Handler(Looper.getMainLooper());

        b() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f4998d.post(runnable);
        }
    }

    public c(RecyclerView.Adapter adapter, e.f fVar) {
        this(new androidx.recyclerview.widget.a(adapter), new b.a(fVar).a());
    }

    private void c(List list, Runnable runnable) {
        Iterator it = this.f4986d.iterator();
        if (!it.hasNext()) {
            if (runnable != null) {
                runnable.run();
                return;
            }
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public List a() {
        return this.f4988f;
    }

    void b(List list, e.C0069e c0069e, Runnable runnable) {
        List list2 = this.f4988f;
        this.f4987e = list;
        this.f4988f = Collections.unmodifiableList(list);
        c0069e.b(this.f4983a);
        c(list2, runnable);
    }

    public void d(List list) {
        e(list, null);
    }

    public void e(List list, Runnable runnable) {
        int i10 = this.f4989g + 1;
        this.f4989g = i10;
        List list2 = this.f4987e;
        if (list == list2) {
            if (runnable != null) {
                runnable.run();
                return;
            }
            return;
        }
        List list3 = this.f4988f;
        if (list == null) {
            int size = list2.size();
            this.f4987e = null;
            this.f4988f = Collections.EMPTY_LIST;
            this.f4983a.b(0, size);
            c(list3, runnable);
        } else if (list2 == null) {
            this.f4987e = list;
            this.f4988f = Collections.unmodifiableList(list);
            this.f4983a.a(0, list.size());
            c(list3, runnable);
        } else {
            this.f4984b.a().execute(new a(list2, list, i10, runnable));
        }
    }

    public c(m mVar, androidx.recyclerview.widget.b bVar) {
        this.f4986d = new CopyOnWriteArrayList();
        this.f4988f = Collections.EMPTY_LIST;
        this.f4983a = mVar;
        this.f4984b = bVar;
        if (bVar.c() != null) {
            this.f4985c = bVar.c();
        } else {
            this.f4985c = f4982h;
        }
    }
}
