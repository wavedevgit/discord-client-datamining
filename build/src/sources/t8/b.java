package t8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f50696a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f50697b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f50698c = null;

    public void a() {
        SoftReference softReference = this.f50696a;
        if (softReference != null) {
            softReference.clear();
            this.f50696a = null;
        }
        SoftReference softReference2 = this.f50697b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f50697b = null;
        }
        SoftReference softReference3 = this.f50698c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f50698c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f50696a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f50696a = new SoftReference(obj);
        this.f50697b = new SoftReference(obj);
        this.f50698c = new SoftReference(obj);
    }
}
