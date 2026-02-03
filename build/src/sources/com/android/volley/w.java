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
    private final q f7830b;

    /* renamed from: d  reason: collision with root package name */
    private final c f7832d;

    /* renamed from: e  reason: collision with root package name */
    private final BlockingQueue f7833e;

    /* renamed from: a  reason: collision with root package name */
    private final Map f7829a = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final o f7831c = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(c cVar, BlockingQueue blockingQueue, q qVar) {
        this.f7830b = qVar;
        this.f7832d = cVar;
        this.f7833e = blockingQueue;
    }

    @Override // com.android.volley.n.b
    public void a(n nVar, p pVar) {
        List<n> list;
        b.a aVar = pVar.f7815b;
        if (aVar != null && !aVar.a()) {
            String cacheKey = nVar.getCacheKey();
            synchronized (this) {
                list = (List) this.f7829a.remove(cacheKey);
            }
            if (list != null) {
                if (v.f7821b) {
                    v.e("Releasing %d waiting requests for cacheKey=%s.", Integer.valueOf(list.size()), cacheKey);
                }
                for (n nVar2 : list) {
                    this.f7830b.a(nVar2, pVar);
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
            List list = (List) this.f7829a.remove(cacheKey);
            if (list != null && !list.isEmpty()) {
                if (v.f7821b) {
                    v.e("%d waiting requests for cacheKey=%s; resend to network", Integer.valueOf(list.size()), cacheKey);
                }
                n nVar2 = (n) list.remove(0);
                this.f7829a.put(cacheKey, list);
                nVar2.setNetworkRequestCompleteListener(this);
                o oVar = this.f7831c;
                if (oVar != null) {
                    oVar.g(nVar2);
                } else if (this.f7832d != null && (blockingQueue = this.f7833e) != null) {
                    try {
                        blockingQueue.put(nVar2);
                    } catch (InterruptedException e10) {
                        v.c("Couldn't add request to queue. %s", e10.toString());
                        Thread.currentThread().interrupt();
                        this.f7832d.d();
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
            if (this.f7829a.containsKey(cacheKey)) {
                List list = (List) this.f7829a.get(cacheKey);
                if (list == null) {
                    list = new ArrayList();
                }
                nVar.addMarker("waiting-for-response");
                list.add(nVar);
                this.f7829a.put(cacheKey, list);
                if (v.f7821b) {
                    v.b("Request for cacheKey=%s is in flight, putting on hold.", cacheKey);
                }
                return true;
            }
            this.f7829a.put(cacheKey, null);
            nVar.setNetworkRequestCompleteListener(this);
            if (v.f7821b) {
                v.b("new request, sending to network %s", cacheKey);
            }
            return false;
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
