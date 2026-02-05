package s8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f49472a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f49473b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f49474c = null;

    public void a() {
        SoftReference softReference = this.f49472a;
        if (softReference != null) {
            softReference.clear();
            this.f49472a = null;
        }
        SoftReference softReference2 = this.f49473b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f49473b = null;
        }
        SoftReference softReference3 = this.f49474c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f49474c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f49472a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f49472a = new SoftReference(obj);
        this.f49473b = new SoftReference(obj);
        this.f49474c = new SoftReference(obj);
    }
}
