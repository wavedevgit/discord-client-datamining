package lg;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    Object[] f37311a = new Object[8];

    /* renamed from: b  reason: collision with root package name */
    int f37312b = 0;

    /* renamed from: c  reason: collision with root package name */
    g f37313c;

    public final h a(Object obj, Object obj2) {
        int i10 = this.f37312b + 1;
        Object[] objArr = this.f37311a;
        int length = objArr.length;
        int i11 = i10 + i10;
        if (i11 > length) {
            this.f37311a = Arrays.copyOf(objArr, b.a(length, i11));
        }
        w0.a(obj, obj2);
        Object[] objArr2 = this.f37311a;
        int i12 = this.f37312b;
        int i13 = i12 + i12;
        objArr2[i13] = obj;
        objArr2[i13 + 1] = obj2;
        this.f37312b = i12 + 1;
        return this;
    }

    public final i b() {
        g gVar = this.f37313c;
        if (gVar == null) {
            q g10 = q.g(this.f37312b, this.f37311a, this);
            g gVar2 = this.f37313c;
            if (gVar2 == null) {
                return g10;
            }
            throw gVar2.a();
        }
        throw gVar.a();
    }
}
