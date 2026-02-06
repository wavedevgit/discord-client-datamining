package com.android.volley;

import com.android.volley.b;
import com.android.volley.n;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements n.b {

    /* renamed from: b  reason: collision with root package name */
    private final q f8114b;

    /* renamed from: d  reason: collision with root package name */
    private final c f8116d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f8117e;

    /* renamed from: a  reason: collision with root package name */
    private final Map f8113a = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final o f8115c = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(c cVar, BlockingQueue blockingQueue, q qVar) {
        this.f8114b = qVar;
        this.f8116d = cVar;
        this.f8117e = blockingQueue;
    }

    @Override // com.android.volley.n.b
    public void a(n nVar, p pVar) {
        List<n> list;
        b.a aVar = pVar.f8099b;
        if (aVar != null && !aVar.a()) {
            String cacheKey = nVar.getCacheKey();
            synchronized (this) {
                list = (List) this.f8113a.remove(cacheKey);
            }
            if (list != null) {
                if (v.f8105b) {
                    v.e("Releasing %d waiting requests for cacheKey=%s.", Integer.valueOf(list.size()), cacheKey);
                }
                for (n nVar2 : list) {
                    this.f8114b.a(nVar2, pVar);
                }
                return;
            }
            return;
        }
        b(nVar);
    }

    @Override // com.android.volley.n.b
    public synchronized void b(n nVar) {
        BlockingQueue blockingQueue;
        try {
            String cacheKey = nVar.getCacheKey();
            List list = (List) this.f8113a.remove(cacheKey);
            if (list != null && !list.isEmpty()) {
                if (v.f8105b) {
                    v.e("%d waiting requests for cacheKey=%s; resend to network", Integer.valueOf(list.size()), cacheKey);
                }
                n nVar2 = (n) list.remove(0);
                this.f8113a.put(cacheKey, list);
                nVar2.setNetworkRequestCompleteListener(this);
                o oVar = this.f8115c;
                if (oVar != null) {
                    oVar.g(nVar2);
                } else if (this.f8116d != null && (blockingQueue = this.f8117e) != null) {
                    try {
                        blockingQueue.put(nVar2);
                    } catch (InterruptedException e10) {
                        v.c("Couldn't add request to queue. %s", e10.toString());
                        Thread.currentThread().interrupt();
                        this.f8116d.d();
                    }
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized boolean c(n nVar) {
        try {
            String cacheKey = nVar.getCacheKey();
            if (this.f8113a.containsKey(cacheKey)) {
                List list = (List) this.f8113a.get(cacheKey);
                if (list == null) {
                    list = new ArrayList();
                }
                nVar.addMarker("waiting-for-response");
                list.add(nVar);
                this.f8113a.put(cacheKey, list);
                if (v.f8105b) {
                    v.b("Request for cacheKey=%s is in flight, putting on hold.", cacheKey);
                }
                return true;
            }
            this.f8113a.put(cacheKey, null);
            nVar.setNetworkRequestCompleteListener(this);
            if (v.f8105b) {
                v.b("new request, sending to network %s", cacheKey);
            }
            return false;
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
