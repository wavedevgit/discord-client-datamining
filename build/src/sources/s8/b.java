package s8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f49323a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f49324b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f49325c = null;

    public void a() {
        SoftReference softReference = this.f49323a;
        if (softReference != null) {
            softReference.clear();
            this.f49323a = null;
        }
        SoftReference softReference2 = this.f49324b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f49324b = null;
        }
        SoftReference softReference3 = this.f49325c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f49325c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f49323a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f49323a = new SoftReference(obj);
        this.f49324b = new SoftReference(obj);
        this.f49325c = new SoftReference(obj);
    }
}
