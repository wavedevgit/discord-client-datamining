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
    private static final Executor f4951h = new b();

    /* renamed from: a  reason: collision with root package name */
    private final m f4952a;

    /* renamed from: b  reason: collision with root package name */
    final androidx.recyclerview.widget.b f4953b;

    /* renamed from: c  reason: collision with root package name */
    Executor f4954c;

    /* renamed from: d  reason: collision with root package name */
    private final List f4955d;

    /* renamed from: e  reason: collision with root package name */
    private List f4956e;

    /* renamed from: f  reason: collision with root package name */
    private List f4957f;

    /* renamed from: g  reason: collision with root package name */
    int f4958g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f4959d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f4960e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f4961i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Runnable f4962o;

        /* renamed from: androidx.recyclerview.widget.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0066a extends e.b {
            C0066a() {
            }

            @Override // androidx.recyclerview.widget.e.b
            public boolean areContentsTheSame(int i10, int i11) {
                Object obj = a.this.f4959d.get(i10);
                Object obj2 = a.this.f4960e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f4953b.b().a(obj, obj2);
                }
                if (obj == null && obj2 == null) {
                    return true;
                }
                throw new AssertionError();
            }

            @Override // androidx.recyclerview.widget.e.b
            public boolean areItemsTheSame(int i10, int i11) {
                Object obj = a.this.f4959d.get(i10);
                Object obj2 = a.this.f4960e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f4953b.b().b(obj, obj2);
                }
                if (obj == null && obj2 == null) {
                    return true;
                }
                return false;
            }

            @Override // androidx.recyclerview.widget.e.b
            public Object getChangePayload(int i10, int i11) {
                Object obj = a.this.f4959d.get(i10);
                Object obj2 = a.this.f4960e.get(i11);
                if (obj != null && obj2 != null) {
                    return c.this.f4953b.b().c(obj, obj2);
                }
                throw new AssertionError();
            }

            @Override // androidx.recyclerview.widget.e.b
            public int getNewListSize() {
                return a.this.f4960e.size();
            }

            @Override // androidx.recyclerview.widget.e.b
            public int getOldListSize() {
                return a.this.f4959d.size();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class b implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ e.C0067e f4965d;

            b(e.C0067e c0067e) {
                this.f4965d = c0067e;
            }

            @Override // java.lang.Runnable
            public void run() {
                a aVar = a.this;
                c cVar = c.this;
                if (cVar.f4958g == aVar.f4961i) {
                    cVar.b(aVar.f4960e, this.f4965d, aVar.f4962o);
                }
            }
        }

        a(List list, List list2, int i10, Runnable runnable) {
            this.f4959d = list;
            this.f4960e = list2;
            this.f4961i = i10;
            this.f4962o = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            c.this.f4954c.execute(new b(e.b(new C0066a())));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b implements Executor {

        /* renamed from: d  reason: collision with root package name */
        final Handler f4967d = new Handler(Looper.getMainLooper());

        b() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            this.f4967d.post(runnable);
        }
    }

    public c(RecyclerView.Adapter adapter, e.f fVar) {
        this(new androidx.recyclerview.widget.a(adapter), new b.a(fVar).a());
    }

    private void c(List list, Runnable runnable) {
        Iterator it = this.f4955d.iterator();
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
        return this.f4957f;
    }

    void b(List list, e.C0067e c0067e, Runnable runnable) {
        List list2 = this.f4957f;
        this.f4956e = list;
        this.f4957f = Collections.unmodifiableList(list);
        c0067e.b(this.f4952a);
        c(list2, runnable);
    }

    public void d(List list) {
        e(list, null);
    }

    public void e(List list, Runnable runnable) {
        int i10 = this.f4958g + 1;
        this.f4958g = i10;
        List list2 = this.f4956e;
        if (list == list2) {
            if (runnable != null) {
                runnable.run();
                return;
            }
            return;
        }
        List list3 = this.f4957f;
        if (list == null) {
            int size = list2.size();
            this.f4956e = null;
            this.f4957f = Collections.EMPTY_LIST;
            this.f4952a.b(0, size);
            c(list3, runnable);
        } else if (list2 == null) {
            this.f4956e = list;
            this.f4957f = Collections.unmodifiableList(list);
            this.f4952a.a(0, list.size());
            c(list3, runnable);
        } else {
            this.f4953b.a().execute(new a(list2, list, i10, runnable));
        }
    }

    public c(m mVar, androidx.recyclerview.widget.b bVar) {
        this.f4955d = new CopyOnWriteArrayList();
        this.f4957f = Collections.EMPTY_LIST;
        this.f4952a = mVar;
        this.f4953b = bVar;
        if (bVar.c() != null) {
            this.f4954c = bVar.c();
        } else {
            this.f4954c = f4951h;
        }
    }
}
