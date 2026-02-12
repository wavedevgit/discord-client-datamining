package t8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f48629a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f48630b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f48631c = null;

    public void a() {
        SoftReference softReference = this.f48629a;
        if (softReference != null) {
            softReference.clear();
            this.f48629a = null;
        }
        SoftReference softReference2 = this.f48630b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f48630b = null;
        }
        SoftReference softReference3 = this.f48631c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f48631c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f48629a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f48629a = new SoftReference(obj);
        this.f48630b = new SoftReference(obj);
        this.f48631c = new SoftReference(obj);
    }
}
