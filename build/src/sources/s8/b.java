package s8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f49807a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f49808b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f49809c = null;

    public void a() {
        SoftReference softReference = this.f49807a;
        if (softReference != null) {
            softReference.clear();
            this.f49807a = null;
        }
        SoftReference softReference2 = this.f49808b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f49808b = null;
        }
        SoftReference softReference3 = this.f49809c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f49809c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f49807a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f49807a = new SoftReference(obj);
        this.f49808b = new SoftReference(obj);
        this.f49809c = new SoftReference(obj);
    }
}
