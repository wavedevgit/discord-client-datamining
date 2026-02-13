package t8;

import java.lang.ref.SoftReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    SoftReference f49197a = null;

    /* renamed from: b  reason: collision with root package name */
    SoftReference f49198b = null;

    /* renamed from: c  reason: collision with root package name */
    SoftReference f49199c = null;

    public void a() {
        SoftReference softReference = this.f49197a;
        if (softReference != null) {
            softReference.clear();
            this.f49197a = null;
        }
        SoftReference softReference2 = this.f49198b;
        if (softReference2 != null) {
            softReference2.clear();
            this.f49198b = null;
        }
        SoftReference softReference3 = this.f49199c;
        if (softReference3 != null) {
            softReference3.clear();
            this.f49199c = null;
        }
    }

    public Object b() {
        SoftReference softReference = this.f49197a;
        if (softReference == null) {
            return null;
        }
        return softReference.get();
    }

    public void c(Object obj) {
        this.f49197a = new SoftReference(obj);
        this.f49198b = new SoftReference(obj);
        this.f49199c = new SoftReference(obj);
    }
}
