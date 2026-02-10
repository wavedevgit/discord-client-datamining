package zv;

import zv.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements tu.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final e f56713a = new e();

    private e() {
    }

    public String a(Object obj) {
        return o.a.a(this, obj);
    }

    @Override // tu.b
    public Object f(Object obj, Object obj2) {
        String a10 = a(obj);
        if (a10 != null) {
            return Integer.valueOf(a10.length());
        }
        return null;
    }
}
