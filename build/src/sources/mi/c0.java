package mi;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f36485a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f36486b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f36487c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f36485a = obj;
        this.f36486b = field;
        this.f36487c = cls;
    }

    public final Object a() {
        try {
            return this.f36487c.cast(this.f36486b.get(this.f36485a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f36486b.getName(), this.f36485a.getClass().getName(), this.f36487c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f36486b;
    }

    public final void c(Object obj) {
        try {
            this.f36486b.set(this.f36485a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f36486b.getName(), this.f36485a.getClass().getName(), this.f36487c.getName()), e10);
        }
    }
}
