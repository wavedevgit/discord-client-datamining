package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f36000a;

    /* renamed from: b  reason: collision with root package name */
    private final x f36001b;

    public t(w wVar, x xVar) {
        this.f36000a = wVar;
        this.f36001b = xVar;
    }

    @Override // la.w
    public void b(Object obj) {
        this.f36000a.b(obj);
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f36001b.c(obj);
        return this.f36000a.c(obj, closeableReference);
    }

    @Override // la.w
    public boolean e(o8.k kVar) {
        return this.f36000a.e(kVar);
    }

    @Override // la.w
    public int f(o8.k kVar) {
        return this.f36000a.f(kVar);
    }

    @Override // la.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f36000a.get(obj);
        if (closeableReference == null) {
            this.f36001b.b(obj);
            return closeableReference;
        }
        this.f36001b.a(obj);
        return closeableReference;
    }
}
