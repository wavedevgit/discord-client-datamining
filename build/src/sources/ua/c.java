package ua;

import com.facebook.imagepipeline.listener.RequestListener;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements RequestListener {

    /* renamed from: a  reason: collision with root package name */
    private final List f51313a;

    public c(Set set) {
        this.f51313a = new ArrayList(set.size());
        Iterator it = set.iterator();
        while (it.hasNext()) {
            RequestListener requestListener = (RequestListener) it.next();
            if (requestListener != null) {
                this.f51313a.add(requestListener);
            }
        }
    }

    private void a(String str, Throwable th2) {
        p8.a.n("ForwardingRequestListener", str, th2);
    }

    @Override // com.facebook.imagepipeline.producers.z0
    public void onProducerEvent(String str, String str2, String str3) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onProducerEvent(str, str2, str3);
            } catch (Exception e10) {
                a("InternalListener exception in onIntermediateChunkStart", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.z0
    public void onProducerFinishWithCancellation(String str, String str2, Map map) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onProducerFinishWithCancellation(str, str2, map);
            } catch (Exception e10) {
                a("InternalListener exception in onProducerFinishWithCancellation", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.z0
    public void onProducerFinishWithFailure(String str, String str2, Throwable th2, Map map) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onProducerFinishWithFailure(str, str2, th2, map);
            } catch (Exception e10) {
                a("InternalListener exception in onProducerFinishWithFailure", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.z0
    public void onProducerFinishWithSuccess(String str, String str2, Map map) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onProducerFinishWithSuccess(str, str2, map);
            } catch (Exception e10) {
                a("InternalListener exception in onProducerFinishWithSuccess", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.z0
    public void onProducerStart(String str, String str2) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onProducerStart(str, str2);
            } catch (Exception e10) {
                a("InternalListener exception in onProducerStart", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onRequestCancellation(str);
            } catch (Exception e10) {
                a("InternalListener exception in onRequestCancellation", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onRequestFailure(imageRequest, str, th2, z10);
            } catch (Exception e10) {
                a("InternalListener exception in onRequestFailure", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onRequestStart(imageRequest, obj, str, z10);
            } catch (Exception e10) {
                a("InternalListener exception in onRequestStart", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onRequestSuccess(imageRequest, str, z10);
            } catch (Exception e10) {
                a("InternalListener exception in onRequestSuccess", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.z0
    public void onUltimateProducerReached(String str, String str2, boolean z10) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((RequestListener) this.f51313a.get(i10)).onUltimateProducerReached(str, str2, z10);
            } catch (Exception e10) {
                a("InternalListener exception in onProducerFinishWithSuccess", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.z0
    public boolean requiresExtraMap(String str) {
        int size = this.f51313a.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (((RequestListener) this.f51313a.get(i10)).requiresExtraMap(str)) {
                return true;
            }
        }
        return false;
    }

    public c(RequestListener... requestListenerArr) {
        this.f51313a = new ArrayList(requestListenerArr.length);
        for (RequestListener requestListener : requestListenerArr) {
            if (requestListener != null) {
                this.f51313a.add(requestListener);
            }
        }
    }
}
