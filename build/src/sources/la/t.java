package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f37163a;

    /* renamed from: b  reason: collision with root package name */
    private final x f37164b;

    public t(w wVar, x xVar) {
        this.f37163a = wVar;
        this.f37164b = xVar;
    }

    @Override // la.w
    public void b(Object obj) {
        this.f37163a.b(obj);
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f37164b.c(obj);
        return this.f37163a.c(obj, closeableReference);
    }

    @Override // la.w
    public boolean e(o8.k kVar) {
        return this.f37163a.e(kVar);
    }

    @Override // la.w
    public int f(o8.k kVar) {
        return this.f37163a.f(kVar);
    }

    @Override // la.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f37163a.get(obj);
        if (closeableReference == null) {
            this.f37164b.b(obj);
            return closeableReference;
        }
        this.f37164b.a(obj);
        return closeableReference;
    }
}
