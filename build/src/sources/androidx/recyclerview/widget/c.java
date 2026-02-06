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
    private static final Executor f5392h = new b();

    /* renamed from: a  reason: collision with root package name */
    private final m f5393a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.recyclerview.widget.b f5394b;

    /* renamed from: c  reason: collision with root package name */
    Executor f5395c;

    /* renamed from: d  reason: collision with root package name */
    private final List f5396d;

    /* renamed from: e  reason: collision with root package name */
    private List f5397e;

    /* renamed from: f  reason: collision with root package name */
    private List f5398f;

    /* renamed from: g  reason: collision with root package name */
    int f5399g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f5400d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f5401e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f5402i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Runnable f5403o;

        /* renamed from: androidx.recyclerview.widget.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0065a extends e.b {
            C0065a() {
            }

            @Override // androidx.recyclerview.widget.e.b
            public boolean areContentsTheSame(int i10, int i11) {
                Object obj = a.this.f5400d.get(i10);
                Object obj2 = a.this.f5401e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f5394b.b().a(obj, obj2);
                }
                if (obj == null && obj2 == null) {
                    return true;
                }
                throw new AssertionError();
            }

            @Override // androidx.recyclerview.widget.e.b
            public boolean areItemsTheSame(int i10, int i11) {
                Object obj = a.this.f5400d.get(i10);
                Object obj2 = a.this.f5401e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f5394b.b().b(obj, obj2);
                }
                if (obj == null && obj2 == null) {
                    return true;
                }
                return false;
            }

            @Override // androidx.recyclerview.widget.e.b
            public Object getChangePayload(int i10, int i11) {
                Object obj = a.this.f5400d.get(i10);
                Object obj2 = a.this.f5401e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f5394b.b().c(obj, obj2);
                }
                throw new AssertionError();
            }

            @Override // androidx.recyclerview.widget.e.b
            public int getNewListSize() {
                return a.this.f5401e.size();
            }

            @Override // androidx.recyclerview.widget.e.b
            public int getOldListSize() {
                return a.this.f5400d.size();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class b implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e.C0066e f5406d;

            b(e.C0066e c0066e) {
                this.f5406d = c0066e;
            }

            @Override // java.lang.Runnable
            public void run() {
                a aVar = a.this;
                c cVar = c.this;
                if (cVar.f5399g == aVar.f5402i) {
                    cVar.b(aVar.f5401e, this.f5406d, aVar.f5403o);
                }
            }
        }

        a(List list, List list2, int i10, Runnable runnable) {
            this.f5400d = list;
            this.f5401e = list2;
            this.f5402i = i10;
            this.f5403o = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            c.this.f5395c.execute(new b(e.b(new C0065a())));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final Handler f5408d = new Handler(Looper.getMainLooper());

        b() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f5408d.post(runnable);
        }
    }

    public c(RecyclerView.Adapter adapter, e.f fVar) {
        this(new androidx.recyclerview.widget.a(adapter), new b.a(fVar).a());
    }

    private void c(List list, Runnable runnable) {
        Iterator it = this.f5396d.iterator();
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
        return this.f5398f;
    }

    void b(List list, e.C0066e c0066e, Runnable runnable) {
        List list2 = this.f5398f;
        this.f5397e = list;
        this.f5398f = Collections.unmodifiableList(list);
        c0066e.b(this.f5393a);
        c(list2, runnable);
    }

    public void d(List list) {
        e(list, null);
    }

    public void e(List list, Runnable runnable) {
        int i10 = this.f5399g + 1;
        this.f5399g = i10;
        List list2 = this.f5397e;
        if (list == list2) {
            if (runnable != null) {
                runnable.run();
                return;
            }
            return;
        }
        List list3 = this.f5398f;
        if (list == null) {
            int size = list2.size();
            this.f5397e = null;
            this.f5398f = Collections.EMPTY_LIST;
            this.f5393a.b(0, size);
            c(list3, runnable);
        } else if (list2 == null) {
            this.f5397e = list;
            this.f5398f = Collections.unmodifiableList(list);
            this.f5393a.a(0, list.size());
            c(list3, runnable);
        } else {
            this.f5394b.a().execute(new a(list2, list, i10, runnable));
        }
    }

    public c(m mVar, androidx.recyclerview.widget.b bVar) {
        this.f5396d = new CopyOnWriteArrayList();
        this.f5398f = Collections.EMPTY_LIST;
        this.f5393a = mVar;
        this.f5394b = bVar;
        if (bVar.c() != null) {
            this.f5395c = bVar.c();
        } else {
            this.f5395c = f5392h;
        }
    }
}
