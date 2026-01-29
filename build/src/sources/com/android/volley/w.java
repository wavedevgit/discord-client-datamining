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
    private final q f9233b;

    /* renamed from: d  reason: collision with root package name */
    private final c f9235d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f9236e;

    /* renamed from: a  reason: collision with root package name */
    private final Map f9232a = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final o f9234c = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(c cVar, BlockingQueue blockingQueue, q qVar) {
        this.f9233b = qVar;
        this.f9235d = cVar;
        this.f9236e = blockingQueue;
    }

    @Override // com.android.volley.n.b
    public void a(n nVar, p pVar) {
        List<n> list;
        b.a aVar = pVar.f9218b;
        if (aVar != null && !aVar.a()) {
            String cacheKey = nVar.getCacheKey();
            synchronized (this) {
                list = (List) this.f9232a.remove(cacheKey);
            }
            if (list != null) {
                if (v.f9224b) {
                    v.e("Releasing %d waiting requests for cacheKey=%s.", Integer.valueOf(list.size()), cacheKey);
                }
                for (n nVar2 : list) {
                    this.f9233b.a(nVar2, pVar);
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
            List list = (List) this.f9232a.remove(cacheKey);
            if (list != null && !list.isEmpty()) {
                if (v.f9224b) {
                    v.e("%d waiting requests for cacheKey=%s; resend to network", Integer.valueOf(list.size()), cacheKey);
                }
                n nVar2 = (n) list.remove(0);
                this.f9232a.put(cacheKey, list);
                nVar2.setNetworkRequestCompleteListener(this);
                o oVar = this.f9234c;
                if (oVar != null) {
                    oVar.g(nVar2);
                } else if (this.f9235d != null && (blockingQueue = this.f9236e) != null) {
                    try {
                        blockingQueue.put(nVar2);
                    } catch (InterruptedException e10) {
                        v.c("Couldn't add request to queue. %s", e10.toString());
                        Thread.currentThread().interrupt();
                        this.f9235d.d();
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
            if (this.f9232a.containsKey(cacheKey)) {
                List list = (List) this.f9232a.get(cacheKey);
                if (list == null) {
                    list = new ArrayList();
                }
                nVar.addMarker("waiting-for-response");
                list.add(nVar);
                this.f9232a.put(cacheKey, list);
                if (v.f9224b) {
                    v.b("Request for cacheKey=%s is in flight, putting on hold.", cacheKey);
                }
                return true;
            }
            this.f9232a.put(cacheKey, null);
            nVar.setNetworkRequestCompleteListener(this);
            if (v.f9224b) {
                v.b("new request, sending to network %s", cacheKey);
            }
            return false;
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
