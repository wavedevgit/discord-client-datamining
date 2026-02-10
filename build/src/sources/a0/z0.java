package a0;

import a0.w0;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f335a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ c.a f336b;

        a(boolean z10, c.a aVar) {
            this.f335a = z10;
            this.f336b = aVar;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(List list) {
            b2.e.g(list);
            ArrayList arrayList = new ArrayList(list);
            if (this.f335a) {
                arrayList.removeAll(Collections.singleton(null));
            }
            this.f336b.c(arrayList);
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            if (th2 instanceof TimeoutException) {
                this.f336b.f(th2);
            } else {
                this.f336b.c(Collections.EMPTY_LIST);
            }
        }
    }

    public static /* synthetic */ Object a(final ListenableFuture listenableFuture, Executor executor, boolean z10, Collection collection, c.a aVar) {
        aVar.a(new Runnable() { // from class: a0.y0
            @Override // java.lang.Runnable
            public final void run() {
                ListenableFuture.this.cancel(true);
            }
        }, executor);
        d0.n.j(listenableFuture, new a(z10, aVar), executor);
        return "surfaceList[" + collection + "]";
    }

    public static void c(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            ((w0) it.next()).e();
        }
    }

    public static void d(List list) {
        if (!list.isEmpty()) {
            int i10 = 0;
            do {
                try {
                    ((w0) list.get(i10)).l();
                    i10++;
                } catch (w0.a e10) {
                    for (int i11 = i10 - 1; i11 >= 0; i11--) {
                        ((w0) list.get(i11)).e();
                    }
                    throw e10;
                }
            } while (i10 < list.size());
        }
    }

    public static ListenableFuture e(final Collection collection, final boolean z10, long j10, final Executor executor, ScheduledExecutorService scheduledExecutorService) {
        ArrayList arrayList = new ArrayList();
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            arrayList.add(d0.n.s(((w0) it.next()).j()));
        }
        final ListenableFuture q10 = d0.n.q(j10, scheduledExecutorService, d0.n.w(arrayList));
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: a0.x0
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return z0.a(ListenableFuture.this, executor, z10, collection, aVar);
            }
        });
    }
}
