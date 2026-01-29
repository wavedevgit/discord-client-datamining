package s8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f48846a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f48847b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f48848c = null;

    public void a() {
        SoftReference softReference = this.f48846a;
        if (softReference != null) {
            softReference.clear();
            this.f48846a = null;
        }
        SoftReference softReference2 = this.f48847b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f48847b = null;
        }
        SoftReference softReference3 = this.f48848c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f48848c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f48846a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f48846a = new SoftReference(obj);
        this.f48847b = new SoftReference(obj);
        this.f48848c = new SoftReference(obj);
    }
}
