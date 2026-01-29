package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f37033a;

    /* renamed from: b  reason: collision with root package name */
    private final x f37034b;

    public t(w wVar, x xVar) {
        this.f37033a = wVar;
        this.f37034b = xVar;
    }

    @Override // la.w
    public void b(Object obj) {
        this.f37033a.b(obj);
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f37034b.c(obj);
        return this.f37033a.c(obj, closeableReference);
    }

    @Override // la.w
    public boolean e(o8.k kVar) {
        return this.f37033a.e(kVar);
    }

    @Override // la.w
    public int f(o8.k kVar) {
        return this.f37033a.f(kVar);
    }

    @Override // la.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f37033a.get(obj);
        if (closeableReference == null) {
            this.f37034b.b(obj);
            return closeableReference;
        }
        this.f37034b.a(obj);
        return closeableReference;
    }
}
