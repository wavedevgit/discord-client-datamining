package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f36559a;

    /* renamed from: b  reason: collision with root package name */
    private final x f36560b;

    public t(w wVar, x xVar) {
        this.f36559a = wVar;
        this.f36560b = xVar;
    }

    @Override // la.w
    public void b(Object obj) {
        this.f36559a.b(obj);
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f36560b.c(obj);
        return this.f36559a.c(obj, closeableReference);
    }

    @Override // la.w
    public boolean e(o8.k kVar) {
        return this.f36559a.e(kVar);
    }

    @Override // la.w
    public int f(o8.k kVar) {
        return this.f36559a.f(kVar);
    }

    @Override // la.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f36559a.get(obj);
        if (closeableReference == null) {
            this.f36560b.b(obj);
            return closeableReference;
        }
        this.f36560b.a(obj);
        return closeableReference;
    }
}
