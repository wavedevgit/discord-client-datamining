package lv;

import lv.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements ku.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final e f37734a = new e();

    private e() {
    }

    public String a(Object obj) {
        return o.a.a(this, obj);
    }

    @Override // ku.b
    public Object f(Object obj, Object obj2) {
        String a10 = a(obj);
        if (a10 != null) {
            return Integer.valueOf(a10.length());
        }
        return null;
    }
}
