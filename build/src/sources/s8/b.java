package s8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f48916a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f48917b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f48918c = null;

    public void a() {
        SoftReference softReference = this.f48916a;
        if (softReference != null) {
            softReference.clear();
            this.f48916a = null;
        }
        SoftReference softReference2 = this.f48917b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f48917b = null;
        }
        SoftReference softReference3 = this.f48918c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f48918c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f48916a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f48916a = new SoftReference(obj);
        this.f48917b = new SoftReference(obj);
        this.f48918c = new SoftReference(obj);
    }
}
